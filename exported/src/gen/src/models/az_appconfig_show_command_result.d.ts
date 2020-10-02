export declare type az_appconfig_show_command_result = az_appconfig_show_command_result_item[];
interface az_appconfig_show_command_result_item {
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
interface Tags {
}
interface Sku {
    name: string;
}
interface Encryption {
    keyVaultProperties?: any;
}
export {};