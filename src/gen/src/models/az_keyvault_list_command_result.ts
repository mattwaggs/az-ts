export type az_keyvault_list_command_result = az_keyvault_list_command_result_item[];

interface az_keyvault_list_command_result_item {
  id: string;
  location: string;
  name: string;
  resourceGroup: string;
  tags: Tags;
  type: string;
}

interface Tags {
}