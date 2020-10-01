export interface az_webapp_show_command_result {
  appServicePlanId: string;
  availabilityState: string;
  clientAffinityEnabled: boolean;
  clientCertEnabled: boolean;
  clientCertExclusionPaths?: any;
  cloningInfo?: any;
  containerSize: number;
  dailyMemoryTimeQuota: number;
  defaultHostName: string;
  enabled: boolean;
  enabledHostNames: EnabledHostNames;
  ftpPublishingUrl: string;
  hostNameSslStates: HostNameSslStates;
  hostNames: HostNames;
  hostNamesDisabled: boolean;
  hostingEnvironmentProfile?: any;
  httpsOnly: boolean;
  hyperV: boolean;
  id: string;
  identity?: any;
  inProgressOperationId?: any;
  isDefaultContainer?: any;
  isXenon: boolean;
  kind: string;
  lastModifiedTimeUtc: string;
  location: string;
  maxNumberOfWorkers?: any;
  name: string;
  outboundIpAddresses: string;
  possibleOutboundIpAddresses: string;
  redundancyMode: string;
  repositorySiteName: string;
  reserved: boolean;
  resourceGroup: string;
  scmSiteAlsoStopped: boolean;
  siteConfig: SiteConfig;
  slotSwapStatus?: any;
  state: string;
  suspendedTill?: any;
  tags?: any;
  targetSwapSlot?: any;
  trafficManagerHostNames?: any;
  type: string;
  usageState: string;
}

export interface SiteConfig {
  acrUseManagedIdentityCreds: boolean;
  acrUserManagedIdentityID?: any;
  alwaysOn?: any;
  apiDefinition?: any;
  apiManagementConfig?: any;
  appCommandLine?: any;
  appSettings?: any;
  autoHealEnabled?: any;
  autoHealRules?: any;
  autoSwapSlotName?: any;
  azureMonitorLogCategories?: any;
  azureStorageAccounts?: any;
  connectionStrings?: any;
  cors?: any;
  customAppPoolIdentityAdminState?: any;
  customAppPoolIdentityTenantState?: any;
  defaultDocuments?: any;
  detailedErrorLoggingEnabled?: any;
  documentRoot?: any;
  experiments?: any;
  fileChangeAuditEnabled?: any;
  ftpsState?: any;
  functionAppScaleLimit?: any;
  functionsRuntimeScaleMonitoringEnabled?: any;
  handlerMappings?: any;
  healthCheckPath?: any;
  http20Enabled?: any;
  httpLoggingEnabled?: any;
  ipSecurityRestrictions?: any;
  javaContainer?: any;
  javaContainerVersion?: any;
  javaVersion?: any;
  limits?: any;
  linuxFxVersion?: any;
  loadBalancing?: any;
  localMySqlEnabled?: any;
  logsDirectorySizeLimit?: any;
  machineKey?: any;
  managedPipelineMode?: any;
  managedServiceIdentityId?: any;
  metadata?: any;
  minTlsVersion?: any;
  minimumElasticInstanceCount: number;
  netFrameworkVersion?: any;
  nodeVersion?: any;
  numberOfWorkers?: any;
  phpVersion?: any;
  powerShellVersion?: any;
  preWarmedInstanceCount?: any;
  publishingPassword?: any;
  publishingUsername?: any;
  push?: any;
  pythonVersion?: any;
  remoteDebuggingEnabled?: any;
  remoteDebuggingVersion?: any;
  requestTracingEnabled?: any;
  requestTracingExpirationTime?: any;
  routingRules?: any;
  runtimeADUser?: any;
  runtimeADUserPassword?: any;
  scmIpSecurityRestrictions?: any;
  scmIpSecurityRestrictionsUseMain?: any;
  scmMinTlsVersion?: any;
  scmType?: any;
  tracingOptions?: any;
  use32BitWorkerProcess?: any;
  virtualApplications?: any;
  vnetName?: any;
  vnetRouteAllEnabled?: any;
  webSocketsEnabled?: any;
  websiteTimeZone?: any;
  winAuthAdminState?: any;
  winAuthTenantState?: any;
  windowsFxVersion?: any;
  xManagedServiceIdentityId?: any;
}

export interface HostNames {
  '0': string;
}

export interface HostNameSslStates {
  '0': _0;
  '1': _0;
}

export interface _0 {
  hostType: string;
  ipBasedSslResult?: any;
  ipBasedSslState: string;
  name: string;
  sslState: string;
  thumbprint?: any;
  toUpdate?: any;
  toUpdateIpBasedSsl?: any;
  virtualIp?: any;
}

export interface EnabledHostNames {
  '0': string;
  '1': string;
}