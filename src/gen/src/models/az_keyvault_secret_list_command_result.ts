export type az_keyvault_secret_list_command_result = az_keyvault_secret_list_command_result_item[];

interface az_keyvault_secret_list_command_result_item {
  attributes: Attributes;
  contentType?: any;
  id: string;
  managed?: any;
  name: string;
  tags: Tags;
}

interface Tags {
  'file-encoding': string;
}

interface Attributes {
  created: string;
  enabled: boolean;
  expires?: any;
  notBefore?: any;
  recoveryLevel: string;
  updated: string;
}