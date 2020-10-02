export declare type az_group_show_command_result = az_group_show_command_result_item[];
interface az_group_show_command_result_item {
    id: string;
    location: string;
    managedBy?: any;
    name: string;
    properties: Properties;
    tags?: any;
    type: string;
}
interface Properties {
    provisioningState: string;
}
export {};
