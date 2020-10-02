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
  accessPolicies: AccessPolicy[];
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

export interface AccessPolicy {
  applicationId?: any;
  objectId: string;
  permissions: Permissions;
  tenantId: string;
}

export interface Permissions {
  certificates: Certificate[];
  keys: Key[];
  secrets: Key[];
  storage: Storage[];
}

export interface Storage {
  '0': string;
  '1': string;
  '2': string;
  '3'?: string;
  '4'?: string;
  '5'?: string;
  '6'?: string;
  '7'?: string;
  '8'?: string;
  '9'?: string;
  '10'?: string;
  '11'?: string;
  '12'?: string;
}

export interface Key {
  '0': string;
  '1': string;
  '2': string;
  '3'?: string;
  '4'?: string;
  '5'?: string;
  '6'?: string;
}

export interface Certificate {
  '0': string;
  '1': string;
  '2': string;
  '3'?: string;
  '4'?: string;
  '5'?: string;
  '6'?: string;
  '7'?: string;
  '8'?: string;
  '9'?: string;
  '10'?: string;
  '11'?: string;
  '12'?: string;
  '13'?: string;
}