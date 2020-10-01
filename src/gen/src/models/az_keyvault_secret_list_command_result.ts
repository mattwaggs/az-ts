export interface az_keyvault_secret_list_command_result {
  '0'?: _0;
}

export interface _0 {
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