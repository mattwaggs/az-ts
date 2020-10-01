export interface az_eventhubs_eventhub_authorization_rule_show_command_result {
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