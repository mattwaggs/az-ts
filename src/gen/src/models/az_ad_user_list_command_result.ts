export interface az_ad_user_list_command_result {
  '0': _0;
  '1': _0;
  '2'?: _2;
}

export interface _2 {
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
  givenName?: string;
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
  otherMails: OtherMails;
  passwordPolicies?: any;
  passwordProfile?: any;
  physicalDeliveryOfficeName?: any;
  postalCode?: any;
  preferredLanguage?: string;
  provisionedPlans: AssignedLicenses;
  provisioningErrors: AssignedLicenses;
  proxyAddresses: AssignedLicenses;
  refreshTokensValidFromDateTime: string;
  showInAddressList?: any;
  signInNames: AssignedLicenses;
  sipProxyAddress?: any;
  state?: any;
  streetAddress?: any;
  surname?: string;
  telephoneNumber?: any;
  'thumbnailPhoto@odata.mediaEditLink': string;
  usageLocation?: string;
  userIdentities: AssignedLicenses;
  userPrincipalName: string;
  userState?: any;
  userStateChangedOn?: any;
  userType: string;
}

export interface OtherMails {
  '0'?: string;
}

export interface AssignedLicenses {
}