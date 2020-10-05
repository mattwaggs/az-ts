export interface az_keyvault_key_show_command_result {
    attributes: Attributes;
    key: Key;
    managed?: any;
    tags?: any;
}
interface Key {
    crv: string;
    d?: any;
    dp?: any;
    dq?: any;
    e?: any;
    k?: any;
    keyOps: KeyOp[];
    kid: string;
    kty: string;
    n?: any;
    p?: any;
    q?: any;
    qi?: any;
    t?: any;
    x: string;
    y: string;
}
interface KeyOp {
    '0': string;
    '1': string;
    '2': string;
    '3': string;
    '4'?: string;
    '5'?: string;
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
