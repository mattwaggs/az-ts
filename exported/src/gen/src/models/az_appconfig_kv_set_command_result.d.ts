export declare type az_appconfig_kv_set_command_result = az_appconfig_kv_set_command_result_item[];
interface az_appconfig_kv_set_command_result_item {
    contentType?: any;
    etag: string;
    key: string;
    label?: any;
    lastModified: string;
    locked: boolean;
    tags: Tags;
    value: string;
}
interface Tags {
}
export {};
