export interface az_redis_create_command_result {
    accessKeys?: any;
    enableNonSslPort: boolean;
    hostName: string;
    id: string;
    instances: Instance[];
    linkedServers: any[];
    location: string;
    minimumTlsVersion?: any;
    name: string;
    port: number;
    provisioningState: string;
    redisConfiguration: RedisConfiguration;
    redisVersion: string;
    replicasPerMaster?: any;
    resourceGroup: string;
    shardCount?: any;
    sku: Sku;
    sslPort: number;
    staticIp?: any;
    subnetId?: any;
    tags: Tags;
    tenantSettings: Tags;
    type: string;
    zones?: any;
}
interface Tags {
}
interface Sku {
    capacity: number;
    family: string;
    name: string;
}
interface RedisConfiguration {
    maxclients: string;
    'maxfragmentationmemory-reserved': string;
    'maxmemory-delta': string;
    'maxmemory-reserved': string;
}
interface Instance {
    isMaster: boolean;
    nonSslPort?: any;
    shardId?: any;
    sslPort: number;
    zone?: any;
}
export {};
