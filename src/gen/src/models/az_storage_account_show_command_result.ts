export interface az_storage_account_show_command_result {
  accessTier: string;
  allowBlobPublicAccess?: any;
  azureFilesIdentityBasedAuthentication?: any;
  blobRestoreStatus?: any;
  creationTime: string;
  customDomain?: any;
  enableHttpsTrafficOnly: boolean;
  encryption: Encryption;
  failoverInProgress?: any;
  geoReplicationStats?: any;
  id: string;
  identity?: any;
  isHnsEnabled?: any;
  kind: string;
  largeFileSharesState?: any;
  lastGeoFailoverTime?: any;
  location: string;
  minimumTlsVersion?: any;
  name: string;
  networkRuleSet: NetworkRuleSet;
  primaryEndpoints: PrimaryEndpoints;
  primaryLocation: string;
  privateEndpointConnections: IpRules;
  provisioningState: string;
  resourceGroup: string;
  routingPreference?: any;
  secondaryEndpoints?: any;
  secondaryLocation?: any;
  sku: Sku;
  statusOfPrimary: string;
  statusOfSecondary?: any;
  tags: IpRules;
  type: string;
}

export interface Sku {
  name: string;
  tier: string;
}

export interface PrimaryEndpoints {
  blob: string;
  dfs: string;
  file: string;
  internetEndpoints?: any;
  microsoftEndpoints?: any;
  queue: string;
  table: string;
  web: string;
}

export interface NetworkRuleSet {
  bypass: string;
  defaultAction: string;
  ipRules: IpRules;
  virtualNetworkRules: IpRules;
}

export interface IpRules {
}

export interface Encryption {
  keySource: string;
  keyVaultProperties?: any;
  requireInfrastructureEncryption?: any;
  services: Services;
}

export interface Services {
  blob: Blob;
  file: Blob;
  queue?: any;
  table?: any;
}

export interface Blob {
  enabled: boolean;
  keyType: string;
  lastEnabledTime: string;
}