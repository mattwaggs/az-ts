export type az_webapp_identity_show_command_result = az_webapp_identity_show_command_result_item[];

interface az_webapp_identity_show_command_result_item {
  principalId: string;
  tenantId: string;
  type: string;
  userAssignedIdentities?: any;
}