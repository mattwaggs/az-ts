export type az_role_assignment_create_command_result = az_role_assignment_create_command_result_item[];

interface az_role_assignment_create_command_result_item {
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
}