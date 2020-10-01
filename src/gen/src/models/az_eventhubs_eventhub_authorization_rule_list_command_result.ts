export interface az_eventhubs_eventhub_authorization_rule_list_command_result {
  '0'?: _0;
}

export interface _0 {
  id: string;
  location: string;
  name: string;
  resourceGroup: string;
  rights: Rights;
  type: string;
}

export interface Rights {
  '0': string;
}