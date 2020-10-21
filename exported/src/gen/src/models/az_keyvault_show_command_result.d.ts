export interface az_keyvault_show_command_result {
    id: string;
    location: string;
    name: string;
    properties: Properties;
    resourceGroup: string;
    tags: Tags;
    type: string;
}
interface Tags {
}
interface Properties {
    accessPolicies: AccessPolicy[];
    createMode?: any;
    enablePurgeProtection?: any;
    enableRbacAuthorization?: boolean;
    enableSoftDelete: boolean;
    enabledForDeployment: boolean;
    enabledForDiskEncryption?: boolean;
    enabledForTemplateDeployment?: boolean;
    networkAcls?: any;
    privateEndpointConnections?: any;
    provisioningState: string;
    sku: Sku;
    softDeleteRetentionInDays: number;
    tenantId: string;
    vaultUri: string;
}
interface Sku {
    name: string;
}
interface AccessPolicy {
    applicationId?: any;
    objectId: string;
    permissions: Permissions;
    tenantId: string;
}
interface Permissions {
    certificates: (Certificate | Certificate)[];
    keys: (Key | Key)[];
    secrets: Key[];
    storage: (Storage | Storage[] | null)[];
}
interface Storage {
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
interface Key {
    '0': string;
    '1': string;
    '2': string;
    '3'?: string;
    '4'?: string;
    '5'?: string;
    '6'?: string;
}
interface Certificate {
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
export {};
