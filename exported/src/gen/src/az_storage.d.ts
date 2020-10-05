import { CommandBuilder } from '../base';
import { az_storage_account_blob_service_properties_show_command_result } from './models/az_storage_account_blob_service_properties_show_command_result';
import { az_storage_account_blob_service_properties_update_command_result } from './models/az_storage_account_blob_service_properties_update_command_result';
import { az_storage_account_encryption_scope_create_command_result } from './models/az_storage_account_encryption_scope_create_command_result';
import { az_storage_account_encryption_scope_list_command_result } from './models/az_storage_account_encryption_scope_list_command_result';
import { az_storage_account_encryption_scope_show_command_result } from './models/az_storage_account_encryption_scope_show_command_result';
import { az_storage_account_encryption_scope_update_command_result } from './models/az_storage_account_encryption_scope_update_command_result';
import { az_storage_account_file_service_properties_show_command_result } from './models/az_storage_account_file_service_properties_show_command_result';
import { az_storage_account_file_service_properties_update_command_result } from './models/az_storage_account_file_service_properties_update_command_result';
import { az_storage_account_keys_list_command_result } from './models/az_storage_account_keys_list_command_result';
import { az_storage_account_keys_renew_command_result } from './models/az_storage_account_keys_renew_command_result';
import { az_storage_account_management_policy_create_command_result } from './models/az_storage_account_management_policy_create_command_result';
import { az_storage_account_management_policy_delete_command_result } from './models/az_storage_account_management_policy_delete_command_result';
import { az_storage_account_management_policy_show_command_result } from './models/az_storage_account_management_policy_show_command_result';
import { az_storage_account_management_policy_update_command_result } from './models/az_storage_account_management_policy_update_command_result';
import { az_storage_account_network_rule_add_command_result } from './models/az_storage_account_network_rule_add_command_result';
import { az_storage_account_network_rule_list_command_result } from './models/az_storage_account_network_rule_list_command_result';
import { az_storage_account_network_rule_remove_command_result } from './models/az_storage_account_network_rule_remove_command_result';
import { az_storage_account_or_policy_rule_add_command_result } from './models/az_storage_account_or_policy_rule_add_command_result';
import { az_storage_account_or_policy_rule_list_command_result } from './models/az_storage_account_or_policy_rule_list_command_result';
import { az_storage_account_or_policy_rule_remove_command_result } from './models/az_storage_account_or_policy_rule_remove_command_result';
import { az_storage_account_or_policy_rule_show_command_result } from './models/az_storage_account_or_policy_rule_show_command_result';
import { az_storage_account_or_policy_rule_update_command_result } from './models/az_storage_account_or_policy_rule_update_command_result';
import { az_storage_account_or_policy_create_command_result } from './models/az_storage_account_or_policy_create_command_result';
import { az_storage_account_or_policy_delete_command_result } from './models/az_storage_account_or_policy_delete_command_result';
import { az_storage_account_or_policy_list_command_result } from './models/az_storage_account_or_policy_list_command_result';
import { az_storage_account_or_policy_show_command_result } from './models/az_storage_account_or_policy_show_command_result';
import { az_storage_account_or_policy_update_command_result } from './models/az_storage_account_or_policy_update_command_result';
import { az_storage_account_private_endpoint_connection_approve_command_result } from './models/az_storage_account_private_endpoint_connection_approve_command_result';
import { az_storage_account_private_endpoint_connection_delete_command_result } from './models/az_storage_account_private_endpoint_connection_delete_command_result';
import { az_storage_account_private_endpoint_connection_reject_command_result } from './models/az_storage_account_private_endpoint_connection_reject_command_result';
import { az_storage_account_private_endpoint_connection_show_command_result } from './models/az_storage_account_private_endpoint_connection_show_command_result';
import { az_storage_account_private_link_resource_list_command_result } from './models/az_storage_account_private_link_resource_list_command_result';
import { az_storage_account_check_name_command_result } from './models/az_storage_account_check_name_command_result';
import { az_storage_account_create_command_result } from './models/az_storage_account_create_command_result';
import { az_storage_account_delete_command_result } from './models/az_storage_account_delete_command_result';
import { az_storage_account_failover_command_result } from './models/az_storage_account_failover_command_result';
import { az_storage_account_generate_sas_command_result } from './models/az_storage_account_generate_sas_command_result';
import { az_storage_account_list_command_result } from './models/az_storage_account_list_command_result';
import { az_storage_account_revoke_delegation_keys_command_result } from './models/az_storage_account_revoke_delegation_keys_command_result';
import { az_storage_account_show_command_result } from './models/az_storage_account_show_command_result';
import { az_storage_account_show_connection_string_command_result } from './models/az_storage_account_show_connection_string_command_result';
import { az_storage_account_show_usage_command_result } from './models/az_storage_account_show_usage_command_result';
import { az_storage_account_update_command_result } from './models/az_storage_account_update_command_result';
import { az_storage_blob_copy_cancel_command_result } from './models/az_storage_blob_copy_cancel_command_result';
import { az_storage_blob_copy_start_command_result } from './models/az_storage_blob_copy_start_command_result';
import { az_storage_blob_copy_start_batch_command_result } from './models/az_storage_blob_copy_start_batch_command_result';
import { az_storage_blob_incremental_copy_cancel_command_result } from './models/az_storage_blob_incremental_copy_cancel_command_result';
import { az_storage_blob_incremental_copy_start_command_result } from './models/az_storage_blob_incremental_copy_start_command_result';
import { az_storage_blob_lease_acquire_command_result } from './models/az_storage_blob_lease_acquire_command_result';
import { az_storage_blob_lease_break_command_result } from './models/az_storage_blob_lease_break_command_result';
import { az_storage_blob_lease_change_command_result } from './models/az_storage_blob_lease_change_command_result';
import { az_storage_blob_lease_release_command_result } from './models/az_storage_blob_lease_release_command_result';
import { az_storage_blob_lease_renew_command_result } from './models/az_storage_blob_lease_renew_command_result';
import { az_storage_blob_metadata_show_command_result } from './models/az_storage_blob_metadata_show_command_result';
import { az_storage_blob_metadata_update_command_result } from './models/az_storage_blob_metadata_update_command_result';
import { az_storage_blob_service_properties_delete_policy_show_command_result } from './models/az_storage_blob_service_properties_delete_policy_show_command_result';
import { az_storage_blob_service_properties_delete_policy_update_command_result } from './models/az_storage_blob_service_properties_delete_policy_update_command_result';
import { az_storage_blob_service_properties_show_command_result } from './models/az_storage_blob_service_properties_show_command_result';
import { az_storage_blob_service_properties_update_command_result } from './models/az_storage_blob_service_properties_update_command_result';
import { az_storage_blob_delete_command_result } from './models/az_storage_blob_delete_command_result';
import { az_storage_blob_delete_batch_command_result } from './models/az_storage_blob_delete_batch_command_result';
import { az_storage_blob_download_command_result } from './models/az_storage_blob_download_command_result';
import { az_storage_blob_download_batch_command_result } from './models/az_storage_blob_download_batch_command_result';
import { az_storage_blob_exists_command_result } from './models/az_storage_blob_exists_command_result';
import { az_storage_blob_generate_sas_command_result } from './models/az_storage_blob_generate_sas_command_result';
import { az_storage_blob_list_command_result } from './models/az_storage_blob_list_command_result';
import { az_storage_blob_restore_command_result } from './models/az_storage_blob_restore_command_result';
import { az_storage_blob_set_tier_command_result } from './models/az_storage_blob_set_tier_command_result';
import { az_storage_blob_show_command_result } from './models/az_storage_blob_show_command_result';
import { az_storage_blob_snapshot_command_result } from './models/az_storage_blob_snapshot_command_result';
import { az_storage_blob_sync_command_result } from './models/az_storage_blob_sync_command_result';
import { az_storage_blob_undelete_command_result } from './models/az_storage_blob_undelete_command_result';
import { az_storage_blob_update_command_result } from './models/az_storage_blob_update_command_result';
import { az_storage_blob_upload_command_result } from './models/az_storage_blob_upload_command_result';
import { az_storage_blob_upload_batch_command_result } from './models/az_storage_blob_upload_batch_command_result';
import { az_storage_blob_url_command_result } from './models/az_storage_blob_url_command_result';
import { az_storage_container_immutability_policy_create_command_result } from './models/az_storage_container_immutability_policy_create_command_result';
import { az_storage_container_immutability_policy_delete_command_result } from './models/az_storage_container_immutability_policy_delete_command_result';
import { az_storage_container_immutability_policy_extend_command_result } from './models/az_storage_container_immutability_policy_extend_command_result';
import { az_storage_container_immutability_policy_lock_command_result } from './models/az_storage_container_immutability_policy_lock_command_result';
import { az_storage_container_immutability_policy_show_command_result } from './models/az_storage_container_immutability_policy_show_command_result';
import { az_storage_container_lease_acquire_command_result } from './models/az_storage_container_lease_acquire_command_result';
import { az_storage_container_lease_break_command_result } from './models/az_storage_container_lease_break_command_result';
import { az_storage_container_lease_change_command_result } from './models/az_storage_container_lease_change_command_result';
import { az_storage_container_lease_release_command_result } from './models/az_storage_container_lease_release_command_result';
import { az_storage_container_lease_renew_command_result } from './models/az_storage_container_lease_renew_command_result';
import { az_storage_container_legal_hold_clear_command_result } from './models/az_storage_container_legal_hold_clear_command_result';
import { az_storage_container_legal_hold_set_command_result } from './models/az_storage_container_legal_hold_set_command_result';
import { az_storage_container_legal_hold_show_command_result } from './models/az_storage_container_legal_hold_show_command_result';
import { az_storage_container_metadata_show_command_result } from './models/az_storage_container_metadata_show_command_result';
import { az_storage_container_metadata_update_command_result } from './models/az_storage_container_metadata_update_command_result';
import { az_storage_container_policy_create_command_result } from './models/az_storage_container_policy_create_command_result';
import { az_storage_container_policy_delete_command_result } from './models/az_storage_container_policy_delete_command_result';
import { az_storage_container_policy_list_command_result } from './models/az_storage_container_policy_list_command_result';
import { az_storage_container_policy_show_command_result } from './models/az_storage_container_policy_show_command_result';
import { az_storage_container_policy_update_command_result } from './models/az_storage_container_policy_update_command_result';
import { az_storage_container_create_command_result } from './models/az_storage_container_create_command_result';
import { az_storage_container_delete_command_result } from './models/az_storage_container_delete_command_result';
import { az_storage_container_exists_command_result } from './models/az_storage_container_exists_command_result';
import { az_storage_container_generate_sas_command_result } from './models/az_storage_container_generate_sas_command_result';
import { az_storage_container_list_command_result } from './models/az_storage_container_list_command_result';
import { az_storage_container_set_permission_command_result } from './models/az_storage_container_set_permission_command_result';
import { az_storage_container_show_command_result } from './models/az_storage_container_show_command_result';
import { az_storage_container_show_permission_command_result } from './models/az_storage_container_show_permission_command_result';
import { az_storage_cors_add_command_result } from './models/az_storage_cors_add_command_result';
import { az_storage_cors_clear_command_result } from './models/az_storage_cors_clear_command_result';
import { az_storage_cors_list_command_result } from './models/az_storage_cors_list_command_result';
import { az_storage_directory_metadata_show_command_result } from './models/az_storage_directory_metadata_show_command_result';
import { az_storage_directory_metadata_update_command_result } from './models/az_storage_directory_metadata_update_command_result';
import { az_storage_directory_create_command_result } from './models/az_storage_directory_create_command_result';
import { az_storage_directory_delete_command_result } from './models/az_storage_directory_delete_command_result';
import { az_storage_directory_exists_command_result } from './models/az_storage_directory_exists_command_result';
import { az_storage_directory_list_command_result } from './models/az_storage_directory_list_command_result';
import { az_storage_directory_show_command_result } from './models/az_storage_directory_show_command_result';
import { az_storage_entity_delete_command_result } from './models/az_storage_entity_delete_command_result';
import { az_storage_entity_insert_command_result } from './models/az_storage_entity_insert_command_result';
import { az_storage_entity_merge_command_result } from './models/az_storage_entity_merge_command_result';
import { az_storage_entity_query_command_result } from './models/az_storage_entity_query_command_result';
import { az_storage_entity_replace_command_result } from './models/az_storage_entity_replace_command_result';
import { az_storage_entity_show_command_result } from './models/az_storage_entity_show_command_result';
import { az_storage_file_copy_cancel_command_result } from './models/az_storage_file_copy_cancel_command_result';
import { az_storage_file_copy_start_command_result } from './models/az_storage_file_copy_start_command_result';
import { az_storage_file_copy_start_batch_command_result } from './models/az_storage_file_copy_start_batch_command_result';
import { az_storage_file_metadata_show_command_result } from './models/az_storage_file_metadata_show_command_result';
import { az_storage_file_metadata_update_command_result } from './models/az_storage_file_metadata_update_command_result';
import { az_storage_file_delete_command_result } from './models/az_storage_file_delete_command_result';
import { az_storage_file_delete_batch_command_result } from './models/az_storage_file_delete_batch_command_result';
import { az_storage_file_download_command_result } from './models/az_storage_file_download_command_result';
import { az_storage_file_download_batch_command_result } from './models/az_storage_file_download_batch_command_result';
import { az_storage_file_exists_command_result } from './models/az_storage_file_exists_command_result';
import { az_storage_file_generate_sas_command_result } from './models/az_storage_file_generate_sas_command_result';
import { az_storage_file_list_command_result } from './models/az_storage_file_list_command_result';
import { az_storage_file_resize_command_result } from './models/az_storage_file_resize_command_result';
import { az_storage_file_show_command_result } from './models/az_storage_file_show_command_result';
import { az_storage_file_update_command_result } from './models/az_storage_file_update_command_result';
import { az_storage_file_upload_command_result } from './models/az_storage_file_upload_command_result';
import { az_storage_file_upload_batch_command_result } from './models/az_storage_file_upload_batch_command_result';
import { az_storage_file_url_command_result } from './models/az_storage_file_url_command_result';
import { az_storage_fs_access_set_command_result } from './models/az_storage_fs_access_set_command_result';
import { az_storage_fs_access_show_command_result } from './models/az_storage_fs_access_show_command_result';
import { az_storage_fs_directory_metadata_show_command_result } from './models/az_storage_fs_directory_metadata_show_command_result';
import { az_storage_fs_directory_metadata_update_command_result } from './models/az_storage_fs_directory_metadata_update_command_result';
import { az_storage_fs_directory_create_command_result } from './models/az_storage_fs_directory_create_command_result';
import { az_storage_fs_directory_delete_command_result } from './models/az_storage_fs_directory_delete_command_result';
import { az_storage_fs_directory_exists_command_result } from './models/az_storage_fs_directory_exists_command_result';
import { az_storage_fs_directory_list_command_result } from './models/az_storage_fs_directory_list_command_result';
import { az_storage_fs_directory_move_command_result } from './models/az_storage_fs_directory_move_command_result';
import { az_storage_fs_directory_show_command_result } from './models/az_storage_fs_directory_show_command_result';
import { az_storage_fs_file_metadata_show_command_result } from './models/az_storage_fs_file_metadata_show_command_result';
import { az_storage_fs_file_metadata_update_command_result } from './models/az_storage_fs_file_metadata_update_command_result';
import { az_storage_fs_file_append_command_result } from './models/az_storage_fs_file_append_command_result';
import { az_storage_fs_file_create_command_result } from './models/az_storage_fs_file_create_command_result';
import { az_storage_fs_file_delete_command_result } from './models/az_storage_fs_file_delete_command_result';
import { az_storage_fs_file_download_command_result } from './models/az_storage_fs_file_download_command_result';
import { az_storage_fs_file_exists_command_result } from './models/az_storage_fs_file_exists_command_result';
import { az_storage_fs_file_list_command_result } from './models/az_storage_fs_file_list_command_result';
import { az_storage_fs_file_move_command_result } from './models/az_storage_fs_file_move_command_result';
import { az_storage_fs_file_show_command_result } from './models/az_storage_fs_file_show_command_result';
import { az_storage_fs_file_upload_command_result } from './models/az_storage_fs_file_upload_command_result';
import { az_storage_fs_metadata_show_command_result } from './models/az_storage_fs_metadata_show_command_result';
import { az_storage_fs_metadata_update_command_result } from './models/az_storage_fs_metadata_update_command_result';
import { az_storage_fs_create_command_result } from './models/az_storage_fs_create_command_result';
import { az_storage_fs_delete_command_result } from './models/az_storage_fs_delete_command_result';
import { az_storage_fs_exists_command_result } from './models/az_storage_fs_exists_command_result';
import { az_storage_fs_list_command_result } from './models/az_storage_fs_list_command_result';
import { az_storage_fs_show_command_result } from './models/az_storage_fs_show_command_result';
import { az_storage_logging_off_command_result } from './models/az_storage_logging_off_command_result';
import { az_storage_logging_show_command_result } from './models/az_storage_logging_show_command_result';
import { az_storage_logging_update_command_result } from './models/az_storage_logging_update_command_result';
import { az_storage_message_clear_command_result } from './models/az_storage_message_clear_command_result';
import { az_storage_message_delete_command_result } from './models/az_storage_message_delete_command_result';
import { az_storage_message_get_command_result } from './models/az_storage_message_get_command_result';
import { az_storage_message_peek_command_result } from './models/az_storage_message_peek_command_result';
import { az_storage_message_put_command_result } from './models/az_storage_message_put_command_result';
import { az_storage_message_update_command_result } from './models/az_storage_message_update_command_result';
import { az_storage_metrics_show_command_result } from './models/az_storage_metrics_show_command_result';
import { az_storage_metrics_update_command_result } from './models/az_storage_metrics_update_command_result';
import { az_storage_queue_metadata_show_command_result } from './models/az_storage_queue_metadata_show_command_result';
import { az_storage_queue_metadata_update_command_result } from './models/az_storage_queue_metadata_update_command_result';
import { az_storage_queue_policy_create_command_result } from './models/az_storage_queue_policy_create_command_result';
import { az_storage_queue_policy_delete_command_result } from './models/az_storage_queue_policy_delete_command_result';
import { az_storage_queue_policy_list_command_result } from './models/az_storage_queue_policy_list_command_result';
import { az_storage_queue_policy_show_command_result } from './models/az_storage_queue_policy_show_command_result';
import { az_storage_queue_policy_update_command_result } from './models/az_storage_queue_policy_update_command_result';
import { az_storage_queue_create_command_result } from './models/az_storage_queue_create_command_result';
import { az_storage_queue_delete_command_result } from './models/az_storage_queue_delete_command_result';
import { az_storage_queue_exists_command_result } from './models/az_storage_queue_exists_command_result';
import { az_storage_queue_generate_sas_command_result } from './models/az_storage_queue_generate_sas_command_result';
import { az_storage_queue_list_command_result } from './models/az_storage_queue_list_command_result';
import { az_storage_queue_stats_command_result } from './models/az_storage_queue_stats_command_result';
import { az_storage_share_metadata_show_command_result } from './models/az_storage_share_metadata_show_command_result';
import { az_storage_share_metadata_update_command_result } from './models/az_storage_share_metadata_update_command_result';
import { az_storage_share_policy_create_command_result } from './models/az_storage_share_policy_create_command_result';
import { az_storage_share_policy_delete_command_result } from './models/az_storage_share_policy_delete_command_result';
import { az_storage_share_policy_list_command_result } from './models/az_storage_share_policy_list_command_result';
import { az_storage_share_policy_show_command_result } from './models/az_storage_share_policy_show_command_result';
import { az_storage_share_policy_update_command_result } from './models/az_storage_share_policy_update_command_result';
import { az_storage_share_rm_create_command_result } from './models/az_storage_share_rm_create_command_result';
import { az_storage_share_rm_delete_command_result } from './models/az_storage_share_rm_delete_command_result';
import { az_storage_share_rm_exists_command_result } from './models/az_storage_share_rm_exists_command_result';
import { az_storage_share_rm_list_command_result } from './models/az_storage_share_rm_list_command_result';
import { az_storage_share_rm_restore_command_result } from './models/az_storage_share_rm_restore_command_result';
import { az_storage_share_rm_show_command_result } from './models/az_storage_share_rm_show_command_result';
import { az_storage_share_rm_stats_command_result } from './models/az_storage_share_rm_stats_command_result';
import { az_storage_share_rm_update_command_result } from './models/az_storage_share_rm_update_command_result';
import { az_storage_share_create_command_result } from './models/az_storage_share_create_command_result';
import { az_storage_share_delete_command_result } from './models/az_storage_share_delete_command_result';
import { az_storage_share_exists_command_result } from './models/az_storage_share_exists_command_result';
import { az_storage_share_generate_sas_command_result } from './models/az_storage_share_generate_sas_command_result';
import { az_storage_share_list_command_result } from './models/az_storage_share_list_command_result';
import { az_storage_share_show_command_result } from './models/az_storage_share_show_command_result';
import { az_storage_share_snapshot_command_result } from './models/az_storage_share_snapshot_command_result';
import { az_storage_share_stats_command_result } from './models/az_storage_share_stats_command_result';
import { az_storage_share_update_command_result } from './models/az_storage_share_update_command_result';
import { az_storage_share_url_command_result } from './models/az_storage_share_url_command_result';
import { az_storage_table_policy_create_command_result } from './models/az_storage_table_policy_create_command_result';
import { az_storage_table_policy_delete_command_result } from './models/az_storage_table_policy_delete_command_result';
import { az_storage_table_policy_list_command_result } from './models/az_storage_table_policy_list_command_result';
import { az_storage_table_policy_show_command_result } from './models/az_storage_table_policy_show_command_result';
import { az_storage_table_policy_update_command_result } from './models/az_storage_table_policy_update_command_result';
import { az_storage_table_create_command_result } from './models/az_storage_table_create_command_result';
import { az_storage_table_delete_command_result } from './models/az_storage_table_delete_command_result';
import { az_storage_table_exists_command_result } from './models/az_storage_table_exists_command_result';
import { az_storage_table_generate_sas_command_result } from './models/az_storage_table_generate_sas_command_result';
import { az_storage_table_list_command_result } from './models/az_storage_table_list_command_result';
import { az_storage_table_stats_command_result } from './models/az_storage_table_stats_command_result';
import { az_storage_copy_command_result } from './models/az_storage_copy_command_result';
import { az_storage_remove_command_result } from './models/az_storage_remove_command_result';
/** Manage the properties of a storage account's blob service. */
export declare class az_storage_account_blob_service_properties {
    /**
     * Show the properties of a storage account's blob service.
     *
     * Syntax:
     * ```
     * az storage account blob-service-properties show --account-name
     *                                                 [--query-examples]
     *                                                 [--resource-group]
     *                                                 [--subscription]
     * ```
     *
     * @param {string} accountName The storage account name.
     */
    static show(accountName: string): az_storage_account_blob_service_properties_show_command_builder;
    /**
     * Update the properties of a storage account's blob service.
     *
     * Syntax:
     * ```
     * az storage account blob-service-properties update --account-name
     *                                                   [--add]
     *                                                   [--container-days]
     *                                                   [--container-retention {false, true}]
     *                                                   [--delete-retention-days]
     *                                                   [--enable-change-feed {false, true}]
     *                                                   [--enable-delete-retention {false, true}]
     *                                                   [--enable-restore-policy {false, true}]
     *                                                   [--enable-versioning {false, true}]
     *                                                   [--force-string]
     *                                                   [--remove]
     *                                                   [--resource-group]
     *                                                   [--restore-days]
     *                                                   [--set]
     *                                                   [--subscription]
     * ```
     *
     * @param {string} accountName The storage account name.
     */
    static update(accountName: string): az_storage_account_blob_service_properties_update_command_builder;
}
/** Manage encryption scope for a storage account. */
export declare class az_storage_account_encryption_scope {
    /**
     * Create an encryption scope within storage account.
     *
     * Syntax:
     * ```
     * az storage account encryption-scope create --account-name
     *                                            --name
     *                                            [--key-source {Microsoft.KeyVault, Microsoft.Storage}]
     *                                            [--key-uri]
     *                                            [--resource-group]
     *                                            [--subscription]
     * ```
     *
     * @param {string} accountName The storage account name.
     * @param {string} name The name of the encryption scope within the specified storage account.
     */
    static create(accountName: string, name: string): az_storage_account_encryption_scope_create_command_builder;
    /**
     * List encryption scopes within storage account.
     *
     * Syntax:
     * ```
     * az storage account encryption-scope list --account-name
     *                                          [--query-examples]
     *                                          [--resource-group]
     *                                          [--subscription]
     * ```
     *
     * @param {string} accountName The storage account name.
     */
    static list(accountName: string): az_storage_account_encryption_scope_list_command_builder;
    /**
     * Show properties for specified encryption scope within storage account.
     *
     * Syntax:
     * ```
     * az storage account encryption-scope show --account-name
     *                                          --name
     *                                          [--query-examples]
     *                                          [--resource-group]
     *                                          [--subscription]
     * ```
     *
     * @param {string} accountName The storage account name.
     * @param {string} name The name of the encryption scope within the specified storage account.
     */
    static show(accountName: string, name: string): az_storage_account_encryption_scope_show_command_builder;
    /**
     * Update properties for specified encryption scope within storage account.
     *
     * Syntax:
     * ```
     * az storage account encryption-scope update --account-name
     *                                            --name
     *                                            [--key-source {Microsoft.KeyVault, Microsoft.Storage}]
     *                                            [--key-uri]
     *                                            [--resource-group]
     *                                            [--state {Disabled, Enabled}]
     *                                            [--subscription]
     * ```
     *
     * @param {string} accountName The storage account name.
     * @param {string} name The name of the encryption scope within the specified storage account.
     */
    static update(accountName: string, name: string): az_storage_account_encryption_scope_update_command_builder;
}
/** Manage the properties of file service in storage account. */
export declare class az_storage_account_file_service_properties {
    /**
     * Show the properties of file service in storage account.
     *
     * Syntax:
     * ```
     * az storage account file-service-properties show --account-name
     *                                                 [--query-examples]
     *                                                 [--resource-group]
     *                                                 [--subscription]
     * ```
     *
     * @param {string} accountName The storage account name.
     */
    static show(accountName: string): az_storage_account_file_service_properties_show_command_builder;
    /**
     * Update the properties of file service in storage account.
     *
     * Syntax:
     * ```
     * az storage account file-service-properties update --account-name
     *                                                   [--delete-retention-days]
     *                                                   [--enable-delete-retention {false, true}]
     *                                                   [--resource-group]
     *                                                   [--subscription]
     * ```
     *
     * @param {string} accountName The storage account name.
     */
    static update(accountName: string): az_storage_account_file_service_properties_update_command_builder;
}
/** Manage storage account keys. */
export declare class az_storage_account_keys {
    /**
     * List the access keys or Kerberos keys (if active directory enabled) for a storage account.
     *
     * Syntax:
     * ```
     * az storage account keys list --account-name
     *                              [--expand-key-type {kerb}]
     *                              [--query-examples]
     *                              [--resource-group]
     *                              [--subscription]
     * ```
     *
     * @param {string} accountName The storage account name.
     */
    static list(accountName: string): az_storage_account_keys_list_command_builder;
    /**
     * Regenerate one of the access keys or Kerberos keys (if active directory enabled) for a storage account.
     *
     * Syntax:
     * ```
     * az storage account keys renew --account-name
     *                               --key {primary, secondary}
     *                               [--key-type {kerb}]
     *                               [--resource-group]
     *                               [--subscription]
     * ```
     *
     * @param {string} accountName The storage account name.
     * @param {'primary' | 'secondary'} key The key options to regenerate.
     */
    static renew(accountName: string, key: 'primary' | 'secondary'): az_storage_account_keys_renew_command_builder;
}
/** Manage storage account management policies. */
export declare class az_storage_account_management_policy {
    /**
     * Creates the data policy rules associated with the specified storage account.
     *
     * Syntax:
     * ```
     * az storage account management-policy create --account-name
     *                                             --policy
     *                                             --resource-group
     *                                             [--subscription]
     * ```
     *
     * @param {string} accountName The name of the storage account within the specified resource group.
     * @param {string} policy The Storage Account ManagementPolicies Rules, in JSON format. See more details in: <a href="https://docs.microsoft.com/azure/storage/common/storage-lifecycle-managment-concepts">https://docs.microsoft.com/azure/storage/common/storage-lifecycle-managment-concepts</a>.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    static create(accountName: string, policy: string, resourceGroup: string): az_storage_account_management_policy_create_command_builder;
    /**
     * Deletes the managementpolicy associated with the specified storage account.
     *
     * Syntax:
     * ```
     * az storage account management-policy delete --account-name
     *                                             --resource-group
     *                                             [--subscription]
     * ```
     *
     * @param {string} accountName The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    static delete(accountName: string, resourceGroup: string): az_storage_account_management_policy_delete_command_builder;
    /**
     * Gets the managementpolicy associated with the specified storage account.
     *
     * Syntax:
     * ```
     * az storage account management-policy show --account-name
     *                                           --resource-group
     *                                           [--query-examples]
     *                                           [--subscription]
     * ```
     *
     * @param {string} accountName The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    static show(accountName: string, resourceGroup: string): az_storage_account_management_policy_show_command_builder;
    /**
     * Updates the data policy rules associated with the specified storage account.
     *
     * Syntax:
     * ```
     * az storage account management-policy update --account-name
     *                                             --resource-group
     *                                             [--add]
     *                                             [--force-string]
     *                                             [--remove]
     *                                             [--set]
     *                                             [--subscription]
     * ```
     *
     * @param {string} accountName The name of the storage account within the specified resource group.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    static update(accountName: string, resourceGroup: string): az_storage_account_management_policy_update_command_builder;
}
/** Manage network rules. */
export declare class az_storage_account_network_rule {
    /**
     * Add a network rule.
     *
     * Syntax:
     * ```
     * az storage account network-rule add --account-name
     *                                     [--action]
     *                                     [--ip-address]
     *                                     [--resource-group]
     *                                     [--subnet]
     *                                     [--subscription]
     *                                     [--vnet-name]
     * ```
     *
     * @param {string} accountName The storage account name.
     */
    static add(accountName: string): az_storage_account_network_rule_add_command_builder;
    /**
     * List network rules.
     *
     * Syntax:
     * ```
     * az storage account network-rule list --account-name
     *                                      [--query-examples]
     *                                      [--resource-group]
     *                                      [--subscription]
     * ```
     *
     * @param {string} accountName The storage account name.
     */
    static list(accountName: string): az_storage_account_network_rule_list_command_builder;
    /**
     * Remove a network rule.
     *
     * Syntax:
     * ```
     * az storage account network-rule remove --account-name
     *                                        [--ip-address]
     *                                        [--resource-group]
     *                                        [--subnet]
     *                                        [--subscription]
     *                                        [--vnet-name]
     * ```
     *
     * @param {string} accountName The storage account name.
     */
    static remove(accountName: string): az_storage_account_network_rule_remove_command_builder;
}
/** Manage Object Replication Service Policy Rules. */
export declare class az_storage_account_or_policy_rule {
    /**
     * Add rule to the specified Object Replication Service Policy.
     *
     * Syntax:
     * ```
     * az storage account or-policy rule add --account-name
     *                                       --destination-container
     *                                       --policy-id
     *                                       --source-container
     *                                       [--min-creation-time]
     *                                       [--prefix]
     *                                       [--resource-group]
     *                                       [--subscription]
     * ```
     *
     * @param {string} accountName The storage account name.
     * @param {string} destinationContainer The destination storage container name.
     * @param {string} policyId The ID of object replication policy or "default" if the policy ID is unknown. Policy Id will be auto-generated when setting on destination account. Required when setting on source account.
     * @param {string} sourceContainer The source storage container name.
     */
    static add(accountName: string, destinationContainer: string, policyId: string, sourceContainer: string): az_storage_account_or_policy_rule_add_command_builder;
    /**
     * List all the rules in the specified Object Replication Service Policy.
     *
     * Syntax:
     * ```
     * az storage account or-policy rule list --account-name
     *                                        --policy-id
     *                                        [--query-examples]
     *                                        [--resource-group]
     *                                        [--subscription]
     * ```
     *
     * @param {string} accountName The storage account name.
     * @param {string} policyId The ID of object replication policy or "default" if the policy ID is unknown. Policy Id will be auto-generated when setting on destination account. Required when setting on source account.
     */
    static list(accountName: string, policyId: string): az_storage_account_or_policy_rule_list_command_builder;
    /**
     * Remove the specified rule from the specified Object Replication Service Policy.
     *
     * Syntax:
     * ```
     * az storage account or-policy rule remove --account-name
     *                                          --policy-id
     *                                          --rule-id
     *                                          [--resource-group]
     *                                          [--subscription]
     * ```
     *
     * @param {string} accountName The storage account name.
     * @param {string} policyId The ID of object replication policy or "default" if the policy ID is unknown. Policy Id will be auto-generated when setting on destination account. Required when setting on source account.
     * @param {string} ruleId Rule Id is auto-generated for each new rule on destination account. It is required for put policy on source account.
     */
    static remove(accountName: string, policyId: string, ruleId: string): az_storage_account_or_policy_rule_remove_command_builder;
    /**
     * Show the properties of specified rule in Object Replication Service Policy.
     *
     * Syntax:
     * ```
     * az storage account or-policy rule show --account-name
     *                                        --policy-id
     *                                        --rule-id
     *                                        [--query-examples]
     *                                        [--resource-group]
     *                                        [--subscription]
     * ```
     *
     * @param {string} accountName The storage account name.
     * @param {string} policyId The ID of object replication policy or "default" if the policy ID is unknown. Policy Id will be auto-generated when setting on destination account. Required when setting on source account.
     * @param {string} ruleId Rule Id is auto-generated for each new rule on destination account. It is required for put policy on source account.
     */
    static show(accountName: string, policyId: string, ruleId: string): az_storage_account_or_policy_rule_show_command_builder;
    /**
     * Update rule properties to Object Replication Service Policy.
     *
     * Syntax:
     * ```
     * az storage account or-policy rule update --account-name
     *                                          --policy-id
     *                                          --rule-id
     *                                          [--destination-container]
     *                                          [--min-creation-time]
     *                                          [--prefix]
     *                                          [--resource-group]
     *                                          [--source-container]
     *                                          [--subscription]
     * ```
     *
     * @param {string} accountName The storage account name.
     * @param {string} policyId The ID of object replication policy or "default" if the policy ID is unknown. Policy Id will be auto-generated when setting on destination account. Required when setting on source account.
     * @param {string} ruleId Rule Id is auto-generated for each new rule on destination account. It is required for put policy on source account.
     */
    static update(accountName: string, policyId: string, ruleId: string): az_storage_account_or_policy_rule_update_command_builder;
}
/** Manage storage account Object Replication Policy. */
export declare class az_storage_account_or_policy {
    /**
     * Create Object Replication Service Policy for storage account.
     *
     * Syntax:
     * ```
     * az storage account or-policy create --account-name
     *                                     [--dcont]
     *                                     [--destination-account]
     *                                     [--min-creation-time]
     *                                     [--policy]
     *                                     [--policy-id]
     *                                     [--prefix]
     *                                     [--resource-group]
     *                                     [--rule-id]
     *                                     [--scont]
     *                                     [--source-account]
     *                                     [--subscription]
     * ```
     *
     * @param {string} accountName The storage account name.
     */
    static create(accountName: string): az_storage_account_or_policy_create_command_builder;
    /**
     * Delete specified Object Replication Service Policy associated with the specified storage account.
     *
     * Syntax:
     * ```
     * az storage account or-policy delete --account-name
     *                                     --policy-id
     *                                     [--resource-group]
     *                                     [--subscription]
     * ```
     *
     * @param {string} accountName The storage account name.
     * @param {string} policyId The ID of object replication policy or "default" if the policy ID is unknown. Policy Id will be auto-generated when setting on destination account. Required when setting on source account.
     */
    static delete(accountName: string, policyId: string): az_storage_account_or_policy_delete_command_builder;
    /**
     * List Object Replication Service Policies associated with the specified storage account.
     *
     * Syntax:
     * ```
     * az storage account or-policy list --account-name
     *                                   [--query-examples]
     *                                   [--resource-group]
     *                                   [--subscription]
     * ```
     *
     * @param {string} accountName The storage account name.
     */
    static list(accountName: string): az_storage_account_or_policy_list_command_builder;
    /**
     * Show the properties of specified Object Replication Service Policy for storage account.
     *
     * Syntax:
     * ```
     * az storage account or-policy show --account-name
     *                                   --policy-id
     *                                   [--query-examples]
     *                                   [--resource-group]
     *                                   [--subscription]
     * ```
     *
     * @param {string} accountName The storage account name.
     * @param {string} policyId The ID of object replication policy or "default" if the policy ID is unknown. Policy Id will be auto-generated when setting on destination account. Required when setting on source account.
     */
    static show(accountName: string, policyId: string): az_storage_account_or_policy_show_command_builder;
    /**
     * Update Object Replication Service Policy properties for storage account.
     *
     * Syntax:
     * ```
     * az storage account or-policy update --account-name
     *                                     [--add]
     *                                     [--destination-account]
     *                                     [--force-string]
     *                                     [--policy]
     *                                     [--policy-id]
     *                                     [--remove]
     *                                     [--resource-group]
     *                                     [--set]
     *                                     [--source-account]
     *                                     [--subscription]
     * ```
     *
     * @param {string} accountName The storage account name.
     */
    static update(accountName: string): az_storage_account_or_policy_update_command_builder;
}
/** Manage storage account private endpoint connection. */
export declare class az_storage_account_private_endpoint_connection {
    /**
     * Approve a private endpoint connection request for storage account.
     *
     * Syntax:
     * ```
     * az storage account private-endpoint-connection approve [--account-name]
     *                                                        [--description]
     *                                                        [--id]
     *                                                        [--name]
     *                                                        [--resource-group]
     *                                                        [--subscription]
     * ```
     */
    static approve(): az_storage_account_private_endpoint_connection_approve_command_builder;
    /**
     * Delete a private endpoint connection request for storage account.
     *
     * Syntax:
     * ```
     * az storage account private-endpoint-connection delete [--account-name]
     *                                                       [--id]
     *                                                       [--name]
     *                                                       [--resource-group]
     *                                                       [--subscription]
     *                                                       [--yes]
     * ```
     */
    static delete(): az_storage_account_private_endpoint_connection_delete_command_builder;
    /**
     * Reject a private endpoint connection request for storage account.
     *
     * Syntax:
     * ```
     * az storage account private-endpoint-connection reject [--account-name]
     *                                                       [--description]
     *                                                       [--id]
     *                                                       [--name]
     *                                                       [--resource-group]
     *                                                       [--subscription]
     * ```
     */
    static reject(): az_storage_account_private_endpoint_connection_reject_command_builder;
    /**
     * Show details of a private endpoint connection request for storage account.
     *
     * Syntax:
     * ```
     * az storage account private-endpoint-connection show [--account-name]
     *                                                     [--id]
     *                                                     [--name]
     *                                                     [--query-examples]
     *                                                     [--resource-group]
     *                                                     [--subscription]
     * ```
     */
    static show(): az_storage_account_private_endpoint_connection_show_command_builder;
}
/** Manage storage account private link resources. */
export declare class az_storage_account_private_link_resource {
    /**
     * Get the private link resources that need to be created for a storage account.
     *
     * Syntax:
     * ```
     * az storage account private-link-resource list --account-name
     *                                               --resource-group
     *                                               [--query-examples]
     *                                               [--subscription]
     * ```
     *
     * @param {string} accountName The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    static list(accountName: string, resourceGroup: string): az_storage_account_private_link_resource_list_command_builder;
}
/** Manage storage accounts. */
export declare class az_storage_account {
    /**
     * Checks that the storage account name is valid and is not already in use.
     *
     * Syntax:
     * ```
     * az storage account check-name --name
     *                               [--subscription]
     * ```
     *
     * @param {string} name The storage account name.
     */
    static check_name(name: string): az_storage_account_check_name_command_builder;
    /**
     * Create a storage account.
     *
     * Syntax:
     * ```
     * az storage account create --name
     *                           --resource-group
     *                           [--access-tier {Cool, Hot}]
     *                           [--allow-blob-public-access {false, true}]
     *                           [--assign-identity]
     *                           [--azure-storage-sid]
     *                           [--bypass {AzureServices, Logging, Metrics, None}]
     *                           [--custom-domain]
     *                           [--default-action {Allow, Deny}]
     *                           [--domain-guid]
     *                           [--domain-name]
     *                           [--domain-sid]
     *                           [--enable-files-aadds {false, true}]
     *                           [--enable-files-adds {false, true}]
     *                           [--enable-hierarchical-namespace {false, true}]
     *                           [--enable-large-file-share]
     *                           [--encryption-key-type-for-queue {Account, Service}]
     *                           [--encryption-key-type-for-table {Account, Service}]
     *                           [--encryption-services {blob, file, queue, table}]
     *                           [--forest-name]
     *                           [--https-only {false, true}]
     *                           [--kind {BlobStorage, BlockBlobStorage, FileStorage, Storage, StorageV2}]
     *                           [--location]
     *                           [--min-tls-version {TLS1_0, TLS1_1, TLS1_2}]
     *                           [--net-bios-domain-name]
     *                           [--publish-internet-endpoints {false, true}]
     *                           [--publish-microsoft-endpoints {false, true}]
     *                           [--require-infrastructure-encryption {false, true}]
     *                           [--routing-choice {InternetRouting, MicrosoftRouting}]
     *                           [--sku {Premium_LRS, Premium_ZRS, Standard_GRS, Standard_GZRS, Standard_LRS, Standard_RAGRS, Standard_RAGZRS, Standard_ZRS}]
     *                           [--subscription]
     *                           [--tags]
     * ```
     *
     * @param {string} name The storage account name.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    static create(name: string, resourceGroup: string): az_storage_account_create_command_builder;
    /**
     * Delete a storage account.
     *
     * Syntax:
     * ```
     * az storage account delete [--ids]
     *                           [--name]
     *                           [--resource-group]
     *                           [--subscription]
     *                           [--yes]
     * ```
     */
    static delete(): az_storage_account_delete_command_builder;
    /**
     * Failover request can be triggered for a storage account in case of availability issues.
     *
     * Syntax:
     * ```
     * az storage account failover [--ids]
     *                             [--name]
     *                             [--no-wait]
     *                             [--resource-group]
     *                             [--subscription]
     *                             [--yes]
     * ```
     */
    static failover(): az_storage_account_failover_command_builder;
    /**
     * Generates a shared access signature for the account.
     *
     * Syntax:
     * ```
     * az storage account generate-sas --expiry
     *                                 --permissions
     *                                 --resource-types
     *                                 --services
     *                                 [--account-key]
     *                                 [--account-name]
     *                                 [--connection-string]
     *                                 [--https-only]
     *                                 [--ids]
     *                                 [--ip]
     *                                 [--start]
     *                                 [--subscription]
     * ```
     *
     * @param {string} expiry Specifies the UTC datetime (Y-m-d'T'H:M'Z') at which the SAS becomes invalid.
     * @param {string} permissions The permissions the SAS grants. Allowed values: (a)dd (c)reate (d)elete (l)ist (p)rocess (r)ead (u)pdate (w)rite. Can be combined.
     * @param {string} resourceTypes The resource types the SAS is applicable for. Allowed values: (s)ervice (c)ontainer (o)bject. Can be combined.
     * @param {string} services The storage services the SAS is applicable for. Allowed values: (b)lob (f)ile (q)ueue (t)able. Can be combined.
     */
    static generate_sas(expiry: string, permissions: string, resourceTypes: string, services: string): az_storage_account_generate_sas_command_builder;
    /**
     * List storage accounts.
     *
     * Syntax:
     * ```
     * az storage account list [--query-examples]
     *                         [--resource-group]
     *                         [--subscription]
     * ```
     */
    static list(): az_storage_account_list_command_builder;
    /**
     * Revoke all user delegation keys for a storage account.
     *
     * Syntax:
     * ```
     * az storage account revoke-delegation-keys [--ids]
     *                                           [--name]
     *                                           [--resource-group]
     *                                           [--subscription]
     * ```
     */
    static revoke_delegation_keys(): az_storage_account_revoke_delegation_keys_command_builder;
    /**
     * Show storage account properties.
     *
     * Syntax:
     * ```
     * az storage account show [--expand]
     *                         [--ids]
     *                         [--name]
     *                         [--query-examples]
     *                         [--resource-group]
     *                         [--subscription]
     * ```
     */
    static show(): az_storage_account_show_command_builder;
    /**
     * Get the connection string for a storage account.
     *
     * Syntax:
     * ```
     * az storage account show-connection-string [--blob-endpoint]
     *                                           [--file-endpoint]
     *                                           [--ids]
     *                                           [--key {primary, secondary}]
     *                                           [--name]
     *                                           [--protocol {http, https}]
     *                                           [--queue-endpoint]
     *                                           [--resource-group]
     *                                           [--sas-token]
     *                                           [--subscription]
     *                                           [--table-endpoint]
     * ```
     */
    static show_connection_string(): az_storage_account_show_connection_string_command_builder;
    /**
     * Show the current count and limit of the storage accounts under the subscription.
     *
     * Syntax:
     * ```
     * az storage account show-usage --location
     *                               [--subscription]
     * ```
     *
     * @param {string} location Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`.
     */
    static show_usage(location: string): az_storage_account_show_usage_command_builder;
    /**
     * Update the properties of a storage account.
     *
     * Syntax:
     * ```
     * az storage account update [--access-tier {Cool, Hot}]
     *                           [--add]
     *                           [--allow-blob-public-access {false, true}]
     *                           [--assign-identity]
     *                           [--azure-storage-sid]
     *                           [--bypass {AzureServices, Logging, Metrics, None}]
     *                           [--custom-domain]
     *                           [--default-action {Allow, Deny}]
     *                           [--domain-guid]
     *                           [--domain-name]
     *                           [--domain-sid]
     *                           [--enable-files-aadds {false, true}]
     *                           [--enable-files-adds {false, true}]
     *                           [--enable-large-file-share]
     *                           [--encryption-key-name]
     *                           [--encryption-key-source {Microsoft.Keyvault, Microsoft.Storage}]
     *                           [--encryption-key-vault]
     *                           [--encryption-key-version]
     *                           [--encryption-services {blob, file, queue, table}]
     *                           [--force-string]
     *                           [--forest-name]
     *                           [--https-only {false, true}]
     *                           [--ids]
     *                           [--min-tls-version {TLS1_0, TLS1_1, TLS1_2}]
     *                           [--name]
     *                           [--net-bios-domain-name]
     *                           [--publish-internet-endpoints {false, true}]
     *                           [--publish-microsoft-endpoints {false, true}]
     *                           [--remove]
     *                           [--resource-group]
     *                           [--routing-choice {InternetRouting, MicrosoftRouting}]
     *                           [--set]
     *                           [--sku {Premium_LRS, Premium_ZRS, Standard_GRS, Standard_GZRS, Standard_LRS, Standard_RAGRS, Standard_RAGZRS, Standard_ZRS}]
     *                           [--subscription]
     *                           [--tags]
     *                           [--use-subdomain {false, true}]
     * ```
     */
    static update(): az_storage_account_update_command_builder;
}
/** Manage blob copy operations. Use `az storage blob show` to check the status of the blobs. */
export declare class az_storage_blob_copy {
    /**
     * Aborts a pending copy_blob operation, and leaves a destination blob with zero length and full metadata.
     *
     * Syntax:
     * ```
     * az storage blob copy cancel --copy-id
     *                             --destination-blob
     *                             --destination-container
     *                             [--account-key]
     *                             [--account-name]
     *                             [--auth-mode {key, login}]
     *                             [--connection-string]
     *                             [--lease-id]
     *                             [--sas-token]
     *                             [--subscription]
     *                             [--timeout]
     * ```
     *
     * @param {string} copyId Copy identifier provided in the copy.id of the original copy_blob operation.
     * @param {string} destinationBlob Name of the destination blob. If the exists, it will be overwritten.
     * @param {string} destinationContainer The container name.
     */
    static cancel(copyId: string, destinationBlob: string, destinationContainer: string): az_storage_blob_copy_cancel_command_builder;
    /**
     * Copies a blob asynchronously. Use `az storage blob show` to check the status of the blobs.
     *
     * Syntax:
     * ```
     * az storage blob copy start --destination-blob
     *                            --destination-container
     *                            [--account-key]
     *                            [--account-name]
     *                            [--auth-mode {key, login}]
     *                            [--connection-string]
     *                            [--destination-if-match]
     *                            [--destination-if-modified-since]
     *                            [--destination-if-none-match]
     *                            [--destination-if-unmodified-since]
     *                            [--destination-lease-id]
     *                            [--metadata]
     *                            [--requires-sync]
     *                            [--sas-token]
     *                            [--source-account-key]
     *                            [--source-account-name]
     *                            [--source-blob]
     *                            [--source-container]
     *                            [--source-if-match]
     *                            [--source-if-modified-since]
     *                            [--source-if-none-match]
     *                            [--source-if-unmodified-since]
     *                            [--source-lease-id]
     *                            [--source-path]
     *                            [--source-sas]
     *                            [--source-share]
     *                            [--source-snapshot]
     *                            [--source-uri]
     *                            [--subscription]
     *                            [--timeout]
     * ```
     *
     * @param {string} destinationBlob Name of the destination blob. If the exists, it will be overwritten.
     * @param {string} destinationContainer The container name.
     */
    static start(destinationBlob: string, destinationContainer: string): az_storage_blob_copy_start_command_builder;
    /**
     * Copy multiple blobs to a blob container. Use `az storage blob show` to check the status of the blobs.
     *
     * Syntax:
     * ```
     * az storage blob copy start-batch [--account-key]
     *                                  [--account-name]
     *                                  [--auth-mode {key, login}]
     *                                  [--connection-string]
     *                                  [--destination-container]
     *                                  [--destination-path]
     *                                  [--dryrun]
     *                                  [--pattern]
     *                                  [--sas-token]
     *                                  [--source-account-key]
     *                                  [--source-account-name]
     *                                  [--source-container]
     *                                  [--source-sas]
     *                                  [--source-share]
     *                                  [--source-uri]
     *                                  [--subscription]
     * ```
     */
    static start_batch(): az_storage_blob_copy_start_batch_command_builder;
}
/** Manage blob incremental copy operations. */
export declare class az_storage_blob_incremental_copy {
    /**
     * Aborts a pending copy_blob operation, and leaves a destination blob with zero length and full metadata.
     *
     * Syntax:
     * ```
     * az storage blob incremental-copy cancel --container-name
     *                                         --copy-id
     *                                         --name
     *                                         [--account-key]
     *                                         [--account-name]
     *                                         [--auth-mode {key, login}]
     *                                         [--connection-string]
     *                                         [--lease-id]
     *                                         [--sas-token]
     *                                         [--subscription]
     *                                         [--timeout]
     * ```
     *
     * @param {string} containerName The container name.
     * @param {string} copyId Copy identifier provided in the copy.id of the original copy_blob operation.
     * @param {string} name The blob name.
     */
    static cancel(containerName: string, copyId: string, name: string): az_storage_blob_incremental_copy_cancel_command_builder;
    /**
     * Copies an incremental copy of a blob asynchronously.
     *
     * Syntax:
     * ```
     * az storage blob incremental-copy start --destination-blob
     *                                        --destination-container
     *                                        [--account-key]
     *                                        [--account-name]
     *                                        [--auth-mode {key, login}]
     *                                        [--connection-string]
     *                                        [--destination-if-match]
     *                                        [--destination-if-modified-since]
     *                                        [--destination-if-none-match]
     *                                        [--destination-if-unmodified-since]
     *                                        [--destination-lease-id]
     *                                        [--metadata]
     *                                        [--sas-token]
     *                                        [--source-account-key]
     *                                        [--source-account-name]
     *                                        [--source-blob]
     *                                        [--source-container]
     *                                        [--source-lease-id]
     *                                        [--source-sas]
     *                                        [--source-snapshot]
     *                                        [--source-uri]
     *                                        [--subscription]
     *                                        [--timeout]
     * ```
     *
     * @param {string} destinationBlob Name of the destination blob. If the exists, it will be overwritten.
     * @param {string} destinationContainer The container name.
     */
    static start(destinationBlob: string, destinationContainer: string): az_storage_blob_incremental_copy_start_command_builder;
}
/** Manage storage blob leases. */
export declare class az_storage_blob_lease {
    /**
     * Request a new lease.
     *
     * Syntax:
     * ```
     * az storage blob lease acquire --blob-name
     *                               --container-name
     *                               [--account-key]
     *                               [--account-name]
     *                               [--auth-mode {key, login}]
     *                               [--connection-string]
     *                               [--if-match]
     *                               [--if-modified-since]
     *                               [--if-none-match]
     *                               [--if-unmodified-since]
     *                               [--lease-duration]
     *                               [--proposed-lease-id]
     *                               [--sas-token]
     *                               [--subscription]
     *                               [--timeout]
     * ```
     *
     * @param {string} blobName The blob name.
     * @param {string} containerName The container name.
     */
    static acquire(blobName: string, containerName: string): az_storage_blob_lease_acquire_command_builder;
    /**
     * Break the lease, if the container or blob has an active lease.
     *
     * Syntax:
     * ```
     * az storage blob lease break --blob-name
     *                             --container-name
     *                             [--account-key]
     *                             [--account-name]
     *                             [--auth-mode {key, login}]
     *                             [--connection-string]
     *                             [--if-match]
     *                             [--if-modified-since]
     *                             [--if-none-match]
     *                             [--if-unmodified-since]
     *                             [--lease-break-period]
     *                             [--sas-token]
     *                             [--subscription]
     *                             [--timeout]
     * ```
     *
     * @param {string} blobName The blob name.
     * @param {string} containerName The container name.
     */
    static break(blobName: string, containerName: string): az_storage_blob_lease_break_command_builder;
    /**
     * Change the lease ID of an active lease.
     *
     * Syntax:
     * ```
     * az storage blob lease change --blob-name
     *                              --container-name
     *                              --lease-id
     *                              --proposed-lease-id
     *                              [--account-key]
     *                              [--account-name]
     *                              [--auth-mode {key, login}]
     *                              [--connection-string]
     *                              [--if-match]
     *                              [--if-modified-since]
     *                              [--if-none-match]
     *                              [--if-unmodified-since]
     *                              [--sas-token]
     *                              [--subscription]
     *                              [--timeout]
     * ```
     *
     * @param {string} blobName The blob name.
     * @param {string} containerName The container name.
     * @param {string} leaseId Required if the blob has an active lease.
     * @param {string} proposedLeaseId Proposed lease ID, in a GUID string format. The Blob service returns 400 (Invalid request) if the proposed lease ID is not in the correct format.
     */
    static change(blobName: string, containerName: string, leaseId: string, proposedLeaseId: string): az_storage_blob_lease_change_command_builder;
    /**
     * Release the lease.
     *
     * Syntax:
     * ```
     * az storage blob lease release --blob-name
     *                               --container-name
     *                               --lease-id
     *                               [--account-key]
     *                               [--account-name]
     *                               [--auth-mode {key, login}]
     *                               [--connection-string]
     *                               [--if-match]
     *                               [--if-modified-since]
     *                               [--if-none-match]
     *                               [--if-unmodified-since]
     *                               [--sas-token]
     *                               [--subscription]
     *                               [--timeout]
     * ```
     *
     * @param {string} blobName The blob name.
     * @param {string} containerName The container name.
     * @param {string} leaseId Required if the blob has an active lease.
     */
    static release(blobName: string, containerName: string, leaseId: string): az_storage_blob_lease_release_command_builder;
    /**
     * Renew the lease.
     *
     * Syntax:
     * ```
     * az storage blob lease renew --blob-name
     *                             --container-name
     *                             --lease-id
     *                             [--account-key]
     *                             [--account-name]
     *                             [--auth-mode {key, login}]
     *                             [--connection-string]
     *                             [--if-match]
     *                             [--if-modified-since]
     *                             [--if-none-match]
     *                             [--if-unmodified-since]
     *                             [--sas-token]
     *                             [--subscription]
     *                             [--timeout]
     * ```
     *
     * @param {string} blobName The blob name.
     * @param {string} containerName The container name.
     * @param {string} leaseId Required if the blob has an active lease.
     */
    static renew(blobName: string, containerName: string, leaseId: string): az_storage_blob_lease_renew_command_builder;
}
/** Manage blob metadata. */
export declare class az_storage_blob_metadata {
    /**
     * Returns all user-defined metadata for the specified blob or snapshot.
     *
     * Syntax:
     * ```
     * az storage blob metadata show --container-name
     *                               --name
     *                               [--account-key]
     *                               [--account-name]
     *                               [--auth-mode {key, login}]
     *                               [--connection-string]
     *                               [--if-match]
     *                               [--if-modified-since]
     *                               [--if-none-match]
     *                               [--if-unmodified-since]
     *                               [--lease-id]
     *                               [--query-examples]
     *                               [--sas-token]
     *                               [--snapshot]
     *                               [--subscription]
     *                               [--timeout]
     * ```
     *
     * @param {string} containerName The container name.
     * @param {string} name The blob name.
     */
    static show(containerName: string, name: string): az_storage_blob_metadata_show_command_builder;
    /**
     * Sets user-defined metadata for the specified blob as one or more name-value pairs.
     *
     * Syntax:
     * ```
     * az storage blob metadata update --container-name
     *                                 --name
     *                                 [--account-key]
     *                                 [--account-name]
     *                                 [--auth-mode {key, login}]
     *                                 [--connection-string]
     *                                 [--if-match]
     *                                 [--if-modified-since]
     *                                 [--if-none-match]
     *                                 [--if-unmodified-since]
     *                                 [--lease-id]
     *                                 [--metadata]
     *                                 [--sas-token]
     *                                 [--subscription]
     *                                 [--timeout]
     * ```
     *
     * @param {string} containerName The container name.
     * @param {string} name The blob name.
     */
    static update(containerName: string, name: string): az_storage_blob_metadata_update_command_builder;
}
/** Manage storage blob delete-policy service properties. */
export declare class az_storage_blob_service_properties_delete_policy {
    /**
     * Show the storage blob delete-policy.
     *
     * Syntax:
     * ```
     * az storage blob service-properties delete-policy show [--account-key]
     *                                                       [--account-name]
     *                                                       [--auth-mode {key, login}]
     *                                                       [--connection-string]
     *                                                       [--query-examples]
     *                                                       [--sas-token]
     *                                                       [--subscription]
     *                                                       [--timeout]
     * ```
     */
    static show(): az_storage_blob_service_properties_delete_policy_show_command_builder;
    /**
     * Update the storage blob delete-policy.
     *
     * Syntax:
     * ```
     * az storage blob service-properties delete-policy update [--account-key]
     *                                                         [--account-name]
     *                                                         [--auth-mode {key, login}]
     *                                                         [--connection-string]
     *                                                         [--days-retained]
     *                                                         [--enable {false, true}]
     *                                                         [--sas-token]
     *                                                         [--subscription]
     * ```
     */
    static update(): az_storage_blob_service_properties_delete_policy_update_command_builder;
}
/** Manage storage blob service properties. */
export declare class az_storage_blob_service_properties {
    /**
     * Gets the properties of a storage account's Blob service, including Azure Storage Analytics.
     *
     * Syntax:
     * ```
     * az storage blob service-properties show [--account-key]
     *                                         [--account-name]
     *                                         [--auth-mode {key, login}]
     *                                         [--connection-string]
     *                                         [--query-examples]
     *                                         [--sas-token]
     *                                         [--subscription]
     *                                         [--timeout]
     * ```
     */
    static show(): az_storage_blob_service_properties_show_command_builder;
    /**
     * Update storage blob service properties.
     *
     * Syntax:
     * ```
     * az storage blob service-properties update [--404-document]
     *                                           [--account-key]
     *                                           [--account-name]
     *                                           [--add]
     *                                           [--auth-mode {key, login}]
     *                                           [--connection-string]
     *                                           [--delete-retention {false, true}]
     *                                           [--delete-retention-period]
     *                                           [--force-string]
     *                                           [--index-document]
     *                                           [--remove]
     *                                           [--sas-token]
     *                                           [--set]
     *                                           [--static-website {false, true}]
     *                                           [--subscription]
     *                                           [--timeout]
     * ```
     */
    static update(): az_storage_blob_service_properties_update_command_builder;
}
/** Manage object storage for unstructured data (blobs). */
export declare class az_storage_blob {
    /**
     * Mark a blob or snapshot for deletion.
     *
     * Syntax:
     * ```
     * az storage blob delete --container-name
     *                        --name
     *                        [--account-key]
     *                        [--account-name]
     *                        [--auth-mode {key, login}]
     *                        [--connection-string]
     *                        [--delete-snapshots {include, only}]
     *                        [--if-match]
     *                        [--if-modified-since]
     *                        [--if-none-match]
     *                        [--if-unmodified-since]
     *                        [--lease-id]
     *                        [--sas-token]
     *                        [--snapshot]
     *                        [--subscription]
     *                        [--timeout]
     * ```
     *
     * @param {string} containerName The container name.
     * @param {string} name The blob name.
     */
    static delete(containerName: string, name: string): az_storage_blob_delete_command_builder;
    /**
     * Delete blobs from a blob container recursively.
     *
     * Syntax:
     * ```
     * az storage blob delete-batch --source
     *                              [--account-key]
     *                              [--account-name]
     *                              [--auth-mode {key, login}]
     *                              [--connection-string]
     *                              [--delete-snapshots {include, only}]
     *                              [--dryrun]
     *                              [--if-match]
     *                              [--if-modified-since]
     *                              [--if-none-match]
     *                              [--if-unmodified-since]
     *                              [--lease-id]
     *                              [--pattern]
     *                              [--sas-token]
     *                              [--subscription]
     *                              [--timeout]
     * ```
     *
     * @param {string} source The blob container from where the files will be deleted.
     */
    static delete_batch(source: string): az_storage_blob_delete_batch_command_builder;
    /**
     * Downloads a blob to a file path, with automatic chunking and progress notifications.
     *
     * Syntax:
     * ```
     * az storage blob download --container-name
     *                          --file
     *                          --name
     *                          [--account-key]
     *                          [--account-name]
     *                          [--auth-mode {key, login}]
     *                          [--connection-string]
     *                          [--end-range]
     *                          [--if-match]
     *                          [--if-modified-since]
     *                          [--if-none-match]
     *                          [--if-unmodified-since]
     *                          [--lease-id]
     *                          [--max-connections]
     *                          [--no-progress]
     *                          [--open-mode]
     *                          [--sas-token]
     *                          [--snapshot]
     *                          [--socket-timeout]
     *                          [--start-range]
     *                          [--subscription]
     *                          [--timeout]
     *                          [--validate-content]
     * ```
     *
     * @param {string} containerName The container name.
     * @param {string} file Path of file to write out to.
     * @param {string} name The blob name.
     */
    static download(containerName: string, file: string, name: string): az_storage_blob_download_command_builder;
    /**
     * Download blobs from a blob container recursively.
     *
     * Syntax:
     * ```
     * az storage blob download-batch --destination
     *                                --source
     *                                [--account-key]
     *                                [--account-name]
     *                                [--auth-mode {key, login}]
     *                                [--connection-string]
     *                                [--dryrun]
     *                                [--max-connections]
     *                                [--no-progress]
     *                                [--pattern]
     *                                [--sas-token]
     *                                [--socket-timeout]
     *                                [--subscription]
     * ```
     *
     * @param {string} destination The existing destination folder for this download operation.
     * @param {string} source The blob container from where the files will be downloaded.
     */
    static download_batch(destination: string, source: string): az_storage_blob_download_batch_command_builder;
    /**
     * Check for the existence of a blob in a container.
     *
     * Syntax:
     * ```
     * az storage blob exists --container-name
     *                        --name
     *                        [--account-key]
     *                        [--account-name]
     *                        [--auth-mode {key, login}]
     *                        [--connection-string]
     *                        [--sas-token]
     *                        [--snapshot]
     *                        [--subscription]
     *                        [--timeout]
     * ```
     *
     * @param {string} containerName The container name.
     * @param {string} name The blob name.
     */
    static exists(containerName: string, name: string): az_storage_blob_exists_command_builder;
    /**
     * Generate a shared access signature for the blob.
     *
     * Syntax:
     * ```
     * az storage blob generate-sas --container-name
     *                              --name
     *                              [--account-key]
     *                              [--account-name]
     *                              [--as-user]
     *                              [--auth-mode {key, login}]
     *                              [--cache-control]
     *                              [--connection-string]
     *                              [--content-disposition]
     *                              [--content-encoding]
     *                              [--content-language]
     *                              [--content-type]
     *                              [--expiry]
     *                              [--full-uri]
     *                              [--https-only]
     *                              [--ip]
     *                              [--permissions]
     *                              [--policy-name]
     *                              [--start]
     *                              [--subscription]
     * ```
     *
     * @param {string} containerName The container name.
     * @param {string} name The blob name.
     */
    static generate_sas(containerName: string, name: string): az_storage_blob_generate_sas_command_builder;
    /**
     * List blobs in a given container.
     *
     * Syntax:
     * ```
     * az storage blob list --container-name
     *                      [--account-key]
     *                      [--account-name]
     *                      [--auth-mode {key, login}]
     *                      [--connection-string]
     *                      [--delimiter]
     *                      [--include]
     *                      [--marker]
     *                      [--num-results]
     *                      [--prefix]
     *                      [--query-examples]
     *                      [--sas-token]
     *                      [--show-next-marker]
     *                      [--subscription]
     *                      [--timeout]
     * ```
     *
     * @param {string} containerName The container name.
     */
    static list(containerName: string): az_storage_blob_list_command_builder;
    /**
     * Restore blobs in the specified blob ranges.
     *
     * Syntax:
     * ```
     * az storage blob restore --account-name
     *                         --time-to-restore
     *                         [--blob-range]
     *                         [--no-wait]
     *                         [--resource-group]
     *                         [--subscription]
     * ```
     *
     * @param {string} accountName The storage account name.
     * @param {string} timeToRestore Restore blob to the specified time, which should be UTC datetime in (Y-m-d'T'H:M:S'Z').
     */
    static restore(accountName: string, timeToRestore: string): az_storage_blob_restore_command_builder;
    /**
     * Set the block or page tiers on the blob.
     *
     * Syntax:
     * ```
     * az storage blob set-tier --container-name
     *                          --name
     *                          --tier
     *                          [--account-key]
     *                          [--account-name]
     *                          [--auth-mode {key, login}]
     *                          [--connection-string]
     *                          [--rehydrate-priority {High, Standard}]
     *                          [--sas-token]
     *                          [--subscription]
     *                          [--timeout]
     *                          [--type {block, page}]
     * ```
     *
     * @param {string} containerName The container name.
     * @param {string} name The blob name.
     * @param {string} tier The tier value to set the blob to.
     */
    static set_tier(containerName: string, name: string, tier: string): az_storage_blob_set_tier_command_builder;
    /**
     * Get the details of a blob.
     *
     * Syntax:
     * ```
     * az storage blob show --container-name
     *                      --name
     *                      [--account-key]
     *                      [--account-name]
     *                      [--auth-mode {key, login}]
     *                      [--connection-string]
     *                      [--if-match]
     *                      [--if-modified-since]
     *                      [--if-none-match]
     *                      [--if-unmodified-since]
     *                      [--lease-id]
     *                      [--query-examples]
     *                      [--sas-token]
     *                      [--snapshot]
     *                      [--subscription]
     *                      [--timeout]
     * ```
     *
     * @param {string} containerName The container name.
     * @param {string} name The blob name.
     */
    static show(containerName: string, name: string): az_storage_blob_show_command_builder;
    /**
     * Creates a read-only snapshot of a blob.
     *
     * Syntax:
     * ```
     * az storage blob snapshot --container-name
     *                          --name
     *                          [--account-key]
     *                          [--account-name]
     *                          [--auth-mode {key, login}]
     *                          [--connection-string]
     *                          [--if-match]
     *                          [--if-modified-since]
     *                          [--if-none-match]
     *                          [--if-unmodified-since]
     *                          [--lease-id]
     *                          [--metadata]
     *                          [--sas-token]
     *                          [--subscription]
     *                          [--timeout]
     * ```
     *
     * @param {string} containerName The container name.
     * @param {string} name The blob name.
     */
    static snapshot(containerName: string, name: string): az_storage_blob_snapshot_command_builder;
    /**
     * Sync blobs recursively to a storage blob container.
     *
     * Syntax:
     * ```
     * az storage blob sync --container
     *                      --source
     *                      [--account-key]
     *                      [--account-name]
     *                      [--auth-mode {key, login}]
     *                      [--connection-string]
     *                      [--destination]
     *                      [--exclude-path]
     *                      [--exclude-pattern]
     *                      [--include-pattern]
     *                      [--sas-token]
     *                      [--subscription]
     * ```
     *
     * @param {string} container The sync destination container.
     * @param {string} source The source file path to sync from.
     */
    static sync(container: string, source: string): az_storage_blob_sync_command_builder;
    /**
     * The undelete Blob operation restores the contents and metadata of soft deleted blob or snapshot.
     *
     * Syntax:
     * ```
     * az storage blob undelete --container-name
     *                          --name
     *                          [--account-key]
     *                          [--account-name]
     *                          [--auth-mode {key, login}]
     *                          [--connection-string]
     *                          [--sas-token]
     *                          [--subscription]
     *                          [--timeout]
     * ```
     *
     * @param {string} containerName The container name.
     * @param {string} name The blob name.
     */
    static undelete(containerName: string, name: string): az_storage_blob_undelete_command_builder;
    /**
     * Sets system properties on the blob.
     *
     * Syntax:
     * ```
     * az storage blob update --container-name
     *                        --name
     *                        [--account-key]
     *                        [--account-name]
     *                        [--auth-mode {key, login}]
     *                        [--clear-content-settings {false, true}]
     *                        [--connection-string]
     *                        [--content-cache-control]
     *                        [--content-disposition]
     *                        [--content-encoding]
     *                        [--content-language]
     *                        [--content-md5]
     *                        [--content-type]
     *                        [--if-match]
     *                        [--if-modified-since]
     *                        [--if-none-match]
     *                        [--if-unmodified-since]
     *                        [--lease-id]
     *                        [--sas-token]
     *                        [--subscription]
     *                        [--timeout]
     * ```
     *
     * @param {string} containerName The container name.
     * @param {string} name The blob name.
     */
    static update(containerName: string, name: string): az_storage_blob_update_command_builder;
    /**
     * Upload a file to a storage blob.
     *
     * Syntax:
     * ```
     * az storage blob upload --container-name
     *                        --file
     *                        --name
     *                        [--account-key]
     *                        [--account-name]
     *                        [--auth-mode {key, login}]
     *                        [--connection-string]
     *                        [--content-cache-control]
     *                        [--content-disposition]
     *                        [--content-encoding]
     *                        [--content-language]
     *                        [--content-md5]
     *                        [--content-type]
     *                        [--encryption-scope]
     *                        [--if-match]
     *                        [--if-modified-since]
     *                        [--if-none-match]
     *                        [--if-unmodified-since]
     *                        [--lease-id]
     *                        [--max-connections]
     *                        [--maxsize-condition]
     *                        [--metadata]
     *                        [--no-progress]
     *                        [--sas-token]
     *                        [--socket-timeout]
     *                        [--subscription]
     *                        [--tier {P10, P20, P30, P4, P40, P50, P6, P60}]
     *                        [--timeout]
     *                        [--type {append, block, page}]
     *                        [--validate-content]
     * ```
     *
     * @param {string} containerName The container name.
     * @param {string} file Path of the file to upload as the blob content.
     * @param {string} name The blob name.
     */
    static upload(containerName: string, file: string, name: string): az_storage_blob_upload_command_builder;
    /**
     * Upload files from a local directory to a blob container.
     *
     * Syntax:
     * ```
     * az storage blob upload-batch --destination
     *                              --source
     *                              [--account-key]
     *                              [--account-name]
     *                              [--auth-mode {key, login}]
     *                              [--connection-string]
     *                              [--content-cache-control]
     *                              [--content-disposition]
     *                              [--content-encoding]
     *                              [--content-language]
     *                              [--content-md5]
     *                              [--content-type]
     *                              [--destination-path]
     *                              [--dryrun]
     *                              [--if-match]
     *                              [--if-modified-since]
     *                              [--if-none-match]
     *                              [--if-unmodified-since]
     *                              [--lease-id]
     *                              [--max-connections]
     *                              [--maxsize-condition]
     *                              [--metadata]
     *                              [--no-progress]
     *                              [--pattern]
     *                              [--sas-token]
     *                              [--socket-timeout]
     *                              [--subscription]
     *                              [--timeout]
     *                              [--type {append, block, page}]
     *                              [--validate-content]
     * ```
     *
     * @param {string} destination The blob container where the files will be uploaded.
     * @param {string} source The directory where the files to be uploaded are located.
     */
    static upload_batch(destination: string, source: string): az_storage_blob_upload_batch_command_builder;
    /**
     * Create the url to access a blob.
     *
     * Syntax:
     * ```
     * az storage blob url --container-name
     *                     --name
     *                     [--account-key]
     *                     [--account-name]
     *                     [--auth-mode {key, login}]
     *                     [--connection-string]
     *                     [--protocol {http, https}]
     *                     [--sas-token]
     *                     [--snapshot]
     *                     [--subscription]
     * ```
     *
     * @param {string} containerName The container name.
     * @param {string} name The blob name.
     */
    static url(containerName: string, name: string): az_storage_blob_url_command_builder;
}
/** Manage container immutability policies. */
export declare class az_storage_container_immutability_policy {
    /**
     * Creates or updates an unlocked immutability policy.
     *
     * Syntax:
     * ```
     * az storage container immutability-policy create --account-name
     *                                                 --container-name
     *                                                 [--allow-protected-append-writes {false, true}]
     *                                                 [--if-match]
     *                                                 [--period]
     *                                                 [--resource-group]
     *                                                 [--subscription]
     * ```
     *
     * @param {string} accountName The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
     * @param {string} containerName The container name.
     */
    static create(accountName: string, containerName: string): az_storage_container_immutability_policy_create_command_builder;
    /**
     * Aborts an unlocked immutability policy.
     *
     * Syntax:
     * ```
     * az storage container immutability-policy delete --account-name
     *                                                 --container-name
     *                                                 --if-match
     *                                                 [--resource-group]
     *                                                 [--subscription]
     * ```
     *
     * @param {string} accountName The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
     * @param {string} containerName The container name.
     * @param {string} ifMatch The entity state (ETag) version of the immutability policy to update. A value of "\*" can be used to apply the operation only if the immutability policy already exists. If omitted, this operation will always be applied.
     */
    static delete(accountName: string, containerName: string, ifMatch: string): az_storage_container_immutability_policy_delete_command_builder;
    /**
     * Extends the immutabilityPeriodSinceCreationInDays of a locked immutabilityPolicy.
     *
     * Syntax:
     * ```
     * az storage container immutability-policy extend --account-name
     *                                                 --container-name
     *                                                 --if-match
     *                                                 [--allow-protected-append-writes {false, true}]
     *                                                 [--period]
     *                                                 [--resource-group]
     *                                                 [--subscription]
     * ```
     *
     * @param {string} accountName The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
     * @param {string} containerName The container name.
     * @param {string} ifMatch The entity state (ETag) version of the immutability policy to update. A value of "\*" can be used to apply the operation only if the immutability policy already exists. If omitted, this operation will always be applied.
     */
    static extend(accountName: string, containerName: string, ifMatch: string): az_storage_container_immutability_policy_extend_command_builder;
    /**
     * Sets the ImmutabilityPolicy to Locked state.
     *
     * Syntax:
     * ```
     * az storage container immutability-policy lock --account-name
     *                                               --container-name
     *                                               --if-match
     *                                               [--resource-group]
     *                                               [--subscription]
     * ```
     *
     * @param {string} accountName The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
     * @param {string} containerName The container name.
     * @param {string} ifMatch The entity state (ETag) version of the immutability policy to update. A value of "\*" can be used to apply the operation only if the immutability policy already exists. If omitted, this operation will always be applied.
     */
    static lock(accountName: string, containerName: string, ifMatch: string): az_storage_container_immutability_policy_lock_command_builder;
    /**
     * Gets the existing immutability policy along with the corresponding ETag in response headers and body.
     *
     * Syntax:
     * ```
     * az storage container immutability-policy show --account-name
     *                                               --container-name
     *                                               [--if-match]
     *                                               [--query-examples]
     *                                               [--resource-group]
     *                                               [--subscription]
     * ```
     *
     * @param {string} accountName The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
     * @param {string} containerName The container name.
     */
    static show(accountName: string, containerName: string): az_storage_container_immutability_policy_show_command_builder;
}
/** Manage blob storage container leases. */
export declare class az_storage_container_lease {
    /**
     * Requests a new lease.
     *
     * Syntax:
     * ```
     * az storage container lease acquire --container-name
     *                                    [--account-key]
     *                                    [--account-name]
     *                                    [--auth-mode {key, login}]
     *                                    [--connection-string]
     *                                    [--if-modified-since]
     *                                    [--if-unmodified-since]
     *                                    [--lease-duration]
     *                                    [--proposed-lease-id]
     *                                    [--sas-token]
     *                                    [--subscription]
     *                                    [--timeout]
     * ```
     *
     * @param {string} containerName The container name.
     */
    static acquire(containerName: string): az_storage_container_lease_acquire_command_builder;
    /**
     * Break the lease, if the container has an active lease.
     *
     * Syntax:
     * ```
     * az storage container lease break --container-name
     *                                  [--account-key]
     *                                  [--account-name]
     *                                  [--auth-mode {key, login}]
     *                                  [--connection-string]
     *                                  [--if-modified-since]
     *                                  [--if-unmodified-since]
     *                                  [--lease-break-period]
     *                                  [--sas-token]
     *                                  [--subscription]
     *                                  [--timeout]
     * ```
     *
     * @param {string} containerName The container name.
     */
    static break(containerName: string): az_storage_container_lease_break_command_builder;
    /**
     * Change the lease ID of an active lease.
     *
     * Syntax:
     * ```
     * az storage container lease change --container-name
     *                                   --lease-id
     *                                   --proposed-lease-id
     *                                   [--account-key]
     *                                   [--account-name]
     *                                   [--auth-mode {key, login}]
     *                                   [--connection-string]
     *                                   [--if-modified-since]
     *                                   [--if-unmodified-since]
     *                                   [--sas-token]
     *                                   [--subscription]
     *                                   [--timeout]
     * ```
     *
     * @param {string} containerName The container name.
     * @param {string} leaseId Lease ID for active lease.
     * @param {string} proposedLeaseId Proposed lease ID, in a GUID string format. The Blob service returns 400 (Invalid request) if the proposed lease ID is not in the correct format.
     */
    static change(containerName: string, leaseId: string, proposedLeaseId: string): az_storage_container_lease_change_command_builder;
    /**
     * Release the lease.
     *
     * Syntax:
     * ```
     * az storage container lease release --container-name
     *                                    --lease-id
     *                                    [--account-key]
     *                                    [--account-name]
     *                                    [--auth-mode {key, login}]
     *                                    [--connection-string]
     *                                    [--if-modified-since]
     *                                    [--if-unmodified-since]
     *                                    [--sas-token]
     *                                    [--subscription]
     *                                    [--timeout]
     * ```
     *
     * @param {string} containerName The container name.
     * @param {string} leaseId Lease ID for active lease.
     */
    static release(containerName: string, leaseId: string): az_storage_container_lease_release_command_builder;
    /**
     * Renews the lease.
     *
     * Syntax:
     * ```
     * az storage container lease renew --container-name
     *                                  --lease-id
     *                                  [--account-key]
     *                                  [--account-name]
     *                                  [--auth-mode {key, login}]
     *                                  [--connection-string]
     *                                  [--if-modified-since]
     *                                  [--if-unmodified-since]
     *                                  [--sas-token]
     *                                  [--subscription]
     *                                  [--timeout]
     * ```
     *
     * @param {string} containerName The container name.
     * @param {string} leaseId Lease ID for active lease.
     */
    static renew(containerName: string, leaseId: string): az_storage_container_lease_renew_command_builder;
}
/** Manage container legal holds. */
export declare class az_storage_container_legal_hold {
    /**
     * Clears legal hold tags.
     *
     * Syntax:
     * ```
     * az storage container legal-hold clear --account-name
     *                                       --container-name
     *                                       --tags
     *                                       [--resource-group]
     *                                       [--subscription]
     * ```
     *
     * @param {string} accountName The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
     * @param {string} containerName The container name.
     * @param {string} tags Each tag should be 3 to 23 alphanumeric characters and is normalized to lower case.
     */
    static clear(accountName: string, containerName: string, tags: string): az_storage_container_legal_hold_clear_command_builder;
    /**
     * Sets legal hold tags.
     *
     * Syntax:
     * ```
     * az storage container legal-hold set --account-name
     *                                     --container-name
     *                                     --tags
     *                                     [--resource-group]
     *                                     [--subscription]
     * ```
     *
     * @param {string} accountName The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
     * @param {string} containerName The container name.
     * @param {string} tags Each tag should be 3 to 23 alphanumeric characters and is normalized to lower case.
     */
    static set(accountName: string, containerName: string, tags: string): az_storage_container_legal_hold_set_command_builder;
    /**
     * Get the legal hold properties of a container.
     *
     * Syntax:
     * ```
     * az storage container legal-hold show --account-name
     *                                      --container-name
     *                                      [--query-examples]
     *                                      [--resource-group]
     *                                      [--subscription]
     * ```
     *
     * @param {string} accountName The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
     * @param {string} containerName The container name.
     */
    static show(accountName: string, containerName: string): az_storage_container_legal_hold_show_command_builder;
}
/** Manage container metadata. */
export declare class az_storage_container_metadata {
    /**
     * Returns all user-defined metadata for the specified container.
     *
     * Syntax:
     * ```
     * az storage container metadata show --name
     *                                    [--account-key]
     *                                    [--account-name]
     *                                    [--auth-mode {key, login}]
     *                                    [--connection-string]
     *                                    [--lease-id]
     *                                    [--query-examples]
     *                                    [--sas-token]
     *                                    [--subscription]
     *                                    [--timeout]
     * ```
     *
     * @param {string} name The container name.
     */
    static show(name: string): az_storage_container_metadata_show_command_builder;
    /**
     * Sets one or more user-defined name-value pairs for the specified container.
     *
     * Syntax:
     * ```
     * az storage container metadata update --name
     *                                      [--account-key]
     *                                      [--account-name]
     *                                      [--auth-mode {key, login}]
     *                                      [--connection-string]
     *                                      [--if-modified-since]
     *                                      [--lease-id]
     *                                      [--metadata]
     *                                      [--sas-token]
     *                                      [--subscription]
     *                                      [--timeout]
     * ```
     *
     * @param {string} name The container name.
     */
    static update(name: string): az_storage_container_metadata_update_command_builder;
}
/** Manage container stored access policies. */
export declare class az_storage_container_policy {
    /**
     * Create a stored access policy on the containing object.
     *
     * Syntax:
     * ```
     * az storage container policy create --container-name
     *                                    --name
     *                                    [--account-key]
     *                                    [--account-name]
     *                                    [--auth-mode {key, login}]
     *                                    [--connection-string]
     *                                    [--expiry]
     *                                    [--lease-id]
     *                                    [--permissions]
     *                                    [--sas-token]
     *                                    [--start]
     *                                    [--subscription]
     * ```
     *
     * @param {string} containerName The container name.
     * @param {string} name The stored access policy name.
     */
    static create(containerName: string, name: string): az_storage_container_policy_create_command_builder;
    /**
     * Delete a stored access policy on a containing object.
     *
     * Syntax:
     * ```
     * az storage container policy delete --container-name
     *                                    --name
     *                                    [--account-key]
     *                                    [--account-name]
     *                                    [--auth-mode {key, login}]
     *                                    [--connection-string]
     *                                    [--lease-id]
     *                                    [--sas-token]
     *                                    [--subscription]
     * ```
     *
     * @param {string} containerName The container name.
     * @param {string} name The stored access policy name.
     */
    static delete(containerName: string, name: string): az_storage_container_policy_delete_command_builder;
    /**
     * List stored access policies on a containing object.
     *
     * Syntax:
     * ```
     * az storage container policy list --container-name
     *                                  [--account-key]
     *                                  [--account-name]
     *                                  [--auth-mode {key, login}]
     *                                  [--connection-string]
     *                                  [--lease-id]
     *                                  [--query-examples]
     *                                  [--sas-token]
     *                                  [--subscription]
     * ```
     *
     * @param {string} containerName The container name.
     */
    static list(containerName: string): az_storage_container_policy_list_command_builder;
    /**
     * Show a stored access policy on a containing object.
     *
     * Syntax:
     * ```
     * az storage container policy show --container-name
     *                                  --name
     *                                  [--account-key]
     *                                  [--account-name]
     *                                  [--auth-mode {key, login}]
     *                                  [--connection-string]
     *                                  [--lease-id]
     *                                  [--query-examples]
     *                                  [--sas-token]
     *                                  [--subscription]
     * ```
     *
     * @param {string} containerName The container name.
     * @param {string} name The stored access policy name.
     */
    static show(containerName: string, name: string): az_storage_container_policy_show_command_builder;
    /**
     * Set a stored access policy on a containing object.
     *
     * Syntax:
     * ```
     * az storage container policy update --container-name
     *                                    --name
     *                                    [--account-key]
     *                                    [--account-name]
     *                                    [--auth-mode {key, login}]
     *                                    [--connection-string]
     *                                    [--expiry]
     *                                    [--lease-id]
     *                                    [--permissions]
     *                                    [--sas-token]
     *                                    [--start]
     *                                    [--subscription]
     * ```
     *
     * @param {string} containerName The container name.
     * @param {string} name The stored access policy name.
     */
    static update(containerName: string, name: string): az_storage_container_policy_update_command_builder;
}
/** Manage blob storage containers. */
export declare class az_storage_container {
    /**
     * Create a container in a storage account.
     *
     * Syntax:
     * ```
     * az storage container create --name
     *                             [--account-key]
     *                             [--account-name]
     *                             [--auth-mode {key, login}]
     *                             [--connection-string]
     *                             [--default-encryption-scope]
     *                             [--fail-on-exist]
     *                             [--metadata]
     *                             [--prevent-encryption-scope-override {false, true}]
     *                             [--public-access {blob, container, off}]
     *                             [--resource-group]
     *                             [--sas-token]
     *                             [--subscription]
     *                             [--timeout]
     * ```
     *
     * @param {string} name The container name.
     */
    static create(name: string): az_storage_container_create_command_builder;
    /**
     * Marks the specified container for deletion.
     *
     * Syntax:
     * ```
     * az storage container delete --name
     *                             [--account-key]
     *                             [--account-name]
     *                             [--auth-mode {key, login}]
     *                             [--bypass-immutability-policy]
     *                             [--connection-string]
     *                             [--fail-not-exist]
     *                             [--if-modified-since]
     *                             [--if-unmodified-since]
     *                             [--lease-id]
     *                             [--sas-token]
     *                             [--subscription]
     *                             [--timeout]
     * ```
     *
     * @param {string} name The container name.
     */
    static delete(name: string): az_storage_container_delete_command_builder;
    /**
     * Check for the existence of a storage container.
     *
     * Syntax:
     * ```
     * az storage container exists --name
     *                             [--account-key]
     *                             [--account-name]
     *                             [--auth-mode {key, login}]
     *                             [--connection-string]
     *                             [--sas-token]
     *                             [--subscription]
     *                             [--timeout]
     * ```
     *
     * @param {string} name The container name.
     */
    static exists(name: string): az_storage_container_exists_command_builder;
    /**
     * Generate a SAS token for a storage container.
     *
     * Syntax:
     * ```
     * az storage container generate-sas --name
     *                                   [--account-key]
     *                                   [--account-name]
     *                                   [--as-user]
     *                                   [--auth-mode {key, login}]
     *                                   [--cache-control]
     *                                   [--connection-string]
     *                                   [--content-disposition]
     *                                   [--content-encoding]
     *                                   [--content-language]
     *                                   [--content-type]
     *                                   [--expiry]
     *                                   [--https-only]
     *                                   [--ip]
     *                                   [--permissions]
     *                                   [--policy-name]
     *                                   [--start]
     *                                   [--subscription]
     * ```
     *
     * @param {string} name The container name.
     */
    static generate_sas(name: string): az_storage_container_generate_sas_command_builder;
    /**
     * List containers in a storage account.
     *
     * Syntax:
     * ```
     * az storage container list [--account-key]
     *                           [--account-name]
     *                           [--auth-mode {key, login}]
     *                           [--connection-string]
     *                           [--include-metadata]
     *                           [--marker]
     *                           [--num-results]
     *                           [--prefix]
     *                           [--query-examples]
     *                           [--sas-token]
     *                           [--subscription]
     *                           [--timeout]
     * ```
     */
    static list(): az_storage_container_list_command_builder;
    /**
     * Sets the permissions for the specified container or stored access  policies that may be used with Shared Access Signatures.
     *
     * Syntax:
     * ```
     * az storage container set-permission --name
     *                                     [--account-key]
     *                                     [--account-name]
     *                                     [--auth-mode {key, login}]
     *                                     [--connection-string]
     *                                     [--if-modified-since]
     *                                     [--if-unmodified-since]
     *                                     [--lease-id]
     *                                     [--public-access {blob, container, off}]
     *                                     [--sas-token]
     *                                     [--subscription]
     *                                     [--timeout]
     * ```
     *
     * @param {string} name The container name.
     */
    static set_permission(name: string): az_storage_container_set_permission_command_builder;
    /**
     * Returns all user-defined metadata and system properties for the specified container.
     *
     * Syntax:
     * ```
     * az storage container show --name
     *                           [--account-key]
     *                           [--account-name]
     *                           [--auth-mode {key, login}]
     *                           [--connection-string]
     *                           [--lease-id]
     *                           [--query-examples]
     *                           [--sas-token]
     *                           [--subscription]
     *                           [--timeout]
     * ```
     *
     * @param {string} name The container name.
     */
    static show(name: string): az_storage_container_show_command_builder;
    /**
     * Gets the permissions for the specified container.
     *
     * Syntax:
     * ```
     * az storage container show-permission --name
     *                                      [--account-key]
     *                                      [--account-name]
     *                                      [--auth-mode {key, login}]
     *                                      [--connection-string]
     *                                      [--lease-id]
     *                                      [--sas-token]
     *                                      [--subscription]
     *                                      [--timeout]
     * ```
     *
     * @param {string} name The container name.
     */
    static show_permission(name: string): az_storage_container_show_permission_command_builder;
}
/** Manage storage service Cross-Origin Resource Sharing (CORS). */
export declare class az_storage_cors {
    /**
     * Add a CORS rule to a storage account.
     *
     * Syntax:
     * ```
     * az storage cors add --methods {DELETE, GET, HEAD, MERGE, OPTIONS, POST, PUT}
     *                     --origins
     *                     --services
     *                     [--account-key]
     *                     [--account-name]
     *                     [--allowed-headers]
     *                     [--connection-string]
     *                     [--exposed-headers]
     *                     [--max-age]
     *                     [--sas-token]
     *                     [--subscription]
     *                     [--timeout]
     * ```
     *
     * @param {'DELETE' | 'GET' | 'HEAD' | 'MERGE' | 'OPTIONS' | 'POST' | 'PUT'} methods Space-separated list of HTTP methods allowed to be executed by the origin.
     * @param {string} origins Space-separated list of origin domains that will be allowed via CORS, or '\*' to allow all domains.
     * @param {string} services The storage service(s) to add rules to. Allowed options are: (b)lob, (f)ile, (q)ueue, (t)able. Can be combined.
     */
    static add(methods: 'DELETE' | 'GET' | 'HEAD' | 'MERGE' | 'OPTIONS' | 'POST' | 'PUT', origins: string, services: string): az_storage_cors_add_command_builder;
    /**
     * Remove all CORS rules from a storage account.
     *
     * Syntax:
     * ```
     * az storage cors clear --services
     *                       [--account-key]
     *                       [--account-name]
     *                       [--connection-string]
     *                       [--sas-token]
     *                       [--subscription]
     *                       [--timeout]
     * ```
     *
     * @param {string} services The storage service(s) to remove rules from. Allowed options are: (b)lob, (f)ile, (q)ueue, (t)able. Can be combined.
     */
    static clear(services: string): az_storage_cors_clear_command_builder;
    /**
     * List all CORS rules for a storage account.
     *
     * Syntax:
     * ```
     * az storage cors list [--account-key]
     *                      [--account-name]
     *                      [--connection-string]
     *                      [--query-examples]
     *                      [--sas-token]
     *                      [--services]
     *                      [--subscription]
     *                      [--timeout]
     * ```
     */
    static list(): az_storage_cors_list_command_builder;
}
/** Manage file storage directory metadata. */
export declare class az_storage_directory_metadata {
    /**
     * Returns all user-defined metadata for the specified directory.
     *
     * Syntax:
     * ```
     * az storage directory metadata show --name
     *                                    --share-name
     *                                    [--account-key]
     *                                    [--account-name]
     *                                    [--connection-string]
     *                                    [--query-examples]
     *                                    [--sas-token]
     *                                    [--snapshot]
     *                                    [--subscription]
     *                                    [--timeout]
     * ```
     *
     * @param {string} name The directory name.
     * @param {string} shareName The file share name.
     */
    static show(name: string, shareName: string): az_storage_directory_metadata_show_command_builder;
    /**
     * Sets one or more user-defined name-value pairs for the specified directory.
     *
     * Syntax:
     * ```
     * az storage directory metadata update --name
     *                                      --share-name
     *                                      [--account-key]
     *                                      [--account-name]
     *                                      [--connection-string]
     *                                      [--metadata]
     *                                      [--sas-token]
     *                                      [--subscription]
     *                                      [--timeout]
     * ```
     *
     * @param {string} name The directory name.
     * @param {string} shareName The file share name.
     */
    static update(name: string, shareName: string): az_storage_directory_metadata_update_command_builder;
}
/** Manage file storage directories. */
export declare class az_storage_directory {
    /**
     * Creates a new directory under the specified share or parent directory.
     *
     * Syntax:
     * ```
     * az storage directory create --name
     *                             --share-name
     *                             [--account-key]
     *                             [--account-name]
     *                             [--connection-string]
     *                             [--fail-on-exist]
     *                             [--metadata]
     *                             [--sas-token]
     *                             [--subscription]
     *                             [--timeout]
     * ```
     *
     * @param {string} name The directory name.
     * @param {string} shareName The file share name.
     */
    static create(name: string, shareName: string): az_storage_directory_create_command_builder;
    /**
     * Deletes the specified empty directory.
     *
     * Syntax:
     * ```
     * az storage directory delete --name
     *                             --share-name
     *                             [--account-key]
     *                             [--account-name]
     *                             [--connection-string]
     *                             [--fail-not-exist]
     *                             [--sas-token]
     *                             [--subscription]
     *                             [--timeout]
     * ```
     *
     * @param {string} name The directory name.
     * @param {string} shareName The file share name.
     */
    static delete(name: string, shareName: string): az_storage_directory_delete_command_builder;
    /**
     * Check for the existence of a storage directory.
     *
     * Syntax:
     * ```
     * az storage directory exists --name
     *                             --share-name
     *                             [--account-key]
     *                             [--account-name]
     *                             [--connection-string]
     *                             [--sas-token]
     *                             [--snapshot]
     *                             [--subscription]
     *                             [--timeout]
     * ```
     *
     * @param {string} name The directory name.
     * @param {string} shareName The file share name.
     */
    static exists(name: string, shareName: string): az_storage_directory_exists_command_builder;
    /**
     * List directories in a share.
     *
     * Syntax:
     * ```
     * az storage directory list --share-name
     *                           [--account-key]
     *                           [--account-name]
     *                           [--connection-string]
     *                           [--name]
     *                           [--query-examples]
     *                           [--sas-token]
     *                           [--subscription]
     *                           [--timeout]
     * ```
     *
     * @param {string} shareName The file share name.
     */
    static list(shareName: string): az_storage_directory_list_command_builder;
    /**
     * Returns all user-defined metadata and system properties for the specified directory.
     *
     * Syntax:
     * ```
     * az storage directory show --name
     *                           --share-name
     *                           [--account-key]
     *                           [--account-name]
     *                           [--connection-string]
     *                           [--query-examples]
     *                           [--sas-token]
     *                           [--snapshot]
     *                           [--subscription]
     *                           [--timeout]
     * ```
     *
     * @param {string} name The directory name.
     * @param {string} shareName The file share name.
     */
    static show(name: string, shareName: string): az_storage_directory_show_command_builder;
}
/** Manage table storage entities. */
export declare class az_storage_entity {
    /**
     * Deletes an existing entity in a table.
     *
     * Syntax:
     * ```
     * az storage entity delete --partition-key
     *                          --row-key
     *                          --table-name
     *                          [--account-key]
     *                          [--account-name]
     *                          [--connection-string]
     *                          [--if-match]
     *                          [--sas-token]
     *                          [--subscription]
     *                          [--timeout]
     * ```
     *
     * @param {string} partitionKey The PartitionKey of the entity.
     * @param {string} rowKey The RowKey of the entity.
     * @param {string} tableName The name of the table containing the entity to delete.
     */
    static delete(partitionKey: string, rowKey: string, tableName: string): az_storage_entity_delete_command_builder;
    /**
     * Insert an entity into a table.
     *
     * Syntax:
     * ```
     * az storage entity insert --entity
     *                          --table-name
     *                          [--account-key]
     *                          [--account-name]
     *                          [--connection-string]
     *                          [--if-exists {fail, merge, replace}]
     *                          [--sas-token]
     *                          [--subscription]
     *                          [--timeout]
     * ```
     *
     * @param {string} entity Space-separated list of key=value pairs. Must contain a PartitionKey and a RowKey.
     * @param {string} tableName The name of the table to insert the entity into.
     */
    static insert(entity: string, tableName: string): az_storage_entity_insert_command_builder;
    /**
     * Updates an existing entity by merging the entity's properties.
     *
     * Syntax:
     * ```
     * az storage entity merge --entity
     *                         --table-name
     *                         [--account-key]
     *                         [--account-name]
     *                         [--connection-string]
     *                         [--if-match]
     *                         [--sas-token]
     *                         [--subscription]
     *                         [--timeout]
     * ```
     *
     * @param {string} entity The entity to merge. Could be a dict or an entity object. Must contain a PartitionKey and a RowKey.
     * @param {string} tableName The name of the table containing the entity to merge.
     */
    static merge(entity: string, tableName: string): az_storage_entity_merge_command_builder;
    /**
     * List entities which satisfy a query.
     *
     * Syntax:
     * ```
     * az storage entity query --table-name
     *                         [--accept {full, minimal, none}]
     *                         [--account-key]
     *                         [--account-name]
     *                         [--connection-string]
     *                         [--filter]
     *                         [--marker]
     *                         [--num-results]
     *                         [--sas-token]
     *                         [--select]
     *                         [--subscription]
     *                         [--timeout]
     * ```
     *
     * @param {string} tableName The name of the table to query.
     */
    static query(tableName: string): az_storage_entity_query_command_builder;
    /**
     * Updates an existing entity in a table.
     *
     * Syntax:
     * ```
     * az storage entity replace --entity
     *                           --table-name
     *                           [--account-key]
     *                           [--account-name]
     *                           [--connection-string]
     *                           [--if-match]
     *                           [--sas-token]
     *                           [--subscription]
     *                           [--timeout]
     * ```
     *
     * @param {string} entity The entity to update. Could be a dict or an entity object. Must contain a PartitionKey and a RowKey.
     * @param {string} tableName The name of the table containing the entity to update.
     */
    static replace(entity: string, tableName: string): az_storage_entity_replace_command_builder;
    /**
     * Get an entity from the specified table.
     *
     * Syntax:
     * ```
     * az storage entity show --partition-key
     *                        --row-key
     *                        --table-name
     *                        [--accept]
     *                        [--account-key]
     *                        [--account-name]
     *                        [--connection-string]
     *                        [--query-examples]
     *                        [--sas-token]
     *                        [--select]
     *                        [--subscription]
     *                        [--timeout]
     * ```
     *
     * @param {string} partitionKey The PartitionKey of the entity.
     * @param {string} rowKey The RowKey of the entity.
     * @param {string} tableName The name of the table to get the entity from.
     */
    static show(partitionKey: string, rowKey: string, tableName: string): az_storage_entity_show_command_builder;
}
/** Manage file copy operations. */
export declare class az_storage_file_copy {
    /**
     * Aborts a pending copy_file operation, and leaves a destination file  with zero length and full metadata.
     *
     * Syntax:
     * ```
     * az storage file copy cancel --copy-id
     *                             --destination-path
     *                             --destination-share
     *                             [--account-key]
     *                             [--account-name]
     *                             [--connection-string]
     *                             [--sas-token]
     *                             [--subscription]
     *                             [--timeout]
     * ```
     *
     * @param {string} copyId Copy identifier provided in the copy.id of the original copy_file operation.
     * @param {string} destinationPath The path to the file within the file share.
     * @param {string} destinationShare Name of the destination share. The share must exist.
     */
    static cancel(copyId: string, destinationPath: string, destinationShare: string): az_storage_file_copy_cancel_command_builder;
    /**
     * Copy a file asynchronously.
     *
     * Syntax:
     * ```
     * az storage file copy start --destination-path
     *                            --destination-share
     *                            [--account-key]
     *                            [--account-name]
     *                            [--connection-string]
     *                            [--file-snapshot]
     *                            [--metadata]
     *                            [--sas-token]
     *                            [--source-account-key]
     *                            [--source-account-name]
     *                            [--source-blob]
     *                            [--source-container]
     *                            [--source-path]
     *                            [--source-sas]
     *                            [--source-share]
     *                            [--source-snapshot]
     *                            [--source-uri]
     *                            [--subscription]
     *                            [--timeout]
     * ```
     *
     * @param {string} destinationPath The path to the file within the file share.
     * @param {string} destinationShare Name of the destination share. The share must exist.
     */
    static start(destinationPath: string, destinationShare: string): az_storage_file_copy_start_command_builder;
    /**
     * Copy multiple files or blobs to a file share.
     *
     * Syntax:
     * ```
     * az storage file copy start-batch [--account-key]
     *                                  [--account-name]
     *                                  [--connection-string]
     *                                  [--destination-path]
     *                                  [--destination-share]
     *                                  [--dryrun]
     *                                  [--metadata]
     *                                  [--pattern]
     *                                  [--sas-token]
     *                                  [--source-account-key]
     *                                  [--source-account-name]
     *                                  [--source-container]
     *                                  [--source-sas]
     *                                  [--source-share]
     *                                  [--source-uri]
     *                                  [--subscription]
     *                                  [--timeout]
     * ```
     */
    static start_batch(): az_storage_file_copy_start_batch_command_builder;
}
/** Manage file metadata. */
export declare class az_storage_file_metadata {
    /**
     * Returns all user-defined metadata for the specified file.
     *
     * Syntax:
     * ```
     * az storage file metadata show --path
     *                               --share-name
     *                               [--account-key]
     *                               [--account-name]
     *                               [--connection-string]
     *                               [--query-examples]
     *                               [--sas-token]
     *                               [--snapshot]
     *                               [--subscription]
     *                               [--timeout]
     * ```
     *
     * @param {string} path The path to the file within the file share.
     * @param {string} shareName The file share name.
     */
    static show(path: string, shareName: string): az_storage_file_metadata_show_command_builder;
    /**
     * Sets user-defined metadata for the specified file as one or more name-value pairs.
     *
     * Syntax:
     * ```
     * az storage file metadata update --path
     *                                 --share-name
     *                                 [--account-key]
     *                                 [--account-name]
     *                                 [--connection-string]
     *                                 [--metadata]
     *                                 [--sas-token]
     *                                 [--subscription]
     *                                 [--timeout]
     * ```
     *
     * @param {string} path The path to the file within the file share.
     * @param {string} shareName The file share name.
     */
    static update(path: string, shareName: string): az_storage_file_metadata_update_command_builder;
}
/** Manage file shares that use the SMB 3.0 protocol. */
export declare class az_storage_file {
    /**
     * Marks the specified file for deletion.
     *
     * Syntax:
     * ```
     * az storage file delete --path
     *                        --share-name
     *                        [--account-key]
     *                        [--account-name]
     *                        [--connection-string]
     *                        [--sas-token]
     *                        [--subscription]
     *                        [--timeout]
     * ```
     *
     * @param {string} path The path to the file within the file share.
     * @param {string} shareName The file share name.
     */
    static delete(path: string, shareName: string): az_storage_file_delete_command_builder;
    /**
     * Delete files from an Azure Storage File Share.
     *
     * Syntax:
     * ```
     * az storage file delete-batch --source
     *                              [--account-key]
     *                              [--account-name]
     *                              [--connection-string]
     *                              [--dryrun]
     *                              [--pattern]
     *                              [--sas-token]
     *                              [--subscription]
     *                              [--timeout]
     * ```
     *
     * @param {string} source The source of the file delete operation. The source can be the file share URL or the share name.
     */
    static delete_batch(source: string): az_storage_file_delete_batch_command_builder;
    /**
     * Downloads a file to a file path, with automatic chunking and progress notifications.
     *
     * Syntax:
     * ```
     * az storage file download --path
     *                          --share-name
     *                          [--account-key]
     *                          [--account-name]
     *                          [--connection-string]
     *                          [--dest]
     *                          [--end-range]
     *                          [--max-connections]
     *                          [--no-progress]
     *                          [--open-mode]
     *                          [--sas-token]
     *                          [--snapshot]
     *                          [--start-range]
     *                          [--subscription]
     *                          [--timeout]
     *                          [--validate-content]
     * ```
     *
     * @param {string} path The path to the file within the file share.
     * @param {string} shareName The file share name.
     */
    static download(path: string, shareName: string): az_storage_file_download_command_builder;
    /**
     * Download files from an Azure Storage File Share to a local directory in a batch operation.
     *
     * Syntax:
     * ```
     * az storage file download-batch --destination
     *                                --source
     *                                [--account-key]
     *                                [--account-name]
     *                                [--connection-string]
     *                                [--dryrun]
     *                                [--max-connections]
     *                                [--no-progress]
     *                                [--pattern]
     *                                [--sas-token]
     *                                [--snapshot]
     *                                [--subscription]
     *                                [--validate-content]
     * ```
     *
     * @param {string} destination The local directory where the files are downloaded to. This directory must already exist.
     * @param {string} source The source of the file download operation. The source can be the file share URL or the share name.
     */
    static download_batch(destination: string, source: string): az_storage_file_download_batch_command_builder;
    /**
     * Check for the existence of a file.
     *
     * Syntax:
     * ```
     * az storage file exists --path
     *                        --share-name
     *                        [--account-key]
     *                        [--account-name]
     *                        [--connection-string]
     *                        [--sas-token]
     *                        [--snapshot]
     *                        [--subscription]
     *                        [--timeout]
     * ```
     *
     * @param {string} path The path to the file within the file share.
     * @param {string} shareName The file share name.
     */
    static exists(path: string, shareName: string): az_storage_file_exists_command_builder;
    /**
     * Generates a shared access signature for the file.
     *
     * Syntax:
     * ```
     * az storage file generate-sas --path
     *                              --share-name
     *                              [--account-key]
     *                              [--account-name]
     *                              [--cache-control]
     *                              [--connection-string]
     *                              [--content-disposition]
     *                              [--content-encoding]
     *                              [--content-language]
     *                              [--content-type]
     *                              [--expiry]
     *                              [--https-only]
     *                              [--ip]
     *                              [--permissions]
     *                              [--policy-name]
     *                              [--start]
     *                              [--subscription]
     * ```
     *
     * @param {string} path The path to the file within the file share.
     * @param {string} shareName The file share name.
     */
    static generate_sas(path: string, shareName: string): az_storage_file_generate_sas_command_builder;
    /**
     * List files and directories in a share.
     *
     * Syntax:
     * ```
     * az storage file list --share-name
     *                      [--account-key]
     *                      [--account-name]
     *                      [--connection-string]
     *                      [--exclude-dir]
     *                      [--marker]
     *                      [--num-results]
     *                      [--path]
     *                      [--query-examples]
     *                      [--sas-token]
     *                      [--snapshot]
     *                      [--subscription]
     *                      [--timeout]
     * ```
     *
     * @param {string} shareName The file share name.
     */
    static list(shareName: string): az_storage_file_list_command_builder;
    /**
     * Resizes a file to the specified size.
     *
     * Syntax:
     * ```
     * az storage file resize --path
     *                        --share-name
     *                        --size
     *                        [--account-key]
     *                        [--account-name]
     *                        [--connection-string]
     *                        [--sas-token]
     *                        [--subscription]
     *                        [--timeout]
     * ```
     *
     * @param {string} path The path to the file within the file share.
     * @param {string} shareName The file share name.
     * @param {string} size The length to resize the file to.
     */
    static resize(path: string, shareName: string, size: string): az_storage_file_resize_command_builder;
    /**
     * Returns all user-defined metadata, standard HTTP properties, and system properties for the file.
     *
     * Syntax:
     * ```
     * az storage file show --path
     *                      --share-name
     *                      [--account-key]
     *                      [--account-name]
     *                      [--connection-string]
     *                      [--query-examples]
     *                      [--sas-token]
     *                      [--snapshot]
     *                      [--subscription]
     *                      [--timeout]
     * ```
     *
     * @param {string} path The path to the file within the file share.
     * @param {string} shareName The file share name.
     */
    static show(path: string, shareName: string): az_storage_file_show_command_builder;
    /**
     * Sets system properties on the file.
     *
     * Syntax:
     * ```
     * az storage file update --path
     *                        --share-name
     *                        [--account-key]
     *                        [--account-name]
     *                        [--clear-content-settings {false, true}]
     *                        [--connection-string]
     *                        [--content-cache-control]
     *                        [--content-disposition]
     *                        [--content-encoding]
     *                        [--content-language]
     *                        [--content-md5]
     *                        [--content-type]
     *                        [--sas-token]
     *                        [--subscription]
     *                        [--timeout]
     * ```
     *
     * @param {string} path The path to the file within the file share.
     * @param {string} shareName The file share name.
     */
    static update(path: string, shareName: string): az_storage_file_update_command_builder;
    /**
     * Upload a file to a share that uses the SMB 3.0 protocol.
     *
     * Syntax:
     * ```
     * az storage file upload --share-name
     *                        --source
     *                        [--account-key]
     *                        [--account-name]
     *                        [--connection-string]
     *                        [--content-cache-control]
     *                        [--content-disposition]
     *                        [--content-encoding]
     *                        [--content-language]
     *                        [--content-md5]
     *                        [--content-type]
     *                        [--max-connections]
     *                        [--metadata]
     *                        [--no-progress]
     *                        [--path]
     *                        [--sas-token]
     *                        [--subscription]
     *                        [--timeout]
     *                        [--validate-content]
     * ```
     *
     * @param {string} shareName The file share name.
     * @param {string} source Path of the local file to upload as the file content.
     */
    static upload(shareName: string, source: string): az_storage_file_upload_command_builder;
    /**
     * Upload files from a local directory to an Azure Storage File Share in a batch operation.
     *
     * Syntax:
     * ```
     * az storage file upload-batch --destination
     *                              --source
     *                              [--account-key]
     *                              [--account-name]
     *                              [--connection-string]
     *                              [--content-cache-control]
     *                              [--content-disposition]
     *                              [--content-encoding]
     *                              [--content-language]
     *                              [--content-md5]
     *                              [--content-type]
     *                              [--destination-path]
     *                              [--dryrun]
     *                              [--max-connections]
     *                              [--metadata]
     *                              [--no-progress]
     *                              [--pattern]
     *                              [--sas-token]
     *                              [--subscription]
     *                              [--validate-content]
     * ```
     *
     * @param {string} destination The destination of the upload operation.
     * @param {string} source The directory to upload files from.
     */
    static upload_batch(destination: string, source: string): az_storage_file_upload_batch_command_builder;
    /**
     * Create the url to access a file.
     *
     * Syntax:
     * ```
     * az storage file url --path
     *                     --share-name
     *                     [--account-key]
     *                     [--account-name]
     *                     [--connection-string]
     *                     [--protocol {http, https}]
     *                     [--sas-token]
     *                     [--subscription]
     * ```
     *
     * @param {string} path The path to the file within the file share.
     * @param {string} shareName The file share name.
     */
    static url(path: string, shareName: string): az_storage_file_url_command_builder;
}
/** Manage file system access and permissions for Azure Data Lake Storage Gen2 account. */
export declare class az_storage_fs_access {
    /**
     * Set the access control properties of a path(directory or file) in Azure Data Lake Storage Gen2 account.
     *
     * Syntax:
     * ```
     * az storage fs access set --file-system
     *                          --path
     *                          [--account-key]
     *                          [--account-name]
     *                          [--acl]
     *                          [--auth-mode {key, login}]
     *                          [--connection-string]
     *                          [--group]
     *                          [--owner]
     *                          [--permissions]
     *                          [--sas-token]
     *                          [--subscription]
     * ```
     *
     * @param {string} fileSystem File system name.
     * @param {string} path The path to a file or directory in the specified file system.
     */
    static set(fileSystem: string, path: string): az_storage_fs_access_set_command_builder;
    /**
     * Show the access control properties of a path (directory or file) in Azure Data Lake Storage Gen2 account.
     *
     * Syntax:
     * ```
     * az storage fs access show --file-system
     *                           --path
     *                           [--account-key]
     *                           [--account-name]
     *                           [--auth-mode {key, login}]
     *                           [--connection-string]
     *                           [--query-examples]
     *                           [--sas-token]
     *                           [--subscription]
     * ```
     *
     * @param {string} fileSystem File system name.
     * @param {string} path The path to a file or directory in the specified file system.
     */
    static show(fileSystem: string, path: string): az_storage_fs_access_show_command_builder;
}
/** Manage the metadata for directory in file system. */
export declare class az_storage_fs_directory_metadata {
    /**
     * Return all user-defined metadata for the specified directory.
     *
     * Syntax:
     * ```
     * az storage fs directory metadata show --file-system
     *                                       --name
     *                                       [--account-key]
     *                                       [--account-name]
     *                                       [--auth-mode {key, login}]
     *                                       [--connection-string]
     *                                       [--query-examples]
     *                                       [--sas-token]
     *                                       [--subscription]
     *                                       [--timeout]
     * ```
     *
     * @param {string} fileSystem File system name.
     * @param {string} name The name of directory.
     */
    static show(fileSystem: string, name: string): az_storage_fs_directory_metadata_show_command_builder;
    /**
     * Sets one or more user-defined name-value pairs for the specified file system.
     *
     * Syntax:
     * ```
     * az storage fs directory metadata update --file-system
     *                                         --metadata
     *                                         --name
     *                                         [--account-key]
     *                                         [--account-name]
     *                                         [--auth-mode {key, login}]
     *                                         [--connection-string]
     *                                         [--sas-token]
     *                                         [--subscription]
     *                                         [--timeout]
     * ```
     *
     * @param {string} fileSystem File system name.
     * @param {string} metadata Metadata in space-separated key=value pairs. This overwrites any existing metadata.
     * @param {string} name The name of directory.
     */
    static update(fileSystem: string, metadata: string, name: string): az_storage_fs_directory_metadata_update_command_builder;
}
/** Manage directories in Azure Data Lake Storage Gen2 account. */
export declare class az_storage_fs_directory {
    /**
     * Create a directory in ADLS Gen2 file system.
     *
     * Syntax:
     * ```
     * az storage fs directory create --file-system
     *                                --name
     *                                [--account-key]
     *                                [--account-name]
     *                                [--auth-mode {key, login}]
     *                                [--connection-string]
     *                                [--metadata]
     *                                [--permissions]
     *                                [--sas-token]
     *                                [--subscription]
     *                                [--timeout]
     *                                [--umask]
     * ```
     *
     * @param {string} fileSystem File system name.
     * @param {string} name The name of directory.
     */
    static create(fileSystem: string, name: string): az_storage_fs_directory_create_command_builder;
    /**
     * Delete a directory in ADLS Gen2 file system.
     *
     * Syntax:
     * ```
     * az storage fs directory delete --file-system
     *                                --name
     *                                [--account-key]
     *                                [--account-name]
     *                                [--auth-mode {key, login}]
     *                                [--connection-string]
     *                                [--sas-token]
     *                                [--subscription]
     *                                [--timeout]
     *                                [--yes]
     * ```
     *
     * @param {string} fileSystem File system name.
     * @param {string} name The name of directory.
     */
    static delete(fileSystem: string, name: string): az_storage_fs_directory_delete_command_builder;
    /**
     * Check for the existence of a directory in ADLS Gen2 file system.
     *
     * Syntax:
     * ```
     * az storage fs directory exists --file-system
     *                                --name
     *                                [--account-key]
     *                                [--account-name]
     *                                [--auth-mode {key, login}]
     *                                [--connection-string]
     *                                [--sas-token]
     *                                [--subscription]
     *                                [--timeout]
     * ```
     *
     * @param {string} fileSystem File system name.
     * @param {string} name The name of directory.
     */
    static exists(fileSystem: string, name: string): az_storage_fs_directory_exists_command_builder;
    /**
     * List directories in ADLS Gen2 file system.
     *
     * Syntax:
     * ```
     * az storage fs directory list --file-system
     *                              [--account-key]
     *                              [--account-name]
     *                              [--auth-mode {key, login}]
     *                              [--connection-string]
     *                              [--num-results]
     *                              [--path]
     *                              [--query-examples]
     *                              [--recursive {false, true}]
     *                              [--sas-token]
     *                              [--subscription]
     *                              [--timeout]
     * ```
     *
     * @param {string} fileSystem File system name.
     */
    static list(fileSystem: string): az_storage_fs_directory_list_command_builder;
    /**
     * Move a directory in ADLS Gen2 file system.
     *
     * Syntax:
     * ```
     * az storage fs directory move --file-system
     *                              --name
     *                              --new-directory
     *                              [--account-key]
     *                              [--account-name]
     *                              [--auth-mode {key, login}]
     *                              [--connection-string]
     *                              [--sas-token]
     *                              [--subscription]
     *                              [--timeout]
     * ```
     *
     * @param {string} fileSystem File system name.
     * @param {string} name The name of directory.
     * @param {string} newDirectory The new directory name the users want to move to. The value must have the following format: "{filesystem}/{directory}/{subdirectory}".
     */
    static move(fileSystem: string, name: string, newDirectory: string): az_storage_fs_directory_move_command_builder;
    /**
     * Show properties of a directory in ADLS Gen2 file system.
     *
     * Syntax:
     * ```
     * az storage fs directory show --file-system
     *                              --name
     *                              [--account-key]
     *                              [--account-name]
     *                              [--auth-mode {key, login}]
     *                              [--connection-string]
     *                              [--query-examples]
     *                              [--sas-token]
     *                              [--subscription]
     *                              [--timeout]
     * ```
     *
     * @param {string} fileSystem File system name.
     * @param {string} name The name of directory.
     */
    static show(fileSystem: string, name: string): az_storage_fs_directory_show_command_builder;
}
/** Manage the metadata for file in file system. */
export declare class az_storage_fs_file_metadata {
    /**
     * Returns all user-defined metadata, standard HTTP properties, and system properties for the file.
     *
     * Syntax:
     * ```
     * az storage fs file metadata show --file-system
     *                                  --path
     *                                  [--account-key]
     *                                  [--account-name]
     *                                  [--auth-mode {key, login}]
     *                                  [--connection-string]
     *                                  [--query-examples]
     *                                  [--sas-token]
     *                                  [--subscription]
     *                                  [--timeout]
     * ```
     *
     * @param {string} fileSystem File system name.
     * @param {string} path The file path in a file system.
     */
    static show(fileSystem: string, path: string): az_storage_fs_file_metadata_show_command_builder;
    /**
     * Sets one or more user-defined name-value pairs for the specified file system.
     *
     * Syntax:
     * ```
     * az storage fs file metadata update --file-system
     *                                    --metadata
     *                                    --path
     *                                    [--account-key]
     *                                    [--account-name]
     *                                    [--auth-mode {key, login}]
     *                                    [--connection-string]
     *                                    [--sas-token]
     *                                    [--subscription]
     *                                    [--timeout]
     * ```
     *
     * @param {string} fileSystem File system name.
     * @param {string} metadata Metadata in space-separated key=value pairs. This overwrites any existing metadata.
     * @param {string} path The file path in a file system.
     */
    static update(fileSystem: string, metadata: string, path: string): az_storage_fs_file_metadata_update_command_builder;
}
/** Manage files in Azure Data Lake Storage Gen2 account. */
export declare class az_storage_fs_file {
    /**
     * Append content to a file in ADLS Gen2 file system.
     *
     * Syntax:
     * ```
     * az storage fs file append --content
     *                           --file-system
     *                           --path
     *                           [--account-key]
     *                           [--account-name]
     *                           [--auth-mode {key, login}]
     *                           [--connection-string]
     *                           [--sas-token]
     *                           [--subscription]
     *                           [--timeout]
     * ```
     *
     * @param {string} content Content to be appended to file.
     * @param {string} fileSystem File system name.
     * @param {string} path The file path in a file system.
     */
    static append(content: string, fileSystem: string, path: string): az_storage_fs_file_append_command_builder;
    /**
     * Create a new file in ADLS Gen2 file system.
     *
     * Syntax:
     * ```
     * az storage fs file create --file-system
     *                           --path
     *                           [--account-key]
     *                           [--account-name]
     *                           [--auth-mode {key, login}]
     *                           [--connection-string]
     *                           [--content-cache-control]
     *                           [--content-disposition]
     *                           [--content-encoding]
     *                           [--content-language]
     *                           [--content-md5]
     *                           [--content-type]
     *                           [--metadata]
     *                           [--permissions]
     *                           [--sas-token]
     *                           [--subscription]
     *                           [--timeout]
     *                           [--umask]
     * ```
     *
     * @param {string} fileSystem File system name.
     * @param {string} path The file path in a file system.
     */
    static create(fileSystem: string, path: string): az_storage_fs_file_create_command_builder;
    /**
     * Delete a file in ADLS Gen2 file system.
     *
     * Syntax:
     * ```
     * az storage fs file delete --file-system
     *                           --path
     *                           [--account-key]
     *                           [--account-name]
     *                           [--auth-mode {key, login}]
     *                           [--connection-string]
     *                           [--sas-token]
     *                           [--subscription]
     *                           [--timeout]
     *                           [--yes]
     * ```
     *
     * @param {string} fileSystem File system name.
     * @param {string} path The file path in a file system.
     */
    static delete(fileSystem: string, path: string): az_storage_fs_file_delete_command_builder;
    /**
     * Download a file from the specified path in ADLS Gen2 file system.
     *
     * Syntax:
     * ```
     * az storage fs file download --file-system
     *                             --path
     *                             [--account-key]
     *                             [--account-name]
     *                             [--auth-mode {key, login}]
     *                             [--connection-string]
     *                             [--destination]
     *                             [--overwrite {false, true}]
     *                             [--sas-token]
     *                             [--subscription]
     *                             [--timeout]
     * ```
     *
     * @param {string} fileSystem File system name.
     * @param {string} path The file path in a file system.
     */
    static download(fileSystem: string, path: string): az_storage_fs_file_download_command_builder;
    /**
     * Check for the existence of a file in ADLS Gen2 file system.
     *
     * Syntax:
     * ```
     * az storage fs file exists --file-system
     *                           --path
     *                           [--account-key]
     *                           [--account-name]
     *                           [--auth-mode {key, login}]
     *                           [--connection-string]
     *                           [--sas-token]
     *                           [--subscription]
     *                           [--timeout]
     * ```
     *
     * @param {string} fileSystem File system name.
     * @param {string} path The file path in a file system.
     */
    static exists(fileSystem: string, path: string): az_storage_fs_file_exists_command_builder;
    /**
     * List files and directories in ADLS Gen2 file system.
     *
     * Syntax:
     * ```
     * az storage fs file list --file-system
     *                         [--account-key]
     *                         [--account-name]
     *                         [--auth-mode {key, login}]
     *                         [--connection-string]
     *                         [--exclude-dir]
     *                         [--marker]
     *                         [--num-results]
     *                         [--path]
     *                         [--query-examples]
     *                         [--recursive {false, true}]
     *                         [--sas-token]
     *                         [--subscription]
     *                         [--timeout]
     * ```
     *
     * @param {string} fileSystem File system name.
     */
    static list(fileSystem: string): az_storage_fs_file_list_command_builder;
    /**
     * Move a file in ADLS Gen2 Account.
     *
     * Syntax:
     * ```
     * az storage fs file move --file-system
     *                         --new-path
     *                         --path
     *                         [--account-key]
     *                         [--account-name]
     *                         [--auth-mode {key, login}]
     *                         [--connection-string]
     *                         [--content-cache-control]
     *                         [--content-disposition]
     *                         [--content-encoding]
     *                         [--content-language]
     *                         [--content-md5]
     *                         [--content-type]
     *                         [--sas-token]
     *                         [--subscription]
     * ```
     *
     * @param {string} fileSystem File system name.
     * @param {string} newPath The new path the users want to move to. The value must have the following format: "{filesystem}/{directory}/{subdirectory}/{file}".
     * @param {string} path The original file path users want to move in a file system.
     */
    static move(fileSystem: string, newPath: string, path: string): az_storage_fs_file_move_command_builder;
    /**
     * Show properties of file in ADLS Gen2 file system.
     *
     * Syntax:
     * ```
     * az storage fs file show --file-system
     *                         --path
     *                         [--account-key]
     *                         [--account-name]
     *                         [--auth-mode {key, login}]
     *                         [--connection-string]
     *                         [--query-examples]
     *                         [--sas-token]
     *                         [--subscription]
     *                         [--timeout]
     * ```
     *
     * @param {string} fileSystem File system name.
     * @param {string} path The file path in a file system.
     */
    static show(fileSystem: string, path: string): az_storage_fs_file_show_command_builder;
    /**
     * Upload a file to a file path in ADLS Gen2 file system.
     *
     * Syntax:
     * ```
     * az storage fs file upload --file-system
     *                           --path
     *                           --source
     *                           [--account-key]
     *                           [--account-name]
     *                           [--auth-mode {key, login}]
     *                           [--connection-string]
     *                           [--content-cache-control]
     *                           [--content-disposition]
     *                           [--content-encoding]
     *                           [--content-language]
     *                           [--content-md5]
     *                           [--content-type]
     *                           [--if-match]
     *                           [--if-modified-since]
     *                           [--if-none-match]
     *                           [--if-unmodified-since]
     *                           [--metadata]
     *                           [--overwrite {false, true}]
     *                           [--permissions]
     *                           [--sas-token]
     *                           [--subscription]
     *                           [--timeout]
     *                           [--umask]
     * ```
     *
     * @param {string} fileSystem File system name.
     * @param {string} path The file path in a file system.
     * @param {string} source Path of the local file to upload as the file content.
     */
    static upload(fileSystem: string, path: string, source: string): az_storage_fs_file_upload_command_builder;
}
/** Manage the metadata for file system. */
export declare class az_storage_fs_metadata {
    /**
     * Return all user-defined metadata for the specified file system.
     *
     * Syntax:
     * ```
     * az storage fs metadata show --name
     *                             [--account-key]
     *                             [--account-name]
     *                             [--auth-mode {key, login}]
     *                             [--connection-string]
     *                             [--query-examples]
     *                             [--sas-token]
     *                             [--subscription]
     *                             [--timeout]
     * ```
     *
     * @param {string} name File system name.
     */
    static show(name: string): az_storage_fs_metadata_show_command_builder;
    /**
     * Sets one or more user-defined name-value pairs for the specified file system.
     *
     * Syntax:
     * ```
     * az storage fs metadata update --metadata
     *                               --name
     *                               [--account-key]
     *                               [--account-name]
     *                               [--auth-mode {key, login}]
     *                               [--connection-string]
     *                               [--sas-token]
     *                               [--subscription]
     *                               [--timeout]
     * ```
     *
     * @param {string} metadata Metadata in space-separated key=value pairs. This overwrites any existing metadata.
     * @param {string} name File system name.
     */
    static update(metadata: string, name: string): az_storage_fs_metadata_update_command_builder;
}
/** Manage file systems in Azure Data Lake Storage Gen2 account. */
export declare class az_storage_fs {
    /**
     * Create file system for Azure Data Lake Storage Gen2 account.
     *
     * Syntax:
     * ```
     * az storage fs create --name
     *                      [--account-key]
     *                      [--account-name]
     *                      [--auth-mode {key, login}]
     *                      [--connection-string]
     *                      [--metadata]
     *                      [--public-access {file, filesystem, off}]
     *                      [--sas-token]
     *                      [--subscription]
     *                      [--timeout]
     * ```
     *
     * @param {string} name File system name.
     */
    static create(name: string): az_storage_fs_create_command_builder;
    /**
     * Delete a file system in ADLS Gen2 account.
     *
     * Syntax:
     * ```
     * az storage fs delete --name
     *                      [--account-key]
     *                      [--account-name]
     *                      [--auth-mode {key, login}]
     *                      [--connection-string]
     *                      [--sas-token]
     *                      [--subscription]
     *                      [--timeout]
     *                      [--yes]
     * ```
     *
     * @param {string} name File system name.
     */
    static delete(name: string): az_storage_fs_delete_command_builder;
    /**
     * Check for the existence of a file system in ADLS Gen2 account.
     *
     * Syntax:
     * ```
     * az storage fs exists --name
     *                      [--account-key]
     *                      [--account-name]
     *                      [--auth-mode {key, login}]
     *                      [--connection-string]
     *                      [--sas-token]
     *                      [--subscription]
     *                      [--timeout]
     * ```
     *
     * @param {string} name File system name.
     */
    static exists(name: string): az_storage_fs_exists_command_builder;
    /**
     * List file systems in ADLS Gen2 account.
     *
     * Syntax:
     * ```
     * az storage fs list [--account-key]
     *                    [--account-name]
     *                    [--auth-mode {key, login}]
     *                    [--connection-string]
     *                    [--include-metadata {false, true}]
     *                    [--prefix]
     *                    [--query-examples]
     *                    [--sas-token]
     *                    [--subscription]
     * ```
     */
    static list(): az_storage_fs_list_command_builder;
    /**
     * Show properties of file system in ADLS Gen2 account.
     *
     * Syntax:
     * ```
     * az storage fs show --name
     *                    [--account-key]
     *                    [--account-name]
     *                    [--auth-mode {key, login}]
     *                    [--connection-string]
     *                    [--query-examples]
     *                    [--sas-token]
     *                    [--subscription]
     *                    [--timeout]
     * ```
     *
     * @param {string} name File system name.
     */
    static show(name: string): az_storage_fs_show_command_builder;
}
/** Manage storage service logging information. */
export declare class az_storage_logging {
    /**
     * Turn off logging for a storage account.
     *
     * Syntax:
     * ```
     * az storage logging off [--account-key]
     *                        [--account-name]
     *                        [--connection-string]
     *                        [--sas-token]
     *                        [--services]
     *                        [--subscription]
     *                        [--timeout]
     * ```
     */
    static off(): az_storage_logging_off_command_builder;
    /**
     * Show logging settings for a storage account.
     *
     * Syntax:
     * ```
     * az storage logging show [--account-key]
     *                         [--account-name]
     *                         [--connection-string]
     *                         [--query-examples]
     *                         [--sas-token]
     *                         [--services]
     *                         [--subscription]
     *                         [--timeout]
     * ```
     */
    static show(): az_storage_logging_show_command_builder;
    /**
     * Update logging settings for a storage account.
     *
     * Syntax:
     * ```
     * az storage logging update --log
     *                           --retention
     *                           --services
     *                           [--account-key]
     *                           [--account-name]
     *                           [--connection-string]
     *                           [--sas-token]
     *                           [--subscription]
     *                           [--timeout]
     *                           [--version]
     * ```
     *
     * @param {string} log The operations for which to enable logging: (r)ead (w)rite (d)elete. Can be combined.
     * @param {string} retention Number of days for which to retain logs. 0 to disable.
     * @param {string} services The storage service(s) for which to update logging info: (b)lob (q)ueue (t)able. Can be combined.
     */
    static update(log: string, retention: string, services: string): az_storage_logging_update_command_builder;
}
/** Manage queue storage messages. */
export declare class az_storage_message {
    /**
     * Deletes all messages from the specified queue.
     *
     * Syntax:
     * ```
     * az storage message clear --queue-name
     *                          [--account-key]
     *                          [--account-name]
     *                          [--auth-mode {key, login}]
     *                          [--connection-string]
     *                          [--sas-token]
     *                          [--subscription]
     *                          [--timeout]
     * ```
     *
     * @param {string} queueName The queue name.
     */
    static clear(queueName: string): az_storage_message_clear_command_builder;
    /**
     * Deletes the specified message.
     *
     * Syntax:
     * ```
     * az storage message delete --id
     *                           --pop-receipt
     *                           --queue-name
     *                           [--account-key]
     *                           [--account-name]
     *                           [--auth-mode {key, login}]
     *                           [--connection-string]
     *                           [--sas-token]
     *                           [--subscription]
     *                           [--timeout]
     * ```
     *
     * @param {string} id The message id identifying the message to delete.
     * @param {string} popReceipt A valid pop receipt value returned from an earlier call to the get_messages() or update_message().
     * @param {string} queueName The queue name.
     */
    static delete(id: string, popReceipt: string, queueName: string): az_storage_message_delete_command_builder;
    /**
     * Retrieves one or more messages from the front of the queue.
     *
     * Syntax:
     * ```
     * az storage message get --queue-name
     *                        [--account-key]
     *                        [--account-name]
     *                        [--auth-mode {key, login}]
     *                        [--connection-string]
     *                        [--num-messages]
     *                        [--sas-token]
     *                        [--subscription]
     *                        [--timeout]
     *                        [--visibility-timeout]
     * ```
     *
     * @param {string} queueName The queue name.
     */
    static get(queueName: string): az_storage_message_get_command_builder;
    /**
     * Retrieves one or more messages from the front of the queue, but does not alter the visibility of the message.
     *
     * Syntax:
     * ```
     * az storage message peek --queue-name
     *                         [--account-key]
     *                         [--account-name]
     *                         [--auth-mode {key, login}]
     *                         [--connection-string]
     *                         [--num-messages]
     *                         [--sas-token]
     *                         [--subscription]
     *                         [--timeout]
     * ```
     *
     * @param {string} queueName The queue name.
     */
    static peek(queueName: string): az_storage_message_peek_command_builder;
    /**
     * Adds a new message to the back of the message queue.
     *
     * Syntax:
     * ```
     * az storage message put --content
     *                        --queue-name
     *                        [--account-key]
     *                        [--account-name]
     *                        [--auth-mode {key, login}]
     *                        [--connection-string]
     *                        [--sas-token]
     *                        [--subscription]
     *                        [--time-to-live]
     *                        [--timeout]
     *                        [--visibility-timeout]
     * ```
     *
     * @param {string} content Message content, up to 64KB in size.
     * @param {string} queueName The queue name.
     */
    static put(content: string, queueName: string): az_storage_message_put_command_builder;
    /**
     * Updates the visibility timeout of a message.
     *
     * Syntax:
     * ```
     * az storage message update --id
     *                           --pop-receipt
     *                           --queue-name
     *                           --visibility-timeout
     *                           [--account-key]
     *                           [--account-name]
     *                           [--auth-mode {key, login}]
     *                           [--connection-string]
     *                           [--content]
     *                           [--sas-token]
     *                           [--subscription]
     *                           [--timeout]
     * ```
     *
     * @param {string} id The message id identifying the message to update.
     * @param {string} popReceipt A valid pop receipt value returned from an earlier call to the get_messages() or update_message() operation.
     * @param {string} queueName The queue name.
     * @param {string} visibilityTimeout Specifies the new visibility timeout value, in seconds, relative to server time. The new value must be larger than or equal to 0, and cannot be larger than 7 days. The visibility timeout of a message cannot be set to a value later than the expiry time. A message can be updated until it has been deleted or has expired.
     */
    static update(id: string, popReceipt: string, queueName: string, visibilityTimeout: string): az_storage_message_update_command_builder;
}
/** Manage storage service metrics. */
export declare class az_storage_metrics {
    /**
     * Show metrics settings for a storage account.
     *
     * Syntax:
     * ```
     * az storage metrics show [--account-key]
     *                         [--account-name]
     *                         [--connection-string]
     *                         [--interval {both, hour, minute}]
     *                         [--query-examples]
     *                         [--sas-token]
     *                         [--services]
     *                         [--subscription]
     *                         [--timeout]
     * ```
     */
    static show(): az_storage_metrics_show_command_builder;
    /**
     * Update metrics settings for a storage account.
     *
     * Syntax:
     * ```
     * az storage metrics update --retention
     *                           --services
     *                           [--account-key]
     *                           [--account-name]
     *                           [--api {false, true}]
     *                           [--connection-string]
     *                           [--hour {false, true}]
     *                           [--minute {false, true}]
     *                           [--sas-token]
     *                           [--subscription]
     *                           [--timeout]
     * ```
     *
     * @param {string} retention Number of days for which to retain metrics. 0 to disable. Applies to both hour and minute metrics if both are specified.
     * @param {string} services The storage services from which to retrieve metrics info: (b)lob (q)ueue (t)able. Can be combined.
     */
    static update(retention: string, services: string): az_storage_metrics_update_command_builder;
}
/** Manage the metadata for a storage queue. */
export declare class az_storage_queue_metadata {
    /**
     * Retrieves user-defined metadata and queue properties on the specified queue.
     *
     * Syntax:
     * ```
     * az storage queue metadata show --name
     *                                [--account-key]
     *                                [--account-name]
     *                                [--auth-mode {key, login}]
     *                                [--connection-string]
     *                                [--query-examples]
     *                                [--sas-token]
     *                                [--subscription]
     *                                [--timeout]
     * ```
     *
     * @param {string} name The queue name.
     */
    static show(name: string): az_storage_queue_metadata_show_command_builder;
    /**
     * Sets user-defined metadata on the specified queue.
     *
     * Syntax:
     * ```
     * az storage queue metadata update --name
     *                                  [--account-key]
     *                                  [--account-name]
     *                                  [--auth-mode {key, login}]
     *                                  [--connection-string]
     *                                  [--metadata]
     *                                  [--sas-token]
     *                                  [--subscription]
     *                                  [--timeout]
     * ```
     *
     * @param {string} name The queue name.
     */
    static update(name: string): az_storage_queue_metadata_update_command_builder;
}
/** Manage shared access policies for a storage queue. */
export declare class az_storage_queue_policy {
    /**
     * Create a stored access policy on the containing object.
     *
     * Syntax:
     * ```
     * az storage queue policy create --name
     *                                --queue-name
     *                                [--account-key]
     *                                [--account-name]
     *                                [--auth-mode {key, login}]
     *                                [--connection-string]
     *                                [--expiry]
     *                                [--permissions]
     *                                [--sas-token]
     *                                [--start]
     *                                [--subscription]
     * ```
     *
     * @param {string} name The stored access policy name.
     * @param {string} queueName The queue name.
     */
    static create(name: string, queueName: string): az_storage_queue_policy_create_command_builder;
    /**
     * Delete a stored access policy on a containing object.
     *
     * Syntax:
     * ```
     * az storage queue policy delete --name
     *                                --queue-name
     *                                [--account-key]
     *                                [--account-name]
     *                                [--auth-mode {key, login}]
     *                                [--connection-string]
     *                                [--sas-token]
     *                                [--subscription]
     * ```
     *
     * @param {string} name The stored access policy name.
     * @param {string} queueName The queue name.
     */
    static delete(name: string, queueName: string): az_storage_queue_policy_delete_command_builder;
    /**
     * List stored access policies on a containing object.
     *
     * Syntax:
     * ```
     * az storage queue policy list --queue-name
     *                              [--account-key]
     *                              [--account-name]
     *                              [--auth-mode {key, login}]
     *                              [--connection-string]
     *                              [--query-examples]
     *                              [--sas-token]
     *                              [--subscription]
     * ```
     *
     * @param {string} queueName The queue name.
     */
    static list(queueName: string): az_storage_queue_policy_list_command_builder;
    /**
     * Show a stored access policy on a containing object.
     *
     * Syntax:
     * ```
     * az storage queue policy show --name
     *                              --queue-name
     *                              [--account-key]
     *                              [--account-name]
     *                              [--auth-mode {key, login}]
     *                              [--connection-string]
     *                              [--query-examples]
     *                              [--sas-token]
     *                              [--subscription]
     * ```
     *
     * @param {string} name The stored access policy name.
     * @param {string} queueName The queue name.
     */
    static show(name: string, queueName: string): az_storage_queue_policy_show_command_builder;
    /**
     * Set a stored access policy on a containing object.
     *
     * Syntax:
     * ```
     * az storage queue policy update --name
     *                                --queue-name
     *                                [--account-key]
     *                                [--account-name]
     *                                [--auth-mode {key, login}]
     *                                [--connection-string]
     *                                [--expiry]
     *                                [--permissions]
     *                                [--sas-token]
     *                                [--start]
     *                                [--subscription]
     * ```
     *
     * @param {string} name The stored access policy name.
     * @param {string} queueName The queue name.
     */
    static update(name: string, queueName: string): az_storage_queue_policy_update_command_builder;
}
/** Manage shared access policies of a storage table. */
export declare class az_storage_queue {
    /**
     * Creates a queue under the given account.
     *
     * Syntax:
     * ```
     * az storage queue create --name
     *                         [--account-key]
     *                         [--account-name]
     *                         [--auth-mode {key, login}]
     *                         [--connection-string]
     *                         [--fail-on-exist]
     *                         [--metadata]
     *                         [--sas-token]
     *                         [--subscription]
     *                         [--timeout]
     * ```
     *
     * @param {string} name The queue name.
     */
    static create(name: string): az_storage_queue_create_command_builder;
    /**
     * Deletes the specified queue and any messages it contains.
     *
     * Syntax:
     * ```
     * az storage queue delete --name
     *                         [--account-key]
     *                         [--account-name]
     *                         [--auth-mode {key, login}]
     *                         [--connection-string]
     *                         [--fail-not-exist]
     *                         [--sas-token]
     *                         [--subscription]
     *                         [--timeout]
     * ```
     *
     * @param {string} name The queue name.
     */
    static delete(name: string): az_storage_queue_delete_command_builder;
    /**
     * Returns a boolean indicating whether the queue exists.
     *
     * Syntax:
     * ```
     * az storage queue exists --name
     *                         [--account-key]
     *                         [--account-name]
     *                         [--auth-mode {key, login}]
     *                         [--connection-string]
     *                         [--sas-token]
     *                         [--subscription]
     *                         [--timeout]
     * ```
     *
     * @param {string} name The queue name.
     */
    static exists(name: string): az_storage_queue_exists_command_builder;
    /**
     * Generates a shared access signature for the queue.
     *
     * Syntax:
     * ```
     * az storage queue generate-sas --name
     *                               [--account-key]
     *                               [--account-name]
     *                               [--connection-string]
     *                               [--expiry]
     *                               [--https-only]
     *                               [--ip]
     *                               [--permissions]
     *                               [--policy-name]
     *                               [--start]
     *                               [--subscription]
     * ```
     *
     * @param {string} name The queue name.
     */
    static generate_sas(name: string): az_storage_queue_generate_sas_command_builder;
    /**
     * List queues in a storage account.
     *
     * Syntax:
     * ```
     * az storage queue list [--account-key]
     *                       [--account-name]
     *                       [--auth-mode {key, login}]
     *                       [--connection-string]
     *                       [--include-metadata]
     *                       [--marker]
     *                       [--num-results]
     *                       [--prefix]
     *                       [--query-examples]
     *                       [--sas-token]
     *                       [--subscription]
     *                       [--timeout]
     * ```
     */
    static list(): az_storage_queue_list_command_builder;
    /**
     * Retrieves statistics related to replication for the Queue service.
     *
     * Syntax:
     * ```
     * az storage queue stats [--account-key]
     *                        [--account-name]
     *                        [--auth-mode {key, login}]
     *                        [--connection-string]
     *                        [--sas-token]
     *                        [--subscription]
     *                        [--timeout]
     * ```
     */
    static stats(): az_storage_queue_stats_command_builder;
}
/** Manage the metadata of a file share. */
export declare class az_storage_share_metadata {
    /**
     * Returns all user-defined metadata for the specified share.
     *
     * Syntax:
     * ```
     * az storage share metadata show --name
     *                                [--account-key]
     *                                [--account-name]
     *                                [--connection-string]
     *                                [--query-examples]
     *                                [--sas-token]
     *                                [--snapshot]
     *                                [--subscription]
     *                                [--timeout]
     * ```
     *
     * @param {string} name The file share name.
     */
    static show(name: string): az_storage_share_metadata_show_command_builder;
    /**
     * Sets one or more user-defined name-value pairs for the specified share.
     *
     * Syntax:
     * ```
     * az storage share metadata update --name
     *                                  [--account-key]
     *                                  [--account-name]
     *                                  [--connection-string]
     *                                  [--metadata]
     *                                  [--sas-token]
     *                                  [--subscription]
     *                                  [--timeout]
     * ```
     *
     * @param {string} name The file share name.
     */
    static update(name: string): az_storage_share_metadata_update_command_builder;
}
/** Manage shared access policies of a storage file share. */
export declare class az_storage_share_policy {
    /**
     * Create a stored access policy on the containing object.
     *
     * Syntax:
     * ```
     * az storage share policy create --name
     *                                --share-name
     *                                [--account-key]
     *                                [--account-name]
     *                                [--connection-string]
     *                                [--expiry]
     *                                [--permissions]
     *                                [--sas-token]
     *                                [--start]
     *                                [--subscription]
     * ```
     *
     * @param {string} name The stored access policy name.
     * @param {string} shareName The file share name.
     */
    static create(name: string, shareName: string): az_storage_share_policy_create_command_builder;
    /**
     * Delete a stored access policy on a containing object.
     *
     * Syntax:
     * ```
     * az storage share policy delete --name
     *                                --share-name
     *                                [--account-key]
     *                                [--account-name]
     *                                [--connection-string]
     *                                [--sas-token]
     *                                [--subscription]
     * ```
     *
     * @param {string} name The stored access policy name.
     * @param {string} shareName The file share name.
     */
    static delete(name: string, shareName: string): az_storage_share_policy_delete_command_builder;
    /**
     * List stored access policies on a containing object.
     *
     * Syntax:
     * ```
     * az storage share policy list --share-name
     *                              [--account-key]
     *                              [--account-name]
     *                              [--connection-string]
     *                              [--query-examples]
     *                              [--sas-token]
     *                              [--subscription]
     * ```
     *
     * @param {string} shareName The file share name.
     */
    static list(shareName: string): az_storage_share_policy_list_command_builder;
    /**
     * Show a stored access policy on a containing object.
     *
     * Syntax:
     * ```
     * az storage share policy show --name
     *                              --share-name
     *                              [--account-key]
     *                              [--account-name]
     *                              [--connection-string]
     *                              [--query-examples]
     *                              [--sas-token]
     *                              [--subscription]
     * ```
     *
     * @param {string} name The stored access policy name.
     * @param {string} shareName The file share name.
     */
    static show(name: string, shareName: string): az_storage_share_policy_show_command_builder;
    /**
     * Set a stored access policy on a containing object.
     *
     * Syntax:
     * ```
     * az storage share policy update --name
     *                                --share-name
     *                                [--account-key]
     *                                [--account-name]
     *                                [--connection-string]
     *                                [--expiry]
     *                                [--permissions]
     *                                [--sas-token]
     *                                [--start]
     *                                [--subscription]
     * ```
     *
     * @param {string} name The stored access policy name.
     * @param {string} shareName The file share name.
     */
    static update(name: string, shareName: string): az_storage_share_policy_update_command_builder;
}
/** Manage Azure file shares using the Microsoft.Storage resource provider. */
export declare class az_storage_share_rm {
    /**
     * Create a new Azure file share under the specified storage account.
     *
     * Syntax:
     * ```
     * az storage share-rm create --name
     *                            --storage-account
     *                            [--access-tier {Cool, Hot, Premium, TransactionOptimized}]
     *                            [--enabled-protocols {NFS, SMB}]
     *                            [--metadata]
     *                            [--quota]
     *                            [--resource-group]
     *                            [--root-squash {AllSquash, NoRootSquash, RootSquash}]
     *                            [--subscription]
     * ```
     *
     * @param {string} name The file share name.
     * @param {string} storageAccount The name or ID of the storage account.
     */
    static create(name: string, storageAccount: string): az_storage_share_rm_create_command_builder;
    /**
     * Delete the specified Azure file share.
     *
     * Syntax:
     * ```
     * az storage share-rm delete [--ids]
     *                            [--name]
     *                            [--resource-group]
     *                            [--storage-account]
     *                            [--subscription]
     *                            [--yes]
     * ```
     */
    static delete(): az_storage_share_rm_delete_command_builder;
    /**
     * Check for the existence of an Azure file share.
     *
     * Syntax:
     * ```
     * az storage share-rm exists [--ids]
     *                            [--name]
     *                            [--resource-group]
     *                            [--storage-account]
     *                            [--subscription]
     * ```
     */
    static exists(): az_storage_share_rm_exists_command_builder;
    /**
     * List the Azure file shares under the specified storage account.
     *
     * Syntax:
     * ```
     * az storage share-rm list --storage-account
     *                          [--include-deleted]
     *                          [--query-examples]
     *                          [--resource-group]
     *                          [--subscription]
     * ```
     *
     * @param {string} storageAccount The name or ID of the storage account.
     */
    static list(storageAccount: string): az_storage_share_rm_list_command_builder;
    /**
     * Restore a file share within a valid retention days if share soft delete is enabled.
     *
     * Syntax:
     * ```
     * az storage share-rm restore --deleted-version
     *                             [--ids]
     *                             [--name]
     *                             [--resource-group]
     *                             [--restored-name]
     *                             [--storage-account]
     *                             [--subscription]
     * ```
     *
     * @param {string} deletedVersion Identify the version of the deleted share that will be restored.
     */
    static restore(deletedVersion: string): az_storage_share_rm_restore_command_builder;
    /**
     * Show the properties for a specified Azure file share.
     *
     * Syntax:
     * ```
     * az storage share-rm show [--expand]
     *                          [--ids]
     *                          [--name]
     *                          [--query-examples]
     *                          [--resource-group]
     *                          [--storage-account]
     *                          [--subscription]
     * ```
     */
    static show(): az_storage_share_rm_show_command_builder;
    /**
     * Get the usage bytes of the data stored on the share.
     *
     * Syntax:
     * ```
     * az storage share-rm stats [--ids]
     *                           [--name]
     *                           [--resource-group]
     *                           [--storage-account]
     *                           [--subscription]
     * ```
     */
    static stats(): az_storage_share_rm_stats_command_builder;
    /**
     * Update the properties for an Azure file share.
     *
     * Syntax:
     * ```
     * az storage share-rm update [--access-tier {Cool, Hot, Premium, TransactionOptimized}]
     *                            [--add]
     *                            [--force-string]
     *                            [--ids]
     *                            [--metadata]
     *                            [--name]
     *                            [--quota]
     *                            [--remove]
     *                            [--resource-group]
     *                            [--root-squash {AllSquash, NoRootSquash, RootSquash}]
     *                            [--set]
     *                            [--storage-account]
     *                            [--subscription]
     * ```
     */
    static update(): az_storage_share_rm_update_command_builder;
}
/** Manage file shares. */
export declare class az_storage_share {
    /**
     * Creates a new share under the specified account.
     *
     * Syntax:
     * ```
     * az storage share create --name
     *                         [--account-key]
     *                         [--account-name]
     *                         [--connection-string]
     *                         [--fail-on-exist]
     *                         [--metadata]
     *                         [--quota]
     *                         [--sas-token]
     *                         [--subscription]
     *                         [--timeout]
     * ```
     *
     * @param {string} name The file share name.
     */
    static create(name: string): az_storage_share_create_command_builder;
    /**
     * Marks the specified share for deletion.
     *
     * Syntax:
     * ```
     * az storage share delete --name
     *                         [--account-key]
     *                         [--account-name]
     *                         [--connection-string]
     *                         [--delete-snapshots {include}]
     *                         [--fail-not-exist]
     *                         [--sas-token]
     *                         [--snapshot]
     *                         [--subscription]
     *                         [--timeout]
     * ```
     *
     * @param {string} name The file share name.
     */
    static delete(name: string): az_storage_share_delete_command_builder;
    /**
     * Check for the existence of a file share.
     *
     * Syntax:
     * ```
     * az storage share exists --name
     *                         [--account-key]
     *                         [--account-name]
     *                         [--connection-string]
     *                         [--sas-token]
     *                         [--snapshot]
     *                         [--subscription]
     *                         [--timeout]
     * ```
     *
     * @param {string} name The file share name.
     */
    static exists(name: string): az_storage_share_exists_command_builder;
    /**
     * Generates a shared access signature for the share.
     *
     * Syntax:
     * ```
     * az storage share generate-sas --name
     *                               [--account-key]
     *                               [--account-name]
     *                               [--cache-control]
     *                               [--connection-string]
     *                               [--content-disposition]
     *                               [--content-encoding]
     *                               [--content-language]
     *                               [--content-type]
     *                               [--expiry]
     *                               [--https-only]
     *                               [--ip]
     *                               [--permissions]
     *                               [--policy-name]
     *                               [--start]
     *                               [--subscription]
     * ```
     *
     * @param {string} name The file share name.
     */
    static generate_sas(name: string): az_storage_share_generate_sas_command_builder;
    /**
     * List the file shares in a storage account.
     *
     * Syntax:
     * ```
     * az storage share list [--account-key]
     *                       [--account-name]
     *                       [--connection-string]
     *                       [--include-metadata]
     *                       [--include-snapshots]
     *                       [--marker]
     *                       [--num-results]
     *                       [--prefix]
     *                       [--query-examples]
     *                       [--sas-token]
     *                       [--subscription]
     *                       [--timeout]
     * ```
     */
    static list(): az_storage_share_list_command_builder;
    /**
     * Returns all user-defined metadata and system properties for the specified share.
     *
     * Syntax:
     * ```
     * az storage share show --name
     *                       [--account-key]
     *                       [--account-name]
     *                       [--connection-string]
     *                       [--query-examples]
     *                       [--sas-token]
     *                       [--snapshot]
     *                       [--subscription]
     *                       [--timeout]
     * ```
     *
     * @param {string} name The file share name.
     */
    static show(name: string): az_storage_share_show_command_builder;
    /**
     * Creates a snapshot of an existing share under the specified account.
     *
     * Syntax:
     * ```
     * az storage share snapshot --name
     *                           [--account-key]
     *                           [--account-name]
     *                           [--connection-string]
     *                           [--metadata]
     *                           [--quota]
     *                           [--sas-token]
     *                           [--subscription]
     *                           [--timeout]
     * ```
     *
     * @param {string} name The file share name.
     */
    static snapshot(name: string): az_storage_share_snapshot_command_builder;
    /**
     * Gets the approximate size of the data stored on the share, rounded up to the nearest gigabyte.
     *
     * Syntax:
     * ```
     * az storage share stats --name
     *                        [--account-key]
     *                        [--account-name]
     *                        [--connection-string]
     *                        [--sas-token]
     *                        [--subscription]
     *                        [--timeout]
     * ```
     *
     * @param {string} name The file share name.
     */
    static stats(name: string): az_storage_share_stats_command_builder;
    /**
     * Sets service-defined properties for the specified share.
     *
     * Syntax:
     * ```
     * az storage share update --name
     *                         --quota
     *                         [--account-key]
     *                         [--account-name]
     *                         [--connection-string]
     *                         [--sas-token]
     *                         [--subscription]
     *                         [--timeout]
     * ```
     *
     * @param {string} name The file share name.
     * @param {string} quota Specifies the maximum size of the share, in gigabytes. Must be greater than 0, and less than or equal to 5 TB (5120 GB).
     */
    static update(name: string, quota: string): az_storage_share_update_command_builder;
    /**
     * Create a URI to access a file share.
     *
     * Syntax:
     * ```
     * az storage share url --name
     *                      [--account-key]
     *                      [--account-name]
     *                      [--connection-string]
     *                      [--protocol {http, https}]
     *                      [--sas-token]
     *                      [--subscription]
     *                      [--unc]
     * ```
     *
     * @param {string} name The file share name.
     */
    static url(name: string): az_storage_share_url_command_builder;
}
/** Manage shared access policies of a storage table. */
export declare class az_storage_table_policy {
    /**
     * Create a stored access policy on the containing object.
     *
     * Syntax:
     * ```
     * az storage table policy create --name
     *                                --table-name
     *                                [--account-key]
     *                                [--account-name]
     *                                [--connection-string]
     *                                [--expiry]
     *                                [--permissions]
     *                                [--sas-token]
     *                                [--start]
     *                                [--subscription]
     * ```
     *
     * @param {string} name The stored access policy name.
     * @param {string} tableName The container name.
     */
    static create(name: string, tableName: string): az_storage_table_policy_create_command_builder;
    /**
     * Delete a stored access policy on a containing object.
     *
     * Syntax:
     * ```
     * az storage table policy delete --name
     *                                --table-name
     *                                [--account-key]
     *                                [--account-name]
     *                                [--connection-string]
     *                                [--sas-token]
     *                                [--subscription]
     * ```
     *
     * @param {string} name The stored access policy name.
     * @param {string} tableName The container name.
     */
    static delete(name: string, tableName: string): az_storage_table_policy_delete_command_builder;
    /**
     * List stored access policies on a containing object.
     *
     * Syntax:
     * ```
     * az storage table policy list --table-name
     *                              [--account-key]
     *                              [--account-name]
     *                              [--connection-string]
     *                              [--query-examples]
     *                              [--sas-token]
     *                              [--subscription]
     * ```
     *
     * @param {string} tableName The container name.
     */
    static list(tableName: string): az_storage_table_policy_list_command_builder;
    /**
     * Show a stored access policy on a containing object.
     *
     * Syntax:
     * ```
     * az storage table policy show --name
     *                              --table-name
     *                              [--account-key]
     *                              [--account-name]
     *                              [--connection-string]
     *                              [--query-examples]
     *                              [--sas-token]
     *                              [--subscription]
     * ```
     *
     * @param {string} name The stored access policy name.
     * @param {string} tableName The container name.
     */
    static show(name: string, tableName: string): az_storage_table_policy_show_command_builder;
    /**
     * Set a stored access policy on a containing object.
     *
     * Syntax:
     * ```
     * az storage table policy update --name
     *                                --table-name
     *                                [--account-key]
     *                                [--account-name]
     *                                [--connection-string]
     *                                [--expiry]
     *                                [--permissions]
     *                                [--sas-token]
     *                                [--start]
     *                                [--subscription]
     * ```
     *
     * @param {string} name The stored access policy name.
     * @param {string} tableName The container name.
     */
    static update(name: string, tableName: string): az_storage_table_policy_update_command_builder;
}
/** Manage NoSQL key-value storage. */
export declare class az_storage_table {
    /**
     * Creates a new table in the storage account.
     *
     * Syntax:
     * ```
     * az storage table create --name
     *                         [--account-key]
     *                         [--account-name]
     *                         [--connection-string]
     *                         [--fail-on-exist]
     *                         [--sas-token]
     *                         [--subscription]
     *                         [--timeout]
     * ```
     *
     * @param {string} name The name of the table to create. The table name may contain only alphanumeric characters and cannot begin with a numeric character. It is case-insensitive and must be from 3 to 63 characters long.
     */
    static create(name: string): az_storage_table_create_command_builder;
    /**
     * Deletes the specified table and any data it contains.
     *
     * Syntax:
     * ```
     * az storage table delete --name
     *                         [--account-key]
     *                         [--account-name]
     *                         [--connection-string]
     *                         [--fail-not-exist]
     *                         [--sas-token]
     *                         [--subscription]
     *                         [--timeout]
     * ```
     *
     * @param {string} name The name of the table to delete.
     */
    static delete(name: string): az_storage_table_delete_command_builder;
    /**
     * Returns a boolean indicating whether the table exists.
     *
     * Syntax:
     * ```
     * az storage table exists --name
     *                         [--account-key]
     *                         [--account-name]
     *                         [--connection-string]
     *                         [--sas-token]
     *                         [--subscription]
     *                         [--timeout]
     * ```
     *
     * @param {string} name The name of table to check for existence.
     */
    static exists(name: string): az_storage_table_exists_command_builder;
    /**
     * Generates a shared access signature for the table.
     *
     * Syntax:
     * ```
     * az storage table generate-sas --name
     *                               [--account-key]
     *                               [--account-name]
     *                               [--connection-string]
     *                               [--end-pk]
     *                               [--end-rk]
     *                               [--expiry]
     *                               [--https-only]
     *                               [--ip]
     *                               [--permissions]
     *                               [--policy-name]
     *                               [--start]
     *                               [--start-pk]
     *                               [--start-rk]
     *                               [--subscription]
     * ```
     *
     * @param {string} name The name of the table to create a SAS token for.
     */
    static generate_sas(name: string): az_storage_table_generate_sas_command_builder;
    /**
     * List tables in a storage account.
     *
     * Syntax:
     * ```
     * az storage table list [--account-key]
     *                       [--account-name]
     *                       [--connection-string]
     *                       [--marker]
     *                       [--num-results]
     *                       [--query-examples]
     *                       [--sas-token]
     *                       [--subscription]
     *                       [--timeout]
     * ```
     */
    static list(): az_storage_table_list_command_builder;
    /**
     * Retrieves statistics related to replication for the Table service.
     *
     * Syntax:
     * ```
     * az storage table stats [--account-key]
     *                        [--account-name]
     *                        [--connection-string]
     *                        [--sas-token]
     *                        [--subscription]
     *                        [--timeout]
     * ```
     */
    static stats(): az_storage_table_stats_command_builder;
}
/** Manage Azure Cloud Storage resources. */
export declare class az_storage {
    /**
     * Copy files or directories to or from Azure storage.
     *
     * Syntax:
     * ```
     * az storage copy [--account-key]
     *                 [--account-name]
     *                 [--blob-type {AppendBlob, BlockBlob, PageBlob}]
     *                 [--connection-string]
     *                 [--content-type]
     *                 [--destination]
     *                 [--destination-account-name]
     *                 [--destination-blob]
     *                 [--destination-container]
     *                 [--destination-file-path]
     *                 [--destination-local-path]
     *                 [--destination-share]
     *                 [--exclude-path]
     *                 [--exclude-pattern]
     *                 [--follow-symlinks]
     *                 [--include-path]
     *                 [--include-pattern]
     *                 [--preserve-s2s-access-tier {false, true}]
     *                 [--put-md5]
     *                 [--recursive]
     *                 [--sas-token]
     *                 [--source]
     *                 [--source-account-key]
     *                 [--source-account-name]
     *                 [--source-blob]
     *                 [--source-connection-string]
     *                 [--source-container]
     *                 [--source-file-path]
     *                 [--source-local-path]
     *                 [--source-sas]
     *                 [--source-share]
     *                 [--subscription]
     * ```
     */
    static copy(): az_storage_copy_command_builder;
    /**
     * Delete blobs or files from Azure Storage.
     *
     * Syntax:
     * ```
     * az storage remove [--account-key]
     *                   [--account-name]
     *                   [--connection-string]
     *                   [--container-name]
     *                   [--exclude-path]
     *                   [--exclude-pattern]
     *                   [--include-path]
     *                   [--include-pattern]
     *                   [--name]
     *                   [--path]
     *                   [--recursive]
     *                   [--sas-token]
     *                   [--share-name]
     *                   [--subscription]
     * ```
     */
    static remove(): az_storage_remove_command_builder;
}
/**
 * Show the properties of a storage account's blob service.
 *
 * Syntax:
 * ```
 * az storage account blob-service-properties show --account-name
 *                                                 [--query-examples]
 *                                                 [--resource-group]
 *                                                 [--subscription]
 * ```
 *
 * @param {string} accountName The storage account name.
 */
declare class az_storage_account_blob_service_properties_show_command_builder extends CommandBuilder<az_storage_account_blob_service_properties_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, accountName: string);
    /** The storage account name. */
    accountName(value: string): az_storage_account_blob_service_properties_show_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_storage_account_blob_service_properties_show_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_storage_account_blob_service_properties_show_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_storage_account_blob_service_properties_show_command_builder;
}
/**
 * Update the properties of a storage account's blob service.
 *
 * Syntax:
 * ```
 * az storage account blob-service-properties update --account-name
 *                                                   [--add]
 *                                                   [--container-days]
 *                                                   [--container-retention {false, true}]
 *                                                   [--delete-retention-days]
 *                                                   [--enable-change-feed {false, true}]
 *                                                   [--enable-delete-retention {false, true}]
 *                                                   [--enable-restore-policy {false, true}]
 *                                                   [--enable-versioning {false, true}]
 *                                                   [--force-string]
 *                                                   [--remove]
 *                                                   [--resource-group]
 *                                                   [--restore-days]
 *                                                   [--set]
 *                                                   [--subscription]
 * ```
 *
 * @param {string} accountName The storage account name.
 */
declare class az_storage_account_blob_service_properties_update_command_builder extends CommandBuilder<az_storage_account_blob_service_properties_update_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, accountName: string);
    /** The storage account name. */
    accountName(value: string): az_storage_account_blob_service_properties_update_command_builder;
    /** Add an object to a list of objects by specifying a path and key value pairs.  Example: --add property.listProperty <key=value, string or JSON string>. */
    add(value: string): az_storage_account_blob_service_properties_update_command_builder;
    /** Indicate the number of days that the deleted container should be retained. The minimum specified value can be 1 and the maximum value can be 365. */
    containerDeleteRetentionDays(value: string): az_storage_account_blob_service_properties_update_command_builder;
    /** Enable container delete retention policy for container soft delete when set to true. Disable container delete retention policy when set to false. */
    enableContainerDeleteRetention(value: boolean): az_storage_account_blob_service_properties_update_command_builder;
    /** Indicate the number of days that the deleted blob should be retained. The value must be in range [1,365]. It must be provided when `--enable-delete-retention` is true. */
    deleteRetentionDays(value: string): az_storage_account_blob_service_properties_update_command_builder;
    /** Indicate whether change feed event logging is enabled. If it is true, you enable the storage account to begin capturing changes. The default value is true. You can see more details in <a href="https://docs.microsoft.com/en-us/azure/storage/blobs/storage-blob-change-feed?tabs=azure-portal#register-by-using-azure-cli">https://docs.microsoft.com/en-us/azure/storage/blobs/storage-blob-change-feed?tabs=azure-portal#register-by-using-azure-cli</a>. */
    enableChangeFeed(value: boolean): az_storage_account_blob_service_properties_update_command_builder;
    /** Indicate whether delete retention policy is enabled for the blob service. */
    enableDeleteRetention(value: boolean): az_storage_account_blob_service_properties_update_command_builder;
    /** Enable blob restore policy when it set to true. */
    enableRestorePolicy(value: boolean): az_storage_account_blob_service_properties_update_command_builder;
    /** Versioning is enabled if set to true. */
    enableVersioning(value: boolean): az_storage_account_blob_service_properties_update_command_builder;
    /** When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON. */
    forceString(value: string): az_storage_account_blob_service_properties_update_command_builder;
    /** Remove a property or an element from a list.  Example: --remove property.list <indexToRemove> OR --remove propertyToRemove. */
    remove(value: string): az_storage_account_blob_service_properties_update_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_storage_account_blob_service_properties_update_command_builder;
    /** The number of days for the blob can be restored. It should be greater than zero and less than Delete Retention Days. */
    restoreDays(value: string): az_storage_account_blob_service_properties_update_command_builder;
    /** Update an object by specifying a property path and value to set.  Example: --set property1.property2=<value>. */
    set(value: string): az_storage_account_blob_service_properties_update_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_storage_account_blob_service_properties_update_command_builder;
}
/**
 * Create an encryption scope within storage account.
 *
 * Syntax:
 * ```
 * az storage account encryption-scope create --account-name
 *                                            --name
 *                                            [--key-source {Microsoft.KeyVault, Microsoft.Storage}]
 *                                            [--key-uri]
 *                                            [--resource-group]
 *                                            [--subscription]
 * ```
 *
 * @param {string} accountName The storage account name.
 * @param {string} name The name of the encryption scope within the specified storage account.
 */
declare class az_storage_account_encryption_scope_create_command_builder extends CommandBuilder<az_storage_account_encryption_scope_create_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, accountName: string, name: string);
    /** The storage account name. */
    accountName(value: string): az_storage_account_encryption_scope_create_command_builder;
    /** The name of the encryption scope within the specified storage account. */
    name(value: string): az_storage_account_encryption_scope_create_command_builder;
    /** The provider for the encryption scope. */
    keySource(value: 'Microsoft.KeyVault' | 'Microsoft.Storage'): az_storage_account_encryption_scope_create_command_builder;
    /** The object identifier for a key vault key object. When applied, the encryption scope will use the key referenced by the identifier to enable customer-managed key support on this encryption scope. */
    keyUri(value: string): az_storage_account_encryption_scope_create_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_storage_account_encryption_scope_create_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_storage_account_encryption_scope_create_command_builder;
}
/**
 * List encryption scopes within storage account.
 *
 * Syntax:
 * ```
 * az storage account encryption-scope list --account-name
 *                                          [--query-examples]
 *                                          [--resource-group]
 *                                          [--subscription]
 * ```
 *
 * @param {string} accountName The storage account name.
 */
declare class az_storage_account_encryption_scope_list_command_builder extends CommandBuilder<az_storage_account_encryption_scope_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, accountName: string);
    /** The storage account name. */
    accountName(value: string): az_storage_account_encryption_scope_list_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_storage_account_encryption_scope_list_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_storage_account_encryption_scope_list_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_storage_account_encryption_scope_list_command_builder;
}
/**
 * Show properties for specified encryption scope within storage account.
 *
 * Syntax:
 * ```
 * az storage account encryption-scope show --account-name
 *                                          --name
 *                                          [--query-examples]
 *                                          [--resource-group]
 *                                          [--subscription]
 * ```
 *
 * @param {string} accountName The storage account name.
 * @param {string} name The name of the encryption scope within the specified storage account.
 */
declare class az_storage_account_encryption_scope_show_command_builder extends CommandBuilder<az_storage_account_encryption_scope_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, accountName: string, name: string);
    /** The storage account name. */
    accountName(value: string): az_storage_account_encryption_scope_show_command_builder;
    /** The name of the encryption scope within the specified storage account. */
    name(value: string): az_storage_account_encryption_scope_show_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_storage_account_encryption_scope_show_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_storage_account_encryption_scope_show_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_storage_account_encryption_scope_show_command_builder;
}
/**
 * Update properties for specified encryption scope within storage account.
 *
 * Syntax:
 * ```
 * az storage account encryption-scope update --account-name
 *                                            --name
 *                                            [--key-source {Microsoft.KeyVault, Microsoft.Storage}]
 *                                            [--key-uri]
 *                                            [--resource-group]
 *                                            [--state {Disabled, Enabled}]
 *                                            [--subscription]
 * ```
 *
 * @param {string} accountName The storage account name.
 * @param {string} name The name of the encryption scope within the specified storage account.
 */
declare class az_storage_account_encryption_scope_update_command_builder extends CommandBuilder<az_storage_account_encryption_scope_update_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, accountName: string, name: string);
    /** The storage account name. */
    accountName(value: string): az_storage_account_encryption_scope_update_command_builder;
    /** The name of the encryption scope within the specified storage account. */
    name(value: string): az_storage_account_encryption_scope_update_command_builder;
    /** The provider for the encryption scope. */
    keySource(value: 'Microsoft.KeyVault' | 'Microsoft.Storage'): az_storage_account_encryption_scope_update_command_builder;
    /** The object identifier for a key vault key object. When applied, the encryption scope will use the key referenced by the identifier to enable customer-managed key support on this encryption scope. */
    keyUri(value: string): az_storage_account_encryption_scope_update_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_storage_account_encryption_scope_update_command_builder;
    /** Change the state the encryption scope. When disabled, all blob read/write operations using this encryption scope will fail. */
    state(value: 'Disabled' | 'Enabled'): az_storage_account_encryption_scope_update_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_storage_account_encryption_scope_update_command_builder;
}
/**
 * Show the properties of file service in storage account.
 *
 * Syntax:
 * ```
 * az storage account file-service-properties show --account-name
 *                                                 [--query-examples]
 *                                                 [--resource-group]
 *                                                 [--subscription]
 * ```
 *
 * @param {string} accountName The storage account name.
 */
declare class az_storage_account_file_service_properties_show_command_builder extends CommandBuilder<az_storage_account_file_service_properties_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, accountName: string);
    /** The storage account name. */
    accountName(value: string): az_storage_account_file_service_properties_show_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_storage_account_file_service_properties_show_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_storage_account_file_service_properties_show_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_storage_account_file_service_properties_show_command_builder;
}
/**
 * Update the properties of file service in storage account.
 *
 * Syntax:
 * ```
 * az storage account file-service-properties update --account-name
 *                                                   [--delete-retention-days]
 *                                                   [--enable-delete-retention {false, true}]
 *                                                   [--resource-group]
 *                                                   [--subscription]
 * ```
 *
 * @param {string} accountName The storage account name.
 */
declare class az_storage_account_file_service_properties_update_command_builder extends CommandBuilder<az_storage_account_file_service_properties_update_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, accountName: string);
    /** The storage account name. */
    accountName(value: string): az_storage_account_file_service_properties_update_command_builder;
    /** Indicate the number of days that the deleted item should be retained. The minimum specified value can be 1 and the maximum value can be 365. */
    deleteRetentionDays(value: string): az_storage_account_file_service_properties_update_command_builder;
    /** Enable file service properties for share soft delete. */
    enableDeleteRetention(value: boolean): az_storage_account_file_service_properties_update_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_storage_account_file_service_properties_update_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_storage_account_file_service_properties_update_command_builder;
}
/**
 * List the access keys or Kerberos keys (if active directory enabled) for a storage account.
 *
 * Syntax:
 * ```
 * az storage account keys list --account-name
 *                              [--expand-key-type {kerb}]
 *                              [--query-examples]
 *                              [--resource-group]
 *                              [--subscription]
 * ```
 *
 * @param {string} accountName The storage account name.
 */
declare class az_storage_account_keys_list_command_builder extends CommandBuilder<az_storage_account_keys_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, accountName: string);
    /** The storage account name. */
    accountName(value: string): az_storage_account_keys_list_command_builder;
    /** Specify the expanded key types to be listed. */
    expandKeyType(value: 'kerb'): az_storage_account_keys_list_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_storage_account_keys_list_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_storage_account_keys_list_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_storage_account_keys_list_command_builder;
}
/**
 * Regenerate one of the access keys or Kerberos keys (if active directory enabled) for a storage account.
 *
 * Syntax:
 * ```
 * az storage account keys renew --account-name
 *                               --key {primary, secondary}
 *                               [--key-type {kerb}]
 *                               [--resource-group]
 *                               [--subscription]
 * ```
 *
 * @param {string} accountName The storage account name.
 * @param {'primary' | 'secondary'} key The key options to regenerate.
 */
declare class az_storage_account_keys_renew_command_builder extends CommandBuilder<az_storage_account_keys_renew_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, accountName: string, key: 'primary' | 'secondary');
    /** The storage account name. */
    accountName(value: string): az_storage_account_keys_renew_command_builder;
    /** The key options to regenerate. */
    key(value: 'primary' | 'secondary'): az_storage_account_keys_renew_command_builder;
    /** The key type to regenerate. If --key-type is not specified, one of access keys will be regenerated by default. */
    keyType(value: 'kerb'): az_storage_account_keys_renew_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_storage_account_keys_renew_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_storage_account_keys_renew_command_builder;
}
/**
 * Creates the data policy rules associated with the specified storage account.
 *
 * Syntax:
 * ```
 * az storage account management-policy create --account-name
 *                                             --policy
 *                                             --resource-group
 *                                             [--subscription]
 * ```
 *
 * @param {string} accountName The name of the storage account within the specified resource group.
 * @param {string} policy The Storage Account ManagementPolicies Rules, in JSON format. See more details in: <a href="https://docs.microsoft.com/azure/storage/common/storage-lifecycle-managment-concepts">https://docs.microsoft.com/azure/storage/common/storage-lifecycle-managment-concepts</a>.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
declare class az_storage_account_management_policy_create_command_builder extends CommandBuilder<az_storage_account_management_policy_create_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, accountName: string, policy: string, resourceGroup: string);
    /** The name of the storage account within the specified resource group. */
    accountName(value: string): az_storage_account_management_policy_create_command_builder;
    /** The Storage Account ManagementPolicies Rules, in JSON format. See more details in: <a href="https://docs.microsoft.com/azure/storage/common/storage-lifecycle-managment-concepts">https://docs.microsoft.com/azure/storage/common/storage-lifecycle-managment-concepts</a>. */
    policy(value: string): az_storage_account_management_policy_create_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_storage_account_management_policy_create_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_storage_account_management_policy_create_command_builder;
}
/**
 * Deletes the managementpolicy associated with the specified storage account.
 *
 * Syntax:
 * ```
 * az storage account management-policy delete --account-name
 *                                             --resource-group
 *                                             [--subscription]
 * ```
 *
 * @param {string} accountName The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
declare class az_storage_account_management_policy_delete_command_builder extends CommandBuilder<az_storage_account_management_policy_delete_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, accountName: string, resourceGroup: string);
    /** The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only. */
    accountName(value: string): az_storage_account_management_policy_delete_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_storage_account_management_policy_delete_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_storage_account_management_policy_delete_command_builder;
}
/**
 * Gets the managementpolicy associated with the specified storage account.
 *
 * Syntax:
 * ```
 * az storage account management-policy show --account-name
 *                                           --resource-group
 *                                           [--query-examples]
 *                                           [--subscription]
 * ```
 *
 * @param {string} accountName The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
declare class az_storage_account_management_policy_show_command_builder extends CommandBuilder<az_storage_account_management_policy_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, accountName: string, resourceGroup: string);
    /** The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only. */
    accountName(value: string): az_storage_account_management_policy_show_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_storage_account_management_policy_show_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_storage_account_management_policy_show_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_storage_account_management_policy_show_command_builder;
}
/**
 * Updates the data policy rules associated with the specified storage account.
 *
 * Syntax:
 * ```
 * az storage account management-policy update --account-name
 *                                             --resource-group
 *                                             [--add]
 *                                             [--force-string]
 *                                             [--remove]
 *                                             [--set]
 *                                             [--subscription]
 * ```
 *
 * @param {string} accountName The name of the storage account within the specified resource group.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
declare class az_storage_account_management_policy_update_command_builder extends CommandBuilder<az_storage_account_management_policy_update_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, accountName: string, resourceGroup: string);
    /** The name of the storage account within the specified resource group. */
    accountName(value: string): az_storage_account_management_policy_update_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_storage_account_management_policy_update_command_builder;
    /** Add an object to a list of objects by specifying a path and key value pairs.  Example: --add property.listProperty <key=value, string or JSON string>. */
    add(value: string): az_storage_account_management_policy_update_command_builder;
    /** When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON. */
    forceString(value: string): az_storage_account_management_policy_update_command_builder;
    /** Remove a property or an element from a list.  Example: --remove property.list <indexToRemove> OR --remove propertyToRemove. */
    remove(value: string): az_storage_account_management_policy_update_command_builder;
    /** Update an object by specifying a property path and value to set.  Example: --set property1.property2=<value>. */
    set(value: string): az_storage_account_management_policy_update_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_storage_account_management_policy_update_command_builder;
}
/**
 * Add a network rule.
 *
 * Syntax:
 * ```
 * az storage account network-rule add --account-name
 *                                     [--action]
 *                                     [--ip-address]
 *                                     [--resource-group]
 *                                     [--subnet]
 *                                     [--subscription]
 *                                     [--vnet-name]
 * ```
 *
 * @param {string} accountName The storage account name.
 */
declare class az_storage_account_network_rule_add_command_builder extends CommandBuilder<az_storage_account_network_rule_add_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, accountName: string);
    /** The storage account name. */
    accountName(value: string): az_storage_account_network_rule_add_command_builder;
    /** The action of virtual network rule. */
    action(value: string): az_storage_account_network_rule_add_command_builder;
    /** IPv4 address or CIDR range. */
    ipAddress(value: string): az_storage_account_network_rule_add_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_storage_account_network_rule_add_command_builder;
    /** Name or ID of subnet. If name is supplied, `--vnet-name` must be supplied. */
    subnet(value: string): az_storage_account_network_rule_add_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_storage_account_network_rule_add_command_builder;
    /** Name of a virtual network. */
    vnetName(value: string): az_storage_account_network_rule_add_command_builder;
}
/**
 * List network rules.
 *
 * Syntax:
 * ```
 * az storage account network-rule list --account-name
 *                                      [--query-examples]
 *                                      [--resource-group]
 *                                      [--subscription]
 * ```
 *
 * @param {string} accountName The storage account name.
 */
declare class az_storage_account_network_rule_list_command_builder extends CommandBuilder<az_storage_account_network_rule_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, accountName: string);
    /** The storage account name. */
    accountName(value: string): az_storage_account_network_rule_list_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_storage_account_network_rule_list_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_storage_account_network_rule_list_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_storage_account_network_rule_list_command_builder;
}
/**
 * Remove a network rule.
 *
 * Syntax:
 * ```
 * az storage account network-rule remove --account-name
 *                                        [--ip-address]
 *                                        [--resource-group]
 *                                        [--subnet]
 *                                        [--subscription]
 *                                        [--vnet-name]
 * ```
 *
 * @param {string} accountName The storage account name.
 */
declare class az_storage_account_network_rule_remove_command_builder extends CommandBuilder<az_storage_account_network_rule_remove_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, accountName: string);
    /** The storage account name. */
    accountName(value: string): az_storage_account_network_rule_remove_command_builder;
    /** IPv4 address or CIDR range. */
    ipAddress(value: string): az_storage_account_network_rule_remove_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_storage_account_network_rule_remove_command_builder;
    /** Name or ID of subnet. If name is supplied, `--vnet-name` must be supplied. */
    subnet(value: string): az_storage_account_network_rule_remove_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_storage_account_network_rule_remove_command_builder;
    /** Name of a virtual network. */
    vnetName(value: string): az_storage_account_network_rule_remove_command_builder;
}
/**
 * Add rule to the specified Object Replication Service Policy.
 *
 * Syntax:
 * ```
 * az storage account or-policy rule add --account-name
 *                                       --destination-container
 *                                       --policy-id
 *                                       --source-container
 *                                       [--min-creation-time]
 *                                       [--prefix]
 *                                       [--resource-group]
 *                                       [--subscription]
 * ```
 *
 * @param {string} accountName The storage account name.
 * @param {string} destinationContainer The destination storage container name.
 * @param {string} policyId The ID of object replication policy or "default" if the policy ID is unknown. Policy Id will be auto-generated when setting on destination account. Required when setting on source account.
 * @param {string} sourceContainer The source storage container name.
 */
declare class az_storage_account_or_policy_rule_add_command_builder extends CommandBuilder<az_storage_account_or_policy_rule_add_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, accountName: string, destinationContainer: string, policyId: string, sourceContainer: string);
    /** The storage account name. */
    accountName(value: string): az_storage_account_or_policy_rule_add_command_builder;
    /** The destination storage container name. */
    destinationContainer(value: string): az_storage_account_or_policy_rule_add_command_builder;
    /** The ID of object replication policy or "default" if the policy ID is unknown. Policy Id will be auto-generated when setting on destination account. Required when setting on source account. */
    policyId(value: string): az_storage_account_or_policy_rule_add_command_builder;
    /** The source storage container name. */
    sourceContainer(value: string): az_storage_account_or_policy_rule_add_command_builder;
    /** Blobs created after the time will be replicated to the destination. It must be in datetime format 'yyyy-MM-ddTHH:mm:ssZ'. Example: 2020-02-19T16:05:00Z. */
    minCreationTime(value: string): az_storage_account_or_policy_rule_add_command_builder;
    /** Optional. Filter the results to replicate only blobs whose names begin with the specified prefix. */
    prefixMatch(value: string): az_storage_account_or_policy_rule_add_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_storage_account_or_policy_rule_add_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_storage_account_or_policy_rule_add_command_builder;
}
/**
 * List all the rules in the specified Object Replication Service Policy.
 *
 * Syntax:
 * ```
 * az storage account or-policy rule list --account-name
 *                                        --policy-id
 *                                        [--query-examples]
 *                                        [--resource-group]
 *                                        [--subscription]
 * ```
 *
 * @param {string} accountName The storage account name.
 * @param {string} policyId The ID of object replication policy or "default" if the policy ID is unknown. Policy Id will be auto-generated when setting on destination account. Required when setting on source account.
 */
declare class az_storage_account_or_policy_rule_list_command_builder extends CommandBuilder<az_storage_account_or_policy_rule_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, accountName: string, policyId: string);
    /** The storage account name. */
    accountName(value: string): az_storage_account_or_policy_rule_list_command_builder;
    /** The ID of object replication policy or "default" if the policy ID is unknown. Policy Id will be auto-generated when setting on destination account. Required when setting on source account. */
    policyId(value: string): az_storage_account_or_policy_rule_list_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_storage_account_or_policy_rule_list_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_storage_account_or_policy_rule_list_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_storage_account_or_policy_rule_list_command_builder;
}
/**
 * Remove the specified rule from the specified Object Replication Service Policy.
 *
 * Syntax:
 * ```
 * az storage account or-policy rule remove --account-name
 *                                          --policy-id
 *                                          --rule-id
 *                                          [--resource-group]
 *                                          [--subscription]
 * ```
 *
 * @param {string} accountName The storage account name.
 * @param {string} policyId The ID of object replication policy or "default" if the policy ID is unknown. Policy Id will be auto-generated when setting on destination account. Required when setting on source account.
 * @param {string} ruleId Rule Id is auto-generated for each new rule on destination account. It is required for put policy on source account.
 */
declare class az_storage_account_or_policy_rule_remove_command_builder extends CommandBuilder<az_storage_account_or_policy_rule_remove_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, accountName: string, policyId: string, ruleId: string);
    /** The storage account name. */
    accountName(value: string): az_storage_account_or_policy_rule_remove_command_builder;
    /** The ID of object replication policy or "default" if the policy ID is unknown. Policy Id will be auto-generated when setting on destination account. Required when setting on source account. */
    policyId(value: string): az_storage_account_or_policy_rule_remove_command_builder;
    /** Rule Id is auto-generated for each new rule on destination account. It is required for put policy on source account. */
    ruleId(value: string): az_storage_account_or_policy_rule_remove_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_storage_account_or_policy_rule_remove_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_storage_account_or_policy_rule_remove_command_builder;
}
/**
 * Show the properties of specified rule in Object Replication Service Policy.
 *
 * Syntax:
 * ```
 * az storage account or-policy rule show --account-name
 *                                        --policy-id
 *                                        --rule-id
 *                                        [--query-examples]
 *                                        [--resource-group]
 *                                        [--subscription]
 * ```
 *
 * @param {string} accountName The storage account name.
 * @param {string} policyId The ID of object replication policy or "default" if the policy ID is unknown. Policy Id will be auto-generated when setting on destination account. Required when setting on source account.
 * @param {string} ruleId Rule Id is auto-generated for each new rule on destination account. It is required for put policy on source account.
 */
declare class az_storage_account_or_policy_rule_show_command_builder extends CommandBuilder<az_storage_account_or_policy_rule_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, accountName: string, policyId: string, ruleId: string);
    /** The storage account name. */
    accountName(value: string): az_storage_account_or_policy_rule_show_command_builder;
    /** The ID of object replication policy or "default" if the policy ID is unknown. Policy Id will be auto-generated when setting on destination account. Required when setting on source account. */
    policyId(value: string): az_storage_account_or_policy_rule_show_command_builder;
    /** Rule Id is auto-generated for each new rule on destination account. It is required for put policy on source account. */
    ruleId(value: string): az_storage_account_or_policy_rule_show_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_storage_account_or_policy_rule_show_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_storage_account_or_policy_rule_show_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_storage_account_or_policy_rule_show_command_builder;
}
/**
 * Update rule properties to Object Replication Service Policy.
 *
 * Syntax:
 * ```
 * az storage account or-policy rule update --account-name
 *                                          --policy-id
 *                                          --rule-id
 *                                          [--destination-container]
 *                                          [--min-creation-time]
 *                                          [--prefix]
 *                                          [--resource-group]
 *                                          [--source-container]
 *                                          [--subscription]
 * ```
 *
 * @param {string} accountName The storage account name.
 * @param {string} policyId The ID of object replication policy or "default" if the policy ID is unknown. Policy Id will be auto-generated when setting on destination account. Required when setting on source account.
 * @param {string} ruleId Rule Id is auto-generated for each new rule on destination account. It is required for put policy on source account.
 */
declare class az_storage_account_or_policy_rule_update_command_builder extends CommandBuilder<az_storage_account_or_policy_rule_update_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, accountName: string, policyId: string, ruleId: string);
    /** The storage account name. */
    accountName(value: string): az_storage_account_or_policy_rule_update_command_builder;
    /** The ID of object replication policy or "default" if the policy ID is unknown. Policy Id will be auto-generated when setting on destination account. Required when setting on source account. */
    policyId(value: string): az_storage_account_or_policy_rule_update_command_builder;
    /** Rule Id is auto-generated for each new rule on destination account. It is required for put policy on source account. */
    ruleId(value: string): az_storage_account_or_policy_rule_update_command_builder;
    /** The destination storage container name. */
    destinationContainer(value: string): az_storage_account_or_policy_rule_update_command_builder;
    /** Blobs created after the time will be replicated to the destination. It must be in datetime format 'yyyy-MM-ddTHH:mm:ssZ'. Example: 2020-02-19T16:05:00Z. */
    minCreationTime(value: string): az_storage_account_or_policy_rule_update_command_builder;
    /** Optional. Filter the results to replicate only blobs whose names begin with the specified prefix. */
    prefixMatch(value: string): az_storage_account_or_policy_rule_update_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_storage_account_or_policy_rule_update_command_builder;
    /** The source storage container name. */
    sourceContainer(value: string): az_storage_account_or_policy_rule_update_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_storage_account_or_policy_rule_update_command_builder;
}
/**
 * Create Object Replication Service Policy for storage account.
 *
 * Syntax:
 * ```
 * az storage account or-policy create --account-name
 *                                     [--dcont]
 *                                     [--destination-account]
 *                                     [--min-creation-time]
 *                                     [--policy]
 *                                     [--policy-id]
 *                                     [--prefix]
 *                                     [--resource-group]
 *                                     [--rule-id]
 *                                     [--scont]
 *                                     [--source-account]
 *                                     [--subscription]
 * ```
 *
 * @param {string} accountName The storage account name.
 */
declare class az_storage_account_or_policy_create_command_builder extends CommandBuilder<az_storage_account_or_policy_create_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, accountName: string);
    /** The storage account name. */
    accountName(value: string): az_storage_account_or_policy_create_command_builder;
    /** The destination storage container name. Required when no --policy provided. */
    destinationContainer(value: string): az_storage_account_or_policy_create_command_builder;
    /** The destination storage account name. Apply --account-name value as destination account when there is no destination account provided in --policy and --destination-account. */
    destinationAccount(value: string): az_storage_account_or_policy_create_command_builder;
    /** Blobs created after the time will be replicated to the destination. It must be in datetime format 'yyyy-MM-ddTHH:mm:ssZ'. Example: 2020-02-19T16:05:00Z. */
    minCreationTime(value: string): az_storage_account_or_policy_create_command_builder;
    /** The object replication policy definition between two storage accounts, in JSON format. Multiple rules can be defined in one policy. */
    policy(value: string): az_storage_account_or_policy_create_command_builder;
    /** The ID of object replication policy or "default" if the policy ID is unknown. Policy Id will be auto-generated when setting on destination account. Required when setting on source account. */
    policyId(value: string): az_storage_account_or_policy_create_command_builder;
    /** Optional. Filter the results to replicate only blobs whose names begin with the specified prefix. */
    prefixMatch(value: string): az_storage_account_or_policy_create_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_storage_account_or_policy_create_command_builder;
    /** Rule Id is auto-generated for each new rule on destination account. It is required for put policy on source account. */
    ruleId(value: string): az_storage_account_or_policy_create_command_builder;
    /** The source storage container name. Required when no --policy provided. */
    sourceContainer(value: string): az_storage_account_or_policy_create_command_builder;
    /** The source storage account name. Required when no --policy provided. */
    sourceAccount(value: string): az_storage_account_or_policy_create_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_storage_account_or_policy_create_command_builder;
}
/**
 * Delete specified Object Replication Service Policy associated with the specified storage account.
 *
 * Syntax:
 * ```
 * az storage account or-policy delete --account-name
 *                                     --policy-id
 *                                     [--resource-group]
 *                                     [--subscription]
 * ```
 *
 * @param {string} accountName The storage account name.
 * @param {string} policyId The ID of object replication policy or "default" if the policy ID is unknown. Policy Id will be auto-generated when setting on destination account. Required when setting on source account.
 */
declare class az_storage_account_or_policy_delete_command_builder extends CommandBuilder<az_storage_account_or_policy_delete_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, accountName: string, policyId: string);
    /** The storage account name. */
    accountName(value: string): az_storage_account_or_policy_delete_command_builder;
    /** The ID of object replication policy or "default" if the policy ID is unknown. Policy Id will be auto-generated when setting on destination account. Required when setting on source account. */
    policyId(value: string): az_storage_account_or_policy_delete_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_storage_account_or_policy_delete_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_storage_account_or_policy_delete_command_builder;
}
/**
 * List Object Replication Service Policies associated with the specified storage account.
 *
 * Syntax:
 * ```
 * az storage account or-policy list --account-name
 *                                   [--query-examples]
 *                                   [--resource-group]
 *                                   [--subscription]
 * ```
 *
 * @param {string} accountName The storage account name.
 */
declare class az_storage_account_or_policy_list_command_builder extends CommandBuilder<az_storage_account_or_policy_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, accountName: string);
    /** The storage account name. */
    accountName(value: string): az_storage_account_or_policy_list_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_storage_account_or_policy_list_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_storage_account_or_policy_list_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_storage_account_or_policy_list_command_builder;
}
/**
 * Show the properties of specified Object Replication Service Policy for storage account.
 *
 * Syntax:
 * ```
 * az storage account or-policy show --account-name
 *                                   --policy-id
 *                                   [--query-examples]
 *                                   [--resource-group]
 *                                   [--subscription]
 * ```
 *
 * @param {string} accountName The storage account name.
 * @param {string} policyId The ID of object replication policy or "default" if the policy ID is unknown. Policy Id will be auto-generated when setting on destination account. Required when setting on source account.
 */
declare class az_storage_account_or_policy_show_command_builder extends CommandBuilder<az_storage_account_or_policy_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, accountName: string, policyId: string);
    /** The storage account name. */
    accountName(value: string): az_storage_account_or_policy_show_command_builder;
    /** The ID of object replication policy or "default" if the policy ID is unknown. Policy Id will be auto-generated when setting on destination account. Required when setting on source account. */
    policyId(value: string): az_storage_account_or_policy_show_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_storage_account_or_policy_show_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_storage_account_or_policy_show_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_storage_account_or_policy_show_command_builder;
}
/**
 * Update Object Replication Service Policy properties for storage account.
 *
 * Syntax:
 * ```
 * az storage account or-policy update --account-name
 *                                     [--add]
 *                                     [--destination-account]
 *                                     [--force-string]
 *                                     [--policy]
 *                                     [--policy-id]
 *                                     [--remove]
 *                                     [--resource-group]
 *                                     [--set]
 *                                     [--source-account]
 *                                     [--subscription]
 * ```
 *
 * @param {string} accountName The storage account name.
 */
declare class az_storage_account_or_policy_update_command_builder extends CommandBuilder<az_storage_account_or_policy_update_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, accountName: string);
    /** The storage account name. */
    accountName(value: string): az_storage_account_or_policy_update_command_builder;
    /** Add an object to a list of objects by specifying a path and key value pairs.  Example: --add property.listProperty <key=value, string or JSON string>. */
    add(value: string): az_storage_account_or_policy_update_command_builder;
    /** The destination storage account name. Apply --account-name value as destination account when there is no destination account provided in --policy and --destination-account. */
    destinationAccount(value: string): az_storage_account_or_policy_update_command_builder;
    /** When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON. */
    forceString(value: string): az_storage_account_or_policy_update_command_builder;
    /** The object replication policy definition between two storage accounts, in JSON format. Multiple rules can be defined in one policy. */
    policy(value: string): az_storage_account_or_policy_update_command_builder;
    /** The ID of object replication policy or "default" if the policy ID is unknown. Policy Id will be auto-generated when setting on destination account. Required when setting on source account. */
    policyId(value: string): az_storage_account_or_policy_update_command_builder;
    /** Remove a property or an element from a list.  Example: --remove property.list <indexToRemove> OR --remove propertyToRemove. */
    remove(value: string): az_storage_account_or_policy_update_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_storage_account_or_policy_update_command_builder;
    /** Update an object by specifying a property path and value to set.  Example: --set property1.property2=<value>. */
    set(value: string): az_storage_account_or_policy_update_command_builder;
    /** The source storage account name. Required when no --policy provided. */
    sourceAccount(value: string): az_storage_account_or_policy_update_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_storage_account_or_policy_update_command_builder;
}
/**
 * Approve a private endpoint connection request for storage account.
 *
 * Syntax:
 * ```
 * az storage account private-endpoint-connection approve [--account-name]
 *                                                        [--description]
 *                                                        [--id]
 *                                                        [--name]
 *                                                        [--resource-group]
 *                                                        [--subscription]
 * ```
 */
declare class az_storage_account_private_endpoint_connection_approve_command_builder extends CommandBuilder<az_storage_account_private_endpoint_connection_approve_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** The storage account name. */
    accountName(value: string): az_storage_account_private_endpoint_connection_approve_command_builder;
    /** Comments for approve operation. */
    description(value: string): az_storage_account_private_endpoint_connection_approve_command_builder;
    /** The ID of the private endpoint connection associated with the Storage Account. You can get it using `az storage account show`. */
    id(value: string): az_storage_account_private_endpoint_connection_approve_command_builder;
    /** The name of the private endpoint connection associated with the Storage Account. */
    name(value: string): az_storage_account_private_endpoint_connection_approve_command_builder;
    /** The resource group name of specified storage account. */
    resourceGroup(value: string): az_storage_account_private_endpoint_connection_approve_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_storage_account_private_endpoint_connection_approve_command_builder;
}
/**
 * Delete a private endpoint connection request for storage account.
 *
 * Syntax:
 * ```
 * az storage account private-endpoint-connection delete [--account-name]
 *                                                       [--id]
 *                                                       [--name]
 *                                                       [--resource-group]
 *                                                       [--subscription]
 *                                                       [--yes]
 * ```
 */
declare class az_storage_account_private_endpoint_connection_delete_command_builder extends CommandBuilder<az_storage_account_private_endpoint_connection_delete_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** The storage account name. */
    accountName(value: string): az_storage_account_private_endpoint_connection_delete_command_builder;
    /** The ID of the private endpoint connection associated with the Storage Account. You can get it using `az storage account show`. */
    id(value: string): az_storage_account_private_endpoint_connection_delete_command_builder;
    /** The name of the private endpoint connection associated with the Storage Account. */
    name(value: string): az_storage_account_private_endpoint_connection_delete_command_builder;
    /** The resource group name of specified storage account. */
    resourceGroup(value: string): az_storage_account_private_endpoint_connection_delete_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_storage_account_private_endpoint_connection_delete_command_builder;
    /** Do not prompt for confirmation. */
    yes(value: string): az_storage_account_private_endpoint_connection_delete_command_builder;
}
/**
 * Reject a private endpoint connection request for storage account.
 *
 * Syntax:
 * ```
 * az storage account private-endpoint-connection reject [--account-name]
 *                                                       [--description]
 *                                                       [--id]
 *                                                       [--name]
 *                                                       [--resource-group]
 *                                                       [--subscription]
 * ```
 */
declare class az_storage_account_private_endpoint_connection_reject_command_builder extends CommandBuilder<az_storage_account_private_endpoint_connection_reject_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** The storage account name. */
    accountName(value: string): az_storage_account_private_endpoint_connection_reject_command_builder;
    /** Comments for reject operation. */
    description(value: string): az_storage_account_private_endpoint_connection_reject_command_builder;
    /** The ID of the private endpoint connection associated with the Storage Account. You can get it using `az storage account show`. */
    id(value: string): az_storage_account_private_endpoint_connection_reject_command_builder;
    /** The name of the private endpoint connection associated with the Storage Account. */
    name(value: string): az_storage_account_private_endpoint_connection_reject_command_builder;
    /** The resource group name of specified storage account. */
    resourceGroup(value: string): az_storage_account_private_endpoint_connection_reject_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_storage_account_private_endpoint_connection_reject_command_builder;
}
/**
 * Show details of a private endpoint connection request for storage account.
 *
 * Syntax:
 * ```
 * az storage account private-endpoint-connection show [--account-name]
 *                                                     [--id]
 *                                                     [--name]
 *                                                     [--query-examples]
 *                                                     [--resource-group]
 *                                                     [--subscription]
 * ```
 */
declare class az_storage_account_private_endpoint_connection_show_command_builder extends CommandBuilder<az_storage_account_private_endpoint_connection_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** The storage account name. */
    accountName(value: string): az_storage_account_private_endpoint_connection_show_command_builder;
    /** The ID of the private endpoint connection associated with the Storage Account. You can get it using `az storage account show`. */
    id(value: string): az_storage_account_private_endpoint_connection_show_command_builder;
    /** The name of the private endpoint connection associated with the Storage Account. */
    name(value: string): az_storage_account_private_endpoint_connection_show_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_storage_account_private_endpoint_connection_show_command_builder;
    /** The resource group name of specified storage account. */
    resourceGroup(value: string): az_storage_account_private_endpoint_connection_show_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_storage_account_private_endpoint_connection_show_command_builder;
}
/**
 * Get the private link resources that need to be created for a storage account.
 *
 * Syntax:
 * ```
 * az storage account private-link-resource list --account-name
 *                                               --resource-group
 *                                               [--query-examples]
 *                                               [--subscription]
 * ```
 *
 * @param {string} accountName The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
declare class az_storage_account_private_link_resource_list_command_builder extends CommandBuilder<az_storage_account_private_link_resource_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, accountName: string, resourceGroup: string);
    /** The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only. */
    accountName(value: string): az_storage_account_private_link_resource_list_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_storage_account_private_link_resource_list_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_storage_account_private_link_resource_list_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_storage_account_private_link_resource_list_command_builder;
}
/**
 * Checks that the storage account name is valid and is not already in use.
 *
 * Syntax:
 * ```
 * az storage account check-name --name
 *                               [--subscription]
 * ```
 *
 * @param {string} name The storage account name.
 */
declare class az_storage_account_check_name_command_builder extends CommandBuilder<az_storage_account_check_name_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string);
    /** The storage account name. */
    name(value: string): az_storage_account_check_name_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_storage_account_check_name_command_builder;
}
/**
 * Create a storage account.
 *
 * Syntax:
 * ```
 * az storage account create --name
 *                           --resource-group
 *                           [--access-tier {Cool, Hot}]
 *                           [--allow-blob-public-access {false, true}]
 *                           [--assign-identity]
 *                           [--azure-storage-sid]
 *                           [--bypass {AzureServices, Logging, Metrics, None}]
 *                           [--custom-domain]
 *                           [--default-action {Allow, Deny}]
 *                           [--domain-guid]
 *                           [--domain-name]
 *                           [--domain-sid]
 *                           [--enable-files-aadds {false, true}]
 *                           [--enable-files-adds {false, true}]
 *                           [--enable-hierarchical-namespace {false, true}]
 *                           [--enable-large-file-share]
 *                           [--encryption-key-type-for-queue {Account, Service}]
 *                           [--encryption-key-type-for-table {Account, Service}]
 *                           [--encryption-services {blob, file, queue, table}]
 *                           [--forest-name]
 *                           [--https-only {false, true}]
 *                           [--kind {BlobStorage, BlockBlobStorage, FileStorage, Storage, StorageV2}]
 *                           [--location]
 *                           [--min-tls-version {TLS1_0, TLS1_1, TLS1_2}]
 *                           [--net-bios-domain-name]
 *                           [--publish-internet-endpoints {false, true}]
 *                           [--publish-microsoft-endpoints {false, true}]
 *                           [--require-infrastructure-encryption {false, true}]
 *                           [--routing-choice {InternetRouting, MicrosoftRouting}]
 *                           [--sku {Premium_LRS, Premium_ZRS, Standard_GRS, Standard_GZRS, Standard_LRS, Standard_RAGRS, Standard_RAGZRS, Standard_ZRS}]
 *                           [--subscription]
 *                           [--tags]
 * ```
 *
 * @param {string} name The storage account name.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
declare class az_storage_account_create_command_builder extends CommandBuilder<az_storage_account_create_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string, resourceGroup: string);
    /** The storage account name. */
    name(value: string): az_storage_account_create_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_storage_account_create_command_builder;
    /** The access tier used for billing StandardBlob accounts. Cannot be set for StandardLRS, StandardGRS, StandardRAGRS, or PremiumLRS account types. It is required for StandardBlob accounts during creation. */
    accessTier(value: 'Cool' | 'Hot'): az_storage_account_create_command_builder;
    /** Allow or disallow public access to all blobs or containers in the storage account. The default value for this property is null, which is equivalent to true. When true, containers in the account may be configured for public access. Note that setting this property to true does not enable anonymous access to any data in the account. The additional step of configuring the public access setting for a container is required to enable anonymous access. */
    allowBlobPublicAccess(value: boolean): az_storage_account_create_command_builder;
    /** Generate and assign a new Storage Account Identity for this storage account for use with key management services like Azure KeyVault. */
    assignIdentity(value: string): az_storage_account_create_command_builder;
    /** Specify the security identifier (SID) for Azure Storage. Required when --enable-files-adds is set to True. */
    azureStorageSid(value: string): az_storage_account_create_command_builder;
    /** Bypass traffic for space-separated uses. */
    bypass(value: 'AzureServices' | 'Logging' | 'Metrics' | 'None'): az_storage_account_create_command_builder;
    /** User domain assigned to the storage account. Name is the CNAME source. */
    customDomain(value: string): az_storage_account_create_command_builder;
    /** Default action to apply when no rule matches. */
    defaultAction(value: 'Allow' | 'Deny'): az_storage_account_create_command_builder;
    /** Specify the domain GUID. Required when --enable-files-adds is set to True. */
    domainGuid(value: string): az_storage_account_create_command_builder;
    /** Specify the primary domain that the AD DNS server is authoritative for. Required when --enable-files-adds is set to True. */
    domainName(value: string): az_storage_account_create_command_builder;
    /** Specify the security identifier (SID). Required when --enable-files-adds is set to True. */
    domainSid(value: string): az_storage_account_create_command_builder;
    /** Enable Azure Active Directory Domain Services authentication for Azure Files. */
    enableFilesAadds(value: boolean): az_storage_account_create_command_builder;
    /** Enable Azure Files Active Directory Domain Service Authentication for storage account. When --enable-files-adds is set to true, Azure Active Directory Properties arguments must be provided. */
    enableFilesAdds(value: boolean): az_storage_account_create_command_builder;
    /** Allow the blob service to exhibit filesystem semantics. This property can be enabled only when storage account kind is StorageV2. */
    enableHierarchicalNamespace(value: boolean): az_storage_account_create_command_builder;
    /** Enable the capability to support large file shares with more than 5 TiB capacity for storage account.Once the property is enabled, the feature cannot be disabled. Currently only supported for LRS and ZRS replication types, hence account conversions to geo-redundant accounts would not be possible. For more information, please refer to <a href="https://go.microsoft.com/fwlink/?linkid=2086047">https://go.microsoft.com/fwlink/?linkid=2086047</a>. */
    enableLargeFileShare(value: string): az_storage_account_create_command_builder;
    /** Set the encryption key type for Queue service. "Account": Queue will be encrypted with account-scoped encryption key. "Service": Queue will always be encrypted with service-scoped keys. Currently the default encryption key type is "Service". */
    encryptionKeyTypeForQueue(value: 'Account' | 'Service'): az_storage_account_create_command_builder;
    /** Set the encryption key type for Table service. "Account": Table will be encrypted with account-scoped encryption key. "Service": Table will always be encrypted with service-scoped keys. Currently the default encryption key type is "Service". */
    encryptionKeyTypeForTable(value: 'Account' | 'Service'): az_storage_account_create_command_builder;
    /** Specifies which service(s) to encrypt. */
    encryptionServices(value: 'blob' | 'file' | 'queue' | 'table'): az_storage_account_create_command_builder;
    /** Specify the Active Directory forest to get. Required when --enable-files-adds is set to True. */
    forestName(value: string): az_storage_account_create_command_builder;
    /** Allow https traffic only to storage service if set to true. The default value is true. */
    httpsOnly(value: boolean): az_storage_account_create_command_builder;
    /** Indicates the type of storage account. */
    kind(value: 'BlobStorage' | 'BlockBlobStorage' | 'FileStorage' | 'Storage' | 'StorageV2'): az_storage_account_create_command_builder;
    /** Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`. */
    location(value: string): az_storage_account_create_command_builder;
    /** The minimum TLS version to be permitted on requests to storage. The default interpretation is TLS 1.0 for this property. */
    minTlsVersion(value: 'TLS1_0' | 'TLS1_1' | 'TLS1_2'): az_storage_account_create_command_builder;
    /** Specify the NetBIOS domain name. Required when --enable-files-adds is set to True. */
    netBiosDomainName(value: string): az_storage_account_create_command_builder;
    /** A boolean flag which indicates whether internet routing storage endpoints are to be published. */
    publishInternetEndpoints(value: boolean): az_storage_account_create_command_builder;
    /** A boolean flag which indicates whether microsoft routing storage endpoints are to be published. */
    publishMicrosoftEndpoints(value: boolean): az_storage_account_create_command_builder;
    /** A boolean indicating whether or not the service applies a secondary layer of encryption with platform managed keys for data at rest. */
    requireInfrastructureEncryption(value: boolean): az_storage_account_create_command_builder;
    /** Routing Choice defines the kind of network routing opted by the user. */
    routingChoice(value: 'InternetRouting' | 'MicrosoftRouting'): az_storage_account_create_command_builder;
    /** The storage account SKU. */
    sku(value: 'Premium_LRS' | 'Premium_ZRS' | 'Standard_GRS' | 'Standard_GZRS' | 'Standard_LRS' | 'Standard_RAGRS' | 'Standard_RAGZRS' | 'Standard_ZRS'): az_storage_account_create_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_storage_account_create_command_builder;
    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    tags(value: string): az_storage_account_create_command_builder;
}
/**
 * Delete a storage account.
 *
 * Syntax:
 * ```
 * az storage account delete [--ids]
 *                           [--name]
 *                           [--resource-group]
 *                           [--subscription]
 *                           [--yes]
 * ```
 */
declare class az_storage_account_delete_command_builder extends CommandBuilder<az_storage_account_delete_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_storage_account_delete_command_builder;
    /** The storage account name. */
    name(value: string): az_storage_account_delete_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_storage_account_delete_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_storage_account_delete_command_builder;
    /** Do not prompt for confirmation. */
    yes(value: string): az_storage_account_delete_command_builder;
}
/**
 * Failover request can be triggered for a storage account in case of availability issues.
 *
 * Syntax:
 * ```
 * az storage account failover [--ids]
 *                             [--name]
 *                             [--no-wait]
 *                             [--resource-group]
 *                             [--subscription]
 *                             [--yes]
 * ```
 */
declare class az_storage_account_failover_command_builder extends CommandBuilder<az_storage_account_failover_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_storage_account_failover_command_builder;
    /** The storage account name. */
    name(value: string): az_storage_account_failover_command_builder;
    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_storage_account_failover_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_storage_account_failover_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_storage_account_failover_command_builder;
    /** Do not prompt for confirmation. */
    yes(value: string): az_storage_account_failover_command_builder;
}
/**
 * Generates a shared access signature for the account.
 *
 * Syntax:
 * ```
 * az storage account generate-sas --expiry
 *                                 --permissions
 *                                 --resource-types
 *                                 --services
 *                                 [--account-key]
 *                                 [--account-name]
 *                                 [--connection-string]
 *                                 [--https-only]
 *                                 [--ids]
 *                                 [--ip]
 *                                 [--start]
 *                                 [--subscription]
 * ```
 *
 * @param {string} expiry Specifies the UTC datetime (Y-m-d'T'H:M'Z') at which the SAS becomes invalid.
 * @param {string} permissions The permissions the SAS grants. Allowed values: (a)dd (c)reate (d)elete (l)ist (p)rocess (r)ead (u)pdate (w)rite. Can be combined.
 * @param {string} resourceTypes The resource types the SAS is applicable for. Allowed values: (s)ervice (c)ontainer (o)bject. Can be combined.
 * @param {string} services The storage services the SAS is applicable for. Allowed values: (b)lob (f)ile (q)ueue (t)able. Can be combined.
 */
declare class az_storage_account_generate_sas_command_builder extends CommandBuilder<az_storage_account_generate_sas_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, expiry: string, permissions: string, resourceTypes: string, services: string);
    /** Specifies the UTC datetime (Y-m-d'T'H:M'Z') at which the SAS becomes invalid. */
    expiry(value: string): az_storage_account_generate_sas_command_builder;
    /** The permissions the SAS grants. Allowed values: (a)dd (c)reate (d)elete (l)ist (p)rocess (r)ead (u)pdate (w)rite. Can be combined. */
    permissions(value: string): az_storage_account_generate_sas_command_builder;
    /** The resource types the SAS is applicable for. Allowed values: (s)ervice (c)ontainer (o)bject. Can be combined. */
    resourceTypes(value: string): az_storage_account_generate_sas_command_builder;
    /** The storage services the SAS is applicable for. Allowed values: (b)lob (f)ile (q)ueue (t)able. Can be combined. */
    services(value: string): az_storage_account_generate_sas_command_builder;
    /** Storage account key. Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_KEY. */
    accountKey(value: string): az_storage_account_generate_sas_command_builder;
    /** Storage account name. Must be used in conjunction with either storage account key or a SAS token. Environment Variable: AZURE_STORAGE_ACCOUNT. */
    accountName(value: string): az_storage_account_generate_sas_command_builder;
    /** Storage account connection string. Environment variable: AZURE_STORAGE_CONNECTION_STRING. */
    connectionString(value: string): az_storage_account_generate_sas_command_builder;
    /** Only permit requests made with the HTTPS protocol. If omitted, requests from both the HTTP and HTTPS protocol are permitted. */
    httpsOnly(value: string): az_storage_account_generate_sas_command_builder;
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_storage_account_generate_sas_command_builder;
    /** Specifies the IP address or range of IP addresses from which to accept requests. Supports only IPv4 style addresses. */
    ip(value: string): az_storage_account_generate_sas_command_builder;
    /** Specifies the UTC datetime (Y-m-d'T'H:M'Z') at which the SAS becomes valid. Defaults to the time of the request. */
    start(value: string): az_storage_account_generate_sas_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_storage_account_generate_sas_command_builder;
}
/**
 * List storage accounts.
 *
 * Syntax:
 * ```
 * az storage account list [--query-examples]
 *                         [--resource-group]
 *                         [--subscription]
 * ```
 */
declare class az_storage_account_list_command_builder extends CommandBuilder<az_storage_account_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_storage_account_list_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_storage_account_list_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_storage_account_list_command_builder;
}
/**
 * Revoke all user delegation keys for a storage account.
 *
 * Syntax:
 * ```
 * az storage account revoke-delegation-keys [--ids]
 *                                           [--name]
 *                                           [--resource-group]
 *                                           [--subscription]
 * ```
 */
declare class az_storage_account_revoke_delegation_keys_command_builder extends CommandBuilder<az_storage_account_revoke_delegation_keys_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_storage_account_revoke_delegation_keys_command_builder;
    /** The storage account name. */
    name(value: string): az_storage_account_revoke_delegation_keys_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_storage_account_revoke_delegation_keys_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_storage_account_revoke_delegation_keys_command_builder;
}
/**
 * Show storage account properties.
 *
 * Syntax:
 * ```
 * az storage account show [--expand]
 *                         [--ids]
 *                         [--name]
 *                         [--query-examples]
 *                         [--resource-group]
 *                         [--subscription]
 * ```
 */
declare class az_storage_account_show_command_builder extends CommandBuilder<az_storage_account_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** May be used to expand the properties within account's properties. By default, data is not included when fetching properties. Currently we only support geoReplicationStats and blobRestoreStatus. */
    expand(value: string): az_storage_account_show_command_builder;
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_storage_account_show_command_builder;
    /** The storage account name. */
    name(value: string): az_storage_account_show_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_storage_account_show_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_storage_account_show_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_storage_account_show_command_builder;
}
/**
 * Get the connection string for a storage account.
 *
 * Syntax:
 * ```
 * az storage account show-connection-string [--blob-endpoint]
 *                                           [--file-endpoint]
 *                                           [--ids]
 *                                           [--key {primary, secondary}]
 *                                           [--name]
 *                                           [--protocol {http, https}]
 *                                           [--queue-endpoint]
 *                                           [--resource-group]
 *                                           [--sas-token]
 *                                           [--subscription]
 *                                           [--table-endpoint]
 * ```
 */
declare class az_storage_account_show_connection_string_command_builder extends CommandBuilder<az_storage_account_show_connection_string_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** Custom endpoint for blobs. */
    blobEndpoint(value: string): az_storage_account_show_connection_string_command_builder;
    /** Custom endpoint for files. */
    fileEndpoint(value: string): az_storage_account_show_connection_string_command_builder;
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_storage_account_show_connection_string_command_builder;
    /** The key to use. */
    key(value: 'primary' | 'secondary'): az_storage_account_show_connection_string_command_builder;
    /** The storage account name. */
    name(value: string): az_storage_account_show_connection_string_command_builder;
    /** The default endpoint protocol. */
    protocol(value: 'http' | 'https'): az_storage_account_show_connection_string_command_builder;
    /** Custom endpoint for queues. */
    queueEndpoint(value: string): az_storage_account_show_connection_string_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_storage_account_show_connection_string_command_builder;
    /** The SAS token to be used in the connection-string. */
    sasToken(value: string): az_storage_account_show_connection_string_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_storage_account_show_connection_string_command_builder;
    /** Custom endpoint for tables. */
    tableEndpoint(value: string): az_storage_account_show_connection_string_command_builder;
}
/**
 * Show the current count and limit of the storage accounts under the subscription.
 *
 * Syntax:
 * ```
 * az storage account show-usage --location
 *                               [--subscription]
 * ```
 *
 * @param {string} location Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`.
 */
declare class az_storage_account_show_usage_command_builder extends CommandBuilder<az_storage_account_show_usage_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, location: string);
    /** Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`. */
    location(value: string): az_storage_account_show_usage_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_storage_account_show_usage_command_builder;
}
/**
 * Update the properties of a storage account.
 *
 * Syntax:
 * ```
 * az storage account update [--access-tier {Cool, Hot}]
 *                           [--add]
 *                           [--allow-blob-public-access {false, true}]
 *                           [--assign-identity]
 *                           [--azure-storage-sid]
 *                           [--bypass {AzureServices, Logging, Metrics, None}]
 *                           [--custom-domain]
 *                           [--default-action {Allow, Deny}]
 *                           [--domain-guid]
 *                           [--domain-name]
 *                           [--domain-sid]
 *                           [--enable-files-aadds {false, true}]
 *                           [--enable-files-adds {false, true}]
 *                           [--enable-large-file-share]
 *                           [--encryption-key-name]
 *                           [--encryption-key-source {Microsoft.Keyvault, Microsoft.Storage}]
 *                           [--encryption-key-vault]
 *                           [--encryption-key-version]
 *                           [--encryption-services {blob, file, queue, table}]
 *                           [--force-string]
 *                           [--forest-name]
 *                           [--https-only {false, true}]
 *                           [--ids]
 *                           [--min-tls-version {TLS1_0, TLS1_1, TLS1_2}]
 *                           [--name]
 *                           [--net-bios-domain-name]
 *                           [--publish-internet-endpoints {false, true}]
 *                           [--publish-microsoft-endpoints {false, true}]
 *                           [--remove]
 *                           [--resource-group]
 *                           [--routing-choice {InternetRouting, MicrosoftRouting}]
 *                           [--set]
 *                           [--sku {Premium_LRS, Premium_ZRS, Standard_GRS, Standard_GZRS, Standard_LRS, Standard_RAGRS, Standard_RAGZRS, Standard_ZRS}]
 *                           [--subscription]
 *                           [--tags]
 *                           [--use-subdomain {false, true}]
 * ```
 */
declare class az_storage_account_update_command_builder extends CommandBuilder<az_storage_account_update_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** The access tier used for billing StandardBlob accounts. Cannot be set for StandardLRS, StandardGRS, StandardRAGRS, or PremiumLRS account types. It is required for StandardBlob accounts during creation. */
    accessTier(value: 'Cool' | 'Hot'): az_storage_account_update_command_builder;
    /** Add an object to a list of objects by specifying a path and key value pairs.  Example: --add property.listProperty <key=value, string or JSON string>. */
    add(value: string): az_storage_account_update_command_builder;
    /** Allow or disallow public access to all blobs or containers in the storage account. The default value for this property is null, which is equivalent to true. When true, containers in the account may be configured for public access. Note that setting this property to true does not enable anonymous access to any data in the account. The additional step of configuring the public access setting for a container is required to enable anonymous access. */
    allowBlobPublicAccess(value: boolean): az_storage_account_update_command_builder;
    /** Generate and assign a new Storage Account Identity for this storage account for use with key management services like Azure KeyVault. */
    assignIdentity(value: string): az_storage_account_update_command_builder;
    /** Specify the security identifier (SID) for Azure Storage. Required when --enable-files-adds is set to True. */
    azureStorageSid(value: string): az_storage_account_update_command_builder;
    /** Bypass traffic for space-separated uses. */
    bypass(value: 'AzureServices' | 'Logging' | 'Metrics' | 'None'): az_storage_account_update_command_builder;
    /** User domain assigned to the storage account. Name is the CNAME source. Use "" to clear existing value. */
    customDomain(value: string): az_storage_account_update_command_builder;
    /** Default action to apply when no rule matches. */
    defaultAction(value: 'Allow' | 'Deny'): az_storage_account_update_command_builder;
    /** Specify the domain GUID. Required when --enable-files-adds is set to True. */
    domainGuid(value: string): az_storage_account_update_command_builder;
    /** Specify the primary domain that the AD DNS server is authoritative for. Required when --enable-files-adds is set to True. */
    domainName(value: string): az_storage_account_update_command_builder;
    /** Specify the security identifier (SID). Required when --enable-files-adds is set to True. */
    domainSid(value: string): az_storage_account_update_command_builder;
    /** Enable Azure Active Directory Domain Services authentication for Azure Files. */
    enableFilesAadds(value: boolean): az_storage_account_update_command_builder;
    /** Enable Azure Files Active Directory Domain Service Authentication for storage account. When --enable-files-adds is set to true, Azure Active Directory Properties arguments must be provided. */
    enableFilesAdds(value: boolean): az_storage_account_update_command_builder;
    /** Enable the capability to support large file shares with more than 5 TiB capacity for storage account.Once the property is enabled, the feature cannot be disabled. Currently only supported for LRS and ZRS replication types, hence account conversions to geo-redundant accounts would not be possible. For more information, please refer to <a href="https://go.microsoft.com/fwlink/?linkid=2086047">https://go.microsoft.com/fwlink/?linkid=2086047</a>. */
    enableLargeFileShare(value: string): az_storage_account_update_command_builder;
    /** The name of the KeyVault key. */
    encryptionKeyName(value: string): az_storage_account_update_command_builder;
    /** The default encryption key source. */
    encryptionKeySource(value: 'Microsoft.Keyvault' | 'Microsoft.Storage'): az_storage_account_update_command_builder;
    /** The Uri of the KeyVault. */
    encryptionKeyVault(value: string): az_storage_account_update_command_builder;
    /** The version of the KeyVault key to use, which will opt out of implicit key rotation. Please use "" to opt in key auto-rotation again. */
    encryptionKeyVersion(value: string): az_storage_account_update_command_builder;
    /** Specifies which service(s) to encrypt. */
    encryptionServices(value: 'blob' | 'file' | 'queue' | 'table'): az_storage_account_update_command_builder;
    /** When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON. */
    forceString(value: string): az_storage_account_update_command_builder;
    /** Specify the Active Directory forest to get. Required when --enable-files-adds is set to True. */
    forestName(value: string): az_storage_account_update_command_builder;
    /** Allows https traffic only to storage service. */
    httpsOnly(value: boolean): az_storage_account_update_command_builder;
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_storage_account_update_command_builder;
    /** The minimum TLS version to be permitted on requests to storage. The default interpretation is TLS 1.0 for this property. */
    minTlsVersion(value: 'TLS1_0' | 'TLS1_1' | 'TLS1_2'): az_storage_account_update_command_builder;
    /** The storage account name. */
    name(value: string): az_storage_account_update_command_builder;
    /** Specify the NetBIOS domain name. Required when --enable-files-adds is set to True. */
    netBiosDomainName(value: string): az_storage_account_update_command_builder;
    /** A boolean flag which indicates whether internet routing storage endpoints are to be published. */
    publishInternetEndpoints(value: boolean): az_storage_account_update_command_builder;
    /** A boolean flag which indicates whether microsoft routing storage endpoints are to be published. */
    publishMicrosoftEndpoints(value: boolean): az_storage_account_update_command_builder;
    /** Remove a property or an element from a list.  Example: --remove property.list <indexToRemove> OR --remove propertyToRemove. */
    remove(value: string): az_storage_account_update_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_storage_account_update_command_builder;
    /** Routing Choice defines the kind of network routing opted by the user. */
    routingChoice(value: 'InternetRouting' | 'MicrosoftRouting'): az_storage_account_update_command_builder;
    /** Update an object by specifying a property path and value to set.  Example: --set property1.property2=<value>. */
    set(value: string): az_storage_account_update_command_builder;
    /** The storage account SKU. */
    sku(value: 'Premium_LRS' | 'Premium_ZRS' | 'Standard_GRS' | 'Standard_GZRS' | 'Standard_LRS' | 'Standard_RAGRS' | 'Standard_RAGZRS' | 'Standard_ZRS'): az_storage_account_update_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_storage_account_update_command_builder;
    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    tags(value: string): az_storage_account_update_command_builder;
    /** Specify whether to use indirect CNAME validation. */
    useSubdomain(value: boolean): az_storage_account_update_command_builder;
}
/**
 * Aborts a pending copy_blob operation, and leaves a destination blob with zero length and full metadata.
 *
 * Syntax:
 * ```
 * az storage blob copy cancel --copy-id
 *                             --destination-blob
 *                             --destination-container
 *                             [--account-key]
 *                             [--account-name]
 *                             [--auth-mode {key, login}]
 *                             [--connection-string]
 *                             [--lease-id]
 *                             [--sas-token]
 *                             [--subscription]
 *                             [--timeout]
 * ```
 *
 * @param {string} copyId Copy identifier provided in the copy.id of the original copy_blob operation.
 * @param {string} destinationBlob Name of the destination blob. If the exists, it will be overwritten.
 * @param {string} destinationContainer The container name.
 */
declare class az_storage_blob_copy_cancel_command_builder extends CommandBuilder<az_storage_blob_copy_cancel_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, copyId: string, destinationBlob: string, destinationContainer: string);
    /** Copy identifier provided in the copy.id of the original copy_blob operation. */
    copyId(value: string): az_storage_blob_copy_cancel_command_builder;
    /** Name of the destination blob. If the exists, it will be overwritten. */
    destinationBlob(value: string): az_storage_blob_copy_cancel_command_builder;
    /** The container name. */
    destinationContainer(value: string): az_storage_blob_copy_cancel_command_builder;
    /** Storage account key. Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_KEY. */
    accountKey(value: string): az_storage_blob_copy_cancel_command_builder;
    /** Storage account name. Related environment variable: AZURE_STORAGE_ACCOUNT. Must be used in conjunction with either storage account key or a SAS token. If neither are present, the command will try to query the storage account key using the authenticated Azure account. If a large number of storage commands are executed the API quota may be hit. */
    accountName(value: string): az_storage_blob_copy_cancel_command_builder;
    /** The mode in which to run the command. "login" mode will directly use your login credentials for the authentication. The legacy "key" mode will attempt to query for an account key if no authentication parameters for the account are provided. Environment variable: AZURE_STORAGE_AUTH_MODE. */
    authMode(value: 'key' | 'login'): az_storage_blob_copy_cancel_command_builder;
    /** Storage account connection string. Environment variable: AZURE_STORAGE_CONNECTION_STRING. */
    connectionString(value: string): az_storage_blob_copy_cancel_command_builder;
    /** Required if the destination blob has an active infinite lease. */
    leaseId(value: string): az_storage_blob_copy_cancel_command_builder;
    /** A Shared Access Signature (SAS). Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_SAS_TOKEN. */
    sasToken(value: string): az_storage_blob_copy_cancel_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_storage_blob_copy_cancel_command_builder;
    /** Request timeout in seconds. Applies to each call to the service. */
    timeout(value: string): az_storage_blob_copy_cancel_command_builder;
}
/**
 * Copies a blob asynchronously. Use `az storage blob show` to check the status of the blobs.
 *
 * Syntax:
 * ```
 * az storage blob copy start --destination-blob
 *                            --destination-container
 *                            [--account-key]
 *                            [--account-name]
 *                            [--auth-mode {key, login}]
 *                            [--connection-string]
 *                            [--destination-if-match]
 *                            [--destination-if-modified-since]
 *                            [--destination-if-none-match]
 *                            [--destination-if-unmodified-since]
 *                            [--destination-lease-id]
 *                            [--metadata]
 *                            [--requires-sync]
 *                            [--sas-token]
 *                            [--source-account-key]
 *                            [--source-account-name]
 *                            [--source-blob]
 *                            [--source-container]
 *                            [--source-if-match]
 *                            [--source-if-modified-since]
 *                            [--source-if-none-match]
 *                            [--source-if-unmodified-since]
 *                            [--source-lease-id]
 *                            [--source-path]
 *                            [--source-sas]
 *                            [--source-share]
 *                            [--source-snapshot]
 *                            [--source-uri]
 *                            [--subscription]
 *                            [--timeout]
 * ```
 *
 * @param {string} destinationBlob Name of the destination blob. If the exists, it will be overwritten.
 * @param {string} destinationContainer The container name.
 */
declare class az_storage_blob_copy_start_command_builder extends CommandBuilder<az_storage_blob_copy_start_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, destinationBlob: string, destinationContainer: string);
    /** Name of the destination blob. If the exists, it will be overwritten. */
    destinationBlob(value: string): az_storage_blob_copy_start_command_builder;
    /** The container name. */
    destinationContainer(value: string): az_storage_blob_copy_start_command_builder;
    /** Storage account key. Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_KEY. */
    accountKey(value: string): az_storage_blob_copy_start_command_builder;
    /** Storage account name. Related environment variable: AZURE_STORAGE_ACCOUNT. Must be used in conjunction with either storage account key or a SAS token. If neither are present, the command will try to query the storage account key using the authenticated Azure account. If a large number of storage commands are executed the API quota may be hit. */
    accountName(value: string): az_storage_blob_copy_start_command_builder;
    /** The mode in which to run the command. "login" mode will directly use your login credentials for the authentication. The legacy "key" mode will attempt to query for an account key if no authentication parameters for the account are provided. Environment variable: AZURE_STORAGE_AUTH_MODE. */
    authMode(value: 'key' | 'login'): az_storage_blob_copy_start_command_builder;
    /** Storage account connection string. Environment variable: AZURE_STORAGE_CONNECTION_STRING. */
    connectionString(value: string): az_storage_blob_copy_start_command_builder;
    /** An ETag value, or the wildcard character (\*). Specify an ETag value for this conditional header to copy the blob only if the specified ETag value matches the ETag value for an existing destination blob. If the ETag for the destination blob does not match the ETag specified for If-Match, the Blob service returns status code 412 (Precondition Failed). */
    destinationIfMatch(value: string): az_storage_blob_copy_start_command_builder;
    /** A DateTime value. Azure expects the date value passed in to be UTC. If timezone is included, any non-UTC datetimes will be converted to UTC. If a date is passed in without timezone info, it is assumed to be UTC. Specify this conditional header to copy the blob only if the destination blob has been modified since the specified date/time. If the destination blob has not been modified, the Blob service returns status code 412 (Precondition Failed). */
    destinationIfModifiedSince(value: string): az_storage_blob_copy_start_command_builder;
    /** An ETag value, or the wildcard character (\*). Specify an ETag value for this conditional header to copy the blob only if the specified ETag value does not match the ETag value for the destination blob. Specify the wildcard character (\*) to perform the operation only if the destination blob does not exist. If the specified condition isn't met, the Blob service returns status code 412 (Precondition Failed). */
    destinationIfNoneMatch(value: string): az_storage_blob_copy_start_command_builder;
    /** A DateTime value. Azure expects the date value passed in to be UTC. If timezone is included, any non-UTC datetimes will be converted to UTC. If a date is passed in without timezone info, it is assumed to be UTC. Specify this conditional header to copy the blob only if the destination blob has not been modified since the specified date/time. If the destination blob has been modified, the Blob service returns status code 412 (Precondition Failed). */
    destinationIfUnmodifiedSince(value: string): az_storage_blob_copy_start_command_builder;
    /** The lease ID specified for this header must match the lease ID of the destination blob. If the request does not include the lease ID or it is not valid, the operation fails with status code 412 (Precondition Failed). */
    destinationLeaseId(value: string): az_storage_blob_copy_start_command_builder;
    /** Metadata in space-separated key=value pairs. This overwrites any existing metadata. */
    metadata(value: string): az_storage_blob_copy_start_command_builder;
    /** Enforces that the service will not return a response until the copy is complete. */
    requiresSync(value: string): az_storage_blob_copy_start_command_builder;
    /** A Shared Access Signature (SAS). Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_SAS_TOKEN. */
    sasToken(value: string): az_storage_blob_copy_start_command_builder;
    /** The storage account key of the source blob. */
    sourceAccountKey(value: string): az_storage_blob_copy_start_command_builder;
    /** The storage account name of the source blob. */
    sourceAccountName(value: string): az_storage_blob_copy_start_command_builder;
    /** The blob name for the source storage account. */
    sourceBlob(value: string): az_storage_blob_copy_start_command_builder;
    /** The container name for the source storage account. */
    sourceContainer(value: string): az_storage_blob_copy_start_command_builder;
    /** An ETag value, or the wildcard character (\*). Specify this conditional header to copy the source blob only if its ETag matches the value specified. If the ETag values do not match, the Blob service returns status code 412 (Precondition Failed). This header cannot be specified if the source is an Azure File. */
    sourceIfMatch(value: string): az_storage_blob_copy_start_command_builder;
    /** A DateTime value. Azure expects the date value passed in to be UTC. If timezone is included, any non-UTC datetimes will be converted to UTC. If a date is passed in without timezone info, it is assumed to be UTC. Specify this conditional header to copy the blob only if the source blob has been modified since the specified date/time. */
    sourceIfModifiedSince(value: string): az_storage_blob_copy_start_command_builder;
    /** An ETag value, or the wildcard character (\*). Specify this conditional header to copy the blob only if its ETag does not match the value specified. If the values are identical, the Blob service returns status code 412 (Precondition Failed). This header cannot be specified if the source is an Azure File. */
    sourceIfNoneMatch(value: string): az_storage_blob_copy_start_command_builder;
    /** A DateTime value. Azure expects the date value passed in to be UTC. If timezone is included, any non-UTC datetimes will be converted to UTC. If a date is passed in without timezone info, it is assumed to be UTC. Specify this conditional header to copy the blob only if the source blob has not been modified since the specified date/time. */
    sourceIfUnmodifiedSince(value: string): az_storage_blob_copy_start_command_builder;
    /** Specify this to perform the Copy Blob operation only if the lease ID given matches the active lease ID of the source blob. */
    sourceLeaseId(value: string): az_storage_blob_copy_start_command_builder;
    /** The file path for the source storage account. */
    sourcePath(value: string): az_storage_blob_copy_start_command_builder;
    /** The shared access signature for the source storage account. */
    sourceSas(value: string): az_storage_blob_copy_start_command_builder;
    /** The share name for the source storage account. */
    sourceShare(value: string): az_storage_blob_copy_start_command_builder;
    /** The blob snapshot for the source storage account. */
    sourceSnapshot(value: string): az_storage_blob_copy_start_command_builder;
    /** A URL of up to 2 KB in length that specifies an Azure file or blob. The value should be URL-encoded as it would appear in a request URI. If the source is in another account, the source must either be public or must be authenticated via a shared access signature. If the source is public, no authentication is required. Examples: `https://myaccount.blob.core.windows.net/mycontainer/myblob`, `https://myaccount.blob.core.windows.net/mycontainer/myblob?snapshot=<DateTime>`, `https://otheraccount.blob.core.windows.net/mycontainer/myblob?sastoken`. */
    sourceUri(value: string): az_storage_blob_copy_start_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_storage_blob_copy_start_command_builder;
    /** Request timeout in seconds. Applies to each call to the service. */
    timeout(value: string): az_storage_blob_copy_start_command_builder;
}
/**
 * Copy multiple blobs to a blob container. Use `az storage blob show` to check the status of the blobs.
 *
 * Syntax:
 * ```
 * az storage blob copy start-batch [--account-key]
 *                                  [--account-name]
 *                                  [--auth-mode {key, login}]
 *                                  [--connection-string]
 *                                  [--destination-container]
 *                                  [--destination-path]
 *                                  [--dryrun]
 *                                  [--pattern]
 *                                  [--sas-token]
 *                                  [--source-account-key]
 *                                  [--source-account-name]
 *                                  [--source-container]
 *                                  [--source-sas]
 *                                  [--source-share]
 *                                  [--source-uri]
 *                                  [--subscription]
 * ```
 */
declare class az_storage_blob_copy_start_batch_command_builder extends CommandBuilder<az_storage_blob_copy_start_batch_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** Storage account key. Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_KEY. */
    accountKey(value: string): az_storage_blob_copy_start_batch_command_builder;
    /** Storage account name. Related environment variable: AZURE_STORAGE_ACCOUNT. Must be used in conjunction with either storage account key or a SAS token. If neither are present, the command will try to query the storage account key using the authenticated Azure account. If a large number of storage commands are executed the API quota may be hit. */
    accountName(value: string): az_storage_blob_copy_start_batch_command_builder;
    /** The mode in which to run the command. "login" mode will directly use your login credentials for the authentication. The legacy "key" mode will attempt to query for an account key if no authentication parameters for the account are provided. Environment variable: AZURE_STORAGE_AUTH_MODE. */
    authMode(value: 'key' | 'login'): az_storage_blob_copy_start_batch_command_builder;
    /** Storage account connection string. Environment variable: AZURE_STORAGE_CONNECTION_STRING. */
    connectionString(value: string): az_storage_blob_copy_start_batch_command_builder;
    /** The blob container where the selected source files or blobs will be copied to. */
    destinationContainer(value: string): az_storage_blob_copy_start_batch_command_builder;
    /** The destination path that will be appended to the blob name. */
    destinationPath(value: string): az_storage_blob_copy_start_batch_command_builder;
    /** List the files or blobs to be uploaded. No actual data transfer will occur. */
    dryrun(value: string): az_storage_blob_copy_start_batch_command_builder;
    /** The pattern used for globbing files or blobs in the source. The supported patterns are '\*', '?', '[seq]', and '[!seq]'. For more information, please refer to <a href="https://docs.python.org/3.7/library/fnmatch.html">https://docs.python.org/3.7/library/fnmatch.html</a>. */
    pattern(value: string): az_storage_blob_copy_start_batch_command_builder;
    /** A Shared Access Signature (SAS). Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_SAS_TOKEN. */
    sasToken(value: string): az_storage_blob_copy_start_batch_command_builder;
    /** The account key for the source storage account. */
    sourceAccountKey(value: string): az_storage_blob_copy_start_batch_command_builder;
    /** The source storage account from which the files or blobs are copied to the destination. If omitted, the source account is used. */
    sourceAccountName(value: string): az_storage_blob_copy_start_batch_command_builder;
    /** The source container from which blobs are copied. */
    sourceContainer(value: string): az_storage_blob_copy_start_batch_command_builder;
    /** The shared access signature for the source storage account. */
    sourceSas(value: string): az_storage_blob_copy_start_batch_command_builder;
    /** The source share from which files are copied. */
    sourceShare(value: string): az_storage_blob_copy_start_batch_command_builder;
    /** A URI specifying a file share or blob container from which the files or blobs are copied. */
    sourceUri(value: string): az_storage_blob_copy_start_batch_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_storage_blob_copy_start_batch_command_builder;
}
/**
 * Aborts a pending copy_blob operation, and leaves a destination blob with zero length and full metadata.
 *
 * Syntax:
 * ```
 * az storage blob incremental-copy cancel --container-name
 *                                         --copy-id
 *                                         --name
 *                                         [--account-key]
 *                                         [--account-name]
 *                                         [--auth-mode {key, login}]
 *                                         [--connection-string]
 *                                         [--lease-id]
 *                                         [--sas-token]
 *                                         [--subscription]
 *                                         [--timeout]
 * ```
 *
 * @param {string} containerName The container name.
 * @param {string} copyId Copy identifier provided in the copy.id of the original copy_blob operation.
 * @param {string} name The blob name.
 */
declare class az_storage_blob_incremental_copy_cancel_command_builder extends CommandBuilder<az_storage_blob_incremental_copy_cancel_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, containerName: string, copyId: string, name: string);
    /** The container name. */
    containerName(value: string): az_storage_blob_incremental_copy_cancel_command_builder;
    /** Copy identifier provided in the copy.id of the original copy_blob operation. */
    copyId(value: string): az_storage_blob_incremental_copy_cancel_command_builder;
    /** The blob name. */
    name(value: string): az_storage_blob_incremental_copy_cancel_command_builder;
    /** Storage account key. Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_KEY. */
    accountKey(value: string): az_storage_blob_incremental_copy_cancel_command_builder;
    /** Storage account name. Related environment variable: AZURE_STORAGE_ACCOUNT. Must be used in conjunction with either storage account key or a SAS token. If neither are present, the command will try to query the storage account key using the authenticated Azure account. If a large number of storage commands are executed the API quota may be hit. */
    accountName(value: string): az_storage_blob_incremental_copy_cancel_command_builder;
    /** The mode in which to run the command. "login" mode will directly use your login credentials for the authentication. The legacy "key" mode will attempt to query for an account key if no authentication parameters for the account are provided. Environment variable: AZURE_STORAGE_AUTH_MODE. */
    authMode(value: 'key' | 'login'): az_storage_blob_incremental_copy_cancel_command_builder;
    /** Storage account connection string. Environment variable: AZURE_STORAGE_CONNECTION_STRING. */
    connectionString(value: string): az_storage_blob_incremental_copy_cancel_command_builder;
    /** Required if the destination blob has an active infinite lease. */
    leaseId(value: string): az_storage_blob_incremental_copy_cancel_command_builder;
    /** A Shared Access Signature (SAS). Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_SAS_TOKEN. */
    sasToken(value: string): az_storage_blob_incremental_copy_cancel_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_storage_blob_incremental_copy_cancel_command_builder;
    /** Request timeout in seconds. Applies to each call to the service. */
    timeout(value: string): az_storage_blob_incremental_copy_cancel_command_builder;
}
/**
 * Copies an incremental copy of a blob asynchronously.
 *
 * Syntax:
 * ```
 * az storage blob incremental-copy start --destination-blob
 *                                        --destination-container
 *                                        [--account-key]
 *                                        [--account-name]
 *                                        [--auth-mode {key, login}]
 *                                        [--connection-string]
 *                                        [--destination-if-match]
 *                                        [--destination-if-modified-since]
 *                                        [--destination-if-none-match]
 *                                        [--destination-if-unmodified-since]
 *                                        [--destination-lease-id]
 *                                        [--metadata]
 *                                        [--sas-token]
 *                                        [--source-account-key]
 *                                        [--source-account-name]
 *                                        [--source-blob]
 *                                        [--source-container]
 *                                        [--source-lease-id]
 *                                        [--source-sas]
 *                                        [--source-snapshot]
 *                                        [--source-uri]
 *                                        [--subscription]
 *                                        [--timeout]
 * ```
 *
 * @param {string} destinationBlob Name of the destination blob. If the exists, it will be overwritten.
 * @param {string} destinationContainer The container name.
 */
declare class az_storage_blob_incremental_copy_start_command_builder extends CommandBuilder<az_storage_blob_incremental_copy_start_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, destinationBlob: string, destinationContainer: string);
    /** Name of the destination blob. If the exists, it will be overwritten. */
    destinationBlob(value: string): az_storage_blob_incremental_copy_start_command_builder;
    /** The container name. */
    destinationContainer(value: string): az_storage_blob_incremental_copy_start_command_builder;
    /** Storage account key. Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_KEY. */
    accountKey(value: string): az_storage_blob_incremental_copy_start_command_builder;
    /** Storage account name. Related environment variable: AZURE_STORAGE_ACCOUNT. Must be used in conjunction with either storage account key or a SAS token. If neither are present, the command will try to query the storage account key using the authenticated Azure account. If a large number of storage commands are executed the API quota may be hit. */
    accountName(value: string): az_storage_blob_incremental_copy_start_command_builder;
    /** The mode in which to run the command. "login" mode will directly use your login credentials for the authentication. The legacy "key" mode will attempt to query for an account key if no authentication parameters for the account are provided. Environment variable: AZURE_STORAGE_AUTH_MODE. */
    authMode(value: 'key' | 'login'): az_storage_blob_incremental_copy_start_command_builder;
    /** Storage account connection string. Environment variable: AZURE_STORAGE_CONNECTION_STRING. */
    connectionString(value: string): az_storage_blob_incremental_copy_start_command_builder;
    /** An ETag value, or the wildcard character (\*). Specify an ETag value for this conditional header to copy the blob only if the specified ETag value matches the ETag value for an existing destination blob. If the ETag for the destination blob does not match the ETag specified for If-Match, the Blob service returns status code 412 (Precondition Failed). */
    destinationIfMatch(value: string): az_storage_blob_incremental_copy_start_command_builder;
    /** A DateTime value. Azure expects the date value passed in to be UTC. If timezone is included, any non-UTC datetimes will be converted to UTC. If a date is passed in without timezone info, it is assumed to be UTC. Specify this conditional header to copy the blob only if the destination blob has been modified since the specified date/time. If the destination blob has not been modified, the Blob service returns status code 412 (Precondition Failed). */
    destinationIfModifiedSince(value: string): az_storage_blob_incremental_copy_start_command_builder;
    /** An ETag value, or the wildcard character (\*). Specify an ETag value for this conditional header to copy the blob only if the specified ETag value does not match the ETag value for the destination blob. Specify the wildcard character (\*) to perform the operation only if the destination blob does not exist. If the specified condition isn't met, the Blob service returns status code 412 (Precondition Failed). */
    destinationIfNoneMatch(value: string): az_storage_blob_incremental_copy_start_command_builder;
    /** A DateTime value. Azure expects the date value passed in to be UTC. If timezone is included, any non-UTC datetimes will be converted to UTC. If a date is passed in without timezone info, it is assumed to be UTC. Specify this conditional header to copy the blob only if the destination blob has not been modified since the specified ate/time. If the destination blob has been modified, the Blob service returns status code 412 (Precondition Failed). */
    destinationIfUnmodifiedSince(value: string): az_storage_blob_incremental_copy_start_command_builder;
    /** The lease ID specified for this header must match the lease ID of the destination blob. If the request does not include the lease ID or it is not valid, the operation fails with status code 412 (Precondition Failed). */
    destinationLeaseId(value: string): az_storage_blob_incremental_copy_start_command_builder;
    /** Metadata in space-separated key=value pairs. This overwrites any existing metadata. */
    metadata(value: string): az_storage_blob_incremental_copy_start_command_builder;
    /** A Shared Access Signature (SAS). Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_SAS_TOKEN. */
    sasToken(value: string): az_storage_blob_incremental_copy_start_command_builder;
    /** The storage account key of the source blob. */
    sourceAccountKey(value: string): az_storage_blob_incremental_copy_start_command_builder;
    /** The storage account name of the source blob. */
    sourceAccountName(value: string): az_storage_blob_incremental_copy_start_command_builder;
    /** The blob name for the source storage account. */
    sourceBlob(value: string): az_storage_blob_incremental_copy_start_command_builder;
    /** The container name for the source storage account. */
    sourceContainer(value: string): az_storage_blob_incremental_copy_start_command_builder;
    /** Specify this to perform the Copy Blob operation only if the lease ID given matches the active lease ID of the source blob. */
    sourceLeaseId(value: string): az_storage_blob_incremental_copy_start_command_builder;
    /** The shared access signature for the source storage account. */
    sourceSas(value: string): az_storage_blob_incremental_copy_start_command_builder;
    /** The blob snapshot for the source storage account. */
    sourceSnapshot(value: string): az_storage_blob_incremental_copy_start_command_builder;
    /** A URL of up to 2 KB in length that specifies an Azure page blob. The value should be URL-encoded as it would appear in a request URI. The copy source must be a snapshot and include a valid SAS token or be public. Example: `https://myaccount.blob.core.windows.net/mycontainer/myblob?snapshot=<DateTime>&sastoken`. */
    sourceUri(value: string): az_storage_blob_incremental_copy_start_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_storage_blob_incremental_copy_start_command_builder;
    /** Request timeout in seconds. Applies to each call to the service. */
    timeout(value: string): az_storage_blob_incremental_copy_start_command_builder;
}
/**
 * Request a new lease.
 *
 * Syntax:
 * ```
 * az storage blob lease acquire --blob-name
 *                               --container-name
 *                               [--account-key]
 *                               [--account-name]
 *                               [--auth-mode {key, login}]
 *                               [--connection-string]
 *                               [--if-match]
 *                               [--if-modified-since]
 *                               [--if-none-match]
 *                               [--if-unmodified-since]
 *                               [--lease-duration]
 *                               [--proposed-lease-id]
 *                               [--sas-token]
 *                               [--subscription]
 *                               [--timeout]
 * ```
 *
 * @param {string} blobName The blob name.
 * @param {string} containerName The container name.
 */
declare class az_storage_blob_lease_acquire_command_builder extends CommandBuilder<az_storage_blob_lease_acquire_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, blobName: string, containerName: string);
    /** The blob name. */
    blobName(value: string): az_storage_blob_lease_acquire_command_builder;
    /** The container name. */
    containerName(value: string): az_storage_blob_lease_acquire_command_builder;
    /** Storage account key. Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_KEY. */
    accountKey(value: string): az_storage_blob_lease_acquire_command_builder;
    /** Storage account name. Related environment variable: AZURE_STORAGE_ACCOUNT. Must be used in conjunction with either storage account key or a SAS token. If neither are present, the command will try to query the storage account key using the authenticated Azure account. If a large number of storage commands are executed the API quota may be hit. */
    accountName(value: string): az_storage_blob_lease_acquire_command_builder;
    /** The mode in which to run the command. "login" mode will directly use your login credentials for the authentication. The legacy "key" mode will attempt to query for an account key if no authentication parameters for the account are provided. Environment variable: AZURE_STORAGE_AUTH_MODE. */
    authMode(value: 'key' | 'login'): az_storage_blob_lease_acquire_command_builder;
    /** Storage account connection string. Environment variable: AZURE_STORAGE_CONNECTION_STRING. */
    connectionString(value: string): az_storage_blob_lease_acquire_command_builder;
    /** An ETag value, or the wildcard character (\*). Specify this header to perform the operation only if the resource's ETag matches the value specified. */
    ifMatch(value: string): az_storage_blob_lease_acquire_command_builder;
    /** Commence only if modified since supplied UTC datetime (Y-m-d'T'H:M'Z'). */
    ifModifiedSince(value: string): az_storage_blob_lease_acquire_command_builder;
    /** An ETag value, or the wildcard character (\*). Specify this header to perform the operation only if the resource's ETag does not match the value specified. Specify the wildcard character (\*) to perform the operation only if the resource does not exist, and fail the operation if it does exist. */
    ifNoneMatch(value: string): az_storage_blob_lease_acquire_command_builder;
    /** Commence only if unmodified since supplied UTC datetime (Y-m-d'T'H:M'Z'). */
    ifUnmodifiedSince(value: string): az_storage_blob_lease_acquire_command_builder;
    /** Specify the duration of the lease, in seconds, or negative one (-1) for a lease that never expires. A non-infinite lease can be between 15 and 60 seconds. A lease duration cannot be changed using renew or change. Default is -1 (infinite lease). */
    leaseDuration(value: string): az_storage_blob_lease_acquire_command_builder;
    /** Proposed lease ID, in a GUID string format. The Blob service returns 400 (Invalid request) if the proposed lease ID is not in the correct format. */
    proposedLeaseId(value: string): az_storage_blob_lease_acquire_command_builder;
    /** A Shared Access Signature (SAS). Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_SAS_TOKEN. */
    sasToken(value: string): az_storage_blob_lease_acquire_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_storage_blob_lease_acquire_command_builder;
    /** Request timeout in seconds. Applies to each call to the service. */
    timeout(value: string): az_storage_blob_lease_acquire_command_builder;
}
/**
 * Break the lease, if the container or blob has an active lease.
 *
 * Syntax:
 * ```
 * az storage blob lease break --blob-name
 *                             --container-name
 *                             [--account-key]
 *                             [--account-name]
 *                             [--auth-mode {key, login}]
 *                             [--connection-string]
 *                             [--if-match]
 *                             [--if-modified-since]
 *                             [--if-none-match]
 *                             [--if-unmodified-since]
 *                             [--lease-break-period]
 *                             [--sas-token]
 *                             [--subscription]
 *                             [--timeout]
 * ```
 *
 * @param {string} blobName The blob name.
 * @param {string} containerName The container name.
 */
declare class az_storage_blob_lease_break_command_builder extends CommandBuilder<az_storage_blob_lease_break_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, blobName: string, containerName: string);
    /** The blob name. */
    blobName(value: string): az_storage_blob_lease_break_command_builder;
    /** The container name. */
    containerName(value: string): az_storage_blob_lease_break_command_builder;
    /** Storage account key. Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_KEY. */
    accountKey(value: string): az_storage_blob_lease_break_command_builder;
    /** Storage account name. Related environment variable: AZURE_STORAGE_ACCOUNT. Must be used in conjunction with either storage account key or a SAS token. If neither are present, the command will try to query the storage account key using the authenticated Azure account. If a large number of storage commands are executed the API quota may be hit. */
    accountName(value: string): az_storage_blob_lease_break_command_builder;
    /** The mode in which to run the command. "login" mode will directly use your login credentials for the authentication. The legacy "key" mode will attempt to query for an account key if no authentication parameters for the account are provided. Environment variable: AZURE_STORAGE_AUTH_MODE. */
    authMode(value: 'key' | 'login'): az_storage_blob_lease_break_command_builder;
    /** Storage account connection string. Environment variable: AZURE_STORAGE_CONNECTION_STRING. */
    connectionString(value: string): az_storage_blob_lease_break_command_builder;
    /** An ETag value, or the wildcard character (\*). Specify this header to perform the operation only if the resource's ETag matches the value specified. */
    ifMatch(value: string): az_storage_blob_lease_break_command_builder;
    /** Commence only if modified since supplied UTC datetime (Y-m-d'T'H:M'Z'). */
    ifModifiedSince(value: string): az_storage_blob_lease_break_command_builder;
    /** An ETag value, or the wildcard character (\*). Specify this header to perform the operation only if the resource's ETag does not match the value specified. Specify the wildcard character (\*) to perform the operation only if the resource does not exist, and fail the operation if it does exist. */
    ifNoneMatch(value: string): az_storage_blob_lease_break_command_builder;
    /** Commence only if unmodified since supplied UTC datetime (Y-m-d'T'H:M'Z'). */
    ifUnmodifiedSince(value: string): az_storage_blob_lease_break_command_builder;
    /** This is the proposed duration of seconds that the lease should continue before it is broken, between 0 and 60 seconds. This break period is only used if it is shorter than the time remaining on the lease. If longer, the time remaining on the lease is used. A new lease will not be available before the break period has expired, but the lease may be held for longer than the break period. If this header does not appear with a break operation, a fixed-duration lease breaks after the remaining lease period elapses, and an infinite lease breaks immediately. */
    leaseBreakPeriod(value: string): az_storage_blob_lease_break_command_builder;
    /** A Shared Access Signature (SAS). Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_SAS_TOKEN. */
    sasToken(value: string): az_storage_blob_lease_break_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_storage_blob_lease_break_command_builder;
    /** Request timeout in seconds. Applies to each call to the service. */
    timeout(value: string): az_storage_blob_lease_break_command_builder;
}
/**
 * Change the lease ID of an active lease.
 *
 * Syntax:
 * ```
 * az storage blob lease change --blob-name
 *                              --container-name
 *                              --lease-id
 *                              --proposed-lease-id
 *                              [--account-key]
 *                              [--account-name]
 *                              [--auth-mode {key, login}]
 *                              [--connection-string]
 *                              [--if-match]
 *                              [--if-modified-since]
 *                              [--if-none-match]
 *                              [--if-unmodified-since]
 *                              [--sas-token]
 *                              [--subscription]
 *                              [--timeout]
 * ```
 *
 * @param {string} blobName The blob name.
 * @param {string} containerName The container name.
 * @param {string} leaseId Required if the blob has an active lease.
 * @param {string} proposedLeaseId Proposed lease ID, in a GUID string format. The Blob service returns 400 (Invalid request) if the proposed lease ID is not in the correct format.
 */
declare class az_storage_blob_lease_change_command_builder extends CommandBuilder<az_storage_blob_lease_change_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, blobName: string, containerName: string, leaseId: string, proposedLeaseId: string);
    /** The blob name. */
    blobName(value: string): az_storage_blob_lease_change_command_builder;
    /** The container name. */
    containerName(value: string): az_storage_blob_lease_change_command_builder;
    /** Required if the blob has an active lease. */
    leaseId(value: string): az_storage_blob_lease_change_command_builder;
    /** Proposed lease ID, in a GUID string format. The Blob service returns 400 (Invalid request) if the proposed lease ID is not in the correct format. */
    proposedLeaseId(value: string): az_storage_blob_lease_change_command_builder;
    /** Storage account key. Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_KEY. */
    accountKey(value: string): az_storage_blob_lease_change_command_builder;
    /** Storage account name. Related environment variable: AZURE_STORAGE_ACCOUNT. Must be used in conjunction with either storage account key or a SAS token. If neither are present, the command will try to query the storage account key using the authenticated Azure account. If a large number of storage commands are executed the API quota may be hit. */
    accountName(value: string): az_storage_blob_lease_change_command_builder;
    /** The mode in which to run the command. "login" mode will directly use your login credentials for the authentication. The legacy "key" mode will attempt to query for an account key if no authentication parameters for the account are provided. Environment variable: AZURE_STORAGE_AUTH_MODE. */
    authMode(value: 'key' | 'login'): az_storage_blob_lease_change_command_builder;
    /** Storage account connection string. Environment variable: AZURE_STORAGE_CONNECTION_STRING. */
    connectionString(value: string): az_storage_blob_lease_change_command_builder;
    /** An ETag value, or the wildcard character (\*). Specify this header to perform the operation only if the resource's ETag matches the value specified. */
    ifMatch(value: string): az_storage_blob_lease_change_command_builder;
    /** Commence only if modified since supplied UTC datetime (Y-m-d'T'H:M'Z'). */
    ifModifiedSince(value: string): az_storage_blob_lease_change_command_builder;
    /** An ETag value, or the wildcard character (\*). Specify this header to perform the operation only if the resource's ETag does not match the value specified. Specify the wildcard character (\*) to perform the operation only if the resource does not exist, and fail the operation if it does exist. */
    ifNoneMatch(value: string): az_storage_blob_lease_change_command_builder;
    /** Commence only if unmodified since supplied UTC datetime (Y-m-d'T'H:M'Z'). */
    ifUnmodifiedSince(value: string): az_storage_blob_lease_change_command_builder;
    /** A Shared Access Signature (SAS). Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_SAS_TOKEN. */
    sasToken(value: string): az_storage_blob_lease_change_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_storage_blob_lease_change_command_builder;
    /** Request timeout in seconds. Applies to each call to the service. */
    timeout(value: string): az_storage_blob_lease_change_command_builder;
}
/**
 * Release the lease.
 *
 * Syntax:
 * ```
 * az storage blob lease release --blob-name
 *                               --container-name
 *                               --lease-id
 *                               [--account-key]
 *                               [--account-name]
 *                               [--auth-mode {key, login}]
 *                               [--connection-string]
 *                               [--if-match]
 *                               [--if-modified-since]
 *                               [--if-none-match]
 *                               [--if-unmodified-since]
 *                               [--sas-token]
 *                               [--subscription]
 *                               [--timeout]
 * ```
 *
 * @param {string} blobName The blob name.
 * @param {string} containerName The container name.
 * @param {string} leaseId Required if the blob has an active lease.
 */
declare class az_storage_blob_lease_release_command_builder extends CommandBuilder<az_storage_blob_lease_release_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, blobName: string, containerName: string, leaseId: string);
    /** The blob name. */
    blobName(value: string): az_storage_blob_lease_release_command_builder;
    /** The container name. */
    containerName(value: string): az_storage_blob_lease_release_command_builder;
    /** Required if the blob has an active lease. */
    leaseId(value: string): az_storage_blob_lease_release_command_builder;
    /** Storage account key. Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_KEY. */
    accountKey(value: string): az_storage_blob_lease_release_command_builder;
    /** Storage account name. Related environment variable: AZURE_STORAGE_ACCOUNT. Must be used in conjunction with either storage account key or a SAS token. If neither are present, the command will try to query the storage account key using the authenticated Azure account. If a large number of storage commands are executed the API quota may be hit. */
    accountName(value: string): az_storage_blob_lease_release_command_builder;
    /** The mode in which to run the command. "login" mode will directly use your login credentials for the authentication. The legacy "key" mode will attempt to query for an account key if no authentication parameters for the account are provided. Environment variable: AZURE_STORAGE_AUTH_MODE. */
    authMode(value: 'key' | 'login'): az_storage_blob_lease_release_command_builder;
    /** Storage account connection string. Environment variable: AZURE_STORAGE_CONNECTION_STRING. */
    connectionString(value: string): az_storage_blob_lease_release_command_builder;
    /** An ETag value, or the wildcard character (\*). Specify this header to perform the operation only if the resource's ETag matches the value specified. */
    ifMatch(value: string): az_storage_blob_lease_release_command_builder;
    /** Commence only if modified since supplied UTC datetime (Y-m-d'T'H:M'Z'). */
    ifModifiedSince(value: string): az_storage_blob_lease_release_command_builder;
    /** An ETag value, or the wildcard character (\*). Specify this header to perform the operation only if the resource's ETag does not match the value specified. Specify the wildcard character (\*) to perform the operation only if the resource does not exist, and fail the operation if it does exist. */
    ifNoneMatch(value: string): az_storage_blob_lease_release_command_builder;
    /** Commence only if unmodified since supplied UTC datetime (Y-m-d'T'H:M'Z'). */
    ifUnmodifiedSince(value: string): az_storage_blob_lease_release_command_builder;
    /** A Shared Access Signature (SAS). Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_SAS_TOKEN. */
    sasToken(value: string): az_storage_blob_lease_release_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_storage_blob_lease_release_command_builder;
    /** Request timeout in seconds. Applies to each call to the service. */
    timeout(value: string): az_storage_blob_lease_release_command_builder;
}
/**
 * Renew the lease.
 *
 * Syntax:
 * ```
 * az storage blob lease renew --blob-name
 *                             --container-name
 *                             --lease-id
 *                             [--account-key]
 *                             [--account-name]
 *                             [--auth-mode {key, login}]
 *                             [--connection-string]
 *                             [--if-match]
 *                             [--if-modified-since]
 *                             [--if-none-match]
 *                             [--if-unmodified-since]
 *                             [--sas-token]
 *                             [--subscription]
 *                             [--timeout]
 * ```
 *
 * @param {string} blobName The blob name.
 * @param {string} containerName The container name.
 * @param {string} leaseId Required if the blob has an active lease.
 */
declare class az_storage_blob_lease_renew_command_builder extends CommandBuilder<az_storage_blob_lease_renew_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, blobName: string, containerName: string, leaseId: string);
    /** The blob name. */
    blobName(value: string): az_storage_blob_lease_renew_command_builder;
    /** The container name. */
    containerName(value: string): az_storage_blob_lease_renew_command_builder;
    /** Required if the blob has an active lease. */
    leaseId(value: string): az_storage_blob_lease_renew_command_builder;
    /** Storage account key. Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_KEY. */
    accountKey(value: string): az_storage_blob_lease_renew_command_builder;
    /** Storage account name. Related environment variable: AZURE_STORAGE_ACCOUNT. Must be used in conjunction with either storage account key or a SAS token. If neither are present, the command will try to query the storage account key using the authenticated Azure account. If a large number of storage commands are executed the API quota may be hit. */
    accountName(value: string): az_storage_blob_lease_renew_command_builder;
    /** The mode in which to run the command. "login" mode will directly use your login credentials for the authentication. The legacy "key" mode will attempt to query for an account key if no authentication parameters for the account are provided. Environment variable: AZURE_STORAGE_AUTH_MODE. */
    authMode(value: 'key' | 'login'): az_storage_blob_lease_renew_command_builder;
    /** Storage account connection string. Environment variable: AZURE_STORAGE_CONNECTION_STRING. */
    connectionString(value: string): az_storage_blob_lease_renew_command_builder;
    /** An ETag value, or the wildcard character (\*). Specify this header to perform the operation only if the resource's ETag matches the value specified. */
    ifMatch(value: string): az_storage_blob_lease_renew_command_builder;
    /** Commence only if modified since supplied UTC datetime (Y-m-d'T'H:M'Z'). */
    ifModifiedSince(value: string): az_storage_blob_lease_renew_command_builder;
    /** An ETag value, or the wildcard character (\*). Specify this header to perform the operation only if the resource's ETag does not match the value specified. Specify the wildcard character (\*) to perform the operation only if the resource does not exist, and fail the operation if it does exist. */
    ifNoneMatch(value: string): az_storage_blob_lease_renew_command_builder;
    /** Commence only if unmodified since supplied UTC datetime (Y-m-d'T'H:M'Z'). */
    ifUnmodifiedSince(value: string): az_storage_blob_lease_renew_command_builder;
    /** A Shared Access Signature (SAS). Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_SAS_TOKEN. */
    sasToken(value: string): az_storage_blob_lease_renew_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_storage_blob_lease_renew_command_builder;
    /** Request timeout in seconds. Applies to each call to the service. */
    timeout(value: string): az_storage_blob_lease_renew_command_builder;
}
/**
 * Returns all user-defined metadata for the specified blob or snapshot.
 *
 * Syntax:
 * ```
 * az storage blob metadata show --container-name
 *                               --name
 *                               [--account-key]
 *                               [--account-name]
 *                               [--auth-mode {key, login}]
 *                               [--connection-string]
 *                               [--if-match]
 *                               [--if-modified-since]
 *                               [--if-none-match]
 *                               [--if-unmodified-since]
 *                               [--lease-id]
 *                               [--query-examples]
 *                               [--sas-token]
 *                               [--snapshot]
 *                               [--subscription]
 *                               [--timeout]
 * ```
 *
 * @param {string} containerName The container name.
 * @param {string} name The blob name.
 */
declare class az_storage_blob_metadata_show_command_builder extends CommandBuilder<az_storage_blob_metadata_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, containerName: string, name: string);
    /** The container name. */
    containerName(value: string): az_storage_blob_metadata_show_command_builder;
    /** The blob name. */
    name(value: string): az_storage_blob_metadata_show_command_builder;
    /** Storage account key. Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_KEY. */
    accountKey(value: string): az_storage_blob_metadata_show_command_builder;
    /** Storage account name. Related environment variable: AZURE_STORAGE_ACCOUNT. Must be used in conjunction with either storage account key or a SAS token. If neither are present, the command will try to query the storage account key using the authenticated Azure account. If a large number of storage commands are executed the API quota may be hit. */
    accountName(value: string): az_storage_blob_metadata_show_command_builder;
    /** The mode in which to run the command. "login" mode will directly use your login credentials for the authentication. The legacy "key" mode will attempt to query for an account key if no authentication parameters for the account are provided. Environment variable: AZURE_STORAGE_AUTH_MODE. */
    authMode(value: 'key' | 'login'): az_storage_blob_metadata_show_command_builder;
    /** Storage account connection string. Environment variable: AZURE_STORAGE_CONNECTION_STRING. */
    connectionString(value: string): az_storage_blob_metadata_show_command_builder;
    /** An ETag value, or the wildcard character (\*). Specify this header to perform the operation only if the resource's ETag matches the value specified. */
    ifMatch(value: string): az_storage_blob_metadata_show_command_builder;
    /** Commence only if modified since supplied UTC datetime (Y-m-d'T'H:M'Z'). */
    ifModifiedSince(value: string): az_storage_blob_metadata_show_command_builder;
    /** An ETag value, or the wildcard character (\*). Specify this header to perform the operation only if the resource's ETag does not match the value specified. Specify the wildcard character (\*) to perform the operation only if the resource does not exist, and fail the operation if it does exist. */
    ifNoneMatch(value: string): az_storage_blob_metadata_show_command_builder;
    /** Commence only if unmodified since supplied UTC datetime (Y-m-d'T'H:M'Z'). */
    ifUnmodifiedSince(value: string): az_storage_blob_metadata_show_command_builder;
    /** Required if the blob has an active lease. */
    leaseId(value: string): az_storage_blob_metadata_show_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_storage_blob_metadata_show_command_builder;
    /** A Shared Access Signature (SAS). Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_SAS_TOKEN. */
    sasToken(value: string): az_storage_blob_metadata_show_command_builder;
    /** The snapshot parameter is an opaque value that, when present, specifies the blob snapshot to retrieve. */
    snapshot(value: string): az_storage_blob_metadata_show_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_storage_blob_metadata_show_command_builder;
    /** Request timeout in seconds. Applies to each call to the service. */
    timeout(value: string): az_storage_blob_metadata_show_command_builder;
}
/**
 * Sets user-defined metadata for the specified blob as one or more name-value pairs.
 *
 * Syntax:
 * ```
 * az storage blob metadata update --container-name
 *                                 --name
 *                                 [--account-key]
 *                                 [--account-name]
 *                                 [--auth-mode {key, login}]
 *                                 [--connection-string]
 *                                 [--if-match]
 *                                 [--if-modified-since]
 *                                 [--if-none-match]
 *                                 [--if-unmodified-since]
 *                                 [--lease-id]
 *                                 [--metadata]
 *                                 [--sas-token]
 *                                 [--subscription]
 *                                 [--timeout]
 * ```
 *
 * @param {string} containerName The container name.
 * @param {string} name The blob name.
 */
declare class az_storage_blob_metadata_update_command_builder extends CommandBuilder<az_storage_blob_metadata_update_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, containerName: string, name: string);
    /** The container name. */
    containerName(value: string): az_storage_blob_metadata_update_command_builder;
    /** The blob name. */
    name(value: string): az_storage_blob_metadata_update_command_builder;
    /** Storage account key. Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_KEY. */
    accountKey(value: string): az_storage_blob_metadata_update_command_builder;
    /** Storage account name. Related environment variable: AZURE_STORAGE_ACCOUNT. Must be used in conjunction with either storage account key or a SAS token. If neither are present, the command will try to query the storage account key using the authenticated Azure account. If a large number of storage commands are executed the API quota may be hit. */
    accountName(value: string): az_storage_blob_metadata_update_command_builder;
    /** The mode in which to run the command. "login" mode will directly use your login credentials for the authentication. The legacy "key" mode will attempt to query for an account key if no authentication parameters for the account are provided. Environment variable: AZURE_STORAGE_AUTH_MODE. */
    authMode(value: 'key' | 'login'): az_storage_blob_metadata_update_command_builder;
    /** Storage account connection string. Environment variable: AZURE_STORAGE_CONNECTION_STRING. */
    connectionString(value: string): az_storage_blob_metadata_update_command_builder;
    /** An ETag value, or the wildcard character (\*). Specify this header to perform the operation only if the resource's ETag matches the value specified. */
    ifMatch(value: string): az_storage_blob_metadata_update_command_builder;
    /** Commence only if modified since supplied UTC datetime (Y-m-d'T'H:M'Z'). */
    ifModifiedSince(value: string): az_storage_blob_metadata_update_command_builder;
    /** An ETag value, or the wildcard character (\*). Specify this header to perform the operation only if the resource's ETag does not match the value specified. Specify the wildcard character (\*) to perform the operation only if the resource does not exist, and fail the operation if it does exist. */
    ifNoneMatch(value: string): az_storage_blob_metadata_update_command_builder;
    /** Commence only if unmodified since supplied UTC datetime (Y-m-d'T'H:M'Z'). */
    ifUnmodifiedSince(value: string): az_storage_blob_metadata_update_command_builder;
    /** Required if the blob has an active lease. */
    leaseId(value: string): az_storage_blob_metadata_update_command_builder;
    /** Metadata in space-separated key=value pairs. This overwrites any existing metadata. */
    metadata(value: string): az_storage_blob_metadata_update_command_builder;
    /** A Shared Access Signature (SAS). Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_SAS_TOKEN. */
    sasToken(value: string): az_storage_blob_metadata_update_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_storage_blob_metadata_update_command_builder;
    /** Request timeout in seconds. Applies to each call to the service. */
    timeout(value: string): az_storage_blob_metadata_update_command_builder;
}
/**
 * Show the storage blob delete-policy.
 *
 * Syntax:
 * ```
 * az storage blob service-properties delete-policy show [--account-key]
 *                                                       [--account-name]
 *                                                       [--auth-mode {key, login}]
 *                                                       [--connection-string]
 *                                                       [--query-examples]
 *                                                       [--sas-token]
 *                                                       [--subscription]
 *                                                       [--timeout]
 * ```
 */
declare class az_storage_blob_service_properties_delete_policy_show_command_builder extends CommandBuilder<az_storage_blob_service_properties_delete_policy_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** Storage account key. Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_KEY. */
    accountKey(value: string): az_storage_blob_service_properties_delete_policy_show_command_builder;
    /** Storage account name. Related environment variable: AZURE_STORAGE_ACCOUNT. Must be used in conjunction with either storage account key or a SAS token. If neither are present, the command will try to query the storage account key using the authenticated Azure account. If a large number of storage commands are executed the API quota may be hit. */
    accountName(value: string): az_storage_blob_service_properties_delete_policy_show_command_builder;
    /** The mode in which to run the command. "login" mode will directly use your login credentials for the authentication. The legacy "key" mode will attempt to query for an account key if no authentication parameters for the account are provided. Environment variable: AZURE_STORAGE_AUTH_MODE. */
    authMode(value: 'key' | 'login'): az_storage_blob_service_properties_delete_policy_show_command_builder;
    /** Storage account connection string. Environment variable: AZURE_STORAGE_CONNECTION_STRING. */
    connectionString(value: string): az_storage_blob_service_properties_delete_policy_show_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_storage_blob_service_properties_delete_policy_show_command_builder;
    /** A Shared Access Signature (SAS). Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_SAS_TOKEN. */
    sasToken(value: string): az_storage_blob_service_properties_delete_policy_show_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_storage_blob_service_properties_delete_policy_show_command_builder;
    /** Request timeout in seconds. Applies to each call to the service. */
    timeout(value: string): az_storage_blob_service_properties_delete_policy_show_command_builder;
}
/**
 * Update the storage blob delete-policy.
 *
 * Syntax:
 * ```
 * az storage blob service-properties delete-policy update [--account-key]
 *                                                         [--account-name]
 *                                                         [--auth-mode {key, login}]
 *                                                         [--connection-string]
 *                                                         [--days-retained]
 *                                                         [--enable {false, true}]
 *                                                         [--sas-token]
 *                                                         [--subscription]
 * ```
 */
declare class az_storage_blob_service_properties_delete_policy_update_command_builder extends CommandBuilder<az_storage_blob_service_properties_delete_policy_update_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** Storage account key. Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_KEY. */
    accountKey(value: string): az_storage_blob_service_properties_delete_policy_update_command_builder;
    /** Storage account name. Related environment variable: AZURE_STORAGE_ACCOUNT. Must be used in conjunction with either storage account key or a SAS token. If neither are present, the command will try to query the storage account key using the authenticated Azure account. If a large number of storage commands are executed the API quota may be hit. */
    accountName(value: string): az_storage_blob_service_properties_delete_policy_update_command_builder;
    /** The mode in which to run the command. "login" mode will directly use your login credentials for the authentication. The legacy "key" mode will attempt to query for an account key if no authentication parameters for the account are provided. Environment variable: AZURE_STORAGE_AUTH_MODE. */
    authMode(value: 'key' | 'login'): az_storage_blob_service_properties_delete_policy_update_command_builder;
    /** Storage account connection string. Environment variable: AZURE_STORAGE_CONNECTION_STRING. */
    connectionString(value: string): az_storage_blob_service_properties_delete_policy_update_command_builder;
    /** Number of days that soft-deleted blob will be retained. Must be in range [1,365]. */
    daysRetained(value: string): az_storage_blob_service_properties_delete_policy_update_command_builder;
    /** Enables/disables soft-delete. */
    enable(value: boolean): az_storage_blob_service_properties_delete_policy_update_command_builder;
    /** A Shared Access Signature (SAS). Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_SAS_TOKEN. */
    sasToken(value: string): az_storage_blob_service_properties_delete_policy_update_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_storage_blob_service_properties_delete_policy_update_command_builder;
}
/**
 * Gets the properties of a storage account's Blob service, including Azure Storage Analytics.
 *
 * Syntax:
 * ```
 * az storage blob service-properties show [--account-key]
 *                                         [--account-name]
 *                                         [--auth-mode {key, login}]
 *                                         [--connection-string]
 *                                         [--query-examples]
 *                                         [--sas-token]
 *                                         [--subscription]
 *                                         [--timeout]
 * ```
 */
declare class az_storage_blob_service_properties_show_command_builder extends CommandBuilder<az_storage_blob_service_properties_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** Storage account key. Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_KEY. */
    accountKey(value: string): az_storage_blob_service_properties_show_command_builder;
    /** Storage account name. Related environment variable: AZURE_STORAGE_ACCOUNT. Must be used in conjunction with either storage account key or a SAS token. If neither are present, the command will try to query the storage account key using the authenticated Azure account. If a large number of storage commands are executed the API quota may be hit. */
    accountName(value: string): az_storage_blob_service_properties_show_command_builder;
    /** The mode in which to run the command. "login" mode will directly use your login credentials for the authentication. The legacy "key" mode will attempt to query for an account key if no authentication parameters for the account are provided. Environment variable: AZURE_STORAGE_AUTH_MODE. */
    authMode(value: 'key' | 'login'): az_storage_blob_service_properties_show_command_builder;
    /** Storage account connection string. Environment variable: AZURE_STORAGE_CONNECTION_STRING. */
    connectionString(value: string): az_storage_blob_service_properties_show_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_storage_blob_service_properties_show_command_builder;
    /** A Shared Access Signature (SAS). Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_SAS_TOKEN. */
    sasToken(value: string): az_storage_blob_service_properties_show_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_storage_blob_service_properties_show_command_builder;
    /** Request timeout in seconds. Applies to each call to the service. */
    timeout(value: string): az_storage_blob_service_properties_show_command_builder;
}
/**
 * Update storage blob service properties.
 *
 * Syntax:
 * ```
 * az storage blob service-properties update [--404-document]
 *                                           [--account-key]
 *                                           [--account-name]
 *                                           [--add]
 *                                           [--auth-mode {key, login}]
 *                                           [--connection-string]
 *                                           [--delete-retention {false, true}]
 *                                           [--delete-retention-period]
 *                                           [--force-string]
 *                                           [--index-document]
 *                                           [--remove]
 *                                           [--sas-token]
 *                                           [--set]
 *                                           [--static-website {false, true}]
 *                                           [--subscription]
 *                                           [--timeout]
 * ```
 */
declare class az_storage_blob_service_properties_update_command_builder extends CommandBuilder<az_storage_blob_service_properties_update_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** Represents the path to the error document that should be shown when an error 404 is issued, in other words, when a browser requests a page that does not exist. */
    _404Document(value: string): az_storage_blob_service_properties_update_command_builder;
    /** Storage account key. Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_KEY. */
    accountKey(value: string): az_storage_blob_service_properties_update_command_builder;
    /** Storage account name. Related environment variable: AZURE_STORAGE_ACCOUNT. Must be used in conjunction with either storage account key or a SAS token. If neither are present, the command will try to query the storage account key using the authenticated Azure account. If a large number of storage commands are executed the API quota may be hit. */
    accountName(value: string): az_storage_blob_service_properties_update_command_builder;
    /** Add an object to a list of objects by specifying a path and key value pairs.  Example: --add property.listProperty <key=value, string or JSON string>. */
    add(value: string): az_storage_blob_service_properties_update_command_builder;
    /** The mode in which to run the command. "login" mode will directly use your login credentials for the authentication. The legacy "key" mode will attempt to query for an account key if no authentication parameters for the account are provided. Environment variable: AZURE_STORAGE_AUTH_MODE. */
    authMode(value: 'key' | 'login'): az_storage_blob_service_properties_update_command_builder;
    /** Storage account connection string. Environment variable: AZURE_STORAGE_CONNECTION_STRING. */
    connectionString(value: string): az_storage_blob_service_properties_update_command_builder;
    /** Enables soft-delete. */
    deleteRetention(value: boolean): az_storage_blob_service_properties_update_command_builder;
    /** Number of days that soft-deleted blob will be retained. Must be in range [1,365]. */
    deleteRetentionPeriod(value: string): az_storage_blob_service_properties_update_command_builder;
    /** When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON. */
    forceString(value: string): az_storage_blob_service_properties_update_command_builder;
    /** Represents the name of the index document. This is commonly "index.html". */
    indexDocument(value: string): az_storage_blob_service_properties_update_command_builder;
    /** Remove a property or an element from a list.  Example: --remove property.list <indexToRemove> OR --remove propertyToRemove. */
    remove(value: string): az_storage_blob_service_properties_update_command_builder;
    /** A Shared Access Signature (SAS). Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_SAS_TOKEN. */
    sasToken(value: string): az_storage_blob_service_properties_update_command_builder;
    /** Update an object by specifying a property path and value to set.  Example: --set property1.property2=<value>. */
    set(value: string): az_storage_blob_service_properties_update_command_builder;
    /** Enables static-website. */
    staticWebsite(value: boolean): az_storage_blob_service_properties_update_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_storage_blob_service_properties_update_command_builder;
    /** Request timeout in seconds. Applies to each call to the service. */
    timeout(value: string): az_storage_blob_service_properties_update_command_builder;
}
/**
 * Mark a blob or snapshot for deletion.
 *
 * Syntax:
 * ```
 * az storage blob delete --container-name
 *                        --name
 *                        [--account-key]
 *                        [--account-name]
 *                        [--auth-mode {key, login}]
 *                        [--connection-string]
 *                        [--delete-snapshots {include, only}]
 *                        [--if-match]
 *                        [--if-modified-since]
 *                        [--if-none-match]
 *                        [--if-unmodified-since]
 *                        [--lease-id]
 *                        [--sas-token]
 *                        [--snapshot]
 *                        [--subscription]
 *                        [--timeout]
 * ```
 *
 * @param {string} containerName The container name.
 * @param {string} name The blob name.
 */
declare class az_storage_blob_delete_command_builder extends CommandBuilder<az_storage_blob_delete_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, containerName: string, name: string);
    /** The container name. */
    containerName(value: string): az_storage_blob_delete_command_builder;
    /** The blob name. */
    name(value: string): az_storage_blob_delete_command_builder;
    /** Storage account key. Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_KEY. */
    accountKey(value: string): az_storage_blob_delete_command_builder;
    /** Storage account name. Related environment variable: AZURE_STORAGE_ACCOUNT. Must be used in conjunction with either storage account key or a SAS token. If neither are present, the command will try to query the storage account key using the authenticated Azure account. If a large number of storage commands are executed the API quota may be hit. */
    accountName(value: string): az_storage_blob_delete_command_builder;
    /** The mode in which to run the command. "login" mode will directly use your login credentials for the authentication. The legacy "key" mode will attempt to query for an account key if no authentication parameters for the account are provided. Environment variable: AZURE_STORAGE_AUTH_MODE. */
    authMode(value: 'key' | 'login'): az_storage_blob_delete_command_builder;
    /** Storage account connection string. Environment variable: AZURE_STORAGE_CONNECTION_STRING. */
    connectionString(value: string): az_storage_blob_delete_command_builder;
    /** Required if the blob has associated snapshots. */
    deleteSnapshots(value: 'include' | 'only'): az_storage_blob_delete_command_builder;
    /** An ETag value, or the wildcard character (\*). Specify this header to perform the operation only if the resource's ETag matches the value specified. */
    ifMatch(value: string): az_storage_blob_delete_command_builder;
    /** Commence only if modified since supplied UTC datetime (Y-m-d'T'H:M'Z'). */
    ifModifiedSince(value: string): az_storage_blob_delete_command_builder;
    /** An ETag value, or the wildcard character (\*). Specify this header to perform the operation only if the resource's ETag does not match the value specified. Specify the wildcard character (\*) to perform the operation only if the resource does not exist, and fail the operation if it does exist. */
    ifNoneMatch(value: string): az_storage_blob_delete_command_builder;
    /** Commence only if unmodified since supplied UTC datetime (Y-m-d'T'H:M'Z'). */
    ifUnmodifiedSince(value: string): az_storage_blob_delete_command_builder;
    /** Required if the blob has an active lease. */
    leaseId(value: string): az_storage_blob_delete_command_builder;
    /** A Shared Access Signature (SAS). Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_SAS_TOKEN. */
    sasToken(value: string): az_storage_blob_delete_command_builder;
    /** The snapshot parameter is an opaque DateTime value that, when present, specifies the blob snapshot to delete. */
    snapshot(value: string): az_storage_blob_delete_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_storage_blob_delete_command_builder;
    /** Request timeout in seconds. Applies to each call to the service. */
    timeout(value: string): az_storage_blob_delete_command_builder;
}
/**
 * Delete blobs from a blob container recursively.
 *
 * Syntax:
 * ```
 * az storage blob delete-batch --source
 *                              [--account-key]
 *                              [--account-name]
 *                              [--auth-mode {key, login}]
 *                              [--connection-string]
 *                              [--delete-snapshots {include, only}]
 *                              [--dryrun]
 *                              [--if-match]
 *                              [--if-modified-since]
 *                              [--if-none-match]
 *                              [--if-unmodified-since]
 *                              [--lease-id]
 *                              [--pattern]
 *                              [--sas-token]
 *                              [--subscription]
 *                              [--timeout]
 * ```
 *
 * @param {string} source The blob container from where the files will be deleted.
 */
declare class az_storage_blob_delete_batch_command_builder extends CommandBuilder<az_storage_blob_delete_batch_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, source: string);
    /** The blob container from where the files will be deleted. */
    source(value: string): az_storage_blob_delete_batch_command_builder;
    /** Storage account key. Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_KEY. */
    accountKey(value: string): az_storage_blob_delete_batch_command_builder;
    /** Storage account name. Related environment variable: AZURE_STORAGE_ACCOUNT. Must be used in conjunction with either storage account key or a SAS token. If neither are present, the command will try to query the storage account key using the authenticated Azure account. If a large number of storage commands are executed the API quota may be hit. */
    accountName(value: string): az_storage_blob_delete_batch_command_builder;
    /** The mode in which to run the command. "login" mode will directly use your login credentials for the authentication. The legacy "key" mode will attempt to query for an account key if no authentication parameters for the account are provided. Environment variable: AZURE_STORAGE_AUTH_MODE. */
    authMode(value: 'key' | 'login'): az_storage_blob_delete_batch_command_builder;
    /** Storage account connection string. Environment variable: AZURE_STORAGE_CONNECTION_STRING. */
    connectionString(value: string): az_storage_blob_delete_batch_command_builder;
    /** Required if the blob has associated snapshots. */
    deleteSnapshots(value: 'include' | 'only'): az_storage_blob_delete_batch_command_builder;
    /** Show the summary of the operations to be taken instead of actually deleting the file(s). */
    dryrun(value: string): az_storage_blob_delete_batch_command_builder;
    /** An ETag value, or the wildcard character (\*). Specify this header to perform the operation only if the resource's ETag matches the value specified. */
    ifMatch(value: string): az_storage_blob_delete_batch_command_builder;
    /** Commence only if modified since supplied UTC datetime (Y-m-d'T'H:M'Z'). */
    ifModifiedSince(value: string): az_storage_blob_delete_batch_command_builder;
    /** An ETag value, or the wildcard character (\*). */
    ifNoneMatch(value: string): az_storage_blob_delete_batch_command_builder;
    /** Commence only if unmodified since supplied UTC datetime (Y-m-d'T'H:M'Z'). */
    ifUnmodifiedSince(value: string): az_storage_blob_delete_batch_command_builder;
    /** The active lease id for the blob. */
    leaseId(value: string): az_storage_blob_delete_batch_command_builder;
    /** The pattern used for globbing files or blobs in the source. The supported patterns are '\*', '?', '[seq]', and '[!seq]'. For more information, please refer to <a href="https://docs.python.org/3.7/library/fnmatch.html">https://docs.python.org/3.7/library/fnmatch.html</a>. */
    pattern(value: string): az_storage_blob_delete_batch_command_builder;
    /** A Shared Access Signature (SAS). Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_SAS_TOKEN. */
    sasToken(value: string): az_storage_blob_delete_batch_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_storage_blob_delete_batch_command_builder;
    /** Request timeout in seconds. Applies to each call to the service. */
    timeout(value: string): az_storage_blob_delete_batch_command_builder;
}
/**
 * Downloads a blob to a file path, with automatic chunking and progress notifications.
 *
 * Syntax:
 * ```
 * az storage blob download --container-name
 *                          --file
 *                          --name
 *                          [--account-key]
 *                          [--account-name]
 *                          [--auth-mode {key, login}]
 *                          [--connection-string]
 *                          [--end-range]
 *                          [--if-match]
 *                          [--if-modified-since]
 *                          [--if-none-match]
 *                          [--if-unmodified-since]
 *                          [--lease-id]
 *                          [--max-connections]
 *                          [--no-progress]
 *                          [--open-mode]
 *                          [--sas-token]
 *                          [--snapshot]
 *                          [--socket-timeout]
 *                          [--start-range]
 *                          [--subscription]
 *                          [--timeout]
 *                          [--validate-content]
 * ```
 *
 * @param {string} containerName The container name.
 * @param {string} file Path of file to write out to.
 * @param {string} name The blob name.
 */
declare class az_storage_blob_download_command_builder extends CommandBuilder<az_storage_blob_download_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, containerName: string, file: string, name: string);
    /** The container name. */
    containerName(value: string): az_storage_blob_download_command_builder;
    /** Path of file to write out to. */
    file(value: string): az_storage_blob_download_command_builder;
    /** The blob name. */
    name(value: string): az_storage_blob_download_command_builder;
    /** Storage account key. Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_KEY. */
    accountKey(value: string): az_storage_blob_download_command_builder;
    /** Storage account name. Related environment variable: AZURE_STORAGE_ACCOUNT. Must be used in conjunction with either storage account key or a SAS token. If neither are present, the command will try to query the storage account key using the authenticated Azure account. If a large number of storage commands are executed the API quota may be hit. */
    accountName(value: string): az_storage_blob_download_command_builder;
    /** The mode in which to run the command. "login" mode will directly use your login credentials for the authentication. The legacy "key" mode will attempt to query for an account key if no authentication parameters for the account are provided. Environment variable: AZURE_STORAGE_AUTH_MODE. */
    authMode(value: 'key' | 'login'): az_storage_blob_download_command_builder;
    /** Storage account connection string. Environment variable: AZURE_STORAGE_CONNECTION_STRING. */
    connectionString(value: string): az_storage_blob_download_command_builder;
    /** End of byte range to use for downloading a section of the blob. If end_range is given, start_range must be provided. The start_range and end_range params are inclusive. Ex: start_range=0, end_range=511 will download first 512 bytes of blob. */
    endRange(value: string): az_storage_blob_download_command_builder;
    /** An ETag value, or the wildcard character (\*). Specify this header to perform the operation only if the resource's ETag matches the value specified. */
    ifMatch(value: string): az_storage_blob_download_command_builder;
    /** Commence only if modified since supplied UTC datetime (Y-m-d'T'H:M'Z'). */
    ifModifiedSince(value: string): az_storage_blob_download_command_builder;
    /** An ETag value, or the wildcard character (\*). Specify this header to perform the operation only if the resource's ETag does not match the value specified. Specify the wildcard character (\*) to perform the operation only if the resource does not exist, and fail the operation if it does exist. */
    ifNoneMatch(value: string): az_storage_blob_download_command_builder;
    /** Commence only if unmodified since supplied UTC datetime (Y-m-d'T'H:M'Z'). */
    ifUnmodifiedSince(value: string): az_storage_blob_download_command_builder;
    /** Required if the blob has an active lease. */
    leaseId(value: string): az_storage_blob_download_command_builder;
    /** If set to 2 or greater, an initial get will be done for the first self.MAX_SINGLE_GET_SIZE bytes of the blob. If this is the entire blob, the method returns at this point. If it is not, it will download the remaining data parallel using the number of threads equal to max_connections. Each chunk will be of size self.MAX_CHUNK_GET_SIZE. If set to 1, a single large get request will be done. This is not generally recommended but available if very few threads should be used, network requests are very expensive, or a non-seekable stream prevents parallel download. This may also be useful if many blobs are expected to be empty as an extra request is required for empty blobs if max_connections is greater than 1. */
    maxConnections(value: string): az_storage_blob_download_command_builder;
    /** Include this flag to disable progress reporting for the command. */
    noProgress(value: string): az_storage_blob_download_command_builder;
    /** Mode to use when opening the file. Note that specifying append only open_mode prevents parallel download. So, max_connections must be set to 1 if this open_mode is used. */
    openMode(value: string): az_storage_blob_download_command_builder;
    /** A Shared Access Signature (SAS). Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_SAS_TOKEN. */
    sasToken(value: string): az_storage_blob_download_command_builder;
    /** The snapshot parameter is an opaque DateTime value that, when present, specifies the blob snapshot to retrieve. */
    snapshot(value: string): az_storage_blob_download_command_builder;
    /** The socket timeout(secs), used by the service to regulate data flow. */
    socketTimeout(value: string): az_storage_blob_download_command_builder;
    /** Start of byte range to use for downloading a section of the blob. If no end_range is given, all bytes after the start_range will be downloaded. The start_range and end_range params are inclusive. Ex: start_range=0, end_range=511 will download first 512 bytes of blob. */
    startRange(value: string): az_storage_blob_download_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_storage_blob_download_command_builder;
    /** Request timeout in seconds. Applies to each call to the service. */
    timeout(value: string): az_storage_blob_download_command_builder;
    /** If set to true, validates an MD5 hash for each retrieved portion of the blob. This is primarily valuable for detecting bitflips on the wire if using http instead of https as https (the default) will already validate. Note that the service will only return transactional MD5s for chunks 4MB or less so the first get request will be of size self.MAX_CHUNK_GET_SIZE instead of self.MAX_SINGLE_GET_SIZE. If self.MAX_CHUNK_GET_SIZE was set to greater than 4MB an error will be thrown. As computing the MD5 takes processing time and more requests will need to be done due to the reduced chunk size there may be some increase in latency. */
    validateContent(value: string): az_storage_blob_download_command_builder;
}
/**
 * Download blobs from a blob container recursively.
 *
 * Syntax:
 * ```
 * az storage blob download-batch --destination
 *                                --source
 *                                [--account-key]
 *                                [--account-name]
 *                                [--auth-mode {key, login}]
 *                                [--connection-string]
 *                                [--dryrun]
 *                                [--max-connections]
 *                                [--no-progress]
 *                                [--pattern]
 *                                [--sas-token]
 *                                [--socket-timeout]
 *                                [--subscription]
 * ```
 *
 * @param {string} destination The existing destination folder for this download operation.
 * @param {string} source The blob container from where the files will be downloaded.
 */
declare class az_storage_blob_download_batch_command_builder extends CommandBuilder<az_storage_blob_download_batch_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, destination: string, source: string);
    /** The existing destination folder for this download operation. */
    destination(value: string): az_storage_blob_download_batch_command_builder;
    /** The blob container from where the files will be downloaded. */
    source(value: string): az_storage_blob_download_batch_command_builder;
    /** Storage account key. Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_KEY. */
    accountKey(value: string): az_storage_blob_download_batch_command_builder;
    /** Storage account name. Related environment variable: AZURE_STORAGE_ACCOUNT. Must be used in conjunction with either storage account key or a SAS token. If neither are present, the command will try to query the storage account key using the authenticated Azure account. If a large number of storage commands are executed the API quota may be hit. */
    accountName(value: string): az_storage_blob_download_batch_command_builder;
    /** The mode in which to run the command. "login" mode will directly use your login credentials for the authentication. The legacy "key" mode will attempt to query for an account key if no authentication parameters for the account are provided. Environment variable: AZURE_STORAGE_AUTH_MODE. */
    authMode(value: 'key' | 'login'): az_storage_blob_download_batch_command_builder;
    /** Storage account connection string. Environment variable: AZURE_STORAGE_CONNECTION_STRING. */
    connectionString(value: string): az_storage_blob_download_batch_command_builder;
    /** Show the summary of the operations to be taken instead of actually downloading the file(s). */
    dryrun(value: string): az_storage_blob_download_batch_command_builder;
    /** Maximum number of parallel connections to use when the blob size exceeds 64MB. */
    maxConnections(value: string): az_storage_blob_download_batch_command_builder;
    /** Include this flag to disable progress reporting for the command. */
    noProgress(value: string): az_storage_blob_download_batch_command_builder;
    /** The pattern used for globbing files or blobs in the source. The supported patterns are '\*', '?', '[seq]', and '[!seq]'. For more information, please refer to <a href="https://docs.python.org/3.7/library/fnmatch.html">https://docs.python.org/3.7/library/fnmatch.html</a>. */
    pattern(value: string): az_storage_blob_download_batch_command_builder;
    /** A Shared Access Signature (SAS). Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_SAS_TOKEN. */
    sasToken(value: string): az_storage_blob_download_batch_command_builder;
    /** The socket timeout(secs), used by the service to regulate data flow. */
    socketTimeout(value: string): az_storage_blob_download_batch_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_storage_blob_download_batch_command_builder;
}
/**
 * Check for the existence of a blob in a container.
 *
 * Syntax:
 * ```
 * az storage blob exists --container-name
 *                        --name
 *                        [--account-key]
 *                        [--account-name]
 *                        [--auth-mode {key, login}]
 *                        [--connection-string]
 *                        [--sas-token]
 *                        [--snapshot]
 *                        [--subscription]
 *                        [--timeout]
 * ```
 *
 * @param {string} containerName The container name.
 * @param {string} name The blob name.
 */
declare class az_storage_blob_exists_command_builder extends CommandBuilder<az_storage_blob_exists_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, containerName: string, name: string);
    /** The container name. */
    containerName(value: string): az_storage_blob_exists_command_builder;
    /** The blob name. */
    name(value: string): az_storage_blob_exists_command_builder;
    /** Storage account key. Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_KEY. */
    accountKey(value: string): az_storage_blob_exists_command_builder;
    /** Storage account name. Related environment variable: AZURE_STORAGE_ACCOUNT. Must be used in conjunction with either storage account key or a SAS token. If neither are present, the command will try to query the storage account key using the authenticated Azure account. If a large number of storage commands are executed the API quota may be hit. */
    accountName(value: string): az_storage_blob_exists_command_builder;
    /** The mode in which to run the command. "login" mode will directly use your login credentials for the authentication. The legacy "key" mode will attempt to query for an account key if no authentication parameters for the account are provided. Environment variable: AZURE_STORAGE_AUTH_MODE. */
    authMode(value: 'key' | 'login'): az_storage_blob_exists_command_builder;
    /** Storage account connection string. Environment variable: AZURE_STORAGE_CONNECTION_STRING. */
    connectionString(value: string): az_storage_blob_exists_command_builder;
    /** A Shared Access Signature (SAS). Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_SAS_TOKEN. */
    sasToken(value: string): az_storage_blob_exists_command_builder;
    /** The snapshot parameter is an opaque DateTime value that, when present, specifies the snapshot. */
    snapshot(value: string): az_storage_blob_exists_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_storage_blob_exists_command_builder;
    /** Request timeout in seconds. Applies to each call to the service. */
    timeout(value: string): az_storage_blob_exists_command_builder;
}
/**
 * Generate a shared access signature for the blob.
 *
 * Syntax:
 * ```
 * az storage blob generate-sas --container-name
 *                              --name
 *                              [--account-key]
 *                              [--account-name]
 *                              [--as-user]
 *                              [--auth-mode {key, login}]
 *                              [--cache-control]
 *                              [--connection-string]
 *                              [--content-disposition]
 *                              [--content-encoding]
 *                              [--content-language]
 *                              [--content-type]
 *                              [--expiry]
 *                              [--full-uri]
 *                              [--https-only]
 *                              [--ip]
 *                              [--permissions]
 *                              [--policy-name]
 *                              [--start]
 *                              [--subscription]
 * ```
 *
 * @param {string} containerName The container name.
 * @param {string} name The blob name.
 */
declare class az_storage_blob_generate_sas_command_builder extends CommandBuilder<az_storage_blob_generate_sas_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, containerName: string, name: string);
    /** The container name. */
    containerName(value: string): az_storage_blob_generate_sas_command_builder;
    /** The blob name. */
    name(value: string): az_storage_blob_generate_sas_command_builder;
    /** Storage account key. Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_KEY. */
    accountKey(value: string): az_storage_blob_generate_sas_command_builder;
    /** Storage account name. Related environment variable: AZURE_STORAGE_ACCOUNT. Must be used in conjunction with either storage account key or a SAS token. If neither are present, the command will try to query the storage account key using the authenticated Azure account. If a large number of storage commands are executed the API quota may be hit. */
    accountName(value: string): az_storage_blob_generate_sas_command_builder;
    /** Indicates that this command return the SAS signed with the user delegation key. The expiry parameter and '--auth-mode login' are required if this argument is specified. */
    asUser(value: string): az_storage_blob_generate_sas_command_builder;
    /** The mode in which to run the command. "login" mode will directly use your login credentials for the authentication. The legacy "key" mode will attempt to query for an account key if no authentication parameters for the account are provided. Environment variable: AZURE_STORAGE_AUTH_MODE. */
    authMode(value: 'key' | 'login'): az_storage_blob_generate_sas_command_builder;
    /** Response header value for Cache-Control when resource is accessedusing this shared access signature. */
    cacheControl(value: string): az_storage_blob_generate_sas_command_builder;
    /** Storage account connection string. Environment variable: AZURE_STORAGE_CONNECTION_STRING. */
    connectionString(value: string): az_storage_blob_generate_sas_command_builder;
    /** Response header value for Content-Disposition when resource is accessedusing this shared access signature. */
    contentDisposition(value: string): az_storage_blob_generate_sas_command_builder;
    /** Response header value for Content-Encoding when resource is accessedusing this shared access signature. */
    contentEncoding(value: string): az_storage_blob_generate_sas_command_builder;
    /** Response header value for Content-Language when resource is accessedusing this shared access signature. */
    contentLanguage(value: string): az_storage_blob_generate_sas_command_builder;
    /** Response header value for Content-Type when resource is accessedusing this shared access signature. */
    contentType(value: string): az_storage_blob_generate_sas_command_builder;
    /** Specifies the UTC datetime (Y-m-d'T'H:M'Z') at which the SAS becomes invalid. Do not use if a stored access policy is referenced with --id that specifies this value. */
    expiry(value: string): az_storage_blob_generate_sas_command_builder;
    /** Indicates that this command return the full blob URI and the shared access signature token. */
    fullUri(value: string): az_storage_blob_generate_sas_command_builder;
    /** Only permit requests made with the HTTPS protocol. If omitted, requests from both the HTTP and HTTPS protocol are permitted. */
    httpsOnly(value: string): az_storage_blob_generate_sas_command_builder;
    /** Specifies the IP address or range of IP addresses from which to accept requests. Supports only IPv4 style addresses. */
    ip(value: string): az_storage_blob_generate_sas_command_builder;
    /** The permissions the SAS grants. Allowed values: (a)dd (c)reate (d)elete (r)ead (w)rite. Do not use if a stored access policy is referenced with --id that specifies this value. Can be combined. */
    permissions(value: string): az_storage_blob_generate_sas_command_builder;
    /** The name of a stored access policy within the container's ACL. */
    policyName(value: string): az_storage_blob_generate_sas_command_builder;
    /** Specifies the UTC datetime (Y-m-d'T'H:M'Z') at which the SAS becomes valid. Do not use if a stored access policy is referenced with --id that specifies this value. Defaults to the time of the request. */
    start(value: string): az_storage_blob_generate_sas_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_storage_blob_generate_sas_command_builder;
}
/**
 * List blobs in a given container.
 *
 * Syntax:
 * ```
 * az storage blob list --container-name
 *                      [--account-key]
 *                      [--account-name]
 *                      [--auth-mode {key, login}]
 *                      [--connection-string]
 *                      [--delimiter]
 *                      [--include]
 *                      [--marker]
 *                      [--num-results]
 *                      [--prefix]
 *                      [--query-examples]
 *                      [--sas-token]
 *                      [--show-next-marker]
 *                      [--subscription]
 *                      [--timeout]
 * ```
 *
 * @param {string} containerName The container name.
 */
declare class az_storage_blob_list_command_builder extends CommandBuilder<az_storage_blob_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, containerName: string);
    /** The container name. */
    containerName(value: string): az_storage_blob_list_command_builder;
    /** Storage account key. Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_KEY. */
    accountKey(value: string): az_storage_blob_list_command_builder;
    /** Storage account name. Related environment variable: AZURE_STORAGE_ACCOUNT. Must be used in conjunction with either storage account key or a SAS token. If neither are present, the command will try to query the storage account key using the authenticated Azure account. If a large number of storage commands are executed the API quota may be hit. */
    accountName(value: string): az_storage_blob_list_command_builder;
    /** The mode in which to run the command. "login" mode will directly use your login credentials for the authentication. The legacy "key" mode will attempt to query for an account key if no authentication parameters for the account are provided. Environment variable: AZURE_STORAGE_AUTH_MODE. */
    authMode(value: 'key' | 'login'): az_storage_blob_list_command_builder;
    /** Storage account connection string. Environment variable: AZURE_STORAGE_CONNECTION_STRING. */
    connectionString(value: string): az_storage_blob_list_command_builder;
    /** When the request includes this parameter, the operation returns a BlobPrefix element in the result list that acts as a placeholder for all blobs whose names begin with the same substring up to the appearance of the delimiter character. The delimiter may be a single character or a string. */
    delimiter(value: string): az_storage_blob_list_command_builder;
    /** Specify one or more additional datasets to include in the response. Options include: (c)opy, (d)eleted, (m)etadata, (s)napshots, (v)ersions, (t)ags. Can be combined. */
    include(value: string): az_storage_blob_list_command_builder;
    /** A string value that identifies the portion of the list of containers to be returned with the next listing operation. The operation returns the NextMarker value within the response body if the listing operation did not return all containers remaining to be listed with the current page. If specified, this generator will begin returning results from the point where the previous generator stopped. */
    marker(value: string): az_storage_blob_list_command_builder;
    /** Specify the maximum number to return. If the request does not specify num_results, or specifies a value greater than 5000, the server will return up to 5000 items. Note that if the listing operation crosses a partition boundary, then the service will return a continuation token for retrieving the remaining of the results. Provide "\*" to return all. */
    numResults(value: string): az_storage_blob_list_command_builder;
    /** Filter the results to return only blobs whose name begins with the specified prefix. */
    prefix(value: string): az_storage_blob_list_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_storage_blob_list_command_builder;
    /** A Shared Access Signature (SAS). Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_SAS_TOKEN. */
    sasToken(value: string): az_storage_blob_list_command_builder;
    /** Show nextMarker in result when specified. */
    showNextMarker(value: string): az_storage_blob_list_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_storage_blob_list_command_builder;
    /** Request timeout in seconds. Applies to each call to the service. */
    timeout(value: string): az_storage_blob_list_command_builder;
}
/**
 * Restore blobs in the specified blob ranges.
 *
 * Syntax:
 * ```
 * az storage blob restore --account-name
 *                         --time-to-restore
 *                         [--blob-range]
 *                         [--no-wait]
 *                         [--resource-group]
 *                         [--subscription]
 * ```
 *
 * @param {string} accountName The storage account name.
 * @param {string} timeToRestore Restore blob to the specified time, which should be UTC datetime in (Y-m-d'T'H:M:S'Z').
 */
declare class az_storage_blob_restore_command_builder extends CommandBuilder<az_storage_blob_restore_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, accountName: string, timeToRestore: string);
    /** The storage account name. */
    accountName(value: string): az_storage_blob_restore_command_builder;
    /** Restore blob to the specified time, which should be UTC datetime in (Y-m-d'T'H:M:S'Z'). */
    timeToRestore(value: string): az_storage_blob_restore_command_builder;
    /** Blob ranges to restore. You need to two values to specify start_range and end_range for each blob range, e.g. -r blob1 blob2. Note: Empty means account start as start range value, and means account end for end range. */
    blobRange(value: string): az_storage_blob_restore_command_builder;
    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_storage_blob_restore_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_storage_blob_restore_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_storage_blob_restore_command_builder;
}
/**
 * Set the block or page tiers on the blob.
 *
 * Syntax:
 * ```
 * az storage blob set-tier --container-name
 *                          --name
 *                          --tier
 *                          [--account-key]
 *                          [--account-name]
 *                          [--auth-mode {key, login}]
 *                          [--connection-string]
 *                          [--rehydrate-priority {High, Standard}]
 *                          [--sas-token]
 *                          [--subscription]
 *                          [--timeout]
 *                          [--type {block, page}]
 * ```
 *
 * @param {string} containerName The container name.
 * @param {string} name The blob name.
 * @param {string} tier The tier value to set the blob to.
 */
declare class az_storage_blob_set_tier_command_builder extends CommandBuilder<az_storage_blob_set_tier_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, containerName: string, name: string, tier: string);
    /** The container name. */
    containerName(value: string): az_storage_blob_set_tier_command_builder;
    /** The blob name. */
    name(value: string): az_storage_blob_set_tier_command_builder;
    /** The tier value to set the blob to. */
    tier(value: string): az_storage_blob_set_tier_command_builder;
    /** Storage account key. Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_KEY. */
    accountKey(value: string): az_storage_blob_set_tier_command_builder;
    /** Storage account name. Related environment variable: AZURE_STORAGE_ACCOUNT. Must be used in conjunction with either storage account key or a SAS token. If neither are present, the command will try to query the storage account key using the authenticated Azure account. If a large number of storage commands are executed the API quota may be hit. */
    accountName(value: string): az_storage_blob_set_tier_command_builder;
    /** The mode in which to run the command. "login" mode will directly use your login credentials for the authentication. The legacy "key" mode will attempt to query for an account key if no authentication parameters for the account are provided. Environment variable: AZURE_STORAGE_AUTH_MODE. */
    authMode(value: 'key' | 'login'): az_storage_blob_set_tier_command_builder;
    /** Storage account connection string. Environment variable: AZURE_STORAGE_CONNECTION_STRING. */
    connectionString(value: string): az_storage_blob_set_tier_command_builder;
    /** Indicate the priority with which to rehydrate an archived blob. The priority can be set on a blob only once, default value is Standard. */
    rehydratePriority(value: 'High' | 'Standard'): az_storage_blob_set_tier_command_builder;
    /** A Shared Access Signature (SAS). Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_SAS_TOKEN. */
    sasToken(value: string): az_storage_blob_set_tier_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_storage_blob_set_tier_command_builder;
    /** The timeout parameter is expressed in seconds. This method may make multiple calls to the Azure service and the timeout will apply to each call individually. */
    timeout(value: string): az_storage_blob_set_tier_command_builder;
    /** The blob type. */
    type(value: 'block' | 'page'): az_storage_blob_set_tier_command_builder;
}
/**
 * Get the details of a blob.
 *
 * Syntax:
 * ```
 * az storage blob show --container-name
 *                      --name
 *                      [--account-key]
 *                      [--account-name]
 *                      [--auth-mode {key, login}]
 *                      [--connection-string]
 *                      [--if-match]
 *                      [--if-modified-since]
 *                      [--if-none-match]
 *                      [--if-unmodified-since]
 *                      [--lease-id]
 *                      [--query-examples]
 *                      [--sas-token]
 *                      [--snapshot]
 *                      [--subscription]
 *                      [--timeout]
 * ```
 *
 * @param {string} containerName The container name.
 * @param {string} name The blob name.
 */
declare class az_storage_blob_show_command_builder extends CommandBuilder<az_storage_blob_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, containerName: string, name: string);
    /** The container name. */
    containerName(value: string): az_storage_blob_show_command_builder;
    /** The blob name. */
    name(value: string): az_storage_blob_show_command_builder;
    /** Storage account key. Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_KEY. */
    accountKey(value: string): az_storage_blob_show_command_builder;
    /** Storage account name. Related environment variable: AZURE_STORAGE_ACCOUNT. Must be used in conjunction with either storage account key or a SAS token. If neither are present, the command will try to query the storage account key using the authenticated Azure account. If a large number of storage commands are executed the API quota may be hit. */
    accountName(value: string): az_storage_blob_show_command_builder;
    /** The mode in which to run the command. "login" mode will directly use your login credentials for the authentication. The legacy "key" mode will attempt to query for an account key if no authentication parameters for the account are provided. Environment variable: AZURE_STORAGE_AUTH_MODE. */
    authMode(value: 'key' | 'login'): az_storage_blob_show_command_builder;
    /** Storage account connection string. Environment variable: AZURE_STORAGE_CONNECTION_STRING. */
    connectionString(value: string): az_storage_blob_show_command_builder;
    /** An ETag value, or the wildcard character (\*). Specify this header to perform the operation only if the resource's ETag matches the value specified. */
    ifMatch(value: string): az_storage_blob_show_command_builder;
    /** Commence only if modified since supplied UTC datetime (Y-m-d'T'H:M'Z'). */
    ifModifiedSince(value: string): az_storage_blob_show_command_builder;
    /** An ETag value, or the wildcard character (\*). Specify this header to perform the operation only if the resource's ETag does not match the value specified. Specify the wildcard character (\*) to perform the operation only if the resource does not exist, and fail the operation if it does exist. */
    ifNoneMatch(value: string): az_storage_blob_show_command_builder;
    /** Commence only if unmodified since supplied UTC datetime (Y-m-d'T'H:M'Z'). */
    ifUnmodifiedSince(value: string): az_storage_blob_show_command_builder;
    /** Required if the blob has an active lease. */
    leaseId(value: string): az_storage_blob_show_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_storage_blob_show_command_builder;
    /** A Shared Access Signature (SAS). Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_SAS_TOKEN. */
    sasToken(value: string): az_storage_blob_show_command_builder;
    /** The snapshot parameter is an opaque DateTime value that, when present, specifies the blob snapshot to retrieve. */
    snapshot(value: string): az_storage_blob_show_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_storage_blob_show_command_builder;
    /** Request timeout in seconds. Applies to each call to the service. */
    timeout(value: string): az_storage_blob_show_command_builder;
}
/**
 * Creates a read-only snapshot of a blob.
 *
 * Syntax:
 * ```
 * az storage blob snapshot --container-name
 *                          --name
 *                          [--account-key]
 *                          [--account-name]
 *                          [--auth-mode {key, login}]
 *                          [--connection-string]
 *                          [--if-match]
 *                          [--if-modified-since]
 *                          [--if-none-match]
 *                          [--if-unmodified-since]
 *                          [--lease-id]
 *                          [--metadata]
 *                          [--sas-token]
 *                          [--subscription]
 *                          [--timeout]
 * ```
 *
 * @param {string} containerName The container name.
 * @param {string} name The blob name.
 */
declare class az_storage_blob_snapshot_command_builder extends CommandBuilder<az_storage_blob_snapshot_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, containerName: string, name: string);
    /** The container name. */
    containerName(value: string): az_storage_blob_snapshot_command_builder;
    /** The blob name. */
    name(value: string): az_storage_blob_snapshot_command_builder;
    /** Storage account key. Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_KEY. */
    accountKey(value: string): az_storage_blob_snapshot_command_builder;
    /** Storage account name. Related environment variable: AZURE_STORAGE_ACCOUNT. Must be used in conjunction with either storage account key or a SAS token. If neither are present, the command will try to query the storage account key using the authenticated Azure account. If a large number of storage commands are executed the API quota may be hit. */
    accountName(value: string): az_storage_blob_snapshot_command_builder;
    /** The mode in which to run the command. "login" mode will directly use your login credentials for the authentication. The legacy "key" mode will attempt to query for an account key if no authentication parameters for the account are provided. Environment variable: AZURE_STORAGE_AUTH_MODE. */
    authMode(value: 'key' | 'login'): az_storage_blob_snapshot_command_builder;
    /** Storage account connection string. Environment variable: AZURE_STORAGE_CONNECTION_STRING. */
    connectionString(value: string): az_storage_blob_snapshot_command_builder;
    /** An ETag value, or the wildcard character (\*). Specify this header to perform the operation only if the resource's ETag matches the value specified. */
    ifMatch(value: string): az_storage_blob_snapshot_command_builder;
    /** Commence only if modified since supplied UTC datetime (Y-m-d'T'H:M'Z'). */
    ifModifiedSince(value: string): az_storage_blob_snapshot_command_builder;
    /** An ETag value, or the wildcard character (\*). Specify this header to perform the operation only if the resource's ETag does not match the value specified. Specify the wildcard character (\*) to perform the operation only if the resource does not exist, and fail the operation if it does exist. */
    ifNoneMatch(value: string): az_storage_blob_snapshot_command_builder;
    /** Commence only if unmodified since supplied UTC datetime (Y-m-d'T'H:M'Z'). */
    ifUnmodifiedSince(value: string): az_storage_blob_snapshot_command_builder;
    /** Required if the blob has an active lease. */
    leaseId(value: string): az_storage_blob_snapshot_command_builder;
    /** Metadata in space-separated key=value pairs. This overwrites any existing metadata. */
    metadata(value: string): az_storage_blob_snapshot_command_builder;
    /** A Shared Access Signature (SAS). Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_SAS_TOKEN. */
    sasToken(value: string): az_storage_blob_snapshot_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_storage_blob_snapshot_command_builder;
    /** Request timeout in seconds. Applies to each call to the service. */
    timeout(value: string): az_storage_blob_snapshot_command_builder;
}
/**
 * Sync blobs recursively to a storage blob container.
 *
 * Syntax:
 * ```
 * az storage blob sync --container
 *                      --source
 *                      [--account-key]
 *                      [--account-name]
 *                      [--auth-mode {key, login}]
 *                      [--connection-string]
 *                      [--destination]
 *                      [--exclude-path]
 *                      [--exclude-pattern]
 *                      [--include-pattern]
 *                      [--sas-token]
 *                      [--subscription]
 * ```
 *
 * @param {string} container The sync destination container.
 * @param {string} source The source file path to sync from.
 */
declare class az_storage_blob_sync_command_builder extends CommandBuilder<az_storage_blob_sync_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, container: string, source: string);
    /** The sync destination container. */
    container(value: string): az_storage_blob_sync_command_builder;
    /** The source file path to sync from. */
    source(value: string): az_storage_blob_sync_command_builder;
    /** Storage account key. Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_KEY. */
    accountKey(value: string): az_storage_blob_sync_command_builder;
    /** Storage account name. Related environment variable: AZURE_STORAGE_ACCOUNT. Must be used in conjunction with either storage account key or a SAS token. If neither are present, the command will try to query the storage account key using the authenticated Azure account. If a large number of storage commands are executed the API quota may be hit. */
    accountName(value: string): az_storage_blob_sync_command_builder;
    /** The mode in which to run the command. "login" mode will directly use your login credentials for the authentication. The legacy "key" mode will attempt to query for an account key if no authentication parameters for the account are provided. Environment variable: AZURE_STORAGE_AUTH_MODE. */
    authMode(value: 'key' | 'login'): az_storage_blob_sync_command_builder;
    /** Storage account connection string. Environment variable: AZURE_STORAGE_CONNECTION_STRING. */
    connectionString(value: string): az_storage_blob_sync_command_builder;
    /** The destination path that will be appended to the blob name. */
    destination(value: string): az_storage_blob_sync_command_builder;
    /** Exclude these paths. This option does not support wildcard characters (\*). Checks relative path prefix. For example: myFolder;myFolder/subDirName/file.pdf. */
    excludePath(value: string): az_storage_blob_sync_command_builder;
    /** Exclude these files where the name matches the pattern list. For example: \*.jpg;\*.pdf;exactName. This option supports wildcard characters (\*). */
    excludePattern(value: string): az_storage_blob_sync_command_builder;
    /** Include only these files where the name matches the pattern list. For example: \*.jpg;\*.pdf;exactName. This option supports wildcard characters (\*). */
    includePattern(value: string): az_storage_blob_sync_command_builder;
    /** A Shared Access Signature (SAS). Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_SAS_TOKEN. */
    sasToken(value: string): az_storage_blob_sync_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_storage_blob_sync_command_builder;
}
/**
 * The undelete Blob operation restores the contents and metadata of soft deleted blob or snapshot.
 *
 * Syntax:
 * ```
 * az storage blob undelete --container-name
 *                          --name
 *                          [--account-key]
 *                          [--account-name]
 *                          [--auth-mode {key, login}]
 *                          [--connection-string]
 *                          [--sas-token]
 *                          [--subscription]
 *                          [--timeout]
 * ```
 *
 * @param {string} containerName The container name.
 * @param {string} name The blob name.
 */
declare class az_storage_blob_undelete_command_builder extends CommandBuilder<az_storage_blob_undelete_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, containerName: string, name: string);
    /** The container name. */
    containerName(value: string): az_storage_blob_undelete_command_builder;
    /** The blob name. */
    name(value: string): az_storage_blob_undelete_command_builder;
    /** Storage account key. Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_KEY. */
    accountKey(value: string): az_storage_blob_undelete_command_builder;
    /** Storage account name. Related environment variable: AZURE_STORAGE_ACCOUNT. Must be used in conjunction with either storage account key or a SAS token. If neither are present, the command will try to query the storage account key using the authenticated Azure account. If a large number of storage commands are executed the API quota may be hit. */
    accountName(value: string): az_storage_blob_undelete_command_builder;
    /** The mode in which to run the command. "login" mode will directly use your login credentials for the authentication. The legacy "key" mode will attempt to query for an account key if no authentication parameters for the account are provided. Environment variable: AZURE_STORAGE_AUTH_MODE. */
    authMode(value: 'key' | 'login'): az_storage_blob_undelete_command_builder;
    /** Storage account connection string. Environment variable: AZURE_STORAGE_CONNECTION_STRING. */
    connectionString(value: string): az_storage_blob_undelete_command_builder;
    /** A Shared Access Signature (SAS). Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_SAS_TOKEN. */
    sasToken(value: string): az_storage_blob_undelete_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_storage_blob_undelete_command_builder;
    /** Request timeout in seconds. Applies to each call to the service. */
    timeout(value: string): az_storage_blob_undelete_command_builder;
}
/**
 * Sets system properties on the blob.
 *
 * Syntax:
 * ```
 * az storage blob update --container-name
 *                        --name
 *                        [--account-key]
 *                        [--account-name]
 *                        [--auth-mode {key, login}]
 *                        [--clear-content-settings {false, true}]
 *                        [--connection-string]
 *                        [--content-cache-control]
 *                        [--content-disposition]
 *                        [--content-encoding]
 *                        [--content-language]
 *                        [--content-md5]
 *                        [--content-type]
 *                        [--if-match]
 *                        [--if-modified-since]
 *                        [--if-none-match]
 *                        [--if-unmodified-since]
 *                        [--lease-id]
 *                        [--sas-token]
 *                        [--subscription]
 *                        [--timeout]
 * ```
 *
 * @param {string} containerName The container name.
 * @param {string} name The blob name.
 */
declare class az_storage_blob_update_command_builder extends CommandBuilder<az_storage_blob_update_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, containerName: string, name: string);
    /** The container name. */
    containerName(value: string): az_storage_blob_update_command_builder;
    /** The blob name. */
    name(value: string): az_storage_blob_update_command_builder;
    /** Storage account key. Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_KEY. */
    accountKey(value: string): az_storage_blob_update_command_builder;
    /** Storage account name. Related environment variable: AZURE_STORAGE_ACCOUNT. Must be used in conjunction with either storage account key or a SAS token. If neither are present, the command will try to query the storage account key using the authenticated Azure account. If a large number of storage commands are executed the API quota may be hit. */
    accountName(value: string): az_storage_blob_update_command_builder;
    /** The mode in which to run the command. "login" mode will directly use your login credentials for the authentication. The legacy "key" mode will attempt to query for an account key if no authentication parameters for the account are provided. Environment variable: AZURE_STORAGE_AUTH_MODE. */
    authMode(value: 'key' | 'login'): az_storage_blob_update_command_builder;
    /** If this flag is set, then if any one or more of the following properties (--content-cache-control, --content-disposition, --content-encoding, --content-language, --content-md5, --content-type) is set, then all of these properties are set together. If a value is not provided for a given property when at least one of the properties listed below is set, then that property will be cleared. */
    clearContentSettings(value: boolean): az_storage_blob_update_command_builder;
    /** Storage account connection string. Environment variable: AZURE_STORAGE_CONNECTION_STRING. */
    connectionString(value: string): az_storage_blob_update_command_builder;
    /** The cache control string. */
    contentCacheControl(value: string): az_storage_blob_update_command_builder;
    /** Conveys additional information about how to process the response payload, and can also be used to attach additional metadata. */
    contentDisposition(value: string): az_storage_blob_update_command_builder;
    /** The content encoding type. */
    contentEncoding(value: string): az_storage_blob_update_command_builder;
    /** The content language. */
    contentLanguage(value: string): az_storage_blob_update_command_builder;
    /** The content's MD5 hash. */
    contentMd5(value: string): az_storage_blob_update_command_builder;
    /** The content MIME type. */
    contentType(value: string): az_storage_blob_update_command_builder;
    /** An ETag value, or the wildcard character (\*). Specify this header to perform the operation only if the resource's ETag matches the value specified. */
    ifMatch(value: string): az_storage_blob_update_command_builder;
    /** Commence only if modified since supplied UTC datetime (Y-m-d'T'H:M'Z'). */
    ifModifiedSince(value: string): az_storage_blob_update_command_builder;
    /** An ETag value, or the wildcard character (\*). Specify this header to perform the operation only if the resource's ETag does not match the value specified. Specify the wildcard character (\*) to perform the operation only if the resource does not exist, and fail the operation if it does exist. */
    ifNoneMatch(value: string): az_storage_blob_update_command_builder;
    /** Commence only if unmodified since supplied UTC datetime (Y-m-d'T'H:M'Z'). */
    ifUnmodifiedSince(value: string): az_storage_blob_update_command_builder;
    /** Required if the blob has an active lease. */
    leaseId(value: string): az_storage_blob_update_command_builder;
    /** A Shared Access Signature (SAS). Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_SAS_TOKEN. */
    sasToken(value: string): az_storage_blob_update_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_storage_blob_update_command_builder;
    /** Request timeout in seconds. Applies to each call to the service. */
    timeout(value: string): az_storage_blob_update_command_builder;
}
/**
 * Upload a file to a storage blob.
 *
 * Syntax:
 * ```
 * az storage blob upload --container-name
 *                        --file
 *                        --name
 *                        [--account-key]
 *                        [--account-name]
 *                        [--auth-mode {key, login}]
 *                        [--connection-string]
 *                        [--content-cache-control]
 *                        [--content-disposition]
 *                        [--content-encoding]
 *                        [--content-language]
 *                        [--content-md5]
 *                        [--content-type]
 *                        [--encryption-scope]
 *                        [--if-match]
 *                        [--if-modified-since]
 *                        [--if-none-match]
 *                        [--if-unmodified-since]
 *                        [--lease-id]
 *                        [--max-connections]
 *                        [--maxsize-condition]
 *                        [--metadata]
 *                        [--no-progress]
 *                        [--sas-token]
 *                        [--socket-timeout]
 *                        [--subscription]
 *                        [--tier {P10, P20, P30, P4, P40, P50, P6, P60}]
 *                        [--timeout]
 *                        [--type {append, block, page}]
 *                        [--validate-content]
 * ```
 *
 * @param {string} containerName The container name.
 * @param {string} file Path of the file to upload as the blob content.
 * @param {string} name The blob name.
 */
declare class az_storage_blob_upload_command_builder extends CommandBuilder<az_storage_blob_upload_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, containerName: string, file: string, name: string);
    /** The container name. */
    containerName(value: string): az_storage_blob_upload_command_builder;
    /** Path of the file to upload as the blob content. */
    file(value: string): az_storage_blob_upload_command_builder;
    /** The blob name. */
    name(value: string): az_storage_blob_upload_command_builder;
    /** Storage account key. Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_KEY. */
    accountKey(value: string): az_storage_blob_upload_command_builder;
    /** Storage account name. Related environment variable: AZURE_STORAGE_ACCOUNT. Must be used in conjunction with either storage account key or a SAS token. If neither are present, the command will try to query the storage account key using the authenticated Azure account. If a large number of storage commands are executed the API quota may be hit. */
    accountName(value: string): az_storage_blob_upload_command_builder;
    /** The mode in which to run the command. "login" mode will directly use your login credentials for the authentication. The legacy "key" mode will attempt to query for an account key if no authentication parameters for the account are provided. Environment variable: AZURE_STORAGE_AUTH_MODE. */
    authMode(value: 'key' | 'login'): az_storage_blob_upload_command_builder;
    /** Storage account connection string. Environment variable: AZURE_STORAGE_CONNECTION_STRING. */
    connectionString(value: string): az_storage_blob_upload_command_builder;
    /** The cache control string. */
    contentCacheControl(value: string): az_storage_blob_upload_command_builder;
    /** Conveys additional information about how to process the response payload, and can also be used to attach additional metadata. */
    contentDisposition(value: string): az_storage_blob_upload_command_builder;
    /** The content encoding type. */
    contentEncoding(value: string): az_storage_blob_upload_command_builder;
    /** The content language. */
    contentLanguage(value: string): az_storage_blob_upload_command_builder;
    /** The content's MD5 hash. */
    contentMd5(value: string): az_storage_blob_upload_command_builder;
    /** The content MIME type. */
    contentType(value: string): az_storage_blob_upload_command_builder;
    /** A predefined encryption scope used to encrypt the data on the service. */
    encryptionScope(value: string): az_storage_blob_upload_command_builder;
    /** An ETag value, or the wildcard character (\*). Specify this header to perform the operation only if the resource's ETag matches the value specified. */
    ifMatch(value: string): az_storage_blob_upload_command_builder;
    /** Commence only if modified since supplied UTC datetime (Y-m-d'T'H:M'Z'). */
    ifModifiedSince(value: string): az_storage_blob_upload_command_builder;
    /** An ETag value, or the wildcard character (\*). Specify this header to perform the operation only if the resource's ETag does not match the value specified. Specify the wildcard character (\*) to perform the operation only if the resource does not exist, and fail the operation if it does exist. */
    ifNoneMatch(value: string): az_storage_blob_upload_command_builder;
    /** Commence only if unmodified since supplied UTC datetime (Y-m-d'T'H:M'Z'). */
    ifUnmodifiedSince(value: string): az_storage_blob_upload_command_builder;
    /** Required if the blob has an active lease. */
    leaseId(value: string): az_storage_blob_upload_command_builder;
    /** Maximum number of parallel connections to use when the blob size exceeds 64MB. */
    maxConnections(value: string): az_storage_blob_upload_command_builder;
    /** The max length in bytes permitted for an append blob. */
    maxsizeCondition(value: string): az_storage_blob_upload_command_builder;
    /** Metadata in space-separated key=value pairs. This overwrites any existing metadata. */
    metadata(value: string): az_storage_blob_upload_command_builder;
    /** Include this flag to disable progress reporting for the command. */
    noProgress(value: string): az_storage_blob_upload_command_builder;
    /** A Shared Access Signature (SAS). Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_SAS_TOKEN. */
    sasToken(value: string): az_storage_blob_upload_command_builder;
    /** The socket timeout(secs), used by the service to regulate data flow. */
    socketTimeout(value: string): az_storage_blob_upload_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_storage_blob_upload_command_builder;
    /** A page blob tier value to set the blob to. The tier correlates to the size of the blob and number of allowed IOPS. This is only applicable to page blobs on premium storage accounts. */
    tier(value: 'P10' | 'P20' | 'P30' | 'P4' | 'P40' | 'P50' | 'P6' | 'P60'): az_storage_blob_upload_command_builder;
    /** Request timeout in seconds. Applies to each call to the service. */
    timeout(value: string): az_storage_blob_upload_command_builder;
    /** Defaults to 'page' for \*.vhd files, or 'block' otherwise. */
    type(value: 'append' | 'block' | 'page'): az_storage_blob_upload_command_builder;
    /** Specifies that an MD5 hash shall be calculated for each chunk of the blob and verified by the service when the chunk has arrived. */
    validateContent(value: string): az_storage_blob_upload_command_builder;
}
/**
 * Upload files from a local directory to a blob container.
 *
 * Syntax:
 * ```
 * az storage blob upload-batch --destination
 *                              --source
 *                              [--account-key]
 *                              [--account-name]
 *                              [--auth-mode {key, login}]
 *                              [--connection-string]
 *                              [--content-cache-control]
 *                              [--content-disposition]
 *                              [--content-encoding]
 *                              [--content-language]
 *                              [--content-md5]
 *                              [--content-type]
 *                              [--destination-path]
 *                              [--dryrun]
 *                              [--if-match]
 *                              [--if-modified-since]
 *                              [--if-none-match]
 *                              [--if-unmodified-since]
 *                              [--lease-id]
 *                              [--max-connections]
 *                              [--maxsize-condition]
 *                              [--metadata]
 *                              [--no-progress]
 *                              [--pattern]
 *                              [--sas-token]
 *                              [--socket-timeout]
 *                              [--subscription]
 *                              [--timeout]
 *                              [--type {append, block, page}]
 *                              [--validate-content]
 * ```
 *
 * @param {string} destination The blob container where the files will be uploaded.
 * @param {string} source The directory where the files to be uploaded are located.
 */
declare class az_storage_blob_upload_batch_command_builder extends CommandBuilder<az_storage_blob_upload_batch_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, destination: string, source: string);
    /** The blob container where the files will be uploaded. */
    destination(value: string): az_storage_blob_upload_batch_command_builder;
    /** The directory where the files to be uploaded are located. */
    source(value: string): az_storage_blob_upload_batch_command_builder;
    /** Storage account key. Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_KEY. */
    accountKey(value: string): az_storage_blob_upload_batch_command_builder;
    /** Storage account name. Related environment variable: AZURE_STORAGE_ACCOUNT. Must be used in conjunction with either storage account key or a SAS token. If neither are present, the command will try to query the storage account key using the authenticated Azure account. If a large number of storage commands are executed the API quota may be hit. */
    accountName(value: string): az_storage_blob_upload_batch_command_builder;
    /** The mode in which to run the command. "login" mode will directly use your login credentials for the authentication. The legacy "key" mode will attempt to query for an account key if no authentication parameters for the account are provided. Environment variable: AZURE_STORAGE_AUTH_MODE. */
    authMode(value: 'key' | 'login'): az_storage_blob_upload_batch_command_builder;
    /** Storage account connection string. Environment variable: AZURE_STORAGE_CONNECTION_STRING. */
    connectionString(value: string): az_storage_blob_upload_batch_command_builder;
    /** The cache control string. */
    contentCacheControl(value: string): az_storage_blob_upload_batch_command_builder;
    /** Conveys additional information about how to process the response payload, and can also be used to attach additional metadata. */
    contentDisposition(value: string): az_storage_blob_upload_batch_command_builder;
    /** The content encoding type. */
    contentEncoding(value: string): az_storage_blob_upload_batch_command_builder;
    /** The content language. */
    contentLanguage(value: string): az_storage_blob_upload_batch_command_builder;
    /** The content's MD5 hash. */
    contentMd5(value: string): az_storage_blob_upload_batch_command_builder;
    /** The content MIME type. */
    contentType(value: string): az_storage_blob_upload_batch_command_builder;
    /** The destination path that will be appended to the blob name. */
    destinationPath(value: string): az_storage_blob_upload_batch_command_builder;
    /** Show the summary of the operations to be taken instead of actually uploading the file(s). */
    dryrun(value: string): az_storage_blob_upload_batch_command_builder;
    /** An ETag value, or the wildcard character (\*). Specify this header to perform the operation only if the resource's ETag matches the value specified. */
    ifMatch(value: string): az_storage_blob_upload_batch_command_builder;
    /** Commence only if modified since supplied UTC datetime (Y-m-d'T'H:M'Z'). */
    ifModifiedSince(value: string): az_storage_blob_upload_batch_command_builder;
    /** An ETag value, or the wildcard character (\*). */
    ifNoneMatch(value: string): az_storage_blob_upload_batch_command_builder;
    /** Commence only if unmodified since supplied UTC datetime (Y-m-d'T'H:M'Z'). */
    ifUnmodifiedSince(value: string): az_storage_blob_upload_batch_command_builder;
    /** The active lease id for the blob. */
    leaseId(value: string): az_storage_blob_upload_batch_command_builder;
    /** Maximum number of parallel connections to use when the blob size exceeds 64MB. */
    maxConnections(value: string): az_storage_blob_upload_batch_command_builder;
    /** The max length in bytes permitted for an append blob. */
    maxsizeCondition(value: string): az_storage_blob_upload_batch_command_builder;
    /** Metadata in space-separated key=value pairs. This overwrites any existing metadata. */
    metadata(value: string): az_storage_blob_upload_batch_command_builder;
    /** Include this flag to disable progress reporting for the command. */
    noProgress(value: string): az_storage_blob_upload_batch_command_builder;
    /** The pattern used for globbing files or blobs in the source. The supported patterns are '\*', '?', '[seq]', and '[!seq]'. For more information, please refer to <a href="https://docs.python.org/3.7/library/fnmatch.html">https://docs.python.org/3.7/library/fnmatch.html</a>. */
    pattern(value: string): az_storage_blob_upload_batch_command_builder;
    /** A Shared Access Signature (SAS). Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_SAS_TOKEN. */
    sasToken(value: string): az_storage_blob_upload_batch_command_builder;
    /** The socket timeout(secs), used by the service to regulate data flow. */
    socketTimeout(value: string): az_storage_blob_upload_batch_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_storage_blob_upload_batch_command_builder;
    /** Request timeout in seconds. Applies to each call to the service. */
    timeout(value: string): az_storage_blob_upload_batch_command_builder;
    /** Defaults to 'page' for \*.vhd files, or 'block' otherwise. The setting will override blob types for every file. */
    type(value: 'append' | 'block' | 'page'): az_storage_blob_upload_batch_command_builder;
    /** Specifies that an MD5 hash shall be calculated for each chunk of the blob and verified by the service when the chunk has arrived. */
    validateContent(value: string): az_storage_blob_upload_batch_command_builder;
}
/**
 * Create the url to access a blob.
 *
 * Syntax:
 * ```
 * az storage blob url --container-name
 *                     --name
 *                     [--account-key]
 *                     [--account-name]
 *                     [--auth-mode {key, login}]
 *                     [--connection-string]
 *                     [--protocol {http, https}]
 *                     [--sas-token]
 *                     [--snapshot]
 *                     [--subscription]
 * ```
 *
 * @param {string} containerName The container name.
 * @param {string} name The blob name.
 */
declare class az_storage_blob_url_command_builder extends CommandBuilder<az_storage_blob_url_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, containerName: string, name: string);
    /** The container name. */
    containerName(value: string): az_storage_blob_url_command_builder;
    /** The blob name. */
    name(value: string): az_storage_blob_url_command_builder;
    /** Storage account key. Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_KEY. */
    accountKey(value: string): az_storage_blob_url_command_builder;
    /** Storage account name. Related environment variable: AZURE_STORAGE_ACCOUNT. Must be used in conjunction with either storage account key or a SAS token. If neither are present, the command will try to query the storage account key using the authenticated Azure account. If a large number of storage commands are executed the API quota may be hit. */
    accountName(value: string): az_storage_blob_url_command_builder;
    /** The mode in which to run the command. "login" mode will directly use your login credentials for the authentication. The legacy "key" mode will attempt to query for an account key if no authentication parameters for the account are provided. Environment variable: AZURE_STORAGE_AUTH_MODE. */
    authMode(value: 'key' | 'login'): az_storage_blob_url_command_builder;
    /** Storage account connection string. Environment variable: AZURE_STORAGE_CONNECTION_STRING. */
    connectionString(value: string): az_storage_blob_url_command_builder;
    /** Protocol to use. */
    protocol(value: 'http' | 'https'): az_storage_blob_url_command_builder;
    /** A Shared Access Signature (SAS). Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_SAS_TOKEN. */
    sasToken(value: string): az_storage_blob_url_command_builder;
    /** An string value that uniquely identifies the snapshot. The value ofthis query parameter indicates the snapshot version. */
    snapshot(value: string): az_storage_blob_url_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_storage_blob_url_command_builder;
}
/**
 * Creates or updates an unlocked immutability policy.
 *
 * Syntax:
 * ```
 * az storage container immutability-policy create --account-name
 *                                                 --container-name
 *                                                 [--allow-protected-append-writes {false, true}]
 *                                                 [--if-match]
 *                                                 [--period]
 *                                                 [--resource-group]
 *                                                 [--subscription]
 * ```
 *
 * @param {string} accountName The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
 * @param {string} containerName The container name.
 */
declare class az_storage_container_immutability_policy_create_command_builder extends CommandBuilder<az_storage_container_immutability_policy_create_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, accountName: string, containerName: string);
    /** The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only. */
    accountName(value: string): az_storage_container_immutability_policy_create_command_builder;
    /** The container name. */
    containerName(value: string): az_storage_container_immutability_policy_create_command_builder;
    /** This property can only be changed for unlocked time-based retention policies. When enabled, new blocks can be written to an append blob while maintaining immutability protection and compliance. Only new blocks can be added and any existing blocks cannot be modified or deleted. This property cannot be changed with ExtendImmutabilityPolicy API. */
    allowProtectedAppendWrites(value: boolean): az_storage_container_immutability_policy_create_command_builder;
    /** The entity state (ETag) version of the immutability policy to update. A value of "\*" can be used to apply the operation only if the immutability policy already exists. If omitted, this operation will always be applied. */
    ifMatch(value: string): az_storage_container_immutability_policy_create_command_builder;
    /** The immutability period for the blobs in the container since the policy creation, in days. */
    period(value: string): az_storage_container_immutability_policy_create_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_storage_container_immutability_policy_create_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_storage_container_immutability_policy_create_command_builder;
}
/**
 * Aborts an unlocked immutability policy.
 *
 * Syntax:
 * ```
 * az storage container immutability-policy delete --account-name
 *                                                 --container-name
 *                                                 --if-match
 *                                                 [--resource-group]
 *                                                 [--subscription]
 * ```
 *
 * @param {string} accountName The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
 * @param {string} containerName The container name.
 * @param {string} ifMatch The entity state (ETag) version of the immutability policy to update. A value of "\*" can be used to apply the operation only if the immutability policy already exists. If omitted, this operation will always be applied.
 */
declare class az_storage_container_immutability_policy_delete_command_builder extends CommandBuilder<az_storage_container_immutability_policy_delete_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, accountName: string, containerName: string, ifMatch: string);
    /** The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only. */
    accountName(value: string): az_storage_container_immutability_policy_delete_command_builder;
    /** The container name. */
    containerName(value: string): az_storage_container_immutability_policy_delete_command_builder;
    /** The entity state (ETag) version of the immutability policy to update. A value of "\*" can be used to apply the operation only if the immutability policy already exists. If omitted, this operation will always be applied. */
    ifMatch(value: string): az_storage_container_immutability_policy_delete_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_storage_container_immutability_policy_delete_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_storage_container_immutability_policy_delete_command_builder;
}
/**
 * Extends the immutabilityPeriodSinceCreationInDays of a locked immutabilityPolicy.
 *
 * Syntax:
 * ```
 * az storage container immutability-policy extend --account-name
 *                                                 --container-name
 *                                                 --if-match
 *                                                 [--allow-protected-append-writes {false, true}]
 *                                                 [--period]
 *                                                 [--resource-group]
 *                                                 [--subscription]
 * ```
 *
 * @param {string} accountName The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
 * @param {string} containerName The container name.
 * @param {string} ifMatch The entity state (ETag) version of the immutability policy to update. A value of "\*" can be used to apply the operation only if the immutability policy already exists. If omitted, this operation will always be applied.
 */
declare class az_storage_container_immutability_policy_extend_command_builder extends CommandBuilder<az_storage_container_immutability_policy_extend_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, accountName: string, containerName: string, ifMatch: string);
    /** The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only. */
    accountName(value: string): az_storage_container_immutability_policy_extend_command_builder;
    /** The container name. */
    containerName(value: string): az_storage_container_immutability_policy_extend_command_builder;
    /** The entity state (ETag) version of the immutability policy to update. A value of "\*" can be used to apply the operation only if the immutability policy already exists. If omitted, this operation will always be applied. */
    ifMatch(value: string): az_storage_container_immutability_policy_extend_command_builder;
    /** This property can only be changed for unlocked time-based retention policies. When enabled, new blocks can be written to an append blob while maintaining immutability protection and compliance. Only new blocks can be added and any existing blocks cannot be modified or deleted. This property cannot be changed with ExtendImmutabilityPolicy API. */
    allowProtectedAppendWrites(value: boolean): az_storage_container_immutability_policy_extend_command_builder;
    /** The immutability period for the blobs in the container since the policy creation, in days. */
    period(value: string): az_storage_container_immutability_policy_extend_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_storage_container_immutability_policy_extend_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_storage_container_immutability_policy_extend_command_builder;
}
/**
 * Sets the ImmutabilityPolicy to Locked state.
 *
 * Syntax:
 * ```
 * az storage container immutability-policy lock --account-name
 *                                               --container-name
 *                                               --if-match
 *                                               [--resource-group]
 *                                               [--subscription]
 * ```
 *
 * @param {string} accountName The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
 * @param {string} containerName The container name.
 * @param {string} ifMatch The entity state (ETag) version of the immutability policy to update. A value of "\*" can be used to apply the operation only if the immutability policy already exists. If omitted, this operation will always be applied.
 */
declare class az_storage_container_immutability_policy_lock_command_builder extends CommandBuilder<az_storage_container_immutability_policy_lock_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, accountName: string, containerName: string, ifMatch: string);
    /** The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only. */
    accountName(value: string): az_storage_container_immutability_policy_lock_command_builder;
    /** The container name. */
    containerName(value: string): az_storage_container_immutability_policy_lock_command_builder;
    /** The entity state (ETag) version of the immutability policy to update. A value of "\*" can be used to apply the operation only if the immutability policy already exists. If omitted, this operation will always be applied. */
    ifMatch(value: string): az_storage_container_immutability_policy_lock_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_storage_container_immutability_policy_lock_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_storage_container_immutability_policy_lock_command_builder;
}
/**
 * Gets the existing immutability policy along with the corresponding ETag in response headers and body.
 *
 * Syntax:
 * ```
 * az storage container immutability-policy show --account-name
 *                                               --container-name
 *                                               [--if-match]
 *                                               [--query-examples]
 *                                               [--resource-group]
 *                                               [--subscription]
 * ```
 *
 * @param {string} accountName The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
 * @param {string} containerName The container name.
 */
declare class az_storage_container_immutability_policy_show_command_builder extends CommandBuilder<az_storage_container_immutability_policy_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, accountName: string, containerName: string);
    /** The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only. */
    accountName(value: string): az_storage_container_immutability_policy_show_command_builder;
    /** The container name. */
    containerName(value: string): az_storage_container_immutability_policy_show_command_builder;
    /** The entity state (ETag) version of the immutability policy to update. A value of "\*" can be used to apply the operation only if the immutability policy already exists. If omitted, this operation will always be applied. */
    ifMatch(value: string): az_storage_container_immutability_policy_show_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_storage_container_immutability_policy_show_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_storage_container_immutability_policy_show_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_storage_container_immutability_policy_show_command_builder;
}
/**
 * Requests a new lease.
 *
 * Syntax:
 * ```
 * az storage container lease acquire --container-name
 *                                    [--account-key]
 *                                    [--account-name]
 *                                    [--auth-mode {key, login}]
 *                                    [--connection-string]
 *                                    [--if-modified-since]
 *                                    [--if-unmodified-since]
 *                                    [--lease-duration]
 *                                    [--proposed-lease-id]
 *                                    [--sas-token]
 *                                    [--subscription]
 *                                    [--timeout]
 * ```
 *
 * @param {string} containerName The container name.
 */
declare class az_storage_container_lease_acquire_command_builder extends CommandBuilder<az_storage_container_lease_acquire_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, containerName: string);
    /** The container name. */
    containerName(value: string): az_storage_container_lease_acquire_command_builder;
    /** Storage account key. Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_KEY. */
    accountKey(value: string): az_storage_container_lease_acquire_command_builder;
    /** Storage account name. Related environment variable: AZURE_STORAGE_ACCOUNT. Must be used in conjunction with either storage account key or a SAS token. If neither are present, the command will try to query the storage account key using the authenticated Azure account. If a large number of storage commands are executed the API quota may be hit. */
    accountName(value: string): az_storage_container_lease_acquire_command_builder;
    /** The mode in which to run the command. "login" mode will directly use your login credentials for the authentication. The legacy "key" mode will attempt to query for an account key if no authentication parameters for the account are provided. Environment variable: AZURE_STORAGE_AUTH_MODE. */
    authMode(value: 'key' | 'login'): az_storage_container_lease_acquire_command_builder;
    /** Storage account connection string. Environment variable: AZURE_STORAGE_CONNECTION_STRING. */
    connectionString(value: string): az_storage_container_lease_acquire_command_builder;
    /** Commence only if modified since supplied UTC datetime (Y-m-d'T'H:M'Z'). */
    ifModifiedSince(value: string): az_storage_container_lease_acquire_command_builder;
    /** Commence only if unmodified since supplied UTC datetime (Y-m-d'T'H:M'Z'). */
    ifUnmodifiedSince(value: string): az_storage_container_lease_acquire_command_builder;
    /** Specifies the duration of the lease, in seconds, or negative one (-1) for a lease that never expires. A non-infinite lease can be between 15 and 60 seconds. A lease duration cannot be changed using renew or change. Default is -1 (infinite lease). */
    leaseDuration(value: string): az_storage_container_lease_acquire_command_builder;
    /** Proposed lease ID, in a GUID string format. The Blob service returns 400 (Invalid request) if the proposed lease ID is not in the correct format. */
    proposedLeaseId(value: string): az_storage_container_lease_acquire_command_builder;
    /** A Shared Access Signature (SAS). Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_SAS_TOKEN. */
    sasToken(value: string): az_storage_container_lease_acquire_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_storage_container_lease_acquire_command_builder;
    /** Request timeout in seconds. Applies to each call to the service. */
    timeout(value: string): az_storage_container_lease_acquire_command_builder;
}
/**
 * Break the lease, if the container has an active lease.
 *
 * Syntax:
 * ```
 * az storage container lease break --container-name
 *                                  [--account-key]
 *                                  [--account-name]
 *                                  [--auth-mode {key, login}]
 *                                  [--connection-string]
 *                                  [--if-modified-since]
 *                                  [--if-unmodified-since]
 *                                  [--lease-break-period]
 *                                  [--sas-token]
 *                                  [--subscription]
 *                                  [--timeout]
 * ```
 *
 * @param {string} containerName The container name.
 */
declare class az_storage_container_lease_break_command_builder extends CommandBuilder<az_storage_container_lease_break_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, containerName: string);
    /** The container name. */
    containerName(value: string): az_storage_container_lease_break_command_builder;
    /** Storage account key. Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_KEY. */
    accountKey(value: string): az_storage_container_lease_break_command_builder;
    /** Storage account name. Related environment variable: AZURE_STORAGE_ACCOUNT. Must be used in conjunction with either storage account key or a SAS token. If neither are present, the command will try to query the storage account key using the authenticated Azure account. If a large number of storage commands are executed the API quota may be hit. */
    accountName(value: string): az_storage_container_lease_break_command_builder;
    /** The mode in which to run the command. "login" mode will directly use your login credentials for the authentication. The legacy "key" mode will attempt to query for an account key if no authentication parameters for the account are provided. Environment variable: AZURE_STORAGE_AUTH_MODE. */
    authMode(value: 'key' | 'login'): az_storage_container_lease_break_command_builder;
    /** Storage account connection string. Environment variable: AZURE_STORAGE_CONNECTION_STRING. */
    connectionString(value: string): az_storage_container_lease_break_command_builder;
    /** Commence only if modified since supplied UTC datetime (Y-m-d'T'H:M'Z'). */
    ifModifiedSince(value: string): az_storage_container_lease_break_command_builder;
    /** Commence only if unmodified since supplied UTC datetime (Y-m-d'T'H:M'Z'). */
    ifUnmodifiedSince(value: string): az_storage_container_lease_break_command_builder;
    /** This is the proposed duration of seconds that the lease should continue before it is broken, between 0 and 60 seconds. This break period is only used if it is shorter than the time remaining on the lease. If longer, the time remaining on the lease is used. A new lease will not be available before the break period has expired, but the lease may be held for longer than the break period. If this header does not appear with a break operation, a fixed-duration lease breaks after the remaining lease period elapses, and an infinite lease breaks immediately. */
    leaseBreakPeriod(value: string): az_storage_container_lease_break_command_builder;
    /** A Shared Access Signature (SAS). Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_SAS_TOKEN. */
    sasToken(value: string): az_storage_container_lease_break_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_storage_container_lease_break_command_builder;
    /** Request timeout in seconds. Applies to each call to the service. */
    timeout(value: string): az_storage_container_lease_break_command_builder;
}
/**
 * Change the lease ID of an active lease.
 *
 * Syntax:
 * ```
 * az storage container lease change --container-name
 *                                   --lease-id
 *                                   --proposed-lease-id
 *                                   [--account-key]
 *                                   [--account-name]
 *                                   [--auth-mode {key, login}]
 *                                   [--connection-string]
 *                                   [--if-modified-since]
 *                                   [--if-unmodified-since]
 *                                   [--sas-token]
 *                                   [--subscription]
 *                                   [--timeout]
 * ```
 *
 * @param {string} containerName The container name.
 * @param {string} leaseId Lease ID for active lease.
 * @param {string} proposedLeaseId Proposed lease ID, in a GUID string format. The Blob service returns 400 (Invalid request) if the proposed lease ID is not in the correct format.
 */
declare class az_storage_container_lease_change_command_builder extends CommandBuilder<az_storage_container_lease_change_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, containerName: string, leaseId: string, proposedLeaseId: string);
    /** The container name. */
    containerName(value: string): az_storage_container_lease_change_command_builder;
    /** Lease ID for active lease. */
    leaseId(value: string): az_storage_container_lease_change_command_builder;
    /** Proposed lease ID, in a GUID string format. The Blob service returns 400 (Invalid request) if the proposed lease ID is not in the correct format. */
    proposedLeaseId(value: string): az_storage_container_lease_change_command_builder;
    /** Storage account key. Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_KEY. */
    accountKey(value: string): az_storage_container_lease_change_command_builder;
    /** Storage account name. Related environment variable: AZURE_STORAGE_ACCOUNT. Must be used in conjunction with either storage account key or a SAS token. If neither are present, the command will try to query the storage account key using the authenticated Azure account. If a large number of storage commands are executed the API quota may be hit. */
    accountName(value: string): az_storage_container_lease_change_command_builder;
    /** The mode in which to run the command. "login" mode will directly use your login credentials for the authentication. The legacy "key" mode will attempt to query for an account key if no authentication parameters for the account are provided. Environment variable: AZURE_STORAGE_AUTH_MODE. */
    authMode(value: 'key' | 'login'): az_storage_container_lease_change_command_builder;
    /** Storage account connection string. Environment variable: AZURE_STORAGE_CONNECTION_STRING. */
    connectionString(value: string): az_storage_container_lease_change_command_builder;
    /** Commence only if modified since supplied UTC datetime (Y-m-d'T'H:M'Z'). */
    ifModifiedSince(value: string): az_storage_container_lease_change_command_builder;
    /** Commence only if unmodified since supplied UTC datetime (Y-m-d'T'H:M'Z'). */
    ifUnmodifiedSince(value: string): az_storage_container_lease_change_command_builder;
    /** A Shared Access Signature (SAS). Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_SAS_TOKEN. */
    sasToken(value: string): az_storage_container_lease_change_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_storage_container_lease_change_command_builder;
    /** Request timeout in seconds. Applies to each call to the service. */
    timeout(value: string): az_storage_container_lease_change_command_builder;
}
/**
 * Release the lease.
 *
 * Syntax:
 * ```
 * az storage container lease release --container-name
 *                                    --lease-id
 *                                    [--account-key]
 *                                    [--account-name]
 *                                    [--auth-mode {key, login}]
 *                                    [--connection-string]
 *                                    [--if-modified-since]
 *                                    [--if-unmodified-since]
 *                                    [--sas-token]
 *                                    [--subscription]
 *                                    [--timeout]
 * ```
 *
 * @param {string} containerName The container name.
 * @param {string} leaseId Lease ID for active lease.
 */
declare class az_storage_container_lease_release_command_builder extends CommandBuilder<az_storage_container_lease_release_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, containerName: string, leaseId: string);
    /** The container name. */
    containerName(value: string): az_storage_container_lease_release_command_builder;
    /** Lease ID for active lease. */
    leaseId(value: string): az_storage_container_lease_release_command_builder;
    /** Storage account key. Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_KEY. */
    accountKey(value: string): az_storage_container_lease_release_command_builder;
    /** Storage account name. Related environment variable: AZURE_STORAGE_ACCOUNT. Must be used in conjunction with either storage account key or a SAS token. If neither are present, the command will try to query the storage account key using the authenticated Azure account. If a large number of storage commands are executed the API quota may be hit. */
    accountName(value: string): az_storage_container_lease_release_command_builder;
    /** The mode in which to run the command. "login" mode will directly use your login credentials for the authentication. The legacy "key" mode will attempt to query for an account key if no authentication parameters for the account are provided. Environment variable: AZURE_STORAGE_AUTH_MODE. */
    authMode(value: 'key' | 'login'): az_storage_container_lease_release_command_builder;
    /** Storage account connection string. Environment variable: AZURE_STORAGE_CONNECTION_STRING. */
    connectionString(value: string): az_storage_container_lease_release_command_builder;
    /** Commence only if modified since supplied UTC datetime (Y-m-d'T'H:M'Z'). */
    ifModifiedSince(value: string): az_storage_container_lease_release_command_builder;
    /** Commence only if unmodified since supplied UTC datetime (Y-m-d'T'H:M'Z'). */
    ifUnmodifiedSince(value: string): az_storage_container_lease_release_command_builder;
    /** A Shared Access Signature (SAS). Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_SAS_TOKEN. */
    sasToken(value: string): az_storage_container_lease_release_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_storage_container_lease_release_command_builder;
    /** Request timeout in seconds. Applies to each call to the service. */
    timeout(value: string): az_storage_container_lease_release_command_builder;
}
/**
 * Renews the lease.
 *
 * Syntax:
 * ```
 * az storage container lease renew --container-name
 *                                  --lease-id
 *                                  [--account-key]
 *                                  [--account-name]
 *                                  [--auth-mode {key, login}]
 *                                  [--connection-string]
 *                                  [--if-modified-since]
 *                                  [--if-unmodified-since]
 *                                  [--sas-token]
 *                                  [--subscription]
 *                                  [--timeout]
 * ```
 *
 * @param {string} containerName The container name.
 * @param {string} leaseId Lease ID for active lease.
 */
declare class az_storage_container_lease_renew_command_builder extends CommandBuilder<az_storage_container_lease_renew_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, containerName: string, leaseId: string);
    /** The container name. */
    containerName(value: string): az_storage_container_lease_renew_command_builder;
    /** Lease ID for active lease. */
    leaseId(value: string): az_storage_container_lease_renew_command_builder;
    /** Storage account key. Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_KEY. */
    accountKey(value: string): az_storage_container_lease_renew_command_builder;
    /** Storage account name. Related environment variable: AZURE_STORAGE_ACCOUNT. Must be used in conjunction with either storage account key or a SAS token. If neither are present, the command will try to query the storage account key using the authenticated Azure account. If a large number of storage commands are executed the API quota may be hit. */
    accountName(value: string): az_storage_container_lease_renew_command_builder;
    /** The mode in which to run the command. "login" mode will directly use your login credentials for the authentication. The legacy "key" mode will attempt to query for an account key if no authentication parameters for the account are provided. Environment variable: AZURE_STORAGE_AUTH_MODE. */
    authMode(value: 'key' | 'login'): az_storage_container_lease_renew_command_builder;
    /** Storage account connection string. Environment variable: AZURE_STORAGE_CONNECTION_STRING. */
    connectionString(value: string): az_storage_container_lease_renew_command_builder;
    /** Commence only if modified since supplied UTC datetime (Y-m-d'T'H:M'Z'). */
    ifModifiedSince(value: string): az_storage_container_lease_renew_command_builder;
    /** Commence only if unmodified since supplied UTC datetime (Y-m-d'T'H:M'Z'). */
    ifUnmodifiedSince(value: string): az_storage_container_lease_renew_command_builder;
    /** A Shared Access Signature (SAS). Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_SAS_TOKEN. */
    sasToken(value: string): az_storage_container_lease_renew_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_storage_container_lease_renew_command_builder;
    /** Request timeout in seconds. Applies to each call to the service. */
    timeout(value: string): az_storage_container_lease_renew_command_builder;
}
/**
 * Clears legal hold tags.
 *
 * Syntax:
 * ```
 * az storage container legal-hold clear --account-name
 *                                       --container-name
 *                                       --tags
 *                                       [--resource-group]
 *                                       [--subscription]
 * ```
 *
 * @param {string} accountName The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
 * @param {string} containerName The container name.
 * @param {string} tags Each tag should be 3 to 23 alphanumeric characters and is normalized to lower case.
 */
declare class az_storage_container_legal_hold_clear_command_builder extends CommandBuilder<az_storage_container_legal_hold_clear_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, accountName: string, containerName: string, tags: string);
    /** The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only. */
    accountName(value: string): az_storage_container_legal_hold_clear_command_builder;
    /** The container name. */
    containerName(value: string): az_storage_container_legal_hold_clear_command_builder;
    /** Each tag should be 3 to 23 alphanumeric characters and is normalized to lower case. */
    tags(value: string): az_storage_container_legal_hold_clear_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_storage_container_legal_hold_clear_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_storage_container_legal_hold_clear_command_builder;
}
/**
 * Sets legal hold tags.
 *
 * Syntax:
 * ```
 * az storage container legal-hold set --account-name
 *                                     --container-name
 *                                     --tags
 *                                     [--resource-group]
 *                                     [--subscription]
 * ```
 *
 * @param {string} accountName The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
 * @param {string} containerName The container name.
 * @param {string} tags Each tag should be 3 to 23 alphanumeric characters and is normalized to lower case.
 */
declare class az_storage_container_legal_hold_set_command_builder extends CommandBuilder<az_storage_container_legal_hold_set_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, accountName: string, containerName: string, tags: string);
    /** The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only. */
    accountName(value: string): az_storage_container_legal_hold_set_command_builder;
    /** The container name. */
    containerName(value: string): az_storage_container_legal_hold_set_command_builder;
    /** Each tag should be 3 to 23 alphanumeric characters and is normalized to lower case. */
    tags(value: string): az_storage_container_legal_hold_set_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_storage_container_legal_hold_set_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_storage_container_legal_hold_set_command_builder;
}
/**
 * Get the legal hold properties of a container.
 *
 * Syntax:
 * ```
 * az storage container legal-hold show --account-name
 *                                      --container-name
 *                                      [--query-examples]
 *                                      [--resource-group]
 *                                      [--subscription]
 * ```
 *
 * @param {string} accountName The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
 * @param {string} containerName The container name.
 */
declare class az_storage_container_legal_hold_show_command_builder extends CommandBuilder<az_storage_container_legal_hold_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, accountName: string, containerName: string);
    /** The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only. */
    accountName(value: string): az_storage_container_legal_hold_show_command_builder;
    /** The container name. */
    containerName(value: string): az_storage_container_legal_hold_show_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_storage_container_legal_hold_show_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_storage_container_legal_hold_show_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_storage_container_legal_hold_show_command_builder;
}
/**
 * Returns all user-defined metadata for the specified container.
 *
 * Syntax:
 * ```
 * az storage container metadata show --name
 *                                    [--account-key]
 *                                    [--account-name]
 *                                    [--auth-mode {key, login}]
 *                                    [--connection-string]
 *                                    [--lease-id]
 *                                    [--query-examples]
 *                                    [--sas-token]
 *                                    [--subscription]
 *                                    [--timeout]
 * ```
 *
 * @param {string} name The container name.
 */
declare class az_storage_container_metadata_show_command_builder extends CommandBuilder<az_storage_container_metadata_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string);
    /** The container name. */
    name(value: string): az_storage_container_metadata_show_command_builder;
    /** Storage account key. Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_KEY. */
    accountKey(value: string): az_storage_container_metadata_show_command_builder;
    /** Storage account name. Related environment variable: AZURE_STORAGE_ACCOUNT. Must be used in conjunction with either storage account key or a SAS token. If neither are present, the command will try to query the storage account key using the authenticated Azure account. If a large number of storage commands are executed the API quota may be hit. */
    accountName(value: string): az_storage_container_metadata_show_command_builder;
    /** The mode in which to run the command. "login" mode will directly use your login credentials for the authentication. The legacy "key" mode will attempt to query for an account key if no authentication parameters for the account are provided. Environment variable: AZURE_STORAGE_AUTH_MODE. */
    authMode(value: 'key' | 'login'): az_storage_container_metadata_show_command_builder;
    /** Storage account connection string. Environment variable: AZURE_STORAGE_CONNECTION_STRING. */
    connectionString(value: string): az_storage_container_metadata_show_command_builder;
    /** If specified, get_container_metadata only succeeds if the container's lease is active and matches this ID. */
    leaseId(value: string): az_storage_container_metadata_show_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_storage_container_metadata_show_command_builder;
    /** A Shared Access Signature (SAS). Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_SAS_TOKEN. */
    sasToken(value: string): az_storage_container_metadata_show_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_storage_container_metadata_show_command_builder;
    /** Request timeout in seconds. Applies to each call to the service. */
    timeout(value: string): az_storage_container_metadata_show_command_builder;
}
/**
 * Sets one or more user-defined name-value pairs for the specified container.
 *
 * Syntax:
 * ```
 * az storage container metadata update --name
 *                                      [--account-key]
 *                                      [--account-name]
 *                                      [--auth-mode {key, login}]
 *                                      [--connection-string]
 *                                      [--if-modified-since]
 *                                      [--lease-id]
 *                                      [--metadata]
 *                                      [--sas-token]
 *                                      [--subscription]
 *                                      [--timeout]
 * ```
 *
 * @param {string} name The container name.
 */
declare class az_storage_container_metadata_update_command_builder extends CommandBuilder<az_storage_container_metadata_update_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string);
    /** The container name. */
    name(value: string): az_storage_container_metadata_update_command_builder;
    /** Storage account key. Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_KEY. */
    accountKey(value: string): az_storage_container_metadata_update_command_builder;
    /** Storage account name. Related environment variable: AZURE_STORAGE_ACCOUNT. Must be used in conjunction with either storage account key or a SAS token. If neither are present, the command will try to query the storage account key using the authenticated Azure account. If a large number of storage commands are executed the API quota may be hit. */
    accountName(value: string): az_storage_container_metadata_update_command_builder;
    /** The mode in which to run the command. "login" mode will directly use your login credentials for the authentication. The legacy "key" mode will attempt to query for an account key if no authentication parameters for the account are provided. Environment variable: AZURE_STORAGE_AUTH_MODE. */
    authMode(value: 'key' | 'login'): az_storage_container_metadata_update_command_builder;
    /** Storage account connection string. Environment variable: AZURE_STORAGE_CONNECTION_STRING. */
    connectionString(value: string): az_storage_container_metadata_update_command_builder;
    /** Commence only if modified since supplied UTC datetime (Y-m-d'T'H:M'Z'). */
    ifModifiedSince(value: string): az_storage_container_metadata_update_command_builder;
    /** If specified, set_container_metadata only succeeds if the container's lease is active and matches this ID. */
    leaseId(value: string): az_storage_container_metadata_update_command_builder;
    /** Metadata in space-separated key=value pairs. This overwrites any existing metadata. */
    metadata(value: string): az_storage_container_metadata_update_command_builder;
    /** A Shared Access Signature (SAS). Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_SAS_TOKEN. */
    sasToken(value: string): az_storage_container_metadata_update_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_storage_container_metadata_update_command_builder;
    /** Request timeout in seconds. Applies to each call to the service. */
    timeout(value: string): az_storage_container_metadata_update_command_builder;
}
/**
 * Create a stored access policy on the containing object.
 *
 * Syntax:
 * ```
 * az storage container policy create --container-name
 *                                    --name
 *                                    [--account-key]
 *                                    [--account-name]
 *                                    [--auth-mode {key, login}]
 *                                    [--connection-string]
 *                                    [--expiry]
 *                                    [--lease-id]
 *                                    [--permissions]
 *                                    [--sas-token]
 *                                    [--start]
 *                                    [--subscription]
 * ```
 *
 * @param {string} containerName The container name.
 * @param {string} name The stored access policy name.
 */
declare class az_storage_container_policy_create_command_builder extends CommandBuilder<az_storage_container_policy_create_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, containerName: string, name: string);
    /** The container name. */
    containerName(value: string): az_storage_container_policy_create_command_builder;
    /** The stored access policy name. */
    name(value: string): az_storage_container_policy_create_command_builder;
    /** Storage account key. Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_KEY. */
    accountKey(value: string): az_storage_container_policy_create_command_builder;
    /** Storage account name. Related environment variable: AZURE_STORAGE_ACCOUNT. Must be used in conjunction with either storage account key or a SAS token. If neither are present, the command will try to query the storage account key using the authenticated Azure account. If a large number of storage commands are executed the API quota may be hit. */
    accountName(value: string): az_storage_container_policy_create_command_builder;
    /** The mode in which to run the command. "login" mode will directly use your login credentials for the authentication. The legacy "key" mode will attempt to query for an account key if no authentication parameters for the account are provided. Environment variable: AZURE_STORAGE_AUTH_MODE. */
    authMode(value: 'key' | 'login'): az_storage_container_policy_create_command_builder;
    /** Storage account connection string. Environment variable: AZURE_STORAGE_CONNECTION_STRING. */
    connectionString(value: string): az_storage_container_policy_create_command_builder;
    /** Expiration UTC datetime in (Y-m-d'T'H:M:S'Z'). */
    expiry(value: string): az_storage_container_policy_create_command_builder;
    /** The container lease ID. */
    leaseId(value: string): az_storage_container_policy_create_command_builder;
    /** Allowed values: (a)dd (c)reate (d)elete (l)ist (r)ead (w)rite. Can be combined. */
    permissions(value: string): az_storage_container_policy_create_command_builder;
    /** A Shared Access Signature (SAS). Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_SAS_TOKEN. */
    sasToken(value: string): az_storage_container_policy_create_command_builder;
    /** Start UTC datetime (Y-m-d'T'H:M:S'Z'). Defaults to time of request. */
    start(value: string): az_storage_container_policy_create_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_storage_container_policy_create_command_builder;
}
/**
 * Delete a stored access policy on a containing object.
 *
 * Syntax:
 * ```
 * az storage container policy delete --container-name
 *                                    --name
 *                                    [--account-key]
 *                                    [--account-name]
 *                                    [--auth-mode {key, login}]
 *                                    [--connection-string]
 *                                    [--lease-id]
 *                                    [--sas-token]
 *                                    [--subscription]
 * ```
 *
 * @param {string} containerName The container name.
 * @param {string} name The stored access policy name.
 */
declare class az_storage_container_policy_delete_command_builder extends CommandBuilder<az_storage_container_policy_delete_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, containerName: string, name: string);
    /** The container name. */
    containerName(value: string): az_storage_container_policy_delete_command_builder;
    /** The stored access policy name. */
    name(value: string): az_storage_container_policy_delete_command_builder;
    /** Storage account key. Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_KEY. */
    accountKey(value: string): az_storage_container_policy_delete_command_builder;
    /** Storage account name. Related environment variable: AZURE_STORAGE_ACCOUNT. Must be used in conjunction with either storage account key or a SAS token. If neither are present, the command will try to query the storage account key using the authenticated Azure account. If a large number of storage commands are executed the API quota may be hit. */
    accountName(value: string): az_storage_container_policy_delete_command_builder;
    /** The mode in which to run the command. "login" mode will directly use your login credentials for the authentication. The legacy "key" mode will attempt to query for an account key if no authentication parameters for the account are provided. Environment variable: AZURE_STORAGE_AUTH_MODE. */
    authMode(value: 'key' | 'login'): az_storage_container_policy_delete_command_builder;
    /** Storage account connection string. Environment variable: AZURE_STORAGE_CONNECTION_STRING. */
    connectionString(value: string): az_storage_container_policy_delete_command_builder;
    /** The container lease ID. */
    leaseId(value: string): az_storage_container_policy_delete_command_builder;
    /** A Shared Access Signature (SAS). Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_SAS_TOKEN. */
    sasToken(value: string): az_storage_container_policy_delete_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_storage_container_policy_delete_command_builder;
}
/**
 * List stored access policies on a containing object.
 *
 * Syntax:
 * ```
 * az storage container policy list --container-name
 *                                  [--account-key]
 *                                  [--account-name]
 *                                  [--auth-mode {key, login}]
 *                                  [--connection-string]
 *                                  [--lease-id]
 *                                  [--query-examples]
 *                                  [--sas-token]
 *                                  [--subscription]
 * ```
 *
 * @param {string} containerName The container name.
 */
declare class az_storage_container_policy_list_command_builder extends CommandBuilder<az_storage_container_policy_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, containerName: string);
    /** The container name. */
    containerName(value: string): az_storage_container_policy_list_command_builder;
    /** Storage account key. Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_KEY. */
    accountKey(value: string): az_storage_container_policy_list_command_builder;
    /** Storage account name. Related environment variable: AZURE_STORAGE_ACCOUNT. Must be used in conjunction with either storage account key or a SAS token. If neither are present, the command will try to query the storage account key using the authenticated Azure account. If a large number of storage commands are executed the API quota may be hit. */
    accountName(value: string): az_storage_container_policy_list_command_builder;
    /** The mode in which to run the command. "login" mode will directly use your login credentials for the authentication. The legacy "key" mode will attempt to query for an account key if no authentication parameters for the account are provided. Environment variable: AZURE_STORAGE_AUTH_MODE. */
    authMode(value: 'key' | 'login'): az_storage_container_policy_list_command_builder;
    /** Storage account connection string. Environment variable: AZURE_STORAGE_CONNECTION_STRING. */
    connectionString(value: string): az_storage_container_policy_list_command_builder;
    /** The container lease ID. */
    leaseId(value: string): az_storage_container_policy_list_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_storage_container_policy_list_command_builder;
    /** A Shared Access Signature (SAS). Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_SAS_TOKEN. */
    sasToken(value: string): az_storage_container_policy_list_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_storage_container_policy_list_command_builder;
}
/**
 * Show a stored access policy on a containing object.
 *
 * Syntax:
 * ```
 * az storage container policy show --container-name
 *                                  --name
 *                                  [--account-key]
 *                                  [--account-name]
 *                                  [--auth-mode {key, login}]
 *                                  [--connection-string]
 *                                  [--lease-id]
 *                                  [--query-examples]
 *                                  [--sas-token]
 *                                  [--subscription]
 * ```
 *
 * @param {string} containerName The container name.
 * @param {string} name The stored access policy name.
 */
declare class az_storage_container_policy_show_command_builder extends CommandBuilder<az_storage_container_policy_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, containerName: string, name: string);
    /** The container name. */
    containerName(value: string): az_storage_container_policy_show_command_builder;
    /** The stored access policy name. */
    name(value: string): az_storage_container_policy_show_command_builder;
    /** Storage account key. Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_KEY. */
    accountKey(value: string): az_storage_container_policy_show_command_builder;
    /** Storage account name. Related environment variable: AZURE_STORAGE_ACCOUNT. Must be used in conjunction with either storage account key or a SAS token. If neither are present, the command will try to query the storage account key using the authenticated Azure account. If a large number of storage commands are executed the API quota may be hit. */
    accountName(value: string): az_storage_container_policy_show_command_builder;
    /** The mode in which to run the command. "login" mode will directly use your login credentials for the authentication. The legacy "key" mode will attempt to query for an account key if no authentication parameters for the account are provided. Environment variable: AZURE_STORAGE_AUTH_MODE. */
    authMode(value: 'key' | 'login'): az_storage_container_policy_show_command_builder;
    /** Storage account connection string. Environment variable: AZURE_STORAGE_CONNECTION_STRING. */
    connectionString(value: string): az_storage_container_policy_show_command_builder;
    /** The container lease ID. */
    leaseId(value: string): az_storage_container_policy_show_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_storage_container_policy_show_command_builder;
    /** A Shared Access Signature (SAS). Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_SAS_TOKEN. */
    sasToken(value: string): az_storage_container_policy_show_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_storage_container_policy_show_command_builder;
}
/**
 * Set a stored access policy on a containing object.
 *
 * Syntax:
 * ```
 * az storage container policy update --container-name
 *                                    --name
 *                                    [--account-key]
 *                                    [--account-name]
 *                                    [--auth-mode {key, login}]
 *                                    [--connection-string]
 *                                    [--expiry]
 *                                    [--lease-id]
 *                                    [--permissions]
 *                                    [--sas-token]
 *                                    [--start]
 *                                    [--subscription]
 * ```
 *
 * @param {string} containerName The container name.
 * @param {string} name The stored access policy name.
 */
declare class az_storage_container_policy_update_command_builder extends CommandBuilder<az_storage_container_policy_update_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, containerName: string, name: string);
    /** The container name. */
    containerName(value: string): az_storage_container_policy_update_command_builder;
    /** The stored access policy name. */
    name(value: string): az_storage_container_policy_update_command_builder;
    /** Storage account key. Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_KEY. */
    accountKey(value: string): az_storage_container_policy_update_command_builder;
    /** Storage account name. Related environment variable: AZURE_STORAGE_ACCOUNT. Must be used in conjunction with either storage account key or a SAS token. If neither are present, the command will try to query the storage account key using the authenticated Azure account. If a large number of storage commands are executed the API quota may be hit. */
    accountName(value: string): az_storage_container_policy_update_command_builder;
    /** The mode in which to run the command. "login" mode will directly use your login credentials for the authentication. The legacy "key" mode will attempt to query for an account key if no authentication parameters for the account are provided. Environment variable: AZURE_STORAGE_AUTH_MODE. */
    authMode(value: 'key' | 'login'): az_storage_container_policy_update_command_builder;
    /** Storage account connection string. Environment variable: AZURE_STORAGE_CONNECTION_STRING. */
    connectionString(value: string): az_storage_container_policy_update_command_builder;
    /** Expiration UTC datetime in (Y-m-d'T'H:M:S'Z'). */
    expiry(value: string): az_storage_container_policy_update_command_builder;
    /** The container lease ID. */
    leaseId(value: string): az_storage_container_policy_update_command_builder;
    /** Allowed values: (a)dd (c)reate (d)elete (l)ist (r)ead (w)rite. Can be combined. */
    permissions(value: string): az_storage_container_policy_update_command_builder;
    /** A Shared Access Signature (SAS). Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_SAS_TOKEN. */
    sasToken(value: string): az_storage_container_policy_update_command_builder;
    /** Start UTC datetime (Y-m-d'T'H:M:S'Z'). Defaults to time of request. */
    start(value: string): az_storage_container_policy_update_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_storage_container_policy_update_command_builder;
}
/**
 * Create a container in a storage account.
 *
 * Syntax:
 * ```
 * az storage container create --name
 *                             [--account-key]
 *                             [--account-name]
 *                             [--auth-mode {key, login}]
 *                             [--connection-string]
 *                             [--default-encryption-scope]
 *                             [--fail-on-exist]
 *                             [--metadata]
 *                             [--prevent-encryption-scope-override {false, true}]
 *                             [--public-access {blob, container, off}]
 *                             [--resource-group]
 *                             [--sas-token]
 *                             [--subscription]
 *                             [--timeout]
 * ```
 *
 * @param {string} name The container name.
 */
declare class az_storage_container_create_command_builder extends CommandBuilder<az_storage_container_create_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string);
    /** The container name. */
    name(value: string): az_storage_container_create_command_builder;
    /** Storage account key. Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_KEY. */
    accountKey(value: string): az_storage_container_create_command_builder;
    /** Storage account name. Related environment variable: AZURE_STORAGE_ACCOUNT. */
    accountName(value: string): az_storage_container_create_command_builder;
    /** The mode in which to run the command. "login" mode will directly use your login credentials for the authentication. The legacy "key" mode will attempt to query for an account key if no authentication parameters for the account are provided. Environment variable: AZURE_STORAGE_AUTH_MODE. */
    authMode(value: 'key' | 'login'): az_storage_container_create_command_builder;
    /** Storage account connection string. Environment variable: AZURE_STORAGE_CONNECTION_STRING. */
    connectionString(value: string): az_storage_container_create_command_builder;
    /** Default the container to use specified encryption scope for all writes. */
    defaultEncryptionScope(value: string): az_storage_container_create_command_builder;
    /** Throw an exception if the container already exists. */
    failOnExist(value: string): az_storage_container_create_command_builder;
    /** Metadata in space-separated key=value pairs. This overwrites any existing metadata. */
    metadata(value: string): az_storage_container_create_command_builder;
    /** Block override of encryption scope from the container default. */
    preventEncryptionScopeOverride(value: boolean): az_storage_container_create_command_builder;
    /** Specifies whether data in the container may be accessed publicly. */
    publicAccess(value: 'blob' | 'container' | 'off'): az_storage_container_create_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_storage_container_create_command_builder;
    /** A Shared Access Signature (SAS). Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_SAS_TOKEN. */
    sasToken(value: string): az_storage_container_create_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_storage_container_create_command_builder;
    /** Request timeout in seconds. Applies to each call to the service. */
    timeout(value: string): az_storage_container_create_command_builder;
}
/**
 * Marks the specified container for deletion.
 *
 * Syntax:
 * ```
 * az storage container delete --name
 *                             [--account-key]
 *                             [--account-name]
 *                             [--auth-mode {key, login}]
 *                             [--bypass-immutability-policy]
 *                             [--connection-string]
 *                             [--fail-not-exist]
 *                             [--if-modified-since]
 *                             [--if-unmodified-since]
 *                             [--lease-id]
 *                             [--sas-token]
 *                             [--subscription]
 *                             [--timeout]
 * ```
 *
 * @param {string} name The container name.
 */
declare class az_storage_container_delete_command_builder extends CommandBuilder<az_storage_container_delete_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string);
    /** The container name. */
    name(value: string): az_storage_container_delete_command_builder;
    /** Storage account key. Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_KEY. */
    accountKey(value: string): az_storage_container_delete_command_builder;
    /** Storage account name. Related environment variable: AZURE_STORAGE_ACCOUNT. Must be used in conjunction with either storage account key or a SAS token. If neither are present, the command will try to query the storage account key using the authenticated Azure account. If a large number of storage commands are executed the API quota may be hit. */
    accountName(value: string): az_storage_container_delete_command_builder;
    /** The mode in which to run the command. "login" mode will directly use your login credentials for the authentication. The legacy "key" mode will attempt to query for an account key if no authentication parameters for the account are provided. Environment variable: AZURE_STORAGE_AUTH_MODE. */
    authMode(value: 'key' | 'login'): az_storage_container_delete_command_builder;
    /** Bypasses upcoming service behavior that will block a container from being deleted if it has a immutability-policy. Specifying this will ignore arguments aside from those used to identify the container ("--name", "--account-name"). */
    bypassImmutabilityPolicy(value: string): az_storage_container_delete_command_builder;
    /** Storage account connection string. Environment variable: AZURE_STORAGE_CONNECTION_STRING. */
    connectionString(value: string): az_storage_container_delete_command_builder;
    /** Throw an exception if the container does not exist. */
    failNotExist(value: string): az_storage_container_delete_command_builder;
    /** Commence only if modified since supplied UTC datetime (Y-m-d'T'H:M'Z'). */
    ifModifiedSince(value: string): az_storage_container_delete_command_builder;
    /** Commence only if unmodified since supplied UTC datetime (Y-m-d'T'H:M'Z'). */
    ifUnmodifiedSince(value: string): az_storage_container_delete_command_builder;
    /** If specified, delete_container only succeeds if the container's lease is active and matches this ID. Required if the container has an active lease. */
    leaseId(value: string): az_storage_container_delete_command_builder;
    /** A Shared Access Signature (SAS). Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_SAS_TOKEN. */
    sasToken(value: string): az_storage_container_delete_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_storage_container_delete_command_builder;
    /** Request timeout in seconds. Applies to each call to the service. */
    timeout(value: string): az_storage_container_delete_command_builder;
}
/**
 * Check for the existence of a storage container.
 *
 * Syntax:
 * ```
 * az storage container exists --name
 *                             [--account-key]
 *                             [--account-name]
 *                             [--auth-mode {key, login}]
 *                             [--connection-string]
 *                             [--sas-token]
 *                             [--subscription]
 *                             [--timeout]
 * ```
 *
 * @param {string} name The container name.
 */
declare class az_storage_container_exists_command_builder extends CommandBuilder<az_storage_container_exists_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string);
    /** The container name. */
    name(value: string): az_storage_container_exists_command_builder;
    /** Storage account key. Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_KEY. */
    accountKey(value: string): az_storage_container_exists_command_builder;
    /** Storage account name. Related environment variable: AZURE_STORAGE_ACCOUNT. Must be used in conjunction with either storage account key or a SAS token. If neither are present, the command will try to query the storage account key using the authenticated Azure account. If a large number of storage commands are executed the API quota may be hit. */
    accountName(value: string): az_storage_container_exists_command_builder;
    /** The mode in which to run the command. "login" mode will directly use your login credentials for the authentication. The legacy "key" mode will attempt to query for an account key if no authentication parameters for the account are provided. Environment variable: AZURE_STORAGE_AUTH_MODE. */
    authMode(value: 'key' | 'login'): az_storage_container_exists_command_builder;
    /** Storage account connection string. Environment variable: AZURE_STORAGE_CONNECTION_STRING. */
    connectionString(value: string): az_storage_container_exists_command_builder;
    /** A Shared Access Signature (SAS). Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_SAS_TOKEN. */
    sasToken(value: string): az_storage_container_exists_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_storage_container_exists_command_builder;
    /** Request timeout in seconds. Applies to each call to the service. */
    timeout(value: string): az_storage_container_exists_command_builder;
}
/**
 * Generate a SAS token for a storage container.
 *
 * Syntax:
 * ```
 * az storage container generate-sas --name
 *                                   [--account-key]
 *                                   [--account-name]
 *                                   [--as-user]
 *                                   [--auth-mode {key, login}]
 *                                   [--cache-control]
 *                                   [--connection-string]
 *                                   [--content-disposition]
 *                                   [--content-encoding]
 *                                   [--content-language]
 *                                   [--content-type]
 *                                   [--expiry]
 *                                   [--https-only]
 *                                   [--ip]
 *                                   [--permissions]
 *                                   [--policy-name]
 *                                   [--start]
 *                                   [--subscription]
 * ```
 *
 * @param {string} name The container name.
 */
declare class az_storage_container_generate_sas_command_builder extends CommandBuilder<az_storage_container_generate_sas_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string);
    /** The container name. */
    name(value: string): az_storage_container_generate_sas_command_builder;
    /** Storage account key. Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_KEY. */
    accountKey(value: string): az_storage_container_generate_sas_command_builder;
    /** Storage account name. Related environment variable: AZURE_STORAGE_ACCOUNT. Must be used in conjunction with either storage account key or a SAS token. If neither are present, the command will try to query the storage account key using the authenticated Azure account. If a large number of storage commands are executed the API quota may be hit. */
    accountName(value: string): az_storage_container_generate_sas_command_builder;
    /** Indicates that this command return the SAS signed with the user delegation key. The expiry parameter and '--auth-mode login' are required if this argument is specified. */
    asUser(value: string): az_storage_container_generate_sas_command_builder;
    /** The mode in which to run the command. "login" mode will directly use your login credentials for the authentication. The legacy "key" mode will attempt to query for an account key if no authentication parameters for the account are provided. Environment variable: AZURE_STORAGE_AUTH_MODE. */
    authMode(value: 'key' | 'login'): az_storage_container_generate_sas_command_builder;
    /** Response header value for Cache-Control when resource is accessedusing this shared access signature. */
    cacheControl(value: string): az_storage_container_generate_sas_command_builder;
    /** Storage account connection string. Environment variable: AZURE_STORAGE_CONNECTION_STRING. */
    connectionString(value: string): az_storage_container_generate_sas_command_builder;
    /** Response header value for Content-Disposition when resource is accessedusing this shared access signature. */
    contentDisposition(value: string): az_storage_container_generate_sas_command_builder;
    /** Response header value for Content-Encoding when resource is accessedusing this shared access signature. */
    contentEncoding(value: string): az_storage_container_generate_sas_command_builder;
    /** Response header value for Content-Language when resource is accessedusing this shared access signature. */
    contentLanguage(value: string): az_storage_container_generate_sas_command_builder;
    /** Response header value for Content-Type when resource is accessedusing this shared access signature. */
    contentType(value: string): az_storage_container_generate_sas_command_builder;
    /** Specifies the UTC datetime (Y-m-d'T'H:M'Z') at which the SAS becomes invalid. Do not use if a stored access policy is referenced with --id that specifies this value. */
    expiry(value: string): az_storage_container_generate_sas_command_builder;
    /** Only permit requests made with the HTTPS protocol. If omitted, requests from both the HTTP and HTTPS protocol are permitted. */
    httpsOnly(value: string): az_storage_container_generate_sas_command_builder;
    /** Specifies the IP address or range of IP addresses from which to accept requests. Supports only IPv4 style addresses. */
    ip(value: string): az_storage_container_generate_sas_command_builder;
    /** The permissions the SAS grants. Allowed values: (a)dd (c)reate (d)elete (l)ist (r)ead (w)rite. Do not use if a stored access policy is referenced with --id that specifies this value. Can be combined. */
    permissions(value: string): az_storage_container_generate_sas_command_builder;
    /** The name of a stored access policy within the container's ACL. */
    policyName(value: string): az_storage_container_generate_sas_command_builder;
    /** Specifies the UTC datetime (Y-m-d'T'H:M'Z') at which the SAS becomes valid. Do not use if a stored access policy is referenced with --id that specifies this value. Defaults to the time of the request. */
    start(value: string): az_storage_container_generate_sas_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_storage_container_generate_sas_command_builder;
}
/**
 * List containers in a storage account.
 *
 * Syntax:
 * ```
 * az storage container list [--account-key]
 *                           [--account-name]
 *                           [--auth-mode {key, login}]
 *                           [--connection-string]
 *                           [--include-metadata]
 *                           [--marker]
 *                           [--num-results]
 *                           [--prefix]
 *                           [--query-examples]
 *                           [--sas-token]
 *                           [--subscription]
 *                           [--timeout]
 * ```
 */
declare class az_storage_container_list_command_builder extends CommandBuilder<az_storage_container_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** Storage account key. Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_KEY. */
    accountKey(value: string): az_storage_container_list_command_builder;
    /** Storage account name. Related environment variable: AZURE_STORAGE_ACCOUNT. Must be used in conjunction with either storage account key or a SAS token. If neither are present, the command will try to query the storage account key using the authenticated Azure account. If a large number of storage commands are executed the API quota may be hit. */
    accountName(value: string): az_storage_container_list_command_builder;
    /** The mode in which to run the command. "login" mode will directly use your login credentials for the authentication. The legacy "key" mode will attempt to query for an account key if no authentication parameters for the account are provided. Environment variable: AZURE_STORAGE_AUTH_MODE. */
    authMode(value: 'key' | 'login'): az_storage_container_list_command_builder;
    /** Storage account connection string. Environment variable: AZURE_STORAGE_CONNECTION_STRING. */
    connectionString(value: string): az_storage_container_list_command_builder;
    /** Specifies that container metadata be returned in the response. */
    includeMetadata(value: string): az_storage_container_list_command_builder;
    /** An opaque continuation token. This value can be retrieved from the next_marker field of a previous generator object if num_results was specified and that generator has finished enumerating results. If specified, this generator will begin returning results from the point where the previous generator stopped. */
    marker(value: string): az_storage_container_list_command_builder;
    /** Specify the maximum number to return. If the request does not specify num_results, or specifies a value greater than 5000, the server will return up to 5000 items. Note that if the listing operation crosses a partition boundary, then the service will return a continuation token for retrieving the remaining of the results. Provide "\*" to return all. */
    numResults(value: string): az_storage_container_list_command_builder;
    /** Filters the results to return only containers whose names begin with the specified prefix. */
    prefix(value: string): az_storage_container_list_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_storage_container_list_command_builder;
    /** A Shared Access Signature (SAS). Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_SAS_TOKEN. */
    sasToken(value: string): az_storage_container_list_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_storage_container_list_command_builder;
    /** Request timeout in seconds. Applies to each call to the service. */
    timeout(value: string): az_storage_container_list_command_builder;
}
/**
 * Sets the permissions for the specified container or stored access  policies that may be used with Shared Access Signatures.
 *
 * Syntax:
 * ```
 * az storage container set-permission --name
 *                                     [--account-key]
 *                                     [--account-name]
 *                                     [--auth-mode {key, login}]
 *                                     [--connection-string]
 *                                     [--if-modified-since]
 *                                     [--if-unmodified-since]
 *                                     [--lease-id]
 *                                     [--public-access {blob, container, off}]
 *                                     [--sas-token]
 *                                     [--subscription]
 *                                     [--timeout]
 * ```
 *
 * @param {string} name The container name.
 */
declare class az_storage_container_set_permission_command_builder extends CommandBuilder<az_storage_container_set_permission_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string);
    /** The container name. */
    name(value: string): az_storage_container_set_permission_command_builder;
    /** Storage account key. Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_KEY. */
    accountKey(value: string): az_storage_container_set_permission_command_builder;
    /** Storage account name. Related environment variable: AZURE_STORAGE_ACCOUNT. Must be used in conjunction with either storage account key or a SAS token. If neither are present, the command will try to query the storage account key using the authenticated Azure account. If a large number of storage commands are executed the API quota may be hit. */
    accountName(value: string): az_storage_container_set_permission_command_builder;
    /** The mode in which to run the command. "login" mode will directly use your login credentials for the authentication. The legacy "key" mode will attempt to query for an account key if no authentication parameters for the account are provided. Environment variable: AZURE_STORAGE_AUTH_MODE. */
    authMode(value: 'key' | 'login'): az_storage_container_set_permission_command_builder;
    /** Storage account connection string. Environment variable: AZURE_STORAGE_CONNECTION_STRING. */
    connectionString(value: string): az_storage_container_set_permission_command_builder;
    /** Commence only if modified since supplied UTC datetime (Y-m-d'T'H:M'Z'). */
    ifModifiedSince(value: string): az_storage_container_set_permission_command_builder;
    /** Commence only if unmodified since supplied UTC datetime (Y-m-d'T'H:M'Z'). */
    ifUnmodifiedSince(value: string): az_storage_container_set_permission_command_builder;
    /** If specified, set_container_acl only succeeds if the container's lease is active and matches this ID. */
    leaseId(value: string): az_storage_container_set_permission_command_builder;
    /** Specifies whether data in the container may be accessed publicly. */
    publicAccess(value: 'blob' | 'container' | 'off'): az_storage_container_set_permission_command_builder;
    /** A Shared Access Signature (SAS). Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_SAS_TOKEN. */
    sasToken(value: string): az_storage_container_set_permission_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_storage_container_set_permission_command_builder;
    /** Request timeout in seconds. Applies to each call to the service. */
    timeout(value: string): az_storage_container_set_permission_command_builder;
}
/**
 * Returns all user-defined metadata and system properties for the specified container.
 *
 * Syntax:
 * ```
 * az storage container show --name
 *                           [--account-key]
 *                           [--account-name]
 *                           [--auth-mode {key, login}]
 *                           [--connection-string]
 *                           [--lease-id]
 *                           [--query-examples]
 *                           [--sas-token]
 *                           [--subscription]
 *                           [--timeout]
 * ```
 *
 * @param {string} name The container name.
 */
declare class az_storage_container_show_command_builder extends CommandBuilder<az_storage_container_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string);
    /** The container name. */
    name(value: string): az_storage_container_show_command_builder;
    /** Storage account key. Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_KEY. */
    accountKey(value: string): az_storage_container_show_command_builder;
    /** Storage account name. Related environment variable: AZURE_STORAGE_ACCOUNT. Must be used in conjunction with either storage account key or a SAS token. If neither are present, the command will try to query the storage account key using the authenticated Azure account. If a large number of storage commands are executed the API quota may be hit. */
    accountName(value: string): az_storage_container_show_command_builder;
    /** The mode in which to run the command. "login" mode will directly use your login credentials for the authentication. The legacy "key" mode will attempt to query for an account key if no authentication parameters for the account are provided. Environment variable: AZURE_STORAGE_AUTH_MODE. */
    authMode(value: 'key' | 'login'): az_storage_container_show_command_builder;
    /** Storage account connection string. Environment variable: AZURE_STORAGE_CONNECTION_STRING. */
    connectionString(value: string): az_storage_container_show_command_builder;
    /** If specified, get_container_properties only succeeds if the container's lease is active and matches this ID. */
    leaseId(value: string): az_storage_container_show_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_storage_container_show_command_builder;
    /** A Shared Access Signature (SAS). Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_SAS_TOKEN. */
    sasToken(value: string): az_storage_container_show_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_storage_container_show_command_builder;
    /** Request timeout in seconds. Applies to each call to the service. */
    timeout(value: string): az_storage_container_show_command_builder;
}
/**
 * Gets the permissions for the specified container.
 *
 * Syntax:
 * ```
 * az storage container show-permission --name
 *                                      [--account-key]
 *                                      [--account-name]
 *                                      [--auth-mode {key, login}]
 *                                      [--connection-string]
 *                                      [--lease-id]
 *                                      [--sas-token]
 *                                      [--subscription]
 *                                      [--timeout]
 * ```
 *
 * @param {string} name The container name.
 */
declare class az_storage_container_show_permission_command_builder extends CommandBuilder<az_storage_container_show_permission_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string);
    /** The container name. */
    name(value: string): az_storage_container_show_permission_command_builder;
    /** Storage account key. Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_KEY. */
    accountKey(value: string): az_storage_container_show_permission_command_builder;
    /** Storage account name. Related environment variable: AZURE_STORAGE_ACCOUNT. Must be used in conjunction with either storage account key or a SAS token. If neither are present, the command will try to query the storage account key using the authenticated Azure account. If a large number of storage commands are executed the API quota may be hit. */
    accountName(value: string): az_storage_container_show_permission_command_builder;
    /** The mode in which to run the command. "login" mode will directly use your login credentials for the authentication. The legacy "key" mode will attempt to query for an account key if no authentication parameters for the account are provided. Environment variable: AZURE_STORAGE_AUTH_MODE. */
    authMode(value: 'key' | 'login'): az_storage_container_show_permission_command_builder;
    /** Storage account connection string. Environment variable: AZURE_STORAGE_CONNECTION_STRING. */
    connectionString(value: string): az_storage_container_show_permission_command_builder;
    /** If specified, get_container_acl only succeeds if the container's lease is active and matches this ID. */
    leaseId(value: string): az_storage_container_show_permission_command_builder;
    /** A Shared Access Signature (SAS). Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_SAS_TOKEN. */
    sasToken(value: string): az_storage_container_show_permission_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_storage_container_show_permission_command_builder;
    /** Request timeout in seconds. Applies to each call to the service. */
    timeout(value: string): az_storage_container_show_permission_command_builder;
}
/**
 * Add a CORS rule to a storage account.
 *
 * Syntax:
 * ```
 * az storage cors add --methods {DELETE, GET, HEAD, MERGE, OPTIONS, POST, PUT}
 *                     --origins
 *                     --services
 *                     [--account-key]
 *                     [--account-name]
 *                     [--allowed-headers]
 *                     [--connection-string]
 *                     [--exposed-headers]
 *                     [--max-age]
 *                     [--sas-token]
 *                     [--subscription]
 *                     [--timeout]
 * ```
 *
 * @param {'DELETE' | 'GET' | 'HEAD' | 'MERGE' | 'OPTIONS' | 'POST' | 'PUT'} methods Space-separated list of HTTP methods allowed to be executed by the origin.
 * @param {string} origins Space-separated list of origin domains that will be allowed via CORS, or '\*' to allow all domains.
 * @param {string} services The storage service(s) to add rules to. Allowed options are: (b)lob, (f)ile, (q)ueue, (t)able. Can be combined.
 */
declare class az_storage_cors_add_command_builder extends CommandBuilder<az_storage_cors_add_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, methods: 'DELETE' | 'GET' | 'HEAD' | 'MERGE' | 'OPTIONS' | 'POST' | 'PUT', origins: string, services: string);
    /** Space-separated list of HTTP methods allowed to be executed by the origin. */
    methods(value: 'DELETE' | 'GET' | 'HEAD' | 'MERGE' | 'OPTIONS' | 'POST' | 'PUT'): az_storage_cors_add_command_builder;
    /** Space-separated list of origin domains that will be allowed via CORS, or '\*' to allow all domains. */
    origins(value: string): az_storage_cors_add_command_builder;
    /** The storage service(s) to add rules to. Allowed options are: (b)lob, (f)ile, (q)ueue, (t)able. Can be combined. */
    services(value: string): az_storage_cors_add_command_builder;
    /** Storage account key. Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_KEY. */
    accountKey(value: string): az_storage_cors_add_command_builder;
    /** Storage account name. Related environment variable: AZURE_STORAGE_ACCOUNT. Must be used in conjunction with either storage account key or a SAS token. If neither are present, the command will try to query the storage account key using the authenticated Azure account. If a large number of storage commands are executed the API quota may be hit. */
    accountName(value: string): az_storage_cors_add_command_builder;
    /** Space-separated list of response headers allowed to be part of the cross-origin request. */
    allowedHeaders(value: string): az_storage_cors_add_command_builder;
    /** Storage account connection string. Environment variable: AZURE_STORAGE_CONNECTION_STRING. */
    connectionString(value: string): az_storage_cors_add_command_builder;
    /** Space-separated list of response headers to expose to CORS clients. */
    exposedHeaders(value: string): az_storage_cors_add_command_builder;
    /** The maximum number of seconds the client/browser should cache a preflight response. */
    maxAge(value: string): az_storage_cors_add_command_builder;
    /** A Shared Access Signature (SAS). Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_SAS_TOKEN. */
    sasToken(value: string): az_storage_cors_add_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_storage_cors_add_command_builder;
    /** Request timeout in seconds. Applies to each call to the service. */
    timeout(value: string): az_storage_cors_add_command_builder;
}
/**
 * Remove all CORS rules from a storage account.
 *
 * Syntax:
 * ```
 * az storage cors clear --services
 *                       [--account-key]
 *                       [--account-name]
 *                       [--connection-string]
 *                       [--sas-token]
 *                       [--subscription]
 *                       [--timeout]
 * ```
 *
 * @param {string} services The storage service(s) to remove rules from. Allowed options are: (b)lob, (f)ile, (q)ueue, (t)able. Can be combined.
 */
declare class az_storage_cors_clear_command_builder extends CommandBuilder<az_storage_cors_clear_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, services: string);
    /** The storage service(s) to remove rules from. Allowed options are: (b)lob, (f)ile, (q)ueue, (t)able. Can be combined. */
    services(value: string): az_storage_cors_clear_command_builder;
    /** Storage account key. Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_KEY. */
    accountKey(value: string): az_storage_cors_clear_command_builder;
    /** Storage account name. Related environment variable: AZURE_STORAGE_ACCOUNT. Must be used in conjunction with either storage account key or a SAS token. If neither are present, the command will try to query the storage account key using the authenticated Azure account. If a large number of storage commands are executed the API quota may be hit. */
    accountName(value: string): az_storage_cors_clear_command_builder;
    /** Storage account connection string. Environment variable: AZURE_STORAGE_CONNECTION_STRING. */
    connectionString(value: string): az_storage_cors_clear_command_builder;
    /** A Shared Access Signature (SAS). Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_SAS_TOKEN. */
    sasToken(value: string): az_storage_cors_clear_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_storage_cors_clear_command_builder;
    /** Request timeout in seconds. Applies to each call to the service. */
    timeout(value: string): az_storage_cors_clear_command_builder;
}
/**
 * List all CORS rules for a storage account.
 *
 * Syntax:
 * ```
 * az storage cors list [--account-key]
 *                      [--account-name]
 *                      [--connection-string]
 *                      [--query-examples]
 *                      [--sas-token]
 *                      [--services]
 *                      [--subscription]
 *                      [--timeout]
 * ```
 */
declare class az_storage_cors_list_command_builder extends CommandBuilder<az_storage_cors_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** Storage account key. Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_KEY. */
    accountKey(value: string): az_storage_cors_list_command_builder;
    /** Storage account name. Related environment variable: AZURE_STORAGE_ACCOUNT. Must be used in conjunction with either storage account key or a SAS token. If neither are present, the command will try to query the storage account key using the authenticated Azure account. If a large number of storage commands are executed the API quota may be hit. */
    accountName(value: string): az_storage_cors_list_command_builder;
    /** Storage account connection string. Environment variable: AZURE_STORAGE_CONNECTION_STRING. */
    connectionString(value: string): az_storage_cors_list_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_storage_cors_list_command_builder;
    /** A Shared Access Signature (SAS). Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_SAS_TOKEN. */
    sasToken(value: string): az_storage_cors_list_command_builder;
    /** The storage service(s) to list rules for. Allowed options are: (b)lob, (f)ile, (q)ueue, (t)able. Can be combined. */
    services(value: string): az_storage_cors_list_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_storage_cors_list_command_builder;
    /** Request timeout in seconds. Applies to each call to the service. */
    timeout(value: string): az_storage_cors_list_command_builder;
}
/**
 * Returns all user-defined metadata for the specified directory.
 *
 * Syntax:
 * ```
 * az storage directory metadata show --name
 *                                    --share-name
 *                                    [--account-key]
 *                                    [--account-name]
 *                                    [--connection-string]
 *                                    [--query-examples]
 *                                    [--sas-token]
 *                                    [--snapshot]
 *                                    [--subscription]
 *                                    [--timeout]
 * ```
 *
 * @param {string} name The directory name.
 * @param {string} shareName The file share name.
 */
declare class az_storage_directory_metadata_show_command_builder extends CommandBuilder<az_storage_directory_metadata_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string, shareName: string);
    /** The directory name. */
    name(value: string): az_storage_directory_metadata_show_command_builder;
    /** The file share name. */
    shareName(value: string): az_storage_directory_metadata_show_command_builder;
    /** Storage account key. Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_KEY. */
    accountKey(value: string): az_storage_directory_metadata_show_command_builder;
    /** Storage account name. Related environment variable: AZURE_STORAGE_ACCOUNT. Must be used in conjunction with either storage account key or a SAS token. If neither are present, the command will try to query the storage account key using the authenticated Azure account. If a large number of storage commands are executed the API quota may be hit. */
    accountName(value: string): az_storage_directory_metadata_show_command_builder;
    /** Storage account connection string. Environment variable: AZURE_STORAGE_CONNECTION_STRING. */
    connectionString(value: string): az_storage_directory_metadata_show_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_storage_directory_metadata_show_command_builder;
    /** A Shared Access Signature (SAS). Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_SAS_TOKEN. */
    sasToken(value: string): az_storage_directory_metadata_show_command_builder;
    /** A string that represents the snapshot version, if applicable. */
    snapshot(value: string): az_storage_directory_metadata_show_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_storage_directory_metadata_show_command_builder;
    /** Request timeout in seconds. Applies to each call to the service. */
    timeout(value: string): az_storage_directory_metadata_show_command_builder;
}
/**
 * Sets one or more user-defined name-value pairs for the specified directory.
 *
 * Syntax:
 * ```
 * az storage directory metadata update --name
 *                                      --share-name
 *                                      [--account-key]
 *                                      [--account-name]
 *                                      [--connection-string]
 *                                      [--metadata]
 *                                      [--sas-token]
 *                                      [--subscription]
 *                                      [--timeout]
 * ```
 *
 * @param {string} name The directory name.
 * @param {string} shareName The file share name.
 */
declare class az_storage_directory_metadata_update_command_builder extends CommandBuilder<az_storage_directory_metadata_update_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string, shareName: string);
    /** The directory name. */
    name(value: string): az_storage_directory_metadata_update_command_builder;
    /** The file share name. */
    shareName(value: string): az_storage_directory_metadata_update_command_builder;
    /** Storage account key. Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_KEY. */
    accountKey(value: string): az_storage_directory_metadata_update_command_builder;
    /** Storage account name. Related environment variable: AZURE_STORAGE_ACCOUNT. Must be used in conjunction with either storage account key or a SAS token. If neither are present, the command will try to query the storage account key using the authenticated Azure account. If a large number of storage commands are executed the API quota may be hit. */
    accountName(value: string): az_storage_directory_metadata_update_command_builder;
    /** Storage account connection string. Environment variable: AZURE_STORAGE_CONNECTION_STRING. */
    connectionString(value: string): az_storage_directory_metadata_update_command_builder;
    /** Metadata in space-separated key=value pairs. This overwrites any existing metadata. */
    metadata(value: string): az_storage_directory_metadata_update_command_builder;
    /** A Shared Access Signature (SAS). Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_SAS_TOKEN. */
    sasToken(value: string): az_storage_directory_metadata_update_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_storage_directory_metadata_update_command_builder;
    /** Request timeout in seconds. Applies to each call to the service. */
    timeout(value: string): az_storage_directory_metadata_update_command_builder;
}
/**
 * Creates a new directory under the specified share or parent directory.
 *
 * Syntax:
 * ```
 * az storage directory create --name
 *                             --share-name
 *                             [--account-key]
 *                             [--account-name]
 *                             [--connection-string]
 *                             [--fail-on-exist]
 *                             [--metadata]
 *                             [--sas-token]
 *                             [--subscription]
 *                             [--timeout]
 * ```
 *
 * @param {string} name The directory name.
 * @param {string} shareName The file share name.
 */
declare class az_storage_directory_create_command_builder extends CommandBuilder<az_storage_directory_create_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string, shareName: string);
    /** The directory name. */
    name(value: string): az_storage_directory_create_command_builder;
    /** The file share name. */
    shareName(value: string): az_storage_directory_create_command_builder;
    /** Storage account key. Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_KEY. */
    accountKey(value: string): az_storage_directory_create_command_builder;
    /** Storage account name. Related environment variable: AZURE_STORAGE_ACCOUNT. Must be used in conjunction with either storage account key or a SAS token. If neither are present, the command will try to query the storage account key using the authenticated Azure account. If a large number of storage commands are executed the API quota may be hit. */
    accountName(value: string): az_storage_directory_create_command_builder;
    /** Storage account connection string. Environment variable: AZURE_STORAGE_CONNECTION_STRING. */
    connectionString(value: string): az_storage_directory_create_command_builder;
    /** Specify whether to throw an exception when the directory exists. False by default. */
    failOnExist(value: string): az_storage_directory_create_command_builder;
    /** Metadata in space-separated key=value pairs. This overwrites any existing metadata. */
    metadata(value: string): az_storage_directory_create_command_builder;
    /** A Shared Access Signature (SAS). Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_SAS_TOKEN. */
    sasToken(value: string): az_storage_directory_create_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_storage_directory_create_command_builder;
    /** Request timeout in seconds. Applies to each call to the service. */
    timeout(value: string): az_storage_directory_create_command_builder;
}
/**
 * Deletes the specified empty directory.
 *
 * Syntax:
 * ```
 * az storage directory delete --name
 *                             --share-name
 *                             [--account-key]
 *                             [--account-name]
 *                             [--connection-string]
 *                             [--fail-not-exist]
 *                             [--sas-token]
 *                             [--subscription]
 *                             [--timeout]
 * ```
 *
 * @param {string} name The directory name.
 * @param {string} shareName The file share name.
 */
declare class az_storage_directory_delete_command_builder extends CommandBuilder<az_storage_directory_delete_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string, shareName: string);
    /** The directory name. */
    name(value: string): az_storage_directory_delete_command_builder;
    /** The file share name. */
    shareName(value: string): az_storage_directory_delete_command_builder;
    /** Storage account key. Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_KEY. */
    accountKey(value: string): az_storage_directory_delete_command_builder;
    /** Storage account name. Related environment variable: AZURE_STORAGE_ACCOUNT. Must be used in conjunction with either storage account key or a SAS token. If neither are present, the command will try to query the storage account key using the authenticated Azure account. If a large number of storage commands are executed the API quota may be hit. */
    accountName(value: string): az_storage_directory_delete_command_builder;
    /** Storage account connection string. Environment variable: AZURE_STORAGE_CONNECTION_STRING. */
    connectionString(value: string): az_storage_directory_delete_command_builder;
    /** Specify whether to throw an exception when the directory doesn't exist. */
    failNotExist(value: string): az_storage_directory_delete_command_builder;
    /** A Shared Access Signature (SAS). Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_SAS_TOKEN. */
    sasToken(value: string): az_storage_directory_delete_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_storage_directory_delete_command_builder;
    /** Request timeout in seconds. Applies to each call to the service. */
    timeout(value: string): az_storage_directory_delete_command_builder;
}
/**
 * Check for the existence of a storage directory.
 *
 * Syntax:
 * ```
 * az storage directory exists --name
 *                             --share-name
 *                             [--account-key]
 *                             [--account-name]
 *                             [--connection-string]
 *                             [--sas-token]
 *                             [--snapshot]
 *                             [--subscription]
 *                             [--timeout]
 * ```
 *
 * @param {string} name The directory name.
 * @param {string} shareName The file share name.
 */
declare class az_storage_directory_exists_command_builder extends CommandBuilder<az_storage_directory_exists_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string, shareName: string);
    /** The directory name. */
    name(value: string): az_storage_directory_exists_command_builder;
    /** The file share name. */
    shareName(value: string): az_storage_directory_exists_command_builder;
    /** Storage account key. Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_KEY. */
    accountKey(value: string): az_storage_directory_exists_command_builder;
    /** Storage account name. Related environment variable: AZURE_STORAGE_ACCOUNT. Must be used in conjunction with either storage account key or a SAS token. If neither are present, the command will try to query the storage account key using the authenticated Azure account. If a large number of storage commands are executed the API quota may be hit. */
    accountName(value: string): az_storage_directory_exists_command_builder;
    /** Storage account connection string. Environment variable: AZURE_STORAGE_CONNECTION_STRING. */
    connectionString(value: string): az_storage_directory_exists_command_builder;
    /** A Shared Access Signature (SAS). Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_SAS_TOKEN. */
    sasToken(value: string): az_storage_directory_exists_command_builder;
    /** A string that represents the snapshot version, if applicable. */
    snapshot(value: string): az_storage_directory_exists_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_storage_directory_exists_command_builder;
    /** Request timeout in seconds. Applies to each call to the service. */
    timeout(value: string): az_storage_directory_exists_command_builder;
}
/**
 * List directories in a share.
 *
 * Syntax:
 * ```
 * az storage directory list --share-name
 *                           [--account-key]
 *                           [--account-name]
 *                           [--connection-string]
 *                           [--name]
 *                           [--query-examples]
 *                           [--sas-token]
 *                           [--subscription]
 *                           [--timeout]
 * ```
 *
 * @param {string} shareName The file share name.
 */
declare class az_storage_directory_list_command_builder extends CommandBuilder<az_storage_directory_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, shareName: string);
    /** The file share name. */
    shareName(value: string): az_storage_directory_list_command_builder;
    /** Storage account key. Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_KEY. */
    accountKey(value: string): az_storage_directory_list_command_builder;
    /** Storage account name. Related environment variable: AZURE_STORAGE_ACCOUNT. Must be used in conjunction with either storage account key or a SAS token. If neither are present, the command will try to query the storage account key using the authenticated Azure account. If a large number of storage commands are executed the API quota may be hit. */
    accountName(value: string): az_storage_directory_list_command_builder;
    /** Storage account connection string. Environment variable: AZURE_STORAGE_CONNECTION_STRING. */
    connectionString(value: string): az_storage_directory_list_command_builder;
    /** The directory name. */
    name(value: string): az_storage_directory_list_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_storage_directory_list_command_builder;
    /** A Shared Access Signature (SAS). Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_SAS_TOKEN. */
    sasToken(value: string): az_storage_directory_list_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_storage_directory_list_command_builder;
    /** Request timeout in seconds. Applies to each call to the service. */
    timeout(value: string): az_storage_directory_list_command_builder;
}
/**
 * Returns all user-defined metadata and system properties for the specified directory.
 *
 * Syntax:
 * ```
 * az storage directory show --name
 *                           --share-name
 *                           [--account-key]
 *                           [--account-name]
 *                           [--connection-string]
 *                           [--query-examples]
 *                           [--sas-token]
 *                           [--snapshot]
 *                           [--subscription]
 *                           [--timeout]
 * ```
 *
 * @param {string} name The directory name.
 * @param {string} shareName The file share name.
 */
declare class az_storage_directory_show_command_builder extends CommandBuilder<az_storage_directory_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string, shareName: string);
    /** The directory name. */
    name(value: string): az_storage_directory_show_command_builder;
    /** The file share name. */
    shareName(value: string): az_storage_directory_show_command_builder;
    /** Storage account key. Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_KEY. */
    accountKey(value: string): az_storage_directory_show_command_builder;
    /** Storage account name. Related environment variable: AZURE_STORAGE_ACCOUNT. Must be used in conjunction with either storage account key or a SAS token. If neither are present, the command will try to query the storage account key using the authenticated Azure account. If a large number of storage commands are executed the API quota may be hit. */
    accountName(value: string): az_storage_directory_show_command_builder;
    /** Storage account connection string. Environment variable: AZURE_STORAGE_CONNECTION_STRING. */
    connectionString(value: string): az_storage_directory_show_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_storage_directory_show_command_builder;
    /** A Shared Access Signature (SAS). Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_SAS_TOKEN. */
    sasToken(value: string): az_storage_directory_show_command_builder;
    /** A string that represents the snapshot version, if applicable. */
    snapshot(value: string): az_storage_directory_show_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_storage_directory_show_command_builder;
    /** Request timeout in seconds. Applies to each call to the service. */
    timeout(value: string): az_storage_directory_show_command_builder;
}
/**
 * Deletes an existing entity in a table.
 *
 * Syntax:
 * ```
 * az storage entity delete --partition-key
 *                          --row-key
 *                          --table-name
 *                          [--account-key]
 *                          [--account-name]
 *                          [--connection-string]
 *                          [--if-match]
 *                          [--sas-token]
 *                          [--subscription]
 *                          [--timeout]
 * ```
 *
 * @param {string} partitionKey The PartitionKey of the entity.
 * @param {string} rowKey The RowKey of the entity.
 * @param {string} tableName The name of the table containing the entity to delete.
 */
declare class az_storage_entity_delete_command_builder extends CommandBuilder<az_storage_entity_delete_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, partitionKey: string, rowKey: string, tableName: string);
    /** The PartitionKey of the entity. */
    partitionKey(value: string): az_storage_entity_delete_command_builder;
    /** The RowKey of the entity. */
    rowKey(value: string): az_storage_entity_delete_command_builder;
    /** The name of the table containing the entity to delete. */
    tableName(value: string): az_storage_entity_delete_command_builder;
    /** Storage account key. Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_KEY. */
    accountKey(value: string): az_storage_entity_delete_command_builder;
    /** Storage account name. Related environment variable: AZURE_STORAGE_ACCOUNT. Must be used in conjunction with either storage account key or a SAS token. If neither are present, the command will try to query the storage account key using the authenticated Azure account. If a large number of storage commands are executed the API quota may be hit. */
    accountName(value: string): az_storage_entity_delete_command_builder;
    /** Storage account connection string. Environment variable: AZURE_STORAGE_CONNECTION_STRING. */
    connectionString(value: string): az_storage_entity_delete_command_builder;
    /** The client may specify the ETag for the entity on the request in order to compare to the ETag maintained by the service for the purpose of optimistic concurrency. The delete operation will be performed only if the ETag sent by the client matches the value maintained by the server, indicating that the entity has not been modified since it was retrieved by the client. To force an unconditional delete, set If-Match to the wildcard character (\*). */
    ifMatch(value: string): az_storage_entity_delete_command_builder;
    /** A Shared Access Signature (SAS). Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_SAS_TOKEN. */
    sasToken(value: string): az_storage_entity_delete_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_storage_entity_delete_command_builder;
    /** Request timeout in seconds. Applies to each call to the service. */
    timeout(value: string): az_storage_entity_delete_command_builder;
}
/**
 * Insert an entity into a table.
 *
 * Syntax:
 * ```
 * az storage entity insert --entity
 *                          --table-name
 *                          [--account-key]
 *                          [--account-name]
 *                          [--connection-string]
 *                          [--if-exists {fail, merge, replace}]
 *                          [--sas-token]
 *                          [--subscription]
 *                          [--timeout]
 * ```
 *
 * @param {string} entity Space-separated list of key=value pairs. Must contain a PartitionKey and a RowKey.
 * @param {string} tableName The name of the table to insert the entity into.
 */
declare class az_storage_entity_insert_command_builder extends CommandBuilder<az_storage_entity_insert_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, entity: string, tableName: string);
    /** Space-separated list of key=value pairs. Must contain a PartitionKey and a RowKey. */
    entity(value: string): az_storage_entity_insert_command_builder;
    /** The name of the table to insert the entity into. */
    tableName(value: string): az_storage_entity_insert_command_builder;
    /** Storage account key. Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_KEY. */
    accountKey(value: string): az_storage_entity_insert_command_builder;
    /** Storage account name. Related environment variable: AZURE_STORAGE_ACCOUNT. Must be used in conjunction with either storage account key or a SAS token. If neither are present, the command will try to query the storage account key using the authenticated Azure account. If a large number of storage commands are executed the API quota may be hit. */
    accountName(value: string): az_storage_entity_insert_command_builder;
    /** Storage account connection string. Environment variable: AZURE_STORAGE_CONNECTION_STRING. */
    connectionString(value: string): az_storage_entity_insert_command_builder;
    /** Behavior when an entity already exists for the specified PartitionKey and RowKey. */
    ifExists(value: 'fail' | 'merge' | 'replace'): az_storage_entity_insert_command_builder;
    /** A Shared Access Signature (SAS). Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_SAS_TOKEN. */
    sasToken(value: string): az_storage_entity_insert_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_storage_entity_insert_command_builder;
    /** The server timeout, expressed in seconds. */
    timeout(value: string): az_storage_entity_insert_command_builder;
}
/**
 * Updates an existing entity by merging the entity's properties.
 *
 * Syntax:
 * ```
 * az storage entity merge --entity
 *                         --table-name
 *                         [--account-key]
 *                         [--account-name]
 *                         [--connection-string]
 *                         [--if-match]
 *                         [--sas-token]
 *                         [--subscription]
 *                         [--timeout]
 * ```
 *
 * @param {string} entity The entity to merge. Could be a dict or an entity object. Must contain a PartitionKey and a RowKey.
 * @param {string} tableName The name of the table containing the entity to merge.
 */
declare class az_storage_entity_merge_command_builder extends CommandBuilder<az_storage_entity_merge_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, entity: string, tableName: string);
    /** The entity to merge. Could be a dict or an entity object. Must contain a PartitionKey and a RowKey. */
    entity(value: string): az_storage_entity_merge_command_builder;
    /** The name of the table containing the entity to merge. */
    tableName(value: string): az_storage_entity_merge_command_builder;
    /** Storage account key. Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_KEY. */
    accountKey(value: string): az_storage_entity_merge_command_builder;
    /** Storage account name. Related environment variable: AZURE_STORAGE_ACCOUNT. Must be used in conjunction with either storage account key or a SAS token. If neither are present, the command will try to query the storage account key using the authenticated Azure account. If a large number of storage commands are executed the API quota may be hit. */
    accountName(value: string): az_storage_entity_merge_command_builder;
    /** Storage account connection string. Environment variable: AZURE_STORAGE_CONNECTION_STRING. */
    connectionString(value: string): az_storage_entity_merge_command_builder;
    /** The client may specify the ETag for the entity on the request in order to compare to the ETag maintained by the service for the purpose of optimistic concurrency. The merge operation will be performed only if the ETag sent by the client matches the value maintained by the server, indicating that the entity has not been modified since it was retrieved by the client. To force an unconditional merge, set If-Match to the wildcard character (\*). */
    ifMatch(value: string): az_storage_entity_merge_command_builder;
    /** A Shared Access Signature (SAS). Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_SAS_TOKEN. */
    sasToken(value: string): az_storage_entity_merge_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_storage_entity_merge_command_builder;
    /** Request timeout in seconds. Applies to each call to the service. */
    timeout(value: string): az_storage_entity_merge_command_builder;
}
/**
 * List entities which satisfy a query.
 *
 * Syntax:
 * ```
 * az storage entity query --table-name
 *                         [--accept {full, minimal, none}]
 *                         [--account-key]
 *                         [--account-name]
 *                         [--connection-string]
 *                         [--filter]
 *                         [--marker]
 *                         [--num-results]
 *                         [--sas-token]
 *                         [--select]
 *                         [--subscription]
 *                         [--timeout]
 * ```
 *
 * @param {string} tableName The name of the table to query.
 */
declare class az_storage_entity_query_command_builder extends CommandBuilder<az_storage_entity_query_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, tableName: string);
    /** The name of the table to query. */
    tableName(value: string): az_storage_entity_query_command_builder;
    /** Specifies how much metadata to include in the response payload. */
    accept(value: 'full' | 'minimal' | 'none'): az_storage_entity_query_command_builder;
    /** Storage account key. Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_KEY. */
    accountKey(value: string): az_storage_entity_query_command_builder;
    /** Storage account name. Related environment variable: AZURE_STORAGE_ACCOUNT. Must be used in conjunction with either storage account key or a SAS token. If neither are present, the command will try to query the storage account key using the authenticated Azure account. If a large number of storage commands are executed the API quota may be hit. */
    accountName(value: string): az_storage_entity_query_command_builder;
    /** Storage account connection string. Environment variable: AZURE_STORAGE_CONNECTION_STRING. */
    connectionString(value: string): az_storage_entity_query_command_builder;
    /** Returns only entities that satisfy the specified filter. Note that no more than 15 discrete comparisons are permitted within a $filter string. See <a href="http://msdn.microsoft.com/en-us/library/windowsazure/dd894031.aspx">http://msdn.microsoft.com/en-us/library/windowsazure/dd894031.aspx</a> for more information on constructing filters. */
    filter(value: string): az_storage_entity_query_command_builder;
    /** Space-separated list of key=value pairs. Must contain a nextpartitionkey and a nextrowkey. */
    marker(value: string): az_storage_entity_query_command_builder;
    /** The maximum number of entities to return. */
    numResults(value: string): az_storage_entity_query_command_builder;
    /** A Shared Access Signature (SAS). Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_SAS_TOKEN. */
    sasToken(value: string): az_storage_entity_query_command_builder;
    /** Space-separated list of properties to return for each entity. */
    select(value: string): az_storage_entity_query_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_storage_entity_query_command_builder;
    /** Request timeout in seconds. Applies to each call to the service. */
    timeout(value: string): az_storage_entity_query_command_builder;
}
/**
 * Updates an existing entity in a table.
 *
 * Syntax:
 * ```
 * az storage entity replace --entity
 *                           --table-name
 *                           [--account-key]
 *                           [--account-name]
 *                           [--connection-string]
 *                           [--if-match]
 *                           [--sas-token]
 *                           [--subscription]
 *                           [--timeout]
 * ```
 *
 * @param {string} entity The entity to update. Could be a dict or an entity object. Must contain a PartitionKey and a RowKey.
 * @param {string} tableName The name of the table containing the entity to update.
 */
declare class az_storage_entity_replace_command_builder extends CommandBuilder<az_storage_entity_replace_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, entity: string, tableName: string);
    /** The entity to update. Could be a dict or an entity object. Must contain a PartitionKey and a RowKey. */
    entity(value: string): az_storage_entity_replace_command_builder;
    /** The name of the table containing the entity to update. */
    tableName(value: string): az_storage_entity_replace_command_builder;
    /** Storage account key. Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_KEY. */
    accountKey(value: string): az_storage_entity_replace_command_builder;
    /** Storage account name. Related environment variable: AZURE_STORAGE_ACCOUNT. Must be used in conjunction with either storage account key or a SAS token. If neither are present, the command will try to query the storage account key using the authenticated Azure account. If a large number of storage commands are executed the API quota may be hit. */
    accountName(value: string): az_storage_entity_replace_command_builder;
    /** Storage account connection string. Environment variable: AZURE_STORAGE_CONNECTION_STRING. */
    connectionString(value: string): az_storage_entity_replace_command_builder;
    /** The client may specify the ETag for the entity on the request in order to compare to the ETag maintained by the service for the purpose of optimistic concurrency. The update operation will be performed only if the ETag sent by the client matches the value maintained by the server, indicating that the entity has not been modified since it was retrieved by the client. To force an unconditional update, set If-Match to the wildcard character (\*). */
    ifMatch(value: string): az_storage_entity_replace_command_builder;
    /** A Shared Access Signature (SAS). Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_SAS_TOKEN. */
    sasToken(value: string): az_storage_entity_replace_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_storage_entity_replace_command_builder;
    /** Request timeout in seconds. Applies to each call to the service. */
    timeout(value: string): az_storage_entity_replace_command_builder;
}
/**
 * Get an entity from the specified table.
 *
 * Syntax:
 * ```
 * az storage entity show --partition-key
 *                        --row-key
 *                        --table-name
 *                        [--accept]
 *                        [--account-key]
 *                        [--account-name]
 *                        [--connection-string]
 *                        [--query-examples]
 *                        [--sas-token]
 *                        [--select]
 *                        [--subscription]
 *                        [--timeout]
 * ```
 *
 * @param {string} partitionKey The PartitionKey of the entity.
 * @param {string} rowKey The RowKey of the entity.
 * @param {string} tableName The name of the table to get the entity from.
 */
declare class az_storage_entity_show_command_builder extends CommandBuilder<az_storage_entity_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, partitionKey: string, rowKey: string, tableName: string);
    /** The PartitionKey of the entity. */
    partitionKey(value: string): az_storage_entity_show_command_builder;
    /** The RowKey of the entity. */
    rowKey(value: string): az_storage_entity_show_command_builder;
    /** The name of the table to get the entity from. */
    tableName(value: string): az_storage_entity_show_command_builder;
    /** Specifies the accepted content type of the response payload. See TablePayloadFormat for possible values. */
    accept(value: string): az_storage_entity_show_command_builder;
    /** Storage account key. Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_KEY. */
    accountKey(value: string): az_storage_entity_show_command_builder;
    /** Storage account name. Related environment variable: AZURE_STORAGE_ACCOUNT. Must be used in conjunction with either storage account key or a SAS token. If neither are present, the command will try to query the storage account key using the authenticated Azure account. If a large number of storage commands are executed the API quota may be hit. */
    accountName(value: string): az_storage_entity_show_command_builder;
    /** Storage account connection string. Environment variable: AZURE_STORAGE_CONNECTION_STRING. */
    connectionString(value: string): az_storage_entity_show_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_storage_entity_show_command_builder;
    /** A Shared Access Signature (SAS). Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_SAS_TOKEN. */
    sasToken(value: string): az_storage_entity_show_command_builder;
    /** Space-separated list of properties to return for each entity. */
    select(value: string): az_storage_entity_show_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_storage_entity_show_command_builder;
    /** Request timeout in seconds. Applies to each call to the service. */
    timeout(value: string): az_storage_entity_show_command_builder;
}
/**
 * Aborts a pending copy_file operation, and leaves a destination file  with zero length and full metadata.
 *
 * Syntax:
 * ```
 * az storage file copy cancel --copy-id
 *                             --destination-path
 *                             --destination-share
 *                             [--account-key]
 *                             [--account-name]
 *                             [--connection-string]
 *                             [--sas-token]
 *                             [--subscription]
 *                             [--timeout]
 * ```
 *
 * @param {string} copyId Copy identifier provided in the copy.id of the original copy_file operation.
 * @param {string} destinationPath The path to the file within the file share.
 * @param {string} destinationShare Name of the destination share. The share must exist.
 */
declare class az_storage_file_copy_cancel_command_builder extends CommandBuilder<az_storage_file_copy_cancel_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, copyId: string, destinationPath: string, destinationShare: string);
    /** Copy identifier provided in the copy.id of the original copy_file operation. */
    copyId(value: string): az_storage_file_copy_cancel_command_builder;
    /** The path to the file within the file share. */
    destinationPath(value: string): az_storage_file_copy_cancel_command_builder;
    /** Name of the destination share. The share must exist. */
    destinationShare(value: string): az_storage_file_copy_cancel_command_builder;
    /** Storage account key. Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_KEY. */
    accountKey(value: string): az_storage_file_copy_cancel_command_builder;
    /** Storage account name. Related environment variable: AZURE_STORAGE_ACCOUNT. Must be used in conjunction with either storage account key or a SAS token. If neither are present, the command will try to query the storage account key using the authenticated Azure account. If a large number of storage commands are executed the API quota may be hit. */
    accountName(value: string): az_storage_file_copy_cancel_command_builder;
    /** Storage account connection string. Environment variable: AZURE_STORAGE_CONNECTION_STRING. */
    connectionString(value: string): az_storage_file_copy_cancel_command_builder;
    /** A Shared Access Signature (SAS). Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_SAS_TOKEN. */
    sasToken(value: string): az_storage_file_copy_cancel_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_storage_file_copy_cancel_command_builder;
    /** Request timeout in seconds. Applies to each call to the service. */
    timeout(value: string): az_storage_file_copy_cancel_command_builder;
}
/**
 * Copy a file asynchronously.
 *
 * Syntax:
 * ```
 * az storage file copy start --destination-path
 *                            --destination-share
 *                            [--account-key]
 *                            [--account-name]
 *                            [--connection-string]
 *                            [--file-snapshot]
 *                            [--metadata]
 *                            [--sas-token]
 *                            [--source-account-key]
 *                            [--source-account-name]
 *                            [--source-blob]
 *                            [--source-container]
 *                            [--source-path]
 *                            [--source-sas]
 *                            [--source-share]
 *                            [--source-snapshot]
 *                            [--source-uri]
 *                            [--subscription]
 *                            [--timeout]
 * ```
 *
 * @param {string} destinationPath The path to the file within the file share.
 * @param {string} destinationShare Name of the destination share. The share must exist.
 */
declare class az_storage_file_copy_start_command_builder extends CommandBuilder<az_storage_file_copy_start_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, destinationPath: string, destinationShare: string);
    /** The path to the file within the file share. */
    destinationPath(value: string): az_storage_file_copy_start_command_builder;
    /** Name of the destination share. The share must exist. */
    destinationShare(value: string): az_storage_file_copy_start_command_builder;
    /** Storage account key. Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_KEY. */
    accountKey(value: string): az_storage_file_copy_start_command_builder;
    /** Storage account name. Related environment variable: AZURE_STORAGE_ACCOUNT. Must be used in conjunction with either storage account key or a SAS token. If neither are present, the command will try to query the storage account key using the authenticated Azure account. If a large number of storage commands are executed the API quota may be hit. */
    accountName(value: string): az_storage_file_copy_start_command_builder;
    /** Storage account connection string. Environment variable: AZURE_STORAGE_CONNECTION_STRING. */
    connectionString(value: string): az_storage_file_copy_start_command_builder;
    /** The file snapshot for the source storage account. */
    fileSnapshot(value: string): az_storage_file_copy_start_command_builder;
    /** Metadata in space-separated key=value pairs. This overwrites any existing metadata. */
    metadata(value: string): az_storage_file_copy_start_command_builder;
    /** A Shared Access Signature (SAS). Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_SAS_TOKEN. */
    sasToken(value: string): az_storage_file_copy_start_command_builder;
    /** The storage account key of the source blob. */
    sourceAccountKey(value: string): az_storage_file_copy_start_command_builder;
    /** The storage account name of the source blob. */
    sourceAccountName(value: string): az_storage_file_copy_start_command_builder;
    /** The blob name for the source storage account. */
    sourceBlob(value: string): az_storage_file_copy_start_command_builder;
    /** The container name for the source storage account. */
    sourceContainer(value: string): az_storage_file_copy_start_command_builder;
    /** The file path for the source storage account. */
    sourcePath(value: string): az_storage_file_copy_start_command_builder;
    /** The shared access signature for the source storage account. */
    sourceSas(value: string): az_storage_file_copy_start_command_builder;
    /** The share name for the source storage account. */
    sourceShare(value: string): az_storage_file_copy_start_command_builder;
    /** The blob snapshot for the source storage account. */
    sourceSnapshot(value: string): az_storage_file_copy_start_command_builder;
    /** A URL of up to 2 KB in length that specifies an Azure file or blob. The value should be URL-encoded as it would appear in a request URI. If the source is in another account, the source must either be public or must be authenticated via a shared access signature. If the source is public, no authentication is required. Examples: <a href="https://myaccount.file.core.windows.net/myshare/mydir/myfile">https://myaccount.file.core.windows.net/myshare/mydir/myfile</a> <a href="https://otheraccount.file.core.windows.net/myshare/mydir/myfile?sastoken">https://otheraccount.file.core.windows.net/myshare/mydir/myfile?sastoken</a>. */
    sourceUri(value: string): az_storage_file_copy_start_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_storage_file_copy_start_command_builder;
    /** Request timeout in seconds. Applies to each call to the service. */
    timeout(value: string): az_storage_file_copy_start_command_builder;
}
/**
 * Copy multiple files or blobs to a file share.
 *
 * Syntax:
 * ```
 * az storage file copy start-batch [--account-key]
 *                                  [--account-name]
 *                                  [--connection-string]
 *                                  [--destination-path]
 *                                  [--destination-share]
 *                                  [--dryrun]
 *                                  [--metadata]
 *                                  [--pattern]
 *                                  [--sas-token]
 *                                  [--source-account-key]
 *                                  [--source-account-name]
 *                                  [--source-container]
 *                                  [--source-sas]
 *                                  [--source-share]
 *                                  [--source-uri]
 *                                  [--subscription]
 *                                  [--timeout]
 * ```
 */
declare class az_storage_file_copy_start_batch_command_builder extends CommandBuilder<az_storage_file_copy_start_batch_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** Storage account key. Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_KEY. */
    accountKey(value: string): az_storage_file_copy_start_batch_command_builder;
    /** Storage account name. Related environment variable: AZURE_STORAGE_ACCOUNT. Must be used in conjunction with either storage account key or a SAS token. If neither are present, the command will try to query the storage account key using the authenticated Azure account. If a large number of storage commands are executed the API quota may be hit. */
    accountName(value: string): az_storage_file_copy_start_batch_command_builder;
    /** Storage account connection string. Environment variable: AZURE_STORAGE_CONNECTION_STRING. */
    connectionString(value: string): az_storage_file_copy_start_batch_command_builder;
    /** The directory where the source data is copied to. If omitted, data is copied to the root directory. */
    destinationPath(value: string): az_storage_file_copy_start_batch_command_builder;
    /** The file share where the source data is copied to. */
    destinationShare(value: string): az_storage_file_copy_start_batch_command_builder;
    /** List the files and blobs to be copied. No actual data transfer will occur. */
    dryrun(value: string): az_storage_file_copy_start_batch_command_builder;
    /** Metadata in space-separated key=value pairs. This overwrites any existing metadata. */
    metadata(value: string): az_storage_file_copy_start_batch_command_builder;
    /** The pattern used for globbing files and blobs. The supported patterns are '\*', '?', '[seq]', and '[!seq]'. For more information, please refer to <a href="https://docs.python.org/3.7/library/fnmatch.html">https://docs.python.org/3.7/library/fnmatch.html</a>. */
    pattern(value: string): az_storage_file_copy_start_batch_command_builder;
    /** A Shared Access Signature (SAS). Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_SAS_TOKEN. */
    sasToken(value: string): az_storage_file_copy_start_batch_command_builder;
    /** The account key for the source storage account. If omitted, the active login is used to determine the account key. */
    sourceAccountKey(value: string): az_storage_file_copy_start_batch_command_builder;
    /** The source storage account to copy the data from. If omitted, the destination account is used. */
    sourceAccountName(value: string): az_storage_file_copy_start_batch_command_builder;
    /** The source container blobs are copied from. */
    sourceContainer(value: string): az_storage_file_copy_start_batch_command_builder;
    /** The shared access signature for the source storage account. */
    sourceSas(value: string): az_storage_file_copy_start_batch_command_builder;
    /** The source share files are copied from. */
    sourceShare(value: string): az_storage_file_copy_start_batch_command_builder;
    /** A URI that specifies a the source file share or blob container. */
    sourceUri(value: string): az_storage_file_copy_start_batch_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_storage_file_copy_start_batch_command_builder;
    /** Request timeout in seconds. Applies to each call to the service. */
    timeout(value: string): az_storage_file_copy_start_batch_command_builder;
}
/**
 * Returns all user-defined metadata for the specified file.
 *
 * Syntax:
 * ```
 * az storage file metadata show --path
 *                               --share-name
 *                               [--account-key]
 *                               [--account-name]
 *                               [--connection-string]
 *                               [--query-examples]
 *                               [--sas-token]
 *                               [--snapshot]
 *                               [--subscription]
 *                               [--timeout]
 * ```
 *
 * @param {string} path The path to the file within the file share.
 * @param {string} shareName The file share name.
 */
declare class az_storage_file_metadata_show_command_builder extends CommandBuilder<az_storage_file_metadata_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, path: string, shareName: string);
    /** The path to the file within the file share. */
    path(value: string): az_storage_file_metadata_show_command_builder;
    /** The file share name. */
    shareName(value: string): az_storage_file_metadata_show_command_builder;
    /** Storage account key. Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_KEY. */
    accountKey(value: string): az_storage_file_metadata_show_command_builder;
    /** Storage account name. Related environment variable: AZURE_STORAGE_ACCOUNT. Must be used in conjunction with either storage account key or a SAS token. If neither are present, the command will try to query the storage account key using the authenticated Azure account. If a large number of storage commands are executed the API quota may be hit. */
    accountName(value: string): az_storage_file_metadata_show_command_builder;
    /** Storage account connection string. Environment variable: AZURE_STORAGE_CONNECTION_STRING. */
    connectionString(value: string): az_storage_file_metadata_show_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_storage_file_metadata_show_command_builder;
    /** A Shared Access Signature (SAS). Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_SAS_TOKEN. */
    sasToken(value: string): az_storage_file_metadata_show_command_builder;
    /** A string that represents the snapshot version, if applicable. */
    snapshot(value: string): az_storage_file_metadata_show_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_storage_file_metadata_show_command_builder;
    /** Request timeout in seconds. Applies to each call to the service. */
    timeout(value: string): az_storage_file_metadata_show_command_builder;
}
/**
 * Sets user-defined metadata for the specified file as one or more name-value pairs.
 *
 * Syntax:
 * ```
 * az storage file metadata update --path
 *                                 --share-name
 *                                 [--account-key]
 *                                 [--account-name]
 *                                 [--connection-string]
 *                                 [--metadata]
 *                                 [--sas-token]
 *                                 [--subscription]
 *                                 [--timeout]
 * ```
 *
 * @param {string} path The path to the file within the file share.
 * @param {string} shareName The file share name.
 */
declare class az_storage_file_metadata_update_command_builder extends CommandBuilder<az_storage_file_metadata_update_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, path: string, shareName: string);
    /** The path to the file within the file share. */
    path(value: string): az_storage_file_metadata_update_command_builder;
    /** The file share name. */
    shareName(value: string): az_storage_file_metadata_update_command_builder;
    /** Storage account key. Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_KEY. */
    accountKey(value: string): az_storage_file_metadata_update_command_builder;
    /** Storage account name. Related environment variable: AZURE_STORAGE_ACCOUNT. Must be used in conjunction with either storage account key or a SAS token. If neither are present, the command will try to query the storage account key using the authenticated Azure account. If a large number of storage commands are executed the API quota may be hit. */
    accountName(value: string): az_storage_file_metadata_update_command_builder;
    /** Storage account connection string. Environment variable: AZURE_STORAGE_CONNECTION_STRING. */
    connectionString(value: string): az_storage_file_metadata_update_command_builder;
    /** Metadata in space-separated key=value pairs. This overwrites any existing metadata. */
    metadata(value: string): az_storage_file_metadata_update_command_builder;
    /** A Shared Access Signature (SAS). Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_SAS_TOKEN. */
    sasToken(value: string): az_storage_file_metadata_update_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_storage_file_metadata_update_command_builder;
    /** Request timeout in seconds. Applies to each call to the service. */
    timeout(value: string): az_storage_file_metadata_update_command_builder;
}
/**
 * Marks the specified file for deletion.
 *
 * Syntax:
 * ```
 * az storage file delete --path
 *                        --share-name
 *                        [--account-key]
 *                        [--account-name]
 *                        [--connection-string]
 *                        [--sas-token]
 *                        [--subscription]
 *                        [--timeout]
 * ```
 *
 * @param {string} path The path to the file within the file share.
 * @param {string} shareName The file share name.
 */
declare class az_storage_file_delete_command_builder extends CommandBuilder<az_storage_file_delete_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, path: string, shareName: string);
    /** The path to the file within the file share. */
    path(value: string): az_storage_file_delete_command_builder;
    /** The file share name. */
    shareName(value: string): az_storage_file_delete_command_builder;
    /** Storage account key. Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_KEY. */
    accountKey(value: string): az_storage_file_delete_command_builder;
    /** Storage account name. Related environment variable: AZURE_STORAGE_ACCOUNT. Must be used in conjunction with either storage account key or a SAS token. If neither are present, the command will try to query the storage account key using the authenticated Azure account. If a large number of storage commands are executed the API quota may be hit. */
    accountName(value: string): az_storage_file_delete_command_builder;
    /** Storage account connection string. Environment variable: AZURE_STORAGE_CONNECTION_STRING. */
    connectionString(value: string): az_storage_file_delete_command_builder;
    /** A Shared Access Signature (SAS). Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_SAS_TOKEN. */
    sasToken(value: string): az_storage_file_delete_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_storage_file_delete_command_builder;
    /** Request timeout in seconds. Applies to each call to the service. */
    timeout(value: string): az_storage_file_delete_command_builder;
}
/**
 * Delete files from an Azure Storage File Share.
 *
 * Syntax:
 * ```
 * az storage file delete-batch --source
 *                              [--account-key]
 *                              [--account-name]
 *                              [--connection-string]
 *                              [--dryrun]
 *                              [--pattern]
 *                              [--sas-token]
 *                              [--subscription]
 *                              [--timeout]
 * ```
 *
 * @param {string} source The source of the file delete operation. The source can be the file share URL or the share name.
 */
declare class az_storage_file_delete_batch_command_builder extends CommandBuilder<az_storage_file_delete_batch_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, source: string);
    /** The source of the file delete operation. The source can be the file share URL or the share name. */
    source(value: string): az_storage_file_delete_batch_command_builder;
    /** Storage account key. Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_KEY. */
    accountKey(value: string): az_storage_file_delete_batch_command_builder;
    /** Storage account name. Related environment variable: AZURE_STORAGE_ACCOUNT. Must be used in conjunction with either storage account key or a SAS token. If neither are present, the command will try to query the storage account key using the authenticated Azure account. If a large number of storage commands are executed the API quota may be hit. */
    accountName(value: string): az_storage_file_delete_batch_command_builder;
    /** Storage account connection string. Environment variable: AZURE_STORAGE_CONNECTION_STRING. */
    connectionString(value: string): az_storage_file_delete_batch_command_builder;
    /** List the files and blobs to be deleted. No actual data deletion will occur. */
    dryrun(value: string): az_storage_file_delete_batch_command_builder;
    /** The pattern used for file globbing. The supported patterns are '\*', '?', '[seq]', and '[!seq]'. For more information, please refer to <a href="https://docs.python.org/3.7/library/fnmatch.html">https://docs.python.org/3.7/library/fnmatch.html</a>. */
    pattern(value: string): az_storage_file_delete_batch_command_builder;
    /** A Shared Access Signature (SAS). Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_SAS_TOKEN. */
    sasToken(value: string): az_storage_file_delete_batch_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_storage_file_delete_batch_command_builder;
    /** Request timeout in seconds. Applies to each call to the service. */
    timeout(value: string): az_storage_file_delete_batch_command_builder;
}
/**
 * Downloads a file to a file path, with automatic chunking and progress notifications.
 *
 * Syntax:
 * ```
 * az storage file download --path
 *                          --share-name
 *                          [--account-key]
 *                          [--account-name]
 *                          [--connection-string]
 *                          [--dest]
 *                          [--end-range]
 *                          [--max-connections]
 *                          [--no-progress]
 *                          [--open-mode]
 *                          [--sas-token]
 *                          [--snapshot]
 *                          [--start-range]
 *                          [--subscription]
 *                          [--timeout]
 *                          [--validate-content]
 * ```
 *
 * @param {string} path The path to the file within the file share.
 * @param {string} shareName The file share name.
 */
declare class az_storage_file_download_command_builder extends CommandBuilder<az_storage_file_download_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, path: string, shareName: string);
    /** The path to the file within the file share. */
    path(value: string): az_storage_file_download_command_builder;
    /** The file share name. */
    shareName(value: string): az_storage_file_download_command_builder;
    /** Storage account key. Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_KEY. */
    accountKey(value: string): az_storage_file_download_command_builder;
    /** Storage account name. Related environment variable: AZURE_STORAGE_ACCOUNT. Must be used in conjunction with either storage account key or a SAS token. If neither are present, the command will try to query the storage account key using the authenticated Azure account. If a large number of storage commands are executed the API quota may be hit. */
    accountName(value: string): az_storage_file_download_command_builder;
    /** Storage account connection string. Environment variable: AZURE_STORAGE_CONNECTION_STRING. */
    connectionString(value: string): az_storage_file_download_command_builder;
    /** Path of the file to write to. The source filename will be used if not specified. */
    dest(value: string): az_storage_file_download_command_builder;
    /** End of byte range to use for downloading a section of the file. If end_range is given, start_range must be provided. The start_range and end_range params are inclusive. Ex: start_range=0, end_range=511 will download first 512 bytes of file. */
    endRange(value: string): az_storage_file_download_command_builder;
    /** If set to 2 or greater, an initial get will be done for the first self.MAX_SINGLE_GET_SIZE bytes of the file. If this is the entire file, the method returns at this point. If it is not, it will download the remaining data parallel using the number of threads equal to max_connections. Each chunk will be of size self.MAX_CHUNK_GET_SIZE. If set to 1, a single large get request will be done. This is not generally recommended but available if very few threads should be used, network requests are very expensive, or a non-seekable stream prevents parallel download. This may also be valuable if the file is being concurrently modified to enforce atomicity or if many files are expected to be empty as an extra request is required for empty files if max_connections is greater than 1. */
    maxConnections(value: string): az_storage_file_download_command_builder;
    /** Include this flag to disable progress reporting for the command. */
    noProgress(value: string): az_storage_file_download_command_builder;
    /** Mode to use when opening the file. Note that specifying append only open_mode prevents parallel download. So, max_connections must be set to 1 if this open_mode is used. */
    openMode(value: string): az_storage_file_download_command_builder;
    /** A Shared Access Signature (SAS). Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_SAS_TOKEN. */
    sasToken(value: string): az_storage_file_download_command_builder;
    /** A string that represents the snapshot version, if applicable. */
    snapshot(value: string): az_storage_file_download_command_builder;
    /** Start of byte range to use for downloading a section of the file. If no end_range is given, all bytes after the start_range will be downloaded. The start_range and end_range params are inclusive. Ex: start_range=0, end_range=511 will download first 512 bytes of file. */
    startRange(value: string): az_storage_file_download_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_storage_file_download_command_builder;
    /** Request timeout in seconds. Applies to each call to the service. */
    timeout(value: string): az_storage_file_download_command_builder;
    /** If set to true, validates an MD5 hash for each retrieved portion of the file. This is primarily valuable for detecting bitflips on the wire if using http instead of https as https (the default) will already validate. Note that the service will only return transactional MD5s for chunks 4MB or less so the first get request will be of size self.MAX_CHUNK_GET_SIZE instead of self.MAX_SINGLE_GET_SIZE. If self.MAX_CHUNK_GET_SIZE was set to greater than 4MB an error will be thrown. As computing the MD5 takes processing time and more requests will need to be done due to the reduced chunk size there may be some increase in latency. */
    validateContent(value: string): az_storage_file_download_command_builder;
}
/**
 * Download files from an Azure Storage File Share to a local directory in a batch operation.
 *
 * Syntax:
 * ```
 * az storage file download-batch --destination
 *                                --source
 *                                [--account-key]
 *                                [--account-name]
 *                                [--connection-string]
 *                                [--dryrun]
 *                                [--max-connections]
 *                                [--no-progress]
 *                                [--pattern]
 *                                [--sas-token]
 *                                [--snapshot]
 *                                [--subscription]
 *                                [--validate-content]
 * ```
 *
 * @param {string} destination The local directory where the files are downloaded to. This directory must already exist.
 * @param {string} source The source of the file download operation. The source can be the file share URL or the share name.
 */
declare class az_storage_file_download_batch_command_builder extends CommandBuilder<az_storage_file_download_batch_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, destination: string, source: string);
    /** The local directory where the files are downloaded to. This directory must already exist. */
    destination(value: string): az_storage_file_download_batch_command_builder;
    /** The source of the file download operation. The source can be the file share URL or the share name. */
    source(value: string): az_storage_file_download_batch_command_builder;
    /** Storage account key. Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_KEY. */
    accountKey(value: string): az_storage_file_download_batch_command_builder;
    /** Storage account name. Related environment variable: AZURE_STORAGE_ACCOUNT. Must be used in conjunction with either storage account key or a SAS token. If neither are present, the command will try to query the storage account key using the authenticated Azure account. If a large number of storage commands are executed the API quota may be hit. */
    accountName(value: string): az_storage_file_download_batch_command_builder;
    /** Storage account connection string. Environment variable: AZURE_STORAGE_CONNECTION_STRING. */
    connectionString(value: string): az_storage_file_download_batch_command_builder;
    /** List the files and blobs to be downloaded. No actual data transfer will occur. */
    dryrun(value: string): az_storage_file_download_batch_command_builder;
    /** The maximum number of parallel connections to use. Default value is 1. */
    maxConnections(value: string): az_storage_file_download_batch_command_builder;
    /** Include this flag to disable progress reporting for the command. */
    noProgress(value: string): az_storage_file_download_batch_command_builder;
    /** The pattern used for file globbing. The supported patterns are '\*', '?', '[seq]', and '[!seq]'. For more information, please refer to <a href="https://docs.python.org/3.7/library/fnmatch.html">https://docs.python.org/3.7/library/fnmatch.html</a>. */
    pattern(value: string): az_storage_file_download_batch_command_builder;
    /** A Shared Access Signature (SAS). Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_SAS_TOKEN. */
    sasToken(value: string): az_storage_file_download_batch_command_builder;
    /** A string that represents the snapshot version, if applicable. */
    snapshot(value: string): az_storage_file_download_batch_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_storage_file_download_batch_command_builder;
    /** If set, calculates an MD5 hash for each range of the file for validation. */
    validateContent(value: string): az_storage_file_download_batch_command_builder;
}
/**
 * Check for the existence of a file.
 *
 * Syntax:
 * ```
 * az storage file exists --path
 *                        --share-name
 *                        [--account-key]
 *                        [--account-name]
 *                        [--connection-string]
 *                        [--sas-token]
 *                        [--snapshot]
 *                        [--subscription]
 *                        [--timeout]
 * ```
 *
 * @param {string} path The path to the file within the file share.
 * @param {string} shareName The file share name.
 */
declare class az_storage_file_exists_command_builder extends CommandBuilder<az_storage_file_exists_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, path: string, shareName: string);
    /** The path to the file within the file share. */
    path(value: string): az_storage_file_exists_command_builder;
    /** The file share name. */
    shareName(value: string): az_storage_file_exists_command_builder;
    /** Storage account key. Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_KEY. */
    accountKey(value: string): az_storage_file_exists_command_builder;
    /** Storage account name. Related environment variable: AZURE_STORAGE_ACCOUNT. Must be used in conjunction with either storage account key or a SAS token. If neither are present, the command will try to query the storage account key using the authenticated Azure account. If a large number of storage commands are executed the API quota may be hit. */
    accountName(value: string): az_storage_file_exists_command_builder;
    /** Storage account connection string. Environment variable: AZURE_STORAGE_CONNECTION_STRING. */
    connectionString(value: string): az_storage_file_exists_command_builder;
    /** A Shared Access Signature (SAS). Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_SAS_TOKEN. */
    sasToken(value: string): az_storage_file_exists_command_builder;
    /** A string that represents the snapshot version, if applicable. */
    snapshot(value: string): az_storage_file_exists_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_storage_file_exists_command_builder;
    /** Request timeout in seconds. Applies to each call to the service. */
    timeout(value: string): az_storage_file_exists_command_builder;
}
/**
 * Generates a shared access signature for the file.
 *
 * Syntax:
 * ```
 * az storage file generate-sas --path
 *                              --share-name
 *                              [--account-key]
 *                              [--account-name]
 *                              [--cache-control]
 *                              [--connection-string]
 *                              [--content-disposition]
 *                              [--content-encoding]
 *                              [--content-language]
 *                              [--content-type]
 *                              [--expiry]
 *                              [--https-only]
 *                              [--ip]
 *                              [--permissions]
 *                              [--policy-name]
 *                              [--start]
 *                              [--subscription]
 * ```
 *
 * @param {string} path The path to the file within the file share.
 * @param {string} shareName The file share name.
 */
declare class az_storage_file_generate_sas_command_builder extends CommandBuilder<az_storage_file_generate_sas_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, path: string, shareName: string);
    /** The path to the file within the file share. */
    path(value: string): az_storage_file_generate_sas_command_builder;
    /** The file share name. */
    shareName(value: string): az_storage_file_generate_sas_command_builder;
    /** Storage account key. Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_KEY. */
    accountKey(value: string): az_storage_file_generate_sas_command_builder;
    /** Storage account name. Related environment variable: AZURE_STORAGE_ACCOUNT. Must be used in conjunction with either storage account key or a SAS token. If neither are present, the command will try to query the storage account key using the authenticated Azure account. If a large number of storage commands are executed the API quota may be hit. */
    accountName(value: string): az_storage_file_generate_sas_command_builder;
    /** Response header value for Cache-Control when resource is accessed using this shared access signature. */
    cacheControl(value: string): az_storage_file_generate_sas_command_builder;
    /** Storage account connection string. Environment variable: AZURE_STORAGE_CONNECTION_STRING. */
    connectionString(value: string): az_storage_file_generate_sas_command_builder;
    /** Response header value for Content-Disposition when resource is accessed using this shared access signature. */
    contentDisposition(value: string): az_storage_file_generate_sas_command_builder;
    /** Response header value for Content-Encoding when resource is accessed using this shared access signature. */
    contentEncoding(value: string): az_storage_file_generate_sas_command_builder;
    /** Response header value for Content-Language when resource is accessed using this shared access signature. */
    contentLanguage(value: string): az_storage_file_generate_sas_command_builder;
    /** Response header value for Content-Type when resource is accessed using this shared access signature. */
    contentType(value: string): az_storage_file_generate_sas_command_builder;
    /** Specifies the UTC datetime (Y-m-d'T'H:M'Z') at which the SAS becomes invalid. Do not use if a stored access policy is referenced with --id that specifies this value. */
    expiry(value: string): az_storage_file_generate_sas_command_builder;
    /** Only permit requests made with the HTTPS protocol. If omitted, requests from both the HTTP and HTTPS protocol are permitted. */
    httpsOnly(value: string): az_storage_file_generate_sas_command_builder;
    /** Specifies the IP address or range of IP addresses from which to accept requests. Supports only IPv4 style addresses. */
    ip(value: string): az_storage_file_generate_sas_command_builder;
    /** The permissions the SAS grants. Allowed values: (c)reate (d)elete (r)ead (w)rite. Do not use if a stored access policy is referenced with --id that specifies this value. Can be combined. */
    permissions(value: string): az_storage_file_generate_sas_command_builder;
    /** The name of a stored access policy within the container's ACL. */
    policyName(value: string): az_storage_file_generate_sas_command_builder;
    /** Specifies the UTC datetime (Y-m-d'T'H:M'Z') at which the SAS becomes valid. Do not use if a stored access policy is referenced with --id that specifies this value. Defaults to the time of the request. */
    start(value: string): az_storage_file_generate_sas_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_storage_file_generate_sas_command_builder;
}
/**
 * List files and directories in a share.
 *
 * Syntax:
 * ```
 * az storage file list --share-name
 *                      [--account-key]
 *                      [--account-name]
 *                      [--connection-string]
 *                      [--exclude-dir]
 *                      [--marker]
 *                      [--num-results]
 *                      [--path]
 *                      [--query-examples]
 *                      [--sas-token]
 *                      [--snapshot]
 *                      [--subscription]
 *                      [--timeout]
 * ```
 *
 * @param {string} shareName The file share name.
 */
declare class az_storage_file_list_command_builder extends CommandBuilder<az_storage_file_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, shareName: string);
    /** The file share name. */
    shareName(value: string): az_storage_file_list_command_builder;
    /** Storage account key. Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_KEY. */
    accountKey(value: string): az_storage_file_list_command_builder;
    /** Storage account name. Related environment variable: AZURE_STORAGE_ACCOUNT. Must be used in conjunction with either storage account key or a SAS token. If neither are present, the command will try to query the storage account key using the authenticated Azure account. If a large number of storage commands are executed the API quota may be hit. */
    accountName(value: string): az_storage_file_list_command_builder;
    /** Storage account connection string. Environment variable: AZURE_STORAGE_CONNECTION_STRING. */
    connectionString(value: string): az_storage_file_list_command_builder;
    /** List only files in the given share. */
    excludeDir(value: string): az_storage_file_list_command_builder;
    /** An opaque continuation token. This value can be retrieved from the next_marker field of a previous generator object if num_results was specified and that generator has finished enumerating results. If specified, this generator will begin returning results from the point where the previous generator stopped. */
    marker(value: string): az_storage_file_list_command_builder;
    /** Specify the maximum number to return. If the request does not specify num_results, or specifies a value greater than 5000, the server will return up to 5000 items. Note that if the listing operation crosses a partition boundary, then the service will return a continuation token for retrieving the remaining of the results. Provide "\*" to return all. */
    numResults(value: string): az_storage_file_list_command_builder;
    /** The directory path within the file share. */
    path(value: string): az_storage_file_list_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_storage_file_list_command_builder;
    /** A Shared Access Signature (SAS). Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_SAS_TOKEN. */
    sasToken(value: string): az_storage_file_list_command_builder;
    /** A string that represents the snapshot version, if applicable. */
    snapshot(value: string): az_storage_file_list_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_storage_file_list_command_builder;
    /** Request timeout in seconds. Applies to each call to the service. */
    timeout(value: string): az_storage_file_list_command_builder;
}
/**
 * Resizes a file to the specified size.
 *
 * Syntax:
 * ```
 * az storage file resize --path
 *                        --share-name
 *                        --size
 *                        [--account-key]
 *                        [--account-name]
 *                        [--connection-string]
 *                        [--sas-token]
 *                        [--subscription]
 *                        [--timeout]
 * ```
 *
 * @param {string} path The path to the file within the file share.
 * @param {string} shareName The file share name.
 * @param {string} size The length to resize the file to.
 */
declare class az_storage_file_resize_command_builder extends CommandBuilder<az_storage_file_resize_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, path: string, shareName: string, size: string);
    /** The path to the file within the file share. */
    path(value: string): az_storage_file_resize_command_builder;
    /** The file share name. */
    shareName(value: string): az_storage_file_resize_command_builder;
    /** The length to resize the file to. */
    size(value: string): az_storage_file_resize_command_builder;
    /** Storage account key. Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_KEY. */
    accountKey(value: string): az_storage_file_resize_command_builder;
    /** Storage account name. Related environment variable: AZURE_STORAGE_ACCOUNT. Must be used in conjunction with either storage account key or a SAS token. If neither are present, the command will try to query the storage account key using the authenticated Azure account. If a large number of storage commands are executed the API quota may be hit. */
    accountName(value: string): az_storage_file_resize_command_builder;
    /** Storage account connection string. Environment variable: AZURE_STORAGE_CONNECTION_STRING. */
    connectionString(value: string): az_storage_file_resize_command_builder;
    /** A Shared Access Signature (SAS). Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_SAS_TOKEN. */
    sasToken(value: string): az_storage_file_resize_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_storage_file_resize_command_builder;
    /** Request timeout in seconds. Applies to each call to the service. */
    timeout(value: string): az_storage_file_resize_command_builder;
}
/**
 * Returns all user-defined metadata, standard HTTP properties, and system properties for the file.
 *
 * Syntax:
 * ```
 * az storage file show --path
 *                      --share-name
 *                      [--account-key]
 *                      [--account-name]
 *                      [--connection-string]
 *                      [--query-examples]
 *                      [--sas-token]
 *                      [--snapshot]
 *                      [--subscription]
 *                      [--timeout]
 * ```
 *
 * @param {string} path The path to the file within the file share.
 * @param {string} shareName The file share name.
 */
declare class az_storage_file_show_command_builder extends CommandBuilder<az_storage_file_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, path: string, shareName: string);
    /** The path to the file within the file share. */
    path(value: string): az_storage_file_show_command_builder;
    /** The file share name. */
    shareName(value: string): az_storage_file_show_command_builder;
    /** Storage account key. Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_KEY. */
    accountKey(value: string): az_storage_file_show_command_builder;
    /** Storage account name. Related environment variable: AZURE_STORAGE_ACCOUNT. Must be used in conjunction with either storage account key or a SAS token. If neither are present, the command will try to query the storage account key using the authenticated Azure account. If a large number of storage commands are executed the API quota may be hit. */
    accountName(value: string): az_storage_file_show_command_builder;
    /** Storage account connection string. Environment variable: AZURE_STORAGE_CONNECTION_STRING. */
    connectionString(value: string): az_storage_file_show_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_storage_file_show_command_builder;
    /** A Shared Access Signature (SAS). Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_SAS_TOKEN. */
    sasToken(value: string): az_storage_file_show_command_builder;
    /** A string that represents the snapshot version, if applicable. */
    snapshot(value: string): az_storage_file_show_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_storage_file_show_command_builder;
    /** Request timeout in seconds. Applies to each call to the service. */
    timeout(value: string): az_storage_file_show_command_builder;
}
/**
 * Sets system properties on the file.
 *
 * Syntax:
 * ```
 * az storage file update --path
 *                        --share-name
 *                        [--account-key]
 *                        [--account-name]
 *                        [--clear-content-settings {false, true}]
 *                        [--connection-string]
 *                        [--content-cache-control]
 *                        [--content-disposition]
 *                        [--content-encoding]
 *                        [--content-language]
 *                        [--content-md5]
 *                        [--content-type]
 *                        [--sas-token]
 *                        [--subscription]
 *                        [--timeout]
 * ```
 *
 * @param {string} path The path to the file within the file share.
 * @param {string} shareName The file share name.
 */
declare class az_storage_file_update_command_builder extends CommandBuilder<az_storage_file_update_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, path: string, shareName: string);
    /** The path to the file within the file share. */
    path(value: string): az_storage_file_update_command_builder;
    /** The file share name. */
    shareName(value: string): az_storage_file_update_command_builder;
    /** Storage account key. Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_KEY. */
    accountKey(value: string): az_storage_file_update_command_builder;
    /** Storage account name. Related environment variable: AZURE_STORAGE_ACCOUNT. Must be used in conjunction with either storage account key or a SAS token. If neither are present, the command will try to query the storage account key using the authenticated Azure account. If a large number of storage commands are executed the API quota may be hit. */
    accountName(value: string): az_storage_file_update_command_builder;
    /** If this flag is set, then if any one or more of the following properties (--content-cache-control, --content-disposition, --content-encoding, --content-language, --content-md5, --content-type) is set, then all of these properties are set together. If a value is not provided for a given property when at least one of the properties listed below is set, then that property will be cleared. */
    clearContentSettings(value: boolean): az_storage_file_update_command_builder;
    /** Storage account connection string. Environment variable: AZURE_STORAGE_CONNECTION_STRING. */
    connectionString(value: string): az_storage_file_update_command_builder;
    /** The cache control string. */
    contentCacheControl(value: string): az_storage_file_update_command_builder;
    /** Conveys additional information about how to process the response payload, and can also be used to attach additional metadata. */
    contentDisposition(value: string): az_storage_file_update_command_builder;
    /** The content encoding type. */
    contentEncoding(value: string): az_storage_file_update_command_builder;
    /** The content language. */
    contentLanguage(value: string): az_storage_file_update_command_builder;
    /** The content's MD5 hash. */
    contentMd5(value: string): az_storage_file_update_command_builder;
    /** The content MIME type. */
    contentType(value: string): az_storage_file_update_command_builder;
    /** A Shared Access Signature (SAS). Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_SAS_TOKEN. */
    sasToken(value: string): az_storage_file_update_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_storage_file_update_command_builder;
    /** Request timeout in seconds. Applies to each call to the service. */
    timeout(value: string): az_storage_file_update_command_builder;
}
/**
 * Upload a file to a share that uses the SMB 3.0 protocol.
 *
 * Syntax:
 * ```
 * az storage file upload --share-name
 *                        --source
 *                        [--account-key]
 *                        [--account-name]
 *                        [--connection-string]
 *                        [--content-cache-control]
 *                        [--content-disposition]
 *                        [--content-encoding]
 *                        [--content-language]
 *                        [--content-md5]
 *                        [--content-type]
 *                        [--max-connections]
 *                        [--metadata]
 *                        [--no-progress]
 *                        [--path]
 *                        [--sas-token]
 *                        [--subscription]
 *                        [--timeout]
 *                        [--validate-content]
 * ```
 *
 * @param {string} shareName The file share name.
 * @param {string} source Path of the local file to upload as the file content.
 */
declare class az_storage_file_upload_command_builder extends CommandBuilder<az_storage_file_upload_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, shareName: string, source: string);
    /** The file share name. */
    shareName(value: string): az_storage_file_upload_command_builder;
    /** Path of the local file to upload as the file content. */
    source(value: string): az_storage_file_upload_command_builder;
    /** Storage account key. Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_KEY. */
    accountKey(value: string): az_storage_file_upload_command_builder;
    /** Storage account name. Related environment variable: AZURE_STORAGE_ACCOUNT. Must be used in conjunction with either storage account key or a SAS token. If neither are present, the command will try to query the storage account key using the authenticated Azure account. If a large number of storage commands are executed the API quota may be hit. */
    accountName(value: string): az_storage_file_upload_command_builder;
    /** Storage account connection string. Environment variable: AZURE_STORAGE_CONNECTION_STRING. */
    connectionString(value: string): az_storage_file_upload_command_builder;
    /** The cache control string. */
    contentCacheControl(value: string): az_storage_file_upload_command_builder;
    /** Conveys additional information about how to process the response payload, and can also be used to attach additional metadata. */
    contentDisposition(value: string): az_storage_file_upload_command_builder;
    /** The content encoding type. */
    contentEncoding(value: string): az_storage_file_upload_command_builder;
    /** The content language. */
    contentLanguage(value: string): az_storage_file_upload_command_builder;
    /** The content's MD5 hash. */
    contentMd5(value: string): az_storage_file_upload_command_builder;
    /** The content MIME type. */
    contentType(value: string): az_storage_file_upload_command_builder;
    /** Maximum number of parallel connections to use. */
    maxConnections(value: string): az_storage_file_upload_command_builder;
    /** Metadata in space-separated key=value pairs. This overwrites any existing metadata. */
    metadata(value: string): az_storage_file_upload_command_builder;
    /** Include this flag to disable progress reporting for the command. */
    noProgress(value: string): az_storage_file_upload_command_builder;
    /** The path to the file within the file share. If the file name is omitted, the source file name will be used. */
    path(value: string): az_storage_file_upload_command_builder;
    /** A Shared Access Signature (SAS). Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_SAS_TOKEN. */
    sasToken(value: string): az_storage_file_upload_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_storage_file_upload_command_builder;
    /** Request timeout in seconds. Applies to each call to the service. */
    timeout(value: string): az_storage_file_upload_command_builder;
    /** If true, calculates an MD5 hash for each range of the file. The storage service checks the hash of the content that has arrived with the hash that was sent. This is primarily valuable for detecting bitflips on the wire if using http instead of https as https (the default) will already validate. Note that this MD5 hash is not stored with the file. */
    validateContent(value: string): az_storage_file_upload_command_builder;
}
/**
 * Upload files from a local directory to an Azure Storage File Share in a batch operation.
 *
 * Syntax:
 * ```
 * az storage file upload-batch --destination
 *                              --source
 *                              [--account-key]
 *                              [--account-name]
 *                              [--connection-string]
 *                              [--content-cache-control]
 *                              [--content-disposition]
 *                              [--content-encoding]
 *                              [--content-language]
 *                              [--content-md5]
 *                              [--content-type]
 *                              [--destination-path]
 *                              [--dryrun]
 *                              [--max-connections]
 *                              [--metadata]
 *                              [--no-progress]
 *                              [--pattern]
 *                              [--sas-token]
 *                              [--subscription]
 *                              [--validate-content]
 * ```
 *
 * @param {string} destination The destination of the upload operation.
 * @param {string} source The directory to upload files from.
 */
declare class az_storage_file_upload_batch_command_builder extends CommandBuilder<az_storage_file_upload_batch_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, destination: string, source: string);
    /** The destination of the upload operation. */
    destination(value: string): az_storage_file_upload_batch_command_builder;
    /** The directory to upload files from. */
    source(value: string): az_storage_file_upload_batch_command_builder;
    /** Storage account key. Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_KEY. */
    accountKey(value: string): az_storage_file_upload_batch_command_builder;
    /** Storage account name. Related environment variable: AZURE_STORAGE_ACCOUNT. Must be used in conjunction with either storage account key or a SAS token. If neither are present, the command will try to query the storage account key using the authenticated Azure account. If a large number of storage commands are executed the API quota may be hit. */
    accountName(value: string): az_storage_file_upload_batch_command_builder;
    /** Storage account connection string. Environment variable: AZURE_STORAGE_CONNECTION_STRING. */
    connectionString(value: string): az_storage_file_upload_batch_command_builder;
    /** The cache control string. */
    contentCacheControl(value: string): az_storage_file_upload_batch_command_builder;
    /** Conveys additional information about how to process the response payload, and can also be used to attach additional metadata. */
    contentDisposition(value: string): az_storage_file_upload_batch_command_builder;
    /** The content encoding type. */
    contentEncoding(value: string): az_storage_file_upload_batch_command_builder;
    /** The content language. */
    contentLanguage(value: string): az_storage_file_upload_batch_command_builder;
    /** The content's MD5 hash. */
    contentMd5(value: string): az_storage_file_upload_batch_command_builder;
    /** The content MIME type. */
    contentType(value: string): az_storage_file_upload_batch_command_builder;
    /** The directory where the source data is copied to. If omitted, data is copied to the root directory. */
    destinationPath(value: string): az_storage_file_upload_batch_command_builder;
    /** List the files and blobs to be uploaded. No actual data transfer will occur. */
    dryrun(value: string): az_storage_file_upload_batch_command_builder;
    /** The maximum number of parallel connections to use. Default value is 1. */
    maxConnections(value: string): az_storage_file_upload_batch_command_builder;
    /** Metadata in space-separated key=value pairs. This overwrites any existing metadata. */
    metadata(value: string): az_storage_file_upload_batch_command_builder;
    /** Include this flag to disable progress reporting for the command. */
    noProgress(value: string): az_storage_file_upload_batch_command_builder;
    /** The pattern used for file globbing. The supported patterns are '\*', '?', '[seq]', and '[!seq]'. For more information, please refer to <a href="https://docs.python.org/3.7/library/fnmatch.html">https://docs.python.org/3.7/library/fnmatch.html</a>. */
    pattern(value: string): az_storage_file_upload_batch_command_builder;
    /** A Shared Access Signature (SAS). Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_SAS_TOKEN. */
    sasToken(value: string): az_storage_file_upload_batch_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_storage_file_upload_batch_command_builder;
    /** If set, calculates an MD5 hash for each range of the file for validation. */
    validateContent(value: string): az_storage_file_upload_batch_command_builder;
}
/**
 * Create the url to access a file.
 *
 * Syntax:
 * ```
 * az storage file url --path
 *                     --share-name
 *                     [--account-key]
 *                     [--account-name]
 *                     [--connection-string]
 *                     [--protocol {http, https}]
 *                     [--sas-token]
 *                     [--subscription]
 * ```
 *
 * @param {string} path The path to the file within the file share.
 * @param {string} shareName The file share name.
 */
declare class az_storage_file_url_command_builder extends CommandBuilder<az_storage_file_url_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, path: string, shareName: string);
    /** The path to the file within the file share. */
    path(value: string): az_storage_file_url_command_builder;
    /** The file share name. */
    shareName(value: string): az_storage_file_url_command_builder;
    /** Storage account key. Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_KEY. */
    accountKey(value: string): az_storage_file_url_command_builder;
    /** Storage account name. Related environment variable: AZURE_STORAGE_ACCOUNT. Must be used in conjunction with either storage account key or a SAS token. If neither are present, the command will try to query the storage account key using the authenticated Azure account. If a large number of storage commands are executed the API quota may be hit. */
    accountName(value: string): az_storage_file_url_command_builder;
    /** Storage account connection string. Environment variable: AZURE_STORAGE_CONNECTION_STRING. */
    connectionString(value: string): az_storage_file_url_command_builder;
    /** Protocol to use. */
    protocol(value: 'http' | 'https'): az_storage_file_url_command_builder;
    /** A Shared Access Signature (SAS). Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_SAS_TOKEN. */
    sasToken(value: string): az_storage_file_url_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_storage_file_url_command_builder;
}
/**
 * Set the access control properties of a path(directory or file) in Azure Data Lake Storage Gen2 account.
 *
 * Syntax:
 * ```
 * az storage fs access set --file-system
 *                          --path
 *                          [--account-key]
 *                          [--account-name]
 *                          [--acl]
 *                          [--auth-mode {key, login}]
 *                          [--connection-string]
 *                          [--group]
 *                          [--owner]
 *                          [--permissions]
 *                          [--sas-token]
 *                          [--subscription]
 * ```
 *
 * @param {string} fileSystem File system name.
 * @param {string} path The path to a file or directory in the specified file system.
 */
declare class az_storage_fs_access_set_command_builder extends CommandBuilder<az_storage_fs_access_set_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, fileSystem: string, path: string);
    /** File system name. */
    fileSystem(value: string): az_storage_fs_access_set_command_builder;
    /** The path to a file or directory in the specified file system. */
    path(value: string): az_storage_fs_access_set_command_builder;
    /** Storage account key. Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_KEY. */
    accountKey(value: string): az_storage_fs_access_set_command_builder;
    /** Storage account name. Related environment variable: AZURE_STORAGE_ACCOUNT. Must be used in conjunction with either storage account key or a SAS token. If neither are present, the command will try to query the storage account key using the authenticated Azure account. If a large number of storage commands are executed the API quota may be hit. */
    accountName(value: string): az_storage_fs_access_set_command_builder;
    /** Invalid in conjunction with acl. POSIX access control rights on files and directories in the format "[scope:][type]:[id]:[permissions]". e.g. "user::rwx,group::r--,other::---,mask::rwx". */
    acl(value: string): az_storage_fs_access_set_command_builder;
    /** The mode in which to run the command. "login" mode will directly use your login credentials for the authentication. The legacy "key" mode will attempt to query for an account key if no authentication parameters for the account are provided. Environment variable: AZURE_STORAGE_AUTH_MODE. */
    authMode(value: 'key' | 'login'): az_storage_fs_access_set_command_builder;
    /** Storage account connection string. Environment variable: AZURE_STORAGE_CONNECTION_STRING. */
    connectionString(value: string): az_storage_fs_access_set_command_builder;
    /** The owning group of the file or directory. The group Azure Active Directory object ID or user principal name to set as the owning group. For more information, please refer to <a href="https://docs.microsoft.com/en-us/azure/storage/blobs/data-lake-storage-access-control#changing-the-owning-group">https://docs.microsoft.com/en-us/azure/storage/blobs/data-lake-storage-access-control#changing-the-owning-group</a>. */
    group(value: string): az_storage_fs_access_set_command_builder;
    /** The owning user of the file or directory. The user Azure Active Directory object ID or user principal name to set as the owner. For more information, please refer to <a href="https://docs.microsoft.com/en-us/azure/storage/blobs/data-lake-storage-access-control#the-owning-user">https://docs.microsoft.com/en-us/azure/storage/blobs/data-lake-storage-access-control#the-owning-user</a>. */
    owner(value: string): az_storage_fs_access_set_command_builder;
    /** Invalid in conjunction with acl. POSIX access permissions for the file owner, the file owning group, and others. Each class may be granted read(r), write(w), or execute(x) permission. Both symbolic (rwxrw-rw-) and 4-digit octal notation (e.g. 0766) are supported.'. */
    permissions(value: string): az_storage_fs_access_set_command_builder;
    /** A Shared Access Signature (SAS). Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_SAS_TOKEN. */
    sasToken(value: string): az_storage_fs_access_set_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_storage_fs_access_set_command_builder;
}
/**
 * Show the access control properties of a path (directory or file) in Azure Data Lake Storage Gen2 account.
 *
 * Syntax:
 * ```
 * az storage fs access show --file-system
 *                           --path
 *                           [--account-key]
 *                           [--account-name]
 *                           [--auth-mode {key, login}]
 *                           [--connection-string]
 *                           [--query-examples]
 *                           [--sas-token]
 *                           [--subscription]
 * ```
 *
 * @param {string} fileSystem File system name.
 * @param {string} path The path to a file or directory in the specified file system.
 */
declare class az_storage_fs_access_show_command_builder extends CommandBuilder<az_storage_fs_access_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, fileSystem: string, path: string);
    /** File system name. */
    fileSystem(value: string): az_storage_fs_access_show_command_builder;
    /** The path to a file or directory in the specified file system. */
    path(value: string): az_storage_fs_access_show_command_builder;
    /** Storage account key. Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_KEY. */
    accountKey(value: string): az_storage_fs_access_show_command_builder;
    /** Storage account name. Related environment variable: AZURE_STORAGE_ACCOUNT. Must be used in conjunction with either storage account key or a SAS token. If neither are present, the command will try to query the storage account key using the authenticated Azure account. If a large number of storage commands are executed the API quota may be hit. */
    accountName(value: string): az_storage_fs_access_show_command_builder;
    /** The mode in which to run the command. "login" mode will directly use your login credentials for the authentication. The legacy "key" mode will attempt to query for an account key if no authentication parameters for the account are provided. Environment variable: AZURE_STORAGE_AUTH_MODE. */
    authMode(value: 'key' | 'login'): az_storage_fs_access_show_command_builder;
    /** Storage account connection string. Environment variable: AZURE_STORAGE_CONNECTION_STRING. */
    connectionString(value: string): az_storage_fs_access_show_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_storage_fs_access_show_command_builder;
    /** A Shared Access Signature (SAS). Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_SAS_TOKEN. */
    sasToken(value: string): az_storage_fs_access_show_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_storage_fs_access_show_command_builder;
}
/**
 * Return all user-defined metadata for the specified directory.
 *
 * Syntax:
 * ```
 * az storage fs directory metadata show --file-system
 *                                       --name
 *                                       [--account-key]
 *                                       [--account-name]
 *                                       [--auth-mode {key, login}]
 *                                       [--connection-string]
 *                                       [--query-examples]
 *                                       [--sas-token]
 *                                       [--subscription]
 *                                       [--timeout]
 * ```
 *
 * @param {string} fileSystem File system name.
 * @param {string} name The name of directory.
 */
declare class az_storage_fs_directory_metadata_show_command_builder extends CommandBuilder<az_storage_fs_directory_metadata_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, fileSystem: string, name: string);
    /** File system name. */
    fileSystem(value: string): az_storage_fs_directory_metadata_show_command_builder;
    /** The name of directory. */
    name(value: string): az_storage_fs_directory_metadata_show_command_builder;
    /** Storage account key. Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_KEY. */
    accountKey(value: string): az_storage_fs_directory_metadata_show_command_builder;
    /** Storage account name. Related environment variable: AZURE_STORAGE_ACCOUNT. Must be used in conjunction with either storage account key or a SAS token. If neither are present, the command will try to query the storage account key using the authenticated Azure account. If a large number of storage commands are executed the API quota may be hit. */
    accountName(value: string): az_storage_fs_directory_metadata_show_command_builder;
    /** The mode in which to run the command. "login" mode will directly use your login credentials for the authentication. The legacy "key" mode will attempt to query for an account key if no authentication parameters for the account are provided. Environment variable: AZURE_STORAGE_AUTH_MODE. */
    authMode(value: 'key' | 'login'): az_storage_fs_directory_metadata_show_command_builder;
    /** Storage account connection string. Environment variable: AZURE_STORAGE_CONNECTION_STRING. */
    connectionString(value: string): az_storage_fs_directory_metadata_show_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_storage_fs_directory_metadata_show_command_builder;
    /** A Shared Access Signature (SAS). Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_SAS_TOKEN. */
    sasToken(value: string): az_storage_fs_directory_metadata_show_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_storage_fs_directory_metadata_show_command_builder;
    /** Request timeout in seconds. Applies to each call to the service. */
    timeout(value: string): az_storage_fs_directory_metadata_show_command_builder;
}
/**
 * Sets one or more user-defined name-value pairs for the specified file system.
 *
 * Syntax:
 * ```
 * az storage fs directory metadata update --file-system
 *                                         --metadata
 *                                         --name
 *                                         [--account-key]
 *                                         [--account-name]
 *                                         [--auth-mode {key, login}]
 *                                         [--connection-string]
 *                                         [--sas-token]
 *                                         [--subscription]
 *                                         [--timeout]
 * ```
 *
 * @param {string} fileSystem File system name.
 * @param {string} metadata Metadata in space-separated key=value pairs. This overwrites any existing metadata.
 * @param {string} name The name of directory.
 */
declare class az_storage_fs_directory_metadata_update_command_builder extends CommandBuilder<az_storage_fs_directory_metadata_update_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, fileSystem: string, metadata: string, name: string);
    /** File system name. */
    fileSystem(value: string): az_storage_fs_directory_metadata_update_command_builder;
    /** Metadata in space-separated key=value pairs. This overwrites any existing metadata. */
    metadata(value: string): az_storage_fs_directory_metadata_update_command_builder;
    /** The name of directory. */
    name(value: string): az_storage_fs_directory_metadata_update_command_builder;
    /** Storage account key. Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_KEY. */
    accountKey(value: string): az_storage_fs_directory_metadata_update_command_builder;
    /** Storage account name. Related environment variable: AZURE_STORAGE_ACCOUNT. Must be used in conjunction with either storage account key or a SAS token. If neither are present, the command will try to query the storage account key using the authenticated Azure account. If a large number of storage commands are executed the API quota may be hit. */
    accountName(value: string): az_storage_fs_directory_metadata_update_command_builder;
    /** The mode in which to run the command. "login" mode will directly use your login credentials for the authentication. The legacy "key" mode will attempt to query for an account key if no authentication parameters for the account are provided. Environment variable: AZURE_STORAGE_AUTH_MODE. */
    authMode(value: 'key' | 'login'): az_storage_fs_directory_metadata_update_command_builder;
    /** Storage account connection string. Environment variable: AZURE_STORAGE_CONNECTION_STRING. */
    connectionString(value: string): az_storage_fs_directory_metadata_update_command_builder;
    /** A Shared Access Signature (SAS). Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_SAS_TOKEN. */
    sasToken(value: string): az_storage_fs_directory_metadata_update_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_storage_fs_directory_metadata_update_command_builder;
    /** Request timeout in seconds. Applies to each call to the service. */
    timeout(value: string): az_storage_fs_directory_metadata_update_command_builder;
}
/**
 * Create a directory in ADLS Gen2 file system.
 *
 * Syntax:
 * ```
 * az storage fs directory create --file-system
 *                                --name
 *                                [--account-key]
 *                                [--account-name]
 *                                [--auth-mode {key, login}]
 *                                [--connection-string]
 *                                [--metadata]
 *                                [--permissions]
 *                                [--sas-token]
 *                                [--subscription]
 *                                [--timeout]
 *                                [--umask]
 * ```
 *
 * @param {string} fileSystem File system name.
 * @param {string} name The name of directory.
 */
declare class az_storage_fs_directory_create_command_builder extends CommandBuilder<az_storage_fs_directory_create_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, fileSystem: string, name: string);
    /** File system name. */
    fileSystem(value: string): az_storage_fs_directory_create_command_builder;
    /** The name of directory. */
    name(value: string): az_storage_fs_directory_create_command_builder;
    /** Storage account key. Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_KEY. */
    accountKey(value: string): az_storage_fs_directory_create_command_builder;
    /** Storage account name. Related environment variable: AZURE_STORAGE_ACCOUNT. Must be used in conjunction with either storage account key or a SAS token. If neither are present, the command will try to query the storage account key using the authenticated Azure account. If a large number of storage commands are executed the API quota may be hit. */
    accountName(value: string): az_storage_fs_directory_create_command_builder;
    /** The mode in which to run the command. "login" mode will directly use your login credentials for the authentication. The legacy "key" mode will attempt to query for an account key if no authentication parameters for the account are provided. Environment variable: AZURE_STORAGE_AUTH_MODE. */
    authMode(value: 'key' | 'login'): az_storage_fs_directory_create_command_builder;
    /** Storage account connection string. Environment variable: AZURE_STORAGE_CONNECTION_STRING. */
    connectionString(value: string): az_storage_fs_directory_create_command_builder;
    /** Metadata in space-separated key=value pairs. This overwrites any existing metadata. */
    metadata(value: string): az_storage_fs_directory_create_command_builder;
    /** POSIX access permissions for the file owner, the file owning group, and others. Each class may be granted read, write, or execute permission. The sticky bit is also supported. Both symbolic (rwxrw-rw-) and 4-digit octal notation (e.g. 0766) are supported. For more information, please refer to <a href="https://docs.microsoft.com/en-us/azure/storage/blobs/data-lake-storage-access-control#levels-of-permission">https://docs.microsoft.com/en-us/azure/storage/blobs/data-lake-storage-access-control#levels-of-permission</a>. */
    permissions(value: string): az_storage_fs_directory_create_command_builder;
    /** A Shared Access Signature (SAS). Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_SAS_TOKEN. */
    sasToken(value: string): az_storage_fs_directory_create_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_storage_fs_directory_create_command_builder;
    /** Request timeout in seconds. Applies to each call to the service. */
    timeout(value: string): az_storage_fs_directory_create_command_builder;
    /** When creating a file or directory and the parent folder does not have a default ACL, the umask restricts the permissions of the file or directory to be created. The resulting permission is given by p & ^u, where p is the permission and u is the umask. For more information, please refer to <a href="https://docs.microsoft.com/en-us/azure/storage/blobs/data-lake-storage-access-control#umask">https://docs.microsoft.com/en-us/azure/storage/blobs/data-lake-storage-access-control#umask</a>. */
    umask(value: string): az_storage_fs_directory_create_command_builder;
}
/**
 * Delete a directory in ADLS Gen2 file system.
 *
 * Syntax:
 * ```
 * az storage fs directory delete --file-system
 *                                --name
 *                                [--account-key]
 *                                [--account-name]
 *                                [--auth-mode {key, login}]
 *                                [--connection-string]
 *                                [--sas-token]
 *                                [--subscription]
 *                                [--timeout]
 *                                [--yes]
 * ```
 *
 * @param {string} fileSystem File system name.
 * @param {string} name The name of directory.
 */
declare class az_storage_fs_directory_delete_command_builder extends CommandBuilder<az_storage_fs_directory_delete_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, fileSystem: string, name: string);
    /** File system name. */
    fileSystem(value: string): az_storage_fs_directory_delete_command_builder;
    /** The name of directory. */
    name(value: string): az_storage_fs_directory_delete_command_builder;
    /** Storage account key. Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_KEY. */
    accountKey(value: string): az_storage_fs_directory_delete_command_builder;
    /** Storage account name. Related environment variable: AZURE_STORAGE_ACCOUNT. Must be used in conjunction with either storage account key or a SAS token. If neither are present, the command will try to query the storage account key using the authenticated Azure account. If a large number of storage commands are executed the API quota may be hit. */
    accountName(value: string): az_storage_fs_directory_delete_command_builder;
    /** The mode in which to run the command. "login" mode will directly use your login credentials for the authentication. The legacy "key" mode will attempt to query for an account key if no authentication parameters for the account are provided. Environment variable: AZURE_STORAGE_AUTH_MODE. */
    authMode(value: 'key' | 'login'): az_storage_fs_directory_delete_command_builder;
    /** Storage account connection string. Environment variable: AZURE_STORAGE_CONNECTION_STRING. */
    connectionString(value: string): az_storage_fs_directory_delete_command_builder;
    /** A Shared Access Signature (SAS). Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_SAS_TOKEN. */
    sasToken(value: string): az_storage_fs_directory_delete_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_storage_fs_directory_delete_command_builder;
    /** Request timeout in seconds. Applies to each call to the service. */
    timeout(value: string): az_storage_fs_directory_delete_command_builder;
    /** Do not prompt for confirmation. */
    yes(value: string): az_storage_fs_directory_delete_command_builder;
}
/**
 * Check for the existence of a directory in ADLS Gen2 file system.
 *
 * Syntax:
 * ```
 * az storage fs directory exists --file-system
 *                                --name
 *                                [--account-key]
 *                                [--account-name]
 *                                [--auth-mode {key, login}]
 *                                [--connection-string]
 *                                [--sas-token]
 *                                [--subscription]
 *                                [--timeout]
 * ```
 *
 * @param {string} fileSystem File system name.
 * @param {string} name The name of directory.
 */
declare class az_storage_fs_directory_exists_command_builder extends CommandBuilder<az_storage_fs_directory_exists_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, fileSystem: string, name: string);
    /** File system name. */
    fileSystem(value: string): az_storage_fs_directory_exists_command_builder;
    /** The name of directory. */
    name(value: string): az_storage_fs_directory_exists_command_builder;
    /** Storage account key. Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_KEY. */
    accountKey(value: string): az_storage_fs_directory_exists_command_builder;
    /** Storage account name. Related environment variable: AZURE_STORAGE_ACCOUNT. Must be used in conjunction with either storage account key or a SAS token. If neither are present, the command will try to query the storage account key using the authenticated Azure account. If a large number of storage commands are executed the API quota may be hit. */
    accountName(value: string): az_storage_fs_directory_exists_command_builder;
    /** The mode in which to run the command. "login" mode will directly use your login credentials for the authentication. The legacy "key" mode will attempt to query for an account key if no authentication parameters for the account are provided. Environment variable: AZURE_STORAGE_AUTH_MODE. */
    authMode(value: 'key' | 'login'): az_storage_fs_directory_exists_command_builder;
    /** Storage account connection string. Environment variable: AZURE_STORAGE_CONNECTION_STRING. */
    connectionString(value: string): az_storage_fs_directory_exists_command_builder;
    /** A Shared Access Signature (SAS). Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_SAS_TOKEN. */
    sasToken(value: string): az_storage_fs_directory_exists_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_storage_fs_directory_exists_command_builder;
    /** Request timeout in seconds. Applies to each call to the service. */
    timeout(value: string): az_storage_fs_directory_exists_command_builder;
}
/**
 * List directories in ADLS Gen2 file system.
 *
 * Syntax:
 * ```
 * az storage fs directory list --file-system
 *                              [--account-key]
 *                              [--account-name]
 *                              [--auth-mode {key, login}]
 *                              [--connection-string]
 *                              [--num-results]
 *                              [--path]
 *                              [--query-examples]
 *                              [--recursive {false, true}]
 *                              [--sas-token]
 *                              [--subscription]
 *                              [--timeout]
 * ```
 *
 * @param {string} fileSystem File system name.
 */
declare class az_storage_fs_directory_list_command_builder extends CommandBuilder<az_storage_fs_directory_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, fileSystem: string);
    /** File system name. */
    fileSystem(value: string): az_storage_fs_directory_list_command_builder;
    /** Storage account key. Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_KEY. */
    accountKey(value: string): az_storage_fs_directory_list_command_builder;
    /** Storage account name. Related environment variable: AZURE_STORAGE_ACCOUNT. Must be used in conjunction with either storage account key or a SAS token. If neither are present, the command will try to query the storage account key using the authenticated Azure account. If a large number of storage commands are executed the API quota may be hit. */
    accountName(value: string): az_storage_fs_directory_list_command_builder;
    /** The mode in which to run the command. "login" mode will directly use your login credentials for the authentication. The legacy "key" mode will attempt to query for an account key if no authentication parameters for the account are provided. Environment variable: AZURE_STORAGE_AUTH_MODE. */
    authMode(value: 'key' | 'login'): az_storage_fs_directory_list_command_builder;
    /** Storage account connection string. Environment variable: AZURE_STORAGE_CONNECTION_STRING. */
    connectionString(value: string): az_storage_fs_directory_list_command_builder;
    /** Specify the maximum number of results to return. */
    numResults(value: string): az_storage_fs_directory_list_command_builder;
    /** Filter the results to return only paths under the specified path. */
    path(value: string): az_storage_fs_directory_list_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_storage_fs_directory_list_command_builder;
    /** Look into sub-directories recursively when set to true. */
    recursive(value: boolean): az_storage_fs_directory_list_command_builder;
    /** A Shared Access Signature (SAS). Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_SAS_TOKEN. */
    sasToken(value: string): az_storage_fs_directory_list_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_storage_fs_directory_list_command_builder;
    /** Request timeout in seconds. Applies to each call to the service. */
    timeout(value: string): az_storage_fs_directory_list_command_builder;
}
/**
 * Move a directory in ADLS Gen2 file system.
 *
 * Syntax:
 * ```
 * az storage fs directory move --file-system
 *                              --name
 *                              --new-directory
 *                              [--account-key]
 *                              [--account-name]
 *                              [--auth-mode {key, login}]
 *                              [--connection-string]
 *                              [--sas-token]
 *                              [--subscription]
 *                              [--timeout]
 * ```
 *
 * @param {string} fileSystem File system name.
 * @param {string} name The name of directory.
 * @param {string} newDirectory The new directory name the users want to move to. The value must have the following format: "{filesystem}/{directory}/{subdirectory}".
 */
declare class az_storage_fs_directory_move_command_builder extends CommandBuilder<az_storage_fs_directory_move_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, fileSystem: string, name: string, newDirectory: string);
    /** File system name. */
    fileSystem(value: string): az_storage_fs_directory_move_command_builder;
    /** The name of directory. */
    name(value: string): az_storage_fs_directory_move_command_builder;
    /** The new directory name the users want to move to. The value must have the following format: "{filesystem}/{directory}/{subdirectory}". */
    newDirectory(value: string): az_storage_fs_directory_move_command_builder;
    /** Storage account key. Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_KEY. */
    accountKey(value: string): az_storage_fs_directory_move_command_builder;
    /** Storage account name. Related environment variable: AZURE_STORAGE_ACCOUNT. Must be used in conjunction with either storage account key or a SAS token. If neither are present, the command will try to query the storage account key using the authenticated Azure account. If a large number of storage commands are executed the API quota may be hit. */
    accountName(value: string): az_storage_fs_directory_move_command_builder;
    /** The mode in which to run the command. "login" mode will directly use your login credentials for the authentication. The legacy "key" mode will attempt to query for an account key if no authentication parameters for the account are provided. Environment variable: AZURE_STORAGE_AUTH_MODE. */
    authMode(value: 'key' | 'login'): az_storage_fs_directory_move_command_builder;
    /** Storage account connection string. Environment variable: AZURE_STORAGE_CONNECTION_STRING. */
    connectionString(value: string): az_storage_fs_directory_move_command_builder;
    /** A Shared Access Signature (SAS). Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_SAS_TOKEN. */
    sasToken(value: string): az_storage_fs_directory_move_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_storage_fs_directory_move_command_builder;
    /** Request timeout in seconds. Applies to each call to the service. */
    timeout(value: string): az_storage_fs_directory_move_command_builder;
}
/**
 * Show properties of a directory in ADLS Gen2 file system.
 *
 * Syntax:
 * ```
 * az storage fs directory show --file-system
 *                              --name
 *                              [--account-key]
 *                              [--account-name]
 *                              [--auth-mode {key, login}]
 *                              [--connection-string]
 *                              [--query-examples]
 *                              [--sas-token]
 *                              [--subscription]
 *                              [--timeout]
 * ```
 *
 * @param {string} fileSystem File system name.
 * @param {string} name The name of directory.
 */
declare class az_storage_fs_directory_show_command_builder extends CommandBuilder<az_storage_fs_directory_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, fileSystem: string, name: string);
    /** File system name. */
    fileSystem(value: string): az_storage_fs_directory_show_command_builder;
    /** The name of directory. */
    name(value: string): az_storage_fs_directory_show_command_builder;
    /** Storage account key. Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_KEY. */
    accountKey(value: string): az_storage_fs_directory_show_command_builder;
    /** Storage account name. Related environment variable: AZURE_STORAGE_ACCOUNT. Must be used in conjunction with either storage account key or a SAS token. If neither are present, the command will try to query the storage account key using the authenticated Azure account. If a large number of storage commands are executed the API quota may be hit. */
    accountName(value: string): az_storage_fs_directory_show_command_builder;
    /** The mode in which to run the command. "login" mode will directly use your login credentials for the authentication. The legacy "key" mode will attempt to query for an account key if no authentication parameters for the account are provided. Environment variable: AZURE_STORAGE_AUTH_MODE. */
    authMode(value: 'key' | 'login'): az_storage_fs_directory_show_command_builder;
    /** Storage account connection string. Environment variable: AZURE_STORAGE_CONNECTION_STRING. */
    connectionString(value: string): az_storage_fs_directory_show_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_storage_fs_directory_show_command_builder;
    /** A Shared Access Signature (SAS). Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_SAS_TOKEN. */
    sasToken(value: string): az_storage_fs_directory_show_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_storage_fs_directory_show_command_builder;
    /** Request timeout in seconds. Applies to each call to the service. */
    timeout(value: string): az_storage_fs_directory_show_command_builder;
}
/**
 * Returns all user-defined metadata, standard HTTP properties, and system properties for the file.
 *
 * Syntax:
 * ```
 * az storage fs file metadata show --file-system
 *                                  --path
 *                                  [--account-key]
 *                                  [--account-name]
 *                                  [--auth-mode {key, login}]
 *                                  [--connection-string]
 *                                  [--query-examples]
 *                                  [--sas-token]
 *                                  [--subscription]
 *                                  [--timeout]
 * ```
 *
 * @param {string} fileSystem File system name.
 * @param {string} path The file path in a file system.
 */
declare class az_storage_fs_file_metadata_show_command_builder extends CommandBuilder<az_storage_fs_file_metadata_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, fileSystem: string, path: string);
    /** File system name. */
    fileSystem(value: string): az_storage_fs_file_metadata_show_command_builder;
    /** The file path in a file system. */
    path(value: string): az_storage_fs_file_metadata_show_command_builder;
    /** Storage account key. Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_KEY. */
    accountKey(value: string): az_storage_fs_file_metadata_show_command_builder;
    /** Storage account name. Related environment variable: AZURE_STORAGE_ACCOUNT. Must be used in conjunction with either storage account key or a SAS token. If neither are present, the command will try to query the storage account key using the authenticated Azure account. If a large number of storage commands are executed the API quota may be hit. */
    accountName(value: string): az_storage_fs_file_metadata_show_command_builder;
    /** The mode in which to run the command. "login" mode will directly use your login credentials for the authentication. The legacy "key" mode will attempt to query for an account key if no authentication parameters for the account are provided. Environment variable: AZURE_STORAGE_AUTH_MODE. */
    authMode(value: 'key' | 'login'): az_storage_fs_file_metadata_show_command_builder;
    /** Storage account connection string. Environment variable: AZURE_STORAGE_CONNECTION_STRING. */
    connectionString(value: string): az_storage_fs_file_metadata_show_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_storage_fs_file_metadata_show_command_builder;
    /** A Shared Access Signature (SAS). Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_SAS_TOKEN. */
    sasToken(value: string): az_storage_fs_file_metadata_show_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_storage_fs_file_metadata_show_command_builder;
    /** Request timeout in seconds. Applies to each call to the service. */
    timeout(value: string): az_storage_fs_file_metadata_show_command_builder;
}
/**
 * Sets one or more user-defined name-value pairs for the specified file system.
 *
 * Syntax:
 * ```
 * az storage fs file metadata update --file-system
 *                                    --metadata
 *                                    --path
 *                                    [--account-key]
 *                                    [--account-name]
 *                                    [--auth-mode {key, login}]
 *                                    [--connection-string]
 *                                    [--sas-token]
 *                                    [--subscription]
 *                                    [--timeout]
 * ```
 *
 * @param {string} fileSystem File system name.
 * @param {string} metadata Metadata in space-separated key=value pairs. This overwrites any existing metadata.
 * @param {string} path The file path in a file system.
 */
declare class az_storage_fs_file_metadata_update_command_builder extends CommandBuilder<az_storage_fs_file_metadata_update_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, fileSystem: string, metadata: string, path: string);
    /** File system name. */
    fileSystem(value: string): az_storage_fs_file_metadata_update_command_builder;
    /** Metadata in space-separated key=value pairs. This overwrites any existing metadata. */
    metadata(value: string): az_storage_fs_file_metadata_update_command_builder;
    /** The file path in a file system. */
    path(value: string): az_storage_fs_file_metadata_update_command_builder;
    /** Storage account key. Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_KEY. */
    accountKey(value: string): az_storage_fs_file_metadata_update_command_builder;
    /** Storage account name. Related environment variable: AZURE_STORAGE_ACCOUNT. Must be used in conjunction with either storage account key or a SAS token. If neither are present, the command will try to query the storage account key using the authenticated Azure account. If a large number of storage commands are executed the API quota may be hit. */
    accountName(value: string): az_storage_fs_file_metadata_update_command_builder;
    /** The mode in which to run the command. "login" mode will directly use your login credentials for the authentication. The legacy "key" mode will attempt to query for an account key if no authentication parameters for the account are provided. Environment variable: AZURE_STORAGE_AUTH_MODE. */
    authMode(value: 'key' | 'login'): az_storage_fs_file_metadata_update_command_builder;
    /** Storage account connection string. Environment variable: AZURE_STORAGE_CONNECTION_STRING. */
    connectionString(value: string): az_storage_fs_file_metadata_update_command_builder;
    /** A Shared Access Signature (SAS). Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_SAS_TOKEN. */
    sasToken(value: string): az_storage_fs_file_metadata_update_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_storage_fs_file_metadata_update_command_builder;
    /** Request timeout in seconds. Applies to each call to the service. */
    timeout(value: string): az_storage_fs_file_metadata_update_command_builder;
}
/**
 * Append content to a file in ADLS Gen2 file system.
 *
 * Syntax:
 * ```
 * az storage fs file append --content
 *                           --file-system
 *                           --path
 *                           [--account-key]
 *                           [--account-name]
 *                           [--auth-mode {key, login}]
 *                           [--connection-string]
 *                           [--sas-token]
 *                           [--subscription]
 *                           [--timeout]
 * ```
 *
 * @param {string} content Content to be appended to file.
 * @param {string} fileSystem File system name.
 * @param {string} path The file path in a file system.
 */
declare class az_storage_fs_file_append_command_builder extends CommandBuilder<az_storage_fs_file_append_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, content: string, fileSystem: string, path: string);
    /** Content to be appended to file. */
    content(value: string): az_storage_fs_file_append_command_builder;
    /** File system name. */
    fileSystem(value: string): az_storage_fs_file_append_command_builder;
    /** The file path in a file system. */
    path(value: string): az_storage_fs_file_append_command_builder;
    /** Storage account key. Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_KEY. */
    accountKey(value: string): az_storage_fs_file_append_command_builder;
    /** Storage account name. Related environment variable: AZURE_STORAGE_ACCOUNT. Must be used in conjunction with either storage account key or a SAS token. If neither are present, the command will try to query the storage account key using the authenticated Azure account. If a large number of storage commands are executed the API quota may be hit. */
    accountName(value: string): az_storage_fs_file_append_command_builder;
    /** The mode in which to run the command. "login" mode will directly use your login credentials for the authentication. The legacy "key" mode will attempt to query for an account key if no authentication parameters for the account are provided. Environment variable: AZURE_STORAGE_AUTH_MODE. */
    authMode(value: 'key' | 'login'): az_storage_fs_file_append_command_builder;
    /** Storage account connection string. Environment variable: AZURE_STORAGE_CONNECTION_STRING. */
    connectionString(value: string): az_storage_fs_file_append_command_builder;
    /** A Shared Access Signature (SAS). Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_SAS_TOKEN. */
    sasToken(value: string): az_storage_fs_file_append_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_storage_fs_file_append_command_builder;
    /** Request timeout in seconds. Applies to each call to the service. */
    timeout(value: string): az_storage_fs_file_append_command_builder;
}
/**
 * Create a new file in ADLS Gen2 file system.
 *
 * Syntax:
 * ```
 * az storage fs file create --file-system
 *                           --path
 *                           [--account-key]
 *                           [--account-name]
 *                           [--auth-mode {key, login}]
 *                           [--connection-string]
 *                           [--content-cache-control]
 *                           [--content-disposition]
 *                           [--content-encoding]
 *                           [--content-language]
 *                           [--content-md5]
 *                           [--content-type]
 *                           [--metadata]
 *                           [--permissions]
 *                           [--sas-token]
 *                           [--subscription]
 *                           [--timeout]
 *                           [--umask]
 * ```
 *
 * @param {string} fileSystem File system name.
 * @param {string} path The file path in a file system.
 */
declare class az_storage_fs_file_create_command_builder extends CommandBuilder<az_storage_fs_file_create_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, fileSystem: string, path: string);
    /** File system name. */
    fileSystem(value: string): az_storage_fs_file_create_command_builder;
    /** The file path in a file system. */
    path(value: string): az_storage_fs_file_create_command_builder;
    /** Storage account key. Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_KEY. */
    accountKey(value: string): az_storage_fs_file_create_command_builder;
    /** Storage account name. Related environment variable: AZURE_STORAGE_ACCOUNT. Must be used in conjunction with either storage account key or a SAS token. If neither are present, the command will try to query the storage account key using the authenticated Azure account. If a large number of storage commands are executed the API quota may be hit. */
    accountName(value: string): az_storage_fs_file_create_command_builder;
    /** The mode in which to run the command. "login" mode will directly use your login credentials for the authentication. The legacy "key" mode will attempt to query for an account key if no authentication parameters for the account are provided. Environment variable: AZURE_STORAGE_AUTH_MODE. */
    authMode(value: 'key' | 'login'): az_storage_fs_file_create_command_builder;
    /** Storage account connection string. Environment variable: AZURE_STORAGE_CONNECTION_STRING. */
    connectionString(value: string): az_storage_fs_file_create_command_builder;
    /** The cache control string. */
    contentCacheControl(value: string): az_storage_fs_file_create_command_builder;
    /** Conveys additional information about how to process the response payload, and can also be used to attach additional metadata. */
    contentDisposition(value: string): az_storage_fs_file_create_command_builder;
    /** The content encoding type. */
    contentEncoding(value: string): az_storage_fs_file_create_command_builder;
    /** The content language. */
    contentLanguage(value: string): az_storage_fs_file_create_command_builder;
    /** The content's MD5 hash. */
    contentMd5(value: string): az_storage_fs_file_create_command_builder;
    /** The content MIME type. */
    contentType(value: string): az_storage_fs_file_create_command_builder;
    /** Metadata in space-separated key=value pairs. This overwrites any existing metadata. */
    metadata(value: string): az_storage_fs_file_create_command_builder;
    /** POSIX access permissions for the file owner, the file owning group, and others. Each class may be granted read, write, or execute permission. The sticky bit is also supported. Both symbolic (rwxrw-rw-) and 4-digit octal notation (e.g. 0766) are supported. For more information, please refer to <a href="https://docs.microsoft.com/en-us/azure/storage/blobs/data-lake-storage-access-control#levels-of-permission">https://docs.microsoft.com/en-us/azure/storage/blobs/data-lake-storage-access-control#levels-of-permission</a>. */
    permissions(value: string): az_storage_fs_file_create_command_builder;
    /** A Shared Access Signature (SAS). Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_SAS_TOKEN. */
    sasToken(value: string): az_storage_fs_file_create_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_storage_fs_file_create_command_builder;
    /** Request timeout in seconds. Applies to each call to the service. */
    timeout(value: string): az_storage_fs_file_create_command_builder;
    /** When creating a file or directory and the parent folder does not have a default ACL, the umask restricts the permissions of the file or directory to be created. The resulting permission is given by p & ^u, where p is the permission and u is the umask. For more information, please refer to <a href="https://docs.microsoft.com/en-us/azure/storage/blobs/data-lake-storage-access-control#umask">https://docs.microsoft.com/en-us/azure/storage/blobs/data-lake-storage-access-control#umask</a>. */
    umask(value: string): az_storage_fs_file_create_command_builder;
}
/**
 * Delete a file in ADLS Gen2 file system.
 *
 * Syntax:
 * ```
 * az storage fs file delete --file-system
 *                           --path
 *                           [--account-key]
 *                           [--account-name]
 *                           [--auth-mode {key, login}]
 *                           [--connection-string]
 *                           [--sas-token]
 *                           [--subscription]
 *                           [--timeout]
 *                           [--yes]
 * ```
 *
 * @param {string} fileSystem File system name.
 * @param {string} path The file path in a file system.
 */
declare class az_storage_fs_file_delete_command_builder extends CommandBuilder<az_storage_fs_file_delete_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, fileSystem: string, path: string);
    /** File system name. */
    fileSystem(value: string): az_storage_fs_file_delete_command_builder;
    /** The file path in a file system. */
    path(value: string): az_storage_fs_file_delete_command_builder;
    /** Storage account key. Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_KEY. */
    accountKey(value: string): az_storage_fs_file_delete_command_builder;
    /** Storage account name. Related environment variable: AZURE_STORAGE_ACCOUNT. Must be used in conjunction with either storage account key or a SAS token. If neither are present, the command will try to query the storage account key using the authenticated Azure account. If a large number of storage commands are executed the API quota may be hit. */
    accountName(value: string): az_storage_fs_file_delete_command_builder;
    /** The mode in which to run the command. "login" mode will directly use your login credentials for the authentication. The legacy "key" mode will attempt to query for an account key if no authentication parameters for the account are provided. Environment variable: AZURE_STORAGE_AUTH_MODE. */
    authMode(value: 'key' | 'login'): az_storage_fs_file_delete_command_builder;
    /** Storage account connection string. Environment variable: AZURE_STORAGE_CONNECTION_STRING. */
    connectionString(value: string): az_storage_fs_file_delete_command_builder;
    /** A Shared Access Signature (SAS). Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_SAS_TOKEN. */
    sasToken(value: string): az_storage_fs_file_delete_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_storage_fs_file_delete_command_builder;
    /** Request timeout in seconds. Applies to each call to the service. */
    timeout(value: string): az_storage_fs_file_delete_command_builder;
    /** Do not prompt for confirmation. */
    yes(value: string): az_storage_fs_file_delete_command_builder;
}
/**
 * Download a file from the specified path in ADLS Gen2 file system.
 *
 * Syntax:
 * ```
 * az storage fs file download --file-system
 *                             --path
 *                             [--account-key]
 *                             [--account-name]
 *                             [--auth-mode {key, login}]
 *                             [--connection-string]
 *                             [--destination]
 *                             [--overwrite {false, true}]
 *                             [--sas-token]
 *                             [--subscription]
 *                             [--timeout]
 * ```
 *
 * @param {string} fileSystem File system name.
 * @param {string} path The file path in a file system.
 */
declare class az_storage_fs_file_download_command_builder extends CommandBuilder<az_storage_fs_file_download_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, fileSystem: string, path: string);
    /** File system name. */
    fileSystem(value: string): az_storage_fs_file_download_command_builder;
    /** The file path in a file system. */
    path(value: string): az_storage_fs_file_download_command_builder;
    /** Storage account key. Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_KEY. */
    accountKey(value: string): az_storage_fs_file_download_command_builder;
    /** Storage account name. Related environment variable: AZURE_STORAGE_ACCOUNT. Must be used in conjunction with either storage account key or a SAS token. If neither are present, the command will try to query the storage account key using the authenticated Azure account. If a large number of storage commands are executed the API quota may be hit. */
    accountName(value: string): az_storage_fs_file_download_command_builder;
    /** The mode in which to run the command. "login" mode will directly use your login credentials for the authentication. The legacy "key" mode will attempt to query for an account key if no authentication parameters for the account are provided. Environment variable: AZURE_STORAGE_AUTH_MODE. */
    authMode(value: 'key' | 'login'): az_storage_fs_file_download_command_builder;
    /** Storage account connection string. Environment variable: AZURE_STORAGE_CONNECTION_STRING. */
    connectionString(value: string): az_storage_fs_file_download_command_builder;
    /** The local file where the file or folder will be downloaded to. The source filename will be used if not specified. */
    destination(value: string): az_storage_fs_file_download_command_builder;
    /** Overwrite an existing file when specified. Default value is false. */
    overwrite(value: boolean): az_storage_fs_file_download_command_builder;
    /** A Shared Access Signature (SAS). Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_SAS_TOKEN. */
    sasToken(value: string): az_storage_fs_file_download_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_storage_fs_file_download_command_builder;
    /** Request timeout in seconds. Applies to each call to the service. */
    timeout(value: string): az_storage_fs_file_download_command_builder;
}
/**
 * Check for the existence of a file in ADLS Gen2 file system.
 *
 * Syntax:
 * ```
 * az storage fs file exists --file-system
 *                           --path
 *                           [--account-key]
 *                           [--account-name]
 *                           [--auth-mode {key, login}]
 *                           [--connection-string]
 *                           [--sas-token]
 *                           [--subscription]
 *                           [--timeout]
 * ```
 *
 * @param {string} fileSystem File system name.
 * @param {string} path The file path in a file system.
 */
declare class az_storage_fs_file_exists_command_builder extends CommandBuilder<az_storage_fs_file_exists_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, fileSystem: string, path: string);
    /** File system name. */
    fileSystem(value: string): az_storage_fs_file_exists_command_builder;
    /** The file path in a file system. */
    path(value: string): az_storage_fs_file_exists_command_builder;
    /** Storage account key. Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_KEY. */
    accountKey(value: string): az_storage_fs_file_exists_command_builder;
    /** Storage account name. Related environment variable: AZURE_STORAGE_ACCOUNT. Must be used in conjunction with either storage account key or a SAS token. If neither are present, the command will try to query the storage account key using the authenticated Azure account. If a large number of storage commands are executed the API quota may be hit. */
    accountName(value: string): az_storage_fs_file_exists_command_builder;
    /** The mode in which to run the command. "login" mode will directly use your login credentials for the authentication. The legacy "key" mode will attempt to query for an account key if no authentication parameters for the account are provided. Environment variable: AZURE_STORAGE_AUTH_MODE. */
    authMode(value: 'key' | 'login'): az_storage_fs_file_exists_command_builder;
    /** Storage account connection string. Environment variable: AZURE_STORAGE_CONNECTION_STRING. */
    connectionString(value: string): az_storage_fs_file_exists_command_builder;
    /** A Shared Access Signature (SAS). Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_SAS_TOKEN. */
    sasToken(value: string): az_storage_fs_file_exists_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_storage_fs_file_exists_command_builder;
    /** Request timeout in seconds. Applies to each call to the service. */
    timeout(value: string): az_storage_fs_file_exists_command_builder;
}
/**
 * List files and directories in ADLS Gen2 file system.
 *
 * Syntax:
 * ```
 * az storage fs file list --file-system
 *                         [--account-key]
 *                         [--account-name]
 *                         [--auth-mode {key, login}]
 *                         [--connection-string]
 *                         [--exclude-dir]
 *                         [--marker]
 *                         [--num-results]
 *                         [--path]
 *                         [--query-examples]
 *                         [--recursive {false, true}]
 *                         [--sas-token]
 *                         [--subscription]
 *                         [--timeout]
 * ```
 *
 * @param {string} fileSystem File system name.
 */
declare class az_storage_fs_file_list_command_builder extends CommandBuilder<az_storage_fs_file_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, fileSystem: string);
    /** File system name. */
    fileSystem(value: string): az_storage_fs_file_list_command_builder;
    /** Storage account key. Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_KEY. */
    accountKey(value: string): az_storage_fs_file_list_command_builder;
    /** Storage account name. Related environment variable: AZURE_STORAGE_ACCOUNT. Must be used in conjunction with either storage account key or a SAS token. If neither are present, the command will try to query the storage account key using the authenticated Azure account. If a large number of storage commands are executed the API quota may be hit. */
    accountName(value: string): az_storage_fs_file_list_command_builder;
    /** The mode in which to run the command. "login" mode will directly use your login credentials for the authentication. The legacy "key" mode will attempt to query for an account key if no authentication parameters for the account are provided. Environment variable: AZURE_STORAGE_AUTH_MODE. */
    authMode(value: 'key' | 'login'): az_storage_fs_file_list_command_builder;
    /** Storage account connection string. Environment variable: AZURE_STORAGE_CONNECTION_STRING. */
    connectionString(value: string): az_storage_fs_file_list_command_builder;
    /** List only files in the given file system. */
    excludeDir(value: string): az_storage_fs_file_list_command_builder;
    /** An opaque continuation token. This value can be retrieved from the next_marker field of a previous generator object. If specified, this generator will begin returning results from this point. */
    marker(value: string): az_storage_fs_file_list_command_builder;
    /** Specify the maximum number of results to return. If the request does not specify num_results or specifies a value greater than 5,000, the server will return up to 5,000 items. */
    numResults(value: string): az_storage_fs_file_list_command_builder;
    /** Filter the results to return only paths under the specified path. */
    path(value: string): az_storage_fs_file_list_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_storage_fs_file_list_command_builder;
    /** Look into sub-directories recursively when set to true. */
    recursive(value: boolean): az_storage_fs_file_list_command_builder;
    /** A Shared Access Signature (SAS). Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_SAS_TOKEN. */
    sasToken(value: string): az_storage_fs_file_list_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_storage_fs_file_list_command_builder;
    /** Request timeout in seconds. Applies to each call to the service. */
    timeout(value: string): az_storage_fs_file_list_command_builder;
}
/**
 * Move a file in ADLS Gen2 Account.
 *
 * Syntax:
 * ```
 * az storage fs file move --file-system
 *                         --new-path
 *                         --path
 *                         [--account-key]
 *                         [--account-name]
 *                         [--auth-mode {key, login}]
 *                         [--connection-string]
 *                         [--content-cache-control]
 *                         [--content-disposition]
 *                         [--content-encoding]
 *                         [--content-language]
 *                         [--content-md5]
 *                         [--content-type]
 *                         [--sas-token]
 *                         [--subscription]
 * ```
 *
 * @param {string} fileSystem File system name.
 * @param {string} newPath The new path the users want to move to. The value must have the following format: "{filesystem}/{directory}/{subdirectory}/{file}".
 * @param {string} path The original file path users want to move in a file system.
 */
declare class az_storage_fs_file_move_command_builder extends CommandBuilder<az_storage_fs_file_move_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, fileSystem: string, newPath: string, path: string);
    /** File system name. */
    fileSystem(value: string): az_storage_fs_file_move_command_builder;
    /** The new path the users want to move to. The value must have the following format: "{filesystem}/{directory}/{subdirectory}/{file}". */
    newPath(value: string): az_storage_fs_file_move_command_builder;
    /** The original file path users want to move in a file system. */
    path(value: string): az_storage_fs_file_move_command_builder;
    /** Storage account key. Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_KEY. */
    accountKey(value: string): az_storage_fs_file_move_command_builder;
    /** Storage account name. Related environment variable: AZURE_STORAGE_ACCOUNT. Must be used in conjunction with either storage account key or a SAS token. If neither are present, the command will try to query the storage account key using the authenticated Azure account. If a large number of storage commands are executed the API quota may be hit. */
    accountName(value: string): az_storage_fs_file_move_command_builder;
    /** The mode in which to run the command. "login" mode will directly use your login credentials for the authentication. The legacy "key" mode will attempt to query for an account key if no authentication parameters for the account are provided. Environment variable: AZURE_STORAGE_AUTH_MODE. */
    authMode(value: 'key' | 'login'): az_storage_fs_file_move_command_builder;
    /** Storage account connection string. Environment variable: AZURE_STORAGE_CONNECTION_STRING. */
    connectionString(value: string): az_storage_fs_file_move_command_builder;
    /** The cache control string. */
    contentCacheControl(value: string): az_storage_fs_file_move_command_builder;
    /** Conveys additional information about how to process the response payload, and can also be used to attach additional metadata. */
    contentDisposition(value: string): az_storage_fs_file_move_command_builder;
    /** The content encoding type. */
    contentEncoding(value: string): az_storage_fs_file_move_command_builder;
    /** The content language. */
    contentLanguage(value: string): az_storage_fs_file_move_command_builder;
    /** The content's MD5 hash. */
    contentMd5(value: string): az_storage_fs_file_move_command_builder;
    /** The content MIME type. */
    contentType(value: string): az_storage_fs_file_move_command_builder;
    /** A Shared Access Signature (SAS). Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_SAS_TOKEN. */
    sasToken(value: string): az_storage_fs_file_move_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_storage_fs_file_move_command_builder;
}
/**
 * Show properties of file in ADLS Gen2 file system.
 *
 * Syntax:
 * ```
 * az storage fs file show --file-system
 *                         --path
 *                         [--account-key]
 *                         [--account-name]
 *                         [--auth-mode {key, login}]
 *                         [--connection-string]
 *                         [--query-examples]
 *                         [--sas-token]
 *                         [--subscription]
 *                         [--timeout]
 * ```
 *
 * @param {string} fileSystem File system name.
 * @param {string} path The file path in a file system.
 */
declare class az_storage_fs_file_show_command_builder extends CommandBuilder<az_storage_fs_file_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, fileSystem: string, path: string);
    /** File system name. */
    fileSystem(value: string): az_storage_fs_file_show_command_builder;
    /** The file path in a file system. */
    path(value: string): az_storage_fs_file_show_command_builder;
    /** Storage account key. Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_KEY. */
    accountKey(value: string): az_storage_fs_file_show_command_builder;
    /** Storage account name. Related environment variable: AZURE_STORAGE_ACCOUNT. Must be used in conjunction with either storage account key or a SAS token. If neither are present, the command will try to query the storage account key using the authenticated Azure account. If a large number of storage commands are executed the API quota may be hit. */
    accountName(value: string): az_storage_fs_file_show_command_builder;
    /** The mode in which to run the command. "login" mode will directly use your login credentials for the authentication. The legacy "key" mode will attempt to query for an account key if no authentication parameters for the account are provided. Environment variable: AZURE_STORAGE_AUTH_MODE. */
    authMode(value: 'key' | 'login'): az_storage_fs_file_show_command_builder;
    /** Storage account connection string. Environment variable: AZURE_STORAGE_CONNECTION_STRING. */
    connectionString(value: string): az_storage_fs_file_show_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_storage_fs_file_show_command_builder;
    /** A Shared Access Signature (SAS). Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_SAS_TOKEN. */
    sasToken(value: string): az_storage_fs_file_show_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_storage_fs_file_show_command_builder;
    /** Request timeout in seconds. Applies to each call to the service. */
    timeout(value: string): az_storage_fs_file_show_command_builder;
}
/**
 * Upload a file to a file path in ADLS Gen2 file system.
 *
 * Syntax:
 * ```
 * az storage fs file upload --file-system
 *                           --path
 *                           --source
 *                           [--account-key]
 *                           [--account-name]
 *                           [--auth-mode {key, login}]
 *                           [--connection-string]
 *                           [--content-cache-control]
 *                           [--content-disposition]
 *                           [--content-encoding]
 *                           [--content-language]
 *                           [--content-md5]
 *                           [--content-type]
 *                           [--if-match]
 *                           [--if-modified-since]
 *                           [--if-none-match]
 *                           [--if-unmodified-since]
 *                           [--metadata]
 *                           [--overwrite {false, true}]
 *                           [--permissions]
 *                           [--sas-token]
 *                           [--subscription]
 *                           [--timeout]
 *                           [--umask]
 * ```
 *
 * @param {string} fileSystem File system name.
 * @param {string} path The file path in a file system.
 * @param {string} source Path of the local file to upload as the file content.
 */
declare class az_storage_fs_file_upload_command_builder extends CommandBuilder<az_storage_fs_file_upload_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, fileSystem: string, path: string, source: string);
    /** File system name. */
    fileSystem(value: string): az_storage_fs_file_upload_command_builder;
    /** The file path in a file system. */
    path(value: string): az_storage_fs_file_upload_command_builder;
    /** Path of the local file to upload as the file content. */
    source(value: string): az_storage_fs_file_upload_command_builder;
    /** Storage account key. Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_KEY. */
    accountKey(value: string): az_storage_fs_file_upload_command_builder;
    /** Storage account name. Related environment variable: AZURE_STORAGE_ACCOUNT. Must be used in conjunction with either storage account key or a SAS token. If neither are present, the command will try to query the storage account key using the authenticated Azure account. If a large number of storage commands are executed the API quota may be hit. */
    accountName(value: string): az_storage_fs_file_upload_command_builder;
    /** The mode in which to run the command. "login" mode will directly use your login credentials for the authentication. The legacy "key" mode will attempt to query for an account key if no authentication parameters for the account are provided. Environment variable: AZURE_STORAGE_AUTH_MODE. */
    authMode(value: 'key' | 'login'): az_storage_fs_file_upload_command_builder;
    /** Storage account connection string. Environment variable: AZURE_STORAGE_CONNECTION_STRING. */
    connectionString(value: string): az_storage_fs_file_upload_command_builder;
    /** The cache control string. */
    contentCacheControl(value: string): az_storage_fs_file_upload_command_builder;
    /** Conveys additional information about how to process the response payload, and can also be used to attach additional metadata. */
    contentDisposition(value: string): az_storage_fs_file_upload_command_builder;
    /** The content encoding type. */
    contentEncoding(value: string): az_storage_fs_file_upload_command_builder;
    /** The content language. */
    contentLanguage(value: string): az_storage_fs_file_upload_command_builder;
    /** The content's MD5 hash. */
    contentMd5(value: string): az_storage_fs_file_upload_command_builder;
    /** The content MIME type. */
    contentType(value: string): az_storage_fs_file_upload_command_builder;
    /** An ETag value, or the wildcard character (\*). Specify this header to perform the operation only if the resource's ETag matches the value specified. */
    ifMatch(value: string): az_storage_fs_file_upload_command_builder;
    /** A Commence only if modified since supplied UTC datetime (Y-m-d'T'H:M'Z'). */
    ifModifiedSince(value: string): az_storage_fs_file_upload_command_builder;
    /** An ETag value, or the wildcard character (\*). Specify this header to perform the operation only if the resource's ETag does not match the value specified. */
    ifNoneMatch(value: string): az_storage_fs_file_upload_command_builder;
    /** A Commence only if unmodified since supplied UTC datetime (Y-m-d'T'H:M'Z'). */
    ifUnmodifiedSince(value: string): az_storage_fs_file_upload_command_builder;
    /** Metadata in space-separated key=value pairs. This overwrites any existing metadata. */
    metadata(value: string): az_storage_fs_file_upload_command_builder;
    /** Overwrite an existing file when specified. */
    overwrite(value: boolean): az_storage_fs_file_upload_command_builder;
    /** POSIX access permissions for the file owner, the file owning group, and others. Each class may be granted read, write, or execute permission. The sticky bit is also supported. Both symbolic (rwxrw-rw-) and 4-digit octal notation (e.g. 0766) are supported. For more information, please refer to <a href="https://docs.microsoft.com/en-us/azure/storage/blobs/data-lake-storage-access-control#levels-of-permission">https://docs.microsoft.com/en-us/azure/storage/blobs/data-lake-storage-access-control#levels-of-permission</a>. */
    permissions(value: string): az_storage_fs_file_upload_command_builder;
    /** A Shared Access Signature (SAS). Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_SAS_TOKEN. */
    sasToken(value: string): az_storage_fs_file_upload_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_storage_fs_file_upload_command_builder;
    /** Request timeout in seconds. Applies to each call to the service. */
    timeout(value: string): az_storage_fs_file_upload_command_builder;
    /** When creating a file or directory and the parent folder does not have a default ACL, the umask restricts the permissions of the file or directory to be created. The resulting permission is given by p & ^u, where p is the permission and u is the umask. For more information, please refer to <a href="https://docs.microsoft.com/en-us/azure/storage/blobs/data-lake-storage-access-control#umask">https://docs.microsoft.com/en-us/azure/storage/blobs/data-lake-storage-access-control#umask</a>. */
    umask(value: string): az_storage_fs_file_upload_command_builder;
}
/**
 * Return all user-defined metadata for the specified file system.
 *
 * Syntax:
 * ```
 * az storage fs metadata show --name
 *                             [--account-key]
 *                             [--account-name]
 *                             [--auth-mode {key, login}]
 *                             [--connection-string]
 *                             [--query-examples]
 *                             [--sas-token]
 *                             [--subscription]
 *                             [--timeout]
 * ```
 *
 * @param {string} name File system name.
 */
declare class az_storage_fs_metadata_show_command_builder extends CommandBuilder<az_storage_fs_metadata_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string);
    /** File system name. */
    name(value: string): az_storage_fs_metadata_show_command_builder;
    /** Storage account key. Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_KEY. */
    accountKey(value: string): az_storage_fs_metadata_show_command_builder;
    /** Storage account name. Related environment variable: AZURE_STORAGE_ACCOUNT. Must be used in conjunction with either storage account key or a SAS token. If neither are present, the command will try to query the storage account key using the authenticated Azure account. If a large number of storage commands are executed the API quota may be hit. */
    accountName(value: string): az_storage_fs_metadata_show_command_builder;
    /** The mode in which to run the command. "login" mode will directly use your login credentials for the authentication. The legacy "key" mode will attempt to query for an account key if no authentication parameters for the account are provided. Environment variable: AZURE_STORAGE_AUTH_MODE. */
    authMode(value: 'key' | 'login'): az_storage_fs_metadata_show_command_builder;
    /** Storage account connection string. Environment variable: AZURE_STORAGE_CONNECTION_STRING. */
    connectionString(value: string): az_storage_fs_metadata_show_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_storage_fs_metadata_show_command_builder;
    /** A Shared Access Signature (SAS). Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_SAS_TOKEN. */
    sasToken(value: string): az_storage_fs_metadata_show_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_storage_fs_metadata_show_command_builder;
    /** Request timeout in seconds. Applies to each call to the service. */
    timeout(value: string): az_storage_fs_metadata_show_command_builder;
}
/**
 * Sets one or more user-defined name-value pairs for the specified file system.
 *
 * Syntax:
 * ```
 * az storage fs metadata update --metadata
 *                               --name
 *                               [--account-key]
 *                               [--account-name]
 *                               [--auth-mode {key, login}]
 *                               [--connection-string]
 *                               [--sas-token]
 *                               [--subscription]
 *                               [--timeout]
 * ```
 *
 * @param {string} metadata Metadata in space-separated key=value pairs. This overwrites any existing metadata.
 * @param {string} name File system name.
 */
declare class az_storage_fs_metadata_update_command_builder extends CommandBuilder<az_storage_fs_metadata_update_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, metadata: string, name: string);
    /** Metadata in space-separated key=value pairs. This overwrites any existing metadata. */
    metadata(value: string): az_storage_fs_metadata_update_command_builder;
    /** File system name. */
    name(value: string): az_storage_fs_metadata_update_command_builder;
    /** Storage account key. Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_KEY. */
    accountKey(value: string): az_storage_fs_metadata_update_command_builder;
    /** Storage account name. Related environment variable: AZURE_STORAGE_ACCOUNT. Must be used in conjunction with either storage account key or a SAS token. If neither are present, the command will try to query the storage account key using the authenticated Azure account. If a large number of storage commands are executed the API quota may be hit. */
    accountName(value: string): az_storage_fs_metadata_update_command_builder;
    /** The mode in which to run the command. "login" mode will directly use your login credentials for the authentication. The legacy "key" mode will attempt to query for an account key if no authentication parameters for the account are provided. Environment variable: AZURE_STORAGE_AUTH_MODE. */
    authMode(value: 'key' | 'login'): az_storage_fs_metadata_update_command_builder;
    /** Storage account connection string. Environment variable: AZURE_STORAGE_CONNECTION_STRING. */
    connectionString(value: string): az_storage_fs_metadata_update_command_builder;
    /** A Shared Access Signature (SAS). Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_SAS_TOKEN. */
    sasToken(value: string): az_storage_fs_metadata_update_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_storage_fs_metadata_update_command_builder;
    /** Request timeout in seconds. Applies to each call to the service. */
    timeout(value: string): az_storage_fs_metadata_update_command_builder;
}
/**
 * Create file system for Azure Data Lake Storage Gen2 account.
 *
 * Syntax:
 * ```
 * az storage fs create --name
 *                      [--account-key]
 *                      [--account-name]
 *                      [--auth-mode {key, login}]
 *                      [--connection-string]
 *                      [--metadata]
 *                      [--public-access {file, filesystem, off}]
 *                      [--sas-token]
 *                      [--subscription]
 *                      [--timeout]
 * ```
 *
 * @param {string} name File system name.
 */
declare class az_storage_fs_create_command_builder extends CommandBuilder<az_storage_fs_create_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string);
    /** File system name. */
    name(value: string): az_storage_fs_create_command_builder;
    /** Storage account key. Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_KEY. */
    accountKey(value: string): az_storage_fs_create_command_builder;
    /** Storage account name. Related environment variable: AZURE_STORAGE_ACCOUNT. Must be used in conjunction with either storage account key or a SAS token. If neither are present, the command will try to query the storage account key using the authenticated Azure account. If a large number of storage commands are executed the API quota may be hit. */
    accountName(value: string): az_storage_fs_create_command_builder;
    /** The mode in which to run the command. "login" mode will directly use your login credentials for the authentication. The legacy "key" mode will attempt to query for an account key if no authentication parameters for the account are provided. Environment variable: AZURE_STORAGE_AUTH_MODE. */
    authMode(value: 'key' | 'login'): az_storage_fs_create_command_builder;
    /** Storage account connection string. Environment variable: AZURE_STORAGE_CONNECTION_STRING. */
    connectionString(value: string): az_storage_fs_create_command_builder;
    /** Metadata in space-separated key=value pairs. This overwrites any existing metadata. */
    metadata(value: string): az_storage_fs_create_command_builder;
    /** Specify whether data in the file system may be accessed publicly and the level of access. */
    publicAccess(value: 'file' | 'filesystem' | 'off'): az_storage_fs_create_command_builder;
    /** A Shared Access Signature (SAS). Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_SAS_TOKEN. */
    sasToken(value: string): az_storage_fs_create_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_storage_fs_create_command_builder;
    /** Request timeout in seconds. Applies to each call to the service. */
    timeout(value: string): az_storage_fs_create_command_builder;
}
/**
 * Delete a file system in ADLS Gen2 account.
 *
 * Syntax:
 * ```
 * az storage fs delete --name
 *                      [--account-key]
 *                      [--account-name]
 *                      [--auth-mode {key, login}]
 *                      [--connection-string]
 *                      [--sas-token]
 *                      [--subscription]
 *                      [--timeout]
 *                      [--yes]
 * ```
 *
 * @param {string} name File system name.
 */
declare class az_storage_fs_delete_command_builder extends CommandBuilder<az_storage_fs_delete_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string);
    /** File system name. */
    name(value: string): az_storage_fs_delete_command_builder;
    /** Storage account key. Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_KEY. */
    accountKey(value: string): az_storage_fs_delete_command_builder;
    /** Storage account name. Related environment variable: AZURE_STORAGE_ACCOUNT. Must be used in conjunction with either storage account key or a SAS token. If neither are present, the command will try to query the storage account key using the authenticated Azure account. If a large number of storage commands are executed the API quota may be hit. */
    accountName(value: string): az_storage_fs_delete_command_builder;
    /** The mode in which to run the command. "login" mode will directly use your login credentials for the authentication. The legacy "key" mode will attempt to query for an account key if no authentication parameters for the account are provided. Environment variable: AZURE_STORAGE_AUTH_MODE. */
    authMode(value: 'key' | 'login'): az_storage_fs_delete_command_builder;
    /** Storage account connection string. Environment variable: AZURE_STORAGE_CONNECTION_STRING. */
    connectionString(value: string): az_storage_fs_delete_command_builder;
    /** A Shared Access Signature (SAS). Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_SAS_TOKEN. */
    sasToken(value: string): az_storage_fs_delete_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_storage_fs_delete_command_builder;
    /** Request timeout in seconds. Applies to each call to the service. */
    timeout(value: string): az_storage_fs_delete_command_builder;
    /** Do not prompt for confirmation. */
    yes(value: string): az_storage_fs_delete_command_builder;
}
/**
 * Check for the existence of a file system in ADLS Gen2 account.
 *
 * Syntax:
 * ```
 * az storage fs exists --name
 *                      [--account-key]
 *                      [--account-name]
 *                      [--auth-mode {key, login}]
 *                      [--connection-string]
 *                      [--sas-token]
 *                      [--subscription]
 *                      [--timeout]
 * ```
 *
 * @param {string} name File system name.
 */
declare class az_storage_fs_exists_command_builder extends CommandBuilder<az_storage_fs_exists_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string);
    /** File system name. */
    name(value: string): az_storage_fs_exists_command_builder;
    /** Storage account key. Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_KEY. */
    accountKey(value: string): az_storage_fs_exists_command_builder;
    /** Storage account name. Related environment variable: AZURE_STORAGE_ACCOUNT. Must be used in conjunction with either storage account key or a SAS token. If neither are present, the command will try to query the storage account key using the authenticated Azure account. If a large number of storage commands are executed the API quota may be hit. */
    accountName(value: string): az_storage_fs_exists_command_builder;
    /** The mode in which to run the command. "login" mode will directly use your login credentials for the authentication. The legacy "key" mode will attempt to query for an account key if no authentication parameters for the account are provided. Environment variable: AZURE_STORAGE_AUTH_MODE. */
    authMode(value: 'key' | 'login'): az_storage_fs_exists_command_builder;
    /** Storage account connection string. Environment variable: AZURE_STORAGE_CONNECTION_STRING. */
    connectionString(value: string): az_storage_fs_exists_command_builder;
    /** A Shared Access Signature (SAS). Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_SAS_TOKEN. */
    sasToken(value: string): az_storage_fs_exists_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_storage_fs_exists_command_builder;
    /** Request timeout in seconds. Applies to each call to the service. */
    timeout(value: string): az_storage_fs_exists_command_builder;
}
/**
 * List file systems in ADLS Gen2 account.
 *
 * Syntax:
 * ```
 * az storage fs list [--account-key]
 *                    [--account-name]
 *                    [--auth-mode {key, login}]
 *                    [--connection-string]
 *                    [--include-metadata {false, true}]
 *                    [--prefix]
 *                    [--query-examples]
 *                    [--sas-token]
 *                    [--subscription]
 * ```
 */
declare class az_storage_fs_list_command_builder extends CommandBuilder<az_storage_fs_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** Storage account key. Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_KEY. */
    accountKey(value: string): az_storage_fs_list_command_builder;
    /** Storage account name. Related environment variable: AZURE_STORAGE_ACCOUNT. Must be used in conjunction with either storage account key or a SAS token. If neither are present, the command will try to query the storage account key using the authenticated Azure account. If a large number of storage commands are executed the API quota may be hit. */
    accountName(value: string): az_storage_fs_list_command_builder;
    /** The mode in which to run the command. "login" mode will directly use your login credentials for the authentication. The legacy "key" mode will attempt to query for an account key if no authentication parameters for the account are provided. Environment variable: AZURE_STORAGE_AUTH_MODE. */
    authMode(value: 'key' | 'login'): az_storage_fs_list_command_builder;
    /** Storage account connection string. Environment variable: AZURE_STORAGE_CONNECTION_STRING. */
    connectionString(value: string): az_storage_fs_list_command_builder;
    /** Specify that file system metadata be returned in the response. The default value is "False". */
    includeMetadata(value: boolean): az_storage_fs_list_command_builder;
    /** Filter the results to return only file systems whose names begin with the specified prefix. */
    prefix(value: string): az_storage_fs_list_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_storage_fs_list_command_builder;
    /** A Shared Access Signature (SAS). Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_SAS_TOKEN. */
    sasToken(value: string): az_storage_fs_list_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_storage_fs_list_command_builder;
}
/**
 * Show properties of file system in ADLS Gen2 account.
 *
 * Syntax:
 * ```
 * az storage fs show --name
 *                    [--account-key]
 *                    [--account-name]
 *                    [--auth-mode {key, login}]
 *                    [--connection-string]
 *                    [--query-examples]
 *                    [--sas-token]
 *                    [--subscription]
 *                    [--timeout]
 * ```
 *
 * @param {string} name File system name.
 */
declare class az_storage_fs_show_command_builder extends CommandBuilder<az_storage_fs_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string);
    /** File system name. */
    name(value: string): az_storage_fs_show_command_builder;
    /** Storage account key. Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_KEY. */
    accountKey(value: string): az_storage_fs_show_command_builder;
    /** Storage account name. Related environment variable: AZURE_STORAGE_ACCOUNT. Must be used in conjunction with either storage account key or a SAS token. If neither are present, the command will try to query the storage account key using the authenticated Azure account. If a large number of storage commands are executed the API quota may be hit. */
    accountName(value: string): az_storage_fs_show_command_builder;
    /** The mode in which to run the command. "login" mode will directly use your login credentials for the authentication. The legacy "key" mode will attempt to query for an account key if no authentication parameters for the account are provided. Environment variable: AZURE_STORAGE_AUTH_MODE. */
    authMode(value: 'key' | 'login'): az_storage_fs_show_command_builder;
    /** Storage account connection string. Environment variable: AZURE_STORAGE_CONNECTION_STRING. */
    connectionString(value: string): az_storage_fs_show_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_storage_fs_show_command_builder;
    /** A Shared Access Signature (SAS). Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_SAS_TOKEN. */
    sasToken(value: string): az_storage_fs_show_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_storage_fs_show_command_builder;
    /** Request timeout in seconds. Applies to each call to the service. */
    timeout(value: string): az_storage_fs_show_command_builder;
}
/**
 * Turn off logging for a storage account.
 *
 * Syntax:
 * ```
 * az storage logging off [--account-key]
 *                        [--account-name]
 *                        [--connection-string]
 *                        [--sas-token]
 *                        [--services]
 *                        [--subscription]
 *                        [--timeout]
 * ```
 */
declare class az_storage_logging_off_command_builder extends CommandBuilder<az_storage_logging_off_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** Storage account key. Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_KEY. */
    accountKey(value: string): az_storage_logging_off_command_builder;
    /** Storage account name. Related environment variable: AZURE_STORAGE_ACCOUNT. Must be used in conjunction with either storage account key or a SAS token. If neither are present, the command will try to query the storage account key using the authenticated Azure account. If a large number of storage commands are executed the API quota may be hit. */
    accountName(value: string): az_storage_logging_off_command_builder;
    /** Storage account connection string. Environment variable: AZURE_STORAGE_CONNECTION_STRING. */
    connectionString(value: string): az_storage_logging_off_command_builder;
    /** A Shared Access Signature (SAS). Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_SAS_TOKEN. */
    sasToken(value: string): az_storage_logging_off_command_builder;
    /** The storage services from which to retrieve logging info: (b)lob (q)ueue (t)able. Can be combined. */
    services(value: string): az_storage_logging_off_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_storage_logging_off_command_builder;
    /** Request timeout in seconds. Applies to each call to the service. */
    timeout(value: string): az_storage_logging_off_command_builder;
}
/**
 * Show logging settings for a storage account.
 *
 * Syntax:
 * ```
 * az storage logging show [--account-key]
 *                         [--account-name]
 *                         [--connection-string]
 *                         [--query-examples]
 *                         [--sas-token]
 *                         [--services]
 *                         [--subscription]
 *                         [--timeout]
 * ```
 */
declare class az_storage_logging_show_command_builder extends CommandBuilder<az_storage_logging_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** Storage account key. Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_KEY. */
    accountKey(value: string): az_storage_logging_show_command_builder;
    /** Storage account name. Related environment variable: AZURE_STORAGE_ACCOUNT. Must be used in conjunction with either storage account key or a SAS token. If neither are present, the command will try to query the storage account key using the authenticated Azure account. If a large number of storage commands are executed the API quota may be hit. */
    accountName(value: string): az_storage_logging_show_command_builder;
    /** Storage account connection string. Environment variable: AZURE_STORAGE_CONNECTION_STRING. */
    connectionString(value: string): az_storage_logging_show_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_storage_logging_show_command_builder;
    /** A Shared Access Signature (SAS). Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_SAS_TOKEN. */
    sasToken(value: string): az_storage_logging_show_command_builder;
    /** The storage services from which to retrieve logging info: (b)lob (q)ueue (t)able. Can be combined. */
    services(value: string): az_storage_logging_show_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_storage_logging_show_command_builder;
    /** Request timeout in seconds. Applies to each call to the service. */
    timeout(value: string): az_storage_logging_show_command_builder;
}
/**
 * Update logging settings for a storage account.
 *
 * Syntax:
 * ```
 * az storage logging update --log
 *                           --retention
 *                           --services
 *                           [--account-key]
 *                           [--account-name]
 *                           [--connection-string]
 *                           [--sas-token]
 *                           [--subscription]
 *                           [--timeout]
 *                           [--version]
 * ```
 *
 * @param {string} log The operations for which to enable logging: (r)ead (w)rite (d)elete. Can be combined.
 * @param {string} retention Number of days for which to retain logs. 0 to disable.
 * @param {string} services The storage service(s) for which to update logging info: (b)lob (q)ueue (t)able. Can be combined.
 */
declare class az_storage_logging_update_command_builder extends CommandBuilder<az_storage_logging_update_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, log: string, retention: string, services: string);
    /** The operations for which to enable logging: (r)ead (w)rite (d)elete. Can be combined. */
    log(value: string): az_storage_logging_update_command_builder;
    /** Number of days for which to retain logs. 0 to disable. */
    retention(value: string): az_storage_logging_update_command_builder;
    /** The storage service(s) for which to update logging info: (b)lob (q)ueue (t)able. Can be combined. */
    services(value: string): az_storage_logging_update_command_builder;
    /** Storage account key. Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_KEY. */
    accountKey(value: string): az_storage_logging_update_command_builder;
    /** Storage account name. Related environment variable: AZURE_STORAGE_ACCOUNT. Must be used in conjunction with either storage account key or a SAS token. If neither are present, the command will try to query the storage account key using the authenticated Azure account. If a large number of storage commands are executed the API quota may be hit. */
    accountName(value: string): az_storage_logging_update_command_builder;
    /** Storage account connection string. Environment variable: AZURE_STORAGE_CONNECTION_STRING. */
    connectionString(value: string): az_storage_logging_update_command_builder;
    /** A Shared Access Signature (SAS). Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_SAS_TOKEN. */
    sasToken(value: string): az_storage_logging_update_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_storage_logging_update_command_builder;
    /** Request timeout in seconds. Applies to each call to the service. */
    timeout(value: string): az_storage_logging_update_command_builder;
    /** Version of the logging schema. */
    version(value: string): az_storage_logging_update_command_builder;
}
/**
 * Deletes all messages from the specified queue.
 *
 * Syntax:
 * ```
 * az storage message clear --queue-name
 *                          [--account-key]
 *                          [--account-name]
 *                          [--auth-mode {key, login}]
 *                          [--connection-string]
 *                          [--sas-token]
 *                          [--subscription]
 *                          [--timeout]
 * ```
 *
 * @param {string} queueName The queue name.
 */
declare class az_storage_message_clear_command_builder extends CommandBuilder<az_storage_message_clear_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, queueName: string);
    /** The queue name. */
    queueName(value: string): az_storage_message_clear_command_builder;
    /** Storage account key. Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_KEY. */
    accountKey(value: string): az_storage_message_clear_command_builder;
    /** Storage account name. Related environment variable: AZURE_STORAGE_ACCOUNT. Must be used in conjunction with either storage account key or a SAS token. If neither are present, the command will try to query the storage account key using the authenticated Azure account. If a large number of storage commands are executed the API quota may be hit. */
    accountName(value: string): az_storage_message_clear_command_builder;
    /** The mode in which to run the command. "login" mode will directly use your login credentials for the authentication. The legacy "key" mode will attempt to query for an account key if no authentication parameters for the account are provided. Environment variable: AZURE_STORAGE_AUTH_MODE. */
    authMode(value: 'key' | 'login'): az_storage_message_clear_command_builder;
    /** Storage account connection string. Environment variable: AZURE_STORAGE_CONNECTION_STRING. */
    connectionString(value: string): az_storage_message_clear_command_builder;
    /** A Shared Access Signature (SAS). Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_SAS_TOKEN. */
    sasToken(value: string): az_storage_message_clear_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_storage_message_clear_command_builder;
    /** Request timeout in seconds. Applies to each call to the service. */
    timeout(value: string): az_storage_message_clear_command_builder;
}
/**
 * Deletes the specified message.
 *
 * Syntax:
 * ```
 * az storage message delete --id
 *                           --pop-receipt
 *                           --queue-name
 *                           [--account-key]
 *                           [--account-name]
 *                           [--auth-mode {key, login}]
 *                           [--connection-string]
 *                           [--sas-token]
 *                           [--subscription]
 *                           [--timeout]
 * ```
 *
 * @param {string} id The message id identifying the message to delete.
 * @param {string} popReceipt A valid pop receipt value returned from an earlier call to the get_messages() or update_message().
 * @param {string} queueName The queue name.
 */
declare class az_storage_message_delete_command_builder extends CommandBuilder<az_storage_message_delete_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, id: string, popReceipt: string, queueName: string);
    /** The message id identifying the message to delete. */
    id(value: string): az_storage_message_delete_command_builder;
    /** A valid pop receipt value returned from an earlier call to the get_messages() or update_message(). */
    popReceipt(value: string): az_storage_message_delete_command_builder;
    /** The queue name. */
    queueName(value: string): az_storage_message_delete_command_builder;
    /** Storage account key. Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_KEY. */
    accountKey(value: string): az_storage_message_delete_command_builder;
    /** Storage account name. Related environment variable: AZURE_STORAGE_ACCOUNT. Must be used in conjunction with either storage account key or a SAS token. If neither are present, the command will try to query the storage account key using the authenticated Azure account. If a large number of storage commands are executed the API quota may be hit. */
    accountName(value: string): az_storage_message_delete_command_builder;
    /** The mode in which to run the command. "login" mode will directly use your login credentials for the authentication. The legacy "key" mode will attempt to query for an account key if no authentication parameters for the account are provided. Environment variable: AZURE_STORAGE_AUTH_MODE. */
    authMode(value: 'key' | 'login'): az_storage_message_delete_command_builder;
    /** Storage account connection string. Environment variable: AZURE_STORAGE_CONNECTION_STRING. */
    connectionString(value: string): az_storage_message_delete_command_builder;
    /** A Shared Access Signature (SAS). Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_SAS_TOKEN. */
    sasToken(value: string): az_storage_message_delete_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_storage_message_delete_command_builder;
    /** Request timeout in seconds. Applies to each call to the service. */
    timeout(value: string): az_storage_message_delete_command_builder;
}
/**
 * Retrieves one or more messages from the front of the queue.
 *
 * Syntax:
 * ```
 * az storage message get --queue-name
 *                        [--account-key]
 *                        [--account-name]
 *                        [--auth-mode {key, login}]
 *                        [--connection-string]
 *                        [--num-messages]
 *                        [--sas-token]
 *                        [--subscription]
 *                        [--timeout]
 *                        [--visibility-timeout]
 * ```
 *
 * @param {string} queueName The queue name.
 */
declare class az_storage_message_get_command_builder extends CommandBuilder<az_storage_message_get_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, queueName: string);
    /** The queue name. */
    queueName(value: string): az_storage_message_get_command_builder;
    /** Storage account key. Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_KEY. */
    accountKey(value: string): az_storage_message_get_command_builder;
    /** Storage account name. Related environment variable: AZURE_STORAGE_ACCOUNT. Must be used in conjunction with either storage account key or a SAS token. If neither are present, the command will try to query the storage account key using the authenticated Azure account. If a large number of storage commands are executed the API quota may be hit. */
    accountName(value: string): az_storage_message_get_command_builder;
    /** The mode in which to run the command. "login" mode will directly use your login credentials for the authentication. The legacy "key" mode will attempt to query for an account key if no authentication parameters for the account are provided. Environment variable: AZURE_STORAGE_AUTH_MODE. */
    authMode(value: 'key' | 'login'): az_storage_message_get_command_builder;
    /** Storage account connection string. Environment variable: AZURE_STORAGE_CONNECTION_STRING. */
    connectionString(value: string): az_storage_message_get_command_builder;
    /** A nonzero integer value that specifies the number of messages to retrieve from the queue, up to a maximum of 32. If fewer are visible, the visible messages are returned. By default, a single message is retrieved from the queue with this operation. */
    numMessages(value: string): az_storage_message_get_command_builder;
    /** A Shared Access Signature (SAS). Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_SAS_TOKEN. */
    sasToken(value: string): az_storage_message_get_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_storage_message_get_command_builder;
    /** Request timeout in seconds. Applies to each call to the service. */
    timeout(value: string): az_storage_message_get_command_builder;
    /** Specifies the new visibility timeout value, in seconds, relative to server time. The new value must be larger than or equal to 1 second, and cannot be larger than 7 days. The visibility timeout of a message can be set to a value later than the expiry time. */
    visibilityTimeout(value: string): az_storage_message_get_command_builder;
}
/**
 * Retrieves one or more messages from the front of the queue, but does not alter the visibility of the message.
 *
 * Syntax:
 * ```
 * az storage message peek --queue-name
 *                         [--account-key]
 *                         [--account-name]
 *                         [--auth-mode {key, login}]
 *                         [--connection-string]
 *                         [--num-messages]
 *                         [--sas-token]
 *                         [--subscription]
 *                         [--timeout]
 * ```
 *
 * @param {string} queueName The queue name.
 */
declare class az_storage_message_peek_command_builder extends CommandBuilder<az_storage_message_peek_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, queueName: string);
    /** The queue name. */
    queueName(value: string): az_storage_message_peek_command_builder;
    /** Storage account key. Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_KEY. */
    accountKey(value: string): az_storage_message_peek_command_builder;
    /** Storage account name. Related environment variable: AZURE_STORAGE_ACCOUNT. Must be used in conjunction with either storage account key or a SAS token. If neither are present, the command will try to query the storage account key using the authenticated Azure account. If a large number of storage commands are executed the API quota may be hit. */
    accountName(value: string): az_storage_message_peek_command_builder;
    /** The mode in which to run the command. "login" mode will directly use your login credentials for the authentication. The legacy "key" mode will attempt to query for an account key if no authentication parameters for the account are provided. Environment variable: AZURE_STORAGE_AUTH_MODE. */
    authMode(value: 'key' | 'login'): az_storage_message_peek_command_builder;
    /** Storage account connection string. Environment variable: AZURE_STORAGE_CONNECTION_STRING. */
    connectionString(value: string): az_storage_message_peek_command_builder;
    /** A nonzero integer value that specifies the number of messages to peek from the queue, up to a maximum of 32. By default, a single message is peeked from the queue with this operation. */
    numMessages(value: string): az_storage_message_peek_command_builder;
    /** A Shared Access Signature (SAS). Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_SAS_TOKEN. */
    sasToken(value: string): az_storage_message_peek_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_storage_message_peek_command_builder;
    /** Request timeout in seconds. Applies to each call to the service. */
    timeout(value: string): az_storage_message_peek_command_builder;
}
/**
 * Adds a new message to the back of the message queue.
 *
 * Syntax:
 * ```
 * az storage message put --content
 *                        --queue-name
 *                        [--account-key]
 *                        [--account-name]
 *                        [--auth-mode {key, login}]
 *                        [--connection-string]
 *                        [--sas-token]
 *                        [--subscription]
 *                        [--time-to-live]
 *                        [--timeout]
 *                        [--visibility-timeout]
 * ```
 *
 * @param {string} content Message content, up to 64KB in size.
 * @param {string} queueName The queue name.
 */
declare class az_storage_message_put_command_builder extends CommandBuilder<az_storage_message_put_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, content: string, queueName: string);
    /** Message content, up to 64KB in size. */
    content(value: string): az_storage_message_put_command_builder;
    /** The queue name. */
    queueName(value: string): az_storage_message_put_command_builder;
    /** Storage account key. Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_KEY. */
    accountKey(value: string): az_storage_message_put_command_builder;
    /** Storage account name. Related environment variable: AZURE_STORAGE_ACCOUNT. Must be used in conjunction with either storage account key or a SAS token. If neither are present, the command will try to query the storage account key using the authenticated Azure account. If a large number of storage commands are executed the API quota may be hit. */
    accountName(value: string): az_storage_message_put_command_builder;
    /** The mode in which to run the command. "login" mode will directly use your login credentials for the authentication. The legacy "key" mode will attempt to query for an account key if no authentication parameters for the account are provided. Environment variable: AZURE_STORAGE_AUTH_MODE. */
    authMode(value: 'key' | 'login'): az_storage_message_put_command_builder;
    /** Storage account connection string. Environment variable: AZURE_STORAGE_CONNECTION_STRING. */
    connectionString(value: string): az_storage_message_put_command_builder;
    /** A Shared Access Signature (SAS). Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_SAS_TOKEN. */
    sasToken(value: string): az_storage_message_put_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_storage_message_put_command_builder;
    /** Specifies the time-to-live interval for the message, in seconds. The time-to-live may be any positive number or -1 for infinity. If this parameter is omitted, the default time-to-live is 7 days. */
    timeToLive(value: string): az_storage_message_put_command_builder;
    /** Request timeout in seconds. Applies to each call to the service. */
    timeout(value: string): az_storage_message_put_command_builder;
    /** If not specified, the default value is 0. Specifies the new visibility timeout value, in seconds, relative to server time. The value must be larger than or equal to 0, and cannot be larger than 7 days. The visibility timeout of a message cannot be set to a value later than the expiry time. visibility_timeout should be set to a value smaller than the time-to-live value. */
    visibilityTimeout(value: string): az_storage_message_put_command_builder;
}
/**
 * Updates the visibility timeout of a message.
 *
 * Syntax:
 * ```
 * az storage message update --id
 *                           --pop-receipt
 *                           --queue-name
 *                           --visibility-timeout
 *                           [--account-key]
 *                           [--account-name]
 *                           [--auth-mode {key, login}]
 *                           [--connection-string]
 *                           [--content]
 *                           [--sas-token]
 *                           [--subscription]
 *                           [--timeout]
 * ```
 *
 * @param {string} id The message id identifying the message to update.
 * @param {string} popReceipt A valid pop receipt value returned from an earlier call to the get_messages() or update_message() operation.
 * @param {string} queueName The queue name.
 * @param {string} visibilityTimeout Specifies the new visibility timeout value, in seconds, relative to server time. The new value must be larger than or equal to 0, and cannot be larger than 7 days. The visibility timeout of a message cannot be set to a value later than the expiry time. A message can be updated until it has been deleted or has expired.
 */
declare class az_storage_message_update_command_builder extends CommandBuilder<az_storage_message_update_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, id: string, popReceipt: string, queueName: string, visibilityTimeout: string);
    /** The message id identifying the message to update. */
    id(value: string): az_storage_message_update_command_builder;
    /** A valid pop receipt value returned from an earlier call to the get_messages() or update_message() operation. */
    popReceipt(value: string): az_storage_message_update_command_builder;
    /** The queue name. */
    queueName(value: string): az_storage_message_update_command_builder;
    /** Specifies the new visibility timeout value, in seconds, relative to server time. The new value must be larger than or equal to 0, and cannot be larger than 7 days. The visibility timeout of a message cannot be set to a value later than the expiry time. A message can be updated until it has been deleted or has expired. */
    visibilityTimeout(value: string): az_storage_message_update_command_builder;
    /** Storage account key. Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_KEY. */
    accountKey(value: string): az_storage_message_update_command_builder;
    /** Storage account name. Related environment variable: AZURE_STORAGE_ACCOUNT. Must be used in conjunction with either storage account key or a SAS token. If neither are present, the command will try to query the storage account key using the authenticated Azure account. If a large number of storage commands are executed the API quota may be hit. */
    accountName(value: string): az_storage_message_update_command_builder;
    /** The mode in which to run the command. "login" mode will directly use your login credentials for the authentication. The legacy "key" mode will attempt to query for an account key if no authentication parameters for the account are provided. Environment variable: AZURE_STORAGE_AUTH_MODE. */
    authMode(value: 'key' | 'login'): az_storage_message_update_command_builder;
    /** Storage account connection string. Environment variable: AZURE_STORAGE_CONNECTION_STRING. */
    connectionString(value: string): az_storage_message_update_command_builder;
    /** Message content, up to 64KB in size. */
    content(value: string): az_storage_message_update_command_builder;
    /** A Shared Access Signature (SAS). Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_SAS_TOKEN. */
    sasToken(value: string): az_storage_message_update_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_storage_message_update_command_builder;
    /** Request timeout in seconds. Applies to each call to the service. */
    timeout(value: string): az_storage_message_update_command_builder;
}
/**
 * Show metrics settings for a storage account.
 *
 * Syntax:
 * ```
 * az storage metrics show [--account-key]
 *                         [--account-name]
 *                         [--connection-string]
 *                         [--interval {both, hour, minute}]
 *                         [--query-examples]
 *                         [--sas-token]
 *                         [--services]
 *                         [--subscription]
 *                         [--timeout]
 * ```
 */
declare class az_storage_metrics_show_command_builder extends CommandBuilder<az_storage_metrics_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** Storage account key. Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_KEY. */
    accountKey(value: string): az_storage_metrics_show_command_builder;
    /** Storage account name. Related environment variable: AZURE_STORAGE_ACCOUNT. Must be used in conjunction with either storage account key or a SAS token. If neither are present, the command will try to query the storage account key using the authenticated Azure account. If a large number of storage commands are executed the API quota may be hit. */
    accountName(value: string): az_storage_metrics_show_command_builder;
    /** Storage account connection string. Environment variable: AZURE_STORAGE_CONNECTION_STRING. */
    connectionString(value: string): az_storage_metrics_show_command_builder;
    /** Filter the set of metrics to retrieve by time interval. */
    interval(value: 'both' | 'hour' | 'minute'): az_storage_metrics_show_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_storage_metrics_show_command_builder;
    /** A Shared Access Signature (SAS). Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_SAS_TOKEN. */
    sasToken(value: string): az_storage_metrics_show_command_builder;
    /** The storage services from which to retrieve metrics info: (b)lob (q)ueue (t)able. Can be combined. */
    services(value: string): az_storage_metrics_show_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_storage_metrics_show_command_builder;
    /** Request timeout in seconds. Applies to each call to the service. */
    timeout(value: string): az_storage_metrics_show_command_builder;
}
/**
 * Update metrics settings for a storage account.
 *
 * Syntax:
 * ```
 * az storage metrics update --retention
 *                           --services
 *                           [--account-key]
 *                           [--account-name]
 *                           [--api {false, true}]
 *                           [--connection-string]
 *                           [--hour {false, true}]
 *                           [--minute {false, true}]
 *                           [--sas-token]
 *                           [--subscription]
 *                           [--timeout]
 * ```
 *
 * @param {string} retention Number of days for which to retain metrics. 0 to disable. Applies to both hour and minute metrics if both are specified.
 * @param {string} services The storage services from which to retrieve metrics info: (b)lob (q)ueue (t)able. Can be combined.
 */
declare class az_storage_metrics_update_command_builder extends CommandBuilder<az_storage_metrics_update_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, retention: string, services: string);
    /** Number of days for which to retain metrics. 0 to disable. Applies to both hour and minute metrics if both are specified. */
    retention(value: string): az_storage_metrics_update_command_builder;
    /** The storage services from which to retrieve metrics info: (b)lob (q)ueue (t)able. Can be combined. */
    services(value: string): az_storage_metrics_update_command_builder;
    /** Storage account key. Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_KEY. */
    accountKey(value: string): az_storage_metrics_update_command_builder;
    /** Storage account name. Related environment variable: AZURE_STORAGE_ACCOUNT. Must be used in conjunction with either storage account key or a SAS token. If neither are present, the command will try to query the storage account key using the authenticated Azure account. If a large number of storage commands are executed the API quota may be hit. */
    accountName(value: string): az_storage_metrics_update_command_builder;
    /** Specify whether to include API in metrics. Applies to both hour and minute metrics if both are specified. Must be specified if hour or minute metrics are enabled and being updated. */
    api(value: boolean): az_storage_metrics_update_command_builder;
    /** Storage account connection string. Environment variable: AZURE_STORAGE_CONNECTION_STRING. */
    connectionString(value: string): az_storage_metrics_update_command_builder;
    /** Update the hourly metrics. */
    hour(value: boolean): az_storage_metrics_update_command_builder;
    /** Update the by-minute metrics. */
    minute(value: boolean): az_storage_metrics_update_command_builder;
    /** A Shared Access Signature (SAS). Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_SAS_TOKEN. */
    sasToken(value: string): az_storage_metrics_update_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_storage_metrics_update_command_builder;
    /** Request timeout in seconds. Applies to each call to the service. */
    timeout(value: string): az_storage_metrics_update_command_builder;
}
/**
 * Retrieves user-defined metadata and queue properties on the specified queue.
 *
 * Syntax:
 * ```
 * az storage queue metadata show --name
 *                                [--account-key]
 *                                [--account-name]
 *                                [--auth-mode {key, login}]
 *                                [--connection-string]
 *                                [--query-examples]
 *                                [--sas-token]
 *                                [--subscription]
 *                                [--timeout]
 * ```
 *
 * @param {string} name The queue name.
 */
declare class az_storage_queue_metadata_show_command_builder extends CommandBuilder<az_storage_queue_metadata_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string);
    /** The queue name. */
    name(value: string): az_storage_queue_metadata_show_command_builder;
    /** Storage account key. Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_KEY. */
    accountKey(value: string): az_storage_queue_metadata_show_command_builder;
    /** Storage account name. Related environment variable: AZURE_STORAGE_ACCOUNT. Must be used in conjunction with either storage account key or a SAS token. If neither are present, the command will try to query the storage account key using the authenticated Azure account. If a large number of storage commands are executed the API quota may be hit. */
    accountName(value: string): az_storage_queue_metadata_show_command_builder;
    /** The mode in which to run the command. "login" mode will directly use your login credentials for the authentication. The legacy "key" mode will attempt to query for an account key if no authentication parameters for the account are provided. Environment variable: AZURE_STORAGE_AUTH_MODE. */
    authMode(value: 'key' | 'login'): az_storage_queue_metadata_show_command_builder;
    /** Storage account connection string. Environment variable: AZURE_STORAGE_CONNECTION_STRING. */
    connectionString(value: string): az_storage_queue_metadata_show_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_storage_queue_metadata_show_command_builder;
    /** A Shared Access Signature (SAS). Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_SAS_TOKEN. */
    sasToken(value: string): az_storage_queue_metadata_show_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_storage_queue_metadata_show_command_builder;
    /** Request timeout in seconds. Applies to each call to the service. */
    timeout(value: string): az_storage_queue_metadata_show_command_builder;
}
/**
 * Sets user-defined metadata on the specified queue.
 *
 * Syntax:
 * ```
 * az storage queue metadata update --name
 *                                  [--account-key]
 *                                  [--account-name]
 *                                  [--auth-mode {key, login}]
 *                                  [--connection-string]
 *                                  [--metadata]
 *                                  [--sas-token]
 *                                  [--subscription]
 *                                  [--timeout]
 * ```
 *
 * @param {string} name The queue name.
 */
declare class az_storage_queue_metadata_update_command_builder extends CommandBuilder<az_storage_queue_metadata_update_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string);
    /** The queue name. */
    name(value: string): az_storage_queue_metadata_update_command_builder;
    /** Storage account key. Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_KEY. */
    accountKey(value: string): az_storage_queue_metadata_update_command_builder;
    /** Storage account name. Related environment variable: AZURE_STORAGE_ACCOUNT. Must be used in conjunction with either storage account key or a SAS token. If neither are present, the command will try to query the storage account key using the authenticated Azure account. If a large number of storage commands are executed the API quota may be hit. */
    accountName(value: string): az_storage_queue_metadata_update_command_builder;
    /** The mode in which to run the command. "login" mode will directly use your login credentials for the authentication. The legacy "key" mode will attempt to query for an account key if no authentication parameters for the account are provided. Environment variable: AZURE_STORAGE_AUTH_MODE. */
    authMode(value: 'key' | 'login'): az_storage_queue_metadata_update_command_builder;
    /** Storage account connection string. Environment variable: AZURE_STORAGE_CONNECTION_STRING. */
    connectionString(value: string): az_storage_queue_metadata_update_command_builder;
    /** Metadata in space-separated key=value pairs. This overwrites any existing metadata. */
    metadata(value: string): az_storage_queue_metadata_update_command_builder;
    /** A Shared Access Signature (SAS). Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_SAS_TOKEN. */
    sasToken(value: string): az_storage_queue_metadata_update_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_storage_queue_metadata_update_command_builder;
    /** Request timeout in seconds. Applies to each call to the service. */
    timeout(value: string): az_storage_queue_metadata_update_command_builder;
}
/**
 * Create a stored access policy on the containing object.
 *
 * Syntax:
 * ```
 * az storage queue policy create --name
 *                                --queue-name
 *                                [--account-key]
 *                                [--account-name]
 *                                [--auth-mode {key, login}]
 *                                [--connection-string]
 *                                [--expiry]
 *                                [--permissions]
 *                                [--sas-token]
 *                                [--start]
 *                                [--subscription]
 * ```
 *
 * @param {string} name The stored access policy name.
 * @param {string} queueName The queue name.
 */
declare class az_storage_queue_policy_create_command_builder extends CommandBuilder<az_storage_queue_policy_create_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string, queueName: string);
    /** The stored access policy name. */
    name(value: string): az_storage_queue_policy_create_command_builder;
    /** The queue name. */
    queueName(value: string): az_storage_queue_policy_create_command_builder;
    /** Storage account key. Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_KEY. */
    accountKey(value: string): az_storage_queue_policy_create_command_builder;
    /** Storage account name. Related environment variable: AZURE_STORAGE_ACCOUNT. Must be used in conjunction with either storage account key or a SAS token. If neither are present, the command will try to query the storage account key using the authenticated Azure account. If a large number of storage commands are executed the API quota may be hit. */
    accountName(value: string): az_storage_queue_policy_create_command_builder;
    /** The mode in which to run the command. "login" mode will directly use your login credentials for the authentication. The legacy "key" mode will attempt to query for an account key if no authentication parameters for the account are provided. Environment variable: AZURE_STORAGE_AUTH_MODE. */
    authMode(value: 'key' | 'login'): az_storage_queue_policy_create_command_builder;
    /** Storage account connection string. Environment variable: AZURE_STORAGE_CONNECTION_STRING. */
    connectionString(value: string): az_storage_queue_policy_create_command_builder;
    /** Expiration UTC datetime in (Y-m-d'T'H:M:S'Z'). */
    expiry(value: string): az_storage_queue_policy_create_command_builder;
    /** Allowed values: (a)dd (p)rocess (r)ead (u)pdate. Can be combined. */
    permissions(value: string): az_storage_queue_policy_create_command_builder;
    /** A Shared Access Signature (SAS). Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_SAS_TOKEN. */
    sasToken(value: string): az_storage_queue_policy_create_command_builder;
    /** Start UTC datetime (Y-m-d'T'H:M:S'Z'). Defaults to time of request. */
    start(value: string): az_storage_queue_policy_create_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_storage_queue_policy_create_command_builder;
}
/**
 * Delete a stored access policy on a containing object.
 *
 * Syntax:
 * ```
 * az storage queue policy delete --name
 *                                --queue-name
 *                                [--account-key]
 *                                [--account-name]
 *                                [--auth-mode {key, login}]
 *                                [--connection-string]
 *                                [--sas-token]
 *                                [--subscription]
 * ```
 *
 * @param {string} name The stored access policy name.
 * @param {string} queueName The queue name.
 */
declare class az_storage_queue_policy_delete_command_builder extends CommandBuilder<az_storage_queue_policy_delete_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string, queueName: string);
    /** The stored access policy name. */
    name(value: string): az_storage_queue_policy_delete_command_builder;
    /** The queue name. */
    queueName(value: string): az_storage_queue_policy_delete_command_builder;
    /** Storage account key. Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_KEY. */
    accountKey(value: string): az_storage_queue_policy_delete_command_builder;
    /** Storage account name. Related environment variable: AZURE_STORAGE_ACCOUNT. Must be used in conjunction with either storage account key or a SAS token. If neither are present, the command will try to query the storage account key using the authenticated Azure account. If a large number of storage commands are executed the API quota may be hit. */
    accountName(value: string): az_storage_queue_policy_delete_command_builder;
    /** The mode in which to run the command. "login" mode will directly use your login credentials for the authentication. The legacy "key" mode will attempt to query for an account key if no authentication parameters for the account are provided. Environment variable: AZURE_STORAGE_AUTH_MODE. */
    authMode(value: 'key' | 'login'): az_storage_queue_policy_delete_command_builder;
    /** Storage account connection string. Environment variable: AZURE_STORAGE_CONNECTION_STRING. */
    connectionString(value: string): az_storage_queue_policy_delete_command_builder;
    /** A Shared Access Signature (SAS). Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_SAS_TOKEN. */
    sasToken(value: string): az_storage_queue_policy_delete_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_storage_queue_policy_delete_command_builder;
}
/**
 * List stored access policies on a containing object.
 *
 * Syntax:
 * ```
 * az storage queue policy list --queue-name
 *                              [--account-key]
 *                              [--account-name]
 *                              [--auth-mode {key, login}]
 *                              [--connection-string]
 *                              [--query-examples]
 *                              [--sas-token]
 *                              [--subscription]
 * ```
 *
 * @param {string} queueName The queue name.
 */
declare class az_storage_queue_policy_list_command_builder extends CommandBuilder<az_storage_queue_policy_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, queueName: string);
    /** The queue name. */
    queueName(value: string): az_storage_queue_policy_list_command_builder;
    /** Storage account key. Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_KEY. */
    accountKey(value: string): az_storage_queue_policy_list_command_builder;
    /** Storage account name. Related environment variable: AZURE_STORAGE_ACCOUNT. Must be used in conjunction with either storage account key or a SAS token. If neither are present, the command will try to query the storage account key using the authenticated Azure account. If a large number of storage commands are executed the API quota may be hit. */
    accountName(value: string): az_storage_queue_policy_list_command_builder;
    /** The mode in which to run the command. "login" mode will directly use your login credentials for the authentication. The legacy "key" mode will attempt to query for an account key if no authentication parameters for the account are provided. Environment variable: AZURE_STORAGE_AUTH_MODE. */
    authMode(value: 'key' | 'login'): az_storage_queue_policy_list_command_builder;
    /** Storage account connection string. Environment variable: AZURE_STORAGE_CONNECTION_STRING. */
    connectionString(value: string): az_storage_queue_policy_list_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_storage_queue_policy_list_command_builder;
    /** A Shared Access Signature (SAS). Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_SAS_TOKEN. */
    sasToken(value: string): az_storage_queue_policy_list_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_storage_queue_policy_list_command_builder;
}
/**
 * Show a stored access policy on a containing object.
 *
 * Syntax:
 * ```
 * az storage queue policy show --name
 *                              --queue-name
 *                              [--account-key]
 *                              [--account-name]
 *                              [--auth-mode {key, login}]
 *                              [--connection-string]
 *                              [--query-examples]
 *                              [--sas-token]
 *                              [--subscription]
 * ```
 *
 * @param {string} name The stored access policy name.
 * @param {string} queueName The queue name.
 */
declare class az_storage_queue_policy_show_command_builder extends CommandBuilder<az_storage_queue_policy_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string, queueName: string);
    /** The stored access policy name. */
    name(value: string): az_storage_queue_policy_show_command_builder;
    /** The queue name. */
    queueName(value: string): az_storage_queue_policy_show_command_builder;
    /** Storage account key. Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_KEY. */
    accountKey(value: string): az_storage_queue_policy_show_command_builder;
    /** Storage account name. Related environment variable: AZURE_STORAGE_ACCOUNT. Must be used in conjunction with either storage account key or a SAS token. If neither are present, the command will try to query the storage account key using the authenticated Azure account. If a large number of storage commands are executed the API quota may be hit. */
    accountName(value: string): az_storage_queue_policy_show_command_builder;
    /** The mode in which to run the command. "login" mode will directly use your login credentials for the authentication. The legacy "key" mode will attempt to query for an account key if no authentication parameters for the account are provided. Environment variable: AZURE_STORAGE_AUTH_MODE. */
    authMode(value: 'key' | 'login'): az_storage_queue_policy_show_command_builder;
    /** Storage account connection string. Environment variable: AZURE_STORAGE_CONNECTION_STRING. */
    connectionString(value: string): az_storage_queue_policy_show_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_storage_queue_policy_show_command_builder;
    /** A Shared Access Signature (SAS). Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_SAS_TOKEN. */
    sasToken(value: string): az_storage_queue_policy_show_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_storage_queue_policy_show_command_builder;
}
/**
 * Set a stored access policy on a containing object.
 *
 * Syntax:
 * ```
 * az storage queue policy update --name
 *                                --queue-name
 *                                [--account-key]
 *                                [--account-name]
 *                                [--auth-mode {key, login}]
 *                                [--connection-string]
 *                                [--expiry]
 *                                [--permissions]
 *                                [--sas-token]
 *                                [--start]
 *                                [--subscription]
 * ```
 *
 * @param {string} name The stored access policy name.
 * @param {string} queueName The queue name.
 */
declare class az_storage_queue_policy_update_command_builder extends CommandBuilder<az_storage_queue_policy_update_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string, queueName: string);
    /** The stored access policy name. */
    name(value: string): az_storage_queue_policy_update_command_builder;
    /** The queue name. */
    queueName(value: string): az_storage_queue_policy_update_command_builder;
    /** Storage account key. Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_KEY. */
    accountKey(value: string): az_storage_queue_policy_update_command_builder;
    /** Storage account name. Related environment variable: AZURE_STORAGE_ACCOUNT. Must be used in conjunction with either storage account key or a SAS token. If neither are present, the command will try to query the storage account key using the authenticated Azure account. If a large number of storage commands are executed the API quota may be hit. */
    accountName(value: string): az_storage_queue_policy_update_command_builder;
    /** The mode in which to run the command. "login" mode will directly use your login credentials for the authentication. The legacy "key" mode will attempt to query for an account key if no authentication parameters for the account are provided. Environment variable: AZURE_STORAGE_AUTH_MODE. */
    authMode(value: 'key' | 'login'): az_storage_queue_policy_update_command_builder;
    /** Storage account connection string. Environment variable: AZURE_STORAGE_CONNECTION_STRING. */
    connectionString(value: string): az_storage_queue_policy_update_command_builder;
    /** Expiration UTC datetime in (Y-m-d'T'H:M:S'Z'). */
    expiry(value: string): az_storage_queue_policy_update_command_builder;
    /** Allowed values: (a)dd (p)rocess (r)ead (u)pdate. Can be combined. */
    permissions(value: string): az_storage_queue_policy_update_command_builder;
    /** A Shared Access Signature (SAS). Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_SAS_TOKEN. */
    sasToken(value: string): az_storage_queue_policy_update_command_builder;
    /** Start UTC datetime (Y-m-d'T'H:M:S'Z'). Defaults to time of request. */
    start(value: string): az_storage_queue_policy_update_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_storage_queue_policy_update_command_builder;
}
/**
 * Creates a queue under the given account.
 *
 * Syntax:
 * ```
 * az storage queue create --name
 *                         [--account-key]
 *                         [--account-name]
 *                         [--auth-mode {key, login}]
 *                         [--connection-string]
 *                         [--fail-on-exist]
 *                         [--metadata]
 *                         [--sas-token]
 *                         [--subscription]
 *                         [--timeout]
 * ```
 *
 * @param {string} name The queue name.
 */
declare class az_storage_queue_create_command_builder extends CommandBuilder<az_storage_queue_create_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string);
    /** The queue name. */
    name(value: string): az_storage_queue_create_command_builder;
    /** Storage account key. Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_KEY. */
    accountKey(value: string): az_storage_queue_create_command_builder;
    /** Storage account name. Related environment variable: AZURE_STORAGE_ACCOUNT. Must be used in conjunction with either storage account key or a SAS token. If neither are present, the command will try to query the storage account key using the authenticated Azure account. If a large number of storage commands are executed the API quota may be hit. */
    accountName(value: string): az_storage_queue_create_command_builder;
    /** The mode in which to run the command. "login" mode will directly use your login credentials for the authentication. The legacy "key" mode will attempt to query for an account key if no authentication parameters for the account are provided. Environment variable: AZURE_STORAGE_AUTH_MODE. */
    authMode(value: 'key' | 'login'): az_storage_queue_create_command_builder;
    /** Storage account connection string. Environment variable: AZURE_STORAGE_CONNECTION_STRING. */
    connectionString(value: string): az_storage_queue_create_command_builder;
    /** Specifies whether to throw an exception if the queue already exists. */
    failOnExist(value: string): az_storage_queue_create_command_builder;
    /** Metadata in space-separated key=value pairs. This overwrites any existing metadata. */
    metadata(value: string): az_storage_queue_create_command_builder;
    /** A Shared Access Signature (SAS). Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_SAS_TOKEN. */
    sasToken(value: string): az_storage_queue_create_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_storage_queue_create_command_builder;
    /** Request timeout in seconds. Applies to each call to the service. */
    timeout(value: string): az_storage_queue_create_command_builder;
}
/**
 * Deletes the specified queue and any messages it contains.
 *
 * Syntax:
 * ```
 * az storage queue delete --name
 *                         [--account-key]
 *                         [--account-name]
 *                         [--auth-mode {key, login}]
 *                         [--connection-string]
 *                         [--fail-not-exist]
 *                         [--sas-token]
 *                         [--subscription]
 *                         [--timeout]
 * ```
 *
 * @param {string} name The queue name.
 */
declare class az_storage_queue_delete_command_builder extends CommandBuilder<az_storage_queue_delete_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string);
    /** The queue name. */
    name(value: string): az_storage_queue_delete_command_builder;
    /** Storage account key. Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_KEY. */
    accountKey(value: string): az_storage_queue_delete_command_builder;
    /** Storage account name. Related environment variable: AZURE_STORAGE_ACCOUNT. Must be used in conjunction with either storage account key or a SAS token. If neither are present, the command will try to query the storage account key using the authenticated Azure account. If a large number of storage commands are executed the API quota may be hit. */
    accountName(value: string): az_storage_queue_delete_command_builder;
    /** The mode in which to run the command. "login" mode will directly use your login credentials for the authentication. The legacy "key" mode will attempt to query for an account key if no authentication parameters for the account are provided. Environment variable: AZURE_STORAGE_AUTH_MODE. */
    authMode(value: 'key' | 'login'): az_storage_queue_delete_command_builder;
    /** Storage account connection string. Environment variable: AZURE_STORAGE_CONNECTION_STRING. */
    connectionString(value: string): az_storage_queue_delete_command_builder;
    /** Specifies whether to throw an exception if the queue doesn't exist. */
    failNotExist(value: string): az_storage_queue_delete_command_builder;
    /** A Shared Access Signature (SAS). Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_SAS_TOKEN. */
    sasToken(value: string): az_storage_queue_delete_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_storage_queue_delete_command_builder;
    /** Request timeout in seconds. Applies to each call to the service. */
    timeout(value: string): az_storage_queue_delete_command_builder;
}
/**
 * Returns a boolean indicating whether the queue exists.
 *
 * Syntax:
 * ```
 * az storage queue exists --name
 *                         [--account-key]
 *                         [--account-name]
 *                         [--auth-mode {key, login}]
 *                         [--connection-string]
 *                         [--sas-token]
 *                         [--subscription]
 *                         [--timeout]
 * ```
 *
 * @param {string} name The queue name.
 */
declare class az_storage_queue_exists_command_builder extends CommandBuilder<az_storage_queue_exists_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string);
    /** The queue name. */
    name(value: string): az_storage_queue_exists_command_builder;
    /** Storage account key. Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_KEY. */
    accountKey(value: string): az_storage_queue_exists_command_builder;
    /** Storage account name. Related environment variable: AZURE_STORAGE_ACCOUNT. Must be used in conjunction with either storage account key or a SAS token. If neither are present, the command will try to query the storage account key using the authenticated Azure account. If a large number of storage commands are executed the API quota may be hit. */
    accountName(value: string): az_storage_queue_exists_command_builder;
    /** The mode in which to run the command. "login" mode will directly use your login credentials for the authentication. The legacy "key" mode will attempt to query for an account key if no authentication parameters for the account are provided. Environment variable: AZURE_STORAGE_AUTH_MODE. */
    authMode(value: 'key' | 'login'): az_storage_queue_exists_command_builder;
    /** Storage account connection string. Environment variable: AZURE_STORAGE_CONNECTION_STRING. */
    connectionString(value: string): az_storage_queue_exists_command_builder;
    /** A Shared Access Signature (SAS). Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_SAS_TOKEN. */
    sasToken(value: string): az_storage_queue_exists_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_storage_queue_exists_command_builder;
    /** Request timeout in seconds. Applies to each call to the service. */
    timeout(value: string): az_storage_queue_exists_command_builder;
}
/**
 * Generates a shared access signature for the queue.
 *
 * Syntax:
 * ```
 * az storage queue generate-sas --name
 *                               [--account-key]
 *                               [--account-name]
 *                               [--connection-string]
 *                               [--expiry]
 *                               [--https-only]
 *                               [--ip]
 *                               [--permissions]
 *                               [--policy-name]
 *                               [--start]
 *                               [--subscription]
 * ```
 *
 * @param {string} name The queue name.
 */
declare class az_storage_queue_generate_sas_command_builder extends CommandBuilder<az_storage_queue_generate_sas_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string);
    /** The queue name. */
    name(value: string): az_storage_queue_generate_sas_command_builder;
    /** Storage account key. Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_KEY. */
    accountKey(value: string): az_storage_queue_generate_sas_command_builder;
    /** Storage account name. Related environment variable: AZURE_STORAGE_ACCOUNT. Must be used in conjunction with either storage account key or a SAS token. If neither are present, the command will try to query the storage account key using the authenticated Azure account. If a large number of storage commands are executed the API quota may be hit. */
    accountName(value: string): az_storage_queue_generate_sas_command_builder;
    /** Storage account connection string. Environment variable: AZURE_STORAGE_CONNECTION_STRING. */
    connectionString(value: string): az_storage_queue_generate_sas_command_builder;
    /** Specifies the UTC datetime (Y-m-d'T'H:M'Z') at which the SAS becomes invalid. Do not use if a stored access policy is referenced with --id that specifies this value. */
    expiry(value: string): az_storage_queue_generate_sas_command_builder;
    /** Only permit requests made with the HTTPS protocol. If omitted, requests from both the HTTP and HTTPS protocol are permitted. */
    httpsOnly(value: string): az_storage_queue_generate_sas_command_builder;
    /** Specifies the IP address or range of IP addresses from which to accept requests. Supports only IPv4 style addresses. */
    ip(value: string): az_storage_queue_generate_sas_command_builder;
    /** The permissions the SAS grants. Allowed values: (a)dd (p)rocess (r)ead (u)pdate. Do not use if a stored access policy is referenced with --id that specifies this value. Can be combined. */
    permissions(value: string): az_storage_queue_generate_sas_command_builder;
    /** The name of a stored access policy within the share's ACL. */
    policyName(value: string): az_storage_queue_generate_sas_command_builder;
    /** Specifies the UTC datetime (Y-m-d'T'H:M'Z') at which the SAS becomes valid. Do not use if a stored access policy is referenced with --id that specifies this value. Defaults to the time of the request. */
    start(value: string): az_storage_queue_generate_sas_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_storage_queue_generate_sas_command_builder;
}
/**
 * List queues in a storage account.
 *
 * Syntax:
 * ```
 * az storage queue list [--account-key]
 *                       [--account-name]
 *                       [--auth-mode {key, login}]
 *                       [--connection-string]
 *                       [--include-metadata]
 *                       [--marker]
 *                       [--num-results]
 *                       [--prefix]
 *                       [--query-examples]
 *                       [--sas-token]
 *                       [--subscription]
 *                       [--timeout]
 * ```
 */
declare class az_storage_queue_list_command_builder extends CommandBuilder<az_storage_queue_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** Storage account key. Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_KEY. */
    accountKey(value: string): az_storage_queue_list_command_builder;
    /** Storage account name. Related environment variable: AZURE_STORAGE_ACCOUNT. Must be used in conjunction with either storage account key or a SAS token. If neither are present, the command will try to query the storage account key using the authenticated Azure account. If a large number of storage commands are executed the API quota may be hit. */
    accountName(value: string): az_storage_queue_list_command_builder;
    /** The mode in which to run the command. "login" mode will directly use your login credentials for the authentication. The legacy "key" mode will attempt to query for an account key if no authentication parameters for the account are provided. Environment variable: AZURE_STORAGE_AUTH_MODE. */
    authMode(value: 'key' | 'login'): az_storage_queue_list_command_builder;
    /** Storage account connection string. Environment variable: AZURE_STORAGE_CONNECTION_STRING. */
    connectionString(value: string): az_storage_queue_list_command_builder;
    /** Specifies that container metadata be returned in the response. */
    includeMetadata(value: string): az_storage_queue_list_command_builder;
    /** An opaque continuation token. This value can be retrieved from the next_marker field of a previous generator object if num_results was specified and that generator has finished enumerating results. If specified, this generator will begin returning results from the point where the previous generator stopped. */
    marker(value: string): az_storage_queue_list_command_builder;
    /** The maximum number of queues to return. */
    numResults(value: string): az_storage_queue_list_command_builder;
    /** Filters the results to return only queues with names that begin with the specified prefix. */
    prefix(value: string): az_storage_queue_list_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_storage_queue_list_command_builder;
    /** A Shared Access Signature (SAS). Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_SAS_TOKEN. */
    sasToken(value: string): az_storage_queue_list_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_storage_queue_list_command_builder;
    /** Request timeout in seconds. Applies to each call to the service. */
    timeout(value: string): az_storage_queue_list_command_builder;
}
/**
 * Retrieves statistics related to replication for the Queue service.
 *
 * Syntax:
 * ```
 * az storage queue stats [--account-key]
 *                        [--account-name]
 *                        [--auth-mode {key, login}]
 *                        [--connection-string]
 *                        [--sas-token]
 *                        [--subscription]
 *                        [--timeout]
 * ```
 */
declare class az_storage_queue_stats_command_builder extends CommandBuilder<az_storage_queue_stats_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** Storage account key. Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_KEY. */
    accountKey(value: string): az_storage_queue_stats_command_builder;
    /** Storage account name. Related environment variable: AZURE_STORAGE_ACCOUNT. Must be used in conjunction with either storage account key or a SAS token. If neither are present, the command will try to query the storage account key using the authenticated Azure account. If a large number of storage commands are executed the API quota may be hit. */
    accountName(value: string): az_storage_queue_stats_command_builder;
    /** The mode in which to run the command. "login" mode will directly use your login credentials for the authentication. The legacy "key" mode will attempt to query for an account key if no authentication parameters for the account are provided. Environment variable: AZURE_STORAGE_AUTH_MODE. */
    authMode(value: 'key' | 'login'): az_storage_queue_stats_command_builder;
    /** Storage account connection string. Environment variable: AZURE_STORAGE_CONNECTION_STRING. */
    connectionString(value: string): az_storage_queue_stats_command_builder;
    /** A Shared Access Signature (SAS). Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_SAS_TOKEN. */
    sasToken(value: string): az_storage_queue_stats_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_storage_queue_stats_command_builder;
    /** Request timeout in seconds. Applies to each call to the service. */
    timeout(value: string): az_storage_queue_stats_command_builder;
}
/**
 * Returns all user-defined metadata for the specified share.
 *
 * Syntax:
 * ```
 * az storage share metadata show --name
 *                                [--account-key]
 *                                [--account-name]
 *                                [--connection-string]
 *                                [--query-examples]
 *                                [--sas-token]
 *                                [--snapshot]
 *                                [--subscription]
 *                                [--timeout]
 * ```
 *
 * @param {string} name The file share name.
 */
declare class az_storage_share_metadata_show_command_builder extends CommandBuilder<az_storage_share_metadata_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string);
    /** The file share name. */
    name(value: string): az_storage_share_metadata_show_command_builder;
    /** Storage account key. Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_KEY. */
    accountKey(value: string): az_storage_share_metadata_show_command_builder;
    /** Storage account name. Related environment variable: AZURE_STORAGE_ACCOUNT. Must be used in conjunction with either storage account key or a SAS token. If neither are present, the command will try to query the storage account key using the authenticated Azure account. If a large number of storage commands are executed the API quota may be hit. */
    accountName(value: string): az_storage_share_metadata_show_command_builder;
    /** Storage account connection string. Environment variable: AZURE_STORAGE_CONNECTION_STRING. */
    connectionString(value: string): az_storage_share_metadata_show_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_storage_share_metadata_show_command_builder;
    /** A Shared Access Signature (SAS). Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_SAS_TOKEN. */
    sasToken(value: string): az_storage_share_metadata_show_command_builder;
    /** A string that represents the snapshot version, if applicable. */
    snapshot(value: string): az_storage_share_metadata_show_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_storage_share_metadata_show_command_builder;
    /** Request timeout in seconds. Applies to each call to the service. */
    timeout(value: string): az_storage_share_metadata_show_command_builder;
}
/**
 * Sets one or more user-defined name-value pairs for the specified share.
 *
 * Syntax:
 * ```
 * az storage share metadata update --name
 *                                  [--account-key]
 *                                  [--account-name]
 *                                  [--connection-string]
 *                                  [--metadata]
 *                                  [--sas-token]
 *                                  [--subscription]
 *                                  [--timeout]
 * ```
 *
 * @param {string} name The file share name.
 */
declare class az_storage_share_metadata_update_command_builder extends CommandBuilder<az_storage_share_metadata_update_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string);
    /** The file share name. */
    name(value: string): az_storage_share_metadata_update_command_builder;
    /** Storage account key. Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_KEY. */
    accountKey(value: string): az_storage_share_metadata_update_command_builder;
    /** Storage account name. Related environment variable: AZURE_STORAGE_ACCOUNT. Must be used in conjunction with either storage account key or a SAS token. If neither are present, the command will try to query the storage account key using the authenticated Azure account. If a large number of storage commands are executed the API quota may be hit. */
    accountName(value: string): az_storage_share_metadata_update_command_builder;
    /** Storage account connection string. Environment variable: AZURE_STORAGE_CONNECTION_STRING. */
    connectionString(value: string): az_storage_share_metadata_update_command_builder;
    /** Metadata in space-separated key=value pairs. This overwrites any existing metadata. */
    metadata(value: string): az_storage_share_metadata_update_command_builder;
    /** A Shared Access Signature (SAS). Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_SAS_TOKEN. */
    sasToken(value: string): az_storage_share_metadata_update_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_storage_share_metadata_update_command_builder;
    /** Request timeout in seconds. Applies to each call to the service. */
    timeout(value: string): az_storage_share_metadata_update_command_builder;
}
/**
 * Create a stored access policy on the containing object.
 *
 * Syntax:
 * ```
 * az storage share policy create --name
 *                                --share-name
 *                                [--account-key]
 *                                [--account-name]
 *                                [--connection-string]
 *                                [--expiry]
 *                                [--permissions]
 *                                [--sas-token]
 *                                [--start]
 *                                [--subscription]
 * ```
 *
 * @param {string} name The stored access policy name.
 * @param {string} shareName The file share name.
 */
declare class az_storage_share_policy_create_command_builder extends CommandBuilder<az_storage_share_policy_create_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string, shareName: string);
    /** The stored access policy name. */
    name(value: string): az_storage_share_policy_create_command_builder;
    /** The file share name. */
    shareName(value: string): az_storage_share_policy_create_command_builder;
    /** Storage account key. Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_KEY. */
    accountKey(value: string): az_storage_share_policy_create_command_builder;
    /** Storage account name. Related environment variable: AZURE_STORAGE_ACCOUNT. Must be used in conjunction with either storage account key or a SAS token. If neither are present, the command will try to query the storage account key using the authenticated Azure account. If a large number of storage commands are executed the API quota may be hit. */
    accountName(value: string): az_storage_share_policy_create_command_builder;
    /** Storage account connection string. Environment variable: AZURE_STORAGE_CONNECTION_STRING. */
    connectionString(value: string): az_storage_share_policy_create_command_builder;
    /** Expiration UTC datetime in (Y-m-d'T'H:M:S'Z'). */
    expiry(value: string): az_storage_share_policy_create_command_builder;
    /** Allowed values: (d)elete (l)ist (r)ead (w)rite. Can be combined. */
    permissions(value: string): az_storage_share_policy_create_command_builder;
    /** A Shared Access Signature (SAS). Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_SAS_TOKEN. */
    sasToken(value: string): az_storage_share_policy_create_command_builder;
    /** Start UTC datetime (Y-m-d'T'H:M:S'Z'). Defaults to time of request. */
    start(value: string): az_storage_share_policy_create_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_storage_share_policy_create_command_builder;
}
/**
 * Delete a stored access policy on a containing object.
 *
 * Syntax:
 * ```
 * az storage share policy delete --name
 *                                --share-name
 *                                [--account-key]
 *                                [--account-name]
 *                                [--connection-string]
 *                                [--sas-token]
 *                                [--subscription]
 * ```
 *
 * @param {string} name The stored access policy name.
 * @param {string} shareName The file share name.
 */
declare class az_storage_share_policy_delete_command_builder extends CommandBuilder<az_storage_share_policy_delete_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string, shareName: string);
    /** The stored access policy name. */
    name(value: string): az_storage_share_policy_delete_command_builder;
    /** The file share name. */
    shareName(value: string): az_storage_share_policy_delete_command_builder;
    /** Storage account key. Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_KEY. */
    accountKey(value: string): az_storage_share_policy_delete_command_builder;
    /** Storage account name. Related environment variable: AZURE_STORAGE_ACCOUNT. Must be used in conjunction with either storage account key or a SAS token. If neither are present, the command will try to query the storage account key using the authenticated Azure account. If a large number of storage commands are executed the API quota may be hit. */
    accountName(value: string): az_storage_share_policy_delete_command_builder;
    /** Storage account connection string. Environment variable: AZURE_STORAGE_CONNECTION_STRING. */
    connectionString(value: string): az_storage_share_policy_delete_command_builder;
    /** A Shared Access Signature (SAS). Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_SAS_TOKEN. */
    sasToken(value: string): az_storage_share_policy_delete_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_storage_share_policy_delete_command_builder;
}
/**
 * List stored access policies on a containing object.
 *
 * Syntax:
 * ```
 * az storage share policy list --share-name
 *                              [--account-key]
 *                              [--account-name]
 *                              [--connection-string]
 *                              [--query-examples]
 *                              [--sas-token]
 *                              [--subscription]
 * ```
 *
 * @param {string} shareName The file share name.
 */
declare class az_storage_share_policy_list_command_builder extends CommandBuilder<az_storage_share_policy_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, shareName: string);
    /** The file share name. */
    shareName(value: string): az_storage_share_policy_list_command_builder;
    /** Storage account key. Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_KEY. */
    accountKey(value: string): az_storage_share_policy_list_command_builder;
    /** Storage account name. Related environment variable: AZURE_STORAGE_ACCOUNT. Must be used in conjunction with either storage account key or a SAS token. If neither are present, the command will try to query the storage account key using the authenticated Azure account. If a large number of storage commands are executed the API quota may be hit. */
    accountName(value: string): az_storage_share_policy_list_command_builder;
    /** Storage account connection string. Environment variable: AZURE_STORAGE_CONNECTION_STRING. */
    connectionString(value: string): az_storage_share_policy_list_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_storage_share_policy_list_command_builder;
    /** A Shared Access Signature (SAS). Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_SAS_TOKEN. */
    sasToken(value: string): az_storage_share_policy_list_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_storage_share_policy_list_command_builder;
}
/**
 * Show a stored access policy on a containing object.
 *
 * Syntax:
 * ```
 * az storage share policy show --name
 *                              --share-name
 *                              [--account-key]
 *                              [--account-name]
 *                              [--connection-string]
 *                              [--query-examples]
 *                              [--sas-token]
 *                              [--subscription]
 * ```
 *
 * @param {string} name The stored access policy name.
 * @param {string} shareName The file share name.
 */
declare class az_storage_share_policy_show_command_builder extends CommandBuilder<az_storage_share_policy_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string, shareName: string);
    /** The stored access policy name. */
    name(value: string): az_storage_share_policy_show_command_builder;
    /** The file share name. */
    shareName(value: string): az_storage_share_policy_show_command_builder;
    /** Storage account key. Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_KEY. */
    accountKey(value: string): az_storage_share_policy_show_command_builder;
    /** Storage account name. Related environment variable: AZURE_STORAGE_ACCOUNT. Must be used in conjunction with either storage account key or a SAS token. If neither are present, the command will try to query the storage account key using the authenticated Azure account. If a large number of storage commands are executed the API quota may be hit. */
    accountName(value: string): az_storage_share_policy_show_command_builder;
    /** Storage account connection string. Environment variable: AZURE_STORAGE_CONNECTION_STRING. */
    connectionString(value: string): az_storage_share_policy_show_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_storage_share_policy_show_command_builder;
    /** A Shared Access Signature (SAS). Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_SAS_TOKEN. */
    sasToken(value: string): az_storage_share_policy_show_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_storage_share_policy_show_command_builder;
}
/**
 * Set a stored access policy on a containing object.
 *
 * Syntax:
 * ```
 * az storage share policy update --name
 *                                --share-name
 *                                [--account-key]
 *                                [--account-name]
 *                                [--connection-string]
 *                                [--expiry]
 *                                [--permissions]
 *                                [--sas-token]
 *                                [--start]
 *                                [--subscription]
 * ```
 *
 * @param {string} name The stored access policy name.
 * @param {string} shareName The file share name.
 */
declare class az_storage_share_policy_update_command_builder extends CommandBuilder<az_storage_share_policy_update_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string, shareName: string);
    /** The stored access policy name. */
    name(value: string): az_storage_share_policy_update_command_builder;
    /** The file share name. */
    shareName(value: string): az_storage_share_policy_update_command_builder;
    /** Storage account key. Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_KEY. */
    accountKey(value: string): az_storage_share_policy_update_command_builder;
    /** Storage account name. Related environment variable: AZURE_STORAGE_ACCOUNT. Must be used in conjunction with either storage account key or a SAS token. If neither are present, the command will try to query the storage account key using the authenticated Azure account. If a large number of storage commands are executed the API quota may be hit. */
    accountName(value: string): az_storage_share_policy_update_command_builder;
    /** Storage account connection string. Environment variable: AZURE_STORAGE_CONNECTION_STRING. */
    connectionString(value: string): az_storage_share_policy_update_command_builder;
    /** Expiration UTC datetime in (Y-m-d'T'H:M:S'Z'). */
    expiry(value: string): az_storage_share_policy_update_command_builder;
    /** Allowed values: (d)elete (l)ist (r)ead (w)rite. Can be combined. */
    permissions(value: string): az_storage_share_policy_update_command_builder;
    /** A Shared Access Signature (SAS). Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_SAS_TOKEN. */
    sasToken(value: string): az_storage_share_policy_update_command_builder;
    /** Start UTC datetime (Y-m-d'T'H:M:S'Z'). Defaults to time of request. */
    start(value: string): az_storage_share_policy_update_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_storage_share_policy_update_command_builder;
}
/**
 * Create a new Azure file share under the specified storage account.
 *
 * Syntax:
 * ```
 * az storage share-rm create --name
 *                            --storage-account
 *                            [--access-tier {Cool, Hot, Premium, TransactionOptimized}]
 *                            [--enabled-protocols {NFS, SMB}]
 *                            [--metadata]
 *                            [--quota]
 *                            [--resource-group]
 *                            [--root-squash {AllSquash, NoRootSquash, RootSquash}]
 *                            [--subscription]
 * ```
 *
 * @param {string} name The file share name.
 * @param {string} storageAccount The name or ID of the storage account.
 */
declare class az_storage_share_rm_create_command_builder extends CommandBuilder<az_storage_share_rm_create_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string, storageAccount: string);
    /** The file share name. */
    name(value: string): az_storage_share_rm_create_command_builder;
    /** The name or ID of the storage account. */
    storageAccount(value: string): az_storage_share_rm_create_command_builder;
    /** Access tier for specific share. GpV2 account can choose between TransactionOptimized (default), Hot, and Cool. FileStorage account can choose Premium. */
    accessTier(value: 'Cool' | 'Hot' | 'Premium' | 'TransactionOptimized'): az_storage_share_rm_create_command_builder;
    /** Immutable property for file shares protocol. NFS protocol will be only available for premium file shares (file shares in the FileStorage account type). */
    enabledProtocols(value: 'NFS' | 'SMB'): az_storage_share_rm_create_command_builder;
    /** Metadata in space-separated key=value pairs that is associated with the share. This overwrites any existing metadata. */
    metadata(value: string): az_storage_share_rm_create_command_builder;
    /** The maximum size of the share in gigabytes. Must be greater than 0, and less than or equal to 5TB (5120). For Large File Shares, the maximum size is 102400. */
    quota(value: string): az_storage_share_rm_create_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_storage_share_rm_create_command_builder;
    /** Reduction of the access rights for the remote superuser. */
    rootSquash(value: 'AllSquash' | 'NoRootSquash' | 'RootSquash'): az_storage_share_rm_create_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_storage_share_rm_create_command_builder;
}
/**
 * Delete the specified Azure file share.
 *
 * Syntax:
 * ```
 * az storage share-rm delete [--ids]
 *                            [--name]
 *                            [--resource-group]
 *                            [--storage-account]
 *                            [--subscription]
 *                            [--yes]
 * ```
 */
declare class az_storage_share_rm_delete_command_builder extends CommandBuilder<az_storage_share_rm_delete_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_storage_share_rm_delete_command_builder;
    /** The file share name. */
    name(value: string): az_storage_share_rm_delete_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_storage_share_rm_delete_command_builder;
    /** The name or ID of the storage account. */
    storageAccount(value: string): az_storage_share_rm_delete_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_storage_share_rm_delete_command_builder;
    /** Do not prompt for confirmation. */
    yes(value: string): az_storage_share_rm_delete_command_builder;
}
/**
 * Check for the existence of an Azure file share.
 *
 * Syntax:
 * ```
 * az storage share-rm exists [--ids]
 *                            [--name]
 *                            [--resource-group]
 *                            [--storage-account]
 *                            [--subscription]
 * ```
 */
declare class az_storage_share_rm_exists_command_builder extends CommandBuilder<az_storage_share_rm_exists_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_storage_share_rm_exists_command_builder;
    /** The file share name. */
    name(value: string): az_storage_share_rm_exists_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_storage_share_rm_exists_command_builder;
    /** The name or ID of the storage account. */
    storageAccount(value: string): az_storage_share_rm_exists_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_storage_share_rm_exists_command_builder;
}
/**
 * List the Azure file shares under the specified storage account.
 *
 * Syntax:
 * ```
 * az storage share-rm list --storage-account
 *                          [--include-deleted]
 *                          [--query-examples]
 *                          [--resource-group]
 *                          [--subscription]
 * ```
 *
 * @param {string} storageAccount The name or ID of the storage account.
 */
declare class az_storage_share_rm_list_command_builder extends CommandBuilder<az_storage_share_rm_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, storageAccount: string);
    /** The name or ID of the storage account. */
    storageAccount(value: string): az_storage_share_rm_list_command_builder;
    /** Include soft deleted file shares when specified. */
    includeDeleted(value: string): az_storage_share_rm_list_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_storage_share_rm_list_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_storage_share_rm_list_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_storage_share_rm_list_command_builder;
}
/**
 * Restore a file share within a valid retention days if share soft delete is enabled.
 *
 * Syntax:
 * ```
 * az storage share-rm restore --deleted-version
 *                             [--ids]
 *                             [--name]
 *                             [--resource-group]
 *                             [--restored-name]
 *                             [--storage-account]
 *                             [--subscription]
 * ```
 *
 * @param {string} deletedVersion Identify the version of the deleted share that will be restored.
 */
declare class az_storage_share_rm_restore_command_builder extends CommandBuilder<az_storage_share_rm_restore_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, deletedVersion: string);
    /** Identify the version of the deleted share that will be restored. */
    deletedVersion(value: string): az_storage_share_rm_restore_command_builder;
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_storage_share_rm_restore_command_builder;
    /** The file share name. Identify the name of the deleted share that will be restored. */
    name(value: string): az_storage_share_rm_restore_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_storage_share_rm_restore_command_builder;
    /** A new file share name to be restored. If not specified, deleted share name will be used. */
    restoredName(value: string): az_storage_share_rm_restore_command_builder;
    /** The name or ID of the storage account. */
    storageAccount(value: string): az_storage_share_rm_restore_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_storage_share_rm_restore_command_builder;
}
/**
 * Show the properties for a specified Azure file share.
 *
 * Syntax:
 * ```
 * az storage share-rm show [--expand]
 *                          [--ids]
 *                          [--name]
 *                          [--query-examples]
 *                          [--resource-group]
 *                          [--storage-account]
 *                          [--subscription]
 * ```
 */
declare class az_storage_share_rm_show_command_builder extends CommandBuilder<az_storage_share_rm_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** Optional, used to expand the properties within share's properties. */
    expand(value: string): az_storage_share_rm_show_command_builder;
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_storage_share_rm_show_command_builder;
    /** The file share name. */
    name(value: string): az_storage_share_rm_show_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_storage_share_rm_show_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_storage_share_rm_show_command_builder;
    /** The name or ID of the storage account. */
    storageAccount(value: string): az_storage_share_rm_show_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_storage_share_rm_show_command_builder;
}
/**
 * Get the usage bytes of the data stored on the share.
 *
 * Syntax:
 * ```
 * az storage share-rm stats [--ids]
 *                           [--name]
 *                           [--resource-group]
 *                           [--storage-account]
 *                           [--subscription]
 * ```
 */
declare class az_storage_share_rm_stats_command_builder extends CommandBuilder<az_storage_share_rm_stats_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_storage_share_rm_stats_command_builder;
    /** The file share name. */
    name(value: string): az_storage_share_rm_stats_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_storage_share_rm_stats_command_builder;
    /** The name or ID of the storage account. */
    storageAccount(value: string): az_storage_share_rm_stats_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_storage_share_rm_stats_command_builder;
}
/**
 * Update the properties for an Azure file share.
 *
 * Syntax:
 * ```
 * az storage share-rm update [--access-tier {Cool, Hot, Premium, TransactionOptimized}]
 *                            [--add]
 *                            [--force-string]
 *                            [--ids]
 *                            [--metadata]
 *                            [--name]
 *                            [--quota]
 *                            [--remove]
 *                            [--resource-group]
 *                            [--root-squash {AllSquash, NoRootSquash, RootSquash}]
 *                            [--set]
 *                            [--storage-account]
 *                            [--subscription]
 * ```
 */
declare class az_storage_share_rm_update_command_builder extends CommandBuilder<az_storage_share_rm_update_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** Access tier for specific share. GpV2 account can choose between TransactionOptimized (default), Hot, and Cool. FileStorage account can choose Premium. */
    accessTier(value: 'Cool' | 'Hot' | 'Premium' | 'TransactionOptimized'): az_storage_share_rm_update_command_builder;
    /** Add an object to a list of objects by specifying a path and key value pairs.  Example: --add property.listProperty <key=value, string or JSON string>. */
    add(value: string): az_storage_share_rm_update_command_builder;
    /** When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON. */
    forceString(value: string): az_storage_share_rm_update_command_builder;
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_storage_share_rm_update_command_builder;
    /** Metadata in space-separated key=value pairs that is associated with the share. This overwrites any existing metadata. */
    metadata(value: string): az_storage_share_rm_update_command_builder;
    /** The file share name. */
    name(value: string): az_storage_share_rm_update_command_builder;
    /** The maximum size of the share in gigabytes. Must be greater than 0, and less than or equal to 5TB (5120). For Large File Shares, the maximum size is 102400. */
    quota(value: string): az_storage_share_rm_update_command_builder;
    /** Remove a property or an element from a list.  Example: --remove property.list <indexToRemove> OR --remove propertyToRemove. */
    remove(value: string): az_storage_share_rm_update_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_storage_share_rm_update_command_builder;
    /** Reduction of the access rights for the remote superuser. */
    rootSquash(value: 'AllSquash' | 'NoRootSquash' | 'RootSquash'): az_storage_share_rm_update_command_builder;
    /** Update an object by specifying a property path and value to set.  Example: --set property1.property2=<value>. */
    set(value: string): az_storage_share_rm_update_command_builder;
    /** The name or ID of the storage account. */
    storageAccount(value: string): az_storage_share_rm_update_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_storage_share_rm_update_command_builder;
}
/**
 * Creates a new share under the specified account.
 *
 * Syntax:
 * ```
 * az storage share create --name
 *                         [--account-key]
 *                         [--account-name]
 *                         [--connection-string]
 *                         [--fail-on-exist]
 *                         [--metadata]
 *                         [--quota]
 *                         [--sas-token]
 *                         [--subscription]
 *                         [--timeout]
 * ```
 *
 * @param {string} name The file share name.
 */
declare class az_storage_share_create_command_builder extends CommandBuilder<az_storage_share_create_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string);
    /** The file share name. */
    name(value: string): az_storage_share_create_command_builder;
    /** Storage account key. Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_KEY. */
    accountKey(value: string): az_storage_share_create_command_builder;
    /** Storage account name. Related environment variable: AZURE_STORAGE_ACCOUNT. Must be used in conjunction with either storage account key or a SAS token. If neither are present, the command will try to query the storage account key using the authenticated Azure account. If a large number of storage commands are executed the API quota may be hit. */
    accountName(value: string): az_storage_share_create_command_builder;
    /** Storage account connection string. Environment variable: AZURE_STORAGE_CONNECTION_STRING. */
    connectionString(value: string): az_storage_share_create_command_builder;
    /** Specify whether to throw an exception when the share exists. False by default. */
    failOnExist(value: string): az_storage_share_create_command_builder;
    /** Metadata in space-separated key=value pairs. This overwrites any existing metadata. */
    metadata(value: string): az_storage_share_create_command_builder;
    /** Specifies the maximum size of the share, in gigabytes. Must be greater than 0, and less than or equal to 5TB (5120). */
    quota(value: string): az_storage_share_create_command_builder;
    /** A Shared Access Signature (SAS). Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_SAS_TOKEN. */
    sasToken(value: string): az_storage_share_create_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_storage_share_create_command_builder;
    /** Request timeout in seconds. Applies to each call to the service. */
    timeout(value: string): az_storage_share_create_command_builder;
}
/**
 * Marks the specified share for deletion.
 *
 * Syntax:
 * ```
 * az storage share delete --name
 *                         [--account-key]
 *                         [--account-name]
 *                         [--connection-string]
 *                         [--delete-snapshots {include}]
 *                         [--fail-not-exist]
 *                         [--sas-token]
 *                         [--snapshot]
 *                         [--subscription]
 *                         [--timeout]
 * ```
 *
 * @param {string} name The file share name.
 */
declare class az_storage_share_delete_command_builder extends CommandBuilder<az_storage_share_delete_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string);
    /** The file share name. */
    name(value: string): az_storage_share_delete_command_builder;
    /** Storage account key. Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_KEY. */
    accountKey(value: string): az_storage_share_delete_command_builder;
    /** Storage account name. Related environment variable: AZURE_STORAGE_ACCOUNT. Must be used in conjunction with either storage account key or a SAS token. If neither are present, the command will try to query the storage account key using the authenticated Azure account. If a large number of storage commands are executed the API quota may be hit. */
    accountName(value: string): az_storage_share_delete_command_builder;
    /** Storage account connection string. Environment variable: AZURE_STORAGE_CONNECTION_STRING. */
    connectionString(value: string): az_storage_share_delete_command_builder;
    /** Specify the deletion strategy when the share has snapshots. */
    deleteSnapshots(value: 'include'): az_storage_share_delete_command_builder;
    /** Specify whether to throw an exception when the share doesn't exist. False by default. */
    failNotExist(value: string): az_storage_share_delete_command_builder;
    /** A Shared Access Signature (SAS). Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_SAS_TOKEN. */
    sasToken(value: string): az_storage_share_delete_command_builder;
    /** A string that represents the snapshot version, if applicable. Specify this argument to delete a specific snapshot only. delete_snapshots must be None if this is specified. */
    snapshot(value: string): az_storage_share_delete_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_storage_share_delete_command_builder;
    /** Request timeout in seconds. Applies to each call to the service. */
    timeout(value: string): az_storage_share_delete_command_builder;
}
/**
 * Check for the existence of a file share.
 *
 * Syntax:
 * ```
 * az storage share exists --name
 *                         [--account-key]
 *                         [--account-name]
 *                         [--connection-string]
 *                         [--sas-token]
 *                         [--snapshot]
 *                         [--subscription]
 *                         [--timeout]
 * ```
 *
 * @param {string} name The file share name.
 */
declare class az_storage_share_exists_command_builder extends CommandBuilder<az_storage_share_exists_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string);
    /** The file share name. */
    name(value: string): az_storage_share_exists_command_builder;
    /** Storage account key. Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_KEY. */
    accountKey(value: string): az_storage_share_exists_command_builder;
    /** Storage account name. Related environment variable: AZURE_STORAGE_ACCOUNT. Must be used in conjunction with either storage account key or a SAS token. If neither are present, the command will try to query the storage account key using the authenticated Azure account. If a large number of storage commands are executed the API quota may be hit. */
    accountName(value: string): az_storage_share_exists_command_builder;
    /** Storage account connection string. Environment variable: AZURE_STORAGE_CONNECTION_STRING. */
    connectionString(value: string): az_storage_share_exists_command_builder;
    /** A Shared Access Signature (SAS). Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_SAS_TOKEN. */
    sasToken(value: string): az_storage_share_exists_command_builder;
    /** A string that represents the snapshot version, if applicable. */
    snapshot(value: string): az_storage_share_exists_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_storage_share_exists_command_builder;
    /** Request timeout in seconds. Applies to each call to the service. */
    timeout(value: string): az_storage_share_exists_command_builder;
}
/**
 * Generates a shared access signature for the share.
 *
 * Syntax:
 * ```
 * az storage share generate-sas --name
 *                               [--account-key]
 *                               [--account-name]
 *                               [--cache-control]
 *                               [--connection-string]
 *                               [--content-disposition]
 *                               [--content-encoding]
 *                               [--content-language]
 *                               [--content-type]
 *                               [--expiry]
 *                               [--https-only]
 *                               [--ip]
 *                               [--permissions]
 *                               [--policy-name]
 *                               [--start]
 *                               [--subscription]
 * ```
 *
 * @param {string} name The file share name.
 */
declare class az_storage_share_generate_sas_command_builder extends CommandBuilder<az_storage_share_generate_sas_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string);
    /** The file share name. */
    name(value: string): az_storage_share_generate_sas_command_builder;
    /** Storage account key. Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_KEY. */
    accountKey(value: string): az_storage_share_generate_sas_command_builder;
    /** Storage account name. Related environment variable: AZURE_STORAGE_ACCOUNT. Must be used in conjunction with either storage account key or a SAS token. If neither are present, the command will try to query the storage account key using the authenticated Azure account. If a large number of storage commands are executed the API quota may be hit. */
    accountName(value: string): az_storage_share_generate_sas_command_builder;
    /** Response header value for Cache-Control when resource is accessed using this shared access signature. */
    cacheControl(value: string): az_storage_share_generate_sas_command_builder;
    /** Storage account connection string. Environment variable: AZURE_STORAGE_CONNECTION_STRING. */
    connectionString(value: string): az_storage_share_generate_sas_command_builder;
    /** Response header value for Content-Disposition when resource is accessed using this shared access signature. */
    contentDisposition(value: string): az_storage_share_generate_sas_command_builder;
    /** Response header value for Content-Encoding when resource is accessed using this shared access signature. */
    contentEncoding(value: string): az_storage_share_generate_sas_command_builder;
    /** Response header value for Content-Language when resource is accessed using this shared access signature. */
    contentLanguage(value: string): az_storage_share_generate_sas_command_builder;
    /** Response header value for Content-Type when resource is accessed using this shared access signature. */
    contentType(value: string): az_storage_share_generate_sas_command_builder;
    /** Specifies the UTC datetime (Y-m-d'T'H:M'Z') at which the SAS becomes invalid. Do not use if a stored access policy is referenced with --id that specifies this value. */
    expiry(value: string): az_storage_share_generate_sas_command_builder;
    /** Only permit requests made with the HTTPS protocol. If omitted, requests from both the HTTP and HTTPS protocol are permitted. */
    httpsOnly(value: string): az_storage_share_generate_sas_command_builder;
    /** Specifies the IP address or range of IP addresses from which to accept requests. Supports only IPv4 style addresses. */
    ip(value: string): az_storage_share_generate_sas_command_builder;
    /** The permissions the SAS grants. Allowed values: (d)elete (l)ist (r)ead (w)rite. Do not use if a stored access policy is referenced with --id that specifies this value. Can be combined. */
    permissions(value: string): az_storage_share_generate_sas_command_builder;
    /** The name of a stored access policy within the share's ACL. */
    policyName(value: string): az_storage_share_generate_sas_command_builder;
    /** Specifies the UTC datetime (Y-m-d'T'H:M'Z') at which the SAS becomes valid. Do not use if a stored access policy is referenced with --id that specifies this value. Defaults to the time of the request. */
    start(value: string): az_storage_share_generate_sas_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_storage_share_generate_sas_command_builder;
}
/**
 * List the file shares in a storage account.
 *
 * Syntax:
 * ```
 * az storage share list [--account-key]
 *                       [--account-name]
 *                       [--connection-string]
 *                       [--include-metadata]
 *                       [--include-snapshots]
 *                       [--marker]
 *                       [--num-results]
 *                       [--prefix]
 *                       [--query-examples]
 *                       [--sas-token]
 *                       [--subscription]
 *                       [--timeout]
 * ```
 */
declare class az_storage_share_list_command_builder extends CommandBuilder<az_storage_share_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** Storage account key. Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_KEY. */
    accountKey(value: string): az_storage_share_list_command_builder;
    /** Storage account name. Related environment variable: AZURE_STORAGE_ACCOUNT. Must be used in conjunction with either storage account key or a SAS token. If neither are present, the command will try to query the storage account key using the authenticated Azure account. If a large number of storage commands are executed the API quota may be hit. */
    accountName(value: string): az_storage_share_list_command_builder;
    /** Storage account connection string. Environment variable: AZURE_STORAGE_CONNECTION_STRING. */
    connectionString(value: string): az_storage_share_list_command_builder;
    /** Specifies that share metadata be returned in the response. */
    includeMetadata(value: string): az_storage_share_list_command_builder;
    /** Specifies that share snapshots be returned in the response. */
    includeSnapshots(value: string): az_storage_share_list_command_builder;
    /** An opaque continuation token. This value can be retrieved from the next_marker field of a previous generator object if num_results was specified and that generator has finished enumerating results. If specified, this generator will begin returning results from the point where the previous generator stopped. */
    marker(value: string): az_storage_share_list_command_builder;
    /** Specify the maximum number to return. If the request does not specify num_results, or specifies a value greater than 5000, the server will return up to 5000 items. Note that if the listing operation crosses a partition boundary, then the service will return a continuation token for retrieving the remaining of the results. Provide "\*" to return all. */
    numResults(value: string): az_storage_share_list_command_builder;
    /** Filters the results to return only shares whose names begin with the specified prefix. */
    prefix(value: string): az_storage_share_list_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_storage_share_list_command_builder;
    /** A Shared Access Signature (SAS). Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_SAS_TOKEN. */
    sasToken(value: string): az_storage_share_list_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_storage_share_list_command_builder;
    /** Request timeout in seconds. Applies to each call to the service. */
    timeout(value: string): az_storage_share_list_command_builder;
}
/**
 * Returns all user-defined metadata and system properties for the specified share.
 *
 * Syntax:
 * ```
 * az storage share show --name
 *                       [--account-key]
 *                       [--account-name]
 *                       [--connection-string]
 *                       [--query-examples]
 *                       [--sas-token]
 *                       [--snapshot]
 *                       [--subscription]
 *                       [--timeout]
 * ```
 *
 * @param {string} name The file share name.
 */
declare class az_storage_share_show_command_builder extends CommandBuilder<az_storage_share_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string);
    /** The file share name. */
    name(value: string): az_storage_share_show_command_builder;
    /** Storage account key. Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_KEY. */
    accountKey(value: string): az_storage_share_show_command_builder;
    /** Storage account name. Related environment variable: AZURE_STORAGE_ACCOUNT. Must be used in conjunction with either storage account key or a SAS token. If neither are present, the command will try to query the storage account key using the authenticated Azure account. If a large number of storage commands are executed the API quota may be hit. */
    accountName(value: string): az_storage_share_show_command_builder;
    /** Storage account connection string. Environment variable: AZURE_STORAGE_CONNECTION_STRING. */
    connectionString(value: string): az_storage_share_show_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_storage_share_show_command_builder;
    /** A Shared Access Signature (SAS). Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_SAS_TOKEN. */
    sasToken(value: string): az_storage_share_show_command_builder;
    /** A string that represents the snapshot version, if applicable. */
    snapshot(value: string): az_storage_share_show_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_storage_share_show_command_builder;
    /** Request timeout in seconds. Applies to each call to the service. */
    timeout(value: string): az_storage_share_show_command_builder;
}
/**
 * Creates a snapshot of an existing share under the specified account.
 *
 * Syntax:
 * ```
 * az storage share snapshot --name
 *                           [--account-key]
 *                           [--account-name]
 *                           [--connection-string]
 *                           [--metadata]
 *                           [--quota]
 *                           [--sas-token]
 *                           [--subscription]
 *                           [--timeout]
 * ```
 *
 * @param {string} name The file share name.
 */
declare class az_storage_share_snapshot_command_builder extends CommandBuilder<az_storage_share_snapshot_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string);
    /** The file share name. */
    name(value: string): az_storage_share_snapshot_command_builder;
    /** Storage account key. Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_KEY. */
    accountKey(value: string): az_storage_share_snapshot_command_builder;
    /** Storage account name. Related environment variable: AZURE_STORAGE_ACCOUNT. Must be used in conjunction with either storage account key or a SAS token. If neither are present, the command will try to query the storage account key using the authenticated Azure account. If a large number of storage commands are executed the API quota may be hit. */
    accountName(value: string): az_storage_share_snapshot_command_builder;
    /** Storage account connection string. Environment variable: AZURE_STORAGE_CONNECTION_STRING. */
    connectionString(value: string): az_storage_share_snapshot_command_builder;
    /** Metadata in space-separated key=value pairs. This overwrites any existing metadata. */
    metadata(value: string): az_storage_share_snapshot_command_builder;
    /** Specifies the maximum size of the share, in gigabytes. Must be greater than 0, and less than or equal to 5TB (5120). */
    quota(value: string): az_storage_share_snapshot_command_builder;
    /** A Shared Access Signature (SAS). Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_SAS_TOKEN. */
    sasToken(value: string): az_storage_share_snapshot_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_storage_share_snapshot_command_builder;
    /** Request timeout in seconds. Applies to each call to the service. */
    timeout(value: string): az_storage_share_snapshot_command_builder;
}
/**
 * Gets the approximate size of the data stored on the share, rounded up to the nearest gigabyte.
 *
 * Syntax:
 * ```
 * az storage share stats --name
 *                        [--account-key]
 *                        [--account-name]
 *                        [--connection-string]
 *                        [--sas-token]
 *                        [--subscription]
 *                        [--timeout]
 * ```
 *
 * @param {string} name The file share name.
 */
declare class az_storage_share_stats_command_builder extends CommandBuilder<az_storage_share_stats_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string);
    /** The file share name. */
    name(value: string): az_storage_share_stats_command_builder;
    /** Storage account key. Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_KEY. */
    accountKey(value: string): az_storage_share_stats_command_builder;
    /** Storage account name. Related environment variable: AZURE_STORAGE_ACCOUNT. Must be used in conjunction with either storage account key or a SAS token. If neither are present, the command will try to query the storage account key using the authenticated Azure account. If a large number of storage commands are executed the API quota may be hit. */
    accountName(value: string): az_storage_share_stats_command_builder;
    /** Storage account connection string. Environment variable: AZURE_STORAGE_CONNECTION_STRING. */
    connectionString(value: string): az_storage_share_stats_command_builder;
    /** A Shared Access Signature (SAS). Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_SAS_TOKEN. */
    sasToken(value: string): az_storage_share_stats_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_storage_share_stats_command_builder;
    /** Request timeout in seconds. Applies to each call to the service. */
    timeout(value: string): az_storage_share_stats_command_builder;
}
/**
 * Sets service-defined properties for the specified share.
 *
 * Syntax:
 * ```
 * az storage share update --name
 *                         --quota
 *                         [--account-key]
 *                         [--account-name]
 *                         [--connection-string]
 *                         [--sas-token]
 *                         [--subscription]
 *                         [--timeout]
 * ```
 *
 * @param {string} name The file share name.
 * @param {string} quota Specifies the maximum size of the share, in gigabytes. Must be greater than 0, and less than or equal to 5 TB (5120 GB).
 */
declare class az_storage_share_update_command_builder extends CommandBuilder<az_storage_share_update_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string, quota: string);
    /** The file share name. */
    name(value: string): az_storage_share_update_command_builder;
    /** Specifies the maximum size of the share, in gigabytes. Must be greater than 0, and less than or equal to 5 TB (5120 GB). */
    quota(value: string): az_storage_share_update_command_builder;
    /** Storage account key. Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_KEY. */
    accountKey(value: string): az_storage_share_update_command_builder;
    /** Storage account name. Related environment variable: AZURE_STORAGE_ACCOUNT. Must be used in conjunction with either storage account key or a SAS token. If neither are present, the command will try to query the storage account key using the authenticated Azure account. If a large number of storage commands are executed the API quota may be hit. */
    accountName(value: string): az_storage_share_update_command_builder;
    /** Storage account connection string. Environment variable: AZURE_STORAGE_CONNECTION_STRING. */
    connectionString(value: string): az_storage_share_update_command_builder;
    /** A Shared Access Signature (SAS). Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_SAS_TOKEN. */
    sasToken(value: string): az_storage_share_update_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_storage_share_update_command_builder;
    /** Request timeout in seconds. Applies to each call to the service. */
    timeout(value: string): az_storage_share_update_command_builder;
}
/**
 * Create a URI to access a file share.
 *
 * Syntax:
 * ```
 * az storage share url --name
 *                      [--account-key]
 *                      [--account-name]
 *                      [--connection-string]
 *                      [--protocol {http, https}]
 *                      [--sas-token]
 *                      [--subscription]
 *                      [--unc]
 * ```
 *
 * @param {string} name The file share name.
 */
declare class az_storage_share_url_command_builder extends CommandBuilder<az_storage_share_url_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string);
    /** The file share name. */
    name(value: string): az_storage_share_url_command_builder;
    /** Storage account key. Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_KEY. */
    accountKey(value: string): az_storage_share_url_command_builder;
    /** Storage account name. Related environment variable: AZURE_STORAGE_ACCOUNT. Must be used in conjunction with either storage account key or a SAS token. If neither are present, the command will try to query the storage account key using the authenticated Azure account. If a large number of storage commands are executed the API quota may be hit. */
    accountName(value: string): az_storage_share_url_command_builder;
    /** Storage account connection string. Environment variable: AZURE_STORAGE_CONNECTION_STRING. */
    connectionString(value: string): az_storage_share_url_command_builder;
    /** Protocol to use. */
    protocol(value: 'http' | 'https'): az_storage_share_url_command_builder;
    /** A Shared Access Signature (SAS). Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_SAS_TOKEN. */
    sasToken(value: string): az_storage_share_url_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_storage_share_url_command_builder;
    /** Output UNC network path. */
    unc(value: string): az_storage_share_url_command_builder;
}
/**
 * Create a stored access policy on the containing object.
 *
 * Syntax:
 * ```
 * az storage table policy create --name
 *                                --table-name
 *                                [--account-key]
 *                                [--account-name]
 *                                [--connection-string]
 *                                [--expiry]
 *                                [--permissions]
 *                                [--sas-token]
 *                                [--start]
 *                                [--subscription]
 * ```
 *
 * @param {string} name The stored access policy name.
 * @param {string} tableName The container name.
 */
declare class az_storage_table_policy_create_command_builder extends CommandBuilder<az_storage_table_policy_create_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string, tableName: string);
    /** The stored access policy name. */
    name(value: string): az_storage_table_policy_create_command_builder;
    /** The container name. */
    tableName(value: string): az_storage_table_policy_create_command_builder;
    /** Storage account key. Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_KEY. */
    accountKey(value: string): az_storage_table_policy_create_command_builder;
    /** Storage account name. Related environment variable: AZURE_STORAGE_ACCOUNT. Must be used in conjunction with either storage account key or a SAS token. If neither are present, the command will try to query the storage account key using the authenticated Azure account. If a large number of storage commands are executed the API quota may be hit. */
    accountName(value: string): az_storage_table_policy_create_command_builder;
    /** Storage account connection string. Environment variable: AZURE_STORAGE_CONNECTION_STRING. */
    connectionString(value: string): az_storage_table_policy_create_command_builder;
    /** Expiration UTC datetime in (Y-m-d'T'H:M:S'Z'). */
    expiry(value: string): az_storage_table_policy_create_command_builder;
    /** Allowed values: (r)ead/query (a)dd (u)pdate (d)elete. Can be combined. */
    permissions(value: string): az_storage_table_policy_create_command_builder;
    /** A Shared Access Signature (SAS). Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_SAS_TOKEN. */
    sasToken(value: string): az_storage_table_policy_create_command_builder;
    /** Start UTC datetime (Y-m-d'T'H:M:S'Z'). Defaults to time of request. */
    start(value: string): az_storage_table_policy_create_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_storage_table_policy_create_command_builder;
}
/**
 * Delete a stored access policy on a containing object.
 *
 * Syntax:
 * ```
 * az storage table policy delete --name
 *                                --table-name
 *                                [--account-key]
 *                                [--account-name]
 *                                [--connection-string]
 *                                [--sas-token]
 *                                [--subscription]
 * ```
 *
 * @param {string} name The stored access policy name.
 * @param {string} tableName The container name.
 */
declare class az_storage_table_policy_delete_command_builder extends CommandBuilder<az_storage_table_policy_delete_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string, tableName: string);
    /** The stored access policy name. */
    name(value: string): az_storage_table_policy_delete_command_builder;
    /** The container name. */
    tableName(value: string): az_storage_table_policy_delete_command_builder;
    /** Storage account key. Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_KEY. */
    accountKey(value: string): az_storage_table_policy_delete_command_builder;
    /** Storage account name. Related environment variable: AZURE_STORAGE_ACCOUNT. Must be used in conjunction with either storage account key or a SAS token. If neither are present, the command will try to query the storage account key using the authenticated Azure account. If a large number of storage commands are executed the API quota may be hit. */
    accountName(value: string): az_storage_table_policy_delete_command_builder;
    /** Storage account connection string. Environment variable: AZURE_STORAGE_CONNECTION_STRING. */
    connectionString(value: string): az_storage_table_policy_delete_command_builder;
    /** A Shared Access Signature (SAS). Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_SAS_TOKEN. */
    sasToken(value: string): az_storage_table_policy_delete_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_storage_table_policy_delete_command_builder;
}
/**
 * List stored access policies on a containing object.
 *
 * Syntax:
 * ```
 * az storage table policy list --table-name
 *                              [--account-key]
 *                              [--account-name]
 *                              [--connection-string]
 *                              [--query-examples]
 *                              [--sas-token]
 *                              [--subscription]
 * ```
 *
 * @param {string} tableName The container name.
 */
declare class az_storage_table_policy_list_command_builder extends CommandBuilder<az_storage_table_policy_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, tableName: string);
    /** The container name. */
    tableName(value: string): az_storage_table_policy_list_command_builder;
    /** Storage account key. Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_KEY. */
    accountKey(value: string): az_storage_table_policy_list_command_builder;
    /** Storage account name. Related environment variable: AZURE_STORAGE_ACCOUNT. Must be used in conjunction with either storage account key or a SAS token. If neither are present, the command will try to query the storage account key using the authenticated Azure account. If a large number of storage commands are executed the API quota may be hit. */
    accountName(value: string): az_storage_table_policy_list_command_builder;
    /** Storage account connection string. Environment variable: AZURE_STORAGE_CONNECTION_STRING. */
    connectionString(value: string): az_storage_table_policy_list_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_storage_table_policy_list_command_builder;
    /** A Shared Access Signature (SAS). Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_SAS_TOKEN. */
    sasToken(value: string): az_storage_table_policy_list_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_storage_table_policy_list_command_builder;
}
/**
 * Show a stored access policy on a containing object.
 *
 * Syntax:
 * ```
 * az storage table policy show --name
 *                              --table-name
 *                              [--account-key]
 *                              [--account-name]
 *                              [--connection-string]
 *                              [--query-examples]
 *                              [--sas-token]
 *                              [--subscription]
 * ```
 *
 * @param {string} name The stored access policy name.
 * @param {string} tableName The container name.
 */
declare class az_storage_table_policy_show_command_builder extends CommandBuilder<az_storage_table_policy_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string, tableName: string);
    /** The stored access policy name. */
    name(value: string): az_storage_table_policy_show_command_builder;
    /** The container name. */
    tableName(value: string): az_storage_table_policy_show_command_builder;
    /** Storage account key. Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_KEY. */
    accountKey(value: string): az_storage_table_policy_show_command_builder;
    /** Storage account name. Related environment variable: AZURE_STORAGE_ACCOUNT. Must be used in conjunction with either storage account key or a SAS token. If neither are present, the command will try to query the storage account key using the authenticated Azure account. If a large number of storage commands are executed the API quota may be hit. */
    accountName(value: string): az_storage_table_policy_show_command_builder;
    /** Storage account connection string. Environment variable: AZURE_STORAGE_CONNECTION_STRING. */
    connectionString(value: string): az_storage_table_policy_show_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_storage_table_policy_show_command_builder;
    /** A Shared Access Signature (SAS). Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_SAS_TOKEN. */
    sasToken(value: string): az_storage_table_policy_show_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_storage_table_policy_show_command_builder;
}
/**
 * Set a stored access policy on a containing object.
 *
 * Syntax:
 * ```
 * az storage table policy update --name
 *                                --table-name
 *                                [--account-key]
 *                                [--account-name]
 *                                [--connection-string]
 *                                [--expiry]
 *                                [--permissions]
 *                                [--sas-token]
 *                                [--start]
 *                                [--subscription]
 * ```
 *
 * @param {string} name The stored access policy name.
 * @param {string} tableName The container name.
 */
declare class az_storage_table_policy_update_command_builder extends CommandBuilder<az_storage_table_policy_update_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string, tableName: string);
    /** The stored access policy name. */
    name(value: string): az_storage_table_policy_update_command_builder;
    /** The container name. */
    tableName(value: string): az_storage_table_policy_update_command_builder;
    /** Storage account key. Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_KEY. */
    accountKey(value: string): az_storage_table_policy_update_command_builder;
    /** Storage account name. Related environment variable: AZURE_STORAGE_ACCOUNT. Must be used in conjunction with either storage account key or a SAS token. If neither are present, the command will try to query the storage account key using the authenticated Azure account. If a large number of storage commands are executed the API quota may be hit. */
    accountName(value: string): az_storage_table_policy_update_command_builder;
    /** Storage account connection string. Environment variable: AZURE_STORAGE_CONNECTION_STRING. */
    connectionString(value: string): az_storage_table_policy_update_command_builder;
    /** Expiration UTC datetime in (Y-m-d'T'H:M:S'Z'). */
    expiry(value: string): az_storage_table_policy_update_command_builder;
    /** Allowed values: (r)ead/query (a)dd (u)pdate (d)elete. Can be combined. */
    permissions(value: string): az_storage_table_policy_update_command_builder;
    /** A Shared Access Signature (SAS). Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_SAS_TOKEN. */
    sasToken(value: string): az_storage_table_policy_update_command_builder;
    /** Start UTC datetime (Y-m-d'T'H:M:S'Z'). Defaults to time of request. */
    start(value: string): az_storage_table_policy_update_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_storage_table_policy_update_command_builder;
}
/**
 * Creates a new table in the storage account.
 *
 * Syntax:
 * ```
 * az storage table create --name
 *                         [--account-key]
 *                         [--account-name]
 *                         [--connection-string]
 *                         [--fail-on-exist]
 *                         [--sas-token]
 *                         [--subscription]
 *                         [--timeout]
 * ```
 *
 * @param {string} name The name of the table to create. The table name may contain only alphanumeric characters and cannot begin with a numeric character. It is case-insensitive and must be from 3 to 63 characters long.
 */
declare class az_storage_table_create_command_builder extends CommandBuilder<az_storage_table_create_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string);
    /** The name of the table to create. The table name may contain only alphanumeric characters and cannot begin with a numeric character. It is case-insensitive and must be from 3 to 63 characters long. */
    name(value: string): az_storage_table_create_command_builder;
    /** Storage account key. Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_KEY. */
    accountKey(value: string): az_storage_table_create_command_builder;
    /** Storage account name. Related environment variable: AZURE_STORAGE_ACCOUNT. Must be used in conjunction with either storage account key or a SAS token. If neither are present, the command will try to query the storage account key using the authenticated Azure account. If a large number of storage commands are executed the API quota may be hit. */
    accountName(value: string): az_storage_table_create_command_builder;
    /** Storage account connection string. Environment variable: AZURE_STORAGE_CONNECTION_STRING. */
    connectionString(value: string): az_storage_table_create_command_builder;
    /** Throw an exception if the table already exists. */
    failOnExist(value: string): az_storage_table_create_command_builder;
    /** A Shared Access Signature (SAS). Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_SAS_TOKEN. */
    sasToken(value: string): az_storage_table_create_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_storage_table_create_command_builder;
    /** Request timeout in seconds. Applies to each call to the service. */
    timeout(value: string): az_storage_table_create_command_builder;
}
/**
 * Deletes the specified table and any data it contains.
 *
 * Syntax:
 * ```
 * az storage table delete --name
 *                         [--account-key]
 *                         [--account-name]
 *                         [--connection-string]
 *                         [--fail-not-exist]
 *                         [--sas-token]
 *                         [--subscription]
 *                         [--timeout]
 * ```
 *
 * @param {string} name The name of the table to delete.
 */
declare class az_storage_table_delete_command_builder extends CommandBuilder<az_storage_table_delete_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string);
    /** The name of the table to delete. */
    name(value: string): az_storage_table_delete_command_builder;
    /** Storage account key. Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_KEY. */
    accountKey(value: string): az_storage_table_delete_command_builder;
    /** Storage account name. Related environment variable: AZURE_STORAGE_ACCOUNT. Must be used in conjunction with either storage account key or a SAS token. If neither are present, the command will try to query the storage account key using the authenticated Azure account. If a large number of storage commands are executed the API quota may be hit. */
    accountName(value: string): az_storage_table_delete_command_builder;
    /** Storage account connection string. Environment variable: AZURE_STORAGE_CONNECTION_STRING. */
    connectionString(value: string): az_storage_table_delete_command_builder;
    /** Specifies whether to throw an exception if the table doesn't exist. */
    failNotExist(value: string): az_storage_table_delete_command_builder;
    /** A Shared Access Signature (SAS). Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_SAS_TOKEN. */
    sasToken(value: string): az_storage_table_delete_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_storage_table_delete_command_builder;
    /** Request timeout in seconds. Applies to each call to the service. */
    timeout(value: string): az_storage_table_delete_command_builder;
}
/**
 * Returns a boolean indicating whether the table exists.
 *
 * Syntax:
 * ```
 * az storage table exists --name
 *                         [--account-key]
 *                         [--account-name]
 *                         [--connection-string]
 *                         [--sas-token]
 *                         [--subscription]
 *                         [--timeout]
 * ```
 *
 * @param {string} name The name of table to check for existence.
 */
declare class az_storage_table_exists_command_builder extends CommandBuilder<az_storage_table_exists_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string);
    /** The name of table to check for existence. */
    name(value: string): az_storage_table_exists_command_builder;
    /** Storage account key. Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_KEY. */
    accountKey(value: string): az_storage_table_exists_command_builder;
    /** Storage account name. Related environment variable: AZURE_STORAGE_ACCOUNT. Must be used in conjunction with either storage account key or a SAS token. If neither are present, the command will try to query the storage account key using the authenticated Azure account. If a large number of storage commands are executed the API quota may be hit. */
    accountName(value: string): az_storage_table_exists_command_builder;
    /** Storage account connection string. Environment variable: AZURE_STORAGE_CONNECTION_STRING. */
    connectionString(value: string): az_storage_table_exists_command_builder;
    /** A Shared Access Signature (SAS). Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_SAS_TOKEN. */
    sasToken(value: string): az_storage_table_exists_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_storage_table_exists_command_builder;
    /** Request timeout in seconds. Applies to each call to the service. */
    timeout(value: string): az_storage_table_exists_command_builder;
}
/**
 * Generates a shared access signature for the table.
 *
 * Syntax:
 * ```
 * az storage table generate-sas --name
 *                               [--account-key]
 *                               [--account-name]
 *                               [--connection-string]
 *                               [--end-pk]
 *                               [--end-rk]
 *                               [--expiry]
 *                               [--https-only]
 *                               [--ip]
 *                               [--permissions]
 *                               [--policy-name]
 *                               [--start]
 *                               [--start-pk]
 *                               [--start-rk]
 *                               [--subscription]
 * ```
 *
 * @param {string} name The name of the table to create a SAS token for.
 */
declare class az_storage_table_generate_sas_command_builder extends CommandBuilder<az_storage_table_generate_sas_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string);
    /** The name of the table to create a SAS token for. */
    name(value: string): az_storage_table_generate_sas_command_builder;
    /** Storage account key. Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_KEY. */
    accountKey(value: string): az_storage_table_generate_sas_command_builder;
    /** Storage account name. Related environment variable: AZURE_STORAGE_ACCOUNT. Must be used in conjunction with either storage account key or a SAS token. If neither are present, the command will try to query the storage account key using the authenticated Azure account. If a large number of storage commands are executed the API quota may be hit. */
    accountName(value: string): az_storage_table_generate_sas_command_builder;
    /** Storage account connection string. Environment variable: AZURE_STORAGE_CONNECTION_STRING. */
    connectionString(value: string): az_storage_table_generate_sas_command_builder;
    /** The maximum partition key accessible with this shared access signature. endpk must accompany endrk. Key values are inclusive. If omitted, there is no upper bound on the table entities that can be accessed. */
    endPk(value: string): az_storage_table_generate_sas_command_builder;
    /** The maximum row key accessible with this shared access signature. endpk must accompany endrk. Key values are inclusive. If omitted, there is no upper bound on the table entities that can be accessed. */
    endRk(value: string): az_storage_table_generate_sas_command_builder;
    /** Specifies the UTC datetime (Y-m-d'T'H:M'Z') at which the SAS becomes invalid. Do not use if a stored access policy is referenced with --id that specifies this value. */
    expiry(value: string): az_storage_table_generate_sas_command_builder;
    /** Only permit requests made with the HTTPS protocol. If omitted, requests from both the HTTP and HTTPS protocol are permitted. */
    httpsOnly(value: string): az_storage_table_generate_sas_command_builder;
    /** Specifies the IP address or range of IP addresses from which to accept requests. Supports only IPv4 style addresses. */
    ip(value: string): az_storage_table_generate_sas_command_builder;
    /** The permissions the SAS grants. Allowed values: (r)ead/query (a)dd (u)pdate (d)elete. Do not use if a stored access policy is referenced with --id that specifies this value. Can be combined. */
    permissions(value: string): az_storage_table_generate_sas_command_builder;
    /** The name of a stored access policy within the table's ACL. */
    policyName(value: string): az_storage_table_generate_sas_command_builder;
    /** Specifies the UTC datetime (Y-m-d'T'H:M'Z') at which the SAS becomes valid. Do not use if a stored access policy is referenced with --id that specifies this value. Defaults to the time of the request. */
    start(value: string): az_storage_table_generate_sas_command_builder;
    /** The minimum partition key accessible with this shared access signature. startpk must accompany startrk. Key values are inclusive. If omitted, there is no lower bound on the table entities that can be accessed. */
    startPk(value: string): az_storage_table_generate_sas_command_builder;
    /** The minimum row key accessible with this shared access signature. startpk must accompany startrk. Key values are inclusive. If omitted, there is no lower bound on the table entities that can be accessed. */
    startRk(value: string): az_storage_table_generate_sas_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_storage_table_generate_sas_command_builder;
}
/**
 * List tables in a storage account.
 *
 * Syntax:
 * ```
 * az storage table list [--account-key]
 *                       [--account-name]
 *                       [--connection-string]
 *                       [--marker]
 *                       [--num-results]
 *                       [--query-examples]
 *                       [--sas-token]
 *                       [--subscription]
 *                       [--timeout]
 * ```
 */
declare class az_storage_table_list_command_builder extends CommandBuilder<az_storage_table_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** Storage account key. Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_KEY. */
    accountKey(value: string): az_storage_table_list_command_builder;
    /** Storage account name. Related environment variable: AZURE_STORAGE_ACCOUNT. Must be used in conjunction with either storage account key or a SAS token. If neither are present, the command will try to query the storage account key using the authenticated Azure account. If a large number of storage commands are executed the API quota may be hit. */
    accountName(value: string): az_storage_table_list_command_builder;
    /** Storage account connection string. Environment variable: AZURE_STORAGE_CONNECTION_STRING. */
    connectionString(value: string): az_storage_table_list_command_builder;
    /** An opaque continuation object. This value can be retrieved from the next_marker field of a previous generator object if num_results was specified and that generator has finished enumerating results. If specified, this generator will begin returning results from the point where the previous generator stopped. */
    marker(value: string): az_storage_table_list_command_builder;
    /** The maximum number of tables to return. */
    numResults(value: string): az_storage_table_list_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_storage_table_list_command_builder;
    /** A Shared Access Signature (SAS). Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_SAS_TOKEN. */
    sasToken(value: string): az_storage_table_list_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_storage_table_list_command_builder;
    /** Request timeout in seconds. Applies to each call to the service. */
    timeout(value: string): az_storage_table_list_command_builder;
}
/**
 * Retrieves statistics related to replication for the Table service.
 *
 * Syntax:
 * ```
 * az storage table stats [--account-key]
 *                        [--account-name]
 *                        [--connection-string]
 *                        [--sas-token]
 *                        [--subscription]
 *                        [--timeout]
 * ```
 */
declare class az_storage_table_stats_command_builder extends CommandBuilder<az_storage_table_stats_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** Storage account key. Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_KEY. */
    accountKey(value: string): az_storage_table_stats_command_builder;
    /** Storage account name. Related environment variable: AZURE_STORAGE_ACCOUNT. Must be used in conjunction with either storage account key or a SAS token. If neither are present, the command will try to query the storage account key using the authenticated Azure account. If a large number of storage commands are executed the API quota may be hit. */
    accountName(value: string): az_storage_table_stats_command_builder;
    /** Storage account connection string. Environment variable: AZURE_STORAGE_CONNECTION_STRING. */
    connectionString(value: string): az_storage_table_stats_command_builder;
    /** A Shared Access Signature (SAS). Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_SAS_TOKEN. */
    sasToken(value: string): az_storage_table_stats_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_storage_table_stats_command_builder;
    /** Request timeout in seconds. Applies to each call to the service. */
    timeout(value: string): az_storage_table_stats_command_builder;
}
/**
 * Copy files or directories to or from Azure storage.
 *
 * Syntax:
 * ```
 * az storage copy [--account-key]
 *                 [--account-name]
 *                 [--blob-type {AppendBlob, BlockBlob, PageBlob}]
 *                 [--connection-string]
 *                 [--content-type]
 *                 [--destination]
 *                 [--destination-account-name]
 *                 [--destination-blob]
 *                 [--destination-container]
 *                 [--destination-file-path]
 *                 [--destination-local-path]
 *                 [--destination-share]
 *                 [--exclude-path]
 *                 [--exclude-pattern]
 *                 [--follow-symlinks]
 *                 [--include-path]
 *                 [--include-pattern]
 *                 [--preserve-s2s-access-tier {false, true}]
 *                 [--put-md5]
 *                 [--recursive]
 *                 [--sas-token]
 *                 [--source]
 *                 [--source-account-key]
 *                 [--source-account-name]
 *                 [--source-blob]
 *                 [--source-connection-string]
 *                 [--source-container]
 *                 [--source-file-path]
 *                 [--source-local-path]
 *                 [--source-sas]
 *                 [--source-share]
 *                 [--subscription]
 * ```
 */
declare class az_storage_copy_command_builder extends CommandBuilder<az_storage_copy_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** Storage account key. Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_KEY. */
    accountKey(value: string): az_storage_copy_command_builder;
    /** Storage account name of copy destination. */
    accountName(value: string): az_storage_copy_command_builder;
    /** The type of blob at the destination. */
    blobType(value: 'AppendBlob' | 'BlockBlob' | 'PageBlob'): az_storage_copy_command_builder;
    /** Storage account connection string. Environment variable: AZURE_STORAGE_CONNECTION_STRING. */
    connectionString(value: string): az_storage_copy_command_builder;
    /** Specify content type of the file. */
    contentType(value: string): az_storage_copy_command_builder;
    /** The path/url of copy destination. It can be a local path, an url to azure storage server. If you provide destination parameter here, you do not need to provide arguments in copy destination arguments group and copy destination arguments will be deprecated in future. */
    destination(value: string): az_storage_copy_command_builder;
    /** Storage account name of copy destination. */
    destinationAccountName(value: string): az_storage_copy_command_builder;
    /** Blob name in blob container of copy destination storage account. */
    destinationBlob(value: string): az_storage_copy_command_builder;
    /** Container name of copy destination storage account. */
    destinationContainer(value: string): az_storage_copy_command_builder;
    /** File path in file share of copy destination storage account. */
    destinationFilePath(value: string): az_storage_copy_command_builder;
    /** The path/url of copy destination. It can be a local path, an url to azure storage server. If you provide destination parameter here, you do not need to provide arguments in copy destination arguments group and copy destination arguments will be deprecated in future. */
    destinationLocalPath(value: string): az_storage_copy_command_builder;
    /** File share name of copy destination storage account. */
    destinationShare(value: string): az_storage_copy_command_builder;
    /** Exclude these paths. This option does not support wildcard characters (\*). Checks relative path prefix. For example: myFolder;myFolder/subDirName/file.pdf. */
    excludePath(value: string): az_storage_copy_command_builder;
    /** Exclude these files where the name matches the pattern list. For example: \*.jpg;\*.pdf;exactName. This option supports wildcard characters (\*). */
    excludePattern(value: string): az_storage_copy_command_builder;
    /** Follow symbolic links when uploading from local file system. */
    followSymlinks(value: string): az_storage_copy_command_builder;
    /** Include only these paths. This option does not support wildcard characters (\*). Checks relative path prefix. For example:myFolder;myFolder/subDirName/file.pdf. */
    includePath(value: string): az_storage_copy_command_builder;
    /** Include only these files where the name matches the pattern list. For example: \*.jpg;\*.pdf;exactName. This option supports wildcard characters (\*). */
    includePattern(value: string): az_storage_copy_command_builder;
    /** Preserve access tier during service to service copy. Please refer to <a href="https://docs.microsoft.com/en-us/azure/storage/blobs/storage-blob-storage-tiers">https://docs.microsoft.com/en-us/azure/storage/blobs/storage-blob-storage-tiers</a> to ensure destination storage account support setting access tier. In the cases that setting access tier is not supported, please use `--preserve-s2s-access-tier false` to bypass copying access tier. (Default true). */
    preserveS2SAccessTier(value: boolean): az_storage_copy_command_builder;
    /** Create an MD5 hash of each file, and save the hash as the Content-MD5 property of the destination blob/file.Only available when uploading. */
    putMd5(value: string): az_storage_copy_command_builder;
    /** Look into sub-directories recursively. */
    recursive(value: string): az_storage_copy_command_builder;
    /** A Shared Access Signature (SAS). Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_SAS_TOKEN. */
    sasToken(value: string): az_storage_copy_command_builder;
    /** The path/url of copy source. It can be a local path, an url to azure storage server or AWS S3 buckets. If you provide source parameter here, you do not need to provide arguments in copy source arguments group and copy source arguments will be deprecated in future. */
    source(value: string): az_storage_copy_command_builder;
    /** Account key of copy source storage account. Must be used in conjunction with source storage account name. */
    sourceAccountKey(value: string): az_storage_copy_command_builder;
    /** Account name of copy source storage account. */
    sourceAccountName(value: string): az_storage_copy_command_builder;
    /** Blob name in blob container of copy source storage account. */
    sourceBlob(value: string): az_storage_copy_command_builder;
    /** Connection string of source storage account. */
    sourceConnectionString(value: string): az_storage_copy_command_builder;
    /** Container name of copy source storage account. */
    sourceContainer(value: string): az_storage_copy_command_builder;
    /** File path in file share of copy source storage account. */
    sourceFilePath(value: string): az_storage_copy_command_builder;
    /** The path/url of copy source. It can be a local path, an url to azure storage server or AWS S3 buckets. If you provide source parameter here, you do not need to provide arguments in copy source arguments group and copy source arguments will be deprecated in future. */
    sourceLocalPath(value: string): az_storage_copy_command_builder;
    /** Shared Access Signature (SAS) token of copy source. Must be used in conjunction with source storage account name. */
    sourceSas(value: string): az_storage_copy_command_builder;
    /** File share name of copy source storage account. */
    sourceShare(value: string): az_storage_copy_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_storage_copy_command_builder;
}
/**
 * Delete blobs or files from Azure Storage.
 *
 * Syntax:
 * ```
 * az storage remove [--account-key]
 *                   [--account-name]
 *                   [--connection-string]
 *                   [--container-name]
 *                   [--exclude-path]
 *                   [--exclude-pattern]
 *                   [--include-path]
 *                   [--include-pattern]
 *                   [--name]
 *                   [--path]
 *                   [--recursive]
 *                   [--sas-token]
 *                   [--share-name]
 *                   [--subscription]
 * ```
 */
declare class az_storage_remove_command_builder extends CommandBuilder<az_storage_remove_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** Storage account key. Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_KEY. */
    accountKey(value: string): az_storage_remove_command_builder;
    /** Storage account name. Related environment variable: AZURE_STORAGE_ACCOUNT. Must be used in conjunction with either storage account key or a SAS token. If neither are present, the command will try to query the storage account key using the authenticated Azure account. If a large number of storage commands are executed the API quota may be hit. */
    accountName(value: string): az_storage_remove_command_builder;
    /** Storage account connection string. Environment variable: AZURE_STORAGE_CONNECTION_STRING. */
    connectionString(value: string): az_storage_remove_command_builder;
    /** The container name. */
    containerName(value: string): az_storage_remove_command_builder;
    /** Exclude these paths. This option does not support wildcard characters (\*). Checks relative path prefix. For example: myFolder;myFolder/subDirName/file.pdf. */
    excludePath(value: string): az_storage_remove_command_builder;
    /** Exclude these files where the name matches the pattern list. For example: \*.jpg;\*.pdf;exactName. This option supports wildcard characters (\*). */
    excludePattern(value: string): az_storage_remove_command_builder;
    /** Include only these paths. This option does not support wildcard characters (\*). Checks relative path prefix. For example:myFolder;myFolder/subDirName/file.pdf. */
    includePath(value: string): az_storage_remove_command_builder;
    /** Include only these files where the name matches the pattern list. For example: \*.jpg;\*.pdf;exactName. This option supports wildcard characters (\*). */
    includePattern(value: string): az_storage_remove_command_builder;
    /** The blob name. */
    name(value: string): az_storage_remove_command_builder;
    /** The path to the file within the file share. */
    path(value: string): az_storage_remove_command_builder;
    /** Look into sub-directories recursively. */
    recursive(value: string): az_storage_remove_command_builder;
    /** A Shared Access Signature (SAS). Must be used in conjunction with storage account name. Environment variable: AZURE_STORAGE_SAS_TOKEN. */
    sasToken(value: string): az_storage_remove_command_builder;
    /** The file share name. */
    shareName(value: string): az_storage_remove_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_storage_remove_command_builder;
}
export {};
