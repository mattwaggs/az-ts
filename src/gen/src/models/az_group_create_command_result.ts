export type az_group_create_command_result = az_group_create_command_result_item[];

interface az_group_create_command_result_item {
  id: string;
  location: string;
  managedBy?: any;
  name: string;
  properties: Properties;
  tags?: any;
  type: string;
}

interface Properties {
  provisioningState: string;
}