export declare type az_webapp_list_command_result = az_webapp_list_command_result_item[];
interface az_webapp_list_command_result_item {
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
    enabledHostNames: EnabledHostName[];
    hostNameSslStates: HostNameSslState[];
    hostNames: HostName[];
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
interface SiteConfig {
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
interface HostName {
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
    '31': string;
    '32': string;
    '33': string;
    '34': string;
    '35': string;
}
interface HostNameSslState {
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
interface EnabledHostName {
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
    '31': string;
    '32': string;
    '33': string;
    '34': string;
    '35': string;
    '36'?: string;
    '37'?: string;
    '38'?: string;
    '39'?: string;
}
export {};
