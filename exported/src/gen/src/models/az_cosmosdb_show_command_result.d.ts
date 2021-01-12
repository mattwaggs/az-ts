export interface az_cosmosdb_show_command_result {
    apiProperties?: any;
    capabilities: Capability[];
    connectorOffer?: any;
    consistencyPolicy: ConsistencyPolicy;
    cors: any[];
    databaseAccountOfferType: string;
    disableKeyBasedMetadataWriteAccess: boolean;
    documentEndpoint: string;
    enableAnalyticalStorage: boolean;
    enableAutomaticFailover: boolean;
    enableCassandraConnector?: any;
    enableFreeTier: boolean;
    enableMultipleWriteLocations: boolean;
    failoverPolicies: FailoverPolicy[];
    id: string;
    ipRules: any[];
    isVirtualNetworkFilterEnabled: boolean;
    keyVaultKeyUri?: any;
    kind: string;
    location: string;
    locations: Location[];
    name: string;
    privateEndpointConnections?: any;
    provisioningState: string;
    publicNetworkAccess: string;
    readLocations: Location[];
    resourceGroup: string;
    systemData: SystemData;
    tags: Tags;
    type: string;
    virtualNetworkRules: any[];
    writeLocations: Location[];
}
interface Tags {
    CosmosAccountType: string;
    defaultExperience: string;
    'hidden-cosmos-mmspecial': string;
}
interface SystemData {
    createdAt: string;
}
interface Location {
    documentEndpoint: string;
    failoverPriority: number;
    id: string;
    isZoneRedundant: boolean;
    locationName: string;
    provisioningState: string;
}
interface FailoverPolicy {
    failoverPriority: number;
    id: string;
    locationName: string;
}
interface ConsistencyPolicy {
    defaultConsistencyLevel: string;
    maxIntervalInSeconds: number;
    maxStalenessPrefix: number;
}
interface Capability {
    name: string;
}
export {};
