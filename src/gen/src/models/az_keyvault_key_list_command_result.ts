export interface az_keyvault_key_list_command_result {
  '0': _0;
}

export interface _0 {
  attributes: Attributes;
  kid: string;
  managed?: any;
  name: string;
  tags?: any;
}

export interface Attributes {
  created: string;
  enabled: boolean;
  expires?: any;
  notBefore?: any;
  recoveryLevel: string;
  updated: string;
}