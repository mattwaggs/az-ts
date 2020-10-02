export declare type az_keyvault_secret_delete_command_result = az_keyvault_secret_delete_command_result_item[];
interface az_keyvault_secret_delete_command_result_item {
    attributes: Attributes;
    contentType?: any;
    deletedDate: string;
    id: string;
    kid?: any;
    managed?: any;
    name: string;
    recoveryId: string;
    scheduledPurgeDate: string;
    tags: Tags;
    value?: any;
}
interface Tags {
    'file-encoding': string;
}
interface Attributes {
    created: string;
    enabled: boolean;
    expires?: any;
    notBefore?: any;
    recoveryLevel: string;
    updated: string;
}
export {};
