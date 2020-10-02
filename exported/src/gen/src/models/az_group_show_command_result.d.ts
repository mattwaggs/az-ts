export interface az_group_show_command_result {
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
