export interface az_keyvault_create_command_result {
  id: string;
  location: string;
  name: string;
  properties: Properties;
  resourceGroup: string;
  tags: Tags;
  type: string;
}

export interface Tags {
}

export interface Properties {
  accessPolicies: AccessPolicies;
  createMode?: any;
  enablePurgeProtection?: any;
  enableRbacAuthorization?: any;
  enableSoftDelete: boolean;
  enabledForDeployment: boolean;
  enabledForDiskEncryption?: any;
  enabledForTemplateDeployment?: any;
  networkAcls?: any;
  privateEndpointConnections?: any;
  provisioningState: string;
  sku: Sku;
  softDeleteRetentionInDays: number;
  tenantId: string;
  vaultUri: string;
}

export interface Sku {
  name: string;
}

export interface AccessPolicies {
  '0': _0;
}

export interface _0 {
  applicationId?: any;
  objectId: string;
  permissions: Permissions;
  tenantId: string;
}

export interface Permissions {
  certificates: Certificates;
  keys: Keys;
  secrets: Secrets;
  storage: Storage;
}

export interface Storage {
  '0': string;
  '1': string;
  '2': string;
  '3': string;
  '4': string;
  '5': string;
  '6': string;
  '7': string;
  '8': string;
  '9': string;
}

export interface Secrets {
  '0': string;
  '1': string;
  '2': string;
  '3': string;
  '4': string;
  '5': string;
  '6': string;
}

export interface Keys {
  '0': string;
  '1': string;
  '2': string;
  '3': string;
  '4': string;
  '5': string;
  '6': string;
  '7': string;
  '8': string;
}

export interface Certificates {
  '0': string;
  '1': string;
  '2': string;
  '3': string;
  '4': string;
  '5': string;
  '6': string;
  '7': string;
  '8': string;
  '9': string;
  '10': string;
  '11': string;
  '12': string;
}