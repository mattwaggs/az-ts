export interface az_storage_account_create_command_result {
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
    privateEndpointConnections: any[];
    provisioningState: string;
    resourceGroup: string;
    routingPreference?: any;
    secondaryEndpoints?: SecondaryEndpoint;
    secondaryLocation?: string;
    sku: Sku;
    statusOfPrimary: string;
    statusOfSecondary?: string;
    tags: Tags;
    type: string;
}
interface Tags {
}
interface Sku {
    name: string;
    tier: string;
}
interface SecondaryEndpoint {
    blob: string;
    dfs: string;
    file?: any;
    internetEndpoints?: any;
    microsoftEndpoints?: any;
    queue: string;
    table: string;
    web: string;
}
interface PrimaryEndpoints {
    blob: string;
    dfs: string;
    file: string;
    internetEndpoints?: any;
    microsoftEndpoints?: any;
    queue: string;
    table: string;
    web: string;
}
interface NetworkRuleSet {
    bypass: string;
    defaultAction: string;
    ipRules: any[];
    virtualNetworkRules: any[];
}
interface Encryption {
    keySource: string;
    keyVaultProperties?: any;
    requireInfrastructureEncryption?: any;
    services: Services;
}
interface Services {
    blob: Blob;
    file: Blob;
    queue?: any;
    table?: any;
}
interface Blob {
    enabled: boolean;
    keyType: string;
    lastEnabledTime: string;
}
export {};
