export interface az_keyvault_secret_show_command_result {
    attributes: Attributes;
    contentType?: any;
    id: string;
    kid?: any;
    managed?: any;
    name: string;
    tags: Tags;
    value: string;
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
