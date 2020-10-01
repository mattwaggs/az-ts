export interface az_appconfig_list_command_result {
  '0': _0;
}

export interface _0 {
  creationDate: string;
  encryption: Encryption;
  endpoint: string;
  id: string;
  identity?: any;
  location: string;
  name: string;
  privateEndpointConnections?: any;
  provisioningState: string;
  publicNetworkAccess?: any;
  resourceGroup: string;
  sku: Sku;
  tags: Tags;
  type: string;
}

export interface Tags {
}

export interface Sku {
  name: string;
}

export interface Encryption {
  keyVaultProperties?: any;
}