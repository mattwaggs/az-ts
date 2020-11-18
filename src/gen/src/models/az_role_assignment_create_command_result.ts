export interface az_role_assignment_create_command_result {
  canDelegate?: any;
  condition?: any;
  conditionVersion?: any;
  description?: any;
  id: string;
  name: string;
  principalId: string;
  principalType: string;
  resourceGroup: string;
  roleDefinitionId: string;
  scope: string;
  type: string;
  principalName?: string;
  roleDefinitionName?: string;
}