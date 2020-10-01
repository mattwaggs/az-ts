export interface az_keyvault_secret_delete_command_result {
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

export interface Tags {
  'file-encoding': string;
}

export interface Attributes {
  created: string;
  enabled: boolean;
  expires?: any;
  notBefore?: any;
  recoveryLevel: string;
  updated: string;
}