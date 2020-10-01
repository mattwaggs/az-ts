export interface az_keyvault_list_command_result {
  '0': _0;
  '1'?: _0;
}

export interface _0 {
  id: string;
  location: string;
  name: string;
  resourceGroup: string;
  tags: Tags;
  type: string;
}

export interface Tags {
}