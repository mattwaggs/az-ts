import { CommandBuilder } from '../base';
import { az_dls_account_firewall_create_command_result } from './models/az_dls_account_firewall_create_command_result';
import { az_dls_account_firewall_delete_command_result } from './models/az_dls_account_firewall_delete_command_result';
import { az_dls_account_firewall_list_command_result } from './models/az_dls_account_firewall_list_command_result';
import { az_dls_account_firewall_show_command_result } from './models/az_dls_account_firewall_show_command_result';
import { az_dls_account_firewall_update_command_result } from './models/az_dls_account_firewall_update_command_result';
import { az_dls_account_network_rule_create_command_result } from './models/az_dls_account_network_rule_create_command_result';
import { az_dls_account_network_rule_delete_command_result } from './models/az_dls_account_network_rule_delete_command_result';
import { az_dls_account_network_rule_list_command_result } from './models/az_dls_account_network_rule_list_command_result';
import { az_dls_account_network_rule_show_command_result } from './models/az_dls_account_network_rule_show_command_result';
import { az_dls_account_network_rule_update_command_result } from './models/az_dls_account_network_rule_update_command_result';
import { az_dls_account_trusted_provider_create_command_result } from './models/az_dls_account_trusted_provider_create_command_result';
import { az_dls_account_trusted_provider_delete_command_result } from './models/az_dls_account_trusted_provider_delete_command_result';
import { az_dls_account_trusted_provider_list_command_result } from './models/az_dls_account_trusted_provider_list_command_result';
import { az_dls_account_trusted_provider_show_command_result } from './models/az_dls_account_trusted_provider_show_command_result';
import { az_dls_account_trusted_provider_update_command_result } from './models/az_dls_account_trusted_provider_update_command_result';
import { az_dls_account_create_command_result } from './models/az_dls_account_create_command_result';
import { az_dls_account_delete_command_result } from './models/az_dls_account_delete_command_result';
import { az_dls_account_enable_key_vault_command_result } from './models/az_dls_account_enable_key_vault_command_result';
import { az_dls_account_list_command_result } from './models/az_dls_account_list_command_result';
import { az_dls_account_show_command_result } from './models/az_dls_account_show_command_result';
import { az_dls_account_update_command_result } from './models/az_dls_account_update_command_result';
import { az_dls_fs_access_remove_all_command_result } from './models/az_dls_fs_access_remove_all_command_result';
import { az_dls_fs_access_remove_entry_command_result } from './models/az_dls_fs_access_remove_entry_command_result';
import { az_dls_fs_access_set_command_result } from './models/az_dls_fs_access_set_command_result';
import { az_dls_fs_access_set_entry_command_result } from './models/az_dls_fs_access_set_entry_command_result';
import { az_dls_fs_access_set_owner_command_result } from './models/az_dls_fs_access_set_owner_command_result';
import { az_dls_fs_access_set_permission_command_result } from './models/az_dls_fs_access_set_permission_command_result';
import { az_dls_fs_access_show_command_result } from './models/az_dls_fs_access_show_command_result';
import { az_dls_fs_append_command_result } from './models/az_dls_fs_append_command_result';
import { az_dls_fs_create_command_result } from './models/az_dls_fs_create_command_result';
import { az_dls_fs_delete_command_result } from './models/az_dls_fs_delete_command_result';
import { az_dls_fs_download_command_result } from './models/az_dls_fs_download_command_result';
import { az_dls_fs_join_command_result } from './models/az_dls_fs_join_command_result';
import { az_dls_fs_list_command_result } from './models/az_dls_fs_list_command_result';
import { az_dls_fs_move_command_result } from './models/az_dls_fs_move_command_result';
import { az_dls_fs_preview_command_result } from './models/az_dls_fs_preview_command_result';
import { az_dls_fs_remove_expiry_command_result } from './models/az_dls_fs_remove_expiry_command_result';
import { az_dls_fs_set_expiry_command_result } from './models/az_dls_fs_set_expiry_command_result';
import { az_dls_fs_show_command_result } from './models/az_dls_fs_show_command_result';
import { az_dls_fs_test_command_result } from './models/az_dls_fs_test_command_result';
import { az_dls_fs_upload_command_result } from './models/az_dls_fs_upload_command_result';
/** Manage Data Lake Store account firewall rules. */
export declare class az_dls_account_firewall {
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
    static create(account: string, endIpAddress: string, firewallRuleName: string, startIpAddress: string): az_dls_account_firewall_create_command_builder;
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
    static delete(firewallRuleName: string): az_dls_account_firewall_delete_command_builder;
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
    static list(): az_dls_account_firewall_list_command_builder;
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
    static show(firewallRuleName: string): az_dls_account_firewall_show_command_builder;
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
    static update(firewallRuleName: string): az_dls_account_firewall_update_command_builder;
}
/** Manage Data Lake Store account virtual network rules. */
export declare class az_dls_account_network_rule {
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
    static create(accountName: string, name: string, subnet: string): az_dls_account_network_rule_create_command_builder;
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
    static delete(accountName: string): az_dls_account_network_rule_delete_command_builder;
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
    static list(accountName: string): az_dls_account_network_rule_list_command_builder;
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
    static show(accountName: string): az_dls_account_network_rule_show_command_builder;
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
    static update(accountName: string, subnet: string): az_dls_account_network_rule_update_command_builder;
}
/** Manage Data Lake Store account trusted identity providers. */
export declare class az_dls_account_trusted_provider {
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
    static create(account: string, idProvider: string, trustedIdProviderName: string): az_dls_account_trusted_provider_create_command_builder;
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
    static delete(trustedIdProviderName: string): az_dls_account_trusted_provider_delete_command_builder;
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
    static list(): az_dls_account_trusted_provider_list_command_builder;
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
    static show(trustedIdProviderName: string): az_dls_account_trusted_provider_show_command_builder;
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
    static update(trustedIdProviderName: string): az_dls_account_trusted_provider_update_command_builder;
}
/** Manage Data Lake Store accounts. */
export declare class az_dls_account {
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
    static create(account: string): az_dls_account_create_command_builder;
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
    static delete(): az_dls_account_delete_command_builder;
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
    static enable_key_vault(): az_dls_account_enable_key_vault_command_builder;
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
    static list(): az_dls_account_list_command_builder;
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
    static show(): az_dls_account_show_command_builder;
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
    static update(): az_dls_account_update_command_builder;
}
/** Manage Data Lake Store filesystem access and permissions. */
export declare class az_dls_fs_access {
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
    static remove_all(path: string): az_dls_fs_access_remove_all_command_builder;
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
    static remove_entry(aclSpec: string, path: string): az_dls_fs_access_remove_entry_command_builder;
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
    static set(aclSpec: string, path: string): az_dls_fs_access_set_command_builder;
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
    static set_entry(aclSpec: string, path: string): az_dls_fs_access_set_entry_command_builder;
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
    static set_owner(path: string): az_dls_fs_access_set_owner_command_builder;
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
    static set_permission(path: string, permission: string): az_dls_fs_access_set_permission_command_builder;
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
    static show(path: string): az_dls_fs_access_show_command_builder;
}
/** Manage a Data Lake Store filesystem. */
export declare class az_dls_fs {
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
    static append(content: string, path: string): az_dls_fs_append_command_builder;
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
    static create(account: string, path: string): az_dls_fs_create_command_builder;
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
    static delete(path: string): az_dls_fs_delete_command_builder;
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
    static download(destinationPath: string, sourcePath: string): az_dls_fs_download_command_builder;
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
    static join(destinationPath: string, sourcePaths: string): az_dls_fs_join_command_builder;
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
    static list(path: string): az_dls_fs_list_command_builder;
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
    static move(destinationPath: string, sourcePath: string): az_dls_fs_move_command_builder;
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
    static preview(path: string): az_dls_fs_preview_command_builder;
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
    static remove_expiry(path: string): az_dls_fs_remove_expiry_command_builder;
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
    static set_expiry(expirationTime: string, path: string): az_dls_fs_set_expiry_command_builder;
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
    static show(path: string): az_dls_fs_show_command_builder;
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
    static test(path: string): az_dls_fs_test_command_builder;
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
    static upload(destinationPath: string, sourcePath: string): az_dls_fs_upload_command_builder;
}
/** Manage Data Lake Store accounts and filesystems. */
export declare class az_dls {
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
declare class az_dls_account_firewall_create_command_builder extends CommandBuilder<az_dls_account_firewall_create_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, account: string, endIpAddress: string, firewallRuleName: string, startIpAddress: string);
    /** Name of the Data Lake Store account. */
    account(value: string): az_dls_account_firewall_create_command_builder;
    /** The end of the valid ip range for the firewall rule. */
    endIpAddress(value: string): az_dls_account_firewall_create_command_builder;
    /** The name of the firewall rule. */
    firewallRuleName(value: string): az_dls_account_firewall_create_command_builder;
    /** The start of the valid ip range for the firewall rule. */
    startIpAddress(value: string): az_dls_account_firewall_create_command_builder;
    /** If not specified, will attempt to discover the resource group for the specified Data Lake Store account. */
    resourceGroup(value: string): az_dls_account_firewall_create_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_dls_account_firewall_create_command_builder;
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
declare class az_dls_account_firewall_delete_command_builder extends CommandBuilder<az_dls_account_firewall_delete_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, firewallRuleName: string);
    /** The name of the firewall rule to delete. */
    firewallRuleName(value: string): az_dls_account_firewall_delete_command_builder;
    /** Name of the Data Lake Store account. */
    account(value: string): az_dls_account_firewall_delete_command_builder;
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_dls_account_firewall_delete_command_builder;
    /** If not specified, will attempt to discover the resource group for the specified Data Lake Store account. */
    resourceGroup(value: string): az_dls_account_firewall_delete_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_dls_account_firewall_delete_command_builder;
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
declare class az_dls_account_firewall_list_command_builder extends CommandBuilder<az_dls_account_firewall_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** Name of the Data Lake Store account. */
    account(value: string): az_dls_account_firewall_list_command_builder;
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_dls_account_firewall_list_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_dls_account_firewall_list_command_builder;
    /** If not specified, will attempt to discover the resource group for the specified Data Lake Store account. */
    resourceGroup(value: string): az_dls_account_firewall_list_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_dls_account_firewall_list_command_builder;
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
declare class az_dls_account_firewall_show_command_builder extends CommandBuilder<az_dls_account_firewall_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, firewallRuleName: string);
    /** The name of the firewall rule to retrieve. */
    firewallRuleName(value: string): az_dls_account_firewall_show_command_builder;
    /** Name of the Data Lake Store account. */
    account(value: string): az_dls_account_firewall_show_command_builder;
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_dls_account_firewall_show_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_dls_account_firewall_show_command_builder;
    /** If not specified, will attempt to discover the resource group for the specified Data Lake Store account. */
    resourceGroup(value: string): az_dls_account_firewall_show_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_dls_account_firewall_show_command_builder;
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
declare class az_dls_account_firewall_update_command_builder extends CommandBuilder<az_dls_account_firewall_update_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, firewallRuleName: string);
    /** The name of the firewall rule to update. */
    firewallRuleName(value: string): az_dls_account_firewall_update_command_builder;
    /** Name of the Data Lake Store account. */
    account(value: string): az_dls_account_firewall_update_command_builder;
    /** The end IP address for the firewall rule. This can be either ipv4 or ipv6. Start and End should be in the same protocol. */
    endIpAddress(value: string): az_dls_account_firewall_update_command_builder;
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_dls_account_firewall_update_command_builder;
    /** If not specified, will attempt to discover the resource group for the specified Data Lake Store account. */
    resourceGroup(value: string): az_dls_account_firewall_update_command_builder;
    /** The start IP address for the firewall rule. This can be either ipv4 or ipv6. Start and End should be in the same protocol. */
    startIpAddress(value: string): az_dls_account_firewall_update_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_dls_account_firewall_update_command_builder;
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
declare class az_dls_account_network_rule_create_command_builder extends CommandBuilder<az_dls_account_network_rule_create_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, accountName: string, name: string, subnet: string);
    /** Name of the Data Lake Store account. */
    accountName(value: string): az_dls_account_network_rule_create_command_builder;
    /** The virtual network rule name. */
    name(value: string): az_dls_account_network_rule_create_command_builder;
    /** The subnet name or id for the virtual network rule. */
    subnet(value: string): az_dls_account_network_rule_create_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_dls_account_network_rule_create_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_dls_account_network_rule_create_command_builder;
    /** The name of the virtual network rule. */
    vnetName(value: string): az_dls_account_network_rule_create_command_builder;
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
declare class az_dls_account_network_rule_delete_command_builder extends CommandBuilder<az_dls_account_network_rule_delete_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, accountName: string);
    /** Name of the Data Lake Store account. */
    accountName(value: string): az_dls_account_network_rule_delete_command_builder;
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_dls_account_network_rule_delete_command_builder;
    /** The virtual network rule name. */
    name(value: string): az_dls_account_network_rule_delete_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_dls_account_network_rule_delete_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_dls_account_network_rule_delete_command_builder;
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
declare class az_dls_account_network_rule_list_command_builder extends CommandBuilder<az_dls_account_network_rule_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, accountName: string);
    /** Name of the Data Lake Store account. */
    accountName(value: string): az_dls_account_network_rule_list_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_dls_account_network_rule_list_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_dls_account_network_rule_list_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_dls_account_network_rule_list_command_builder;
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
declare class az_dls_account_network_rule_show_command_builder extends CommandBuilder<az_dls_account_network_rule_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, accountName: string);
    /** Name of the Data Lake Store account. */
    accountName(value: string): az_dls_account_network_rule_show_command_builder;
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_dls_account_network_rule_show_command_builder;
    /** The virtual network rule name. */
    name(value: string): az_dls_account_network_rule_show_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_dls_account_network_rule_show_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_dls_account_network_rule_show_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_dls_account_network_rule_show_command_builder;
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
declare class az_dls_account_network_rule_update_command_builder extends CommandBuilder<az_dls_account_network_rule_update_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, accountName: string, subnet: string);
    /** Name of the Data Lake Store account. */
    accountName(value: string): az_dls_account_network_rule_update_command_builder;
    /** Name or ID of the subnet that allows access to DLS. If subnet name is provided, --name must be provided. */
    subnet(value: string): az_dls_account_network_rule_update_command_builder;
    /** Add an object to a list of objects by specifying a path and key value pairs.  Example: --add property.listProperty <key=value, string or JSON string>. */
    add(value: string): az_dls_account_network_rule_update_command_builder;
    /** When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON. */
    forceString(value: string): az_dls_account_network_rule_update_command_builder;
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_dls_account_network_rule_update_command_builder;
    /** The virtual network rule name. */
    name(value: string): az_dls_account_network_rule_update_command_builder;
    /** Remove a property or an element from a list.  Example: --remove property.list <indexToRemove> OR --remove propertyToRemove. */
    remove(value: string): az_dls_account_network_rule_update_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_dls_account_network_rule_update_command_builder;
    /** Update an object by specifying a property path and value to set.  Example: --set property1.property2=<value>. */
    set(value: string): az_dls_account_network_rule_update_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_dls_account_network_rule_update_command_builder;
    /** The virtual network rule name. */
    vnetName(value: string): az_dls_account_network_rule_update_command_builder;
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
declare class az_dls_account_trusted_provider_create_command_builder extends CommandBuilder<az_dls_account_trusted_provider_create_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, account: string, idProvider: string, trustedIdProviderName: string);
    /** Name of the Data Lake Store account. */
    account(value: string): az_dls_account_trusted_provider_create_command_builder;
    /** The URL of this trusted identity provider. */
    idProvider(value: string): az_dls_account_trusted_provider_create_command_builder;
    /** The name of the trusted identity provider. This is used for differentiation of providers in the account. */
    trustedIdProviderName(value: string): az_dls_account_trusted_provider_create_command_builder;
    /** If not specified, will attempt to discover the resource group for the specified Data Lake Store account. */
    resourceGroup(value: string): az_dls_account_trusted_provider_create_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_dls_account_trusted_provider_create_command_builder;
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
declare class az_dls_account_trusted_provider_delete_command_builder extends CommandBuilder<az_dls_account_trusted_provider_delete_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, trustedIdProviderName: string);
    /** The name of the trusted identity provider to delete. */
    trustedIdProviderName(value: string): az_dls_account_trusted_provider_delete_command_builder;
    /** Name of the Data Lake Store account. */
    account(value: string): az_dls_account_trusted_provider_delete_command_builder;
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_dls_account_trusted_provider_delete_command_builder;
    /** If not specified, will attempt to discover the resource group for the specified Data Lake Store account. */
    resourceGroup(value: string): az_dls_account_trusted_provider_delete_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_dls_account_trusted_provider_delete_command_builder;
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
declare class az_dls_account_trusted_provider_list_command_builder extends CommandBuilder<az_dls_account_trusted_provider_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** Name of the Data Lake Store account. */
    account(value: string): az_dls_account_trusted_provider_list_command_builder;
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_dls_account_trusted_provider_list_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_dls_account_trusted_provider_list_command_builder;
    /** If not specified, will attempt to discover the resource group for the specified Data Lake Store account. */
    resourceGroup(value: string): az_dls_account_trusted_provider_list_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_dls_account_trusted_provider_list_command_builder;
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
declare class az_dls_account_trusted_provider_show_command_builder extends CommandBuilder<az_dls_account_trusted_provider_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, trustedIdProviderName: string);
    /** The name of the trusted identity provider to retrieve. */
    trustedIdProviderName(value: string): az_dls_account_trusted_provider_show_command_builder;
    /** Name of the Data Lake Store account. */
    account(value: string): az_dls_account_trusted_provider_show_command_builder;
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_dls_account_trusted_provider_show_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_dls_account_trusted_provider_show_command_builder;
    /** If not specified, will attempt to discover the resource group for the specified Data Lake Store account. */
    resourceGroup(value: string): az_dls_account_trusted_provider_show_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_dls_account_trusted_provider_show_command_builder;
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
declare class az_dls_account_trusted_provider_update_command_builder extends CommandBuilder<az_dls_account_trusted_provider_update_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, trustedIdProviderName: string);
    /** The name of the trusted identity provider. This is used for differentiation of providers in the account. */
    trustedIdProviderName(value: string): az_dls_account_trusted_provider_update_command_builder;
    /** Name of the Data Lake Store account. */
    account(value: string): az_dls_account_trusted_provider_update_command_builder;
    /** The URL of this trusted identity provider. */
    idProvider(value: string): az_dls_account_trusted_provider_update_command_builder;
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_dls_account_trusted_provider_update_command_builder;
    /** If not specified, will attempt to discover the resource group for the specified Data Lake Store account. */
    resourceGroup(value: string): az_dls_account_trusted_provider_update_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_dls_account_trusted_provider_update_command_builder;
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
declare class az_dls_account_create_command_builder extends CommandBuilder<az_dls_account_create_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, account: string);
    /** Name of the Data Lake Store account. */
    account(value: string): az_dls_account_create_command_builder;
    /** Name of the default group to give permissions to for freshly created files and folders in the Data Lake Store account. */
    defaultGroup(value: string): az_dls_account_create_command_builder;
    /** Indicates that the account will not have any form of encryption applied to it. */
    disableEncryption(value: string): az_dls_account_create_command_builder;
    /** Indicates what type of encryption to provision the account with. By default, encryption is ServiceManaged. If no encryption is desired, it must be explicitly set with the --disable-encryption flag. */
    encryptionType(value: 'ServiceManaged' | 'UserManaged'): az_dls_account_create_command_builder;
    /** Key name for the user-assigned encryption type. */
    keyName(value: string): az_dls_account_create_command_builder;
    /** Key vault for the user-assigned encryption type. */
    keyVaultId(value: string): az_dls_account_create_command_builder;
    /** Key version for the user-assigned encryption type. */
    keyVersion(value: string): az_dls_account_create_command_builder;
    /** Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`. */
    location(value: string): az_dls_account_create_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_dls_account_create_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_dls_account_create_command_builder;
    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    tags(value: string): az_dls_account_create_command_builder;
    /** The desired commitment tier for this account to use. */
    tier(value: 'Commitment_100TB' | 'Commitment_10TB' | 'Commitment_1PB' | 'Commitment_1TB' | 'Commitment_500TB' | 'Commitment_5PB' | 'Consumption'): az_dls_account_create_command_builder;
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
declare class az_dls_account_delete_command_builder extends CommandBuilder<az_dls_account_delete_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** Name of the Data Lake Store account. */
    account(value: string): az_dls_account_delete_command_builder;
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_dls_account_delete_command_builder;
    /** If not specified, will attempt to discover the resource group for the specified Data Lake Store account. */
    resourceGroup(value: string): az_dls_account_delete_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_dls_account_delete_command_builder;
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
declare class az_dls_account_enable_key_vault_command_builder extends CommandBuilder<az_dls_account_enable_key_vault_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** Name of the Data Lake Store account. */
    account(value: string): az_dls_account_enable_key_vault_command_builder;
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_dls_account_enable_key_vault_command_builder;
    /** If not specified, will attempt to discover the resource group for the specified Data Lake Store account. */
    resourceGroup(value: string): az_dls_account_enable_key_vault_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_dls_account_enable_key_vault_command_builder;
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
declare class az_dls_account_list_command_builder extends CommandBuilder<az_dls_account_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_dls_account_list_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_dls_account_list_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_dls_account_list_command_builder;
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
declare class az_dls_account_show_command_builder extends CommandBuilder<az_dls_account_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** Name of the Data Lake Store account. */
    account(value: string): az_dls_account_show_command_builder;
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_dls_account_show_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_dls_account_show_command_builder;
    /** If not specified, will attempt to discover the resource group for the specified Data Lake Store account. */
    resourceGroup(value: string): az_dls_account_show_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_dls_account_show_command_builder;
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
declare class az_dls_account_update_command_builder extends CommandBuilder<az_dls_account_update_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** Name of the Data Lake Store account. */
    account(value: string): az_dls_account_update_command_builder;
    /** Allow/block Azure originating IPs through the firewall. */
    allowAzureIps(value: 'Disabled' | 'Enabled'): az_dls_account_update_command_builder;
    /** Name of the default group to give permissions to for freshly created files and folders in the Data Lake Store account. */
    defaultGroup(value: string): az_dls_account_update_command_builder;
    /** Enable/disable existing firewall rules. */
    firewallState(value: 'Disabled' | 'Enabled'): az_dls_account_update_command_builder;
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_dls_account_update_command_builder;
    /** Key version for the user-assigned encryption type. */
    keyVersion(value: string): az_dls_account_update_command_builder;
    /** If not specified, will attempt to discover the resource group for the specified Data Lake Store account. */
    resourceGroup(value: string): az_dls_account_update_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_dls_account_update_command_builder;
    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    tags(value: string): az_dls_account_update_command_builder;
    /** The desired commitment tier for this account to use. */
    tier(value: 'Commitment_100TB' | 'Commitment_10TB' | 'Commitment_1PB' | 'Commitment_1TB' | 'Commitment_500TB' | 'Commitment_5PB' | 'Consumption'): az_dls_account_update_command_builder;
    /** Enable/disable the existing trusted ID providers. */
    trustedIdProviderState(value: 'Disabled' | 'Enabled'): az_dls_account_update_command_builder;
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
declare class az_dls_fs_access_remove_all_command_builder extends CommandBuilder<az_dls_fs_access_remove_all_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, path: string);
    /** The path in the specified Data Lake Store account where the action should take place. In the format '/folder/file.txt', where the first '/' after the DNS indicates the root of the file system. */
    path(value: string): az_dls_fs_access_remove_all_command_builder;
    /** Name of the Data Lake Store account. */
    account(value: string): az_dls_fs_access_remove_all_command_builder;
    /** A switch that, if specified, indicates that the remove ACL operation should remove the default ACL of the folder. Otherwise the regular ACL is removed. */
    defaultAcl(value: string): az_dls_fs_access_remove_all_command_builder;
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_dls_fs_access_remove_all_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_dls_fs_access_remove_all_command_builder;
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
declare class az_dls_fs_access_remove_entry_command_builder extends CommandBuilder<az_dls_fs_access_remove_entry_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, aclSpec: string, path: string);
    /** The ACL specification to set on the path in the format '[default:]user|group|other:[entity id or UPN]:r|-w|-x|-,[default:]user|group|other:[entity id or UPN]:r|-w|-x|-,...'. */
    aclSpec(value: string): az_dls_fs_access_remove_entry_command_builder;
    /** The path in the specified Data Lake Store account where the action should take place. In the format '/folder/file.txt', where the first '/' after the DNS indicates the root of the file system. */
    path(value: string): az_dls_fs_access_remove_entry_command_builder;
    /** Name of the Data Lake Store account. */
    account(value: string): az_dls_fs_access_remove_entry_command_builder;
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_dls_fs_access_remove_entry_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_dls_fs_access_remove_entry_command_builder;
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
declare class az_dls_fs_access_set_command_builder extends CommandBuilder<az_dls_fs_access_set_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, aclSpec: string, path: string);
    /** The ACL specification to set on the path in the format '[default:]user|group|other:[entity id or UPN]:r|-w|-x|-,[default:]user|group|other:[entity id or UPN]:r|-w|-x|-,...'. */
    aclSpec(value: string): az_dls_fs_access_set_command_builder;
    /** The path in the specified Data Lake Store account where the action should take place. In the format '/folder/file.txt', where the first '/' after the DNS indicates the root of the file system. */
    path(value: string): az_dls_fs_access_set_command_builder;
    /** Name of the Data Lake Store account. */
    account(value: string): az_dls_fs_access_set_command_builder;
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_dls_fs_access_set_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_dls_fs_access_set_command_builder;
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
declare class az_dls_fs_access_set_entry_command_builder extends CommandBuilder<az_dls_fs_access_set_entry_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, aclSpec: string, path: string);
    /** The ACL specification to set on the path in the format '[default:]user|group|other:[entity id or UPN]:r|-w|-x|-,[default:]user|group|other:[entity id or UPN]:r|-w|-x|-,...'. */
    aclSpec(value: string): az_dls_fs_access_set_entry_command_builder;
    /** The path in the specified Data Lake Store account where the action should take place. In the format '/folder/file.txt', where the first '/' after the DNS indicates the root of the file system. */
    path(value: string): az_dls_fs_access_set_entry_command_builder;
    /** Name of the Data Lake Store account. */
    account(value: string): az_dls_fs_access_set_entry_command_builder;
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_dls_fs_access_set_entry_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_dls_fs_access_set_entry_command_builder;
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
declare class az_dls_fs_access_set_owner_command_builder extends CommandBuilder<az_dls_fs_access_set_owner_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, path: string);
    /** The path in the specified Data Lake Store account where the action should take place. In the format '/folder/file.txt', where the first '/' after the DNS indicates the root of the file system. */
    path(value: string): az_dls_fs_access_set_owner_command_builder;
    /** Name of the Data Lake Store account. */
    account(value: string): az_dls_fs_access_set_owner_command_builder;
    /** The group Azure Active Directory object ID or user principal name to set as the owning group. */
    group(value: string): az_dls_fs_access_set_owner_command_builder;
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_dls_fs_access_set_owner_command_builder;
    /** The user Azure Active Directory object ID or user principal name to set as the owner. */
    owner(value: string): az_dls_fs_access_set_owner_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_dls_fs_access_set_owner_command_builder;
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
declare class az_dls_fs_access_set_permission_command_builder extends CommandBuilder<az_dls_fs_access_set_permission_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, path: string, permission: string);
    /** The path in the specified Data Lake Store account where the action should take place. In the format '/folder/file.txt', where the first '/' after the DNS indicates the root of the file system. */
    path(value: string): az_dls_fs_access_set_permission_command_builder;
    /** The octal representation of the permissions for user, group and mask. */
    permission(value: string): az_dls_fs_access_set_permission_command_builder;
    /** Name of the Data Lake Store account. */
    account(value: string): az_dls_fs_access_set_permission_command_builder;
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_dls_fs_access_set_permission_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_dls_fs_access_set_permission_command_builder;
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
declare class az_dls_fs_access_show_command_builder extends CommandBuilder<az_dls_fs_access_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, path: string);
    /** The path in the specified Data Lake Store account where the action should take place. In the format '/folder/file.txt', where the first '/' after the DNS indicates the root of the file system. */
    path(value: string): az_dls_fs_access_show_command_builder;
    /** Name of the Data Lake Store account. */
    account(value: string): az_dls_fs_access_show_command_builder;
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_dls_fs_access_show_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_dls_fs_access_show_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_dls_fs_access_show_command_builder;
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
declare class az_dls_fs_append_command_builder extends CommandBuilder<az_dls_fs_append_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, content: string, path: string);
    /** Content to be appended to the file. */
    content(value: string): az_dls_fs_append_command_builder;
    /** The path in the specified Data Lake Store account where the action should take place. In the format '/folder/file.txt', where the first '/' after the DNS indicates the root of the file system. */
    path(value: string): az_dls_fs_append_command_builder;
    /** Name of the Data Lake Store account. */
    account(value: string): az_dls_fs_append_command_builder;
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_dls_fs_append_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_dls_fs_append_command_builder;
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
declare class az_dls_fs_create_command_builder extends CommandBuilder<az_dls_fs_create_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, account: string, path: string);
    /** Name of the Data Lake Store account. */
    account(value: string): az_dls_fs_create_command_builder;
    /** The path in the specified Data Lake Store account where the action should take place. In the format '/folder/file.txt', where the first '/' after the DNS indicates the root of the file system. */
    path(value: string): az_dls_fs_create_command_builder;
    /** Content for the file to contain upon creation. */
    content(value: string): az_dls_fs_create_command_builder;
    /** Indicates that this new item is a folder and not a file. */
    folder(value: string): az_dls_fs_create_command_builder;
    /** Indicates that, if the file or folder exists, it should be overwritten. */
    force(value: string): az_dls_fs_create_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_dls_fs_create_command_builder;
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
declare class az_dls_fs_delete_command_builder extends CommandBuilder<az_dls_fs_delete_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, path: string);
    /** The path in the specified Data Lake Store account where the action should take place. In the format '/folder/file.txt', where the first '/' after the DNS indicates the root of the file system. */
    path(value: string): az_dls_fs_delete_command_builder;
    /** Name of the Data Lake Store account. */
    account(value: string): az_dls_fs_delete_command_builder;
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_dls_fs_delete_command_builder;
    /** Indicates this should be a recursive delete of the folder. */
    recurse(value: string): az_dls_fs_delete_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_dls_fs_delete_command_builder;
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
declare class az_dls_fs_download_command_builder extends CommandBuilder<az_dls_fs_download_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, destinationPath: string, sourcePath: string);
    /** The local path where the file or folder will be downloaded to. */
    destinationPath(value: string): az_dls_fs_download_command_builder;
    /** The full path in the Data Lake Store filesystem to download the file or folder from. */
    sourcePath(value: string): az_dls_fs_download_command_builder;
    /** Name of the Data Lake Store account. */
    account(value: string): az_dls_fs_download_command_builder;
    /** Size of a block, in bytes. */
    blockSize(value: string): az_dls_fs_download_command_builder;
    /** Size of the transfer buffer, in bytes. */
    bufferSize(value: string): az_dls_fs_download_command_builder;
    /** Size of a chunk, in bytes. */
    chunkSize(value: string): az_dls_fs_download_command_builder;
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_dls_fs_download_command_builder;
    /** Indicates that, if the destination file or folder exists, it should be overwritten. */
    overwrite(value: string): az_dls_fs_download_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_dls_fs_download_command_builder;
    /** Parallelism of the download. Default: The number of cores in the local machine. */
    threadCount(value: string): az_dls_fs_download_command_builder;
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
declare class az_dls_fs_join_command_builder extends CommandBuilder<az_dls_fs_join_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, destinationPath: string, sourcePaths: string);
    /** The destination path in the Data Lake Store account. */
    destinationPath(value: string): az_dls_fs_join_command_builder;
    /** The space-separated list of files in the Data Lake Store account to join. */
    sourcePaths(value: string): az_dls_fs_join_command_builder;
    /** Name of the Data Lake Store account. */
    account(value: string): az_dls_fs_join_command_builder;
    /** Indicates that, if the destination file already exists, it should be overwritten. */
    force(value: string): az_dls_fs_join_command_builder;
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_dls_fs_join_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_dls_fs_join_command_builder;
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
declare class az_dls_fs_list_command_builder extends CommandBuilder<az_dls_fs_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, path: string);
    /** The path in the specified Data Lake Store account where the action should take place. In the format '/folder/file.txt', where the first '/' after the DNS indicates the root of the file system. */
    path(value: string): az_dls_fs_list_command_builder;
    /** Name of the Data Lake Store account. */
    account(value: string): az_dls_fs_list_command_builder;
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_dls_fs_list_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_dls_fs_list_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_dls_fs_list_command_builder;
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
declare class az_dls_fs_move_command_builder extends CommandBuilder<az_dls_fs_move_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, destinationPath: string, sourcePath: string);
    /** The destination path in the Data Lake Store account. */
    destinationPath(value: string): az_dls_fs_move_command_builder;
    /** The file or folder to move. */
    sourcePath(value: string): az_dls_fs_move_command_builder;
    /** Name of the Data Lake Store account. */
    account(value: string): az_dls_fs_move_command_builder;
    /** Indicates that, if the destination file or folder already exists, it should be overwritten and replaced with the file or folder being moved. */
    force(value: string): az_dls_fs_move_command_builder;
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_dls_fs_move_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_dls_fs_move_command_builder;
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
declare class az_dls_fs_preview_command_builder extends CommandBuilder<az_dls_fs_preview_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, path: string);
    /** The path in the specified Data Lake Store account where the action should take place. In the format '/folder/file.txt', where the first '/' after the DNS indicates the root of the file system. */
    path(value: string): az_dls_fs_preview_command_builder;
    /** Name of the Data Lake Store account. */
    account(value: string): az_dls_fs_preview_command_builder;
    /** Indicates that, if the preview is larger than 1MB, still retrieve it. This can potentially be very slow, depending on how large the file is. */
    force(value: string): az_dls_fs_preview_command_builder;
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_dls_fs_preview_command_builder;
    /** The amount of data to preview in bytes. */
    length(value: string): az_dls_fs_preview_command_builder;
    /** The position in bytes to start the preview from. */
    offset(value: string): az_dls_fs_preview_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_dls_fs_preview_command_builder;
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
declare class az_dls_fs_remove_expiry_command_builder extends CommandBuilder<az_dls_fs_remove_expiry_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, path: string);
    /** The path in the specified Data Lake Store account where the action should take place. In the format '/folder/file.txt', where the first '/' after the DNS indicates the root of the file system. */
    path(value: string): az_dls_fs_remove_expiry_command_builder;
    /** Name of the Data Lake Store account. */
    account(value: string): az_dls_fs_remove_expiry_command_builder;
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_dls_fs_remove_expiry_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_dls_fs_remove_expiry_command_builder;
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
declare class az_dls_fs_set_expiry_command_builder extends CommandBuilder<az_dls_fs_set_expiry_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, expirationTime: string, path: string);
    /** The absolute value of the expiration time expressed as milliseconds since the epoch. */
    expirationTime(value: string): az_dls_fs_set_expiry_command_builder;
    /** The path in the specified Data Lake Store account where the action should take place. In the format '/folder/file.txt', where the first '/' after the DNS indicates the root of the file system. */
    path(value: string): az_dls_fs_set_expiry_command_builder;
    /** Name of the Data Lake Store account. */
    account(value: string): az_dls_fs_set_expiry_command_builder;
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_dls_fs_set_expiry_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_dls_fs_set_expiry_command_builder;
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
declare class az_dls_fs_show_command_builder extends CommandBuilder<az_dls_fs_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, path: string);
    /** The path in the specified Data Lake Store account where the action should take place. In the format '/folder/file.txt', where the first '/' after the DNS indicates the root of the file system. */
    path(value: string): az_dls_fs_show_command_builder;
    /** Name of the Data Lake Store account. */
    account(value: string): az_dls_fs_show_command_builder;
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_dls_fs_show_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_dls_fs_show_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_dls_fs_show_command_builder;
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
declare class az_dls_fs_test_command_builder extends CommandBuilder<az_dls_fs_test_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, path: string);
    /** The path in the specified Data Lake Store account where the action should take place. In the format '/folder/file.txt', where the first '/' after the DNS indicates the root of the file system. */
    path(value: string): az_dls_fs_test_command_builder;
    /** Name of the Data Lake Store account. */
    account(value: string): az_dls_fs_test_command_builder;
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_dls_fs_test_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_dls_fs_test_command_builder;
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
declare class az_dls_fs_upload_command_builder extends CommandBuilder<az_dls_fs_upload_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, destinationPath: string, sourcePath: string);
    /** The full path in the Data Lake Store filesystem to upload the file or folder to. */
    destinationPath(value: string): az_dls_fs_upload_command_builder;
    /** The path to the file or folder to upload. */
    sourcePath(value: string): az_dls_fs_upload_command_builder;
    /** Name of the Data Lake Store account. */
    account(value: string): az_dls_fs_upload_command_builder;
    /** Size of a block, in bytes. */
    blockSize(value: string): az_dls_fs_upload_command_builder;
    /** Size of the transfer buffer, in bytes. */
    bufferSize(value: string): az_dls_fs_upload_command_builder;
    /** Size of a chunk, in bytes. */
    chunkSize(value: string): az_dls_fs_upload_command_builder;
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_dls_fs_upload_command_builder;
    /** Indicates that, if the destination file or folder exists, it should be overwritten. */
    overwrite(value: string): az_dls_fs_upload_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_dls_fs_upload_command_builder;
    /** Parallelism of the upload. Default: The number of cores in the local machine. */
    threadCount(value: string): az_dls_fs_upload_command_builder;
}
export {};
