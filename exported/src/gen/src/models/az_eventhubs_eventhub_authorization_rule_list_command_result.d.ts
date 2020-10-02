export declare type az_eventhubs_eventhub_authorization_rule_list_command_result = az_eventhubs_eventhub_authorization_rule_list_command_result_item[];
interface az_eventhubs_eventhub_authorization_rule_list_command_result_item {
    id: string;
    location: string;
    name: string;
    resourceGroup: string;
    rights: Right[];
    type: string;
}
interface Right {
    '0': string;
    '1': string;
    '2': string;
    '3': string;
    '4': string;
    '5': string;
}
export {};
