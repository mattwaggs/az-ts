export interface az_group_show_command_result {
  id: string;
  location: string;
  managedBy?: any;
  name: string;
  properties: Properties;
  tags?: Tag;
  type: string;
}

interface Tag {
}

interface Properties {
  provisioningState: string;
}