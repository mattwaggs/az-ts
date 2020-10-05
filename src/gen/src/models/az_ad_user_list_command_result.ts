export interface az_ad_user_list_command_result {
  accountEnabled: boolean;
  ageGroup?: any;
  assignedLicenses: AssignedLicense[];
  assignedPlans: AssignedPlan[];
  city?: string;
  companyName?: string;
  consentProvidedForMinor?: any;
  country?: string;
  createdDateTime: string;
  creationType?: any;
  deletionTimestamp?: any;
  department?: any;
  dirSyncEnabled?: boolean;
  displayName: string;
  employeeId?: any;
  extension_00364f4ea9be43c681d472ef9d934c78_mobile?: string;
  extension_00364f4ea9be43c681d472ef9d934c78_whenCreated?: string;
  'extension_00364f4ea9be43c681d472ef9d934c78_whenCreated@odata.type'?: string;
  facsimileTelephoneNumber?: any;
  givenName?: string;
  immutableId?: string;
  isCompromised?: any;
  jobTitle?: string;
  lastDirSyncTime?: string;
  legalAgeGroupClassification?: any;
  mail?: string;
  mailNickname: string;
  mobile?: string;
  objectId: string;
  objectType: string;
  'odata.type': string;
  onPremisesDistinguishedName?: string;
  onPremisesSecurityIdentifier?: string;
  otherMails: OtherMail[];
  passwordPolicies?: string;
  passwordProfile?: any;
  physicalDeliveryOfficeName?: string;
  postalCode?: string;
  preferredLanguage?: string;
  provisionedPlans: ProvisionedPlan[];
  provisioningErrors: any[];
  proxyAddresses: ProxyAddress[];
  refreshTokensValidFromDateTime: string;
  showInAddressList?: any;
  signInNames: any[];
  sipProxyAddress?: string;
  state?: string;
  streetAddress?: string;
  surname?: string;
  telephoneNumber?: string;
  'thumbnailPhoto@odata.mediaContentType'?: string;
  'thumbnailPhoto@odata.mediaEditLink': string;
  usageLocation?: string;
  userIdentities: any[];
  userPrincipalName: string;
  userState?: any;
  userStateChangedOn?: any;
  userType: string;
}

interface ProxyAddress {
  '0': string;
  '1': string;
  '2': string;
  '3': string;
  '4': string;
  '5': string;
  '6': string;
  '7': string;
  '8': string;
  '9': string;
  '10': string;
  '11': string;
  '12': string;
  '13': string;
  '14': string;
  '15': string;
  '16': string;
  '17': string;
  '18': string;
  '19': string;
  '20': string;
  '21': string;
  '22': string;
  '23': string;
  '24': string;
  '25': string;
  '26': string;
  '27': string;
  '28': string;
  '29': string;
  '30': string;
  '31'?: string;
  '32'?: string;
  '33'?: string;
  '34'?: string;
  '35'?: string;
  '36'?: string;
  '37'?: string;
  '38'?: string;
  '39'?: string;
  '40'?: string;
  '41'?: string;
  '42'?: string;
  '43'?: string;
  '44'?: string;
  '45'?: string;
}

interface ProvisionedPlan {
  capabilityStatus: string;
  provisioningStatus: string;
  service: string;
}

interface OtherMail {
  '0': string;
  '1': string;
  '2': string;
  '3': string;
  '4': string;
  '5': string;
  '6': string;
  '7': string;
  '8': string;
  '9': string;
  '10': string;
  '11': string;
  '12': string;
  '13': string;
  '14': string;
  '15': string;
  '16': string;
  '17': string;
  '18': string;
  '19': string;
  '20': string;
  '21': string;
  '22': string;
  '23': string;
  '24': string;
  '25': string;
}

interface AssignedPlan {
  assignedTimestamp: string;
  capabilityStatus: string;
  service: string;
  servicePlanId: string;
}

interface AssignedLicense {
  disabledPlans: any[];
  skuId: string;
}