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
exports.az_dls = exports.az_dls_fs = exports.az_dls_fs_access = exports.az_dls_account = exports.az_dls_account_trusted_provider = exports.az_dls_account_network_rule = exports.az_dls_account_firewall = void 0;
var base_1 = require("../base");
/** Manage Data Lake Store account firewall rules. */
var az_dls_account_firewall = /** @class */ (function () {
    function az_dls_account_firewall() {
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
    az_dls_account_firewall.create = function (account, endIpAddress, firewallRuleName, startIpAddress) {
        return new az_dls_account_firewall_create_command_builder("az dls account firewall create", 'az_dls_account_firewall_create_command_result', account, endIpAddress, firewallRuleName, startIpAddress);
    };
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
    az_dls_account_firewall["delete"] = function (firewallRuleName) {
        return new az_dls_account_firewall_delete_command_builder("az dls account firewall delete", 'az_dls_account_firewall_delete_command_result', firewallRuleName);
    };
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
    az_dls_account_firewall.list = function () {
        return new az_dls_account_firewall_list_command_builder("az dls account firewall list", 'az_dls_account_firewall_list_command_result');
    };
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
    az_dls_account_firewall.show = function (firewallRuleName) {
        return new az_dls_account_firewall_show_command_builder("az dls account firewall show", 'az_dls_account_firewall_show_command_result', firewallRuleName);
    };
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
    az_dls_account_firewall.update = function (firewallRuleName) {
        return new az_dls_account_firewall_update_command_builder("az dls account firewall update", 'az_dls_account_firewall_update_command_result', firewallRuleName);
    };
    return az_dls_account_firewall;
}());
exports.az_dls_account_firewall = az_dls_account_firewall;
/** Manage Data Lake Store account virtual network rules. */
var az_dls_account_network_rule = /** @class */ (function () {
    function az_dls_account_network_rule() {
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
    az_dls_account_network_rule.create = function (accountName, name, subnet) {
        return new az_dls_account_network_rule_create_command_builder("az dls account network-rule create", 'az_dls_account_network_rule_create_command_result', accountName, name, subnet);
    };
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
    az_dls_account_network_rule["delete"] = function (accountName) {
        return new az_dls_account_network_rule_delete_command_builder("az dls account network-rule delete", 'az_dls_account_network_rule_delete_command_result', accountName);
    };
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
    az_dls_account_network_rule.list = function (accountName) {
        return new az_dls_account_network_rule_list_command_builder("az dls account network-rule list", 'az_dls_account_network_rule_list_command_result', accountName);
    };
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
    az_dls_account_network_rule.show = function (accountName) {
        return new az_dls_account_network_rule_show_command_builder("az dls account network-rule show", 'az_dls_account_network_rule_show_command_result', accountName);
    };
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
    az_dls_account_network_rule.update = function (accountName, subnet) {
        return new az_dls_account_network_rule_update_command_builder("az dls account network-rule update", 'az_dls_account_network_rule_update_command_result', accountName, subnet);
    };
    return az_dls_account_network_rule;
}());
exports.az_dls_account_network_rule = az_dls_account_network_rule;
/** Manage Data Lake Store account trusted identity providers. */
var az_dls_account_trusted_provider = /** @class */ (function () {
    function az_dls_account_trusted_provider() {
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
    az_dls_account_trusted_provider.create = function (account, idProvider, trustedIdProviderName) {
        return new az_dls_account_trusted_provider_create_command_builder("az dls account trusted-provider create", 'az_dls_account_trusted_provider_create_command_result', account, idProvider, trustedIdProviderName);
    };
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
    az_dls_account_trusted_provider["delete"] = function (trustedIdProviderName) {
        return new az_dls_account_trusted_provider_delete_command_builder("az dls account trusted-provider delete", 'az_dls_account_trusted_provider_delete_command_result', trustedIdProviderName);
    };
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
    az_dls_account_trusted_provider.list = function () {
        return new az_dls_account_trusted_provider_list_command_builder("az dls account trusted-provider list", 'az_dls_account_trusted_provider_list_command_result');
    };
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
    az_dls_account_trusted_provider.show = function (trustedIdProviderName) {
        return new az_dls_account_trusted_provider_show_command_builder("az dls account trusted-provider show", 'az_dls_account_trusted_provider_show_command_result', trustedIdProviderName);
    };
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
    az_dls_account_trusted_provider.update = function (trustedIdProviderName) {
        return new az_dls_account_trusted_provider_update_command_builder("az dls account trusted-provider update", 'az_dls_account_trusted_provider_update_command_result', trustedIdProviderName);
    };
    return az_dls_account_trusted_provider;
}());
exports.az_dls_account_trusted_provider = az_dls_account_trusted_provider;
/** Manage Data Lake Store accounts. */
var az_dls_account = /** @class */ (function () {
    function az_dls_account() {
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
    az_dls_account.create = function (account) {
        return new az_dls_account_create_command_builder("az dls account create", 'az_dls_account_create_command_result', account);
    };
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
    az_dls_account["delete"] = function () {
        return new az_dls_account_delete_command_builder("az dls account delete", 'az_dls_account_delete_command_result');
    };
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
    az_dls_account.enable_key_vault = function () {
        return new az_dls_account_enable_key_vault_command_builder("az dls account enable-key-vault", 'az_dls_account_enable_key_vault_command_result');
    };
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
    az_dls_account.list = function () {
        return new az_dls_account_list_command_builder("az dls account list", 'az_dls_account_list_command_result');
    };
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
    az_dls_account.show = function () {
        return new az_dls_account_show_command_builder("az dls account show", 'az_dls_account_show_command_result');
    };
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
    az_dls_account.update = function () {
        return new az_dls_account_update_command_builder("az dls account update", 'az_dls_account_update_command_result');
    };
    return az_dls_account;
}());
exports.az_dls_account = az_dls_account;
/** Manage Data Lake Store filesystem access and permissions. */
var az_dls_fs_access = /** @class */ (function () {
    function az_dls_fs_access() {
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
    az_dls_fs_access.remove_all = function (path) {
        return new az_dls_fs_access_remove_all_command_builder("az dls fs access remove-all", 'az_dls_fs_access_remove_all_command_result', path);
    };
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
    az_dls_fs_access.remove_entry = function (aclSpec, path) {
        return new az_dls_fs_access_remove_entry_command_builder("az dls fs access remove-entry", 'az_dls_fs_access_remove_entry_command_result', aclSpec, path);
    };
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
    az_dls_fs_access.set = function (aclSpec, path) {
        return new az_dls_fs_access_set_command_builder("az dls fs access set", 'az_dls_fs_access_set_command_result', aclSpec, path);
    };
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
    az_dls_fs_access.set_entry = function (aclSpec, path) {
        return new az_dls_fs_access_set_entry_command_builder("az dls fs access set-entry", 'az_dls_fs_access_set_entry_command_result', aclSpec, path);
    };
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
    az_dls_fs_access.set_owner = function (path) {
        return new az_dls_fs_access_set_owner_command_builder("az dls fs access set-owner", 'az_dls_fs_access_set_owner_command_result', path);
    };
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
    az_dls_fs_access.set_permission = function (path, permission) {
        return new az_dls_fs_access_set_permission_command_builder("az dls fs access set-permission", 'az_dls_fs_access_set_permission_command_result', path, permission);
    };
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
    az_dls_fs_access.show = function (path) {
        return new az_dls_fs_access_show_command_builder("az dls fs access show", 'az_dls_fs_access_show_command_result', path);
    };
    return az_dls_fs_access;
}());
exports.az_dls_fs_access = az_dls_fs_access;
/** Manage a Data Lake Store filesystem. */
var az_dls_fs = /** @class */ (function () {
    function az_dls_fs() {
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
    az_dls_fs.append = function (content, path) {
        return new az_dls_fs_append_command_builder("az dls fs append", 'az_dls_fs_append_command_result', content, path);
    };
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
    az_dls_fs.create = function (account, path) {
        return new az_dls_fs_create_command_builder("az dls fs create", 'az_dls_fs_create_command_result', account, path);
    };
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
    az_dls_fs["delete"] = function (path) {
        return new az_dls_fs_delete_command_builder("az dls fs delete", 'az_dls_fs_delete_command_result', path);
    };
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
    az_dls_fs.download = function (destinationPath, sourcePath) {
        return new az_dls_fs_download_command_builder("az dls fs download", 'az_dls_fs_download_command_result', destinationPath, sourcePath);
    };
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
    az_dls_fs.join = function (destinationPath, sourcePaths) {
        return new az_dls_fs_join_command_builder("az dls fs join", 'az_dls_fs_join_command_result', destinationPath, sourcePaths);
    };
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
    az_dls_fs.list = function (path) {
        return new az_dls_fs_list_command_builder("az dls fs list", 'az_dls_fs_list_command_result', path);
    };
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
    az_dls_fs.move = function (destinationPath, sourcePath) {
        return new az_dls_fs_move_command_builder("az dls fs move", 'az_dls_fs_move_command_result', destinationPath, sourcePath);
    };
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
    az_dls_fs.preview = function (path) {
        return new az_dls_fs_preview_command_builder("az dls fs preview", 'az_dls_fs_preview_command_result', path);
    };
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
    az_dls_fs.remove_expiry = function (path) {
        return new az_dls_fs_remove_expiry_command_builder("az dls fs remove-expiry", 'az_dls_fs_remove_expiry_command_result', path);
    };
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
    az_dls_fs.set_expiry = function (expirationTime, path) {
        return new az_dls_fs_set_expiry_command_builder("az dls fs set-expiry", 'az_dls_fs_set_expiry_command_result', expirationTime, path);
    };
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
    az_dls_fs.show = function (path) {
        return new az_dls_fs_show_command_builder("az dls fs show", 'az_dls_fs_show_command_result', path);
    };
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
    az_dls_fs.test = function (path) {
        return new az_dls_fs_test_command_builder("az dls fs test", 'az_dls_fs_test_command_result', path);
    };
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
    az_dls_fs.upload = function (destinationPath, sourcePath) {
        return new az_dls_fs_upload_command_builder("az dls fs upload", 'az_dls_fs_upload_command_result', destinationPath, sourcePath);
    };
    return az_dls_fs;
}());
exports.az_dls_fs = az_dls_fs;
/** Manage Data Lake Store accounts and filesystems. */
var az_dls = /** @class */ (function () {
    function az_dls() {
    }
    return az_dls;
}());
exports.az_dls = az_dls;
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
var az_dls_account_firewall_create_command_builder = /** @class */ (function (_super) {
    __extends(az_dls_account_firewall_create_command_builder, _super);
    function az_dls_account_firewall_create_command_builder(commandPath, resultDataTypeName, account, endIpAddress, firewallRuleName, startIpAddress) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.account(account);
        _this.endIpAddress(endIpAddress);
        _this.firewallRuleName(firewallRuleName);
        _this.startIpAddress(startIpAddress);
        return _this;
    }
    /** Name of the Data Lake Store account. */
    az_dls_account_firewall_create_command_builder.prototype.account = function (value) {
        this.setFlag("--account", value);
        return this;
    };
    /** The end of the valid ip range for the firewall rule. */
    az_dls_account_firewall_create_command_builder.prototype.endIpAddress = function (value) {
        this.setFlag("--end-ip-address", value);
        return this;
    };
    /** The name of the firewall rule. */
    az_dls_account_firewall_create_command_builder.prototype.firewallRuleName = function (value) {
        this.setFlag("--firewall-rule-name", value);
        return this;
    };
    /** The start of the valid ip range for the firewall rule. */
    az_dls_account_firewall_create_command_builder.prototype.startIpAddress = function (value) {
        this.setFlag("--start-ip-address", value);
        return this;
    };
    /** If not specified, will attempt to discover the resource group for the specified Data Lake Store account. */
    az_dls_account_firewall_create_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_dls_account_firewall_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_dls_account_firewall_create_command_builder;
}(base_1.CommandBuilder));
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
var az_dls_account_firewall_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_dls_account_firewall_delete_command_builder, _super);
    function az_dls_account_firewall_delete_command_builder(commandPath, resultDataTypeName, firewallRuleName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.firewallRuleName(firewallRuleName);
        return _this;
    }
    /** The name of the firewall rule to delete. */
    az_dls_account_firewall_delete_command_builder.prototype.firewallRuleName = function (value) {
        this.setFlag("--firewall-rule-name", value);
        return this;
    };
    /** Name of the Data Lake Store account. */
    az_dls_account_firewall_delete_command_builder.prototype.account = function (value) {
        this.setFlag("--account", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_dls_account_firewall_delete_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** If not specified, will attempt to discover the resource group for the specified Data Lake Store account. */
    az_dls_account_firewall_delete_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_dls_account_firewall_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_dls_account_firewall_delete_command_builder;
}(base_1.CommandBuilder));
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
var az_dls_account_firewall_list_command_builder = /** @class */ (function (_super) {
    __extends(az_dls_account_firewall_list_command_builder, _super);
    function az_dls_account_firewall_list_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Name of the Data Lake Store account. */
    az_dls_account_firewall_list_command_builder.prototype.account = function (value) {
        this.setFlag("--account", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_dls_account_firewall_list_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_dls_account_firewall_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** If not specified, will attempt to discover the resource group for the specified Data Lake Store account. */
    az_dls_account_firewall_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_dls_account_firewall_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_dls_account_firewall_list_command_builder;
}(base_1.CommandBuilder));
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
var az_dls_account_firewall_show_command_builder = /** @class */ (function (_super) {
    __extends(az_dls_account_firewall_show_command_builder, _super);
    function az_dls_account_firewall_show_command_builder(commandPath, resultDataTypeName, firewallRuleName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.firewallRuleName(firewallRuleName);
        return _this;
    }
    /** The name of the firewall rule to retrieve. */
    az_dls_account_firewall_show_command_builder.prototype.firewallRuleName = function (value) {
        this.setFlag("--firewall-rule-name", value);
        return this;
    };
    /** Name of the Data Lake Store account. */
    az_dls_account_firewall_show_command_builder.prototype.account = function (value) {
        this.setFlag("--account", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_dls_account_firewall_show_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_dls_account_firewall_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** If not specified, will attempt to discover the resource group for the specified Data Lake Store account. */
    az_dls_account_firewall_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_dls_account_firewall_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_dls_account_firewall_show_command_builder;
}(base_1.CommandBuilder));
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
var az_dls_account_firewall_update_command_builder = /** @class */ (function (_super) {
    __extends(az_dls_account_firewall_update_command_builder, _super);
    function az_dls_account_firewall_update_command_builder(commandPath, resultDataTypeName, firewallRuleName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.firewallRuleName(firewallRuleName);
        return _this;
    }
    /** The name of the firewall rule to update. */
    az_dls_account_firewall_update_command_builder.prototype.firewallRuleName = function (value) {
        this.setFlag("--firewall-rule-name", value);
        return this;
    };
    /** Name of the Data Lake Store account. */
    az_dls_account_firewall_update_command_builder.prototype.account = function (value) {
        this.setFlag("--account", value);
        return this;
    };
    /** The end IP address for the firewall rule. This can be either ipv4 or ipv6. Start and End should be in the same protocol. */
    az_dls_account_firewall_update_command_builder.prototype.endIpAddress = function (value) {
        this.setFlag("--end-ip-address", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_dls_account_firewall_update_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** If not specified, will attempt to discover the resource group for the specified Data Lake Store account. */
    az_dls_account_firewall_update_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The start IP address for the firewall rule. This can be either ipv4 or ipv6. Start and End should be in the same protocol. */
    az_dls_account_firewall_update_command_builder.prototype.startIpAddress = function (value) {
        this.setFlag("--start-ip-address", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_dls_account_firewall_update_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_dls_account_firewall_update_command_builder;
}(base_1.CommandBuilder));
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
var az_dls_account_network_rule_create_command_builder = /** @class */ (function (_super) {
    __extends(az_dls_account_network_rule_create_command_builder, _super);
    function az_dls_account_network_rule_create_command_builder(commandPath, resultDataTypeName, accountName, name, subnet) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.accountName(accountName);
        _this.name(name);
        _this.subnet(subnet);
        return _this;
    }
    /** Name of the Data Lake Store account. */
    az_dls_account_network_rule_create_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** The virtual network rule name. */
    az_dls_account_network_rule_create_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** The subnet name or id for the virtual network rule. */
    az_dls_account_network_rule_create_command_builder.prototype.subnet = function (value) {
        this.setFlag("--subnet", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_dls_account_network_rule_create_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_dls_account_network_rule_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** The name of the virtual network rule. */
    az_dls_account_network_rule_create_command_builder.prototype.vnetName = function (value) {
        this.setFlag("--vnet-name", value);
        return this;
    };
    return az_dls_account_network_rule_create_command_builder;
}(base_1.CommandBuilder));
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
var az_dls_account_network_rule_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_dls_account_network_rule_delete_command_builder, _super);
    function az_dls_account_network_rule_delete_command_builder(commandPath, resultDataTypeName, accountName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.accountName(accountName);
        return _this;
    }
    /** Name of the Data Lake Store account. */
    az_dls_account_network_rule_delete_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_dls_account_network_rule_delete_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** The virtual network rule name. */
    az_dls_account_network_rule_delete_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_dls_account_network_rule_delete_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_dls_account_network_rule_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_dls_account_network_rule_delete_command_builder;
}(base_1.CommandBuilder));
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
var az_dls_account_network_rule_list_command_builder = /** @class */ (function (_super) {
    __extends(az_dls_account_network_rule_list_command_builder, _super);
    function az_dls_account_network_rule_list_command_builder(commandPath, resultDataTypeName, accountName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.accountName(accountName);
        return _this;
    }
    /** Name of the Data Lake Store account. */
    az_dls_account_network_rule_list_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_dls_account_network_rule_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_dls_account_network_rule_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_dls_account_network_rule_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_dls_account_network_rule_list_command_builder;
}(base_1.CommandBuilder));
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
var az_dls_account_network_rule_show_command_builder = /** @class */ (function (_super) {
    __extends(az_dls_account_network_rule_show_command_builder, _super);
    function az_dls_account_network_rule_show_command_builder(commandPath, resultDataTypeName, accountName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.accountName(accountName);
        return _this;
    }
    /** Name of the Data Lake Store account. */
    az_dls_account_network_rule_show_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_dls_account_network_rule_show_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** The virtual network rule name. */
    az_dls_account_network_rule_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_dls_account_network_rule_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_dls_account_network_rule_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_dls_account_network_rule_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_dls_account_network_rule_show_command_builder;
}(base_1.CommandBuilder));
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
var az_dls_account_network_rule_update_command_builder = /** @class */ (function (_super) {
    __extends(az_dls_account_network_rule_update_command_builder, _super);
    function az_dls_account_network_rule_update_command_builder(commandPath, resultDataTypeName, accountName, subnet) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.accountName(accountName);
        _this.subnet(subnet);
        return _this;
    }
    /** Name of the Data Lake Store account. */
    az_dls_account_network_rule_update_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** Name or ID of the subnet that allows access to DLS. If subnet name is provided, --name must be provided. */
    az_dls_account_network_rule_update_command_builder.prototype.subnet = function (value) {
        this.setFlag("--subnet", value);
        return this;
    };
    /** Add an object to a list of objects by specifying a path and key value pairs.  Example: --add property.listProperty <key=value, string or JSON string>. */
    az_dls_account_network_rule_update_command_builder.prototype.add = function (value) {
        this.setFlag("--add", value);
        return this;
    };
    /** When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON. */
    az_dls_account_network_rule_update_command_builder.prototype.forceString = function (value) {
        this.setFlag("--force-string", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_dls_account_network_rule_update_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** The virtual network rule name. */
    az_dls_account_network_rule_update_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Remove a property or an element from a list.  Example: --remove property.list <indexToRemove> OR --remove propertyToRemove. */
    az_dls_account_network_rule_update_command_builder.prototype.remove = function (value) {
        this.setFlag("--remove", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_dls_account_network_rule_update_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Update an object by specifying a property path and value to set.  Example: --set property1.property2=<value>. */
    az_dls_account_network_rule_update_command_builder.prototype.set = function (value) {
        this.setFlag("--set", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_dls_account_network_rule_update_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** The virtual network rule name. */
    az_dls_account_network_rule_update_command_builder.prototype.vnetName = function (value) {
        this.setFlag("--vnet-name", value);
        return this;
    };
    return az_dls_account_network_rule_update_command_builder;
}(base_1.CommandBuilder));
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
var az_dls_account_trusted_provider_create_command_builder = /** @class */ (function (_super) {
    __extends(az_dls_account_trusted_provider_create_command_builder, _super);
    function az_dls_account_trusted_provider_create_command_builder(commandPath, resultDataTypeName, account, idProvider, trustedIdProviderName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.account(account);
        _this.idProvider(idProvider);
        _this.trustedIdProviderName(trustedIdProviderName);
        return _this;
    }
    /** Name of the Data Lake Store account. */
    az_dls_account_trusted_provider_create_command_builder.prototype.account = function (value) {
        this.setFlag("--account", value);
        return this;
    };
    /** The URL of this trusted identity provider. */
    az_dls_account_trusted_provider_create_command_builder.prototype.idProvider = function (value) {
        this.setFlag("--id-provider", value);
        return this;
    };
    /** The name of the trusted identity provider. This is used for differentiation of providers in the account. */
    az_dls_account_trusted_provider_create_command_builder.prototype.trustedIdProviderName = function (value) {
        this.setFlag("--trusted-id-provider-name", value);
        return this;
    };
    /** If not specified, will attempt to discover the resource group for the specified Data Lake Store account. */
    az_dls_account_trusted_provider_create_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_dls_account_trusted_provider_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_dls_account_trusted_provider_create_command_builder;
}(base_1.CommandBuilder));
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
var az_dls_account_trusted_provider_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_dls_account_trusted_provider_delete_command_builder, _super);
    function az_dls_account_trusted_provider_delete_command_builder(commandPath, resultDataTypeName, trustedIdProviderName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.trustedIdProviderName(trustedIdProviderName);
        return _this;
    }
    /** The name of the trusted identity provider to delete. */
    az_dls_account_trusted_provider_delete_command_builder.prototype.trustedIdProviderName = function (value) {
        this.setFlag("--trusted-id-provider-name", value);
        return this;
    };
    /** Name of the Data Lake Store account. */
    az_dls_account_trusted_provider_delete_command_builder.prototype.account = function (value) {
        this.setFlag("--account", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_dls_account_trusted_provider_delete_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** If not specified, will attempt to discover the resource group for the specified Data Lake Store account. */
    az_dls_account_trusted_provider_delete_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_dls_account_trusted_provider_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_dls_account_trusted_provider_delete_command_builder;
}(base_1.CommandBuilder));
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
var az_dls_account_trusted_provider_list_command_builder = /** @class */ (function (_super) {
    __extends(az_dls_account_trusted_provider_list_command_builder, _super);
    function az_dls_account_trusted_provider_list_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Name of the Data Lake Store account. */
    az_dls_account_trusted_provider_list_command_builder.prototype.account = function (value) {
        this.setFlag("--account", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_dls_account_trusted_provider_list_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_dls_account_trusted_provider_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** If not specified, will attempt to discover the resource group for the specified Data Lake Store account. */
    az_dls_account_trusted_provider_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_dls_account_trusted_provider_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_dls_account_trusted_provider_list_command_builder;
}(base_1.CommandBuilder));
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
var az_dls_account_trusted_provider_show_command_builder = /** @class */ (function (_super) {
    __extends(az_dls_account_trusted_provider_show_command_builder, _super);
    function az_dls_account_trusted_provider_show_command_builder(commandPath, resultDataTypeName, trustedIdProviderName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.trustedIdProviderName(trustedIdProviderName);
        return _this;
    }
    /** The name of the trusted identity provider to retrieve. */
    az_dls_account_trusted_provider_show_command_builder.prototype.trustedIdProviderName = function (value) {
        this.setFlag("--trusted-id-provider-name", value);
        return this;
    };
    /** Name of the Data Lake Store account. */
    az_dls_account_trusted_provider_show_command_builder.prototype.account = function (value) {
        this.setFlag("--account", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_dls_account_trusted_provider_show_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_dls_account_trusted_provider_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** If not specified, will attempt to discover the resource group for the specified Data Lake Store account. */
    az_dls_account_trusted_provider_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_dls_account_trusted_provider_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_dls_account_trusted_provider_show_command_builder;
}(base_1.CommandBuilder));
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
var az_dls_account_trusted_provider_update_command_builder = /** @class */ (function (_super) {
    __extends(az_dls_account_trusted_provider_update_command_builder, _super);
    function az_dls_account_trusted_provider_update_command_builder(commandPath, resultDataTypeName, trustedIdProviderName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.trustedIdProviderName(trustedIdProviderName);
        return _this;
    }
    /** The name of the trusted identity provider. This is used for differentiation of providers in the account. */
    az_dls_account_trusted_provider_update_command_builder.prototype.trustedIdProviderName = function (value) {
        this.setFlag("--trusted-id-provider-name", value);
        return this;
    };
    /** Name of the Data Lake Store account. */
    az_dls_account_trusted_provider_update_command_builder.prototype.account = function (value) {
        this.setFlag("--account", value);
        return this;
    };
    /** The URL of this trusted identity provider. */
    az_dls_account_trusted_provider_update_command_builder.prototype.idProvider = function (value) {
        this.setFlag("--id-provider", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_dls_account_trusted_provider_update_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** If not specified, will attempt to discover the resource group for the specified Data Lake Store account. */
    az_dls_account_trusted_provider_update_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_dls_account_trusted_provider_update_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_dls_account_trusted_provider_update_command_builder;
}(base_1.CommandBuilder));
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
var az_dls_account_create_command_builder = /** @class */ (function (_super) {
    __extends(az_dls_account_create_command_builder, _super);
    function az_dls_account_create_command_builder(commandPath, resultDataTypeName, account) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.account(account);
        return _this;
    }
    /** Name of the Data Lake Store account. */
    az_dls_account_create_command_builder.prototype.account = function (value) {
        this.setFlag("--account", value);
        return this;
    };
    /** Name of the default group to give permissions to for freshly created files and folders in the Data Lake Store account. */
    az_dls_account_create_command_builder.prototype.defaultGroup = function (value) {
        this.setFlag("--default-group", value);
        return this;
    };
    /** Indicates that the account will not have any form of encryption applied to it. */
    az_dls_account_create_command_builder.prototype.disableEncryption = function (value) {
        this.setFlag("--disable-encryption", value);
        return this;
    };
    /** Indicates what type of encryption to provision the account with. By default, encryption is ServiceManaged. If no encryption is desired, it must be explicitly set with the --disable-encryption flag. */
    az_dls_account_create_command_builder.prototype.encryptionType = function (value) {
        this.setFlag("--encryption-type", value);
        return this;
    };
    /** Key name for the user-assigned encryption type. */
    az_dls_account_create_command_builder.prototype.keyName = function (value) {
        this.setFlag("--key-name", value);
        return this;
    };
    /** Key vault for the user-assigned encryption type. */
    az_dls_account_create_command_builder.prototype.keyVaultId = function (value) {
        this.setFlag("--key-vault-id", value);
        return this;
    };
    /** Key version for the user-assigned encryption type. */
    az_dls_account_create_command_builder.prototype.keyVersion = function (value) {
        this.setFlag("--key-version", value);
        return this;
    };
    /** Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`. */
    az_dls_account_create_command_builder.prototype.location = function (value) {
        this.setFlag("--location", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_dls_account_create_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_dls_account_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    az_dls_account_create_command_builder.prototype.tags = function (value) {
        this.setFlag("--tags", value);
        return this;
    };
    /** The desired commitment tier for this account to use. */
    az_dls_account_create_command_builder.prototype.tier = function (value) {
        this.setFlag("--tier", value);
        return this;
    };
    return az_dls_account_create_command_builder;
}(base_1.CommandBuilder));
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
var az_dls_account_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_dls_account_delete_command_builder, _super);
    function az_dls_account_delete_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Name of the Data Lake Store account. */
    az_dls_account_delete_command_builder.prototype.account = function (value) {
        this.setFlag("--account", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_dls_account_delete_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** If not specified, will attempt to discover the resource group for the specified Data Lake Store account. */
    az_dls_account_delete_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_dls_account_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_dls_account_delete_command_builder;
}(base_1.CommandBuilder));
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
var az_dls_account_enable_key_vault_command_builder = /** @class */ (function (_super) {
    __extends(az_dls_account_enable_key_vault_command_builder, _super);
    function az_dls_account_enable_key_vault_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Name of the Data Lake Store account. */
    az_dls_account_enable_key_vault_command_builder.prototype.account = function (value) {
        this.setFlag("--account", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_dls_account_enable_key_vault_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** If not specified, will attempt to discover the resource group for the specified Data Lake Store account. */
    az_dls_account_enable_key_vault_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_dls_account_enable_key_vault_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_dls_account_enable_key_vault_command_builder;
}(base_1.CommandBuilder));
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
var az_dls_account_list_command_builder = /** @class */ (function (_super) {
    __extends(az_dls_account_list_command_builder, _super);
    function az_dls_account_list_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_dls_account_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_dls_account_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_dls_account_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_dls_account_list_command_builder;
}(base_1.CommandBuilder));
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
var az_dls_account_show_command_builder = /** @class */ (function (_super) {
    __extends(az_dls_account_show_command_builder, _super);
    function az_dls_account_show_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Name of the Data Lake Store account. */
    az_dls_account_show_command_builder.prototype.account = function (value) {
        this.setFlag("--account", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_dls_account_show_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_dls_account_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** If not specified, will attempt to discover the resource group for the specified Data Lake Store account. */
    az_dls_account_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_dls_account_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_dls_account_show_command_builder;
}(base_1.CommandBuilder));
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
var az_dls_account_update_command_builder = /** @class */ (function (_super) {
    __extends(az_dls_account_update_command_builder, _super);
    function az_dls_account_update_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Name of the Data Lake Store account. */
    az_dls_account_update_command_builder.prototype.account = function (value) {
        this.setFlag("--account", value);
        return this;
    };
    /** Allow/block Azure originating IPs through the firewall. */
    az_dls_account_update_command_builder.prototype.allowAzureIps = function (value) {
        this.setFlag("--allow-azure-ips", value);
        return this;
    };
    /** Name of the default group to give permissions to for freshly created files and folders in the Data Lake Store account. */
    az_dls_account_update_command_builder.prototype.defaultGroup = function (value) {
        this.setFlag("--default-group", value);
        return this;
    };
    /** Enable/disable existing firewall rules. */
    az_dls_account_update_command_builder.prototype.firewallState = function (value) {
        this.setFlag("--firewall-state", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_dls_account_update_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Key version for the user-assigned encryption type. */
    az_dls_account_update_command_builder.prototype.keyVersion = function (value) {
        this.setFlag("--key-version", value);
        return this;
    };
    /** If not specified, will attempt to discover the resource group for the specified Data Lake Store account. */
    az_dls_account_update_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_dls_account_update_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    az_dls_account_update_command_builder.prototype.tags = function (value) {
        this.setFlag("--tags", value);
        return this;
    };
    /** The desired commitment tier for this account to use. */
    az_dls_account_update_command_builder.prototype.tier = function (value) {
        this.setFlag("--tier", value);
        return this;
    };
    /** Enable/disable the existing trusted ID providers. */
    az_dls_account_update_command_builder.prototype.trustedIdProviderState = function (value) {
        this.setFlag("--trusted-id-provider-state", value);
        return this;
    };
    return az_dls_account_update_command_builder;
}(base_1.CommandBuilder));
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
var az_dls_fs_access_remove_all_command_builder = /** @class */ (function (_super) {
    __extends(az_dls_fs_access_remove_all_command_builder, _super);
    function az_dls_fs_access_remove_all_command_builder(commandPath, resultDataTypeName, path) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.path(path);
        return _this;
    }
    /** The path in the specified Data Lake Store account where the action should take place. In the format '/folder/file.txt', where the first '/' after the DNS indicates the root of the file system. */
    az_dls_fs_access_remove_all_command_builder.prototype.path = function (value) {
        this.setFlag("--path", value);
        return this;
    };
    /** Name of the Data Lake Store account. */
    az_dls_fs_access_remove_all_command_builder.prototype.account = function (value) {
        this.setFlag("--account", value);
        return this;
    };
    /** A switch that, if specified, indicates that the remove ACL operation should remove the default ACL of the folder. Otherwise the regular ACL is removed. */
    az_dls_fs_access_remove_all_command_builder.prototype.defaultAcl = function (value) {
        this.setFlag("--default-acl", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_dls_fs_access_remove_all_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_dls_fs_access_remove_all_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_dls_fs_access_remove_all_command_builder;
}(base_1.CommandBuilder));
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
var az_dls_fs_access_remove_entry_command_builder = /** @class */ (function (_super) {
    __extends(az_dls_fs_access_remove_entry_command_builder, _super);
    function az_dls_fs_access_remove_entry_command_builder(commandPath, resultDataTypeName, aclSpec, path) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.aclSpec(aclSpec);
        _this.path(path);
        return _this;
    }
    /** The ACL specification to set on the path in the format '[default:]user|group|other:[entity id or UPN]:r|-w|-x|-,[default:]user|group|other:[entity id or UPN]:r|-w|-x|-,...'. */
    az_dls_fs_access_remove_entry_command_builder.prototype.aclSpec = function (value) {
        this.setFlag("--acl-spec", value);
        return this;
    };
    /** The path in the specified Data Lake Store account where the action should take place. In the format '/folder/file.txt', where the first '/' after the DNS indicates the root of the file system. */
    az_dls_fs_access_remove_entry_command_builder.prototype.path = function (value) {
        this.setFlag("--path", value);
        return this;
    };
    /** Name of the Data Lake Store account. */
    az_dls_fs_access_remove_entry_command_builder.prototype.account = function (value) {
        this.setFlag("--account", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_dls_fs_access_remove_entry_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_dls_fs_access_remove_entry_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_dls_fs_access_remove_entry_command_builder;
}(base_1.CommandBuilder));
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
var az_dls_fs_access_set_command_builder = /** @class */ (function (_super) {
    __extends(az_dls_fs_access_set_command_builder, _super);
    function az_dls_fs_access_set_command_builder(commandPath, resultDataTypeName, aclSpec, path) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.aclSpec(aclSpec);
        _this.path(path);
        return _this;
    }
    /** The ACL specification to set on the path in the format '[default:]user|group|other:[entity id or UPN]:r|-w|-x|-,[default:]user|group|other:[entity id or UPN]:r|-w|-x|-,...'. */
    az_dls_fs_access_set_command_builder.prototype.aclSpec = function (value) {
        this.setFlag("--acl-spec", value);
        return this;
    };
    /** The path in the specified Data Lake Store account where the action should take place. In the format '/folder/file.txt', where the first '/' after the DNS indicates the root of the file system. */
    az_dls_fs_access_set_command_builder.prototype.path = function (value) {
        this.setFlag("--path", value);
        return this;
    };
    /** Name of the Data Lake Store account. */
    az_dls_fs_access_set_command_builder.prototype.account = function (value) {
        this.setFlag("--account", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_dls_fs_access_set_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_dls_fs_access_set_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_dls_fs_access_set_command_builder;
}(base_1.CommandBuilder));
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
var az_dls_fs_access_set_entry_command_builder = /** @class */ (function (_super) {
    __extends(az_dls_fs_access_set_entry_command_builder, _super);
    function az_dls_fs_access_set_entry_command_builder(commandPath, resultDataTypeName, aclSpec, path) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.aclSpec(aclSpec);
        _this.path(path);
        return _this;
    }
    /** The ACL specification to set on the path in the format '[default:]user|group|other:[entity id or UPN]:r|-w|-x|-,[default:]user|group|other:[entity id or UPN]:r|-w|-x|-,...'. */
    az_dls_fs_access_set_entry_command_builder.prototype.aclSpec = function (value) {
        this.setFlag("--acl-spec", value);
        return this;
    };
    /** The path in the specified Data Lake Store account where the action should take place. In the format '/folder/file.txt', where the first '/' after the DNS indicates the root of the file system. */
    az_dls_fs_access_set_entry_command_builder.prototype.path = function (value) {
        this.setFlag("--path", value);
        return this;
    };
    /** Name of the Data Lake Store account. */
    az_dls_fs_access_set_entry_command_builder.prototype.account = function (value) {
        this.setFlag("--account", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_dls_fs_access_set_entry_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_dls_fs_access_set_entry_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_dls_fs_access_set_entry_command_builder;
}(base_1.CommandBuilder));
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
var az_dls_fs_access_set_owner_command_builder = /** @class */ (function (_super) {
    __extends(az_dls_fs_access_set_owner_command_builder, _super);
    function az_dls_fs_access_set_owner_command_builder(commandPath, resultDataTypeName, path) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.path(path);
        return _this;
    }
    /** The path in the specified Data Lake Store account where the action should take place. In the format '/folder/file.txt', where the first '/' after the DNS indicates the root of the file system. */
    az_dls_fs_access_set_owner_command_builder.prototype.path = function (value) {
        this.setFlag("--path", value);
        return this;
    };
    /** Name of the Data Lake Store account. */
    az_dls_fs_access_set_owner_command_builder.prototype.account = function (value) {
        this.setFlag("--account", value);
        return this;
    };
    /** The group Azure Active Directory object ID or user principal name to set as the owning group. */
    az_dls_fs_access_set_owner_command_builder.prototype.group = function (value) {
        this.setFlag("--group", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_dls_fs_access_set_owner_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** The user Azure Active Directory object ID or user principal name to set as the owner. */
    az_dls_fs_access_set_owner_command_builder.prototype.owner = function (value) {
        this.setFlag("--owner", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_dls_fs_access_set_owner_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_dls_fs_access_set_owner_command_builder;
}(base_1.CommandBuilder));
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
var az_dls_fs_access_set_permission_command_builder = /** @class */ (function (_super) {
    __extends(az_dls_fs_access_set_permission_command_builder, _super);
    function az_dls_fs_access_set_permission_command_builder(commandPath, resultDataTypeName, path, permission) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.path(path);
        _this.permission(permission);
        return _this;
    }
    /** The path in the specified Data Lake Store account where the action should take place. In the format '/folder/file.txt', where the first '/' after the DNS indicates the root of the file system. */
    az_dls_fs_access_set_permission_command_builder.prototype.path = function (value) {
        this.setFlag("--path", value);
        return this;
    };
    /** The octal representation of the permissions for user, group and mask. */
    az_dls_fs_access_set_permission_command_builder.prototype.permission = function (value) {
        this.setFlag("--permission", value);
        return this;
    };
    /** Name of the Data Lake Store account. */
    az_dls_fs_access_set_permission_command_builder.prototype.account = function (value) {
        this.setFlag("--account", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_dls_fs_access_set_permission_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_dls_fs_access_set_permission_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_dls_fs_access_set_permission_command_builder;
}(base_1.CommandBuilder));
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
var az_dls_fs_access_show_command_builder = /** @class */ (function (_super) {
    __extends(az_dls_fs_access_show_command_builder, _super);
    function az_dls_fs_access_show_command_builder(commandPath, resultDataTypeName, path) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.path(path);
        return _this;
    }
    /** The path in the specified Data Lake Store account where the action should take place. In the format '/folder/file.txt', where the first '/' after the DNS indicates the root of the file system. */
    az_dls_fs_access_show_command_builder.prototype.path = function (value) {
        this.setFlag("--path", value);
        return this;
    };
    /** Name of the Data Lake Store account. */
    az_dls_fs_access_show_command_builder.prototype.account = function (value) {
        this.setFlag("--account", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_dls_fs_access_show_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_dls_fs_access_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_dls_fs_access_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_dls_fs_access_show_command_builder;
}(base_1.CommandBuilder));
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
var az_dls_fs_append_command_builder = /** @class */ (function (_super) {
    __extends(az_dls_fs_append_command_builder, _super);
    function az_dls_fs_append_command_builder(commandPath, resultDataTypeName, content, path) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.content(content);
        _this.path(path);
        return _this;
    }
    /** Content to be appended to the file. */
    az_dls_fs_append_command_builder.prototype.content = function (value) {
        this.setFlag("--content", value);
        return this;
    };
    /** The path in the specified Data Lake Store account where the action should take place. In the format '/folder/file.txt', where the first '/' after the DNS indicates the root of the file system. */
    az_dls_fs_append_command_builder.prototype.path = function (value) {
        this.setFlag("--path", value);
        return this;
    };
    /** Name of the Data Lake Store account. */
    az_dls_fs_append_command_builder.prototype.account = function (value) {
        this.setFlag("--account", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_dls_fs_append_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_dls_fs_append_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_dls_fs_append_command_builder;
}(base_1.CommandBuilder));
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
var az_dls_fs_create_command_builder = /** @class */ (function (_super) {
    __extends(az_dls_fs_create_command_builder, _super);
    function az_dls_fs_create_command_builder(commandPath, resultDataTypeName, account, path) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.account(account);
        _this.path(path);
        return _this;
    }
    /** Name of the Data Lake Store account. */
    az_dls_fs_create_command_builder.prototype.account = function (value) {
        this.setFlag("--account", value);
        return this;
    };
    /** The path in the specified Data Lake Store account where the action should take place. In the format '/folder/file.txt', where the first '/' after the DNS indicates the root of the file system. */
    az_dls_fs_create_command_builder.prototype.path = function (value) {
        this.setFlag("--path", value);
        return this;
    };
    /** Content for the file to contain upon creation. */
    az_dls_fs_create_command_builder.prototype.content = function (value) {
        this.setFlag("--content", value);
        return this;
    };
    /** Indicates that this new item is a folder and not a file. */
    az_dls_fs_create_command_builder.prototype.folder = function (value) {
        this.setFlag("--folder", value);
        return this;
    };
    /** Indicates that, if the file or folder exists, it should be overwritten. */
    az_dls_fs_create_command_builder.prototype.force = function (value) {
        this.setFlag("--force", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_dls_fs_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_dls_fs_create_command_builder;
}(base_1.CommandBuilder));
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
var az_dls_fs_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_dls_fs_delete_command_builder, _super);
    function az_dls_fs_delete_command_builder(commandPath, resultDataTypeName, path) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.path(path);
        return _this;
    }
    /** The path in the specified Data Lake Store account where the action should take place. In the format '/folder/file.txt', where the first '/' after the DNS indicates the root of the file system. */
    az_dls_fs_delete_command_builder.prototype.path = function (value) {
        this.setFlag("--path", value);
        return this;
    };
    /** Name of the Data Lake Store account. */
    az_dls_fs_delete_command_builder.prototype.account = function (value) {
        this.setFlag("--account", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_dls_fs_delete_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Indicates this should be a recursive delete of the folder. */
    az_dls_fs_delete_command_builder.prototype.recurse = function (value) {
        this.setFlag("--recurse", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_dls_fs_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_dls_fs_delete_command_builder;
}(base_1.CommandBuilder));
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
var az_dls_fs_download_command_builder = /** @class */ (function (_super) {
    __extends(az_dls_fs_download_command_builder, _super);
    function az_dls_fs_download_command_builder(commandPath, resultDataTypeName, destinationPath, sourcePath) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.destinationPath(destinationPath);
        _this.sourcePath(sourcePath);
        return _this;
    }
    /** The local path where the file or folder will be downloaded to. */
    az_dls_fs_download_command_builder.prototype.destinationPath = function (value) {
        this.setFlag("--destination-path", value);
        return this;
    };
    /** The full path in the Data Lake Store filesystem to download the file or folder from. */
    az_dls_fs_download_command_builder.prototype.sourcePath = function (value) {
        this.setFlag("--source-path", value);
        return this;
    };
    /** Name of the Data Lake Store account. */
    az_dls_fs_download_command_builder.prototype.account = function (value) {
        this.setFlag("--account", value);
        return this;
    };
    /** Size of a block, in bytes. */
    az_dls_fs_download_command_builder.prototype.blockSize = function (value) {
        this.setFlag("--block-size", value);
        return this;
    };
    /** Size of the transfer buffer, in bytes. */
    az_dls_fs_download_command_builder.prototype.bufferSize = function (value) {
        this.setFlag("--buffer-size", value);
        return this;
    };
    /** Size of a chunk, in bytes. */
    az_dls_fs_download_command_builder.prototype.chunkSize = function (value) {
        this.setFlag("--chunk-size", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_dls_fs_download_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Indicates that, if the destination file or folder exists, it should be overwritten. */
    az_dls_fs_download_command_builder.prototype.overwrite = function (value) {
        this.setFlag("--overwrite", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_dls_fs_download_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Parallelism of the download. Default: The number of cores in the local machine. */
    az_dls_fs_download_command_builder.prototype.threadCount = function (value) {
        this.setFlag("--thread-count", value);
        return this;
    };
    return az_dls_fs_download_command_builder;
}(base_1.CommandBuilder));
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
var az_dls_fs_join_command_builder = /** @class */ (function (_super) {
    __extends(az_dls_fs_join_command_builder, _super);
    function az_dls_fs_join_command_builder(commandPath, resultDataTypeName, destinationPath, sourcePaths) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.destinationPath(destinationPath);
        _this.sourcePaths(sourcePaths);
        return _this;
    }
    /** The destination path in the Data Lake Store account. */
    az_dls_fs_join_command_builder.prototype.destinationPath = function (value) {
        this.setFlag("--destination-path", value);
        return this;
    };
    /** The space-separated list of files in the Data Lake Store account to join. */
    az_dls_fs_join_command_builder.prototype.sourcePaths = function (value) {
        this.setFlag("--source-paths", value);
        return this;
    };
    /** Name of the Data Lake Store account. */
    az_dls_fs_join_command_builder.prototype.account = function (value) {
        this.setFlag("--account", value);
        return this;
    };
    /** Indicates that, if the destination file already exists, it should be overwritten. */
    az_dls_fs_join_command_builder.prototype.force = function (value) {
        this.setFlag("--force", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_dls_fs_join_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_dls_fs_join_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_dls_fs_join_command_builder;
}(base_1.CommandBuilder));
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
var az_dls_fs_list_command_builder = /** @class */ (function (_super) {
    __extends(az_dls_fs_list_command_builder, _super);
    function az_dls_fs_list_command_builder(commandPath, resultDataTypeName, path) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.path(path);
        return _this;
    }
    /** The path in the specified Data Lake Store account where the action should take place. In the format '/folder/file.txt', where the first '/' after the DNS indicates the root of the file system. */
    az_dls_fs_list_command_builder.prototype.path = function (value) {
        this.setFlag("--path", value);
        return this;
    };
    /** Name of the Data Lake Store account. */
    az_dls_fs_list_command_builder.prototype.account = function (value) {
        this.setFlag("--account", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_dls_fs_list_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_dls_fs_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_dls_fs_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_dls_fs_list_command_builder;
}(base_1.CommandBuilder));
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
var az_dls_fs_move_command_builder = /** @class */ (function (_super) {
    __extends(az_dls_fs_move_command_builder, _super);
    function az_dls_fs_move_command_builder(commandPath, resultDataTypeName, destinationPath, sourcePath) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.destinationPath(destinationPath);
        _this.sourcePath(sourcePath);
        return _this;
    }
    /** The destination path in the Data Lake Store account. */
    az_dls_fs_move_command_builder.prototype.destinationPath = function (value) {
        this.setFlag("--destination-path", value);
        return this;
    };
    /** The file or folder to move. */
    az_dls_fs_move_command_builder.prototype.sourcePath = function (value) {
        this.setFlag("--source-path", value);
        return this;
    };
    /** Name of the Data Lake Store account. */
    az_dls_fs_move_command_builder.prototype.account = function (value) {
        this.setFlag("--account", value);
        return this;
    };
    /** Indicates that, if the destination file or folder already exists, it should be overwritten and replaced with the file or folder being moved. */
    az_dls_fs_move_command_builder.prototype.force = function (value) {
        this.setFlag("--force", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_dls_fs_move_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_dls_fs_move_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_dls_fs_move_command_builder;
}(base_1.CommandBuilder));
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
var az_dls_fs_preview_command_builder = /** @class */ (function (_super) {
    __extends(az_dls_fs_preview_command_builder, _super);
    function az_dls_fs_preview_command_builder(commandPath, resultDataTypeName, path) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.path(path);
        return _this;
    }
    /** The path in the specified Data Lake Store account where the action should take place. In the format '/folder/file.txt', where the first '/' after the DNS indicates the root of the file system. */
    az_dls_fs_preview_command_builder.prototype.path = function (value) {
        this.setFlag("--path", value);
        return this;
    };
    /** Name of the Data Lake Store account. */
    az_dls_fs_preview_command_builder.prototype.account = function (value) {
        this.setFlag("--account", value);
        return this;
    };
    /** Indicates that, if the preview is larger than 1MB, still retrieve it. This can potentially be very slow, depending on how large the file is. */
    az_dls_fs_preview_command_builder.prototype.force = function (value) {
        this.setFlag("--force", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_dls_fs_preview_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** The amount of data to preview in bytes. */
    az_dls_fs_preview_command_builder.prototype.length = function (value) {
        this.setFlag("--length", value);
        return this;
    };
    /** The position in bytes to start the preview from. */
    az_dls_fs_preview_command_builder.prototype.offset = function (value) {
        this.setFlag("--offset", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_dls_fs_preview_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_dls_fs_preview_command_builder;
}(base_1.CommandBuilder));
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
var az_dls_fs_remove_expiry_command_builder = /** @class */ (function (_super) {
    __extends(az_dls_fs_remove_expiry_command_builder, _super);
    function az_dls_fs_remove_expiry_command_builder(commandPath, resultDataTypeName, path) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.path(path);
        return _this;
    }
    /** The path in the specified Data Lake Store account where the action should take place. In the format '/folder/file.txt', where the first '/' after the DNS indicates the root of the file system. */
    az_dls_fs_remove_expiry_command_builder.prototype.path = function (value) {
        this.setFlag("--path", value);
        return this;
    };
    /** Name of the Data Lake Store account. */
    az_dls_fs_remove_expiry_command_builder.prototype.account = function (value) {
        this.setFlag("--account", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_dls_fs_remove_expiry_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_dls_fs_remove_expiry_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_dls_fs_remove_expiry_command_builder;
}(base_1.CommandBuilder));
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
var az_dls_fs_set_expiry_command_builder = /** @class */ (function (_super) {
    __extends(az_dls_fs_set_expiry_command_builder, _super);
    function az_dls_fs_set_expiry_command_builder(commandPath, resultDataTypeName, expirationTime, path) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.expirationTime(expirationTime);
        _this.path(path);
        return _this;
    }
    /** The absolute value of the expiration time expressed as milliseconds since the epoch. */
    az_dls_fs_set_expiry_command_builder.prototype.expirationTime = function (value) {
        this.setFlag("--expiration-time", value);
        return this;
    };
    /** The path in the specified Data Lake Store account where the action should take place. In the format '/folder/file.txt', where the first '/' after the DNS indicates the root of the file system. */
    az_dls_fs_set_expiry_command_builder.prototype.path = function (value) {
        this.setFlag("--path", value);
        return this;
    };
    /** Name of the Data Lake Store account. */
    az_dls_fs_set_expiry_command_builder.prototype.account = function (value) {
        this.setFlag("--account", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_dls_fs_set_expiry_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_dls_fs_set_expiry_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_dls_fs_set_expiry_command_builder;
}(base_1.CommandBuilder));
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
var az_dls_fs_show_command_builder = /** @class */ (function (_super) {
    __extends(az_dls_fs_show_command_builder, _super);
    function az_dls_fs_show_command_builder(commandPath, resultDataTypeName, path) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.path(path);
        return _this;
    }
    /** The path in the specified Data Lake Store account where the action should take place. In the format '/folder/file.txt', where the first '/' after the DNS indicates the root of the file system. */
    az_dls_fs_show_command_builder.prototype.path = function (value) {
        this.setFlag("--path", value);
        return this;
    };
    /** Name of the Data Lake Store account. */
    az_dls_fs_show_command_builder.prototype.account = function (value) {
        this.setFlag("--account", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_dls_fs_show_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_dls_fs_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_dls_fs_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_dls_fs_show_command_builder;
}(base_1.CommandBuilder));
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
var az_dls_fs_test_command_builder = /** @class */ (function (_super) {
    __extends(az_dls_fs_test_command_builder, _super);
    function az_dls_fs_test_command_builder(commandPath, resultDataTypeName, path) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.path(path);
        return _this;
    }
    /** The path in the specified Data Lake Store account where the action should take place. In the format '/folder/file.txt', where the first '/' after the DNS indicates the root of the file system. */
    az_dls_fs_test_command_builder.prototype.path = function (value) {
        this.setFlag("--path", value);
        return this;
    };
    /** Name of the Data Lake Store account. */
    az_dls_fs_test_command_builder.prototype.account = function (value) {
        this.setFlag("--account", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_dls_fs_test_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_dls_fs_test_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_dls_fs_test_command_builder;
}(base_1.CommandBuilder));
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
var az_dls_fs_upload_command_builder = /** @class */ (function (_super) {
    __extends(az_dls_fs_upload_command_builder, _super);
    function az_dls_fs_upload_command_builder(commandPath, resultDataTypeName, destinationPath, sourcePath) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.destinationPath(destinationPath);
        _this.sourcePath(sourcePath);
        return _this;
    }
    /** The full path in the Data Lake Store filesystem to upload the file or folder to. */
    az_dls_fs_upload_command_builder.prototype.destinationPath = function (value) {
        this.setFlag("--destination-path", value);
        return this;
    };
    /** The path to the file or folder to upload. */
    az_dls_fs_upload_command_builder.prototype.sourcePath = function (value) {
        this.setFlag("--source-path", value);
        return this;
    };
    /** Name of the Data Lake Store account. */
    az_dls_fs_upload_command_builder.prototype.account = function (value) {
        this.setFlag("--account", value);
        return this;
    };
    /** Size of a block, in bytes. */
    az_dls_fs_upload_command_builder.prototype.blockSize = function (value) {
        this.setFlag("--block-size", value);
        return this;
    };
    /** Size of the transfer buffer, in bytes. */
    az_dls_fs_upload_command_builder.prototype.bufferSize = function (value) {
        this.setFlag("--buffer-size", value);
        return this;
    };
    /** Size of a chunk, in bytes. */
    az_dls_fs_upload_command_builder.prototype.chunkSize = function (value) {
        this.setFlag("--chunk-size", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_dls_fs_upload_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Indicates that, if the destination file or folder exists, it should be overwritten. */
    az_dls_fs_upload_command_builder.prototype.overwrite = function (value) {
        this.setFlag("--overwrite", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_dls_fs_upload_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Parallelism of the upload. Default: The number of cores in the local machine. */
    az_dls_fs_upload_command_builder.prototype.threadCount = function (value) {
        this.setFlag("--thread-count", value);
        return this;
    };
    return az_dls_fs_upload_command_builder;
}(base_1.CommandBuilder));
