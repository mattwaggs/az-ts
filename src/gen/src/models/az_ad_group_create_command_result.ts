export interface az_ad_group_create_command_result {
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