export type az_ad_group_member_list_command_result = az_ad_group_member_list_command_result_item[];

interface az_ad_group_member_list_command_result_item {
  accountEnabled: boolean;
  ageGroup?: any;
  assignedLicenses: any[];
  assignedPlans: any[];
  city?: any;
  companyName?: any;
  consentProvidedForMinor?: any;
  country?: any;
  createdDateTime: string;
  creationType?: any;
  deletionTimestamp?: any;
  department?: any;
  dirSyncEnabled?: any;
  displayName: string;
  employeeId?: any;
  facsimileTelephoneNumber?: any;
  givenName?: any;
  immutableId?: any;
  isCompromised?: any;
  jobTitle?: any;
  lastDirSyncTime?: any;
  legalAgeGroupClassification?: any;
  mail?: any;
  mailNickname: string;
  mobile?: any;
  objectId: string;
  objectType: string;
  'odata.type': string;
  onPremisesDistinguishedName?: any;
  onPremisesSecurityIdentifier?: any;
  otherMails: any[];
  passwordPolicies?: any;
  passwordProfile?: any;
  physicalDeliveryOfficeName?: any;
  postalCode?: any;
  preferredLanguage?: any;
  provisionedPlans: any[];
  provisioningErrors: any[];
  proxyAddresses: any[];
  refreshTokensValidFromDateTime: string;
  showInAddressList?: any;
  signInNames: any[];
  sipProxyAddress?: any;
  state?: any;
  streetAddress?: any;
  surname?: any;
  telephoneNumber?: any;
  'thumbnailPhoto@odata.mediaEditLink': string;
  usageLocation?: any;
  userIdentities: any[];
  userPrincipalName: string;
  userState?: any;
  userStateChangedOn?: any;
  userType: string;
}