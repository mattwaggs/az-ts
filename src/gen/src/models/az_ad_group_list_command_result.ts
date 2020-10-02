export type az_ad_group_list_command_result = az_ad_group_list_command_result_item[];

interface az_ad_group_list_command_result_item {
  deletionTimestamp?: any;
  description?: any;
  dirSyncEnabled?: any;
  displayName: string;
  lastDirSyncTime?: any;
  mail?: any;
  mailEnabled: boolean;
  mailNickname: string;
  objectId: string;
  objectType: string;
  'odata.type': string;
  onPremisesDomainName?: any;
  onPremisesNetBiosName?: any;
  onPremisesSamAccountName?: any;
  onPremisesSecurityIdentifier?: any;
  provisioningErrors: any[];
  proxyAddresses: any[];
  securityEnabled: boolean;
}