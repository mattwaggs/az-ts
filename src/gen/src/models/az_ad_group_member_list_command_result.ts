export interface az_ad_group_member_list_command_result {
  '0': _0;
}

export interface _0 {
  accountEnabled: boolean;
  ageGroup?: any;
  assignedLicenses: AssignedLicenses;
  assignedPlans: AssignedLicenses;
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
  otherMails: AssignedLicenses;
  passwordPolicies?: any;
  passwordProfile?: any;
  physicalDeliveryOfficeName?: any;
  postalCode?: any;
  preferredLanguage?: any;
  provisionedPlans: AssignedLicenses;
  provisioningErrors: AssignedLicenses;
  proxyAddresses: AssignedLicenses;
  refreshTokensValidFromDateTime: string;
  showInAddressList?: any;
  signInNames: AssignedLicenses;
  sipProxyAddress?: any;
  state?: any;
  streetAddress?: any;
  surname?: any;
  telephoneNumber?: any;
  'thumbnailPhoto@odata.mediaEditLink': string;
  usageLocation?: any;
  userIdentities: AssignedLicenses;
  userPrincipalName: string;
  userState?: any;
  userStateChangedOn?: any;
  userType: string;
}

export interface AssignedLicenses {
}