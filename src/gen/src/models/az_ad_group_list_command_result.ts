export interface az_ad_group_list_command_result {
  '0'?: _0;
  '1'?: _0;
}

export interface _0 {
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
  provisioningErrors: ProvisioningErrors;
  proxyAddresses: ProvisioningErrors;
  securityEnabled: boolean;
}

export interface ProvisioningErrors {
}