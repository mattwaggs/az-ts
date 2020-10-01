export interface az_keyvault_key_delete_command_result {
  attributes: Attributes;
  deletedDate: string;
  key: Key;
  managed?: any;
  recoveryId: string;
  scheduledPurgeDate: string;
  tags?: any;
}

export interface Key {
  crv: string;
  d?: any;
  dp?: any;
  dq?: any;
  e?: any;
  k?: any;
  keyOps: KeyOps;
  kid: string;
  kty: string;
  n?: any;
  p?: any;
  q?: any;
  qi?: any;
  t?: any;
  x: string;
  y: string;
}

export interface KeyOps {
  '0': string;
  '1': string;
}

export interface Attributes {
  created: string;
  enabled: boolean;
  expires?: any;
  notBefore?: any;
  recoveryLevel: string;
  updated: string;
}