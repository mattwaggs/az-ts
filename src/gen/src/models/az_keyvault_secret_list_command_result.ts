export interface az_keyvault_secret_list_command_result {
  attributes: Attributes;
  contentType?: any;
  id: string;
  managed?: any;
  name: string;
  tags: Tags;
}

export interface Tags {
  'file-encoding': string;
}

export interface Attributes {
  created: string;
  enabled: boolean;
  expires?: any;
  notBefore?: any;
  recoveryLevel: string;
  updated: string;
}