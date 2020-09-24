import { CommandBuilder, ICommandParent } from '../base';

/** Manage Data Lake Store account firewall rules. */
export class az_dls_account_firewall implements ICommandParent<any> {
    commandPath = "az dls account firewall";

    /**
     * Creates a firewall rule in a Data Lake Store account.
     *
     * Syntax:
     * ```
     * az dls account firewall create --account
     *                                --end-ip-address
     *                                --firewall-rule-name
     *                                --start-ip-address
     *                                [--resource-group]
     *                                [--subscription]
     * ```
     *
     * @param {string} account Name of the Data Lake Store account.
     * @param {string} endIpAddress The end of the valid ip range for the firewall rule.
     * @param {string} firewallRuleName The name of the firewall rule.
     * @param {string} startIpAddress The start of the valid ip range for the firewall rule.
     */
    az_dls_account_firewall_create(account: string, endIpAddress: string, firewallRuleName: string, startIpAddress: string): az_dls_account_firewall_create_command_builder {
        return new az_dls_account_firewall_create_command_builder(this, account, endIpAddress, firewallRuleName, startIpAddress);
    }

    /**
     * Deletes a firewall rule in a Data Lake Store account.
     *
     * Syntax:
     * ```
     * az dls account firewall delete --firewall-rule-name
     *                                [--account]
     *                                [--ids]
     *                                [--resource-group]
     *                                [--subscription]
     * ```
     *
     * @param {string} firewallRuleName The name of the firewall rule to delete.
     */
    az_dls_account_firewall_delete(firewallRuleName: string): az_dls_account_firewall_delete_command_builder {
        return new az_dls_account_firewall_delete_command_builder(this, firewallRuleName);
    }

    /**
     * Lists firewall rules in a Data Lake Store account.
     *
     * Syntax:
     * ```
     * az dls account firewall list [--account]
     *                              [--ids]
     *                              [--query-examples]
     *                              [--resource-group]
     *                              [--subscription]
     * ```
     */
    az_dls_account_firewall_list(): az_dls_account_firewall_list_command_builder {
        return new az_dls_account_firewall_list_command_builder(this);
    }

    /**
     * Get the details of a firewall rule in a Data Lake Store account.
     *
     * Syntax:
     * ```
     * az dls account firewall show --firewall-rule-name
     *                              [--account]
     *                              [--ids]
     *                              [--query-examples]
     *                              [--resource-group]
     *                              [--subscription]
     * ```
     *
     * @param {string} firewallRuleName The name of the firewall rule to retrieve.
     */
    az_dls_account_firewall_show(firewallRuleName: string): az_dls_account_firewall_show_command_builder {
        return new az_dls_account_firewall_show_command_builder(this, firewallRuleName);
    }

    /**
     * Updates a firewall rule in a Data Lake Store account.
     *
     * Syntax:
     * ```
     * az dls account firewall update --firewall-rule-name
     *                                [--account]
     *                                [--end-ip-address]
     *                                [--ids]
     *                                [--resource-group]
     *                                [--start-ip-address]
     *                                [--subscription]
     * ```
     *
     * @param {string} firewallRuleName The name of the firewall rule to update.
     */
    az_dls_account_firewall_update(firewallRuleName: string): az_dls_account_firewall_update_command_builder {
        return new az_dls_account_firewall_update_command_builder(this, firewallRuleName);
    }
}

/** Manage Data Lake Store account virtual network rules. */
export class az_dls_account_network_rule implements ICommandParent<any> {
    commandPath = "az dls account network-rule";

    /**
     * Creates a virtual network rule in a Data Lake Store account.
     *
     * Syntax:
     * ```
     * az dls account network-rule create --account-name
     *                                    --name
     *                                    --subnet
     *                                    [--resource-group]
     *                                    [--subscription]
     *                                    [--vnet-name]
     * ```
     *
     * @param {string} accountName Name of the Data Lake Store account.
     * @param {string} name The virtual network rule name.
     * @param {string} subnet The subnet name or id for the virtual network rule.
     */
    az_dls_account_network_rule_create(accountName: string, name: string, subnet: string): az_dls_account_network_rule_create_command_builder {
        return new az_dls_account_network_rule_create_command_builder(this, accountName, name, subnet);
    }

    /**
     * Deletes a virtual network rule in a Data Lake Store account.
     *
     * Syntax:
     * ```
     * az dls account network-rule delete --account-name
     *                                    [--ids]
     *                                    [--name]
     *                                    [--resource-group]
     *                                    [--subscription]
     * ```
     *
     * @param {string} accountName Name of the Data Lake Store account.
     */
    az_dls_account_network_rule_delete(accountName: string): az_dls_account_network_rule_delete_command_builder {
        return new az_dls_account_network_rule_delete_command_builder(this, accountName);
    }

    /**
     * Lists virtual network rules in a Data Lake Store account.
     *
     * Syntax:
     * ```
     * az dls account network-rule list --account-name
     *                                  [--query-examples]
     *                                  [--resource-group]
     *                                  [--subscription]
     * ```
     *
     * @param {string} accountName Name of the Data Lake Store account.
     */
    az_dls_account_network_rule_list(accountName: string): az_dls_account_network_rule_list_command_builder {
        return new az_dls_account_network_rule_list_command_builder(this, accountName);
    }

    /**
     * Get the details of a virtual network rule in a Data Lake Store account.
     *
     * Syntax:
     * ```
     * az dls account network-rule show --account-name
     *                                  [--ids]
     *                                  [--name]
     *                                  [--query-examples]
     *                                  [--resource-group]
     *                                  [--subscription]
     * ```
     *
     * @param {string} accountName Name of the Data Lake Store account.
     */
    az_dls_account_network_rule_show(accountName: string): az_dls_account_network_rule_show_command_builder {
        return new az_dls_account_network_rule_show_command_builder(this, accountName);
    }

    /**
     * Updates a virtual network rule in a Data Lake Store account.
     *
     * Syntax:
     * ```
     * az dls account network-rule update --account-name
     *                                    --subnet
     *                                    [--add]
     *                                    [--force-string]
     *                                    [--ids]
     *                                    [--name]
     *                                    [--remove]
     *                                    [--resource-group]
     *                                    [--set]
     *                                    [--subscription]
     *                                    [--vnet-name]
     * ```
     *
     * @param {string} accountName Name of the Data Lake Store account.
     * @param {string} subnet Name or ID of the subnet that allows access to DLS. If subnet name is provided, --name must be provided.
     */
    az_dls_account_network_rule_update(accountName: string, subnet: string): az_dls_account_network_rule_update_command_builder {
        return new az_dls_account_network_rule_update_command_builder(this, accountName, subnet);
    }
}

/** Manage Data Lake Store account trusted identity providers. */
export class az_dls_account_trusted_provider implements ICommandParent<any> {
    commandPath = "az dls account trusted-provider";

    /**
     * Creates or updates the specified trusted identity provider.
     *
     * Syntax:
     * ```
     * az dls account trusted-provider create --account
     *                                        --id-provider
     *                                        --trusted-id-provider-name
     *                                        [--resource-group]
     *                                        [--subscription]
     * ```
     *
     * @param {string} account Name of the Data Lake Store account.
     * @param {string} idProvider The URL of this trusted identity provider.
     * @param {string} trustedIdProviderName The name of the trusted identity provider. This is used for differentiation of providers in the account.
     */
    az_dls_account_trusted_provider_create(account: string, idProvider: string, trustedIdProviderName: string): az_dls_account_trusted_provider_create_command_builder {
        return new az_dls_account_trusted_provider_create_command_builder(this, account, idProvider, trustedIdProviderName);
    }

    /**
     * Deletes the specified trusted identity provider from the specified Data Lake Store account.
     *
     * Syntax:
     * ```
     * az dls account trusted-provider delete --trusted-id-provider-name
     *                                        [--account]
     *                                        [--ids]
     *                                        [--resource-group]
     *                                        [--subscription]
     * ```
     *
     * @param {string} trustedIdProviderName The name of the trusted identity provider to delete.
     */
    az_dls_account_trusted_provider_delete(trustedIdProviderName: string): az_dls_account_trusted_provider_delete_command_builder {
        return new az_dls_account_trusted_provider_delete_command_builder(this, trustedIdProviderName);
    }

    /**
     * Lists the Data Lake Store trusted identity providers within the specified Data Lake Store account.
     *
     * Syntax:
     * ```
     * az dls account trusted-provider list [--account]
     *                                      [--ids]
     *                                      [--query-examples]
     *                                      [--resource-group]
     *                                      [--subscription]
     * ```
     */
    az_dls_account_trusted_provider_list(): az_dls_account_trusted_provider_list_command_builder {
        return new az_dls_account_trusted_provider_list_command_builder(this);
    }

    /**
     * Gets the specified Data Lake Store trusted identity provider.
     *
     * Syntax:
     * ```
     * az dls account trusted-provider show --trusted-id-provider-name
     *                                      [--account]
     *                                      [--ids]
     *                                      [--query-examples]
     *                                      [--resource-group]
     *                                      [--subscription]
     * ```
     *
     * @param {string} trustedIdProviderName The name of the trusted identity provider to retrieve.
     */
    az_dls_account_trusted_provider_show(trustedIdProviderName: string): az_dls_account_trusted_provider_show_command_builder {
        return new az_dls_account_trusted_provider_show_command_builder(this, trustedIdProviderName);
    }

    /**
     * Updates the specified trusted identity provider.
     *
     * Syntax:
     * ```
     * az dls account trusted-provider update --trusted-id-provider-name
     *                                        [--account]
     *                                        [--id-provider]
     *                                        [--ids]
     *                                        [--resource-group]
     *                                        [--subscription]
     * ```
     *
     * @param {string} trustedIdProviderName The name of the trusted identity provider. This is used for differentiation of providers in the account.
     */
    az_dls_account_trusted_provider_update(trustedIdProviderName: string): az_dls_account_trusted_provider_update_command_builder {
        return new az_dls_account_trusted_provider_update_command_builder(this, trustedIdProviderName);
    }
}

/** Manage Data Lake Store accounts. */
export class az_dls_account implements ICommandParent<any> {
    commandPath = "az dls account";

    /**
     * Creates a Data Lake Store account.
     *
     * Syntax:
     * ```
     * az dls account create --account
     *                       [--default-group]
     *                       [--disable-encryption]
     *                       [--encryption-type {ServiceManaged, UserManaged}]
     *                       [--key-name]
     *                       [--key-vault-id]
     *                       [--key-version]
     *                       [--location]
     *                       [--resource-group]
     *                       [--subscription]
     *                       [--tags]
     *                       [--tier {Commitment_100TB, Commitment_10TB, Commitment_1PB, Commitment_1TB, Commitment_500TB, Commitment_5PB, Consumption}]
     * ```
     *
     * @param {string} account Name of the Data Lake Store account.
     */
    az_dls_account_create(account: string): az_dls_account_create_command_builder {
        return new az_dls_account_create_command_builder(this, account);
    }

    /**
     * Delete a Data Lake Store account.
     *
     * Syntax:
     * ```
     * az dls account delete [--account]
     *                       [--ids]
     *                       [--resource-group]
     *                       [--subscription]
     * ```
     */
    az_dls_account_delete(): az_dls_account_delete_command_builder {
        return new az_dls_account_delete_command_builder(this);
    }

    /**
     * Enable the use of Azure Key Vault for encryption of a Data Lake Store account.
     *
     * Syntax:
     * ```
     * az dls account enable-key-vault [--account]
     *                                 [--ids]
     *                                 [--resource-group]
     *                                 [--subscription]
     * ```
     */
    az_dls_account_enable_key_vault(): az_dls_account_enable_key_vault_command_builder {
        return new az_dls_account_enable_key_vault_command_builder(this);
    }

    /**
     * Lists available Data Lake Store accounts.
     *
     * Syntax:
     * ```
     * az dls account list [--query-examples]
     *                     [--resource-group]
     *                     [--subscription]
     * ```
     */
    az_dls_account_list(): az_dls_account_list_command_builder {
        return new az_dls_account_list_command_builder(this);
    }

    /**
     * Get the details of a Data Lake Store account.
     *
     * Syntax:
     * ```
     * az dls account show [--account]
     *                     [--ids]
     *                     [--query-examples]
     *                     [--resource-group]
     *                     [--subscription]
     * ```
     */
    az_dls_account_show(): az_dls_account_show_command_builder {
        return new az_dls_account_show_command_builder(this);
    }

    /**
     * Updates a Data Lake Store account.
     *
     * Syntax:
     * ```
     * az dls account update [--account]
     *                       [--allow-azure-ips {Disabled, Enabled}]
     *                       [--default-group]
     *                       [--firewall-state {Disabled, Enabled}]
     *                       [--ids]
     *                       [--key-version]
     *                       [--resource-group]
     *                       [--subscription]
     *                       [--tags]
     *                       [--tier {Commitment_100TB, Commitment_10TB, Commitment_1PB, Commitment_1TB, Commitment_500TB, Commitment_5PB, Consumption}]
     *                       [--trusted-id-provider-state {Disabled, Enabled}]
     * ```
     */
    az_dls_account_update(): az_dls_account_update_command_builder {
        return new az_dls_account_update_command_builder(this);
    }
}

/** Manage Data Lake Store filesystem access and permissions. */
export class az_dls_fs_access implements ICommandParent<any> {
    commandPath = "az dls fs access";

    /**
     * Remove the access control list for a file or folder.
     *
     * Syntax:
     * ```
     * az dls fs access remove-all --path
     *                             [--account]
     *                             [--default-acl]
     *                             [--ids]
     *                             [--subscription]
     * ```
     *
     * @param {string} path The path in the specified Data Lake Store account where the action should take place. In the format '/folder/file.txt', where the first '/' after the DNS indicates the root of the file system.
     */
    az_dls_fs_access_remove_all(path: string): az_dls_fs_access_remove_all_command_builder {
        return new az_dls_fs_access_remove_all_command_builder(this, path);
    }

    /**
     * Remove entries for the access control list of a file or folder.
     *
     * Syntax:
     * ```
     * az dls fs access remove-entry --acl-spec
     *                               --path
     *                               [--account]
     *                               [--ids]
     *                               [--subscription]
     * ```
     *
     * @param {string} aclSpec The ACL specification to set on the path in the format '[default:]user|group|other:[entity id or UPN]:r|-w|-x|-,[default:]user|group|other:[entity id or UPN]:r|-w|-x|-,...'.
     * @param {string} path The path in the specified Data Lake Store account where the action should take place. In the format '/folder/file.txt', where the first '/' after the DNS indicates the root of the file system.
     */
    az_dls_fs_access_remove_entry(aclSpec: string, path: string): az_dls_fs_access_remove_entry_command_builder {
        return new az_dls_fs_access_remove_entry_command_builder(this, aclSpec, path);
    }

    /**
     * Replace the existing access control list for a file or folder.
     *
     * Syntax:
     * ```
     * az dls fs access set --acl-spec
     *                      --path
     *                      [--account]
     *                      [--ids]
     *                      [--subscription]
     * ```
     *
     * @param {string} aclSpec The ACL specification to set on the path in the format '[default:]user|group|other:[entity id or UPN]:r|-w|-x|-,[default:]user|group|other:[entity id or UPN]:r|-w|-x|-,...'.
     * @param {string} path The path in the specified Data Lake Store account where the action should take place. In the format '/folder/file.txt', where the first '/' after the DNS indicates the root of the file system.
     */
    az_dls_fs_access_set(aclSpec: string, path: string): az_dls_fs_access_set_command_builder {
        return new az_dls_fs_access_set_command_builder(this, aclSpec, path);
    }

    /**
     * Update the access control list for a file or folder.
     *
     * Syntax:
     * ```
     * az dls fs access set-entry --acl-spec
     *                            --path
     *                            [--account]
     *                            [--ids]
     *                            [--subscription]
     * ```
     *
     * @param {string} aclSpec The ACL specification to set on the path in the format '[default:]user|group|other:[entity id or UPN]:r|-w|-x|-,[default:]user|group|other:[entity id or UPN]:r|-w|-x|-,...'.
     * @param {string} path The path in the specified Data Lake Store account where the action should take place. In the format '/folder/file.txt', where the first '/' after the DNS indicates the root of the file system.
     */
    az_dls_fs_access_set_entry(aclSpec: string, path: string): az_dls_fs_access_set_entry_command_builder {
        return new az_dls_fs_access_set_entry_command_builder(this, aclSpec, path);
    }

    /**
     * Set the owner information for a file or folder in a Data Lake Store account.
     *
     * Syntax:
     * ```
     * az dls fs access set-owner --path
     *                            [--account]
     *                            [--group]
     *                            [--ids]
     *                            [--owner]
     *                            [--subscription]
     * ```
     *
     * @param {string} path The path in the specified Data Lake Store account where the action should take place. In the format '/folder/file.txt', where the first '/' after the DNS indicates the root of the file system.
     */
    az_dls_fs_access_set_owner(path: string): az_dls_fs_access_set_owner_command_builder {
        return new az_dls_fs_access_set_owner_command_builder(this, path);
    }

    /**
     * Set the permissions for a file or folder in a Data Lake Store account.
     *
     * Syntax:
     * ```
     * az dls fs access set-permission --path
     *                                 --permission
     *                                 [--account]
     *                                 [--ids]
     *                                 [--subscription]
     * ```
     *
     * @param {string} path The path in the specified Data Lake Store account where the action should take place. In the format '/folder/file.txt', where the first '/' after the DNS indicates the root of the file system.
     * @param {string} permission The octal representation of the permissions for user, group and mask.
     */
    az_dls_fs_access_set_permission(path: string, permission: string): az_dls_fs_access_set_permission_command_builder {
        return new az_dls_fs_access_set_permission_command_builder(this, path, permission);
    }

    /**
     * Display the access control list (ACL).
     *
     * Syntax:
     * ```
     * az dls fs access show --path
     *                       [--account]
     *                       [--ids]
     *                       [--query-examples]
     *                       [--subscription]
     * ```
     *
     * @param {string} path The path in the specified Data Lake Store account where the action should take place. In the format '/folder/file.txt', where the first '/' after the DNS indicates the root of the file system.
     */
    az_dls_fs_access_show(path: string): az_dls_fs_access_show_command_builder {
        return new az_dls_fs_access_show_command_builder(this, path);
    }
}

/** Manage a Data Lake Store filesystem. */
export class az_dls_fs implements ICommandParent<any> {
    commandPath = "az dls fs";

    /**
     * Append content to a file in a Data Lake Store account.
     *
     * Syntax:
     * ```
     * az dls fs append --content
     *                  --path
     *                  [--account]
     *                  [--ids]
     *                  [--subscription]
     * ```
     *
     * @param {string} content Content to be appended to the file.
     * @param {string} path The path in the specified Data Lake Store account where the action should take place. In the format '/folder/file.txt', where the first '/' after the DNS indicates the root of the file system.
     */
    az_dls_fs_append(content: string, path: string): az_dls_fs_append_command_builder {
        return new az_dls_fs_append_command_builder(this, content, path);
    }

    /**
     * Creates a file or folder in a Data Lake Store account.
     *
     * Syntax:
     * ```
     * az dls fs create --account
     *                  --path
     *                  [--content]
     *                  [--folder]
     *                  [--force]
     *                  [--subscription]
     * ```
     *
     * @param {string} account Name of the Data Lake Store account.
     * @param {string} path The path in the specified Data Lake Store account where the action should take place. In the format '/folder/file.txt', where the first '/' after the DNS indicates the root of the file system.
     */
    az_dls_fs_create(account: string, path: string): az_dls_fs_create_command_builder {
        return new az_dls_fs_create_command_builder(this, account, path);
    }

    /**
     * Delete a file or folder in a Data Lake Store account.
     *
     * Syntax:
     * ```
     * az dls fs delete --path
     *                  [--account]
     *                  [--ids]
     *                  [--recurse]
     *                  [--subscription]
     * ```
     *
     * @param {string} path The path in the specified Data Lake Store account where the action should take place. In the format '/folder/file.txt', where the first '/' after the DNS indicates the root of the file system.
     */
    az_dls_fs_delete(path: string): az_dls_fs_delete_command_builder {
        return new az_dls_fs_delete_command_builder(this, path);
    }

    /**
     * Download a file or folder from a Data Lake Store account to the local machine.
     *
     * Syntax:
     * ```
     * az dls fs download --destination-path
     *                    --source-path
     *                    [--account]
     *                    [--block-size]
     *                    [--buffer-size]
     *                    [--chunk-size]
     *                    [--ids]
     *                    [--overwrite]
     *                    [--subscription]
     *                    [--thread-count]
     * ```
     *
     * @param {string} destinationPath The local path where the file or folder will be downloaded to.
     * @param {string} sourcePath The full path in the Data Lake Store filesystem to download the file or folder from.
     */
    az_dls_fs_download(destinationPath: string, sourcePath: string): az_dls_fs_download_command_builder {
        return new az_dls_fs_download_command_builder(this, destinationPath, sourcePath);
    }

    /**
     * Join files in a Data Lake Store account into one file.
     *
     * Syntax:
     * ```
     * az dls fs join --destination-path
     *                --source-paths
     *                [--account]
     *                [--force]
     *                [--ids]
     *                [--subscription]
     * ```
     *
     * @param {string} destinationPath The destination path in the Data Lake Store account.
     * @param {string} sourcePaths The space-separated list of files in the Data Lake Store account to join.
     */
    az_dls_fs_join(destinationPath: string, sourcePaths: string): az_dls_fs_join_command_builder {
        return new az_dls_fs_join_command_builder(this, destinationPath, sourcePaths);
    }

    /**
     * List the files and folders in a Data Lake Store account.
     *
     * Syntax:
     * ```
     * az dls fs list --path
     *                [--account]
     *                [--ids]
     *                [--query-examples]
     *                [--subscription]
     * ```
     *
     * @param {string} path The path in the specified Data Lake Store account where the action should take place. In the format '/folder/file.txt', where the first '/' after the DNS indicates the root of the file system.
     */
    az_dls_fs_list(path: string): az_dls_fs_list_command_builder {
        return new az_dls_fs_list_command_builder(this, path);
    }

    /**
     * Move a file or folder in a Data Lake Store account.
     *
     * Syntax:
     * ```
     * az dls fs move --destination-path
     *                --source-path
     *                [--account]
     *                [--force]
     *                [--ids]
     *                [--subscription]
     * ```
     *
     * @param {string} destinationPath The destination path in the Data Lake Store account.
     * @param {string} sourcePath The file or folder to move.
     */
    az_dls_fs_move(destinationPath: string, sourcePath: string): az_dls_fs_move_command_builder {
        return new az_dls_fs_move_command_builder(this, destinationPath, sourcePath);
    }

    /**
     * Preview the content of a file in a Data Lake Store account.
     *
     * Syntax:
     * ```
     * az dls fs preview --path
     *                   [--account]
     *                   [--force]
     *                   [--ids]
     *                   [--length]
     *                   [--offset]
     *                   [--subscription]
     * ```
     *
     * @param {string} path The path in the specified Data Lake Store account where the action should take place. In the format '/folder/file.txt', where the first '/' after the DNS indicates the root of the file system.
     */
    az_dls_fs_preview(path: string): az_dls_fs_preview_command_builder {
        return new az_dls_fs_preview_command_builder(this, path);
    }

    /**
     * Remove the expiration time for a file.
     *
     * Syntax:
     * ```
     * az dls fs remove-expiry --path
     *                         [--account]
     *                         [--ids]
     *                         [--subscription]
     * ```
     *
     * @param {string} path The path in the specified Data Lake Store account where the action should take place. In the format '/folder/file.txt', where the first '/' after the DNS indicates the root of the file system.
     */
    az_dls_fs_remove_expiry(path: string): az_dls_fs_remove_expiry_command_builder {
        return new az_dls_fs_remove_expiry_command_builder(this, path);
    }

    /**
     * Set the expiration time for a file.
     *
     * Syntax:
     * ```
     * az dls fs set-expiry --expiration-time
     *                      --path
     *                      [--account]
     *                      [--ids]
     *                      [--subscription]
     * ```
     *
     * @param {string} expirationTime The absolute value of the expiration time expressed as milliseconds since the epoch.
     * @param {string} path The path in the specified Data Lake Store account where the action should take place. In the format '/folder/file.txt', where the first '/' after the DNS indicates the root of the file system.
     */
    az_dls_fs_set_expiry(expirationTime: string, path: string): az_dls_fs_set_expiry_command_builder {
        return new az_dls_fs_set_expiry_command_builder(this, expirationTime, path);
    }

    /**
     * Get file or folder information in a Data Lake Store account.
     *
     * Syntax:
     * ```
     * az dls fs show --path
     *                [--account]
     *                [--ids]
     *                [--query-examples]
     *                [--subscription]
     * ```
     *
     * @param {string} path The path in the specified Data Lake Store account where the action should take place. In the format '/folder/file.txt', where the first '/' after the DNS indicates the root of the file system.
     */
    az_dls_fs_show(path: string): az_dls_fs_show_command_builder {
        return new az_dls_fs_show_command_builder(this, path);
    }

    /**
     * Test for the existence of a file or folder in a Data Lake Store account.
     *
     * Syntax:
     * ```
     * az dls fs test --path
     *                [--account]
     *                [--ids]
     *                [--subscription]
     * ```
     *
     * @param {string} path The path in the specified Data Lake Store account where the action should take place. In the format '/folder/file.txt', where the first '/' after the DNS indicates the root of the file system.
     */
    az_dls_fs_test(path: string): az_dls_fs_test_command_builder {
        return new az_dls_fs_test_command_builder(this, path);
    }

    /**
     * Upload a file or folder to a Data Lake Store account.
     *
     * Syntax:
     * ```
     * az dls fs upload --destination-path
     *                  --source-path
     *                  [--account]
     *                  [--block-size]
     *                  [--buffer-size]
     *                  [--chunk-size]
     *                  [--ids]
     *                  [--overwrite]
     *                  [--subscription]
     *                  [--thread-count]
     * ```
     *
     * @param {string} destinationPath The full path in the Data Lake Store filesystem to upload the file or folder to.
     * @param {string} sourcePath The path to the file or folder to upload.
     */
    az_dls_fs_upload(destinationPath: string, sourcePath: string): az_dls_fs_upload_command_builder {
        return new az_dls_fs_upload_command_builder(this, destinationPath, sourcePath);
    }
}

/** Manage Data Lake Store accounts and filesystems. */
export class az_dls {
}

/**
 * Creates a firewall rule in a Data Lake Store account.
 *
 * Syntax:
 * ```
 * az dls account firewall create --account
 *                                --end-ip-address
 *                                --firewall-rule-name
 *                                --start-ip-address
 *                                [--resource-group]
 *                                [--subscription]
 * ```
 *
 * @param {string} account Name of the Data Lake Store account.
 * @param {string} endIpAddress The end of the valid ip range for the firewall rule.
 * @param {string} firewallRuleName The name of the firewall rule.
 * @param {string} startIpAddress The start of the valid ip range for the firewall rule.
 */
class az_dls_account_firewall_create_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, account: string, endIpAddress: string, firewallRuleName: string, startIpAddress: string) {
        super(commandParent);
        this.account(account)
        this.endIpAddress(endIpAddress)
        this.firewallRuleName(firewallRuleName)
        this.startIpAddress(startIpAddress)
    }

    /** Name of the Data Lake Store account. */
    account(value: string): az_dls_account_firewall_create_command_builder {
        this.setFlag("--account", value);
        return this;
    }

    /** The end of the valid ip range for the firewall rule. */
    endIpAddress(value: string): az_dls_account_firewall_create_command_builder {
        this.setFlag("--end-ip-address", value);
        return this;
    }

    /** The name of the firewall rule. */
    firewallRuleName(value: string): az_dls_account_firewall_create_command_builder {
        this.setFlag("--firewall-rule-name", value);
        return this;
    }

    /** The start of the valid ip range for the firewall rule. */
    startIpAddress(value: string): az_dls_account_firewall_create_command_builder {
        this.setFlag("--start-ip-address", value);
        return this;
    }

    /** If not specified, will attempt to discover the resource group for the specified Data Lake Store account. */
    resourceGroup(value: string): az_dls_account_firewall_create_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_dls_account_firewall_create_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Deletes a firewall rule in a Data Lake Store account.
 *
 * Syntax:
 * ```
 * az dls account firewall delete --firewall-rule-name
 *                                [--account]
 *                                [--ids]
 *                                [--resource-group]
 *                                [--subscription]
 * ```
 *
 * @param {string} firewallRuleName The name of the firewall rule to delete.
 */
class az_dls_account_firewall_delete_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, firewallRuleName: string) {
        super(commandParent);
        this.firewallRuleName(firewallRuleName)
    }

    /** The name of the firewall rule to delete. */
    firewallRuleName(value: string): az_dls_account_firewall_delete_command_builder {
        this.setFlag("--firewall-rule-name", value);
        return this;
    }

    /** Name of the Data Lake Store account. */
    account(value: string): az_dls_account_firewall_delete_command_builder {
        this.setFlag("--account", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_dls_account_firewall_delete_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** If not specified, will attempt to discover the resource group for the specified Data Lake Store account. */
    resourceGroup(value: string): az_dls_account_firewall_delete_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_dls_account_firewall_delete_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Lists firewall rules in a Data Lake Store account.
 *
 * Syntax:
 * ```
 * az dls account firewall list [--account]
 *                              [--ids]
 *                              [--query-examples]
 *                              [--resource-group]
 *                              [--subscription]
 * ```
 */
class az_dls_account_firewall_list_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>) {
        super(commandParent);
    }

    /** Name of the Data Lake Store account. */
    account(value: string): az_dls_account_firewall_list_command_builder {
        this.setFlag("--account", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_dls_account_firewall_list_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_dls_account_firewall_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** If not specified, will attempt to discover the resource group for the specified Data Lake Store account. */
    resourceGroup(value: string): az_dls_account_firewall_list_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_dls_account_firewall_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Get the details of a firewall rule in a Data Lake Store account.
 *
 * Syntax:
 * ```
 * az dls account firewall show --firewall-rule-name
 *                              [--account]
 *                              [--ids]
 *                              [--query-examples]
 *                              [--resource-group]
 *                              [--subscription]
 * ```
 *
 * @param {string} firewallRuleName The name of the firewall rule to retrieve.
 */
class az_dls_account_firewall_show_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, firewallRuleName: string) {
        super(commandParent);
        this.firewallRuleName(firewallRuleName)
    }

    /** The name of the firewall rule to retrieve. */
    firewallRuleName(value: string): az_dls_account_firewall_show_command_builder {
        this.setFlag("--firewall-rule-name", value);
        return this;
    }

    /** Name of the Data Lake Store account. */
    account(value: string): az_dls_account_firewall_show_command_builder {
        this.setFlag("--account", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_dls_account_firewall_show_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_dls_account_firewall_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** If not specified, will attempt to discover the resource group for the specified Data Lake Store account. */
    resourceGroup(value: string): az_dls_account_firewall_show_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_dls_account_firewall_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Updates a firewall rule in a Data Lake Store account.
 *
 * Syntax:
 * ```
 * az dls account firewall update --firewall-rule-name
 *                                [--account]
 *                                [--end-ip-address]
 *                                [--ids]
 *                                [--resource-group]
 *                                [--start-ip-address]
 *                                [--subscription]
 * ```
 *
 * @param {string} firewallRuleName The name of the firewall rule to update.
 */
class az_dls_account_firewall_update_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, firewallRuleName: string) {
        super(commandParent);
        this.firewallRuleName(firewallRuleName)
    }

    /** The name of the firewall rule to update. */
    firewallRuleName(value: string): az_dls_account_firewall_update_command_builder {
        this.setFlag("--firewall-rule-name", value);
        return this;
    }

    /** Name of the Data Lake Store account. */
    account(value: string): az_dls_account_firewall_update_command_builder {
        this.setFlag("--account", value);
        return this;
    }

    /** The end IP address for the firewall rule. This can be either ipv4 or ipv6. Start and End should be in the same protocol. */
    endIpAddress(value: string): az_dls_account_firewall_update_command_builder {
        this.setFlag("--end-ip-address", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_dls_account_firewall_update_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** If not specified, will attempt to discover the resource group for the specified Data Lake Store account. */
    resourceGroup(value: string): az_dls_account_firewall_update_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** The start IP address for the firewall rule. This can be either ipv4 or ipv6. Start and End should be in the same protocol. */
    startIpAddress(value: string): az_dls_account_firewall_update_command_builder {
        this.setFlag("--start-ip-address", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_dls_account_firewall_update_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Creates a virtual network rule in a Data Lake Store account.
 *
 * Syntax:
 * ```
 * az dls account network-rule create --account-name
 *                                    --name
 *                                    --subnet
 *                                    [--resource-group]
 *                                    [--subscription]
 *                                    [--vnet-name]
 * ```
 *
 * @param {string} accountName Name of the Data Lake Store account.
 * @param {string} name The virtual network rule name.
 * @param {string} subnet The subnet name or id for the virtual network rule.
 */
class az_dls_account_network_rule_create_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, accountName: string, name: string, subnet: string) {
        super(commandParent);
        this.accountName(accountName)
        this.name(name)
        this.subnet(subnet)
    }

    /** Name of the Data Lake Store account. */
    accountName(value: string): az_dls_account_network_rule_create_command_builder {
        this.setFlag("--account-name", value);
        return this;
    }

    /** The virtual network rule name. */
    name(value: string): az_dls_account_network_rule_create_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** The subnet name or id for the virtual network rule. */
    subnet(value: string): az_dls_account_network_rule_create_command_builder {
        this.setFlag("--subnet", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_dls_account_network_rule_create_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_dls_account_network_rule_create_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** The name of the virtual network rule. */
    vnetName(value: string): az_dls_account_network_rule_create_command_builder {
        this.setFlag("--vnet-name", value);
        return this;
    }
}

/**
 * Deletes a virtual network rule in a Data Lake Store account.
 *
 * Syntax:
 * ```
 * az dls account network-rule delete --account-name
 *                                    [--ids]
 *                                    [--name]
 *                                    [--resource-group]
 *                                    [--subscription]
 * ```
 *
 * @param {string} accountName Name of the Data Lake Store account.
 */
class az_dls_account_network_rule_delete_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, accountName: string) {
        super(commandParent);
        this.accountName(accountName)
    }

    /** Name of the Data Lake Store account. */
    accountName(value: string): az_dls_account_network_rule_delete_command_builder {
        this.setFlag("--account-name", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_dls_account_network_rule_delete_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** The virtual network rule name. */
    name(value: string): az_dls_account_network_rule_delete_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_dls_account_network_rule_delete_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_dls_account_network_rule_delete_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Lists virtual network rules in a Data Lake Store account.
 *
 * Syntax:
 * ```
 * az dls account network-rule list --account-name
 *                                  [--query-examples]
 *                                  [--resource-group]
 *                                  [--subscription]
 * ```
 *
 * @param {string} accountName Name of the Data Lake Store account.
 */
class az_dls_account_network_rule_list_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, accountName: string) {
        super(commandParent);
        this.accountName(accountName)
    }

    /** Name of the Data Lake Store account. */
    accountName(value: string): az_dls_account_network_rule_list_command_builder {
        this.setFlag("--account-name", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_dls_account_network_rule_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_dls_account_network_rule_list_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_dls_account_network_rule_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Get the details of a virtual network rule in a Data Lake Store account.
 *
 * Syntax:
 * ```
 * az dls account network-rule show --account-name
 *                                  [--ids]
 *                                  [--name]
 *                                  [--query-examples]
 *                                  [--resource-group]
 *                                  [--subscription]
 * ```
 *
 * @param {string} accountName Name of the Data Lake Store account.
 */
class az_dls_account_network_rule_show_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, accountName: string) {
        super(commandParent);
        this.accountName(accountName)
    }

    /** Name of the Data Lake Store account. */
    accountName(value: string): az_dls_account_network_rule_show_command_builder {
        this.setFlag("--account-name", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_dls_account_network_rule_show_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** The virtual network rule name. */
    name(value: string): az_dls_account_network_rule_show_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_dls_account_network_rule_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_dls_account_network_rule_show_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_dls_account_network_rule_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Updates a virtual network rule in a Data Lake Store account.
 *
 * Syntax:
 * ```
 * az dls account network-rule update --account-name
 *                                    --subnet
 *                                    [--add]
 *                                    [--force-string]
 *                                    [--ids]
 *                                    [--name]
 *                                    [--remove]
 *                                    [--resource-group]
 *                                    [--set]
 *                                    [--subscription]
 *                                    [--vnet-name]
 * ```
 *
 * @param {string} accountName Name of the Data Lake Store account.
 * @param {string} subnet Name or ID of the subnet that allows access to DLS. If subnet name is provided, --name must be provided.
 */
class az_dls_account_network_rule_update_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, accountName: string, subnet: string) {
        super(commandParent);
        this.accountName(accountName)
        this.subnet(subnet)
    }

    /** Name of the Data Lake Store account. */
    accountName(value: string): az_dls_account_network_rule_update_command_builder {
        this.setFlag("--account-name", value);
        return this;
    }

    /** Name or ID of the subnet that allows access to DLS. If subnet name is provided, --name must be provided. */
    subnet(value: string): az_dls_account_network_rule_update_command_builder {
        this.setFlag("--subnet", value);
        return this;
    }

    /** Add an object to a list of objects by specifying a path and key value pairs.  Example: --add property.listProperty <key=value, string or JSON string>. */
    add(value: string): az_dls_account_network_rule_update_command_builder {
        this.setFlag("--add", value);
        return this;
    }

    /** When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON. */
    forceString(value: string): az_dls_account_network_rule_update_command_builder {
        this.setFlag("--force-string", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_dls_account_network_rule_update_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** The virtual network rule name. */
    name(value: string): az_dls_account_network_rule_update_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Remove a property or an element from a list.  Example: --remove property.list <indexToRemove> OR --remove propertyToRemove. */
    remove(value: string): az_dls_account_network_rule_update_command_builder {
        this.setFlag("--remove", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_dls_account_network_rule_update_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Update an object by specifying a property path and value to set.  Example: --set property1.property2=<value>. */
    set(value: string): az_dls_account_network_rule_update_command_builder {
        this.setFlag("--set", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_dls_account_network_rule_update_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** The virtual network rule name. */
    vnetName(value: string): az_dls_account_network_rule_update_command_builder {
        this.setFlag("--vnet-name", value);
        return this;
    }
}

/**
 * Creates or updates the specified trusted identity provider.
 *
 * Syntax:
 * ```
 * az dls account trusted-provider create --account
 *                                        --id-provider
 *                                        --trusted-id-provider-name
 *                                        [--resource-group]
 *                                        [--subscription]
 * ```
 *
 * @param {string} account Name of the Data Lake Store account.
 * @param {string} idProvider The URL of this trusted identity provider.
 * @param {string} trustedIdProviderName The name of the trusted identity provider. This is used for differentiation of providers in the account.
 */
class az_dls_account_trusted_provider_create_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, account: string, idProvider: string, trustedIdProviderName: string) {
        super(commandParent);
        this.account(account)
        this.idProvider(idProvider)
        this.trustedIdProviderName(trustedIdProviderName)
    }

    /** Name of the Data Lake Store account. */
    account(value: string): az_dls_account_trusted_provider_create_command_builder {
        this.setFlag("--account", value);
        return this;
    }

    /** The URL of this trusted identity provider. */
    idProvider(value: string): az_dls_account_trusted_provider_create_command_builder {
        this.setFlag("--id-provider", value);
        return this;
    }

    /** The name of the trusted identity provider. This is used for differentiation of providers in the account. */
    trustedIdProviderName(value: string): az_dls_account_trusted_provider_create_command_builder {
        this.setFlag("--trusted-id-provider-name", value);
        return this;
    }

    /** If not specified, will attempt to discover the resource group for the specified Data Lake Store account. */
    resourceGroup(value: string): az_dls_account_trusted_provider_create_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_dls_account_trusted_provider_create_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Deletes the specified trusted identity provider from the specified Data Lake Store account.
 *
 * Syntax:
 * ```
 * az dls account trusted-provider delete --trusted-id-provider-name
 *                                        [--account]
 *                                        [--ids]
 *                                        [--resource-group]
 *                                        [--subscription]
 * ```
 *
 * @param {string} trustedIdProviderName The name of the trusted identity provider to delete.
 */
class az_dls_account_trusted_provider_delete_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, trustedIdProviderName: string) {
        super(commandParent);
        this.trustedIdProviderName(trustedIdProviderName)
    }

    /** The name of the trusted identity provider to delete. */
    trustedIdProviderName(value: string): az_dls_account_trusted_provider_delete_command_builder {
        this.setFlag("--trusted-id-provider-name", value);
        return this;
    }

    /** Name of the Data Lake Store account. */
    account(value: string): az_dls_account_trusted_provider_delete_command_builder {
        this.setFlag("--account", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_dls_account_trusted_provider_delete_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** If not specified, will attempt to discover the resource group for the specified Data Lake Store account. */
    resourceGroup(value: string): az_dls_account_trusted_provider_delete_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_dls_account_trusted_provider_delete_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Lists the Data Lake Store trusted identity providers within the specified Data Lake Store account.
 *
 * Syntax:
 * ```
 * az dls account trusted-provider list [--account]
 *                                      [--ids]
 *                                      [--query-examples]
 *                                      [--resource-group]
 *                                      [--subscription]
 * ```
 */
class az_dls_account_trusted_provider_list_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>) {
        super(commandParent);
    }

    /** Name of the Data Lake Store account. */
    account(value: string): az_dls_account_trusted_provider_list_command_builder {
        this.setFlag("--account", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_dls_account_trusted_provider_list_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_dls_account_trusted_provider_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** If not specified, will attempt to discover the resource group for the specified Data Lake Store account. */
    resourceGroup(value: string): az_dls_account_trusted_provider_list_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_dls_account_trusted_provider_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Gets the specified Data Lake Store trusted identity provider.
 *
 * Syntax:
 * ```
 * az dls account trusted-provider show --trusted-id-provider-name
 *                                      [--account]
 *                                      [--ids]
 *                                      [--query-examples]
 *                                      [--resource-group]
 *                                      [--subscription]
 * ```
 *
 * @param {string} trustedIdProviderName The name of the trusted identity provider to retrieve.
 */
class az_dls_account_trusted_provider_show_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, trustedIdProviderName: string) {
        super(commandParent);
        this.trustedIdProviderName(trustedIdProviderName)
    }

    /** The name of the trusted identity provider to retrieve. */
    trustedIdProviderName(value: string): az_dls_account_trusted_provider_show_command_builder {
        this.setFlag("--trusted-id-provider-name", value);
        return this;
    }

    /** Name of the Data Lake Store account. */
    account(value: string): az_dls_account_trusted_provider_show_command_builder {
        this.setFlag("--account", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_dls_account_trusted_provider_show_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_dls_account_trusted_provider_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** If not specified, will attempt to discover the resource group for the specified Data Lake Store account. */
    resourceGroup(value: string): az_dls_account_trusted_provider_show_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_dls_account_trusted_provider_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Updates the specified trusted identity provider.
 *
 * Syntax:
 * ```
 * az dls account trusted-provider update --trusted-id-provider-name
 *                                        [--account]
 *                                        [--id-provider]
 *                                        [--ids]
 *                                        [--resource-group]
 *                                        [--subscription]
 * ```
 *
 * @param {string} trustedIdProviderName The name of the trusted identity provider. This is used for differentiation of providers in the account.
 */
class az_dls_account_trusted_provider_update_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, trustedIdProviderName: string) {
        super(commandParent);
        this.trustedIdProviderName(trustedIdProviderName)
    }

    /** The name of the trusted identity provider. This is used for differentiation of providers in the account. */
    trustedIdProviderName(value: string): az_dls_account_trusted_provider_update_command_builder {
        this.setFlag("--trusted-id-provider-name", value);
        return this;
    }

    /** Name of the Data Lake Store account. */
    account(value: string): az_dls_account_trusted_provider_update_command_builder {
        this.setFlag("--account", value);
        return this;
    }

    /** The URL of this trusted identity provider. */
    idProvider(value: string): az_dls_account_trusted_provider_update_command_builder {
        this.setFlag("--id-provider", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_dls_account_trusted_provider_update_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** If not specified, will attempt to discover the resource group for the specified Data Lake Store account. */
    resourceGroup(value: string): az_dls_account_trusted_provider_update_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_dls_account_trusted_provider_update_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Creates a Data Lake Store account.
 *
 * Syntax:
 * ```
 * az dls account create --account
 *                       [--default-group]
 *                       [--disable-encryption]
 *                       [--encryption-type {ServiceManaged, UserManaged}]
 *                       [--key-name]
 *                       [--key-vault-id]
 *                       [--key-version]
 *                       [--location]
 *                       [--resource-group]
 *                       [--subscription]
 *                       [--tags]
 *                       [--tier {Commitment_100TB, Commitment_10TB, Commitment_1PB, Commitment_1TB, Commitment_500TB, Commitment_5PB, Consumption}]
 * ```
 *
 * @param {string} account Name of the Data Lake Store account.
 */
class az_dls_account_create_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, account: string) {
        super(commandParent);
        this.account(account)
    }

    /** Name of the Data Lake Store account. */
    account(value: string): az_dls_account_create_command_builder {
        this.setFlag("--account", value);
        return this;
    }

    /** Name of the default group to give permissions to for freshly created files and folders in the Data Lake Store account. */
    defaultGroup(value: string): az_dls_account_create_command_builder {
        this.setFlag("--default-group", value);
        return this;
    }

    /** Indicates that the account will not have any form of encryption applied to it. */
    disableEncryption(value: string): az_dls_account_create_command_builder {
        this.setFlag("--disable-encryption", value);
        return this;
    }

    /** Indicates what type of encryption to provision the account with. By default, encryption is ServiceManaged. If no encryption is desired, it must be explicitly set with the --disable-encryption flag. */
    encryptionType(value: 'ServiceManaged' | 'UserManaged'): az_dls_account_create_command_builder {
        this.setFlag("--encryption-type", value);
        return this;
    }

    /** Key name for the user-assigned encryption type. */
    keyName(value: string): az_dls_account_create_command_builder {
        this.setFlag("--key-name", value);
        return this;
    }

    /** Key vault for the user-assigned encryption type. */
    keyVaultId(value: string): az_dls_account_create_command_builder {
        this.setFlag("--key-vault-id", value);
        return this;
    }

    /** Key version for the user-assigned encryption type. */
    keyVersion(value: string): az_dls_account_create_command_builder {
        this.setFlag("--key-version", value);
        return this;
    }

    /** Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`. */
    location(value: string): az_dls_account_create_command_builder {
        this.setFlag("--location", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_dls_account_create_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_dls_account_create_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    tags(value: string): az_dls_account_create_command_builder {
        this.setFlag("--tags", value);
        return this;
    }

    /** The desired commitment tier for this account to use. */
    tier(value: 'Commitment_100TB' | 'Commitment_10TB' | 'Commitment_1PB' | 'Commitment_1TB' | 'Commitment_500TB' | 'Commitment_5PB' | 'Consumption'): az_dls_account_create_command_builder {
        this.setFlag("--tier", value);
        return this;
    }
}

/**
 * Delete a Data Lake Store account.
 *
 * Syntax:
 * ```
 * az dls account delete [--account]
 *                       [--ids]
 *                       [--resource-group]
 *                       [--subscription]
 * ```
 */
class az_dls_account_delete_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>) {
        super(commandParent);
    }

    /** Name of the Data Lake Store account. */
    account(value: string): az_dls_account_delete_command_builder {
        this.setFlag("--account", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_dls_account_delete_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** If not specified, will attempt to discover the resource group for the specified Data Lake Store account. */
    resourceGroup(value: string): az_dls_account_delete_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_dls_account_delete_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Enable the use of Azure Key Vault for encryption of a Data Lake Store account.
 *
 * Syntax:
 * ```
 * az dls account enable-key-vault [--account]
 *                                 [--ids]
 *                                 [--resource-group]
 *                                 [--subscription]
 * ```
 */
class az_dls_account_enable_key_vault_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>) {
        super(commandParent);
    }

    /** Name of the Data Lake Store account. */
    account(value: string): az_dls_account_enable_key_vault_command_builder {
        this.setFlag("--account", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_dls_account_enable_key_vault_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** If not specified, will attempt to discover the resource group for the specified Data Lake Store account. */
    resourceGroup(value: string): az_dls_account_enable_key_vault_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_dls_account_enable_key_vault_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Lists available Data Lake Store accounts.
 *
 * Syntax:
 * ```
 * az dls account list [--query-examples]
 *                     [--resource-group]
 *                     [--subscription]
 * ```
 */
class az_dls_account_list_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>) {
        super(commandParent);
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_dls_account_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_dls_account_list_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_dls_account_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Get the details of a Data Lake Store account.
 *
 * Syntax:
 * ```
 * az dls account show [--account]
 *                     [--ids]
 *                     [--query-examples]
 *                     [--resource-group]
 *                     [--subscription]
 * ```
 */
class az_dls_account_show_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>) {
        super(commandParent);
    }

    /** Name of the Data Lake Store account. */
    account(value: string): az_dls_account_show_command_builder {
        this.setFlag("--account", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_dls_account_show_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_dls_account_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** If not specified, will attempt to discover the resource group for the specified Data Lake Store account. */
    resourceGroup(value: string): az_dls_account_show_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_dls_account_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Updates a Data Lake Store account.
 *
 * Syntax:
 * ```
 * az dls account update [--account]
 *                       [--allow-azure-ips {Disabled, Enabled}]
 *                       [--default-group]
 *                       [--firewall-state {Disabled, Enabled}]
 *                       [--ids]
 *                       [--key-version]
 *                       [--resource-group]
 *                       [--subscription]
 *                       [--tags]
 *                       [--tier {Commitment_100TB, Commitment_10TB, Commitment_1PB, Commitment_1TB, Commitment_500TB, Commitment_5PB, Consumption}]
 *                       [--trusted-id-provider-state {Disabled, Enabled}]
 * ```
 */
class az_dls_account_update_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>) {
        super(commandParent);
    }

    /** Name of the Data Lake Store account. */
    account(value: string): az_dls_account_update_command_builder {
        this.setFlag("--account", value);
        return this;
    }

    /** Allow/block Azure originating IPs through the firewall. */
    allowAzureIps(value: 'Disabled' | 'Enabled'): az_dls_account_update_command_builder {
        this.setFlag("--allow-azure-ips", value);
        return this;
    }

    /** Name of the default group to give permissions to for freshly created files and folders in the Data Lake Store account. */
    defaultGroup(value: string): az_dls_account_update_command_builder {
        this.setFlag("--default-group", value);
        return this;
    }

    /** Enable/disable existing firewall rules. */
    firewallState(value: 'Disabled' | 'Enabled'): az_dls_account_update_command_builder {
        this.setFlag("--firewall-state", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_dls_account_update_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Key version for the user-assigned encryption type. */
    keyVersion(value: string): az_dls_account_update_command_builder {
        this.setFlag("--key-version", value);
        return this;
    }

    /** If not specified, will attempt to discover the resource group for the specified Data Lake Store account. */
    resourceGroup(value: string): az_dls_account_update_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_dls_account_update_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    tags(value: string): az_dls_account_update_command_builder {
        this.setFlag("--tags", value);
        return this;
    }

    /** The desired commitment tier for this account to use. */
    tier(value: 'Commitment_100TB' | 'Commitment_10TB' | 'Commitment_1PB' | 'Commitment_1TB' | 'Commitment_500TB' | 'Commitment_5PB' | 'Consumption'): az_dls_account_update_command_builder {
        this.setFlag("--tier", value);
        return this;
    }

    /** Enable/disable the existing trusted ID providers. */
    trustedIdProviderState(value: 'Disabled' | 'Enabled'): az_dls_account_update_command_builder {
        this.setFlag("--trusted-id-provider-state", value);
        return this;
    }
}

/**
 * Remove the access control list for a file or folder.
 *
 * Syntax:
 * ```
 * az dls fs access remove-all --path
 *                             [--account]
 *                             [--default-acl]
 *                             [--ids]
 *                             [--subscription]
 * ```
 *
 * @param {string} path The path in the specified Data Lake Store account where the action should take place. In the format '/folder/file.txt', where the first '/' after the DNS indicates the root of the file system.
 */
class az_dls_fs_access_remove_all_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, path: string) {
        super(commandParent);
        this.path(path)
    }

    /** The path in the specified Data Lake Store account where the action should take place. In the format '/folder/file.txt', where the first '/' after the DNS indicates the root of the file system. */
    path(value: string): az_dls_fs_access_remove_all_command_builder {
        this.setFlag("--path", value);
        return this;
    }

    /** Name of the Data Lake Store account. */
    account(value: string): az_dls_fs_access_remove_all_command_builder {
        this.setFlag("--account", value);
        return this;
    }

    /** A switch that, if specified, indicates that the remove ACL operation should remove the default ACL of the folder. Otherwise the regular ACL is removed. */
    defaultAcl(value: string): az_dls_fs_access_remove_all_command_builder {
        this.setFlag("--default-acl", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_dls_fs_access_remove_all_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_dls_fs_access_remove_all_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Remove entries for the access control list of a file or folder.
 *
 * Syntax:
 * ```
 * az dls fs access remove-entry --acl-spec
 *                               --path
 *                               [--account]
 *                               [--ids]
 *                               [--subscription]
 * ```
 *
 * @param {string} aclSpec The ACL specification to set on the path in the format '[default:]user|group|other:[entity id or UPN]:r|-w|-x|-,[default:]user|group|other:[entity id or UPN]:r|-w|-x|-,...'.
 * @param {string} path The path in the specified Data Lake Store account where the action should take place. In the format '/folder/file.txt', where the first '/' after the DNS indicates the root of the file system.
 */
class az_dls_fs_access_remove_entry_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, aclSpec: string, path: string) {
        super(commandParent);
        this.aclSpec(aclSpec)
        this.path(path)
    }

    /** The ACL specification to set on the path in the format '[default:]user|group|other:[entity id or UPN]:r|-w|-x|-,[default:]user|group|other:[entity id or UPN]:r|-w|-x|-,...'. */
    aclSpec(value: string): az_dls_fs_access_remove_entry_command_builder {
        this.setFlag("--acl-spec", value);
        return this;
    }

    /** The path in the specified Data Lake Store account where the action should take place. In the format '/folder/file.txt', where the first '/' after the DNS indicates the root of the file system. */
    path(value: string): az_dls_fs_access_remove_entry_command_builder {
        this.setFlag("--path", value);
        return this;
    }

    /** Name of the Data Lake Store account. */
    account(value: string): az_dls_fs_access_remove_entry_command_builder {
        this.setFlag("--account", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_dls_fs_access_remove_entry_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_dls_fs_access_remove_entry_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Replace the existing access control list for a file or folder.
 *
 * Syntax:
 * ```
 * az dls fs access set --acl-spec
 *                      --path
 *                      [--account]
 *                      [--ids]
 *                      [--subscription]
 * ```
 *
 * @param {string} aclSpec The ACL specification to set on the path in the format '[default:]user|group|other:[entity id or UPN]:r|-w|-x|-,[default:]user|group|other:[entity id or UPN]:r|-w|-x|-,...'.
 * @param {string} path The path in the specified Data Lake Store account where the action should take place. In the format '/folder/file.txt', where the first '/' after the DNS indicates the root of the file system.
 */
class az_dls_fs_access_set_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, aclSpec: string, path: string) {
        super(commandParent);
        this.aclSpec(aclSpec)
        this.path(path)
    }

    /** The ACL specification to set on the path in the format '[default:]user|group|other:[entity id or UPN]:r|-w|-x|-,[default:]user|group|other:[entity id or UPN]:r|-w|-x|-,...'. */
    aclSpec(value: string): az_dls_fs_access_set_command_builder {
        this.setFlag("--acl-spec", value);
        return this;
    }

    /** The path in the specified Data Lake Store account where the action should take place. In the format '/folder/file.txt', where the first '/' after the DNS indicates the root of the file system. */
    path(value: string): az_dls_fs_access_set_command_builder {
        this.setFlag("--path", value);
        return this;
    }

    /** Name of the Data Lake Store account. */
    account(value: string): az_dls_fs_access_set_command_builder {
        this.setFlag("--account", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_dls_fs_access_set_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_dls_fs_access_set_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Update the access control list for a file or folder.
 *
 * Syntax:
 * ```
 * az dls fs access set-entry --acl-spec
 *                            --path
 *                            [--account]
 *                            [--ids]
 *                            [--subscription]
 * ```
 *
 * @param {string} aclSpec The ACL specification to set on the path in the format '[default:]user|group|other:[entity id or UPN]:r|-w|-x|-,[default:]user|group|other:[entity id or UPN]:r|-w|-x|-,...'.
 * @param {string} path The path in the specified Data Lake Store account where the action should take place. In the format '/folder/file.txt', where the first '/' after the DNS indicates the root of the file system.
 */
class az_dls_fs_access_set_entry_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, aclSpec: string, path: string) {
        super(commandParent);
        this.aclSpec(aclSpec)
        this.path(path)
    }

    /** The ACL specification to set on the path in the format '[default:]user|group|other:[entity id or UPN]:r|-w|-x|-,[default:]user|group|other:[entity id or UPN]:r|-w|-x|-,...'. */
    aclSpec(value: string): az_dls_fs_access_set_entry_command_builder {
        this.setFlag("--acl-spec", value);
        return this;
    }

    /** The path in the specified Data Lake Store account where the action should take place. In the format '/folder/file.txt', where the first '/' after the DNS indicates the root of the file system. */
    path(value: string): az_dls_fs_access_set_entry_command_builder {
        this.setFlag("--path", value);
        return this;
    }

    /** Name of the Data Lake Store account. */
    account(value: string): az_dls_fs_access_set_entry_command_builder {
        this.setFlag("--account", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_dls_fs_access_set_entry_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_dls_fs_access_set_entry_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Set the owner information for a file or folder in a Data Lake Store account.
 *
 * Syntax:
 * ```
 * az dls fs access set-owner --path
 *                            [--account]
 *                            [--group]
 *                            [--ids]
 *                            [--owner]
 *                            [--subscription]
 * ```
 *
 * @param {string} path The path in the specified Data Lake Store account where the action should take place. In the format '/folder/file.txt', where the first '/' after the DNS indicates the root of the file system.
 */
class az_dls_fs_access_set_owner_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, path: string) {
        super(commandParent);
        this.path(path)
    }

    /** The path in the specified Data Lake Store account where the action should take place. In the format '/folder/file.txt', where the first '/' after the DNS indicates the root of the file system. */
    path(value: string): az_dls_fs_access_set_owner_command_builder {
        this.setFlag("--path", value);
        return this;
    }

    /** Name of the Data Lake Store account. */
    account(value: string): az_dls_fs_access_set_owner_command_builder {
        this.setFlag("--account", value);
        return this;
    }

    /** The group Azure Active Directory object ID or user principal name to set as the owning group. */
    group(value: string): az_dls_fs_access_set_owner_command_builder {
        this.setFlag("--group", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_dls_fs_access_set_owner_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** The user Azure Active Directory object ID or user principal name to set as the owner. */
    owner(value: string): az_dls_fs_access_set_owner_command_builder {
        this.setFlag("--owner", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_dls_fs_access_set_owner_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Set the permissions for a file or folder in a Data Lake Store account.
 *
 * Syntax:
 * ```
 * az dls fs access set-permission --path
 *                                 --permission
 *                                 [--account]
 *                                 [--ids]
 *                                 [--subscription]
 * ```
 *
 * @param {string} path The path in the specified Data Lake Store account where the action should take place. In the format '/folder/file.txt', where the first '/' after the DNS indicates the root of the file system.
 * @param {string} permission The octal representation of the permissions for user, group and mask.
 */
class az_dls_fs_access_set_permission_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, path: string, permission: string) {
        super(commandParent);
        this.path(path)
        this.permission(permission)
    }

    /** The path in the specified Data Lake Store account where the action should take place. In the format '/folder/file.txt', where the first '/' after the DNS indicates the root of the file system. */
    path(value: string): az_dls_fs_access_set_permission_command_builder {
        this.setFlag("--path", value);
        return this;
    }

    /** The octal representation of the permissions for user, group and mask. */
    permission(value: string): az_dls_fs_access_set_permission_command_builder {
        this.setFlag("--permission", value);
        return this;
    }

    /** Name of the Data Lake Store account. */
    account(value: string): az_dls_fs_access_set_permission_command_builder {
        this.setFlag("--account", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_dls_fs_access_set_permission_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_dls_fs_access_set_permission_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Display the access control list (ACL).
 *
 * Syntax:
 * ```
 * az dls fs access show --path
 *                       [--account]
 *                       [--ids]
 *                       [--query-examples]
 *                       [--subscription]
 * ```
 *
 * @param {string} path The path in the specified Data Lake Store account where the action should take place. In the format '/folder/file.txt', where the first '/' after the DNS indicates the root of the file system.
 */
class az_dls_fs_access_show_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, path: string) {
        super(commandParent);
        this.path(path)
    }

    /** The path in the specified Data Lake Store account where the action should take place. In the format '/folder/file.txt', where the first '/' after the DNS indicates the root of the file system. */
    path(value: string): az_dls_fs_access_show_command_builder {
        this.setFlag("--path", value);
        return this;
    }

    /** Name of the Data Lake Store account. */
    account(value: string): az_dls_fs_access_show_command_builder {
        this.setFlag("--account", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_dls_fs_access_show_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_dls_fs_access_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_dls_fs_access_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Append content to a file in a Data Lake Store account.
 *
 * Syntax:
 * ```
 * az dls fs append --content
 *                  --path
 *                  [--account]
 *                  [--ids]
 *                  [--subscription]
 * ```
 *
 * @param {string} content Content to be appended to the file.
 * @param {string} path The path in the specified Data Lake Store account where the action should take place. In the format '/folder/file.txt', where the first '/' after the DNS indicates the root of the file system.
 */
class az_dls_fs_append_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, content: string, path: string) {
        super(commandParent);
        this.content(content)
        this.path(path)
    }

    /** Content to be appended to the file. */
    content(value: string): az_dls_fs_append_command_builder {
        this.setFlag("--content", value);
        return this;
    }

    /** The path in the specified Data Lake Store account where the action should take place. In the format '/folder/file.txt', where the first '/' after the DNS indicates the root of the file system. */
    path(value: string): az_dls_fs_append_command_builder {
        this.setFlag("--path", value);
        return this;
    }

    /** Name of the Data Lake Store account. */
    account(value: string): az_dls_fs_append_command_builder {
        this.setFlag("--account", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_dls_fs_append_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_dls_fs_append_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Creates a file or folder in a Data Lake Store account.
 *
 * Syntax:
 * ```
 * az dls fs create --account
 *                  --path
 *                  [--content]
 *                  [--folder]
 *                  [--force]
 *                  [--subscription]
 * ```
 *
 * @param {string} account Name of the Data Lake Store account.
 * @param {string} path The path in the specified Data Lake Store account where the action should take place. In the format '/folder/file.txt', where the first '/' after the DNS indicates the root of the file system.
 */
class az_dls_fs_create_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, account: string, path: string) {
        super(commandParent);
        this.account(account)
        this.path(path)
    }

    /** Name of the Data Lake Store account. */
    account(value: string): az_dls_fs_create_command_builder {
        this.setFlag("--account", value);
        return this;
    }

    /** The path in the specified Data Lake Store account where the action should take place. In the format '/folder/file.txt', where the first '/' after the DNS indicates the root of the file system. */
    path(value: string): az_dls_fs_create_command_builder {
        this.setFlag("--path", value);
        return this;
    }

    /** Content for the file to contain upon creation. */
    content(value: string): az_dls_fs_create_command_builder {
        this.setFlag("--content", value);
        return this;
    }

    /** Indicates that this new item is a folder and not a file. */
    folder(value: string): az_dls_fs_create_command_builder {
        this.setFlag("--folder", value);
        return this;
    }

    /** Indicates that, if the file or folder exists, it should be overwritten. */
    force(value: string): az_dls_fs_create_command_builder {
        this.setFlag("--force", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_dls_fs_create_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Delete a file or folder in a Data Lake Store account.
 *
 * Syntax:
 * ```
 * az dls fs delete --path
 *                  [--account]
 *                  [--ids]
 *                  [--recurse]
 *                  [--subscription]
 * ```
 *
 * @param {string} path The path in the specified Data Lake Store account where the action should take place. In the format '/folder/file.txt', where the first '/' after the DNS indicates the root of the file system.
 */
class az_dls_fs_delete_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, path: string) {
        super(commandParent);
        this.path(path)
    }

    /** The path in the specified Data Lake Store account where the action should take place. In the format '/folder/file.txt', where the first '/' after the DNS indicates the root of the file system. */
    path(value: string): az_dls_fs_delete_command_builder {
        this.setFlag("--path", value);
        return this;
    }

    /** Name of the Data Lake Store account. */
    account(value: string): az_dls_fs_delete_command_builder {
        this.setFlag("--account", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_dls_fs_delete_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Indicates this should be a recursive delete of the folder. */
    recurse(value: string): az_dls_fs_delete_command_builder {
        this.setFlag("--recurse", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_dls_fs_delete_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Download a file or folder from a Data Lake Store account to the local machine.
 *
 * Syntax:
 * ```
 * az dls fs download --destination-path
 *                    --source-path
 *                    [--account]
 *                    [--block-size]
 *                    [--buffer-size]
 *                    [--chunk-size]
 *                    [--ids]
 *                    [--overwrite]
 *                    [--subscription]
 *                    [--thread-count]
 * ```
 *
 * @param {string} destinationPath The local path where the file or folder will be downloaded to.
 * @param {string} sourcePath The full path in the Data Lake Store filesystem to download the file or folder from.
 */
class az_dls_fs_download_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, destinationPath: string, sourcePath: string) {
        super(commandParent);
        this.destinationPath(destinationPath)
        this.sourcePath(sourcePath)
    }

    /** The local path where the file or folder will be downloaded to. */
    destinationPath(value: string): az_dls_fs_download_command_builder {
        this.setFlag("--destination-path", value);
        return this;
    }

    /** The full path in the Data Lake Store filesystem to download the file or folder from. */
    sourcePath(value: string): az_dls_fs_download_command_builder {
        this.setFlag("--source-path", value);
        return this;
    }

    /** Name of the Data Lake Store account. */
    account(value: string): az_dls_fs_download_command_builder {
        this.setFlag("--account", value);
        return this;
    }

    /** Size of a block, in bytes. */
    blockSize(value: string): az_dls_fs_download_command_builder {
        this.setFlag("--block-size", value);
        return this;
    }

    /** Size of the transfer buffer, in bytes. */
    bufferSize(value: string): az_dls_fs_download_command_builder {
        this.setFlag("--buffer-size", value);
        return this;
    }

    /** Size of a chunk, in bytes. */
    chunkSize(value: string): az_dls_fs_download_command_builder {
        this.setFlag("--chunk-size", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_dls_fs_download_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Indicates that, if the destination file or folder exists, it should be overwritten. */
    overwrite(value: string): az_dls_fs_download_command_builder {
        this.setFlag("--overwrite", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_dls_fs_download_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Parallelism of the download. Default: The number of cores in the local machine. */
    threadCount(value: string): az_dls_fs_download_command_builder {
        this.setFlag("--thread-count", value);
        return this;
    }
}

/**
 * Join files in a Data Lake Store account into one file.
 *
 * Syntax:
 * ```
 * az dls fs join --destination-path
 *                --source-paths
 *                [--account]
 *                [--force]
 *                [--ids]
 *                [--subscription]
 * ```
 *
 * @param {string} destinationPath The destination path in the Data Lake Store account.
 * @param {string} sourcePaths The space-separated list of files in the Data Lake Store account to join.
 */
class az_dls_fs_join_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, destinationPath: string, sourcePaths: string) {
        super(commandParent);
        this.destinationPath(destinationPath)
        this.sourcePaths(sourcePaths)
    }

    /** The destination path in the Data Lake Store account. */
    destinationPath(value: string): az_dls_fs_join_command_builder {
        this.setFlag("--destination-path", value);
        return this;
    }

    /** The space-separated list of files in the Data Lake Store account to join. */
    sourcePaths(value: string): az_dls_fs_join_command_builder {
        this.setFlag("--source-paths", value);
        return this;
    }

    /** Name of the Data Lake Store account. */
    account(value: string): az_dls_fs_join_command_builder {
        this.setFlag("--account", value);
        return this;
    }

    /** Indicates that, if the destination file already exists, it should be overwritten. */
    force(value: string): az_dls_fs_join_command_builder {
        this.setFlag("--force", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_dls_fs_join_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_dls_fs_join_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * List the files and folders in a Data Lake Store account.
 *
 * Syntax:
 * ```
 * az dls fs list --path
 *                [--account]
 *                [--ids]
 *                [--query-examples]
 *                [--subscription]
 * ```
 *
 * @param {string} path The path in the specified Data Lake Store account where the action should take place. In the format '/folder/file.txt', where the first '/' after the DNS indicates the root of the file system.
 */
class az_dls_fs_list_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, path: string) {
        super(commandParent);
        this.path(path)
    }

    /** The path in the specified Data Lake Store account where the action should take place. In the format '/folder/file.txt', where the first '/' after the DNS indicates the root of the file system. */
    path(value: string): az_dls_fs_list_command_builder {
        this.setFlag("--path", value);
        return this;
    }

    /** Name of the Data Lake Store account. */
    account(value: string): az_dls_fs_list_command_builder {
        this.setFlag("--account", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_dls_fs_list_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_dls_fs_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_dls_fs_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Move a file or folder in a Data Lake Store account.
 *
 * Syntax:
 * ```
 * az dls fs move --destination-path
 *                --source-path
 *                [--account]
 *                [--force]
 *                [--ids]
 *                [--subscription]
 * ```
 *
 * @param {string} destinationPath The destination path in the Data Lake Store account.
 * @param {string} sourcePath The file or folder to move.
 */
class az_dls_fs_move_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, destinationPath: string, sourcePath: string) {
        super(commandParent);
        this.destinationPath(destinationPath)
        this.sourcePath(sourcePath)
    }

    /** The destination path in the Data Lake Store account. */
    destinationPath(value: string): az_dls_fs_move_command_builder {
        this.setFlag("--destination-path", value);
        return this;
    }

    /** The file or folder to move. */
    sourcePath(value: string): az_dls_fs_move_command_builder {
        this.setFlag("--source-path", value);
        return this;
    }

    /** Name of the Data Lake Store account. */
    account(value: string): az_dls_fs_move_command_builder {
        this.setFlag("--account", value);
        return this;
    }

    /** Indicates that, if the destination file or folder already exists, it should be overwritten and replaced with the file or folder being moved. */
    force(value: string): az_dls_fs_move_command_builder {
        this.setFlag("--force", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_dls_fs_move_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_dls_fs_move_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Preview the content of a file in a Data Lake Store account.
 *
 * Syntax:
 * ```
 * az dls fs preview --path
 *                   [--account]
 *                   [--force]
 *                   [--ids]
 *                   [--length]
 *                   [--offset]
 *                   [--subscription]
 * ```
 *
 * @param {string} path The path in the specified Data Lake Store account where the action should take place. In the format '/folder/file.txt', where the first '/' after the DNS indicates the root of the file system.
 */
class az_dls_fs_preview_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, path: string) {
        super(commandParent);
        this.path(path)
    }

    /** The path in the specified Data Lake Store account where the action should take place. In the format '/folder/file.txt', where the first '/' after the DNS indicates the root of the file system. */
    path(value: string): az_dls_fs_preview_command_builder {
        this.setFlag("--path", value);
        return this;
    }

    /** Name of the Data Lake Store account. */
    account(value: string): az_dls_fs_preview_command_builder {
        this.setFlag("--account", value);
        return this;
    }

    /** Indicates that, if the preview is larger than 1MB, still retrieve it. This can potentially be very slow, depending on how large the file is. */
    force(value: string): az_dls_fs_preview_command_builder {
        this.setFlag("--force", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_dls_fs_preview_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** The amount of data to preview in bytes. */
    length(value: string): az_dls_fs_preview_command_builder {
        this.setFlag("--length", value);
        return this;
    }

    /** The position in bytes to start the preview from. */
    offset(value: string): az_dls_fs_preview_command_builder {
        this.setFlag("--offset", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_dls_fs_preview_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Remove the expiration time for a file.
 *
 * Syntax:
 * ```
 * az dls fs remove-expiry --path
 *                         [--account]
 *                         [--ids]
 *                         [--subscription]
 * ```
 *
 * @param {string} path The path in the specified Data Lake Store account where the action should take place. In the format '/folder/file.txt', where the first '/' after the DNS indicates the root of the file system.
 */
class az_dls_fs_remove_expiry_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, path: string) {
        super(commandParent);
        this.path(path)
    }

    /** The path in the specified Data Lake Store account where the action should take place. In the format '/folder/file.txt', where the first '/' after the DNS indicates the root of the file system. */
    path(value: string): az_dls_fs_remove_expiry_command_builder {
        this.setFlag("--path", value);
        return this;
    }

    /** Name of the Data Lake Store account. */
    account(value: string): az_dls_fs_remove_expiry_command_builder {
        this.setFlag("--account", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_dls_fs_remove_expiry_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_dls_fs_remove_expiry_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Set the expiration time for a file.
 *
 * Syntax:
 * ```
 * az dls fs set-expiry --expiration-time
 *                      --path
 *                      [--account]
 *                      [--ids]
 *                      [--subscription]
 * ```
 *
 * @param {string} expirationTime The absolute value of the expiration time expressed as milliseconds since the epoch.
 * @param {string} path The path in the specified Data Lake Store account where the action should take place. In the format '/folder/file.txt', where the first '/' after the DNS indicates the root of the file system.
 */
class az_dls_fs_set_expiry_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, expirationTime: string, path: string) {
        super(commandParent);
        this.expirationTime(expirationTime)
        this.path(path)
    }

    /** The absolute value of the expiration time expressed as milliseconds since the epoch. */
    expirationTime(value: string): az_dls_fs_set_expiry_command_builder {
        this.setFlag("--expiration-time", value);
        return this;
    }

    /** The path in the specified Data Lake Store account where the action should take place. In the format '/folder/file.txt', where the first '/' after the DNS indicates the root of the file system. */
    path(value: string): az_dls_fs_set_expiry_command_builder {
        this.setFlag("--path", value);
        return this;
    }

    /** Name of the Data Lake Store account. */
    account(value: string): az_dls_fs_set_expiry_command_builder {
        this.setFlag("--account", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_dls_fs_set_expiry_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_dls_fs_set_expiry_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Get file or folder information in a Data Lake Store account.
 *
 * Syntax:
 * ```
 * az dls fs show --path
 *                [--account]
 *                [--ids]
 *                [--query-examples]
 *                [--subscription]
 * ```
 *
 * @param {string} path The path in the specified Data Lake Store account where the action should take place. In the format '/folder/file.txt', where the first '/' after the DNS indicates the root of the file system.
 */
class az_dls_fs_show_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, path: string) {
        super(commandParent);
        this.path(path)
    }

    /** The path in the specified Data Lake Store account where the action should take place. In the format '/folder/file.txt', where the first '/' after the DNS indicates the root of the file system. */
    path(value: string): az_dls_fs_show_command_builder {
        this.setFlag("--path", value);
        return this;
    }

    /** Name of the Data Lake Store account. */
    account(value: string): az_dls_fs_show_command_builder {
        this.setFlag("--account", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_dls_fs_show_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_dls_fs_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_dls_fs_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Test for the existence of a file or folder in a Data Lake Store account.
 *
 * Syntax:
 * ```
 * az dls fs test --path
 *                [--account]
 *                [--ids]
 *                [--subscription]
 * ```
 *
 * @param {string} path The path in the specified Data Lake Store account where the action should take place. In the format '/folder/file.txt', where the first '/' after the DNS indicates the root of the file system.
 */
class az_dls_fs_test_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, path: string) {
        super(commandParent);
        this.path(path)
    }

    /** The path in the specified Data Lake Store account where the action should take place. In the format '/folder/file.txt', where the first '/' after the DNS indicates the root of the file system. */
    path(value: string): az_dls_fs_test_command_builder {
        this.setFlag("--path", value);
        return this;
    }

    /** Name of the Data Lake Store account. */
    account(value: string): az_dls_fs_test_command_builder {
        this.setFlag("--account", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_dls_fs_test_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_dls_fs_test_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Upload a file or folder to a Data Lake Store account.
 *
 * Syntax:
 * ```
 * az dls fs upload --destination-path
 *                  --source-path
 *                  [--account]
 *                  [--block-size]
 *                  [--buffer-size]
 *                  [--chunk-size]
 *                  [--ids]
 *                  [--overwrite]
 *                  [--subscription]
 *                  [--thread-count]
 * ```
 *
 * @param {string} destinationPath The full path in the Data Lake Store filesystem to upload the file or folder to.
 * @param {string} sourcePath The path to the file or folder to upload.
 */
class az_dls_fs_upload_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, destinationPath: string, sourcePath: string) {
        super(commandParent);
        this.destinationPath(destinationPath)
        this.sourcePath(sourcePath)
    }

    /** The full path in the Data Lake Store filesystem to upload the file or folder to. */
    destinationPath(value: string): az_dls_fs_upload_command_builder {
        this.setFlag("--destination-path", value);
        return this;
    }

    /** The path to the file or folder to upload. */
    sourcePath(value: string): az_dls_fs_upload_command_builder {
        this.setFlag("--source-path", value);
        return this;
    }

    /** Name of the Data Lake Store account. */
    account(value: string): az_dls_fs_upload_command_builder {
        this.setFlag("--account", value);
        return this;
    }

    /** Size of a block, in bytes. */
    blockSize(value: string): az_dls_fs_upload_command_builder {
        this.setFlag("--block-size", value);
        return this;
    }

    /** Size of the transfer buffer, in bytes. */
    bufferSize(value: string): az_dls_fs_upload_command_builder {
        this.setFlag("--buffer-size", value);
        return this;
    }

    /** Size of a chunk, in bytes. */
    chunkSize(value: string): az_dls_fs_upload_command_builder {
        this.setFlag("--chunk-size", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_dls_fs_upload_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Indicates that, if the destination file or folder exists, it should be overwritten. */
    overwrite(value: string): az_dls_fs_upload_command_builder {
        this.setFlag("--overwrite", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_dls_fs_upload_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Parallelism of the upload. Default: The number of cores in the local machine. */
    threadCount(value: string): az_dls_fs_upload_command_builder {
        this.setFlag("--thread-count", value);
        return this;
    }
}
