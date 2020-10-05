export interface az_keyvault_key_list_command_result {
  attributes: Attributes;
  kid: string;
  managed?: any;
  name: string;
  tags?: any;
}

interface Attributes {
  created: string;
  enabled: boolean;
  expires?: any;
  notBefore?: any;
  recoveryLevel: string;
  updated: string;
}