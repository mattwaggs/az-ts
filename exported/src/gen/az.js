"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.az = void 0;
var _azAccount = require("./src/az_account");
var _azAcr = require("./src/az_acr");
var _azAcs = require("./src/az_acs");
var _azAd = require("./src/az_ad");
var _azAdvisor = require("./src/az_advisor");
var _azAks = require("./src/az_aks");
var _azAms = require("./src/az_ams");
var _azApim = require("./src/az_apim");
var _azAppconfig = require("./src/az_appconfig");
var _azAppservice = require("./src/az_appservice");
var _azAro = require("./src/az_aro");
var _azArtifacts = require("./src/az_artifacts");
var _azBackup = require("./src/az_backup");
var _azBatch = require("./src/az_batch");
var _azBatchai = require("./src/az_batchai");
var _azBilling = require("./src/az_billing");
var _azBoards = require("./src/az_boards");
var _azBot = require("./src/az_bot");
var _azCache = require("./src/az_cache");
var _azCdn = require("./src/az_cdn");
var _azCloud = require("./src/az_cloud");
var _azCognitiveservices = require("./src/az_cognitiveservices");
var _azConfig = require("./src/az_config");
var _azConsumption = require("./src/az_consumption");
var _azContainer = require("./src/az_container");
var _azCosmosdb = require("./src/az_cosmosdb");
var _azDeployment = require("./src/az_deployment");
var _azDeploymentmanager = require("./src/az_deploymentmanager");
var _azDevops = require("./src/az_devops");
var _azDisk = require("./src/az_disk");
var _azDla = require("./src/az_dla");
var _azDls = require("./src/az_dls");
var _azDms = require("./src/az_dms");
var _azEventgrid = require("./src/az_eventgrid");
var _azEventhubs = require("./src/az_eventhubs");
var _azExtension = require("./src/az_extension");
var _azFeature = require("./src/az_feature");
var _azFunctionapp = require("./src/az_functionapp");
var _azGroup = require("./src/az_group");
var _azHdinsight = require("./src/az_hdinsight");
var _azIdentity = require("./src/az_identity");
var _azImage = require("./src/az_image");
var _azIot = require("./src/az_iot");
var _azIotcentral = require("./src/az_iotcentral");
var _azKeyvault = require("./src/az_keyvault");
var _azKusto = require("./src/az_kusto");
var _azLab = require("./src/az_lab");
var _azLocal = require("./src/az_local");
var _azLock = require("./src/az_lock");
var _azManagedapp = require("./src/az_managedapp");
var _azManagedservices = require("./src/az_managedservices");
var _azMaps = require("./src/az_maps");
var _azMariadb = require("./src/az_mariadb");
var _azMonitor = require("./src/az_monitor");
var _azMysql = require("./src/az_mysql");
var _azNetappfiles = require("./src/az_netappfiles");
var _azNetwork = require("./src/az_network");
var _azOpenshift = require("./src/az_openshift");
var _azPipelines = require("./src/az_pipelines");
var _azPolicy = require("./src/az_policy");
var _azPostgres = require("./src/az_postgres");
var _azPpg = require("./src/az_ppg");
var _azProvider = require("./src/az_provider");
var _azRedis = require("./src/az_redis");
var _az = require("./src/az");
var _azRelay = require("./src/az_relay");
var _azRepos = require("./src/az_repos");
var _azReservations = require("./src/az_reservations");
var _azResource = require("./src/az_resource");
var _azRole = require("./src/az_role");
var _azSearch = require("./src/az_search");
var _azSecurity = require("./src/az_security");
var _azServicebus = require("./src/az_servicebus");
var _azSf = require("./src/az_sf");
var _azSig = require("./src/az_sig");
var _azSignalr = require("./src/az_signalr");
var _azSnapshot = require("./src/az_snapshot");
var _azSql = require("./src/az_sql");
var _azStaticwebapp = require("./src/az_staticwebapp");
var _azStorage = require("./src/az_storage");
var _azSynapse = require("./src/az_synapse");
var _azTag = require("./src/az_tag");
var _azVm = require("./src/az_vm");
var _azVmss = require("./src/az_vmss");
var _azWebapp = require("./src/az_webapp");
/** Manage Azure Management Groups. */
var azAccountManagementGroup = /** @class */ (function (_super) {
    __extends(azAccountManagementGroup, _super);
    function azAccountManagementGroup() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    azAccountManagementGroup.subscription = _azAccount.az_account_management_group_subscription;
    return azAccountManagementGroup;
}(_azAccount.az_account_management_group));
var azAccountManagement = /** @class */ (function () {
    function azAccountManagement() {
    }
    /** Manage Azure Management Groups. */
    azAccountManagement.group = azAccountManagementGroup;
    return azAccountManagement;
}());
/** Manage Azure subscription information. */
var azAccount = /** @class */ (function (_super) {
    __extends(azAccount, _super);
    function azAccount() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    azAccount.lock = _azAccount.az_account_lock;
    azAccount.management = azAccountManagement;
    return azAccount;
}(_azAccount.az_account));
var azAcrConfigContent = /** @class */ (function () {
    function azAcrConfigContent() {
    }
    azAcrConfigContent.trust = _azAcr.az_acr_config_content_trust;
    return azAcrConfigContent;
}());
/** Configure policies for Azure Container Registries. */
var azAcrConfig = /** @class */ (function (_super) {
    __extends(azAcrConfig, _super);
    function azAcrConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    azAcrConfig.content = azAcrConfigContent;
    azAcrConfig.retention = _azAcr.az_acr_config_retention;
    return azAcrConfig;
}(_azAcr.az_acr_config));
/** Manage helm charts for Azure Container Registries. */
var azAcrHelm = /** @class */ (function (_super) {
    __extends(azAcrHelm, _super);
    function azAcrHelm() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    azAcrHelm.repo = _azAcr.az_acr_helm_repo;
    return azAcrHelm;
}(_azAcr.az_acr_helm));
var azAcrNetwork = /** @class */ (function () {
    function azAcrNetwork() {
    }
    azAcrNetwork.rule = _azAcr.az_acr_network_rule;
    return azAcrNetwork;
}());
var azAcrPrivateEndpoint = /** @class */ (function () {
    function azAcrPrivateEndpoint() {
    }
    azAcrPrivateEndpoint.connection = _azAcr.az_acr_private_endpoint_connection;
    return azAcrPrivateEndpoint;
}());
var azAcrPrivateLink = /** @class */ (function () {
    function azAcrPrivateLink() {
    }
    azAcrPrivateLink.resource = _azAcr.az_acr_private_link_resource;
    return azAcrPrivateLink;
}());
var azAcrPrivate = /** @class */ (function () {
    function azAcrPrivate() {
    }
    azAcrPrivate.endpoint = azAcrPrivateEndpoint;
    azAcrPrivate.link = azAcrPrivateLink;
    return azAcrPrivate;
}());
var azAcrScope = /** @class */ (function () {
    function azAcrScope() {
    }
    azAcrScope.map = _azAcr.az_acr_scope_map;
    return azAcrScope;
}());
/** Manage a collection of steps for building, testing and OS & Framework patching container images using Azure Container Registries. */
var azAcrTask = /** @class */ (function (_super) {
    __extends(azAcrTask, _super);
    function azAcrTask() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    azAcrTask.credential = _azAcr.az_acr_task_credential;
    azAcrTask.identity = _azAcr.az_acr_task_identity;
    azAcrTask.timer = _azAcr.az_acr_task_timer;
    return azAcrTask;
}(_azAcr.az_acr_task));
/** Manage tokens for an Azure Container Registry. */
var azAcrToken = /** @class */ (function (_super) {
    __extends(azAcrToken, _super);
    function azAcrToken() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    azAcrToken.credential = _azAcr.az_acr_token_credential;
    return azAcrToken;
}(_azAcr.az_acr_token));
/** Manage private registries with Azure Container Registries. */
var azAcr = /** @class */ (function (_super) {
    __extends(azAcr, _super);
    function azAcr() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    azAcr.agentpool = _azAcr.az_acr_agentpool;
    /** Configure policies for Azure Container Registries. */
    azAcr.config = azAcrConfig;
    azAcr.credential = _azAcr.az_acr_credential;
    azAcr.encryption = _azAcr.az_acr_encryption;
    /** Manage helm charts for Azure Container Registries. */
    azAcr.helm = azAcrHelm;
    azAcr.identity = _azAcr.az_acr_identity;
    azAcr.network = azAcrNetwork;
    azAcr.pack = _azAcr.az_acr_pack;
    azAcr.private = azAcrPrivate;
    azAcr.replication = _azAcr.az_acr_replication;
    azAcr.repository = _azAcr.az_acr_repository;
    azAcr.scope = azAcrScope;
    /** Manage a collection of steps for building, testing and OS & Framework patching container images using Azure Container Registries. */
    azAcr.task = azAcrTask;
    azAcr.taskrun = _azAcr.az_acr_taskrun;
    /** Manage tokens for an Azure Container Registry. */
    azAcr.token = azAcrToken;
    azAcr.webhook = _azAcr.az_acr_webhook;
    return azAcr;
}(_azAcr.az_acr));
/** Manage Azure Container Services. */
var azAcs = /** @class */ (function (_super) {
    __extends(azAcs, _super);
    function azAcs() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    azAcs.dcos = _azAcs.az_acs_dcos;
    azAcs.kubernetes = _azAcs.az_acs_kubernetes;
    return azAcs;
}(_azAcs.az_acs));
/** Manage applications with AAD Graph. */
var azAdApp = /** @class */ (function (_super) {
    __extends(azAdApp, _super);
    function azAdApp() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    azAdApp.credential = _azAd.az_ad_app_credential;
    azAdApp.owner = _azAd.az_ad_app_owner;
    azAdApp.permission = _azAd.az_ad_app_permission;
    return azAdApp;
}(_azAd.az_ad_app));
/** Manage Azure Active Directory groups. */
var azAdGroup = /** @class */ (function (_super) {
    __extends(azAdGroup, _super);
    function azAdGroup() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    azAdGroup.member = _azAd.az_ad_group_member;
    azAdGroup.owner = _azAd.az_ad_group_owner;
    return azAdGroup;
}(_azAd.az_ad_group));
var azAdSignedIn = /** @class */ (function () {
    function azAdSignedIn() {
    }
    azAdSignedIn.user = _azAd.az_ad_signed_in_user;
    return azAdSignedIn;
}());
var azAdSigned = /** @class */ (function () {
    function azAdSigned() {
    }
    azAdSigned["in"] = azAdSignedIn;
    return azAdSigned;
}());
/** Manage Azure Active Directory service principals for automation authentication. */
var azAdSp = /** @class */ (function (_super) {
    __extends(azAdSp, _super);
    function azAdSp() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    azAdSp.credential = _azAd.az_ad_sp_credential;
    azAdSp.owner = _azAd.az_ad_sp_owner;
    return azAdSp;
}(_azAd.az_ad_sp));
/** Manage Azure Active Directory Graph entities needed for Role Based Access Control. */
var azAd = /** @class */ (function (_super) {
    __extends(azAd, _super);
    function azAd() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /** Manage applications with AAD Graph. */
    azAd.app = azAdApp;
    /** Manage Azure Active Directory groups. */
    azAd.group = azAdGroup;
    azAd.signed = azAdSigned;
    /** Manage Azure Active Directory service principals for automation authentication. */
    azAd.sp = azAdSp;
    azAd.user = _azAd.az_ad_user;
    return azAd;
}(_azAd.az_ad));
/** Manage Azure Advisor. */
var azAdvisor = /** @class */ (function (_super) {
    __extends(azAdvisor, _super);
    function azAdvisor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    azAdvisor.configuration = _azAdvisor.az_advisor_configuration;
    azAdvisor.recommendation = _azAdvisor.az_advisor_recommendation;
    return azAdvisor;
}(_azAdvisor.az_advisor));
/** Manage Azure Kubernetes Services. */
var azAks = /** @class */ (function (_super) {
    __extends(azAks, _super);
    function azAks() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    azAks.nodepool = _azAks.az_aks_nodepool;
    return azAks;
}(_azAks.az_aks));
/** Manage Azure Media Services accounts. */
var azAmsAccount = /** @class */ (function (_super) {
    __extends(azAmsAccount, _super);
    function azAmsAccount() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    azAmsAccount.filter = _azAms.az_ams_account_filter;
    azAmsAccount.mru = _azAms.az_ams_account_mru;
    azAmsAccount.sp = _azAms.az_ams_account_sp;
    azAmsAccount.storage = _azAms.az_ams_account_storage;
    return azAmsAccount;
}(_azAms.az_ams_account));
/** Manage assets for an Azure Media Services account. */
var azAmsAsset = /** @class */ (function (_super) {
    __extends(azAmsAsset, _super);
    function azAmsAsset() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    azAmsAsset.filter = _azAms.az_ams_asset_filter;
    return azAmsAsset;
}(_azAms.az_ams_asset));
/** Manage content key policies for an Azure Media Services account. */
var azAmsContentKeyPolicy = /** @class */ (function (_super) {
    __extends(azAmsContentKeyPolicy, _super);
    function azAmsContentKeyPolicy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    azAmsContentKeyPolicy.option = _azAms.az_ams_content_key_policy_option;
    return azAmsContentKeyPolicy;
}(_azAms.az_ams_content_key_policy));
var azAmsContentKey = /** @class */ (function () {
    function azAmsContentKey() {
    }
    /** Manage content key policies for an Azure Media Services account. */
    azAmsContentKey.policy = azAmsContentKeyPolicy;
    return azAmsContentKey;
}());
var azAmsContent = /** @class */ (function () {
    function azAmsContent() {
    }
    azAmsContent.key = azAmsContentKey;
    return azAmsContent;
}());
var azAmsLive = /** @class */ (function () {
    function azAmsLive() {
    }
    azAmsLive.event = _azAms.az_ams_live_event;
    azAmsLive.output = _azAms.az_ams_live_output;
    return azAmsLive;
}());
/** Manage streaming endpoints for an Azure Media Service account. */
var azAmsStreamingEndpoint = /** @class */ (function (_super) {
    __extends(azAmsStreamingEndpoint, _super);
    function azAmsStreamingEndpoint() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    azAmsStreamingEndpoint.akamai = _azAms.az_ams_streaming_endpoint_akamai;
    return azAmsStreamingEndpoint;
}(_azAms.az_ams_streaming_endpoint));
var azAmsStreaming = /** @class */ (function () {
    function azAmsStreaming() {
    }
    /** Manage streaming endpoints for an Azure Media Service account. */
    azAmsStreaming.endpoint = azAmsStreamingEndpoint;
    azAmsStreaming.locator = _azAms.az_ams_streaming_locator;
    azAmsStreaming.policy = _azAms.az_ams_streaming_policy;
    return azAmsStreaming;
}());
/** Manage transforms for an Azure Media Services account. */
var azAmsTransform = /** @class */ (function (_super) {
    __extends(azAmsTransform, _super);
    function azAmsTransform() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    azAmsTransform.output = _azAms.az_ams_transform_output;
    return azAmsTransform;
}(_azAms.az_ams_transform));
/** Manage Azure Media Services resources. */
var azAms = /** @class */ (function (_super) {
    __extends(azAms, _super);
    function azAms() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /** Manage Azure Media Services accounts. */
    azAms.account = azAmsAccount;
    /** Manage assets for an Azure Media Services account. */
    azAms.asset = azAmsAsset;
    azAms.content = azAmsContent;
    azAms.job = _azAms.az_ams_job;
    azAms.live = azAmsLive;
    azAms.streaming = azAmsStreaming;
    /** Manage transforms for an Azure Media Services account. */
    azAms.transform = azAmsTransform;
    return azAms;
}(_azAms.az_ams));
/** Manage Azure API Management API's. */
var azApimApi = /** @class */ (function (_super) {
    __extends(azApimApi, _super);
    function azApimApi() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    azApimApi.operation = _azApim.az_apim_api_operation;
    azApimApi.release = _azApim.az_apim_api_release;
    azApimApi.revision = _azApim.az_apim_api_revision;
    azApimApi.versionset = _azApim.az_apim_api_versionset;
    return azApimApi;
}(_azApim.az_apim_api));
/** Manage Azure API Management Product's. */
var azApimProduct = /** @class */ (function (_super) {
    __extends(azApimProduct, _super);
    function azApimProduct() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    azApimProduct.api = _azApim.az_apim_product_api;
    return azApimProduct;
}(_azApim.az_apim_product));
/** Manage Azure API Management services. */
var azApim = /** @class */ (function (_super) {
    __extends(azApim, _super);
    function azApim() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /** Manage Azure API Management API's. */
    azApim.api = azApimApi;
    azApim.nv = _azApim.az_apim_nv;
    /** Manage Azure API Management Product's. */
    azApim.product = azApimProduct;
    return azApim;
}(_azApim.az_apim));
/** Manage feature flags stored in an App Configuration. */
var azAppconfigFeature = /** @class */ (function (_super) {
    __extends(azAppconfigFeature, _super);
    function azAppconfigFeature() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    azAppconfigFeature.filter = _azAppconfig.az_appconfig_feature_filter;
    return azAppconfigFeature;
}(_azAppconfig.az_appconfig_feature));
/** Manage App Configurations. */
var azAppconfig = /** @class */ (function (_super) {
    __extends(azAppconfig, _super);
    function azAppconfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    azAppconfig.credential = _azAppconfig.az_appconfig_credential;
    /** Manage feature flags stored in an App Configuration. */
    azAppconfig.feature = azAppconfigFeature;
    azAppconfig.identity = _azAppconfig.az_appconfig_identity;
    azAppconfig.kv = _azAppconfig.az_appconfig_kv;
    azAppconfig.revision = _azAppconfig.az_appconfig_revision;
    return azAppconfig;
}(_azAppconfig.az_appconfig));
var azAppserviceHybrid = /** @class */ (function () {
    function azAppserviceHybrid() {
    }
    azAppserviceHybrid.connection = _azAppservice.az_appservice_hybrid_connection;
    return azAppserviceHybrid;
}());
var azAppserviceVnet = /** @class */ (function () {
    function azAppserviceVnet() {
    }
    azAppserviceVnet.integration = _azAppservice.az_appservice_vnet_integration;
    return azAppserviceVnet;
}());
/** Manage App Service plans. */
var azAppservice = /** @class */ (function (_super) {
    __extends(azAppservice, _super);
    function azAppservice() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    azAppservice.ase = _azAppservice.az_appservice_ase;
    azAppservice.hybrid = azAppserviceHybrid;
    azAppservice.plan = _azAppservice.az_appservice_plan;
    azAppservice.vnet = azAppserviceVnet;
    return azAppservice;
}(_azAppservice.az_appservice));
/** Manage Azure Artifacts. */
var azArtifacts = /** @class */ (function (_super) {
    __extends(azArtifacts, _super);
    function azArtifacts() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    azArtifacts.universal = _azArtifacts.az_artifacts_universal;
    return azArtifacts;
}(_azArtifacts.az_artifacts));
var azBackupProtectable = /** @class */ (function () {
    function azBackupProtectable() {
    }
    azBackupProtectable.item = _azBackup.az_backup_protectable_item;
    return azBackupProtectable;
}());
/** Restore backed up items from recovery points in a Recovery Services vault. */
var azBackupRestore = /** @class */ (function (_super) {
    __extends(azBackupRestore, _super);
    function azBackupRestore() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    azBackupRestore.files = _azBackup.az_backup_restore_files;
    return azBackupRestore;
}(_azBackup.az_backup_restore));
var azBackupVaultBackup = /** @class */ (function () {
    function azBackupVaultBackup() {
    }
    azBackupVaultBackup.properties = _azBackup.az_backup_vault_backup_properties;
    return azBackupVaultBackup;
}());
/** Online storage entity in Azure used to hold data such as backup copies, recovery points and backup policies. */
var azBackupVault = /** @class */ (function (_super) {
    __extends(azBackupVault, _super);
    function azBackupVault() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    azBackupVault.backup = azBackupVaultBackup;
    return azBackupVault;
}(_azBackup.az_backup_vault));
/** Manage Azure Backups. */
var azBackup = /** @class */ (function (_super) {
    __extends(azBackup, _super);
    function azBackup() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    azBackup.container = _azBackup.az_backup_container;
    azBackup.item = _azBackup.az_backup_item;
    azBackup.job = _azBackup.az_backup_job;
    azBackup.policy = _azBackup.az_backup_policy;
    azBackup.protectable = azBackupProtectable;
    azBackup.protection = _azBackup.az_backup_protection;
    azBackup.recoveryconfig = _azBackup.az_backup_recoveryconfig;
    azBackup.recoverypoint = _azBackup.az_backup_recoverypoint;
    /** Restore backed up items from recovery points in a Recovery Services vault. */
    azBackup.restore = azBackupRestore;
    /** Online storage entity in Azure used to hold data such as backup copies, recovery points and backup policies. */
    azBackup.vault = azBackupVault;
    return azBackup;
}(_azBackup.az_backup));
var azBatchAccountAutostorage = /** @class */ (function () {
    function azBatchAccountAutostorage() {
    }
    azBatchAccountAutostorage.keys = _azBatch.az_batch_account_autostorage_keys;
    return azBatchAccountAutostorage;
}());
/** Manage Azure Batch accounts. */
var azBatchAccount = /** @class */ (function (_super) {
    __extends(azBatchAccount, _super);
    function azBatchAccount() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    azBatchAccount.autostorage = azBatchAccountAutostorage;
    azBatchAccount.keys = _azBatch.az_batch_account_keys;
    return azBatchAccount;
}(_azBatch.az_batch_account));
/** Manage Batch applications. */
var azBatchApplication = /** @class */ (function (_super) {
    __extends(azBatchApplication, _super);
    function azBatchApplication() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    azBatchApplication.package = _azBatch.az_batch_application_package;
    azBatchApplication.summary = _azBatch.az_batch_application_summary;
    return azBatchApplication;
}(_azBatch.az_batch_application));
var azBatchJobAll = /** @class */ (function () {
    function azBatchJobAll() {
    }
    azBatchJobAll.statistics = _azBatch.az_batch_job_all_statistics;
    return azBatchJobAll;
}());
var azBatchJobPrepRelease = /** @class */ (function () {
    function azBatchJobPrepRelease() {
    }
    azBatchJobPrepRelease.status = _azBatch.az_batch_job_prep_release_status;
    return azBatchJobPrepRelease;
}());
var azBatchJobPrep = /** @class */ (function () {
    function azBatchJobPrep() {
    }
    azBatchJobPrep.release = azBatchJobPrepRelease;
    return azBatchJobPrep;
}());
var azBatchJobTask = /** @class */ (function () {
    function azBatchJobTask() {
    }
    azBatchJobTask.counts = _azBatch.az_batch_job_task_counts;
    return azBatchJobTask;
}());
/** Manage Batch jobs. */
var azBatchJob = /** @class */ (function (_super) {
    __extends(azBatchJob, _super);
    function azBatchJob() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    azBatchJob.all = azBatchJobAll;
    azBatchJob.prep = azBatchJobPrep;
    azBatchJob.schedule = _azBatch.az_batch_job_schedule;
    azBatchJob.task = azBatchJobTask;
    return azBatchJob;
}(_azBatch.az_batch_job));
/** Manage Batch service options for a subscription at the region level. */
var azBatchLocation = /** @class */ (function (_super) {
    __extends(azBatchLocation, _super);
    function azBatchLocation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    azBatchLocation.quotas = _azBatch.az_batch_location_quotas;
    return azBatchLocation;
}(_azBatch.az_batch_location));
var azBatchNodeRemoteLogin = /** @class */ (function () {
    function azBatchNodeRemoteLogin() {
    }
    azBatchNodeRemoteLogin.settings = _azBatch.az_batch_node_remote_login_settings;
    return azBatchNodeRemoteLogin;
}());
var azBatchNodeRemote = /** @class */ (function () {
    function azBatchNodeRemote() {
    }
    azBatchNodeRemote.desktop = _azBatch.az_batch_node_remote_desktop;
    azBatchNodeRemote.login = azBatchNodeRemoteLogin;
    return azBatchNodeRemote;
}());
var azBatchNodeService = /** @class */ (function () {
    function azBatchNodeService() {
    }
    azBatchNodeService.logs = _azBatch.az_batch_node_service_logs;
    return azBatchNodeService;
}());
/** Manage Batch compute nodes. */
var azBatchNode = /** @class */ (function (_super) {
    __extends(azBatchNode, _super);
    function azBatchNode() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    azBatchNode.file = _azBatch.az_batch_node_file;
    azBatchNode.remote = azBatchNodeRemote;
    azBatchNode.scheduling = _azBatch.az_batch_node_scheduling;
    azBatchNode.service = azBatchNodeService;
    azBatchNode.user = _azBatch.az_batch_node_user;
    return azBatchNode;
}(_azBatch.az_batch_node));
var azBatchPoolAll = /** @class */ (function () {
    function azBatchPoolAll() {
    }
    azBatchPoolAll.statistics = _azBatch.az_batch_pool_all_statistics;
    return azBatchPoolAll;
}());
var azBatchPoolNode = /** @class */ (function () {
    function azBatchPoolNode() {
    }
    azBatchPoolNode.counts = _azBatch.az_batch_pool_node_counts;
    return azBatchPoolNode;
}());
var azBatchPoolSupported = /** @class */ (function () {
    function azBatchPoolSupported() {
    }
    azBatchPoolSupported.images = _azBatch.az_batch_pool_supported_images;
    return azBatchPoolSupported;
}());
var azBatchPoolUsage = /** @class */ (function () {
    function azBatchPoolUsage() {
    }
    azBatchPoolUsage.metrics = _azBatch.az_batch_pool_usage_metrics;
    return azBatchPoolUsage;
}());
/** Manage Batch pools. */
var azBatchPool = /** @class */ (function (_super) {
    __extends(azBatchPool, _super);
    function azBatchPool() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    azBatchPool.all = azBatchPoolAll;
    azBatchPool.autoscale = _azBatch.az_batch_pool_autoscale;
    azBatchPool.node = azBatchPoolNode;
    azBatchPool.supported = azBatchPoolSupported;
    azBatchPool.usage = azBatchPoolUsage;
    return azBatchPool;
}(_azBatch.az_batch_pool));
/** Manage Batch tasks. */
var azBatchTask = /** @class */ (function (_super) {
    __extends(azBatchTask, _super);
    function azBatchTask() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    azBatchTask.file = _azBatch.az_batch_task_file;
    azBatchTask.subtask = _azBatch.az_batch_task_subtask;
    return azBatchTask;
}(_azBatch.az_batch_task));
/** Manage Azure Batch. */
var azBatch = /** @class */ (function (_super) {
    __extends(azBatch, _super);
    function azBatch() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /** Manage Azure Batch accounts. */
    azBatch.account = azBatchAccount;
    /** Manage Batch applications. */
    azBatch.application = azBatchApplication;
    azBatch.certificate = _azBatch.az_batch_certificate;
    /** Manage Batch jobs. */
    azBatch.job = azBatchJob;
    /** Manage Batch service options for a subscription at the region level. */
    azBatch.location = azBatchLocation;
    /** Manage Batch compute nodes. */
    azBatch.node = azBatchNode;
    /** Manage Batch pools. */
    azBatch.pool = azBatchPool;
    /** Manage Batch tasks. */
    azBatch.task = azBatchTask;
    return azBatch;
}(_azBatch.az_batch));
/** Commands to manage clusters. */
var azBatchaiCluster = /** @class */ (function (_super) {
    __extends(azBatchaiCluster, _super);
    function azBatchaiCluster() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    azBatchaiCluster.file = _azBatchai.az_batchai_cluster_file;
    azBatchaiCluster.node = _azBatchai.az_batchai_cluster_node;
    return azBatchaiCluster;
}(_azBatchai.az_batchai_cluster));
var azBatchaiFile = /** @class */ (function () {
    function azBatchaiFile() {
    }
    azBatchaiFile.server = _azBatchai.az_batchai_file_server;
    return azBatchaiFile;
}());
/** Commands to manage jobs. */
var azBatchaiJob = /** @class */ (function (_super) {
    __extends(azBatchaiJob, _super);
    function azBatchaiJob() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    azBatchaiJob.file = _azBatchai.az_batchai_job_file;
    azBatchaiJob.node = _azBatchai.az_batchai_job_node;
    return azBatchaiJob;
}(_azBatchai.az_batchai_job));
/** Manage Batch AI resources. */
var azBatchai = /** @class */ (function (_super) {
    __extends(azBatchai, _super);
    function azBatchai() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /** Commands to manage clusters. */
    azBatchai.cluster = azBatchaiCluster;
    azBatchai.experiment = _azBatchai.az_batchai_experiment;
    azBatchai.file = azBatchaiFile;
    /** Commands to manage jobs. */
    azBatchai.job = azBatchaiJob;
    azBatchai.workspace = _azBatchai.az_batchai_workspace;
    return azBatchai;
}(_azBatchai.az_batchai));
var azBillingEnrollment = /** @class */ (function () {
    function azBillingEnrollment() {
    }
    azBillingEnrollment.account = _azBilling.az_billing_enrollment_account;
    return azBillingEnrollment;
}());
/** Manage Azure Billing. */
var azBilling = /** @class */ (function (_super) {
    __extends(azBilling, _super);
    function azBilling() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    azBilling.enrollment = azBillingEnrollment;
    azBilling.invoice = _azBilling.az_billing_invoice;
    azBilling.period = _azBilling.az_billing_period;
    return azBilling;
}(_azBilling.az_billing));
/** Manage area paths. */
var azBoardsArea = /** @class */ (function (_super) {
    __extends(azBoardsArea, _super);
    function azBoardsArea() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    azBoardsArea.project = _azBoards.az_boards_area_project;
    azBoardsArea.team = _azBoards.az_boards_area_team;
    return azBoardsArea;
}(_azBoards.az_boards_area));
/** Manage iterations. */
var azBoardsIteration = /** @class */ (function (_super) {
    __extends(azBoardsIteration, _super);
    function azBoardsIteration() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    azBoardsIteration.project = _azBoards.az_boards_iteration_project;
    azBoardsIteration.team = _azBoards.az_boards_iteration_team;
    return azBoardsIteration;
}(_azBoards.az_boards_iteration));
/** Manage work items. */
var azBoardsWorkItem = /** @class */ (function (_super) {
    __extends(azBoardsWorkItem, _super);
    function azBoardsWorkItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    azBoardsWorkItem.relation = _azBoards.az_boards_work_item_relation;
    return azBoardsWorkItem;
}(_azBoards.az_boards_work_item));
var azBoardsWork = /** @class */ (function () {
    function azBoardsWork() {
    }
    /** Manage work items. */
    azBoardsWork.item = azBoardsWorkItem;
    return azBoardsWork;
}());
/** Manage Azure Boards. */
var azBoards = /** @class */ (function (_super) {
    __extends(azBoards, _super);
    function azBoards() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /** Manage area paths. */
    azBoards.area = azBoardsArea;
    /** Manage iterations. */
    azBoards.iteration = azBoardsIteration;
    azBoards.work = azBoardsWork;
    return azBoards;
}(_azBoards.az_boards));
/** Manage Microsoft Azure Bot Service. */
var azBot = /** @class */ (function (_super) {
    __extends(azBot, _super);
    function azBot() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    azBot.authsetting = _azBot.az_bot_authsetting;
    azBot.directline = _azBot.az_bot_directline;
    azBot.email = _azBot.az_bot_email;
    azBot.facebook = _azBot.az_bot_facebook;
    azBot.kik = _azBot.az_bot_kik;
    azBot.msteams = _azBot.az_bot_msteams;
    azBot.skype = _azBot.az_bot_skype;
    azBot.slack = _azBot.az_bot_slack;
    azBot.sms = _azBot.az_bot_sms;
    azBot.telegram = _azBot.az_bot_telegram;
    azBot.webchat = _azBot.az_bot_webchat;
    return azBot;
}(_azBot.az_bot));
var azCdnCustom = /** @class */ (function () {
    function azCdnCustom() {
    }
    azCdnCustom.domain = _azCdn.az_cdn_custom_domain;
    return azCdnCustom;
}());
var azCdnEdge = /** @class */ (function () {
    function azCdnEdge() {
    }
    azCdnEdge.node = _azCdn.az_cdn_edge_node;
    return azCdnEdge;
}());
/** Manage delivery rules for an endpoint. */
var azCdnEndpointRule = /** @class */ (function (_super) {
    __extends(azCdnEndpointRule, _super);
    function azCdnEndpointRule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    azCdnEndpointRule.action = _azCdn.az_cdn_endpoint_rule_action;
    azCdnEndpointRule.condition = _azCdn.az_cdn_endpoint_rule_condition;
    return azCdnEndpointRule;
}(_azCdn.az_cdn_endpoint_rule));
/** Manage WAF properties of a CDN endpoint. */
var azCdnEndpointWaf = /** @class */ (function (_super) {
    __extends(azCdnEndpointWaf, _super);
    function azCdnEndpointWaf() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    azCdnEndpointWaf.policy = _azCdn.az_cdn_endpoint_waf_policy;
    return azCdnEndpointWaf;
}(_azCdn.az_cdn_endpoint_waf));
/** Manage CDN endpoints. */
var azCdnEndpoint = /** @class */ (function (_super) {
    __extends(azCdnEndpoint, _super);
    function azCdnEndpoint() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /** Manage delivery rules for an endpoint. */
    azCdnEndpoint.rule = azCdnEndpointRule;
    /** Manage WAF properties of a CDN endpoint. */
    azCdnEndpoint.waf = azCdnEndpointWaf;
    return azCdnEndpoint;
}(_azCdn.az_cdn_endpoint));
var azCdnWafPolicyCustom = /** @class */ (function () {
    function azCdnWafPolicyCustom() {
    }
    azCdnWafPolicyCustom.rule = _azCdn.az_cdn_waf_policy_custom_rule;
    return azCdnWafPolicyCustom;
}());
var azCdnWafPolicyManagedRuleSetRuleGroup = /** @class */ (function () {
    function azCdnWafPolicyManagedRuleSetRuleGroup() {
    }
    azCdnWafPolicyManagedRuleSetRuleGroup.override = _azCdn.az_cdn_waf_policy_managed_rule_set_rule_group_override;
    return azCdnWafPolicyManagedRuleSetRuleGroup;
}());
var azCdnWafPolicyManagedRuleSetRule = /** @class */ (function () {
    function azCdnWafPolicyManagedRuleSetRule() {
    }
    azCdnWafPolicyManagedRuleSetRule.group = azCdnWafPolicyManagedRuleSetRuleGroup;
    return azCdnWafPolicyManagedRuleSetRule;
}());
/** Manage managed rule sets of a CDN WAF policy. */
var azCdnWafPolicyManagedRuleSet = /** @class */ (function (_super) {
    __extends(azCdnWafPolicyManagedRuleSet, _super);
    function azCdnWafPolicyManagedRuleSet() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    azCdnWafPolicyManagedRuleSet.rule = azCdnWafPolicyManagedRuleSetRule;
    return azCdnWafPolicyManagedRuleSet;
}(_azCdn.az_cdn_waf_policy_managed_rule_set));
var azCdnWafPolicyManagedRule = /** @class */ (function () {
    function azCdnWafPolicyManagedRule() {
    }
    /** Manage managed rule sets of a CDN WAF policy. */
    azCdnWafPolicyManagedRule.set = azCdnWafPolicyManagedRuleSet;
    return azCdnWafPolicyManagedRule;
}());
var azCdnWafPolicyManaged = /** @class */ (function () {
    function azCdnWafPolicyManaged() {
    }
    azCdnWafPolicyManaged.rule = azCdnWafPolicyManagedRule;
    return azCdnWafPolicyManaged;
}());
var azCdnWafPolicyRateLimit = /** @class */ (function () {
    function azCdnWafPolicyRateLimit() {
    }
    azCdnWafPolicyRateLimit.rule = _azCdn.az_cdn_waf_policy_rate_limit_rule;
    return azCdnWafPolicyRateLimit;
}());
var azCdnWafPolicyRate = /** @class */ (function () {
    function azCdnWafPolicyRate() {
    }
    azCdnWafPolicyRate.limit = azCdnWafPolicyRateLimit;
    return azCdnWafPolicyRate;
}());
/** Manage CDN WAF policies. */
var azCdnWafPolicy = /** @class */ (function (_super) {
    __extends(azCdnWafPolicy, _super);
    function azCdnWafPolicy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    azCdnWafPolicy.custom = azCdnWafPolicyCustom;
    azCdnWafPolicy.managed = azCdnWafPolicyManaged;
    azCdnWafPolicy.rate = azCdnWafPolicyRate;
    return azCdnWafPolicy;
}(_azCdn.az_cdn_waf_policy));
/** */
var azCdnWaf = /** @class */ (function (_super) {
    __extends(azCdnWaf, _super);
    function azCdnWaf() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /** Manage CDN WAF policies. */
    azCdnWaf.policy = azCdnWafPolicy;
    return azCdnWaf;
}(_azCdn.az_cdn_waf));
/** Manage Azure Content Delivery Networks (CDNs). */
var azCdn = /** @class */ (function (_super) {
    __extends(azCdn, _super);
    function azCdn() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    azCdn.custom = azCdnCustom;
    azCdn.edge = azCdnEdge;
    /** Manage CDN endpoints. */
    azCdn.endpoint = azCdnEndpoint;
    azCdn.origin = _azCdn.az_cdn_origin;
    azCdn.profile = _azCdn.az_cdn_profile;
    azCdn.waf = azCdnWaf;
    return azCdn;
}(_azCdn.az_cdn));
var azCognitiveservicesAccountNetwork = /** @class */ (function () {
    function azCognitiveservicesAccountNetwork() {
    }
    azCognitiveservicesAccountNetwork.rule = _azCognitiveservices.az_cognitiveservices_account_network_rule;
    return azCognitiveservicesAccountNetwork;
}());
/** Manage Azure Cognitive Services accounts. */
var azCognitiveservicesAccount = /** @class */ (function (_super) {
    __extends(azCognitiveservicesAccount, _super);
    function azCognitiveservicesAccount() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    azCognitiveservicesAccount.identity = _azCognitiveservices.az_cognitiveservices_account_identity;
    azCognitiveservicesAccount.keys = _azCognitiveservices.az_cognitiveservices_account_keys;
    azCognitiveservicesAccount.network = azCognitiveservicesAccountNetwork;
    return azCognitiveservicesAccount;
}(_azCognitiveservices.az_cognitiveservices_account));
/** Manage Azure Cognitive Services accounts. */
var azCognitiveservices = /** @class */ (function (_super) {
    __extends(azCognitiveservices, _super);
    function azCognitiveservices() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /** Manage Azure Cognitive Services accounts. */
    azCognitiveservices.account = azCognitiveservicesAccount;
    return azCognitiveservices;
}(_azCognitiveservices.az_cognitiveservices));
var azConfigParam = /** @class */ (function () {
    function azConfigParam() {
    }
    azConfigParam.persist = _azConfig.az_config_param_persist;
    return azConfigParam;
}());
/** Manage Azure CLI configuration. */
var azConfig = /** @class */ (function (_super) {
    __extends(azConfig, _super);
    function azConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    azConfig.param = azConfigParam;
    return azConfig;
}(_azConfig.az_config));
/** Manage reservations for Azure resources. */
var azConsumptionReservation = /** @class */ (function (_super) {
    __extends(azConsumptionReservation, _super);
    function azConsumptionReservation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    azConsumptionReservation.detail = _azConsumption.az_consumption_reservation_detail;
    azConsumptionReservation.summary = _azConsumption.az_consumption_reservation_summary;
    return azConsumptionReservation;
}(_azConsumption.az_consumption_reservation));
/** Manage consumption of Azure resources. */
var azConsumption = /** @class */ (function (_super) {
    __extends(azConsumption, _super);
    function azConsumption() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    azConsumption.budget = _azConsumption.az_consumption_budget;
    azConsumption.marketplace = _azConsumption.az_consumption_marketplace;
    azConsumption.pricesheet = _azConsumption.az_consumption_pricesheet;
    /** Manage reservations for Azure resources. */
    azConsumption.reservation = azConsumptionReservation;
    azConsumption.usage = _azConsumption.az_consumption_usage;
    return azConsumption;
}(_azConsumption.az_consumption));
/** Manage Azure Cosmos DB Cassandra keyspaces. */
var azCosmosdbCassandraKeyspace = /** @class */ (function (_super) {
    __extends(azCosmosdbCassandraKeyspace, _super);
    function azCosmosdbCassandraKeyspace() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    azCosmosdbCassandraKeyspace.throughput = _azCosmosdb.az_cosmosdb_cassandra_keyspace_throughput;
    return azCosmosdbCassandraKeyspace;
}(_azCosmosdb.az_cosmosdb_cassandra_keyspace));
/** Manage Azure Cosmos DB Cassandra tables. */
var azCosmosdbCassandraTable = /** @class */ (function (_super) {
    __extends(azCosmosdbCassandraTable, _super);
    function azCosmosdbCassandraTable() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    azCosmosdbCassandraTable.throughput = _azCosmosdb.az_cosmosdb_cassandra_table_throughput;
    return azCosmosdbCassandraTable;
}(_azCosmosdb.az_cosmosdb_cassandra_table));
/** Manage Cassandra resources of Azure Cosmos DB account. */
var azCosmosdbCassandra = /** @class */ (function (_super) {
    __extends(azCosmosdbCassandra, _super);
    function azCosmosdbCassandra() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /** Manage Azure Cosmos DB Cassandra keyspaces. */
    azCosmosdbCassandra.keyspace = azCosmosdbCassandraKeyspace;
    /** Manage Azure Cosmos DB Cassandra tables. */
    azCosmosdbCassandra.table = azCosmosdbCassandraTable;
    return azCosmosdbCassandra;
}(_azCosmosdb.az_cosmosdb_cassandra));
/** Manage Azure Cosmos DB Gremlin databases. */
var azCosmosdbGremlinDatabase = /** @class */ (function (_super) {
    __extends(azCosmosdbGremlinDatabase, _super);
    function azCosmosdbGremlinDatabase() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    azCosmosdbGremlinDatabase.throughput = _azCosmosdb.az_cosmosdb_gremlin_database_throughput;
    return azCosmosdbGremlinDatabase;
}(_azCosmosdb.az_cosmosdb_gremlin_database));
/** Manage Azure Cosmos DB Gremlin graphs. */
var azCosmosdbGremlinGraph = /** @class */ (function (_super) {
    __extends(azCosmosdbGremlinGraph, _super);
    function azCosmosdbGremlinGraph() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    azCosmosdbGremlinGraph.throughput = _azCosmosdb.az_cosmosdb_gremlin_graph_throughput;
    return azCosmosdbGremlinGraph;
}(_azCosmosdb.az_cosmosdb_gremlin_graph));
/** Manage Gremlin resources of Azure Cosmos DB account. */
var azCosmosdbGremlin = /** @class */ (function (_super) {
    __extends(azCosmosdbGremlin, _super);
    function azCosmosdbGremlin() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /** Manage Azure Cosmos DB Gremlin databases. */
    azCosmosdbGremlin.database = azCosmosdbGremlinDatabase;
    /** Manage Azure Cosmos DB Gremlin graphs. */
    azCosmosdbGremlin.graph = azCosmosdbGremlinGraph;
    return azCosmosdbGremlin;
}(_azCosmosdb.az_cosmosdb_gremlin));
/** Manage Azure Cosmos DB MongoDB collections. */
var azCosmosdbMongodbCollection = /** @class */ (function (_super) {
    __extends(azCosmosdbMongodbCollection, _super);
    function azCosmosdbMongodbCollection() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    azCosmosdbMongodbCollection.throughput = _azCosmosdb.az_cosmosdb_mongodb_collection_throughput;
    return azCosmosdbMongodbCollection;
}(_azCosmosdb.az_cosmosdb_mongodb_collection));
/** Manage Azure Cosmos DB MongoDB databases. */
var azCosmosdbMongodbDatabase = /** @class */ (function (_super) {
    __extends(azCosmosdbMongodbDatabase, _super);
    function azCosmosdbMongodbDatabase() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    azCosmosdbMongodbDatabase.throughput = _azCosmosdb.az_cosmosdb_mongodb_database_throughput;
    return azCosmosdbMongodbDatabase;
}(_azCosmosdb.az_cosmosdb_mongodb_database));
/** Manage MongoDB resources of Azure Cosmos DB account. */
var azCosmosdbMongodb = /** @class */ (function (_super) {
    __extends(azCosmosdbMongodb, _super);
    function azCosmosdbMongodb() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /** Manage Azure Cosmos DB MongoDB collections. */
    azCosmosdbMongodb.collection = azCosmosdbMongodbCollection;
    /** Manage Azure Cosmos DB MongoDB databases. */
    azCosmosdbMongodb.database = azCosmosdbMongodbDatabase;
    return azCosmosdbMongodb;
}(_azCosmosdb.az_cosmosdb_mongodb));
var azCosmosdbNetwork = /** @class */ (function () {
    function azCosmosdbNetwork() {
    }
    azCosmosdbNetwork.rule = _azCosmosdb.az_cosmosdb_network_rule;
    return azCosmosdbNetwork;
}());
var azCosmosdbPrivateEndpoint = /** @class */ (function () {
    function azCosmosdbPrivateEndpoint() {
    }
    azCosmosdbPrivateEndpoint.connection = _azCosmosdb.az_cosmosdb_private_endpoint_connection;
    return azCosmosdbPrivateEndpoint;
}());
var azCosmosdbPrivateLink = /** @class */ (function () {
    function azCosmosdbPrivateLink() {
    }
    azCosmosdbPrivateLink.resource = _azCosmosdb.az_cosmosdb_private_link_resource;
    return azCosmosdbPrivateLink;
}());
var azCosmosdbPrivate = /** @class */ (function () {
    function azCosmosdbPrivate() {
    }
    azCosmosdbPrivate.endpoint = azCosmosdbPrivateEndpoint;
    azCosmosdbPrivate.link = azCosmosdbPrivateLink;
    return azCosmosdbPrivate;
}());
/** Manage Azure Cosmos DB SQL containers. */
var azCosmosdbSqlContainer = /** @class */ (function (_super) {
    __extends(azCosmosdbSqlContainer, _super);
    function azCosmosdbSqlContainer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    azCosmosdbSqlContainer.throughput = _azCosmosdb.az_cosmosdb_sql_container_throughput;
    return azCosmosdbSqlContainer;
}(_azCosmosdb.az_cosmosdb_sql_container));
/** Manage Azure Cosmos DB SQL databases. */
var azCosmosdbSqlDatabase = /** @class */ (function (_super) {
    __extends(azCosmosdbSqlDatabase, _super);
    function azCosmosdbSqlDatabase() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    azCosmosdbSqlDatabase.throughput = _azCosmosdb.az_cosmosdb_sql_database_throughput;
    return azCosmosdbSqlDatabase;
}(_azCosmosdb.az_cosmosdb_sql_database));
var azCosmosdbSqlStored = /** @class */ (function () {
    function azCosmosdbSqlStored() {
    }
    azCosmosdbSqlStored.procedure = _azCosmosdb.az_cosmosdb_sql_stored_procedure;
    return azCosmosdbSqlStored;
}());
var azCosmosdbSqlUserDefined = /** @class */ (function () {
    function azCosmosdbSqlUserDefined() {
    }
    azCosmosdbSqlUserDefined["function"] = _azCosmosdb.az_cosmosdb_sql_user_defined_function;
    return azCosmosdbSqlUserDefined;
}());
var azCosmosdbSqlUser = /** @class */ (function () {
    function azCosmosdbSqlUser() {
    }
    azCosmosdbSqlUser.defined = azCosmosdbSqlUserDefined;
    return azCosmosdbSqlUser;
}());
/** Manage SQL resources of Azure Cosmos DB account. */
var azCosmosdbSql = /** @class */ (function (_super) {
    __extends(azCosmosdbSql, _super);
    function azCosmosdbSql() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /** Manage Azure Cosmos DB SQL containers. */
    azCosmosdbSql.container = azCosmosdbSqlContainer;
    /** Manage Azure Cosmos DB SQL databases. */
    azCosmosdbSql.database = azCosmosdbSqlDatabase;
    azCosmosdbSql.stored = azCosmosdbSqlStored;
    azCosmosdbSql.trigger = _azCosmosdb.az_cosmosdb_sql_trigger;
    azCosmosdbSql.user = azCosmosdbSqlUser;
    return azCosmosdbSql;
}(_azCosmosdb.az_cosmosdb_sql));
/** Manage Table resources of Azure Cosmos DB account. */
var azCosmosdbTable = /** @class */ (function (_super) {
    __extends(azCosmosdbTable, _super);
    function azCosmosdbTable() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    azCosmosdbTable.throughput = _azCosmosdb.az_cosmosdb_table_throughput;
    return azCosmosdbTable;
}(_azCosmosdb.az_cosmosdb_table));
/** Manage Azure Cosmos DB database accounts. */
var azCosmosdb = /** @class */ (function (_super) {
    __extends(azCosmosdb, _super);
    function azCosmosdb() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /** Manage Cassandra resources of Azure Cosmos DB account. */
    azCosmosdb.cassandra = azCosmosdbCassandra;
    azCosmosdb.collection = _azCosmosdb.az_cosmosdb_collection;
    azCosmosdb.database = _azCosmosdb.az_cosmosdb_database;
    /** Manage Gremlin resources of Azure Cosmos DB account. */
    azCosmosdb.gremlin = azCosmosdbGremlin;
    azCosmosdb.keys = _azCosmosdb.az_cosmosdb_keys;
    /** Manage MongoDB resources of Azure Cosmos DB account. */
    azCosmosdb.mongodb = azCosmosdbMongodb;
    azCosmosdb.network = azCosmosdbNetwork;
    azCosmosdb.private = azCosmosdbPrivate;
    /** Manage SQL resources of Azure Cosmos DB account. */
    azCosmosdb.sql = azCosmosdbSql;
    /** Manage Table resources of Azure Cosmos DB account. */
    azCosmosdb.table = azCosmosdbTable;
    return azCosmosdb;
}(_azCosmosdb.az_cosmosdb));
/** Manage deployment operations at subscription scope. */
var azDeploymentOperation = /** @class */ (function (_super) {
    __extends(azDeploymentOperation, _super);
    function azDeploymentOperation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    azDeploymentOperation.group = _azDeployment.az_deployment_operation_group;
    azDeploymentOperation.mg = _azDeployment.az_deployment_operation_mg;
    azDeploymentOperation.sub = _azDeployment.az_deployment_operation_sub;
    azDeploymentOperation.tenant = _azDeployment.az_deployment_operation_tenant;
    return azDeploymentOperation;
}(_azDeployment.az_deployment_operation));
/** Manage Azure Resource Manager template deployment at subscription scope. */
var azDeployment = /** @class */ (function (_super) {
    __extends(azDeployment, _super);
    function azDeployment() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    azDeployment.group = _azDeployment.az_deployment_group;
    azDeployment.mg = _azDeployment.az_deployment_mg;
    /** Manage deployment operations at subscription scope. */
    azDeployment.operation = azDeploymentOperation;
    azDeployment.scripts = _azDeployment.az_deployment_scripts;
    azDeployment.sub = _azDeployment.az_deployment_sub;
    azDeployment.tenant = _azDeployment.az_deployment_tenant;
    return azDeployment;
}(_azDeployment.az_deployment));
var azDeploymentmanagerArtifact = /** @class */ (function () {
    function azDeploymentmanagerArtifact() {
    }
    azDeploymentmanagerArtifact.source = _azDeploymentmanager.az_deploymentmanager_artifact_source;
    return azDeploymentmanagerArtifact;
}());
/** Manage the services in a service topology. */
var azDeploymentmanagerService = /** @class */ (function (_super) {
    __extends(azDeploymentmanagerService, _super);
    function azDeploymentmanagerService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    azDeploymentmanagerService.topology = _azDeploymentmanager.az_deploymentmanager_service_topology;
    azDeploymentmanagerService.unit = _azDeploymentmanager.az_deploymentmanager_service_unit;
    return azDeploymentmanagerService;
}(_azDeploymentmanager.az_deploymentmanager_service));
/** Create and manage rollouts for your service. */
var azDeploymentmanager = /** @class */ (function (_super) {
    __extends(azDeploymentmanager, _super);
    function azDeploymentmanager() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    azDeploymentmanager.artifact = azDeploymentmanagerArtifact;
    azDeploymentmanager.rollout = _azDeploymentmanager.az_deploymentmanager_rollout;
    /** Manage the services in a service topology. */
    azDeploymentmanager.service = azDeploymentmanagerService;
    azDeploymentmanager.step = _azDeploymentmanager.az_deploymentmanager_step;
    return azDeploymentmanager;
}(_azDeploymentmanager.az_deploymentmanager));
/** Manage administration operations. */
var azDevopsAdmin = /** @class */ (function (_super) {
    __extends(azDevopsAdmin, _super);
    function azDevopsAdmin() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    azDevopsAdmin.banner = _azDevops.az_devops_admin_banner;
    return azDevopsAdmin;
}(_azDevops.az_devops_admin));
/** Manage security groups. */
var azDevopsSecurityGroup = /** @class */ (function (_super) {
    __extends(azDevopsSecurityGroup, _super);
    function azDevopsSecurityGroup() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    azDevopsSecurityGroup.membership = _azDevops.az_devops_security_group_membership;
    return azDevopsSecurityGroup;
}(_azDevops.az_devops_security_group));
/** Manage security permissions. */
var azDevopsSecurityPermission = /** @class */ (function (_super) {
    __extends(azDevopsSecurityPermission, _super);
    function azDevopsSecurityPermission() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    azDevopsSecurityPermission.namespace = _azDevops.az_devops_security_permission_namespace;
    return azDevopsSecurityPermission;
}(_azDevops.az_devops_security_permission));
/** Manage security related operations. */
var azDevopsSecurity = /** @class */ (function (_super) {
    __extends(azDevopsSecurity, _super);
    function azDevopsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /** Manage security groups. */
    azDevopsSecurity.group = azDevopsSecurityGroup;
    /** Manage security permissions. */
    azDevopsSecurity.permission = azDevopsSecurityPermission;
    return azDevopsSecurity;
}(_azDevops.az_devops_security));
/** Manage service endpoints/connections. */
var azDevopsServiceEndpoint = /** @class */ (function (_super) {
    __extends(azDevopsServiceEndpoint, _super);
    function azDevopsServiceEndpoint() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    azDevopsServiceEndpoint.azurerm = _azDevops.az_devops_service_endpoint_azurerm;
    azDevopsServiceEndpoint.github = _azDevops.az_devops_service_endpoint_github;
    return azDevopsServiceEndpoint;
}(_azDevops.az_devops_service_endpoint));
var azDevopsService = /** @class */ (function () {
    function azDevopsService() {
    }
    /** Manage service endpoints/connections. */
    azDevopsService.endpoint = azDevopsServiceEndpoint;
    return azDevopsService;
}());
/** Manage wikis. */
var azDevopsWiki = /** @class */ (function (_super) {
    __extends(azDevopsWiki, _super);
    function azDevopsWiki() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    azDevopsWiki.page = _azDevops.az_devops_wiki_page;
    return azDevopsWiki;
}(_azDevops.az_devops_wiki));
/** Manage Azure DevOps organization level operations. */
var azDevops = /** @class */ (function (_super) {
    __extends(azDevops, _super);
    function azDevops() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /** Manage administration operations. */
    azDevops.admin = azDevopsAdmin;
    azDevops.extension = _azDevops.az_devops_extension;
    azDevops.project = _azDevops.az_devops_project;
    /** Manage security related operations. */
    azDevops.security = azDevopsSecurity;
    azDevops.service = azDevopsService;
    azDevops.team = _azDevops.az_devops_team;
    azDevops.user = _azDevops.az_devops_user;
    /** Manage wikis. */
    azDevops.wiki = azDevopsWiki;
    return azDevops;
}(_azDevops.az_devops));
var azDiskEncryption = /** @class */ (function () {
    function azDiskEncryption() {
    }
    azDiskEncryption.set = _azDisk.az_disk_encryption_set;
    return azDiskEncryption;
}());
/** Manage Azure Managed Disks. */
var azDisk = /** @class */ (function (_super) {
    __extends(azDisk, _super);
    function azDisk() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    azDisk.access = _azDisk.az_disk_access;
    azDisk.encryption = azDiskEncryption;
    return azDisk;
}(_azDisk.az_disk));
var azDlaAccountBlob = /** @class */ (function () {
    function azDlaAccountBlob() {
    }
    azDlaAccountBlob.storage = _azDla.az_dla_account_blob_storage;
    return azDlaAccountBlob;
}());
var azDlaAccountCompute = /** @class */ (function () {
    function azDlaAccountCompute() {
    }
    azDlaAccountCompute.policy = _azDla.az_dla_account_compute_policy;
    return azDlaAccountCompute;
}());
var azDlaAccountDataLake = /** @class */ (function () {
    function azDlaAccountDataLake() {
    }
    azDlaAccountDataLake.store = _azDla.az_dla_account_data_lake_store;
    return azDlaAccountDataLake;
}());
var azDlaAccountData = /** @class */ (function () {
    function azDlaAccountData() {
    }
    azDlaAccountData.lake = azDlaAccountDataLake;
    return azDlaAccountData;
}());
/** Manage Data Lake Analytics accounts. */
var azDlaAccount = /** @class */ (function (_super) {
    __extends(azDlaAccount, _super);
    function azDlaAccount() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    azDlaAccount.blob = azDlaAccountBlob;
    azDlaAccount.compute = azDlaAccountCompute;
    azDlaAccount.data = azDlaAccountData;
    azDlaAccount.firewall = _azDla.az_dla_account_firewall;
    return azDlaAccount;
}(_azDla.az_dla_account));
var azDlaCatalogExternalData = /** @class */ (function () {
    function azDlaCatalogExternalData() {
    }
    azDlaCatalogExternalData.source = _azDla.az_dla_catalog_external_data_source;
    return azDlaCatalogExternalData;
}());
var azDlaCatalogExternal = /** @class */ (function () {
    function azDlaCatalogExternal() {
    }
    azDlaCatalogExternal.data = azDlaCatalogExternalData;
    return azDlaCatalogExternal;
}());
/** Manage Data Lake Analytics catalog tables. */
var azDlaCatalogTable = /** @class */ (function (_super) {
    __extends(azDlaCatalogTable, _super);
    function azDlaCatalogTable() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    azDlaCatalogTable.partition = _azDla.az_dla_catalog_table_partition;
    azDlaCatalogTable.stats = _azDla.az_dla_catalog_table_stats;
    azDlaCatalogTable.type = _azDla.az_dla_catalog_table_type;
    return azDlaCatalogTable;
}(_azDla.az_dla_catalog_table));
/** Manage Data Lake Analytics catalogs. */
var azDlaCatalog = /** @class */ (function (_super) {
    __extends(azDlaCatalog, _super);
    function azDlaCatalog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    azDlaCatalog.assembly = _azDla.az_dla_catalog_assembly;
    azDlaCatalog.credential = _azDla.az_dla_catalog_credential;
    azDlaCatalog.database = _azDla.az_dla_catalog_database;
    azDlaCatalog.external = azDlaCatalogExternal;
    azDlaCatalog.package = _azDla.az_dla_catalog_package;
    azDlaCatalog.procedure = _azDla.az_dla_catalog_procedure;
    azDlaCatalog.schema = _azDla.az_dla_catalog_schema;
    /** Manage Data Lake Analytics catalog tables. */
    azDlaCatalog.table = azDlaCatalogTable;
    azDlaCatalog.tvf = _azDla.az_dla_catalog_tvf;
    azDlaCatalog.view = _azDla.az_dla_catalog_view;
    return azDlaCatalog;
}(_azDla.az_dla_catalog));
/** Manage Data Lake Analytics jobs. */
var azDlaJob = /** @class */ (function (_super) {
    __extends(azDlaJob, _super);
    function azDlaJob() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    azDlaJob.pipeline = _azDla.az_dla_job_pipeline;
    azDlaJob.recurrence = _azDla.az_dla_job_recurrence;
    return azDlaJob;
}(_azDla.az_dla_job));
/** Manage Data Lake Analytics accounts, jobs, and catalogs. */
var azDla = /** @class */ (function (_super) {
    __extends(azDla, _super);
    function azDla() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /** Manage Data Lake Analytics accounts. */
    azDla.account = azDlaAccount;
    /** Manage Data Lake Analytics catalogs. */
    azDla.catalog = azDlaCatalog;
    /** Manage Data Lake Analytics jobs. */
    azDla.job = azDlaJob;
    return azDla;
}(_azDla.az_dla));
var azDlsAccountNetwork = /** @class */ (function () {
    function azDlsAccountNetwork() {
    }
    azDlsAccountNetwork.rule = _azDls.az_dls_account_network_rule;
    return azDlsAccountNetwork;
}());
var azDlsAccountTrusted = /** @class */ (function () {
    function azDlsAccountTrusted() {
    }
    azDlsAccountTrusted.provider = _azDls.az_dls_account_trusted_provider;
    return azDlsAccountTrusted;
}());
/** Manage Data Lake Store accounts. */
var azDlsAccount = /** @class */ (function (_super) {
    __extends(azDlsAccount, _super);
    function azDlsAccount() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    azDlsAccount.firewall = _azDls.az_dls_account_firewall;
    azDlsAccount.network = azDlsAccountNetwork;
    azDlsAccount.trusted = azDlsAccountTrusted;
    return azDlsAccount;
}(_azDls.az_dls_account));
/** Manage a Data Lake Store filesystem. */
var azDlsFs = /** @class */ (function (_super) {
    __extends(azDlsFs, _super);
    function azDlsFs() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    azDlsFs.access = _azDls.az_dls_fs_access;
    return azDlsFs;
}(_azDls.az_dls_fs));
/** Manage Data Lake Store accounts and filesystems. */
var azDls = /** @class */ (function (_super) {
    __extends(azDls, _super);
    function azDls() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /** Manage Data Lake Store accounts. */
    azDls.account = azDlsAccount;
    /** Manage a Data Lake Store filesystem. */
    azDls.fs = azDlsFs;
    return azDls;
}(_azDls.az_dls));
/** Manage Projects for an instance of the Data Migration Service. */
var azDmsProject = /** @class */ (function (_super) {
    __extends(azDmsProject, _super);
    function azDmsProject() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    azDmsProject.task = _azDms.az_dms_project_task;
    return azDmsProject;
}(_azDms.az_dms_project));
/** Manage Azure Data Migration Service (DMS) instances. */
var azDms = /** @class */ (function (_super) {
    __extends(azDms, _super);
    function azDms() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /** Manage Projects for an instance of the Data Migration Service. */
    azDms.project = azDmsProject;
    return azDms;
}(_azDms.az_dms));
/** Manage event domains. */
var azEventgridDomain = /** @class */ (function (_super) {
    __extends(azEventgridDomain, _super);
    function azEventgridDomain() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    azEventgridDomain.key = _azEventgrid.az_eventgrid_domain_key;
    azEventgridDomain.topic = _azEventgrid.az_eventgrid_domain_topic;
    return azEventgridDomain;
}(_azEventgrid.az_eventgrid_domain));
var azEventgridEvent = /** @class */ (function () {
    function azEventgridEvent() {
    }
    azEventgridEvent.subscription = _azEventgrid.az_eventgrid_event_subscription;
    return azEventgridEvent;
}());
var azEventgridExtension = /** @class */ (function () {
    function azEventgridExtension() {
    }
    azEventgridExtension.topic = _azEventgrid.az_eventgrid_extension_topic;
    return azEventgridExtension;
}());
var azEventgridPartnerNamespaceEvent = /** @class */ (function () {
    function azEventgridPartnerNamespaceEvent() {
    }
    azEventgridPartnerNamespaceEvent.channel = _azEventgrid.az_eventgrid_partner_namespace_event_channel;
    return azEventgridPartnerNamespaceEvent;
}());
/** Manage partner namespaces. */
var azEventgridPartnerNamespace = /** @class */ (function (_super) {
    __extends(azEventgridPartnerNamespace, _super);
    function azEventgridPartnerNamespace() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    azEventgridPartnerNamespace.event = azEventgridPartnerNamespaceEvent;
    azEventgridPartnerNamespace.key = _azEventgrid.az_eventgrid_partner_namespace_key;
    return azEventgridPartnerNamespace;
}(_azEventgrid.az_eventgrid_partner_namespace));
var azEventgridPartnerTopicEvent = /** @class */ (function () {
    function azEventgridPartnerTopicEvent() {
    }
    azEventgridPartnerTopicEvent.subscription = _azEventgrid.az_eventgrid_partner_topic_event_subscription;
    return azEventgridPartnerTopicEvent;
}());
/** Manage partner topics. */
var azEventgridPartnerTopic = /** @class */ (function (_super) {
    __extends(azEventgridPartnerTopic, _super);
    function azEventgridPartnerTopic() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    azEventgridPartnerTopic.event = azEventgridPartnerTopicEvent;
    return azEventgridPartnerTopic;
}(_azEventgrid.az_eventgrid_partner_topic));
/** Manage partner resources. */
var azEventgridPartner = /** @class */ (function (_super) {
    __extends(azEventgridPartner, _super);
    function azEventgridPartner() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /** Manage partner namespaces. */
    azEventgridPartner.namespace = azEventgridPartnerNamespace;
    azEventgridPartner.registration = _azEventgrid.az_eventgrid_partner_registration;
    /** Manage partner topics. */
    azEventgridPartner.topic = azEventgridPartnerTopic;
    return azEventgridPartner;
}(_azEventgrid.az_eventgrid_partner));
var azEventgridSystemTopicEvent = /** @class */ (function () {
    function azEventgridSystemTopicEvent() {
    }
    azEventgridSystemTopicEvent.subscription = _azEventgrid.az_eventgrid_system_topic_event_subscription;
    return azEventgridSystemTopicEvent;
}());
/** Manage system topics. */
var azEventgridSystemTopic = /** @class */ (function (_super) {
    __extends(azEventgridSystemTopic, _super);
    function azEventgridSystemTopic() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    azEventgridSystemTopic.event = azEventgridSystemTopicEvent;
    return azEventgridSystemTopic;
}(_azEventgrid.az_eventgrid_system_topic));
var azEventgridSystem = /** @class */ (function () {
    function azEventgridSystem() {
    }
    /** Manage system topics. */
    azEventgridSystem.topic = azEventgridSystemTopic;
    return azEventgridSystem;
}());
/** Manage Azure Event Grid topics. */
var azEventgridTopic = /** @class */ (function (_super) {
    __extends(azEventgridTopic, _super);
    function azEventgridTopic() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    azEventgridTopic.key = _azEventgrid.az_eventgrid_topic_key;
    azEventgridTopic.type = _azEventgrid.az_eventgrid_topic_type;
    return azEventgridTopic;
}(_azEventgrid.az_eventgrid_topic));
/** Manage Azure Event Grid topics, domains, domain topics, system topics partner topics, event subscriptions, system topic event subscriptions and partner topic event subscriptions. */
var azEventgrid = /** @class */ (function (_super) {
    __extends(azEventgrid, _super);
    function azEventgrid() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /** Manage event domains. */
    azEventgrid.domain = azEventgridDomain;
    azEventgrid.event = azEventgridEvent;
    azEventgrid.extension = azEventgridExtension;
    /** Manage partner resources. */
    azEventgrid.partner = azEventgridPartner;
    azEventgrid.system = azEventgridSystem;
    /** Manage Azure Event Grid topics. */
    azEventgrid.topic = azEventgridTopic;
    return azEventgrid;
}(_azEventgrid.az_eventgrid));
/** Manage Azure EventHubs Clusters. */
var azEventhubsCluster = /** @class */ (function (_super) {
    __extends(azEventhubsCluster, _super);
    function azEventhubsCluster() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    azEventhubsCluster.namespace = _azEventhubs.az_eventhubs_cluster_namespace;
    return azEventhubsCluster;
}(_azEventhubs.az_eventhubs_cluster));
/** Manage Azure Service Bus Authorizationrule for Eventhub. */
var azEventhubsEventhubAuthorizationRule = /** @class */ (function (_super) {
    __extends(azEventhubsEventhubAuthorizationRule, _super);
    function azEventhubsEventhubAuthorizationRule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    azEventhubsEventhubAuthorizationRule.keys = _azEventhubs.az_eventhubs_eventhub_authorization_rule_keys;
    return azEventhubsEventhubAuthorizationRule;
}(_azEventhubs.az_eventhubs_eventhub_authorization_rule));
var azEventhubsEventhubAuthorization = /** @class */ (function () {
    function azEventhubsEventhubAuthorization() {
    }
    /** Manage Azure Service Bus Authorizationrule for Eventhub. */
    azEventhubsEventhubAuthorization.rule = azEventhubsEventhubAuthorizationRule;
    return azEventhubsEventhubAuthorization;
}());
var azEventhubsEventhubConsumer = /** @class */ (function () {
    function azEventhubsEventhubConsumer() {
    }
    azEventhubsEventhubConsumer.group = _azEventhubs.az_eventhubs_eventhub_consumer_group;
    return azEventhubsEventhubConsumer;
}());
/** Manage Azure EventHubs eventhub and authorization-rule. */
var azEventhubsEventhub = /** @class */ (function (_super) {
    __extends(azEventhubsEventhub, _super);
    function azEventhubsEventhub() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    azEventhubsEventhub.authorization = azEventhubsEventhubAuthorization;
    azEventhubsEventhub.consumer = azEventhubsEventhubConsumer;
    return azEventhubsEventhub;
}(_azEventhubs.az_eventhubs_eventhub));
/** Manage Azure EventHubs Authorizationrule for Geo Recovery configuration Alias. */
var azEventhubsGeorecoveryAliasAuthorizationRule = /** @class */ (function (_super) {
    __extends(azEventhubsGeorecoveryAliasAuthorizationRule, _super);
    function azEventhubsGeorecoveryAliasAuthorizationRule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    azEventhubsGeorecoveryAliasAuthorizationRule.keys = _azEventhubs.az_eventhubs_georecovery_alias_authorization_rule_keys;
    return azEventhubsGeorecoveryAliasAuthorizationRule;
}(_azEventhubs.az_eventhubs_georecovery_alias_authorization_rule));
var azEventhubsGeorecoveryAliasAuthorization = /** @class */ (function () {
    function azEventhubsGeorecoveryAliasAuthorization() {
    }
    /** Manage Azure EventHubs Authorizationrule for Geo Recovery configuration Alias. */
    azEventhubsGeorecoveryAliasAuthorization.rule = azEventhubsGeorecoveryAliasAuthorizationRule;
    return azEventhubsGeorecoveryAliasAuthorization;
}());
/** Manage Azure EventHubs Geo Recovery configuration Alias. */
var azEventhubsGeorecoveryAlias = /** @class */ (function (_super) {
    __extends(azEventhubsGeorecoveryAlias, _super);
    function azEventhubsGeorecoveryAlias() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    azEventhubsGeorecoveryAlias.authorization = azEventhubsGeorecoveryAliasAuthorization;
    return azEventhubsGeorecoveryAlias;
}(_azEventhubs.az_eventhubs_georecovery_alias));
var azEventhubsGeorecovery = /** @class */ (function () {
    function azEventhubsGeorecovery() {
    }
    /** Manage Azure EventHubs Geo Recovery configuration Alias. */
    azEventhubsGeorecovery.alias = azEventhubsGeorecoveryAlias;
    return azEventhubsGeorecovery;
}());
/** Manage Azure EventHubs Authorizationrule for Namespace. */
var azEventhubsNamespaceAuthorizationRule = /** @class */ (function (_super) {
    __extends(azEventhubsNamespaceAuthorizationRule, _super);
    function azEventhubsNamespaceAuthorizationRule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    azEventhubsNamespaceAuthorizationRule.keys = _azEventhubs.az_eventhubs_namespace_authorization_rule_keys;
    return azEventhubsNamespaceAuthorizationRule;
}(_azEventhubs.az_eventhubs_namespace_authorization_rule));
var azEventhubsNamespaceAuthorization = /** @class */ (function () {
    function azEventhubsNamespaceAuthorization() {
    }
    /** Manage Azure EventHubs Authorizationrule for Namespace. */
    azEventhubsNamespaceAuthorization.rule = azEventhubsNamespaceAuthorizationRule;
    return azEventhubsNamespaceAuthorization;
}());
var azEventhubsNamespaceNetwork = /** @class */ (function () {
    function azEventhubsNamespaceNetwork() {
    }
    azEventhubsNamespaceNetwork.rule = _azEventhubs.az_eventhubs_namespace_network_rule;
    return azEventhubsNamespaceNetwork;
}());
/** Manage Azure EventHubs namespace and Authorizationrule. */
var azEventhubsNamespace = /** @class */ (function (_super) {
    __extends(azEventhubsNamespace, _super);
    function azEventhubsNamespace() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    azEventhubsNamespace.authorization = azEventhubsNamespaceAuthorization;
    azEventhubsNamespace.network = azEventhubsNamespaceNetwork;
    return azEventhubsNamespace;
}(_azEventhubs.az_eventhubs_namespace));
/** Manage Azure Event Hubs namespaces, eventhubs, consumergroups and geo recovery configurations - Alias. */
var azEventhubs = /** @class */ (function (_super) {
    __extends(azEventhubs, _super);
    function azEventhubs() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /** Manage Azure EventHubs Clusters. */
    azEventhubs.cluster = azEventhubsCluster;
    /** Manage Azure EventHubs eventhub and authorization-rule. */
    azEventhubs.eventhub = azEventhubsEventhub;
    azEventhubs.georecovery = azEventhubsGeorecovery;
    /** Manage Azure EventHubs namespace and Authorizationrule. */
    azEventhubs.namespace = azEventhubsNamespace;
    return azEventhubs;
}(_azEventhubs.az_eventhubs));
var azFunctionappConfigAccess = /** @class */ (function () {
    function azFunctionappConfigAccess() {
    }
    azFunctionappConfigAccess.restriction = _azFunctionapp.az_functionapp_config_access_restriction;
    return azFunctionappConfigAccess;
}());
/** Configure a function app. */
var azFunctionappConfig = /** @class */ (function (_super) {
    __extends(azFunctionappConfig, _super);
    function azFunctionappConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    azFunctionappConfig.access = azFunctionappConfigAccess;
    azFunctionappConfig.appsettings = _azFunctionapp.az_functionapp_config_appsettings;
    azFunctionappConfig.container = _azFunctionapp.az_functionapp_config_container;
    azFunctionappConfig.hostname = _azFunctionapp.az_functionapp_config_hostname;
    azFunctionappConfig.ssl = _azFunctionapp.az_functionapp_config_ssl;
    return azFunctionappConfig;
}(_azFunctionapp.az_functionapp_config));
/** Manage function app deployments. */
var azFunctionappDeployment = /** @class */ (function (_super) {
    __extends(azFunctionappDeployment, _super);
    function azFunctionappDeployment() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    azFunctionappDeployment.container = _azFunctionapp.az_functionapp_deployment_container;
    azFunctionappDeployment.slot = _azFunctionapp.az_functionapp_deployment_slot;
    azFunctionappDeployment.source = _azFunctionapp.az_functionapp_deployment_source;
    azFunctionappDeployment.user = _azFunctionapp.az_functionapp_deployment_user;
    return azFunctionappDeployment;
}(_azFunctionapp.az_functionapp_deployment));
var azFunctionappDevops = /** @class */ (function () {
    function azFunctionappDevops() {
    }
    azFunctionappDevops.pipeline = _azFunctionapp.az_functionapp_devops_pipeline;
    return azFunctionappDevops;
}());
/** Manage function app functions. */
var azFunctionappFunction = /** @class */ (function (_super) {
    __extends(azFunctionappFunction, _super);
    function azFunctionappFunction() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    azFunctionappFunction.keys = _azFunctionapp.az_functionapp_function_keys;
    return azFunctionappFunction;
}(_azFunctionapp.az_functionapp_function));
var azFunctionappHybrid = /** @class */ (function () {
    function azFunctionappHybrid() {
    }
    azFunctionappHybrid.connection = _azFunctionapp.az_functionapp_hybrid_connection;
    return azFunctionappHybrid;
}());
/** */
var azFunctionappLog = /** @class */ (function (_super) {
    __extends(azFunctionappLog, _super);
    function azFunctionappLog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    azFunctionappLog.deployment = _azFunctionapp.az_functionapp_log_deployment;
    return azFunctionappLog;
}(_azFunctionapp.az_functionapp_log));
var azFunctionappVnet = /** @class */ (function () {
    function azFunctionappVnet() {
    }
    azFunctionappVnet.integration = _azFunctionapp.az_functionapp_vnet_integration;
    return azFunctionappVnet;
}());
/** Manage function apps. To install the Azure Functions Core tools see <a href="https://github.com/Azure/azure-functions-core-tools">https://github.com/Azure/azure-functions-core-tools</a>. */
var azFunctionapp = /** @class */ (function (_super) {
    __extends(azFunctionapp, _super);
    function azFunctionapp() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /** Configure a function app. */
    azFunctionapp.config = azFunctionappConfig;
    azFunctionapp.cors = _azFunctionapp.az_functionapp_cors;
    /** Manage function app deployments. */
    azFunctionapp.deployment = azFunctionappDeployment;
    azFunctionapp.devops = azFunctionappDevops;
    /** Manage function app functions. */
    azFunctionapp["function"] = azFunctionappFunction;
    azFunctionapp.hybrid = azFunctionappHybrid;
    azFunctionapp.identity = _azFunctionapp.az_functionapp_identity;
    azFunctionapp.keys = _azFunctionapp.az_functionapp_keys;
    azFunctionapp.log = azFunctionappLog;
    azFunctionapp.plan = _azFunctionapp.az_functionapp_plan;
    azFunctionapp.vnet = azFunctionappVnet;
    return azFunctionapp;
}(_azFunctionapp.az_functionapp));
/** Manage Azure Resource Manager deployments. */
var azGroupDeployment = /** @class */ (function (_super) {
    __extends(azGroupDeployment, _super);
    function azGroupDeployment() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    azGroupDeployment.operation = _azGroup.az_group_deployment_operation;
    return azGroupDeployment;
}(_azGroup.az_group_deployment));
/** Manage resource groups and template deployments. */
var azGroup = /** @class */ (function (_super) {
    __extends(azGroup, _super);
    function azGroup() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /** Manage Azure Resource Manager deployments. */
    azGroup.deployment = azGroupDeployment;
    azGroup.lock = _azGroup.az_group_lock;
    return azGroup;
}(_azGroup.az_group));
/** Manage HDInsight cluster's Autoscale configuration. */
var azHdinsightAutoscale = /** @class */ (function (_super) {
    __extends(azHdinsightAutoscale, _super);
    function azHdinsightAutoscale() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    azHdinsightAutoscale.condition = _azHdinsight.az_hdinsight_autoscale_condition;
    return azHdinsightAutoscale;
}(_azHdinsight.az_hdinsight_autoscale));
var azHdinsightScript = /** @class */ (function () {
    function azHdinsightScript() {
    }
    azHdinsightScript.action = _azHdinsight.az_hdinsight_script_action;
    return azHdinsightScript;
}());
/** Manage HDInsight resources. */
var azHdinsight = /** @class */ (function (_super) {
    __extends(azHdinsight, _super);
    function azHdinsight() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    azHdinsight.application = _azHdinsight.az_hdinsight_application;
    /** Manage HDInsight cluster's Autoscale configuration. */
    azHdinsight.autoscale = azHdinsightAutoscale;
    azHdinsight.host = _azHdinsight.az_hdinsight_host;
    azHdinsight.monitor = _azHdinsight.az_hdinsight_monitor;
    azHdinsight.script = azHdinsightScript;
    return azHdinsight;
}(_azHdinsight.az_hdinsight));
/** Manage and build image builder templates. */
var azImageBuilder = /** @class */ (function (_super) {
    __extends(azImageBuilder, _super);
    function azImageBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    azImageBuilder.customizer = _azImage.az_image_builder_customizer;
    azImageBuilder.output = _azImage.az_image_builder_output;
    return azImageBuilder;
}(_azImage.az_image_builder));
/** Manage custom virtual machine images. */
var azImage = /** @class */ (function (_super) {
    __extends(azImage, _super);
    function azImage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /** Manage and build image builder templates. */
    azImage.builder = azImageBuilder;
    return azImage;
}(_azImage.az_image));
/** Manage IoT Central resources. */
var azIotCentral = /** @class */ (function (_super) {
    __extends(azIotCentral, _super);
    function azIotCentral() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    azIotCentral.app = _azIot.az_iot_central_app;
    return azIotCentral;
}(_azIot.az_iot_central));
var azIotDpsAccess = /** @class */ (function () {
    function azIotDpsAccess() {
    }
    azIotDpsAccess.policy = _azIot.az_iot_dps_access_policy;
    return azIotDpsAccess;
}());
var azIotDpsLinked = /** @class */ (function () {
    function azIotDpsLinked() {
    }
    azIotDpsLinked.hub = _azIot.az_iot_dps_linked_hub;
    return azIotDpsLinked;
}());
/** Manage Azure IoT Hub Device Provisioning Service. */
var azIotDps = /** @class */ (function (_super) {
    __extends(azIotDps, _super);
    function azIotDps() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    azIotDps.access = azIotDpsAccess;
    azIotDps.certificate = _azIot.az_iot_dps_certificate;
    azIotDps.linked = azIotDpsLinked;
    return azIotDps;
}(_azIot.az_iot_dps));
var azIotHubConsumer = /** @class */ (function () {
    function azIotHubConsumer() {
    }
    azIotHubConsumer.group = _azIot.az_iot_hub_consumer_group;
    return azIotHubConsumer;
}());
var azIotHubMessage = /** @class */ (function () {
    function azIotHubMessage() {
    }
    azIotHubMessage.enrichment = _azIot.az_iot_hub_message_enrichment;
    return azIotHubMessage;
}());
var azIotHubRouting = /** @class */ (function () {
    function azIotHubRouting() {
    }
    azIotHubRouting.endpoint = _azIot.az_iot_hub_routing_endpoint;
    return azIotHubRouting;
}());
/** Manage Azure IoT hubs. */
var azIotHub = /** @class */ (function (_super) {
    __extends(azIotHub, _super);
    function azIotHub() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    azIotHub.certificate = _azIot.az_iot_hub_certificate;
    azIotHub.consumer = azIotHubConsumer;
    azIotHub.devicestream = _azIot.az_iot_hub_devicestream;
    azIotHub.message = azIotHubMessage;
    azIotHub.policy = _azIot.az_iot_hub_policy;
    azIotHub.route = _azIot.az_iot_hub_route;
    azIotHub.routing = azIotHubRouting;
    return azIotHub;
}(_azIot.az_iot_hub));
/** Manage Internet of Things (IoT) assets. */
var azIot = /** @class */ (function (_super) {
    __extends(azIot, _super);
    function azIot() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /** Manage IoT Central resources. */
    azIot.central = azIotCentral;
    /** Manage Azure IoT Hub Device Provisioning Service. */
    azIot.dps = azIotDps;
    /** Manage Azure IoT hubs. */
    azIot.hub = azIotHub;
    return azIot;
}(_azIot.az_iot));
/** Manage IoT Central assets. */
var azIotcentral = /** @class */ (function (_super) {
    __extends(azIotcentral, _super);
    function azIotcentral() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    azIotcentral.app = _azIotcentral.az_iotcentral_app;
    return azIotcentral;
}(_azIotcentral.az_iotcentral));
/** Manage certificate issuer information. */
var azKeyvaultCertificateIssuer = /** @class */ (function (_super) {
    __extends(azKeyvaultCertificateIssuer, _super);
    function azKeyvaultCertificateIssuer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    azKeyvaultCertificateIssuer.admin = _azKeyvault.az_keyvault_certificate_issuer_admin;
    return azKeyvaultCertificateIssuer;
}(_azKeyvault.az_keyvault_certificate_issuer));
/** Manage certificates. */
var azKeyvaultCertificate = /** @class */ (function (_super) {
    __extends(azKeyvaultCertificate, _super);
    function azKeyvaultCertificate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    azKeyvaultCertificate.contact = _azKeyvault.az_keyvault_certificate_contact;
    /** Manage certificate issuer information. */
    azKeyvaultCertificate.issuer = azKeyvaultCertificateIssuer;
    azKeyvaultCertificate.pending = _azKeyvault.az_keyvault_certificate_pending;
    return azKeyvaultCertificate;
}(_azKeyvault.az_keyvault_certificate));
var azKeyvaultNetwork = /** @class */ (function () {
    function azKeyvaultNetwork() {
    }
    azKeyvaultNetwork.rule = _azKeyvault.az_keyvault_network_rule;
    return azKeyvaultNetwork;
}());
var azKeyvaultPrivateEndpoint = /** @class */ (function () {
    function azKeyvaultPrivateEndpoint() {
    }
    azKeyvaultPrivateEndpoint.connection = _azKeyvault.az_keyvault_private_endpoint_connection;
    return azKeyvaultPrivateEndpoint;
}());
var azKeyvaultPrivateLink = /** @class */ (function () {
    function azKeyvaultPrivateLink() {
    }
    azKeyvaultPrivateLink.resource = _azKeyvault.az_keyvault_private_link_resource;
    return azKeyvaultPrivateLink;
}());
var azKeyvaultPrivate = /** @class */ (function () {
    function azKeyvaultPrivate() {
    }
    azKeyvaultPrivate.endpoint = azKeyvaultPrivateEndpoint;
    azKeyvaultPrivate.link = azKeyvaultPrivateLink;
    return azKeyvaultPrivate;
}());
/** Manage user roles for access control. */
var azKeyvaultRole = /** @class */ (function (_super) {
    __extends(azKeyvaultRole, _super);
    function azKeyvaultRole() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    azKeyvaultRole.assignment = _azKeyvault.az_keyvault_role_assignment;
    azKeyvaultRole.definition = _azKeyvault.az_keyvault_role_definition;
    return azKeyvaultRole;
}(_azKeyvault.az_keyvault_role));
var azKeyvaultSecurity = /** @class */ (function () {
    function azKeyvaultSecurity() {
    }
    azKeyvaultSecurity.domain = _azKeyvault.az_keyvault_security_domain;
    return azKeyvaultSecurity;
}());
var azKeyvaultStorageSas = /** @class */ (function () {
    function azKeyvaultStorageSas() {
    }
    azKeyvaultStorageSas.definition = _azKeyvault.az_keyvault_storage_sas_definition;
    return azKeyvaultStorageSas;
}());
/** Manage storage accounts. */
var azKeyvaultStorage = /** @class */ (function (_super) {
    __extends(azKeyvaultStorage, _super);
    function azKeyvaultStorage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    azKeyvaultStorage.sas = azKeyvaultStorageSas;
    return azKeyvaultStorage;
}(_azKeyvault.az_keyvault_storage));
/** Manage KeyVault keys, secrets, and certificates. */
var azKeyvault = /** @class */ (function (_super) {
    __extends(azKeyvault, _super);
    function azKeyvault() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    azKeyvault.backup = _azKeyvault.az_keyvault_backup;
    /** Manage certificates. */
    azKeyvault.certificate = azKeyvaultCertificate;
    azKeyvault.key = _azKeyvault.az_keyvault_key;
    azKeyvault.network = azKeyvaultNetwork;
    azKeyvault.private = azKeyvaultPrivate;
    azKeyvault.restore = _azKeyvault.az_keyvault_restore;
    /** Manage user roles for access control. */
    azKeyvault.role = azKeyvaultRole;
    azKeyvault.secret = _azKeyvault.az_keyvault_secret;
    azKeyvault.security = azKeyvaultSecurity;
    /** Manage storage accounts. */
    azKeyvault.storage = azKeyvaultStorage;
    return azKeyvault;
}(_azKeyvault.az_keyvault));
/** Manage Azure Kusto resources. */
var azKusto = /** @class */ (function (_super) {
    __extends(azKusto, _super);
    function azKusto() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    azKusto.cluster = _azKusto.az_kusto_cluster;
    azKusto.database = _azKusto.az_kusto_database;
    return azKusto;
}(_azKusto.az_kusto));
var azLabArm = /** @class */ (function () {
    function azLabArm() {
    }
    azLabArm.template = _azLab.az_lab_arm_template;
    return azLabArm;
}());
/** Manage DevTest Labs artifacts. */
var azLabArtifact = /** @class */ (function (_super) {
    __extends(azLabArtifact, _super);
    function azLabArtifact() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    azLabArtifact.source = _azLab.az_lab_artifact_source;
    return azLabArtifact;
}(_azLab.az_lab_artifact));
var azLabCustom = /** @class */ (function () {
    function azLabCustom() {
    }
    azLabCustom.image = _azLab.az_lab_custom_image;
    return azLabCustom;
}());
var azLabGallery = /** @class */ (function () {
    function azLabGallery() {
    }
    azLabGallery.image = _azLab.az_lab_gallery_image;
    return azLabGallery;
}());
/** Manage Azure DevTest Labs. */
var azLab = /** @class */ (function (_super) {
    __extends(azLab, _super);
    function azLab() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    azLab.arm = azLabArm;
    /** Manage DevTest Labs artifacts. */
    azLab.artifact = azLabArtifact;
    azLab.custom = azLabCustom;
    azLab.environment = _azLab.az_lab_environment;
    azLab.formula = _azLab.az_lab_formula;
    azLab.gallery = azLabGallery;
    azLab.secret = _azLab.az_lab_secret;
    azLab.vm = _azLab.az_lab_vm;
    azLab.vnet = _azLab.az_lab_vnet;
    return azLab;
}(_azLab.az_lab));
var azLocal = /** @class */ (function () {
    function azLocal() {
    }
    azLocal.context = _azLocal.az_local_context;
    return azLocal;
}());
/** Manage template solutions provided and maintained by Independent Software Vendors (ISVs). */
var azManagedapp = /** @class */ (function (_super) {
    __extends(azManagedapp, _super);
    function azManagedapp() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    azManagedapp.definition = _azManagedapp.az_managedapp_definition;
    return azManagedapp;
}(_azManagedapp.az_managedapp));
/** Manage the registration assignments and definitions in Azure. */
var azManagedservices = /** @class */ (function (_super) {
    __extends(azManagedservices, _super);
    function azManagedservices() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    azManagedservices.assignment = _azManagedservices.az_managedservices_assignment;
    azManagedservices.definition = _azManagedservices.az_managedservices_definition;
    return azManagedservices;
}(_azManagedservices.az_managedservices));
/** Manage Azure Maps accounts. */
var azMapsAccount = /** @class */ (function (_super) {
    __extends(azMapsAccount, _super);
    function azMapsAccount() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    azMapsAccount.keys = _azMaps.az_maps_account_keys;
    return azMapsAccount;
}(_azMaps.az_maps_account));
/** Manage Azure Maps. */
var azMaps = /** @class */ (function (_super) {
    __extends(azMaps, _super);
    function azMaps() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /** Manage Azure Maps accounts. */
    azMaps.account = azMapsAccount;
    return azMaps;
}(_azMaps.az_maps));
var azMariadbServerFirewall = /** @class */ (function () {
    function azMariadbServerFirewall() {
    }
    azMariadbServerFirewall.rule = _azMariadb.az_mariadb_server_firewall_rule;
    return azMariadbServerFirewall;
}());
var azMariadbServerPrivateEndpoint = /** @class */ (function () {
    function azMariadbServerPrivateEndpoint() {
    }
    azMariadbServerPrivateEndpoint.connection = _azMariadb.az_mariadb_server_private_endpoint_connection;
    return azMariadbServerPrivateEndpoint;
}());
var azMariadbServerPrivateLink = /** @class */ (function () {
    function azMariadbServerPrivateLink() {
    }
    azMariadbServerPrivateLink.resource = _azMariadb.az_mariadb_server_private_link_resource;
    return azMariadbServerPrivateLink;
}());
var azMariadbServerPrivate = /** @class */ (function () {
    function azMariadbServerPrivate() {
    }
    azMariadbServerPrivate.endpoint = azMariadbServerPrivateEndpoint;
    azMariadbServerPrivate.link = azMariadbServerPrivateLink;
    return azMariadbServerPrivate;
}());
var azMariadbServerVnet = /** @class */ (function () {
    function azMariadbServerVnet() {
    }
    azMariadbServerVnet.rule = _azMariadb.az_mariadb_server_vnet_rule;
    return azMariadbServerVnet;
}());
/** Manage MariaDB servers. */
var azMariadbServer = /** @class */ (function (_super) {
    __extends(azMariadbServer, _super);
    function azMariadbServer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    azMariadbServer.configuration = _azMariadb.az_mariadb_server_configuration;
    azMariadbServer.firewall = azMariadbServerFirewall;
    azMariadbServer.logs = _azMariadb.az_mariadb_server_logs;
    azMariadbServer.private = azMariadbServerPrivate;
    azMariadbServer.replica = _azMariadb.az_mariadb_server_replica;
    azMariadbServer.vnet = azMariadbServerVnet;
    return azMariadbServer;
}(_azMariadb.az_mariadb_server));
/** Manage Azure Database for MariaDB servers. */
var azMariadb = /** @class */ (function (_super) {
    __extends(azMariadb, _super);
    function azMariadb() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    azMariadb.db = _azMariadb.az_mariadb_db;
    /** Manage MariaDB servers. */
    azMariadb.server = azMariadbServer;
    return azMariadb;
}(_azMariadb.az_mariadb));
var azMonitorAction = /** @class */ (function () {
    function azMonitorAction() {
    }
    azMonitorAction.group = _azMonitor.az_monitor_action_group;
    return azMonitorAction;
}());
var azMonitorActivityLogAlertAction = /** @class */ (function () {
    function azMonitorActivityLogAlertAction() {
    }
    azMonitorActivityLogAlertAction.group = _azMonitor.az_monitor_activity_log_alert_action_group;
    return azMonitorActivityLogAlertAction;
}());
/** Manage activity log alerts. */
var azMonitorActivityLogAlert = /** @class */ (function (_super) {
    __extends(azMonitorActivityLogAlert, _super);
    function azMonitorActivityLogAlert() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    azMonitorActivityLogAlert.action = azMonitorActivityLogAlertAction;
    azMonitorActivityLogAlert.scope = _azMonitor.az_monitor_activity_log_alert_scope;
    return azMonitorActivityLogAlert;
}(_azMonitor.az_monitor_activity_log_alert));
/** Manage activity logs. */
var azMonitorActivityLog = /** @class */ (function (_super) {
    __extends(azMonitorActivityLog, _super);
    function azMonitorActivityLog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /** Manage activity log alerts. */
    azMonitorActivityLog.alert = azMonitorActivityLogAlert;
    return azMonitorActivityLog;
}(_azMonitor.az_monitor_activity_log));
var azMonitorActivity = /** @class */ (function () {
    function azMonitorActivity() {
    }
    /** Manage activity logs. */
    azMonitorActivity.log = azMonitorActivityLog;
    return azMonitorActivity;
}());
/** Manage autoscale settings. */
var azMonitorAutoscale = /** @class */ (function (_super) {
    __extends(azMonitorAutoscale, _super);
    function azMonitorAutoscale() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    azMonitorAutoscale.profile = _azMonitor.az_monitor_autoscale_profile;
    azMonitorAutoscale.rule = _azMonitor.az_monitor_autoscale_rule;
    azMonitorAutoscale.settings = _azMonitor.az_monitor_autoscale_settings;
    return azMonitorAutoscale;
}(_azMonitor.az_monitor_autoscale));
/** Manage service diagnostic settings. */
var azMonitorDiagnosticSettings = /** @class */ (function (_super) {
    __extends(azMonitorDiagnosticSettings, _super);
    function azMonitorDiagnosticSettings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    azMonitorDiagnosticSettings.categories = _azMonitor.az_monitor_diagnostic_settings_categories;
    azMonitorDiagnosticSettings.subscription = _azMonitor.az_monitor_diagnostic_settings_subscription;
    return azMonitorDiagnosticSettings;
}(_azMonitor.az_monitor_diagnostic_settings));
var azMonitorDiagnostic = /** @class */ (function () {
    function azMonitorDiagnostic() {
    }
    /** Manage service diagnostic settings. */
    azMonitorDiagnostic.settings = azMonitorDiagnosticSettings;
    return azMonitorDiagnostic;
}());
var azMonitorLogAnalyticsWorkspaceData = /** @class */ (function () {
    function azMonitorLogAnalyticsWorkspaceData() {
    }
    azMonitorLogAnalyticsWorkspaceData["export"] = _azMonitor.az_monitor_log_analytics_workspace_data_export;
    return azMonitorLogAnalyticsWorkspaceData;
}());
var azMonitorLogAnalyticsWorkspaceLinked = /** @class */ (function () {
    function azMonitorLogAnalyticsWorkspaceLinked() {
    }
    azMonitorLogAnalyticsWorkspaceLinked.service = _azMonitor.az_monitor_log_analytics_workspace_linked_service;
    azMonitorLogAnalyticsWorkspaceLinked.storage = _azMonitor.az_monitor_log_analytics_workspace_linked_storage;
    return azMonitorLogAnalyticsWorkspaceLinked;
}());
var azMonitorLogAnalyticsWorkspaceSaved = /** @class */ (function () {
    function azMonitorLogAnalyticsWorkspaceSaved() {
    }
    azMonitorLogAnalyticsWorkspaceSaved.search = _azMonitor.az_monitor_log_analytics_workspace_saved_search;
    return azMonitorLogAnalyticsWorkspaceSaved;
}());
/** Manage Azure log analytics workspace. */
var azMonitorLogAnalyticsWorkspace = /** @class */ (function (_super) {
    __extends(azMonitorLogAnalyticsWorkspace, _super);
    function azMonitorLogAnalyticsWorkspace() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    azMonitorLogAnalyticsWorkspace.data = azMonitorLogAnalyticsWorkspaceData;
    azMonitorLogAnalyticsWorkspace.linked = azMonitorLogAnalyticsWorkspaceLinked;
    azMonitorLogAnalyticsWorkspace.pack = _azMonitor.az_monitor_log_analytics_workspace_pack;
    azMonitorLogAnalyticsWorkspace.saved = azMonitorLogAnalyticsWorkspaceSaved;
    azMonitorLogAnalyticsWorkspace.table = _azMonitor.az_monitor_log_analytics_workspace_table;
    return azMonitorLogAnalyticsWorkspace;
}(_azMonitor.az_monitor_log_analytics_workspace));
/** Manage Azure log analytics. */
var azMonitorLogAnalytics = /** @class */ (function (_super) {
    __extends(azMonitorLogAnalytics, _super);
    function azMonitorLogAnalytics() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    azMonitorLogAnalytics.cluster = _azMonitor.az_monitor_log_analytics_cluster;
    /** Manage Azure log analytics workspace. */
    azMonitorLogAnalytics.workspace = azMonitorLogAnalyticsWorkspace;
    return azMonitorLogAnalytics;
}(_azMonitor.az_monitor_log_analytics));
var azMonitorLog = /** @class */ (function () {
    function azMonitorLog() {
    }
    /** Manage Azure log analytics. */
    azMonitorLog.analytics = azMonitorLogAnalytics;
    azMonitorLog.profiles = _azMonitor.az_monitor_log_profiles;
    return azMonitorLog;
}());
/** View Azure resource metrics. */
var azMonitorMetrics = /** @class */ (function (_super) {
    __extends(azMonitorMetrics, _super);
    function azMonitorMetrics() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    azMonitorMetrics.alert = _azMonitor.az_monitor_metrics_alert;
    return azMonitorMetrics;
}(_azMonitor.az_monitor_metrics));
var azMonitorPrivateLinkScopePrivateEndpoint = /** @class */ (function () {
    function azMonitorPrivateLinkScopePrivateEndpoint() {
    }
    azMonitorPrivateLinkScopePrivateEndpoint.connection = _azMonitor.az_monitor_private_link_scope_private_endpoint_connection;
    return azMonitorPrivateLinkScopePrivateEndpoint;
}());
var azMonitorPrivateLinkScopePrivateLink = /** @class */ (function () {
    function azMonitorPrivateLinkScopePrivateLink() {
    }
    azMonitorPrivateLinkScopePrivateLink.resource = _azMonitor.az_monitor_private_link_scope_private_link_resource;
    return azMonitorPrivateLinkScopePrivateLink;
}());
var azMonitorPrivateLinkScopePrivate = /** @class */ (function () {
    function azMonitorPrivateLinkScopePrivate() {
    }
    azMonitorPrivateLinkScopePrivate.endpoint = azMonitorPrivateLinkScopePrivateEndpoint;
    azMonitorPrivateLinkScopePrivate.link = azMonitorPrivateLinkScopePrivateLink;
    return azMonitorPrivateLinkScopePrivate;
}());
var azMonitorPrivateLinkScopeScoped = /** @class */ (function () {
    function azMonitorPrivateLinkScopeScoped() {
    }
    azMonitorPrivateLinkScopeScoped.resource = _azMonitor.az_monitor_private_link_scope_scoped_resource;
    return azMonitorPrivateLinkScopeScoped;
}());
/** Manage monitor private link scope resource. */
var azMonitorPrivateLinkScope = /** @class */ (function (_super) {
    __extends(azMonitorPrivateLinkScope, _super);
    function azMonitorPrivateLinkScope() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    azMonitorPrivateLinkScope.private = azMonitorPrivateLinkScopePrivate;
    azMonitorPrivateLinkScope.scoped = azMonitorPrivateLinkScopeScoped;
    return azMonitorPrivateLinkScope;
}(_azMonitor.az_monitor_private_link_scope));
var azMonitorPrivateLink = /** @class */ (function () {
    function azMonitorPrivateLink() {
    }
    /** Manage monitor private link scope resource. */
    azMonitorPrivateLink.scope = azMonitorPrivateLinkScope;
    return azMonitorPrivateLink;
}());
var azMonitorPrivate = /** @class */ (function () {
    function azMonitorPrivate() {
    }
    azMonitorPrivate.link = azMonitorPrivateLink;
    return azMonitorPrivate;
}());
/** Manage the Azure Monitor Service. */
var azMonitor = /** @class */ (function (_super) {
    __extends(azMonitor, _super);
    function azMonitor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    azMonitor.action = azMonitorAction;
    azMonitor.activity = azMonitorActivity;
    azMonitor.alert = _azMonitor.az_monitor_alert;
    /** Manage autoscale settings. */
    azMonitor.autoscale = azMonitorAutoscale;
    azMonitor.diagnostic = azMonitorDiagnostic;
    azMonitor.log = azMonitorLog;
    /** View Azure resource metrics. */
    azMonitor.metrics = azMonitorMetrics;
    azMonitor.private = azMonitorPrivate;
    return azMonitor;
}(_azMonitor.az_monitor));
var azMysqlFlexibleServerFirewall = /** @class */ (function () {
    function azMysqlFlexibleServerFirewall() {
    }
    azMysqlFlexibleServerFirewall.rule = _azMysql.az_mysql_flexible_server_firewall_rule;
    return azMysqlFlexibleServerFirewall;
}());
/** Manage Azure Database for MySQL Flexible Servers. */
var azMysqlFlexibleServer = /** @class */ (function (_super) {
    __extends(azMysqlFlexibleServer, _super);
    function azMysqlFlexibleServer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    azMysqlFlexibleServer.db = _azMysql.az_mysql_flexible_server_db;
    azMysqlFlexibleServer.firewall = azMysqlFlexibleServerFirewall;
    azMysqlFlexibleServer.parameter = _azMysql.az_mysql_flexible_server_parameter;
    azMysqlFlexibleServer.replica = _azMysql.az_mysql_flexible_server_replica;
    return azMysqlFlexibleServer;
}(_azMysql.az_mysql_flexible_server));
var azMysqlFlexible = /** @class */ (function () {
    function azMysqlFlexible() {
    }
    /** Manage Azure Database for MySQL Flexible Servers. */
    azMysqlFlexible.server = azMysqlFlexibleServer;
    return azMysqlFlexible;
}());
var azMysqlServerAd = /** @class */ (function () {
    function azMysqlServerAd() {
    }
    azMysqlServerAd.admin = _azMysql.az_mysql_server_ad_admin;
    return azMysqlServerAd;
}());
var azMysqlServerFirewall = /** @class */ (function () {
    function azMysqlServerFirewall() {
    }
    azMysqlServerFirewall.rule = _azMysql.az_mysql_server_firewall_rule;
    return azMysqlServerFirewall;
}());
var azMysqlServerPrivateEndpoint = /** @class */ (function () {
    function azMysqlServerPrivateEndpoint() {
    }
    azMysqlServerPrivateEndpoint.connection = _azMysql.az_mysql_server_private_endpoint_connection;
    return azMysqlServerPrivateEndpoint;
}());
var azMysqlServerPrivateLink = /** @class */ (function () {
    function azMysqlServerPrivateLink() {
    }
    azMysqlServerPrivateLink.resource = _azMysql.az_mysql_server_private_link_resource;
    return azMysqlServerPrivateLink;
}());
var azMysqlServerPrivate = /** @class */ (function () {
    function azMysqlServerPrivate() {
    }
    azMysqlServerPrivate.endpoint = azMysqlServerPrivateEndpoint;
    azMysqlServerPrivate.link = azMysqlServerPrivateLink;
    return azMysqlServerPrivate;
}());
var azMysqlServerVnet = /** @class */ (function () {
    function azMysqlServerVnet() {
    }
    azMysqlServerVnet.rule = _azMysql.az_mysql_server_vnet_rule;
    return azMysqlServerVnet;
}());
/** Manage MySQL servers. */
var azMysqlServer = /** @class */ (function (_super) {
    __extends(azMysqlServer, _super);
    function azMysqlServer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    azMysqlServer.ad = azMysqlServerAd;
    azMysqlServer.configuration = _azMysql.az_mysql_server_configuration;
    azMysqlServer.firewall = azMysqlServerFirewall;
    azMysqlServer.key = _azMysql.az_mysql_server_key;
    azMysqlServer.logs = _azMysql.az_mysql_server_logs;
    azMysqlServer.private = azMysqlServerPrivate;
    azMysqlServer.replica = _azMysql.az_mysql_server_replica;
    azMysqlServer.vnet = azMysqlServerVnet;
    return azMysqlServer;
}(_azMysql.az_mysql_server));
/** Manage Azure Database for MySQL servers. */
var azMysql = /** @class */ (function (_super) {
    __extends(azMysql, _super);
    function azMysql() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    azMysql.db = _azMysql.az_mysql_db;
    azMysql.flexible = azMysqlFlexible;
    /** Manage MySQL servers. */
    azMysql.server = azMysqlServer;
    return azMysql;
}(_azMysql.az_mysql));
/** Manage Azure NetApp Files (ANF) Account Resources. */
var azNetappfilesAccount = /** @class */ (function (_super) {
    __extends(azNetappfilesAccount, _super);
    function azNetappfilesAccount() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    azNetappfilesAccount.ad = _azNetappfiles.az_netappfiles_account_ad;
    return azNetappfilesAccount;
}(_azNetappfiles.az_netappfiles_account));
var azNetappfilesVolumeExport = /** @class */ (function () {
    function azNetappfilesVolumeExport() {
    }
    azNetappfilesVolumeExport.policy = _azNetappfiles.az_netappfiles_volume_export_policy;
    return azNetappfilesVolumeExport;
}());
/** Manage Azure NetApp Files (ANF) Volume Resources. */
var azNetappfilesVolume = /** @class */ (function (_super) {
    __extends(azNetappfilesVolume, _super);
    function azNetappfilesVolume() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    azNetappfilesVolume["export"] = azNetappfilesVolumeExport;
    azNetappfilesVolume.replication = _azNetappfiles.az_netappfiles_volume_replication;
    return azNetappfilesVolume;
}(_azNetappfiles.az_netappfiles_volume));
/** Manage Azure NetApp Files (ANF) Resources. */
var azNetappfiles = /** @class */ (function (_super) {
    __extends(azNetappfiles, _super);
    function azNetappfiles() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /** Manage Azure NetApp Files (ANF) Account Resources. */
    azNetappfiles.account = azNetappfilesAccount;
    azNetappfiles.pool = _azNetappfiles.az_netappfiles_pool;
    azNetappfiles.snapshot = _azNetappfiles.az_netappfiles_snapshot;
    /** Manage Azure NetApp Files (ANF) Volume Resources. */
    azNetappfiles.volume = azNetappfilesVolume;
    return azNetappfiles;
}(_azNetappfiles.az_netappfiles));
var azNetworkApplicationGatewayAddress = /** @class */ (function () {
    function azNetworkApplicationGatewayAddress() {
    }
    azNetworkApplicationGatewayAddress.pool = _azNetwork.az_network_application_gateway_address_pool;
    return azNetworkApplicationGatewayAddress;
}());
var azNetworkApplicationGatewayAuth = /** @class */ (function () {
    function azNetworkApplicationGatewayAuth() {
    }
    azNetworkApplicationGatewayAuth.cert = _azNetwork.az_network_application_gateway_auth_cert;
    return azNetworkApplicationGatewayAuth;
}());
var azNetworkApplicationGatewayFrontend = /** @class */ (function () {
    function azNetworkApplicationGatewayFrontend() {
    }
    azNetworkApplicationGatewayFrontend.ip = _azNetwork.az_network_application_gateway_frontend_ip;
    azNetworkApplicationGatewayFrontend.port = _azNetwork.az_network_application_gateway_frontend_port;
    return azNetworkApplicationGatewayFrontend;
}());
var azNetworkApplicationGatewayHttp = /** @class */ (function () {
    function azNetworkApplicationGatewayHttp() {
    }
    azNetworkApplicationGatewayHttp.listener = _azNetwork.az_network_application_gateway_http_listener;
    azNetworkApplicationGatewayHttp.settings = _azNetwork.az_network_application_gateway_http_settings;
    return azNetworkApplicationGatewayHttp;
}());
var azNetworkApplicationGatewayPrivateLinkIp = /** @class */ (function () {
    function azNetworkApplicationGatewayPrivateLinkIp() {
    }
    azNetworkApplicationGatewayPrivateLinkIp.config = _azNetwork.az_network_application_gateway_private_link_ip_config;
    return azNetworkApplicationGatewayPrivateLinkIp;
}());
/** Manage Private Link of an Application Gateway. */
var azNetworkApplicationGatewayPrivateLink = /** @class */ (function (_super) {
    __extends(azNetworkApplicationGatewayPrivateLink, _super);
    function azNetworkApplicationGatewayPrivateLink() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    azNetworkApplicationGatewayPrivateLink.ip = azNetworkApplicationGatewayPrivateLinkIp;
    return azNetworkApplicationGatewayPrivateLink;
}(_azNetwork.az_network_application_gateway_private_link));
var azNetworkApplicationGatewayPrivate = /** @class */ (function () {
    function azNetworkApplicationGatewayPrivate() {
    }
    /** Manage Private Link of an Application Gateway. */
    azNetworkApplicationGatewayPrivate.link = azNetworkApplicationGatewayPrivateLink;
    return azNetworkApplicationGatewayPrivate;
}());
var azNetworkApplicationGatewayRedirect = /** @class */ (function () {
    function azNetworkApplicationGatewayRedirect() {
    }
    azNetworkApplicationGatewayRedirect.config = _azNetwork.az_network_application_gateway_redirect_config;
    return azNetworkApplicationGatewayRedirect;
}());
/** Manage rewrite rules of an application gateway. */
var azNetworkApplicationGatewayRewriteRule = /** @class */ (function (_super) {
    __extends(azNetworkApplicationGatewayRewriteRule, _super);
    function azNetworkApplicationGatewayRewriteRule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    azNetworkApplicationGatewayRewriteRule.condition = _azNetwork.az_network_application_gateway_rewrite_rule_condition;
    azNetworkApplicationGatewayRewriteRule.set = _azNetwork.az_network_application_gateway_rewrite_rule_set;
    return azNetworkApplicationGatewayRewriteRule;
}(_azNetwork.az_network_application_gateway_rewrite_rule));
var azNetworkApplicationGatewayRewrite = /** @class */ (function () {
    function azNetworkApplicationGatewayRewrite() {
    }
    /** Manage rewrite rules of an application gateway. */
    azNetworkApplicationGatewayRewrite.rule = azNetworkApplicationGatewayRewriteRule;
    return azNetworkApplicationGatewayRewrite;
}());
var azNetworkApplicationGatewayRoot = /** @class */ (function () {
    function azNetworkApplicationGatewayRoot() {
    }
    azNetworkApplicationGatewayRoot.cert = _azNetwork.az_network_application_gateway_root_cert;
    return azNetworkApplicationGatewayRoot;
}());
/** Manage the SSL policy of an application gateway. */
var azNetworkApplicationGatewaySslPolicy = /** @class */ (function (_super) {
    __extends(azNetworkApplicationGatewaySslPolicy, _super);
    function azNetworkApplicationGatewaySslPolicy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    azNetworkApplicationGatewaySslPolicy.predefined = _azNetwork.az_network_application_gateway_ssl_policy_predefined;
    return azNetworkApplicationGatewaySslPolicy;
}(_azNetwork.az_network_application_gateway_ssl_policy));
var azNetworkApplicationGatewaySsl = /** @class */ (function () {
    function azNetworkApplicationGatewaySsl() {
    }
    azNetworkApplicationGatewaySsl.cert = _azNetwork.az_network_application_gateway_ssl_cert;
    /** Manage the SSL policy of an application gateway. */
    azNetworkApplicationGatewaySsl.policy = azNetworkApplicationGatewaySslPolicy;
    return azNetworkApplicationGatewaySsl;
}());
/** Manage URL path maps of an application gateway. */
var azNetworkApplicationGatewayUrlPathMap = /** @class */ (function (_super) {
    __extends(azNetworkApplicationGatewayUrlPathMap, _super);
    function azNetworkApplicationGatewayUrlPathMap() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    azNetworkApplicationGatewayUrlPathMap.rule = _azNetwork.az_network_application_gateway_url_path_map_rule;
    return azNetworkApplicationGatewayUrlPathMap;
}(_azNetwork.az_network_application_gateway_url_path_map));
var azNetworkApplicationGatewayUrlPath = /** @class */ (function () {
    function azNetworkApplicationGatewayUrlPath() {
    }
    /** Manage URL path maps of an application gateway. */
    azNetworkApplicationGatewayUrlPath.map = azNetworkApplicationGatewayUrlPathMap;
    return azNetworkApplicationGatewayUrlPath;
}());
var azNetworkApplicationGatewayUrl = /** @class */ (function () {
    function azNetworkApplicationGatewayUrl() {
    }
    azNetworkApplicationGatewayUrl.path = azNetworkApplicationGatewayUrlPath;
    return azNetworkApplicationGatewayUrl;
}());
var azNetworkApplicationGatewayWafPolicyCustomRuleMatch = /** @class */ (function () {
    function azNetworkApplicationGatewayWafPolicyCustomRuleMatch() {
    }
    azNetworkApplicationGatewayWafPolicyCustomRuleMatch.condition = _azNetwork.az_network_application_gateway_waf_policy_custom_rule_match_condition;
    return azNetworkApplicationGatewayWafPolicyCustomRuleMatch;
}());
/** Manage application gateway web application firewall (WAF) policy custom rules. */
var azNetworkApplicationGatewayWafPolicyCustomRule = /** @class */ (function (_super) {
    __extends(azNetworkApplicationGatewayWafPolicyCustomRule, _super);
    function azNetworkApplicationGatewayWafPolicyCustomRule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    azNetworkApplicationGatewayWafPolicyCustomRule.match = azNetworkApplicationGatewayWafPolicyCustomRuleMatch;
    return azNetworkApplicationGatewayWafPolicyCustomRule;
}(_azNetwork.az_network_application_gateway_waf_policy_custom_rule));
var azNetworkApplicationGatewayWafPolicyCustom = /** @class */ (function () {
    function azNetworkApplicationGatewayWafPolicyCustom() {
    }
    /** Manage application gateway web application firewall (WAF) policy custom rules. */
    azNetworkApplicationGatewayWafPolicyCustom.rule = azNetworkApplicationGatewayWafPolicyCustomRule;
    return azNetworkApplicationGatewayWafPolicyCustom;
}());
var azNetworkApplicationGatewayWafPolicyManagedRuleRule = /** @class */ (function () {
    function azNetworkApplicationGatewayWafPolicyManagedRuleRule() {
    }
    azNetworkApplicationGatewayWafPolicyManagedRuleRule.set = _azNetwork.az_network_application_gateway_waf_policy_managed_rule_rule_set;
    return azNetworkApplicationGatewayWafPolicyManagedRuleRule;
}());
/** Manage managed rules of a waf-policy. Visit: <a href="https://docs.microsoft.com/en-us/azure/web-application-firewall/afds/afds-overview">https://docs.microsoft.com/en-us/azure/web-application-firewall/afds/afds-overview</a>. */
var azNetworkApplicationGatewayWafPolicyManagedRule = /** @class */ (function (_super) {
    __extends(azNetworkApplicationGatewayWafPolicyManagedRule, _super);
    function azNetworkApplicationGatewayWafPolicyManagedRule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    azNetworkApplicationGatewayWafPolicyManagedRule.exclusion = _azNetwork.az_network_application_gateway_waf_policy_managed_rule_exclusion;
    azNetworkApplicationGatewayWafPolicyManagedRule.rule = azNetworkApplicationGatewayWafPolicyManagedRuleRule;
    return azNetworkApplicationGatewayWafPolicyManagedRule;
}(_azNetwork.az_network_application_gateway_waf_policy_managed_rule));
var azNetworkApplicationGatewayWafPolicyManaged = /** @class */ (function () {
    function azNetworkApplicationGatewayWafPolicyManaged() {
    }
    /** Manage managed rules of a waf-policy. Visit: <a href="https://docs.microsoft.com/en-us/azure/web-application-firewall/afds/afds-overview">https://docs.microsoft.com/en-us/azure/web-application-firewall/afds/afds-overview</a>. */
    azNetworkApplicationGatewayWafPolicyManaged.rule = azNetworkApplicationGatewayWafPolicyManagedRule;
    return azNetworkApplicationGatewayWafPolicyManaged;
}());
var azNetworkApplicationGatewayWafPolicyPolicy = /** @class */ (function () {
    function azNetworkApplicationGatewayWafPolicyPolicy() {
    }
    azNetworkApplicationGatewayWafPolicyPolicy.setting = _azNetwork.az_network_application_gateway_waf_policy_policy_setting;
    return azNetworkApplicationGatewayWafPolicyPolicy;
}());
/** Manage application gateway web application firewall (WAF) policies. */
var azNetworkApplicationGatewayWafPolicy = /** @class */ (function (_super) {
    __extends(azNetworkApplicationGatewayWafPolicy, _super);
    function azNetworkApplicationGatewayWafPolicy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    azNetworkApplicationGatewayWafPolicy.custom = azNetworkApplicationGatewayWafPolicyCustom;
    azNetworkApplicationGatewayWafPolicy.managed = azNetworkApplicationGatewayWafPolicyManaged;
    azNetworkApplicationGatewayWafPolicy.policy = azNetworkApplicationGatewayWafPolicyPolicy;
    return azNetworkApplicationGatewayWafPolicy;
}(_azNetwork.az_network_application_gateway_waf_policy));
var azNetworkApplicationGatewayWaf = /** @class */ (function () {
    function azNetworkApplicationGatewayWaf() {
    }
    azNetworkApplicationGatewayWaf.config = _azNetwork.az_network_application_gateway_waf_config;
    /** Manage application gateway web application firewall (WAF) policies. */
    azNetworkApplicationGatewayWaf.policy = azNetworkApplicationGatewayWafPolicy;
    return azNetworkApplicationGatewayWaf;
}());
/** Manage application-level routing and load balancing services. */
var azNetworkApplicationGateway = /** @class */ (function (_super) {
    __extends(azNetworkApplicationGateway, _super);
    function azNetworkApplicationGateway() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    azNetworkApplicationGateway.address = azNetworkApplicationGatewayAddress;
    azNetworkApplicationGateway.auth = azNetworkApplicationGatewayAuth;
    azNetworkApplicationGateway.frontend = azNetworkApplicationGatewayFrontend;
    azNetworkApplicationGateway.http = azNetworkApplicationGatewayHttp;
    azNetworkApplicationGateway.identity = _azNetwork.az_network_application_gateway_identity;
    azNetworkApplicationGateway.private = azNetworkApplicationGatewayPrivate;
    azNetworkApplicationGateway.probe = _azNetwork.az_network_application_gateway_probe;
    azNetworkApplicationGateway.redirect = azNetworkApplicationGatewayRedirect;
    azNetworkApplicationGateway.rewrite = azNetworkApplicationGatewayRewrite;
    azNetworkApplicationGateway.root = azNetworkApplicationGatewayRoot;
    azNetworkApplicationGateway.rule = _azNetwork.az_network_application_gateway_rule;
    azNetworkApplicationGateway.ssl = azNetworkApplicationGatewaySsl;
    azNetworkApplicationGateway.url = azNetworkApplicationGatewayUrl;
    azNetworkApplicationGateway.waf = azNetworkApplicationGatewayWaf;
    return azNetworkApplicationGateway;
}(_azNetwork.az_network_application_gateway));
var azNetworkApplication = /** @class */ (function () {
    function azNetworkApplication() {
    }
    /** Manage application-level routing and load balancing services. */
    azNetworkApplication.gateway = azNetworkApplicationGateway;
    return azNetworkApplication;
}());
var azNetworkDdos = /** @class */ (function () {
    function azNetworkDdos() {
    }
    azNetworkDdos.protection = _azNetwork.az_network_ddos_protection;
    return azNetworkDdos;
}());
/** Manage DNS records and record sets. */
var azNetworkDnsRecordSet = /** @class */ (function (_super) {
    __extends(azNetworkDnsRecordSet, _super);
    function azNetworkDnsRecordSet() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    azNetworkDnsRecordSet.a = _azNetwork.az_network_dns_record_set_a;
    azNetworkDnsRecordSet.aaaa = _azNetwork.az_network_dns_record_set_aaaa;
    azNetworkDnsRecordSet.caa = _azNetwork.az_network_dns_record_set_caa;
    azNetworkDnsRecordSet.cname = _azNetwork.az_network_dns_record_set_cname;
    azNetworkDnsRecordSet.mx = _azNetwork.az_network_dns_record_set_mx;
    azNetworkDnsRecordSet.ns = _azNetwork.az_network_dns_record_set_ns;
    azNetworkDnsRecordSet.ptr = _azNetwork.az_network_dns_record_set_ptr;
    azNetworkDnsRecordSet.soa = _azNetwork.az_network_dns_record_set_soa;
    azNetworkDnsRecordSet.srv = _azNetwork.az_network_dns_record_set_srv;
    azNetworkDnsRecordSet.txt = _azNetwork.az_network_dns_record_set_txt;
    return azNetworkDnsRecordSet;
}(_azNetwork.az_network_dns_record_set));
var azNetworkDnsRecord = /** @class */ (function () {
    function azNetworkDnsRecord() {
    }
    /** Manage DNS records and record sets. */
    azNetworkDnsRecord.set = azNetworkDnsRecordSet;
    return azNetworkDnsRecord;
}());
/** Manage DNS domains in Azure. */
var azNetworkDns = /** @class */ (function (_super) {
    __extends(azNetworkDns, _super);
    function azNetworkDns() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    azNetworkDns.record = azNetworkDnsRecord;
    azNetworkDns.zone = _azNetwork.az_network_dns_zone;
    return azNetworkDns;
}(_azNetwork.az_network_dns));
/** Manage ExpressRoute gateways. */
var azNetworkExpressRouteGateway = /** @class */ (function (_super) {
    __extends(azNetworkExpressRouteGateway, _super);
    function azNetworkExpressRouteGateway() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    azNetworkExpressRouteGateway.connection = _azNetwork.az_network_express_route_gateway_connection;
    return azNetworkExpressRouteGateway;
}(_azNetwork.az_network_express_route_gateway));
var azNetworkExpressRoutePeeringPeer = /** @class */ (function () {
    function azNetworkExpressRoutePeeringPeer() {
    }
    azNetworkExpressRoutePeeringPeer.connection = _azNetwork.az_network_express_route_peering_peer_connection;
    return azNetworkExpressRoutePeeringPeer;
}());
/** Manage ExpressRoute peering of an ExpressRoute circuit. */
var azNetworkExpressRoutePeering = /** @class */ (function (_super) {
    __extends(azNetworkExpressRoutePeering, _super);
    function azNetworkExpressRoutePeering() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    azNetworkExpressRoutePeering.connection = _azNetwork.az_network_express_route_peering_connection;
    azNetworkExpressRoutePeering.peer = azNetworkExpressRoutePeeringPeer;
    return azNetworkExpressRoutePeering;
}(_azNetwork.az_network_express_route_peering));
/** Manage ExpressRoute ports. */
var azNetworkExpressRoutePort = /** @class */ (function (_super) {
    __extends(azNetworkExpressRoutePort, _super);
    function azNetworkExpressRoutePort() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    azNetworkExpressRoutePort.identity = _azNetwork.az_network_express_route_port_identity;
    azNetworkExpressRoutePort.link = _azNetwork.az_network_express_route_port_link;
    azNetworkExpressRoutePort.location = _azNetwork.az_network_express_route_port_location;
    return azNetworkExpressRoutePort;
}(_azNetwork.az_network_express_route_port));
/** Manage dedicated private network fiber connections to Azure. */
var azNetworkExpressRoute = /** @class */ (function (_super) {
    __extends(azNetworkExpressRoute, _super);
    function azNetworkExpressRoute() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    azNetworkExpressRoute.auth = _azNetwork.az_network_express_route_auth;
    /** Manage ExpressRoute gateways. */
    azNetworkExpressRoute.gateway = azNetworkExpressRouteGateway;
    /** Manage ExpressRoute peering of an ExpressRoute circuit. */
    azNetworkExpressRoute.peering = azNetworkExpressRoutePeering;
    /** Manage ExpressRoute ports. */
    azNetworkExpressRoute.port = azNetworkExpressRoutePort;
    return azNetworkExpressRoute;
}(_azNetwork.az_network_express_route));
var azNetworkExpress = /** @class */ (function () {
    function azNetworkExpress() {
    }
    /** Manage dedicated private network fiber connections to Azure. */
    azNetworkExpress.route = azNetworkExpressRoute;
    return azNetworkExpress;
}());
/** Manage address pools of a load balancer. */
var azNetworkLbAddressPool = /** @class */ (function (_super) {
    __extends(azNetworkLbAddressPool, _super);
    function azNetworkLbAddressPool() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    azNetworkLbAddressPool.address = _azNetwork.az_network_lb_address_pool_address;
    return azNetworkLbAddressPool;
}(_azNetwork.az_network_lb_address_pool));
var azNetworkLbAddress = /** @class */ (function () {
    function azNetworkLbAddress() {
    }
    /** Manage address pools of a load balancer. */
    azNetworkLbAddress.pool = azNetworkLbAddressPool;
    return azNetworkLbAddress;
}());
var azNetworkLbFrontend = /** @class */ (function () {
    function azNetworkLbFrontend() {
    }
    azNetworkLbFrontend.ip = _azNetwork.az_network_lb_frontend_ip;
    return azNetworkLbFrontend;
}());
var azNetworkLbInboundNat = /** @class */ (function () {
    function azNetworkLbInboundNat() {
    }
    azNetworkLbInboundNat.pool = _azNetwork.az_network_lb_inbound_nat_pool;
    azNetworkLbInboundNat.rule = _azNetwork.az_network_lb_inbound_nat_rule;
    return azNetworkLbInboundNat;
}());
var azNetworkLbInbound = /** @class */ (function () {
    function azNetworkLbInbound() {
    }
    azNetworkLbInbound.nat = azNetworkLbInboundNat;
    return azNetworkLbInbound;
}());
var azNetworkLbOutbound = /** @class */ (function () {
    function azNetworkLbOutbound() {
    }
    azNetworkLbOutbound.rule = _azNetwork.az_network_lb_outbound_rule;
    return azNetworkLbOutbound;
}());
/** Manage and configure load balancers. */
var azNetworkLb = /** @class */ (function (_super) {
    __extends(azNetworkLb, _super);
    function azNetworkLb() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    azNetworkLb.address = azNetworkLbAddress;
    azNetworkLb.frontend = azNetworkLbFrontend;
    azNetworkLb.inbound = azNetworkLbInbound;
    azNetworkLb.outbound = azNetworkLbOutbound;
    azNetworkLb.probe = _azNetwork.az_network_lb_probe;
    azNetworkLb.rule = _azNetwork.az_network_lb_rule;
    return azNetworkLb;
}(_azNetwork.az_network_lb));
var azNetworkLocal = /** @class */ (function () {
    function azNetworkLocal() {
    }
    azNetworkLocal.gateway = _azNetwork.az_network_local_gateway;
    return azNetworkLocal;
}());
/** Commands to manage NAT resources. */
var azNetworkNat = /** @class */ (function (_super) {
    __extends(azNetworkNat, _super);
    function azNetworkNat() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    azNetworkNat.gateway = _azNetwork.az_network_nat_gateway;
    return azNetworkNat;
}(_azNetwork.az_network_nat));
var azNetworkNicIpConfigAddress = /** @class */ (function () {
    function azNetworkNicIpConfigAddress() {
    }
    azNetworkNicIpConfigAddress.pool = _azNetwork.az_network_nic_ip_config_address_pool;
    return azNetworkNicIpConfigAddress;
}());
var azNetworkNicIpConfigInboundNat = /** @class */ (function () {
    function azNetworkNicIpConfigInboundNat() {
    }
    azNetworkNicIpConfigInboundNat.rule = _azNetwork.az_network_nic_ip_config_inbound_nat_rule;
    return azNetworkNicIpConfigInboundNat;
}());
var azNetworkNicIpConfigInbound = /** @class */ (function () {
    function azNetworkNicIpConfigInbound() {
    }
    azNetworkNicIpConfigInbound.nat = azNetworkNicIpConfigInboundNat;
    return azNetworkNicIpConfigInbound;
}());
/** Manage IP configurations of a network interface. */
var azNetworkNicIpConfig = /** @class */ (function (_super) {
    __extends(azNetworkNicIpConfig, _super);
    function azNetworkNicIpConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    azNetworkNicIpConfig.address = azNetworkNicIpConfigAddress;
    azNetworkNicIpConfig.inbound = azNetworkNicIpConfigInbound;
    return azNetworkNicIpConfig;
}(_azNetwork.az_network_nic_ip_config));
var azNetworkNicIp = /** @class */ (function () {
    function azNetworkNicIp() {
    }
    /** Manage IP configurations of a network interface. */
    azNetworkNicIp.config = azNetworkNicIpConfig;
    return azNetworkNicIp;
}());
/** Manage network interfaces. */
var azNetworkNic = /** @class */ (function (_super) {
    __extends(azNetworkNic, _super);
    function azNetworkNic() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    azNetworkNic.ip = azNetworkNicIp;
    return azNetworkNic;
}(_azNetwork.az_network_nic));
/** Manage Azure Network Security Groups (NSGs). */
var azNetworkNsg = /** @class */ (function (_super) {
    __extends(azNetworkNsg, _super);
    function azNetworkNsg() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    azNetworkNsg.rule = _azNetwork.az_network_nsg_rule;
    return azNetworkNsg;
}(_azNetwork.az_network_nsg));
/** Manage Private DNS links. */
var azNetworkPrivateDnsLink = /** @class */ (function (_super) {
    __extends(azNetworkPrivateDnsLink, _super);
    function azNetworkPrivateDnsLink() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    azNetworkPrivateDnsLink.vnet = _azNetwork.az_network_private_dns_link_vnet;
    return azNetworkPrivateDnsLink;
}(_azNetwork.az_network_private_dns_link));
/** Manage Private DNS records and record sets. */
var azNetworkPrivateDnsRecordSet = /** @class */ (function (_super) {
    __extends(azNetworkPrivateDnsRecordSet, _super);
    function azNetworkPrivateDnsRecordSet() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    azNetworkPrivateDnsRecordSet.a = _azNetwork.az_network_private_dns_record_set_a;
    azNetworkPrivateDnsRecordSet.aaaa = _azNetwork.az_network_private_dns_record_set_aaaa;
    azNetworkPrivateDnsRecordSet.cname = _azNetwork.az_network_private_dns_record_set_cname;
    azNetworkPrivateDnsRecordSet.mx = _azNetwork.az_network_private_dns_record_set_mx;
    azNetworkPrivateDnsRecordSet.ptr = _azNetwork.az_network_private_dns_record_set_ptr;
    azNetworkPrivateDnsRecordSet.soa = _azNetwork.az_network_private_dns_record_set_soa;
    azNetworkPrivateDnsRecordSet.srv = _azNetwork.az_network_private_dns_record_set_srv;
    azNetworkPrivateDnsRecordSet.txt = _azNetwork.az_network_private_dns_record_set_txt;
    return azNetworkPrivateDnsRecordSet;
}(_azNetwork.az_network_private_dns_record_set));
var azNetworkPrivateDnsRecord = /** @class */ (function () {
    function azNetworkPrivateDnsRecord() {
    }
    /** Manage Private DNS records and record sets. */
    azNetworkPrivateDnsRecord.set = azNetworkPrivateDnsRecordSet;
    return azNetworkPrivateDnsRecord;
}());
/** Manage Private DNS domains in Azure. */
var azNetworkPrivateDns = /** @class */ (function (_super) {
    __extends(azNetworkPrivateDns, _super);
    function azNetworkPrivateDns() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /** Manage Private DNS links. */
    azNetworkPrivateDns.link = azNetworkPrivateDnsLink;
    azNetworkPrivateDns.record = azNetworkPrivateDnsRecord;
    azNetworkPrivateDns.zone = _azNetwork.az_network_private_dns_zone;
    return azNetworkPrivateDns;
}(_azNetwork.az_network_private_dns));
var azNetworkPrivateEndpointDnsZone = /** @class */ (function () {
    function azNetworkPrivateEndpointDnsZone() {
    }
    azNetworkPrivateEndpointDnsZone.group = _azNetwork.az_network_private_endpoint_dns_zone_group;
    return azNetworkPrivateEndpointDnsZone;
}());
var azNetworkPrivateEndpointDns = /** @class */ (function () {
    function azNetworkPrivateEndpointDns() {
    }
    azNetworkPrivateEndpointDns.zone = azNetworkPrivateEndpointDnsZone;
    return azNetworkPrivateEndpointDns;
}());
/** Manage private endpoints. */
var azNetworkPrivateEndpoint = /** @class */ (function (_super) {
    __extends(azNetworkPrivateEndpoint, _super);
    function azNetworkPrivateEndpoint() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    azNetworkPrivateEndpoint.connection = _azNetwork.az_network_private_endpoint_connection;
    azNetworkPrivateEndpoint.dns = azNetworkPrivateEndpointDns;
    return azNetworkPrivateEndpoint;
}(_azNetwork.az_network_private_endpoint));
/** Manage private link services. */
var azNetworkPrivateLinkService = /** @class */ (function (_super) {
    __extends(azNetworkPrivateLinkService, _super);
    function azNetworkPrivateLinkService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    azNetworkPrivateLinkService.connection = _azNetwork.az_network_private_link_service_connection;
    return azNetworkPrivateLinkService;
}(_azNetwork.az_network_private_link_service));
var azNetworkPrivateLink = /** @class */ (function () {
    function azNetworkPrivateLink() {
    }
    azNetworkPrivateLink.resource = _azNetwork.az_network_private_link_resource;
    /** Manage private link services. */
    azNetworkPrivateLink.service = azNetworkPrivateLinkService;
    return azNetworkPrivateLink;
}());
var azNetworkPrivate = /** @class */ (function () {
    function azNetworkPrivate() {
    }
    /** Manage Private DNS domains in Azure. */
    azNetworkPrivate.dns = azNetworkPrivateDns;
    /** Manage private endpoints. */
    azNetworkPrivate.endpoint = azNetworkPrivateEndpoint;
    azNetworkPrivate.link = azNetworkPrivateLink;
    return azNetworkPrivate;
}());
/** Manage public IP addresses. */
var azNetworkPublicIp = /** @class */ (function (_super) {
    __extends(azNetworkPublicIp, _super);
    function azNetworkPublicIp() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    azNetworkPublicIp.prefix = _azNetwork.az_network_public_ip_prefix;
    return azNetworkPublicIp;
}(_azNetwork.az_network_public_ip));
var azNetworkPublic = /** @class */ (function () {
    function azNetworkPublic() {
    }
    /** Manage public IP addresses. */
    azNetworkPublic.ip = azNetworkPublicIp;
    return azNetworkPublic;
}());
/** Manage route filters. */
var azNetworkRouteFilter = /** @class */ (function (_super) {
    __extends(azNetworkRouteFilter, _super);
    function azNetworkRouteFilter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    azNetworkRouteFilter.rule = _azNetwork.az_network_route_filter_rule;
    return azNetworkRouteFilter;
}(_azNetwork.az_network_route_filter));
/** Manage route tables. */
var azNetworkRouteTable = /** @class */ (function (_super) {
    __extends(azNetworkRouteTable, _super);
    function azNetworkRouteTable() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    azNetworkRouteTable.route = _azNetwork.az_network_route_table_route;
    return azNetworkRouteTable;
}(_azNetwork.az_network_route_table));
var azNetworkRoute = /** @class */ (function () {
    function azNetworkRoute() {
    }
    /** Manage route filters. */
    azNetworkRoute.filter = azNetworkRouteFilter;
    /** Manage route tables. */
    azNetworkRoute.table = azNetworkRouteTable;
    return azNetworkRoute;
}());
var azNetworkSecurityPartner = /** @class */ (function () {
    function azNetworkSecurityPartner() {
    }
    azNetworkSecurityPartner.provider = _azNetwork.az_network_security_partner_provider;
    return azNetworkSecurityPartner;
}());
var azNetworkSecurity = /** @class */ (function () {
    function azNetworkSecurity() {
    }
    azNetworkSecurity.partner = azNetworkSecurityPartner;
    return azNetworkSecurity;
}());
/** Manage service endpoint policies. */
var azNetworkServiceEndpointPolicy = /** @class */ (function (_super) {
    __extends(azNetworkServiceEndpointPolicy, _super);
    function azNetworkServiceEndpointPolicy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    azNetworkServiceEndpointPolicy.definition = _azNetwork.az_network_service_endpoint_policy_definition;
    return azNetworkServiceEndpointPolicy;
}(_azNetwork.az_network_service_endpoint_policy));
/** Manage policies related to service endpoints. */
var azNetworkServiceEndpoint = /** @class */ (function (_super) {
    __extends(azNetworkServiceEndpoint, _super);
    function azNetworkServiceEndpoint() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /** Manage service endpoint policies. */
    azNetworkServiceEndpoint.policy = azNetworkServiceEndpointPolicy;
    return azNetworkServiceEndpoint;
}(_azNetwork.az_network_service_endpoint));
var azNetworkService = /** @class */ (function () {
    function azNetworkService() {
    }
    /** Manage policies related to service endpoints. */
    azNetworkService.endpoint = azNetworkServiceEndpoint;
    return azNetworkService;
}());
/** Manage the routing of incoming traffic. */
var azNetworkTrafficManager = /** @class */ (function (_super) {
    __extends(azNetworkTrafficManager, _super);
    function azNetworkTrafficManager() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    azNetworkTrafficManager.endpoint = _azNetwork.az_network_traffic_manager_endpoint;
    azNetworkTrafficManager.profile = _azNetwork.az_network_traffic_manager_profile;
    return azNetworkTrafficManager;
}(_azNetwork.az_network_traffic_manager));
var azNetworkTraffic = /** @class */ (function () {
    function azNetworkTraffic() {
    }
    /** Manage the routing of incoming traffic. */
    azNetworkTraffic.manager = azNetworkTrafficManager;
    return azNetworkTraffic;
}());
/** Manage Azure Network Virtual Appliance. */
var azNetworkVirtualAppliance = /** @class */ (function (_super) {
    __extends(azNetworkVirtualAppliance, _super);
    function azNetworkVirtualAppliance() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    azNetworkVirtualAppliance.site = _azNetwork.az_network_virtual_appliance_site;
    azNetworkVirtualAppliance.sku = _azNetwork.az_network_virtual_appliance_sku;
    return azNetworkVirtualAppliance;
}(_azNetwork.az_network_virtual_appliance));
var azNetworkVirtual = /** @class */ (function () {
    function azNetworkVirtual() {
    }
    /** Manage Azure Network Virtual Appliance. */
    azNetworkVirtual.appliance = azNetworkVirtualAppliance;
    return azNetworkVirtual;
}());
var azNetworkVnetGatewayIpsec = /** @class */ (function () {
    function azNetworkVnetGatewayIpsec() {
    }
    azNetworkVnetGatewayIpsec.policy = _azNetwork.az_network_vnet_gateway_ipsec_policy;
    return azNetworkVnetGatewayIpsec;
}());
var azNetworkVnetGatewayRevoked = /** @class */ (function () {
    function azNetworkVnetGatewayRevoked() {
    }
    azNetworkVnetGatewayRevoked.cert = _azNetwork.az_network_vnet_gateway_revoked_cert;
    return azNetworkVnetGatewayRevoked;
}());
var azNetworkVnetGatewayRoot = /** @class */ (function () {
    function azNetworkVnetGatewayRoot() {
    }
    azNetworkVnetGatewayRoot.cert = _azNetwork.az_network_vnet_gateway_root_cert;
    return azNetworkVnetGatewayRoot;
}());
var azNetworkVnetGatewayVpn = /** @class */ (function () {
    function azNetworkVnetGatewayVpn() {
    }
    azNetworkVnetGatewayVpn.client = _azNetwork.az_network_vnet_gateway_vpn_client;
    return azNetworkVnetGatewayVpn;
}());
/** Use an Azure Virtual Network Gateway to establish secure, cross-premises connectivity. */
var azNetworkVnetGateway = /** @class */ (function (_super) {
    __extends(azNetworkVnetGateway, _super);
    function azNetworkVnetGateway() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    azNetworkVnetGateway.aad = _azNetwork.az_network_vnet_gateway_aad;
    azNetworkVnetGateway.ipsec = azNetworkVnetGatewayIpsec;
    azNetworkVnetGateway.revoked = azNetworkVnetGatewayRevoked;
    azNetworkVnetGateway.root = azNetworkVnetGatewayRoot;
    azNetworkVnetGateway.vpn = azNetworkVnetGatewayVpn;
    return azNetworkVnetGateway;
}(_azNetwork.az_network_vnet_gateway));
/** Manage Azure Virtual Networks. */
var azNetworkVnet = /** @class */ (function (_super) {
    __extends(azNetworkVnet, _super);
    function azNetworkVnet() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /** Use an Azure Virtual Network Gateway to establish secure, cross-premises connectivity. */
    azNetworkVnet.gateway = azNetworkVnetGateway;
    azNetworkVnet.peering = _azNetwork.az_network_vnet_peering;
    azNetworkVnet.subnet = _azNetwork.az_network_vnet_subnet;
    return azNetworkVnet;
}(_azNetwork.az_network_vnet));
var azNetworkVpnConnectionIpsec = /** @class */ (function () {
    function azNetworkVpnConnectionIpsec() {
    }
    azNetworkVpnConnectionIpsec.policy = _azNetwork.az_network_vpn_connection_ipsec_policy;
    return azNetworkVpnConnectionIpsec;
}());
var azNetworkVpnConnectionShared = /** @class */ (function () {
    function azNetworkVpnConnectionShared() {
    }
    azNetworkVpnConnectionShared.key = _azNetwork.az_network_vpn_connection_shared_key;
    return azNetworkVpnConnectionShared;
}());
/** Manage VPN connections. */
var azNetworkVpnConnection = /** @class */ (function (_super) {
    __extends(azNetworkVpnConnection, _super);
    function azNetworkVpnConnection() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    azNetworkVpnConnection.ipsec = azNetworkVpnConnectionIpsec;
    azNetworkVpnConnection.shared = azNetworkVpnConnectionShared;
    return azNetworkVpnConnection;
}(_azNetwork.az_network_vpn_connection));
var azNetworkVpn = /** @class */ (function () {
    function azNetworkVpn() {
    }
    /** Manage VPN connections. */
    azNetworkVpn.connection = azNetworkVpnConnection;
    return azNetworkVpn;
}());
/** Manage the virtual router. This feature supports both VirtualHub and VirtualRouter. Considering VirtualRouter is depcated, we recommand to create VirtualRouter instead. */
var azNetworkVrouter = /** @class */ (function (_super) {
    __extends(azNetworkVrouter, _super);
    function azNetworkVrouter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    azNetworkVrouter.peering = _azNetwork.az_network_vrouter_peering;
    return azNetworkVrouter;
}(_azNetwork.az_network_vrouter));
var azNetworkWatcherConnectionMonitorTest = /** @class */ (function () {
    function azNetworkWatcherConnectionMonitorTest() {
    }
    azNetworkWatcherConnectionMonitorTest.configuration = _azNetwork.az_network_watcher_connection_monitor_test_configuration;
    azNetworkWatcherConnectionMonitorTest.group = _azNetwork.az_network_watcher_connection_monitor_test_group;
    return azNetworkWatcherConnectionMonitorTest;
}());
/** Manage connection monitoring between an Azure Virtual Machine and any IP resource. */
var azNetworkWatcherConnectionMonitor = /** @class */ (function (_super) {
    __extends(azNetworkWatcherConnectionMonitor, _super);
    function azNetworkWatcherConnectionMonitor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    azNetworkWatcherConnectionMonitor.endpoint = _azNetwork.az_network_watcher_connection_monitor_endpoint;
    azNetworkWatcherConnectionMonitor.output = _azNetwork.az_network_watcher_connection_monitor_output;
    azNetworkWatcherConnectionMonitor.test = azNetworkWatcherConnectionMonitorTest;
    return azNetworkWatcherConnectionMonitor;
}(_azNetwork.az_network_watcher_connection_monitor));
var azNetworkWatcherConnection = /** @class */ (function () {
    function azNetworkWatcherConnection() {
    }
    /** Manage connection monitoring between an Azure Virtual Machine and any IP resource. */
    azNetworkWatcherConnection.monitor = azNetworkWatcherConnectionMonitor;
    return azNetworkWatcherConnection;
}());
var azNetworkWatcherFlow = /** @class */ (function () {
    function azNetworkWatcherFlow() {
    }
    azNetworkWatcherFlow.log = _azNetwork.az_network_watcher_flow_log;
    return azNetworkWatcherFlow;
}());
var azNetworkWatcherPacket = /** @class */ (function () {
    function azNetworkWatcherPacket() {
    }
    azNetworkWatcherPacket.capture = _azNetwork.az_network_watcher_packet_capture;
    return azNetworkWatcherPacket;
}());
/** Manage the Azure Network Watcher. */
var azNetworkWatcher = /** @class */ (function (_super) {
    __extends(azNetworkWatcher, _super);
    function azNetworkWatcher() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    azNetworkWatcher.connection = azNetworkWatcherConnection;
    azNetworkWatcher.flow = azNetworkWatcherFlow;
    azNetworkWatcher.packet = azNetworkWatcherPacket;
    azNetworkWatcher.troubleshooting = _azNetwork.az_network_watcher_troubleshooting;
    return azNetworkWatcher;
}(_azNetwork.az_network_watcher));
/** Manage Azure Network resources. */
var azNetwork = /** @class */ (function (_super) {
    __extends(azNetwork, _super);
    function azNetwork() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    azNetwork.application = azNetworkApplication;
    azNetwork.asg = _azNetwork.az_network_asg;
    azNetwork.bastion = _azNetwork.az_network_bastion;
    azNetwork.ddos = azNetworkDdos;
    /** Manage DNS domains in Azure. */
    azNetwork.dns = azNetworkDns;
    azNetwork.express = azNetworkExpress;
    /** Manage and configure load balancers. */
    azNetwork.lb = azNetworkLb;
    azNetwork.local = azNetworkLocal;
    /** Commands to manage NAT resources. */
    azNetwork.nat = azNetworkNat;
    /** Manage network interfaces. */
    azNetwork.nic = azNetworkNic;
    /** Manage Azure Network Security Groups (NSGs). */
    azNetwork.nsg = azNetworkNsg;
    azNetwork.private = azNetworkPrivate;
    azNetwork.profile = _azNetwork.az_network_profile;
    azNetwork.public = azNetworkPublic;
    azNetwork.route = azNetworkRoute;
    azNetwork.security = azNetworkSecurity;
    azNetwork.service = azNetworkService;
    azNetwork.traffic = azNetworkTraffic;
    azNetwork.virtual = azNetworkVirtual;
    /** Manage Azure Virtual Networks. */
    azNetwork.vnet = azNetworkVnet;
    azNetwork.vpn = azNetworkVpn;
    /** Manage the virtual router. This feature supports both VirtualHub and VirtualRouter. Considering VirtualRouter is depcated, we recommand to create VirtualRouter instead. */
    azNetwork.vrouter = azNetworkVrouter;
    /** Manage the Azure Network Watcher. */
    azNetwork.watcher = azNetworkWatcher;
    return azNetwork;
}(_azNetwork.az_network));
/** Manage Azure Red Hat OpenShift Services. */
var azOpenshift = /** @class */ (function (_super) {
    __extends(azOpenshift, _super);
    function azOpenshift() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    azOpenshift.monitor = _azOpenshift.az_openshift_monitor;
    return azOpenshift;
}(_azOpenshift.az_openshift));
/** Manage builds. */
var azPipelinesBuild = /** @class */ (function (_super) {
    __extends(azPipelinesBuild, _super);
    function azPipelinesBuild() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    azPipelinesBuild.definition = _azPipelines.az_pipelines_build_definition;
    azPipelinesBuild.tag = _azPipelines.az_pipelines_build_tag;
    return azPipelinesBuild;
}(_azPipelines.az_pipelines_build));
/** Manage releases. */
var azPipelinesRelease = /** @class */ (function (_super) {
    __extends(azPipelinesRelease, _super);
    function azPipelinesRelease() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    azPipelinesRelease.definition = _azPipelines.az_pipelines_release_definition;
    return azPipelinesRelease;
}(_azPipelines.az_pipelines_release));
/** Manage pipeline runs. */
var azPipelinesRuns = /** @class */ (function (_super) {
    __extends(azPipelinesRuns, _super);
    function azPipelinesRuns() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    azPipelinesRuns.artifact = _azPipelines.az_pipelines_runs_artifact;
    azPipelinesRuns.tag = _azPipelines.az_pipelines_runs_tag;
    return azPipelinesRuns;
}(_azPipelines.az_pipelines_runs));
/** Manage variable groups. */
var azPipelinesVariableGroup = /** @class */ (function (_super) {
    __extends(azPipelinesVariableGroup, _super);
    function azPipelinesVariableGroup() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    azPipelinesVariableGroup.variable = _azPipelines.az_pipelines_variable_group_variable;
    return azPipelinesVariableGroup;
}(_azPipelines.az_pipelines_variable_group));
/** Manage pipeline variables. */
var azPipelinesVariable = /** @class */ (function (_super) {
    __extends(azPipelinesVariable, _super);
    function azPipelinesVariable() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /** Manage variable groups. */
    azPipelinesVariable.group = azPipelinesVariableGroup;
    return azPipelinesVariable;
}(_azPipelines.az_pipelines_variable));
/** Manage Azure Pipelines. */
var azPipelines = /** @class */ (function (_super) {
    __extends(azPipelines, _super);
    function azPipelines() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    azPipelines.agent = _azPipelines.az_pipelines_agent;
    /** Manage builds. */
    azPipelines.build = azPipelinesBuild;
    azPipelines.folder = _azPipelines.az_pipelines_folder;
    azPipelines.pool = _azPipelines.az_pipelines_pool;
    azPipelines.queue = _azPipelines.az_pipelines_queue;
    /** Manage releases. */
    azPipelines.release = azPipelinesRelease;
    /** Manage pipeline runs. */
    azPipelines.runs = azPipelinesRuns;
    /** Manage pipeline variables. */
    azPipelines.variable = azPipelinesVariable;
    return azPipelines;
}(_azPipelines.az_pipelines));
/** Manage resource policy assignments. */
var azPolicyAssignment = /** @class */ (function (_super) {
    __extends(azPolicyAssignment, _super);
    function azPolicyAssignment() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    azPolicyAssignment.identity = _azPolicy.az_policy_assignment_identity;
    return azPolicyAssignment;
}(_azPolicy.az_policy_assignment));
/** Manage resource policy remediations. */
var azPolicyRemediation = /** @class */ (function (_super) {
    __extends(azPolicyRemediation, _super);
    function azPolicyRemediation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    azPolicyRemediation.deployment = _azPolicy.az_policy_remediation_deployment;
    return azPolicyRemediation;
}(_azPolicy.az_policy_remediation));
var azPolicySet = /** @class */ (function () {
    function azPolicySet() {
    }
    azPolicySet.definition = _azPolicy.az_policy_set_definition;
    return azPolicySet;
}());
/** Manage resource policies. */
var azPolicy = /** @class */ (function (_super) {
    __extends(azPolicy, _super);
    function azPolicy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /** Manage resource policy assignments. */
    azPolicy.assignment = azPolicyAssignment;
    azPolicy.definition = _azPolicy.az_policy_definition;
    azPolicy.event = _azPolicy.az_policy_event;
    azPolicy.metadata = _azPolicy.az_policy_metadata;
    /** Manage resource policy remediations. */
    azPolicy.remediation = azPolicyRemediation;
    azPolicy.set = azPolicySet;
    azPolicy.state = _azPolicy.az_policy_state;
    return azPolicy;
}(_azPolicy.az_policy));
var azPostgresFlexibleServerFirewall = /** @class */ (function () {
    function azPostgresFlexibleServerFirewall() {
    }
    azPostgresFlexibleServerFirewall.rule = _azPostgres.az_postgres_flexible_server_firewall_rule;
    return azPostgresFlexibleServerFirewall;
}());
/** Manage Azure Database for PostgreSQL Flexible Servers. */
var azPostgresFlexibleServer = /** @class */ (function (_super) {
    __extends(azPostgresFlexibleServer, _super);
    function azPostgresFlexibleServer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    azPostgresFlexibleServer.firewall = azPostgresFlexibleServerFirewall;
    azPostgresFlexibleServer.parameter = _azPostgres.az_postgres_flexible_server_parameter;
    return azPostgresFlexibleServer;
}(_azPostgres.az_postgres_flexible_server));
var azPostgresFlexible = /** @class */ (function () {
    function azPostgresFlexible() {
    }
    /** Manage Azure Database for PostgreSQL Flexible Servers. */
    azPostgresFlexible.server = azPostgresFlexibleServer;
    return azPostgresFlexible;
}());
var azPostgresServerAd = /** @class */ (function () {
    function azPostgresServerAd() {
    }
    azPostgresServerAd.admin = _azPostgres.az_postgres_server_ad_admin;
    return azPostgresServerAd;
}());
var azPostgresServerFirewall = /** @class */ (function () {
    function azPostgresServerFirewall() {
    }
    azPostgresServerFirewall.rule = _azPostgres.az_postgres_server_firewall_rule;
    return azPostgresServerFirewall;
}());
var azPostgresServerPrivateEndpoint = /** @class */ (function () {
    function azPostgresServerPrivateEndpoint() {
    }
    azPostgresServerPrivateEndpoint.connection = _azPostgres.az_postgres_server_private_endpoint_connection;
    return azPostgresServerPrivateEndpoint;
}());
var azPostgresServerPrivateLink = /** @class */ (function () {
    function azPostgresServerPrivateLink() {
    }
    azPostgresServerPrivateLink.resource = _azPostgres.az_postgres_server_private_link_resource;
    return azPostgresServerPrivateLink;
}());
var azPostgresServerPrivate = /** @class */ (function () {
    function azPostgresServerPrivate() {
    }
    azPostgresServerPrivate.endpoint = azPostgresServerPrivateEndpoint;
    azPostgresServerPrivate.link = azPostgresServerPrivateLink;
    return azPostgresServerPrivate;
}());
var azPostgresServerVnet = /** @class */ (function () {
    function azPostgresServerVnet() {
    }
    azPostgresServerVnet.rule = _azPostgres.az_postgres_server_vnet_rule;
    return azPostgresServerVnet;
}());
/** Manage PostgreSQL servers. */
var azPostgresServer = /** @class */ (function (_super) {
    __extends(azPostgresServer, _super);
    function azPostgresServer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    azPostgresServer.ad = azPostgresServerAd;
    azPostgresServer.configuration = _azPostgres.az_postgres_server_configuration;
    azPostgresServer.firewall = azPostgresServerFirewall;
    azPostgresServer.key = _azPostgres.az_postgres_server_key;
    azPostgresServer.logs = _azPostgres.az_postgres_server_logs;
    azPostgresServer.private = azPostgresServerPrivate;
    azPostgresServer.replica = _azPostgres.az_postgres_server_replica;
    azPostgresServer.vnet = azPostgresServerVnet;
    return azPostgresServer;
}(_azPostgres.az_postgres_server));
/** Manage Azure Database for PostgreSQL servers. */
var azPostgres = /** @class */ (function (_super) {
    __extends(azPostgres, _super);
    function azPostgres() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    azPostgres.db = _azPostgres.az_postgres_db;
    azPostgres.flexible = azPostgresFlexible;
    /** Manage PostgreSQL servers. */
    azPostgres.server = azPostgresServer;
    return azPostgres;
}(_azPostgres.az_postgres));
/** Manage resource providers. */
var azProvider = /** @class */ (function (_super) {
    __extends(azProvider, _super);
    function azProvider() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    azProvider.operation = _azProvider.az_provider_operation;
    return azProvider;
}(_azProvider.az_provider));
var azRedisFirewall = /** @class */ (function () {
    function azRedisFirewall() {
    }
    azRedisFirewall.rules = _azRedis.az_redis_firewall_rules;
    return azRedisFirewall;
}());
var azRedisPatch = /** @class */ (function () {
    function azRedisPatch() {
    }
    azRedisPatch.schedule = _azRedis.az_redis_patch_schedule;
    return azRedisPatch;
}());
var azRedisServer = /** @class */ (function () {
    function azRedisServer() {
    }
    azRedisServer.link = _azRedis.az_redis_server_link;
    return azRedisServer;
}());
/** Manage dedicated Redis caches for your Azure applications. */
var azRedis = /** @class */ (function (_super) {
    __extends(azRedis, _super);
    function azRedis() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    azRedis.firewall = azRedisFirewall;
    azRedis.patch = azRedisPatch;
    azRedis.server = azRedisServer;
    return azRedis;
}(_azRedis.az_redis));
/** Manage Azure Relay Service Hybrid Connection Authorization Rule. */
var azRelayHycoAuthorizationRule = /** @class */ (function (_super) {
    __extends(azRelayHycoAuthorizationRule, _super);
    function azRelayHycoAuthorizationRule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    azRelayHycoAuthorizationRule.keys = _azRelay.az_relay_hyco_authorization_rule_keys;
    return azRelayHycoAuthorizationRule;
}(_azRelay.az_relay_hyco_authorization_rule));
var azRelayHycoAuthorization = /** @class */ (function () {
    function azRelayHycoAuthorization() {
    }
    /** Manage Azure Relay Service Hybrid Connection Authorization Rule. */
    azRelayHycoAuthorization.rule = azRelayHycoAuthorizationRule;
    return azRelayHycoAuthorization;
}());
/** Manage Azure Relay Service Hybrid Connection and Authorization Rule. */
var azRelayHyco = /** @class */ (function (_super) {
    __extends(azRelayHyco, _super);
    function azRelayHyco() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    azRelayHyco.authorization = azRelayHycoAuthorization;
    return azRelayHyco;
}(_azRelay.az_relay_hyco));
/** Manage Azure Relay Service Namespace Authorization Rule. */
var azRelayNamespaceAuthorizationRule = /** @class */ (function (_super) {
    __extends(azRelayNamespaceAuthorizationRule, _super);
    function azRelayNamespaceAuthorizationRule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    azRelayNamespaceAuthorizationRule.keys = _azRelay.az_relay_namespace_authorization_rule_keys;
    return azRelayNamespaceAuthorizationRule;
}(_azRelay.az_relay_namespace_authorization_rule));
var azRelayNamespaceAuthorization = /** @class */ (function () {
    function azRelayNamespaceAuthorization() {
    }
    /** Manage Azure Relay Service Namespace Authorization Rule. */
    azRelayNamespaceAuthorization.rule = azRelayNamespaceAuthorizationRule;
    return azRelayNamespaceAuthorization;
}());
/** Manage Azure Relay Service Namespace. */
var azRelayNamespace = /** @class */ (function (_super) {
    __extends(azRelayNamespace, _super);
    function azRelayNamespace() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    azRelayNamespace.authorization = azRelayNamespaceAuthorization;
    return azRelayNamespace;
}(_azRelay.az_relay_namespace));
/** Manage Azure Relay Service WCF Relay Authorization Rule. */
var azRelayWcfrelayAuthorizationRule = /** @class */ (function (_super) {
    __extends(azRelayWcfrelayAuthorizationRule, _super);
    function azRelayWcfrelayAuthorizationRule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    azRelayWcfrelayAuthorizationRule.keys = _azRelay.az_relay_wcfrelay_authorization_rule_keys;
    return azRelayWcfrelayAuthorizationRule;
}(_azRelay.az_relay_wcfrelay_authorization_rule));
var azRelayWcfrelayAuthorization = /** @class */ (function () {
    function azRelayWcfrelayAuthorization() {
    }
    /** Manage Azure Relay Service WCF Relay Authorization Rule. */
    azRelayWcfrelayAuthorization.rule = azRelayWcfrelayAuthorizationRule;
    return azRelayWcfrelayAuthorization;
}());
/** Manage Azure Relay Service WCF Relay and Authorization Rule. */
var azRelayWcfrelay = /** @class */ (function (_super) {
    __extends(azRelayWcfrelay, _super);
    function azRelayWcfrelay() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    azRelayWcfrelay.authorization = azRelayWcfrelayAuthorization;
    return azRelayWcfrelay;
}(_azRelay.az_relay_wcfrelay));
/** Manage Azure Relay Service namespaces, WCF relays, hybrid connections, and rules. */
var azRelay = /** @class */ (function (_super) {
    __extends(azRelay, _super);
    function azRelay() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /** Manage Azure Relay Service Hybrid Connection and Authorization Rule. */
    azRelay.hyco = azRelayHyco;
    /** Manage Azure Relay Service Namespace. */
    azRelay.namespace = azRelayNamespace;
    /** Manage Azure Relay Service WCF Relay and Authorization Rule. */
    azRelay.wcfrelay = azRelayWcfrelay;
    return azRelay;
}(_azRelay.az_relay));
var azReposPolicyApprover = /** @class */ (function () {
    function azReposPolicyApprover() {
    }
    azReposPolicyApprover.count = _azRepos.az_repos_policy_approver_count;
    return azReposPolicyApprover;
}());
var azReposPolicyCase = /** @class */ (function () {
    function azReposPolicyCase() {
    }
    azReposPolicyCase.enforcement = _azRepos.az_repos_policy_case_enforcement;
    return azReposPolicyCase;
}());
var azReposPolicyComment = /** @class */ (function () {
    function azReposPolicyComment() {
    }
    azReposPolicyComment.required = _azRepos.az_repos_policy_comment_required;
    return azReposPolicyComment;
}());
var azReposPolicyFile = /** @class */ (function () {
    function azReposPolicyFile() {
    }
    azReposPolicyFile.size = _azRepos.az_repos_policy_file_size;
    return azReposPolicyFile;
}());
var azReposPolicyMerge = /** @class */ (function () {
    function azReposPolicyMerge() {
    }
    azReposPolicyMerge.strategy = _azRepos.az_repos_policy_merge_strategy;
    return azReposPolicyMerge;
}());
var azReposPolicyRequired = /** @class */ (function () {
    function azReposPolicyRequired() {
    }
    azReposPolicyRequired.reviewer = _azRepos.az_repos_policy_required_reviewer;
    return azReposPolicyRequired;
}());
var azReposPolicyWorkItem = /** @class */ (function () {
    function azReposPolicyWorkItem() {
    }
    azReposPolicyWorkItem.linking = _azRepos.az_repos_policy_work_item_linking;
    return azReposPolicyWorkItem;
}());
var azReposPolicyWork = /** @class */ (function () {
    function azReposPolicyWork() {
    }
    azReposPolicyWork.item = azReposPolicyWorkItem;
    return azReposPolicyWork;
}());
/** Manage branch policy. */
var azReposPolicy = /** @class */ (function (_super) {
    __extends(azReposPolicy, _super);
    function azReposPolicy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    azReposPolicy.approver = azReposPolicyApprover;
    azReposPolicy.build = _azRepos.az_repos_policy_build;
    azReposPolicy["case"] = azReposPolicyCase;
    azReposPolicy.comment = azReposPolicyComment;
    azReposPolicy.file = azReposPolicyFile;
    azReposPolicy.merge = azReposPolicyMerge;
    azReposPolicy.required = azReposPolicyRequired;
    azReposPolicy.work = azReposPolicyWork;
    return azReposPolicy;
}(_azRepos.az_repos_policy));
var azReposPrWork = /** @class */ (function () {
    function azReposPrWork() {
    }
    azReposPrWork.item = _azRepos.az_repos_pr_work_item;
    return azReposPrWork;
}());
/** Manage pull requests. */
var azReposPr = /** @class */ (function (_super) {
    __extends(azReposPr, _super);
    function azReposPr() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    azReposPr.policy = _azRepos.az_repos_pr_policy;
    azReposPr.reviewer = _azRepos.az_repos_pr_reviewer;
    azReposPr.work = azReposPrWork;
    return azReposPr;
}(_azRepos.az_repos_pr));
/** Manage Azure Repos. */
var azRepos = /** @class */ (function (_super) {
    __extends(azRepos, _super);
    function azRepos() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    azRepos["import"] = _azRepos.az_repos_import;
    /** Manage branch policy. */
    azRepos.policy = azReposPolicy;
    /** Manage pull requests. */
    azRepos.pr = azReposPr;
    azRepos.ref = _azRepos.az_repos_ref;
    return azRepos;
}(_azRepos.az_repos));
/** Manage reservation order, which is container for reservations. */
var azReservationsReservationOrder = /** @class */ (function (_super) {
    __extends(azReservationsReservationOrder, _super);
    function azReservationsReservationOrder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    azReservationsReservationOrder.id = _azReservations.az_reservations_reservation_order_id;
    return azReservationsReservationOrder;
}(_azReservations.az_reservations_reservation_order));
/** Manage reservation entities. */
var azReservationsReservation = /** @class */ (function (_super) {
    __extends(azReservationsReservation, _super);
    function azReservationsReservation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /** Manage reservation order, which is container for reservations. */
    azReservationsReservation.order = azReservationsReservationOrder;
    return azReservationsReservation;
}(_azReservations.az_reservations_reservation));
/** Manage Azure Reservations. */
var azReservations = /** @class */ (function (_super) {
    __extends(azReservations, _super);
    function azReservations() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    azReservations.catalog = _azReservations.az_reservations_catalog;
    /** Manage reservation entities. */
    azReservations.reservation = azReservationsReservation;
    return azReservations;
}(_azReservations.az_reservations));
/** Manage Azure resources. */
var azResource = /** @class */ (function (_super) {
    __extends(azResource, _super);
    function azResource() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    azResource.link = _azResource.az_resource_link;
    azResource.lock = _azResource.az_resource_lock;
    return azResource;
}(_azResource.az_resource));
/** Manage user roles for access control with Azure Active Directory and service principals. */
var azRole = /** @class */ (function (_super) {
    __extends(azRole, _super);
    function azRole() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    azRole.assignment = _azRole.az_role_assignment;
    azRole.definition = _azRole.az_role_definition;
    return azRole;
}(_azRole.az_role));
var azSearchAdmin = /** @class */ (function () {
    function azSearchAdmin() {
    }
    azSearchAdmin.key = _azSearch.az_search_admin_key;
    return azSearchAdmin;
}());
var azSearchQuery = /** @class */ (function () {
    function azSearchQuery() {
    }
    azSearchQuery.key = _azSearch.az_search_query_key;
    return azSearchQuery;
}());
/** Manage Azure Search services, admin keys and query keys. */
var azSearch = /** @class */ (function (_super) {
    __extends(azSearch, _super);
    function azSearch() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    azSearch.admin = azSearchAdmin;
    azSearch.query = azSearchQuery;
    azSearch.service = _azSearch.az_search_service;
    return azSearch;
}(_azSearch.az_search));
var azSecurityAdaptiveApplication = /** @class */ (function () {
    function azSecurityAdaptiveApplication() {
    }
    azSecurityAdaptiveApplication.controls = _azSecurity.az_security_adaptive_application_controls;
    return azSecurityAdaptiveApplication;
}());
var azSecurityAdaptiveNetwork = /** @class */ (function () {
    function azSecurityAdaptiveNetwork() {
    }
    azSecurityAdaptiveNetwork.hardenings = _azSecurity.az_security_adaptive_network_hardenings;
    return azSecurityAdaptiveNetwork;
}());
var azSecurityAdaptive = /** @class */ (function () {
    function azSecurityAdaptive() {
    }
    azSecurityAdaptive.application = azSecurityAdaptiveApplication;
    azSecurityAdaptive.network = azSecurityAdaptiveNetwork;
    return azSecurityAdaptive;
}());
var azSecurityAllowed = /** @class */ (function () {
    function azSecurityAllowed() {
    }
    azSecurityAllowed.connections = _azSecurity.az_security_allowed_connections;
    return azSecurityAllowed;
}());
/** View your security assessment results. */
var azSecurityAssessment = /** @class */ (function (_super) {
    __extends(azSecurityAssessment, _super);
    function azSecurityAssessment() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    azSecurityAssessment.metadata = _azSecurity.az_security_assessment_metadata;
    return azSecurityAssessment;
}(_azSecurity.az_security_assessment));
/** View and manage Advanced Threat Protection settings. */
var azSecurityAtp = /** @class */ (function (_super) {
    __extends(azSecurityAtp, _super);
    function azSecurityAtp() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    azSecurityAtp.storage = _azSecurity.az_security_atp_storage;
    return azSecurityAtp;
}(_azSecurity.az_security_atp));
var azSecurityAutoProvisioning = /** @class */ (function () {
    function azSecurityAutoProvisioning() {
    }
    azSecurityAutoProvisioning.setting = _azSecurity.az_security_auto_provisioning_setting;
    return azSecurityAutoProvisioning;
}());
var azSecurityAuto = /** @class */ (function () {
    function azSecurityAuto() {
    }
    azSecurityAuto.provisioning = azSecurityAutoProvisioning;
    return azSecurityAuto;
}());
var azSecurityDiscoveredSecurity = /** @class */ (function () {
    function azSecurityDiscoveredSecurity() {
    }
    azSecurityDiscoveredSecurity.solution = _azSecurity.az_security_discovered_security_solution;
    return azSecurityDiscoveredSecurity;
}());
var azSecurityDiscovered = /** @class */ (function () {
    function azSecurityDiscovered() {
    }
    azSecurityDiscovered.security = azSecurityDiscoveredSecurity;
    return azSecurityDiscovered;
}());
var azSecurityExternalSecurity = /** @class */ (function () {
    function azSecurityExternalSecurity() {
    }
    azSecurityExternalSecurity.solution = _azSecurity.az_security_external_security_solution;
    return azSecurityExternalSecurity;
}());
var azSecurityExternal = /** @class */ (function () {
    function azSecurityExternal() {
    }
    azSecurityExternal.security = azSecurityExternalSecurity;
    return azSecurityExternal;
}());
var azSecurityIot = /** @class */ (function () {
    function azSecurityIot() {
    }
    azSecurityIot.alerts = _azSecurity.az_security_iot_alerts;
    azSecurityIot.analytics = _azSecurity.az_security_iot_analytics;
    azSecurityIot.recommendations = _azSecurity.az_security_iot_recommendations;
    azSecurityIot.solution = _azSecurity.az_security_iot_solution;
    return azSecurityIot;
}());
var azSecurityJit = /** @class */ (function () {
    function azSecurityJit() {
    }
    azSecurityJit.policy = _azSecurity.az_security_jit_policy;
    return azSecurityJit;
}());
var azSecurityRegulatoryCompliance = /** @class */ (function () {
    function azSecurityRegulatoryCompliance() {
    }
    azSecurityRegulatoryCompliance.assessments = _azSecurity.az_security_regulatory_compliance_assessments;
    azSecurityRegulatoryCompliance.controls = _azSecurity.az_security_regulatory_compliance_controls;
    azSecurityRegulatoryCompliance.standards = _azSecurity.az_security_regulatory_compliance_standards;
    return azSecurityRegulatoryCompliance;
}());
var azSecurityRegulatory = /** @class */ (function () {
    function azSecurityRegulatory() {
    }
    azSecurityRegulatory.compliance = azSecurityRegulatoryCompliance;
    return azSecurityRegulatory;
}());
var azSecuritySub = /** @class */ (function () {
    function azSecuritySub() {
    }
    azSecuritySub.assessment = _azSecurity.az_security_sub_assessment;
    return azSecuritySub;
}());
var azSecurityWorkspace = /** @class */ (function () {
    function azSecurityWorkspace() {
    }
    azSecurityWorkspace.setting = _azSecurity.az_security_workspace_setting;
    return azSecurityWorkspace;
}());
/** Manage your security posture with Azure Security Center. */
var azSecurity = /** @class */ (function (_super) {
    __extends(azSecurity, _super);
    function azSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    azSecurity.adaptive = azSecurityAdaptive;
    azSecurity.alert = _azSecurity.az_security_alert;
    azSecurity.allowed = azSecurityAllowed;
    /** View your security assessment results. */
    azSecurity.assessment = azSecurityAssessment;
    /** View and manage Advanced Threat Protection settings. */
    azSecurity.atp = azSecurityAtp;
    azSecurity.auto = azSecurityAuto;
    azSecurity.contact = _azSecurity.az_security_contact;
    azSecurity.discovered = azSecurityDiscovered;
    azSecurity.external = azSecurityExternal;
    azSecurity.iot = azSecurityIot;
    azSecurity.jit = azSecurityJit;
    azSecurity.location = _azSecurity.az_security_location;
    azSecurity.pricing = _azSecurity.az_security_pricing;
    azSecurity.regulatory = azSecurityRegulatory;
    azSecurity.setting = _azSecurity.az_security_setting;
    azSecurity.sub = azSecuritySub;
    azSecurity.task = _azSecurity.az_security_task;
    azSecurity.topology = _azSecurity.az_security_topology;
    azSecurity.workspace = azSecurityWorkspace;
    return azSecurity;
}(_azSecurity.az_security));
/** Manage Azure Service Bus Authorization Rule for Namespace with Geo-Disaster Recovery Configuration Alias. */
var azServicebusGeorecoveryAliasAuthorizationRule = /** @class */ (function (_super) {
    __extends(azServicebusGeorecoveryAliasAuthorizationRule, _super);
    function azServicebusGeorecoveryAliasAuthorizationRule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    azServicebusGeorecoveryAliasAuthorizationRule.keys = _azServicebus.az_servicebus_georecovery_alias_authorization_rule_keys;
    return azServicebusGeorecoveryAliasAuthorizationRule;
}(_azServicebus.az_servicebus_georecovery_alias_authorization_rule));
var azServicebusGeorecoveryAliasAuthorization = /** @class */ (function () {
    function azServicebusGeorecoveryAliasAuthorization() {
    }
    /** Manage Azure Service Bus Authorization Rule for Namespace with Geo-Disaster Recovery Configuration Alias. */
    azServicebusGeorecoveryAliasAuthorization.rule = azServicebusGeorecoveryAliasAuthorizationRule;
    return azServicebusGeorecoveryAliasAuthorization;
}());
/** Manage Azure Service Bus Geo-Disaster Recovery Configuration Alias. */
var azServicebusGeorecoveryAlias = /** @class */ (function (_super) {
    __extends(azServicebusGeorecoveryAlias, _super);
    function azServicebusGeorecoveryAlias() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    azServicebusGeorecoveryAlias.authorization = azServicebusGeorecoveryAliasAuthorization;
    return azServicebusGeorecoveryAlias;
}(_azServicebus.az_servicebus_georecovery_alias));
var azServicebusGeorecovery = /** @class */ (function () {
    function azServicebusGeorecovery() {
    }
    /** Manage Azure Service Bus Geo-Disaster Recovery Configuration Alias. */
    azServicebusGeorecovery.alias = azServicebusGeorecoveryAlias;
    return azServicebusGeorecovery;
}());
/** Manage Azure Service Bus Namespace Authorization Rule. */
var azServicebusNamespaceAuthorizationRule = /** @class */ (function (_super) {
    __extends(azServicebusNamespaceAuthorizationRule, _super);
    function azServicebusNamespaceAuthorizationRule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    azServicebusNamespaceAuthorizationRule.keys = _azServicebus.az_servicebus_namespace_authorization_rule_keys;
    return azServicebusNamespaceAuthorizationRule;
}(_azServicebus.az_servicebus_namespace_authorization_rule));
var azServicebusNamespaceAuthorization = /** @class */ (function () {
    function azServicebusNamespaceAuthorization() {
    }
    /** Manage Azure Service Bus Namespace Authorization Rule. */
    azServicebusNamespaceAuthorization.rule = azServicebusNamespaceAuthorizationRule;
    return azServicebusNamespaceAuthorization;
}());
var azServicebusNamespaceNetwork = /** @class */ (function () {
    function azServicebusNamespaceNetwork() {
    }
    azServicebusNamespaceNetwork.rule = _azServicebus.az_servicebus_namespace_network_rule;
    return azServicebusNamespaceNetwork;
}());
/** Manage Azure Service Bus Namespace. */
var azServicebusNamespace = /** @class */ (function (_super) {
    __extends(azServicebusNamespace, _super);
    function azServicebusNamespace() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    azServicebusNamespace.authorization = azServicebusNamespaceAuthorization;
    azServicebusNamespace.network = azServicebusNamespaceNetwork;
    return azServicebusNamespace;
}(_azServicebus.az_servicebus_namespace));
/** Manage Azure Service Bus Queue Authorization Rule. */
var azServicebusQueueAuthorizationRule = /** @class */ (function (_super) {
    __extends(azServicebusQueueAuthorizationRule, _super);
    function azServicebusQueueAuthorizationRule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    azServicebusQueueAuthorizationRule.keys = _azServicebus.az_servicebus_queue_authorization_rule_keys;
    return azServicebusQueueAuthorizationRule;
}(_azServicebus.az_servicebus_queue_authorization_rule));
var azServicebusQueueAuthorization = /** @class */ (function () {
    function azServicebusQueueAuthorization() {
    }
    /** Manage Azure Service Bus Queue Authorization Rule. */
    azServicebusQueueAuthorization.rule = azServicebusQueueAuthorizationRule;
    return azServicebusQueueAuthorization;
}());
/** Manage Azure Service Bus Queue and Authorization Rule. */
var azServicebusQueue = /** @class */ (function (_super) {
    __extends(azServicebusQueue, _super);
    function azServicebusQueue() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    azServicebusQueue.authorization = azServicebusQueueAuthorization;
    return azServicebusQueue;
}(_azServicebus.az_servicebus_queue));
/** Manage Azure Service Bus Topic Authorization Rule. */
var azServicebusTopicAuthorizationRule = /** @class */ (function (_super) {
    __extends(azServicebusTopicAuthorizationRule, _super);
    function azServicebusTopicAuthorizationRule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    azServicebusTopicAuthorizationRule.keys = _azServicebus.az_servicebus_topic_authorization_rule_keys;
    return azServicebusTopicAuthorizationRule;
}(_azServicebus.az_servicebus_topic_authorization_rule));
var azServicebusTopicAuthorization = /** @class */ (function () {
    function azServicebusTopicAuthorization() {
    }
    /** Manage Azure Service Bus Topic Authorization Rule. */
    azServicebusTopicAuthorization.rule = azServicebusTopicAuthorizationRule;
    return azServicebusTopicAuthorization;
}());
/** Manage Azure Service Bus Subscription. */
var azServicebusTopicSubscription = /** @class */ (function (_super) {
    __extends(azServicebusTopicSubscription, _super);
    function azServicebusTopicSubscription() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    azServicebusTopicSubscription.rule = _azServicebus.az_servicebus_topic_subscription_rule;
    return azServicebusTopicSubscription;
}(_azServicebus.az_servicebus_topic_subscription));
/** Manage Azure Service Bus Topic and Authorization Rule. */
var azServicebusTopic = /** @class */ (function (_super) {
    __extends(azServicebusTopic, _super);
    function azServicebusTopic() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    azServicebusTopic.authorization = azServicebusTopicAuthorization;
    /** Manage Azure Service Bus Subscription. */
    azServicebusTopic.subscription = azServicebusTopicSubscription;
    return azServicebusTopic;
}(_azServicebus.az_servicebus_topic));
/** Manage Azure Service Bus namespaces, queues, topics, subscriptions, rules and geo-disaster recovery configuration alias. */
var azServicebus = /** @class */ (function (_super) {
    __extends(azServicebus, _super);
    function azServicebus() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    azServicebus.georecovery = azServicebusGeorecovery;
    azServicebus.migration = _azServicebus.az_servicebus_migration;
    /** Manage Azure Service Bus Namespace. */
    azServicebus.namespace = azServicebusNamespace;
    /** Manage Azure Service Bus Queue and Authorization Rule. */
    azServicebus.queue = azServicebusQueue;
    /** Manage Azure Service Bus Topic and Authorization Rule. */
    azServicebus.topic = azServicebusTopic;
    return azServicebus;
}(_azServicebus.az_servicebus));
/** Manage application types on an Azure Service Fabric cluster. */
var azSfApplicationType = /** @class */ (function (_super) {
    __extends(azSfApplicationType, _super);
    function azSfApplicationType() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    azSfApplicationType.version = _azSf.az_sf_application_type_version;
    return azSfApplicationType;
}(_azSf.az_sf_application_type));
/** Manage applications running on an Azure Service Fabric cluster. */
var azSfApplication = /** @class */ (function (_super) {
    __extends(azSfApplication, _super);
    function azSfApplication() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    azSfApplication.certificate = _azSf.az_sf_application_certificate;
    /** Manage application types on an Azure Service Fabric cluster. */
    azSfApplication.type = azSfApplicationType;
    return azSfApplication;
}(_azSf.az_sf_application));
var azSfClusterClient = /** @class */ (function () {
    function azSfClusterClient() {
    }
    azSfClusterClient.certificate = _azSf.az_sf_cluster_client_certificate;
    return azSfClusterClient;
}());
/** Manage the node instance of a cluster. */
var azSfClusterNode = /** @class */ (function (_super) {
    __extends(azSfClusterNode, _super);
    function azSfClusterNode() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    azSfClusterNode.type = _azSf.az_sf_cluster_node_type;
    return azSfClusterNode;
}(_azSf.az_sf_cluster_node));
var azSfClusterUpgrade = /** @class */ (function () {
    function azSfClusterUpgrade() {
    }
    azSfClusterUpgrade.type = _azSf.az_sf_cluster_upgrade_type;
    return azSfClusterUpgrade;
}());
/** Manage an Azure Service Fabric cluster. */
var azSfCluster = /** @class */ (function (_super) {
    __extends(azSfCluster, _super);
    function azSfCluster() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    azSfCluster.certificate = _azSf.az_sf_cluster_certificate;
    azSfCluster.client = azSfClusterClient;
    azSfCluster.durability = _azSf.az_sf_cluster_durability;
    /** Manage the node instance of a cluster. */
    azSfCluster.node = azSfClusterNode;
    azSfCluster.reliability = _azSf.az_sf_cluster_reliability;
    azSfCluster.setting = _azSf.az_sf_cluster_setting;
    azSfCluster.upgrade = azSfClusterUpgrade;
    return azSfCluster;
}(_azSf.az_sf_cluster));
var azSfManagedClusterClient = /** @class */ (function () {
    function azSfManagedClusterClient() {
    }
    azSfManagedClusterClient.certificate = _azSf.az_sf_managed_cluster_client_certificate;
    return azSfManagedClusterClient;
}());
/** Manage an Azure Service Fabric managed cluster. */
var azSfManagedCluster = /** @class */ (function (_super) {
    __extends(azSfManagedCluster, _super);
    function azSfManagedCluster() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    azSfManagedCluster.client = azSfManagedClusterClient;
    return azSfManagedCluster;
}(_azSf.az_sf_managed_cluster));
var azSfManagedNodeTypeVm = /** @class */ (function () {
    function azSfManagedNodeTypeVm() {
    }
    azSfManagedNodeTypeVm.extension = _azSf.az_sf_managed_node_type_vm_extension;
    azSfManagedNodeTypeVm.secret = _azSf.az_sf_managed_node_type_vm_secret;
    return azSfManagedNodeTypeVm;
}());
/** Manage a node type of an Azure Service Fabric managed cluster. */
var azSfManagedNodeType = /** @class */ (function (_super) {
    __extends(azSfManagedNodeType, _super);
    function azSfManagedNodeType() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    azSfManagedNodeType.node = _azSf.az_sf_managed_node_type_node;
    azSfManagedNodeType.vm = azSfManagedNodeTypeVm;
    return azSfManagedNodeType;
}(_azSf.az_sf_managed_node_type));
var azSfManagedNode = /** @class */ (function () {
    function azSfManagedNode() {
    }
    /** Manage a node type of an Azure Service Fabric managed cluster. */
    azSfManagedNode.type = azSfManagedNodeType;
    return azSfManagedNode;
}());
var azSfManaged = /** @class */ (function () {
    function azSfManaged() {
    }
    /** Manage an Azure Service Fabric managed cluster. */
    azSfManaged.cluster = azSfManagedCluster;
    azSfManaged.node = azSfManagedNode;
    return azSfManaged;
}());
/** Manage and administer Azure Service Fabric clusters. */
var azSf = /** @class */ (function (_super) {
    __extends(azSf, _super);
    function azSf() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /** Manage applications running on an Azure Service Fabric cluster. */
    azSf.application = azSfApplication;
    /** Manage an Azure Service Fabric cluster. */
    azSf.cluster = azSfCluster;
    azSf.managed = azSfManaged;
    azSf.service = _azSf.az_sf_service;
    return azSf;
}(_azSf.az_sf));
var azSigImage = /** @class */ (function () {
    function azSigImage() {
    }
    azSigImage.definition = _azSig.az_sig_image_definition;
    azSigImage.version = _azSig.az_sig_image_version;
    return azSigImage;
}());
/** Manage shared image gallery. */
var azSig = /** @class */ (function (_super) {
    __extends(azSig, _super);
    function azSig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    azSig.image = azSigImage;
    return azSig;
}(_azSig.az_sig));
var azSignalrNetwork = /** @class */ (function () {
    function azSignalrNetwork() {
    }
    azSignalrNetwork.rule = _azSignalr.az_signalr_network_rule;
    return azSignalrNetwork;
}());
/** Manage Azure SignalR Service. */
var azSignalr = /** @class */ (function (_super) {
    __extends(azSignalr, _super);
    function azSignalr() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    azSignalr.cors = _azSignalr.az_signalr_cors;
    azSignalr.key = _azSignalr.az_signalr_key;
    azSignalr.network = azSignalrNetwork;
    azSignalr.upstream = _azSignalr.az_signalr_upstream;
    return azSignalr;
}(_azSignalr.az_signalr));
var azSqlDbAudit = /** @class */ (function () {
    function azSqlDbAudit() {
    }
    azSqlDbAudit.policy = _azSql.az_sql_db_audit_policy;
    return azSqlDbAudit;
}());
/** Manage sensitivity classifications. */
var azSqlDbClassification = /** @class */ (function (_super) {
    __extends(azSqlDbClassification, _super);
    function azSqlDbClassification() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    azSqlDbClassification.recommendation = _azSql.az_sql_db_classification_recommendation;
    return azSqlDbClassification;
}(_azSql.az_sql_db_classification));
var azSqlDbLtr = /** @class */ (function () {
    function azSqlDbLtr() {
    }
    azSqlDbLtr.backup = _azSql.az_sql_db_ltr_backup;
    azSqlDbLtr.policy = _azSql.az_sql_db_ltr_policy;
    return azSqlDbLtr;
}());
var azSqlDbThreat = /** @class */ (function () {
    function azSqlDbThreat() {
    }
    azSqlDbThreat.policy = _azSql.az_sql_db_threat_policy;
    return azSqlDbThreat;
}());
/** Manage databases. */
var azSqlDb = /** @class */ (function (_super) {
    __extends(azSqlDb, _super);
    function azSqlDb() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    azSqlDb.audit = azSqlDbAudit;
    /** Manage sensitivity classifications. */
    azSqlDb.classification = azSqlDbClassification;
    azSqlDb.ltr = azSqlDbLtr;
    azSqlDb.op = _azSql.az_sql_db_op;
    azSqlDb.replica = _azSql.az_sql_db_replica;
    azSqlDb.tde = _azSql.az_sql_db_tde;
    azSqlDb.threat = azSqlDbThreat;
    return azSqlDb;
}(_azSql.az_sql_db));
/** Manage elastic pools. */
var azSqlElasticPool = /** @class */ (function (_super) {
    __extends(azSqlElasticPool, _super);
    function azSqlElasticPool() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    azSqlElasticPool.op = _azSql.az_sql_elastic_pool_op;
    return azSqlElasticPool;
}(_azSql.az_sql_elastic_pool));
var azSqlElastic = /** @class */ (function () {
    function azSqlElastic() {
    }
    /** Manage elastic pools. */
    azSqlElastic.pool = azSqlElasticPool;
    return azSqlElastic;
}());
var azSqlFailover = /** @class */ (function () {
    function azSqlFailover() {
    }
    azSqlFailover.group = _azSql.az_sql_failover_group;
    return azSqlFailover;
}());
var azSqlInstanceFailover = /** @class */ (function () {
    function azSqlInstanceFailover() {
    }
    azSqlInstanceFailover.group = _azSql.az_sql_instance_failover_group;
    return azSqlInstanceFailover;
}());
var azSqlInstance = /** @class */ (function () {
    function azSqlInstance() {
    }
    azSqlInstance.failover = azSqlInstanceFailover;
    azSqlInstance.pool = _azSql.az_sql_instance_pool;
    return azSqlInstance;
}());
var azSqlMiAd = /** @class */ (function () {
    function azSqlMiAd() {
    }
    azSqlMiAd.admin = _azSql.az_sql_mi_ad_admin;
    return azSqlMiAd;
}());
var azSqlMiTde = /** @class */ (function () {
    function azSqlMiTde() {
    }
    azSqlMiTde.key = _azSql.az_sql_mi_tde_key;
    return azSqlMiTde;
}());
/** Manage SQL managed instances. */
var azSqlMi = /** @class */ (function (_super) {
    __extends(azSqlMi, _super);
    function azSqlMi() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    azSqlMi.ad = azSqlMiAd;
    azSqlMi.key = _azSql.az_sql_mi_key;
    azSqlMi.op = _azSql.az_sql_mi_op;
    azSqlMi.tde = azSqlMiTde;
    return azSqlMi;
}(_azSql.az_sql_mi));
var azSqlMidbLtr = /** @class */ (function () {
    function azSqlMidbLtr() {
    }
    azSqlMidbLtr.backup = _azSql.az_sql_midb_ltr_backup;
    azSqlMidbLtr.policy = _azSql.az_sql_midb_ltr_policy;
    return azSqlMidbLtr;
}());
var azSqlMidbShortTermRetention = /** @class */ (function () {
    function azSqlMidbShortTermRetention() {
    }
    azSqlMidbShortTermRetention.policy = _azSql.az_sql_midb_short_term_retention_policy;
    return azSqlMidbShortTermRetention;
}());
var azSqlMidbShortTerm = /** @class */ (function () {
    function azSqlMidbShortTerm() {
    }
    azSqlMidbShortTerm.retention = azSqlMidbShortTermRetention;
    return azSqlMidbShortTerm;
}());
var azSqlMidbShort = /** @class */ (function () {
    function azSqlMidbShort() {
    }
    azSqlMidbShort.term = azSqlMidbShortTerm;
    return azSqlMidbShort;
}());
/** Manage SQL managed instance databases. */
var azSqlMidb = /** @class */ (function (_super) {
    __extends(azSqlMidb, _super);
    function azSqlMidb() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    azSqlMidb.ltr = azSqlMidbLtr;
    azSqlMidb.short = azSqlMidbShort;
    return azSqlMidb;
}(_azSql.az_sql_midb));
var azSqlServerAd = /** @class */ (function () {
    function azSqlServerAd() {
    }
    azSqlServerAd.admin = _azSql.az_sql_server_ad_admin;
    return azSqlServerAd;
}());
var azSqlServerAudit = /** @class */ (function () {
    function azSqlServerAudit() {
    }
    azSqlServerAudit.policy = _azSql.az_sql_server_audit_policy;
    return azSqlServerAudit;
}());
var azSqlServerConn = /** @class */ (function () {
    function azSqlServerConn() {
    }
    azSqlServerConn.policy = _azSql.az_sql_server_conn_policy;
    return azSqlServerConn;
}());
var azSqlServerDns = /** @class */ (function () {
    function azSqlServerDns() {
    }
    azSqlServerDns.alias = _azSql.az_sql_server_dns_alias;
    return azSqlServerDns;
}());
var azSqlServerFirewall = /** @class */ (function () {
    function azSqlServerFirewall() {
    }
    azSqlServerFirewall.rule = _azSql.az_sql_server_firewall_rule;
    return azSqlServerFirewall;
}());
var azSqlServerTde = /** @class */ (function () {
    function azSqlServerTde() {
    }
    azSqlServerTde.key = _azSql.az_sql_server_tde_key;
    return azSqlServerTde;
}());
var azSqlServerVnet = /** @class */ (function () {
    function azSqlServerVnet() {
    }
    azSqlServerVnet.rule = _azSql.az_sql_server_vnet_rule;
    return azSqlServerVnet;
}());
/** Manage SQL servers. */
var azSqlServer = /** @class */ (function (_super) {
    __extends(azSqlServer, _super);
    function azSqlServer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    azSqlServer.ad = azSqlServerAd;
    azSqlServer.audit = azSqlServerAudit;
    azSqlServer.conn = azSqlServerConn;
    azSqlServer.dns = azSqlServerDns;
    azSqlServer.firewall = azSqlServerFirewall;
    azSqlServer.key = _azSql.az_sql_server_key;
    azSqlServer.tde = azSqlServerTde;
    azSqlServer.vnet = azSqlServerVnet;
    return azSqlServer;
}(_azSql.az_sql_server));
var azSqlVirtual = /** @class */ (function () {
    function azSqlVirtual() {
    }
    azSqlVirtual.cluster = _azSql.az_sql_virtual_cluster;
    return azSqlVirtual;
}());
var azSqlVmGroupAg = /** @class */ (function () {
    function azSqlVmGroupAg() {
    }
    azSqlVmGroupAg.listener = _azSql.az_sql_vm_group_ag_listener;
    return azSqlVmGroupAg;
}());
/** Manage SQL virtual machine groups. */
var azSqlVmGroup = /** @class */ (function (_super) {
    __extends(azSqlVmGroup, _super);
    function azSqlVmGroup() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    azSqlVmGroup.ag = azSqlVmGroupAg;
    return azSqlVmGroup;
}(_azSql.az_sql_vm_group));
/** Manage SQL virtual machines. */
var azSqlVm = /** @class */ (function (_super) {
    __extends(azSqlVm, _super);
    function azSqlVm() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /** Manage SQL virtual machine groups. */
    azSqlVm.group = azSqlVmGroup;
    return azSqlVm;
}(_azSql.az_sql_vm));
/** Manage Azure SQL Databases and Data Warehouses. */
var azSql = /** @class */ (function (_super) {
    __extends(azSql, _super);
    function azSql() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /** Manage databases. */
    azSql.db = azSqlDb;
    azSql.dw = _azSql.az_sql_dw;
    azSql.elastic = azSqlElastic;
    azSql.failover = azSqlFailover;
    azSql.instance = azSqlInstance;
    /** Manage SQL managed instances. */
    azSql.mi = azSqlMi;
    /** Manage SQL managed instance databases. */
    azSql.midb = azSqlMidb;
    /** Manage SQL servers. */
    azSql.server = azSqlServer;
    azSql.virtual = azSqlVirtual;
    /** Manage SQL virtual machines. */
    azSql.vm = azSqlVm;
    return azSql;
}(_azSql.az_sql));
/** Manage static apps. */
var azStaticwebapp = /** @class */ (function (_super) {
    __extends(azStaticwebapp, _super);
    function azStaticwebapp() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    azStaticwebapp.appsettings = _azStaticwebapp.az_staticwebapp_appsettings;
    azStaticwebapp.environment = _azStaticwebapp.az_staticwebapp_environment;
    azStaticwebapp.hostname = _azStaticwebapp.az_staticwebapp_hostname;
    azStaticwebapp.users = _azStaticwebapp.az_staticwebapp_users;
    return azStaticwebapp;
}(_azStaticwebapp.az_staticwebapp));
var azStorageAccountBlobService = /** @class */ (function () {
    function azStorageAccountBlobService() {
    }
    azStorageAccountBlobService.properties = _azStorage.az_storage_account_blob_service_properties;
    return azStorageAccountBlobService;
}());
var azStorageAccountBlob = /** @class */ (function () {
    function azStorageAccountBlob() {
    }
    azStorageAccountBlob.service = azStorageAccountBlobService;
    return azStorageAccountBlob;
}());
var azStorageAccountEncryption = /** @class */ (function () {
    function azStorageAccountEncryption() {
    }
    azStorageAccountEncryption.scope = _azStorage.az_storage_account_encryption_scope;
    return azStorageAccountEncryption;
}());
var azStorageAccountFileService = /** @class */ (function () {
    function azStorageAccountFileService() {
    }
    azStorageAccountFileService.properties = _azStorage.az_storage_account_file_service_properties;
    return azStorageAccountFileService;
}());
var azStorageAccountFile = /** @class */ (function () {
    function azStorageAccountFile() {
    }
    azStorageAccountFile.service = azStorageAccountFileService;
    return azStorageAccountFile;
}());
var azStorageAccountManagement = /** @class */ (function () {
    function azStorageAccountManagement() {
    }
    azStorageAccountManagement.policy = _azStorage.az_storage_account_management_policy;
    return azStorageAccountManagement;
}());
var azStorageAccountNetwork = /** @class */ (function () {
    function azStorageAccountNetwork() {
    }
    azStorageAccountNetwork.rule = _azStorage.az_storage_account_network_rule;
    return azStorageAccountNetwork;
}());
/** Manage storage account Object Replication Policy. */
var azStorageAccountOrPolicy = /** @class */ (function (_super) {
    __extends(azStorageAccountOrPolicy, _super);
    function azStorageAccountOrPolicy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    azStorageAccountOrPolicy.rule = _azStorage.az_storage_account_or_policy_rule;
    return azStorageAccountOrPolicy;
}(_azStorage.az_storage_account_or_policy));
var azStorageAccountOr = /** @class */ (function () {
    function azStorageAccountOr() {
    }
    /** Manage storage account Object Replication Policy. */
    azStorageAccountOr.policy = azStorageAccountOrPolicy;
    return azStorageAccountOr;
}());
var azStorageAccountPrivateEndpoint = /** @class */ (function () {
    function azStorageAccountPrivateEndpoint() {
    }
    azStorageAccountPrivateEndpoint.connection = _azStorage.az_storage_account_private_endpoint_connection;
    return azStorageAccountPrivateEndpoint;
}());
var azStorageAccountPrivateLink = /** @class */ (function () {
    function azStorageAccountPrivateLink() {
    }
    azStorageAccountPrivateLink.resource = _azStorage.az_storage_account_private_link_resource;
    return azStorageAccountPrivateLink;
}());
var azStorageAccountPrivate = /** @class */ (function () {
    function azStorageAccountPrivate() {
    }
    azStorageAccountPrivate.endpoint = azStorageAccountPrivateEndpoint;
    azStorageAccountPrivate.link = azStorageAccountPrivateLink;
    return azStorageAccountPrivate;
}());
/** Manage storage accounts. */
var azStorageAccount = /** @class */ (function (_super) {
    __extends(azStorageAccount, _super);
    function azStorageAccount() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    azStorageAccount.blob = azStorageAccountBlob;
    azStorageAccount.encryption = azStorageAccountEncryption;
    azStorageAccount.file = azStorageAccountFile;
    azStorageAccount.keys = _azStorage.az_storage_account_keys;
    azStorageAccount.management = azStorageAccountManagement;
    azStorageAccount.network = azStorageAccountNetwork;
    azStorageAccount.or = azStorageAccountOr;
    azStorageAccount.private = azStorageAccountPrivate;
    return azStorageAccount;
}(_azStorage.az_storage_account));
var azStorageBlobIncremental = /** @class */ (function () {
    function azStorageBlobIncremental() {
    }
    azStorageBlobIncremental.copy = _azStorage.az_storage_blob_incremental_copy;
    return azStorageBlobIncremental;
}());
var azStorageBlobServicePropertiesDelete = /** @class */ (function () {
    function azStorageBlobServicePropertiesDelete() {
    }
    azStorageBlobServicePropertiesDelete.policy = _azStorage.az_storage_blob_service_properties_delete_policy;
    return azStorageBlobServicePropertiesDelete;
}());
/** Manage storage blob service properties. */
var azStorageBlobServiceProperties = /** @class */ (function (_super) {
    __extends(azStorageBlobServiceProperties, _super);
    function azStorageBlobServiceProperties() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    azStorageBlobServiceProperties["delete"] = azStorageBlobServicePropertiesDelete;
    return azStorageBlobServiceProperties;
}(_azStorage.az_storage_blob_service_properties));
var azStorageBlobService = /** @class */ (function () {
    function azStorageBlobService() {
    }
    /** Manage storage blob service properties. */
    azStorageBlobService.properties = azStorageBlobServiceProperties;
    return azStorageBlobService;
}());
/** Manage object storage for unstructured data (blobs). */
var azStorageBlob = /** @class */ (function (_super) {
    __extends(azStorageBlob, _super);
    function azStorageBlob() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    azStorageBlob.copy = _azStorage.az_storage_blob_copy;
    azStorageBlob.incremental = azStorageBlobIncremental;
    azStorageBlob.lease = _azStorage.az_storage_blob_lease;
    azStorageBlob.metadata = _azStorage.az_storage_blob_metadata;
    azStorageBlob.service = azStorageBlobService;
    return azStorageBlob;
}(_azStorage.az_storage_blob));
var azStorageContainerImmutability = /** @class */ (function () {
    function azStorageContainerImmutability() {
    }
    azStorageContainerImmutability.policy = _azStorage.az_storage_container_immutability_policy;
    return azStorageContainerImmutability;
}());
var azStorageContainerLegal = /** @class */ (function () {
    function azStorageContainerLegal() {
    }
    azStorageContainerLegal.hold = _azStorage.az_storage_container_legal_hold;
    return azStorageContainerLegal;
}());
/** Manage blob storage containers. */
var azStorageContainer = /** @class */ (function (_super) {
    __extends(azStorageContainer, _super);
    function azStorageContainer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    azStorageContainer.immutability = azStorageContainerImmutability;
    azStorageContainer.lease = _azStorage.az_storage_container_lease;
    azStorageContainer.legal = azStorageContainerLegal;
    azStorageContainer.metadata = _azStorage.az_storage_container_metadata;
    azStorageContainer.policy = _azStorage.az_storage_container_policy;
    return azStorageContainer;
}(_azStorage.az_storage_container));
/** Manage file storage directories. */
var azStorageDirectory = /** @class */ (function (_super) {
    __extends(azStorageDirectory, _super);
    function azStorageDirectory() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    azStorageDirectory.metadata = _azStorage.az_storage_directory_metadata;
    return azStorageDirectory;
}(_azStorage.az_storage_directory));
/** Manage file shares that use the SMB 3.0 protocol. */
var azStorageFile = /** @class */ (function (_super) {
    __extends(azStorageFile, _super);
    function azStorageFile() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    azStorageFile.copy = _azStorage.az_storage_file_copy;
    azStorageFile.metadata = _azStorage.az_storage_file_metadata;
    return azStorageFile;
}(_azStorage.az_storage_file));
/** Manage directories in Azure Data Lake Storage Gen2 account. */
var azStorageFsDirectory = /** @class */ (function (_super) {
    __extends(azStorageFsDirectory, _super);
    function azStorageFsDirectory() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    azStorageFsDirectory.metadata = _azStorage.az_storage_fs_directory_metadata;
    return azStorageFsDirectory;
}(_azStorage.az_storage_fs_directory));
/** Manage files in Azure Data Lake Storage Gen2 account. */
var azStorageFsFile = /** @class */ (function (_super) {
    __extends(azStorageFsFile, _super);
    function azStorageFsFile() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    azStorageFsFile.metadata = _azStorage.az_storage_fs_file_metadata;
    return azStorageFsFile;
}(_azStorage.az_storage_fs_file));
/** Manage file systems in Azure Data Lake Storage Gen2 account. */
var azStorageFs = /** @class */ (function (_super) {
    __extends(azStorageFs, _super);
    function azStorageFs() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    azStorageFs.access = _azStorage.az_storage_fs_access;
    /** Manage directories in Azure Data Lake Storage Gen2 account. */
    azStorageFs.directory = azStorageFsDirectory;
    /** Manage files in Azure Data Lake Storage Gen2 account. */
    azStorageFs.file = azStorageFsFile;
    azStorageFs.metadata = _azStorage.az_storage_fs_metadata;
    return azStorageFs;
}(_azStorage.az_storage_fs));
/** Manage shared access policies of a storage table. */
var azStorageQueue = /** @class */ (function (_super) {
    __extends(azStorageQueue, _super);
    function azStorageQueue() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    azStorageQueue.metadata = _azStorage.az_storage_queue_metadata;
    azStorageQueue.policy = _azStorage.az_storage_queue_policy;
    return azStorageQueue;
}(_azStorage.az_storage_queue));
/** Manage file shares. */
var azStorageShare = /** @class */ (function (_super) {
    __extends(azStorageShare, _super);
    function azStorageShare() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    azStorageShare.metadata = _azStorage.az_storage_share_metadata;
    azStorageShare.policy = _azStorage.az_storage_share_policy;
    azStorageShare.rm = _azStorage.az_storage_share_rm;
    return azStorageShare;
}(_azStorage.az_storage_share));
/** Manage NoSQL key-value storage. */
var azStorageTable = /** @class */ (function (_super) {
    __extends(azStorageTable, _super);
    function azStorageTable() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    azStorageTable.policy = _azStorage.az_storage_table_policy;
    return azStorageTable;
}(_azStorage.az_storage_table));
/** Manage Azure Cloud Storage resources. */
var azStorage = /** @class */ (function (_super) {
    __extends(azStorage, _super);
    function azStorage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /** Manage storage accounts. */
    azStorage.account = azStorageAccount;
    /** Manage object storage for unstructured data (blobs). */
    azStorage.blob = azStorageBlob;
    /** Manage blob storage containers. */
    azStorage.container = azStorageContainer;
    azStorage.cors = _azStorage.az_storage_cors;
    /** Manage file storage directories. */
    azStorage.directory = azStorageDirectory;
    azStorage.entity = _azStorage.az_storage_entity;
    /** Manage file shares that use the SMB 3.0 protocol. */
    azStorage.file = azStorageFile;
    /** Manage file systems in Azure Data Lake Storage Gen2 account. */
    azStorage.fs = azStorageFs;
    azStorage.logging = _azStorage.az_storage_logging;
    azStorage.message = _azStorage.az_storage_message;
    azStorage.metrics = _azStorage.az_storage_metrics;
    /** Manage shared access policies of a storage table. */
    azStorage.queue = azStorageQueue;
    /** Manage file shares. */
    azStorage.share = azStorageShare;
    /** Manage NoSQL key-value storage. */
    azStorage.table = azStorageTable;
    return azStorage;
}(_azStorage.az_storage));
/** Manage Synapse's role assignments and definitions. */
var azSynapseRole = /** @class */ (function (_super) {
    __extends(azSynapseRole, _super);
    function azSynapseRole() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    azSynapseRole.assignment = _azSynapse.az_synapse_role_assignment;
    azSynapseRole.definition = _azSynapse.az_synapse_role_definition;
    return azSynapseRole;
}(_azSynapse.az_synapse_role));
/** Manage Spark pools and Spark jobs. */
var azSynapseSpark = /** @class */ (function (_super) {
    __extends(azSynapseSpark, _super);
    function azSynapseSpark() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    azSynapseSpark.job = _azSynapse.az_synapse_spark_job;
    azSynapseSpark.pool = _azSynapse.az_synapse_spark_pool;
    azSynapseSpark.session = _azSynapse.az_synapse_spark_session;
    azSynapseSpark.statement = _azSynapse.az_synapse_spark_statement;
    return azSynapseSpark;
}(_azSynapse.az_synapse_spark));
/** Manage SQL pools. */
var azSynapseSql = /** @class */ (function (_super) {
    __extends(azSynapseSql, _super);
    function azSynapseSql() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    azSynapseSql.pool = _azSynapse.az_synapse_sql_pool;
    return azSynapseSql;
}(_azSynapse.az_synapse_sql));
var azSynapseWorkspaceFirewall = /** @class */ (function () {
    function azSynapseWorkspaceFirewall() {
    }
    azSynapseWorkspaceFirewall.rule = _azSynapse.az_synapse_workspace_firewall_rule;
    return azSynapseWorkspaceFirewall;
}());
/** Manage Synapse workspaces. */
var azSynapseWorkspace = /** @class */ (function (_super) {
    __extends(azSynapseWorkspace, _super);
    function azSynapseWorkspace() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    azSynapseWorkspace.firewall = azSynapseWorkspaceFirewall;
    return azSynapseWorkspace;
}(_azSynapse.az_synapse_workspace));
/** Manage and operate Synapse Workspace, Spark Pool, SQL Pool. */
var azSynapse = /** @class */ (function (_super) {
    __extends(azSynapse, _super);
    function azSynapse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /** Manage Synapse's role assignments and definitions. */
    azSynapse.role = azSynapseRole;
    /** Manage Spark pools and Spark jobs. */
    azSynapse.spark = azSynapseSpark;
    /** Manage SQL pools. */
    azSynapse.sql = azSynapseSql;
    /** Manage Synapse workspaces. */
    azSynapse.workspace = azSynapseWorkspace;
    return azSynapse;
}(_azSynapse.az_synapse));
var azVmAvailability = /** @class */ (function () {
    function azVmAvailability() {
    }
    azVmAvailability.set = _azVm.az_vm_availability_set;
    return azVmAvailability;
}());
var azVmBoot = /** @class */ (function () {
    function azVmBoot() {
    }
    azVmBoot.diagnostics = _azVm.az_vm_boot_diagnostics;
    return azVmBoot;
}());
/** Manage extensions on VMs. */
var azVmExtension = /** @class */ (function (_super) {
    __extends(azVmExtension, _super);
    function azVmExtension() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    azVmExtension.image = _azVm.az_vm_extension_image;
    return azVmExtension;
}(_azVm.az_vm_extension));
/** Manage Dedicated Hosts for Virtual Machines. */
var azVmHost = /** @class */ (function (_super) {
    __extends(azVmHost, _super);
    function azVmHost() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    azVmHost.group = _azVm.az_vm_host_group;
    return azVmHost;
}(_azVm.az_vm_host));
/** Information on available virtual machine images. */
var azVmImage = /** @class */ (function (_super) {
    __extends(azVmImage, _super);
    function azVmImage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    azVmImage.terms = _azVm.az_vm_image_terms;
    return azVmImage;
}(_azVm.az_vm_image));
/** Manage monitor aspect for a vm. */
var azVmMonitor = /** @class */ (function (_super) {
    __extends(azVmMonitor, _super);
    function azVmMonitor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    azVmMonitor.log = _azVm.az_vm_monitor_log;
    azVmMonitor.metrics = _azVm.az_vm_monitor_metrics;
    return azVmMonitor;
}(_azVm.az_vm_monitor));
var azVmRun = /** @class */ (function () {
    function azVmRun() {
    }
    azVmRun.command = _azVm.az_vm_run_command;
    return azVmRun;
}());
var azVmUnmanaged = /** @class */ (function () {
    function azVmUnmanaged() {
    }
    azVmUnmanaged.disk = _azVm.az_vm_unmanaged_disk;
    return azVmUnmanaged;
}());
/** Manage Linux or Windows virtual machines. */
var azVm = /** @class */ (function (_super) {
    __extends(azVm, _super);
    function azVm() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    azVm.availability = azVmAvailability;
    azVm.boot = azVmBoot;
    azVm.diagnostics = _azVm.az_vm_diagnostics;
    azVm.disk = _azVm.az_vm_disk;
    azVm.encryption = _azVm.az_vm_encryption;
    /** Manage extensions on VMs. */
    azVm.extension = azVmExtension;
    /** Manage Dedicated Hosts for Virtual Machines. */
    azVm.host = azVmHost;
    azVm.identity = _azVm.az_vm_identity;
    /** Information on available virtual machine images. */
    azVm.image = azVmImage;
    /** Manage monitor aspect for a vm. */
    azVm.monitor = azVmMonitor;
    azVm.nic = _azVm.az_vm_nic;
    azVm.run = azVmRun;
    azVm.secret = _azVm.az_vm_secret;
    azVm.unmanaged = azVmUnmanaged;
    azVm.user = _azVm.az_vm_user;
    return azVm;
}(_azVm.az_vm));
/** Manage extensions on a VM scale set. */
var azVmssExtension = /** @class */ (function (_super) {
    __extends(azVmssExtension, _super);
    function azVmssExtension() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    azVmssExtension.image = _azVmss.az_vmss_extension_image;
    return azVmssExtension;
}(_azVmss.az_vmss_extension));
var azVmssRolling = /** @class */ (function () {
    function azVmssRolling() {
    }
    azVmssRolling.upgrade = _azVmss.az_vmss_rolling_upgrade;
    return azVmssRolling;
}());
var azVmssRun = /** @class */ (function () {
    function azVmssRun() {
    }
    azVmssRun.command = _azVmss.az_vmss_run_command;
    return azVmssRun;
}());
/** Manage groupings of virtual machines in an Azure Virtual Machine Scale Set (VMSS). */
var azVmss = /** @class */ (function (_super) {
    __extends(azVmss, _super);
    function azVmss() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    azVmss.diagnostics = _azVmss.az_vmss_diagnostics;
    azVmss.disk = _azVmss.az_vmss_disk;
    azVmss.encryption = _azVmss.az_vmss_encryption;
    /** Manage extensions on a VM scale set. */
    azVmss.extension = azVmssExtension;
    azVmss.identity = _azVmss.az_vmss_identity;
    azVmss.nic = _azVmss.az_vmss_nic;
    azVmss.rolling = azVmssRolling;
    azVmss.run = azVmssRun;
    return azVmss;
}(_azVmss.az_vmss));
var azWebappConfigAccess = /** @class */ (function () {
    function azWebappConfigAccess() {
    }
    azWebappConfigAccess.restriction = _azWebapp.az_webapp_config_access_restriction;
    return azWebappConfigAccess;
}());
var azWebappConfigConnection = /** @class */ (function () {
    function azWebappConfigConnection() {
    }
    azWebappConfigConnection.string = _azWebapp.az_webapp_config_connection_string;
    return azWebappConfigConnection;
}());
var azWebappConfigStorage = /** @class */ (function () {
    function azWebappConfigStorage() {
    }
    azWebappConfigStorage.account = _azWebapp.az_webapp_config_storage_account;
    return azWebappConfigStorage;
}());
/** Configure a web app. */
var azWebappConfig = /** @class */ (function (_super) {
    __extends(azWebappConfig, _super);
    function azWebappConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    azWebappConfig.access = azWebappConfigAccess;
    azWebappConfig.appsettings = _azWebapp.az_webapp_config_appsettings;
    azWebappConfig.backup = _azWebapp.az_webapp_config_backup;
    azWebappConfig.connection = azWebappConfigConnection;
    azWebappConfig.container = _azWebapp.az_webapp_config_container;
    azWebappConfig.hostname = _azWebapp.az_webapp_config_hostname;
    azWebappConfig.snapshot = _azWebapp.az_webapp_config_snapshot;
    azWebappConfig.ssl = _azWebapp.az_webapp_config_ssl;
    azWebappConfig.storage = azWebappConfigStorage;
    return azWebappConfig;
}(_azWebapp.az_webapp_config));
/** Manage web app deployments. */
var azWebappDeployment = /** @class */ (function (_super) {
    __extends(azWebappDeployment, _super);
    function azWebappDeployment() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    azWebappDeployment.container = _azWebapp.az_webapp_deployment_container;
    azWebappDeployment.slot = _azWebapp.az_webapp_deployment_slot;
    azWebappDeployment.source = _azWebapp.az_webapp_deployment_source;
    azWebappDeployment.user = _azWebapp.az_webapp_deployment_user;
    return azWebappDeployment;
}(_azWebapp.az_webapp_deployment));
var azWebappHybrid = /** @class */ (function () {
    function azWebappHybrid() {
    }
    azWebappHybrid.connection = _azWebapp.az_webapp_hybrid_connection;
    return azWebappHybrid;
}());
/** Manage web app logs. */
var azWebappLog = /** @class */ (function (_super) {
    __extends(azWebappLog, _super);
    function azWebappLog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    azWebappLog.deployment = _azWebapp.az_webapp_log_deployment;
    return azWebappLog;
}(_azWebapp.az_webapp_log));
var azWebappTraffic = /** @class */ (function () {
    function azWebappTraffic() {
    }
    azWebappTraffic.routing = _azWebapp.az_webapp_traffic_routing;
    return azWebappTraffic;
}());
var azWebappVnet = /** @class */ (function () {
    function azWebappVnet() {
    }
    azWebappVnet.integration = _azWebapp.az_webapp_vnet_integration;
    return azWebappVnet;
}());
/** Allows management operations for webjobs on a web app. */
var azWebappWebjob = /** @class */ (function (_super) {
    __extends(azWebappWebjob, _super);
    function azWebappWebjob() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    azWebappWebjob.continuous = _azWebapp.az_webapp_webjob_continuous;
    azWebappWebjob.triggered = _azWebapp.az_webapp_webjob_triggered;
    return azWebappWebjob;
}(_azWebapp.az_webapp_webjob));
/** Manage web apps. */
var azWebapp = /** @class */ (function (_super) {
    __extends(azWebapp, _super);
    function azWebapp() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    azWebapp.auth = _azWebapp.az_webapp_auth;
    /** Configure a web app. */
    azWebapp.config = azWebappConfig;
    azWebapp.cors = _azWebapp.az_webapp_cors;
    azWebapp.deleted = _azWebapp.az_webapp_deleted;
    /** Manage web app deployments. */
    azWebapp.deployment = azWebappDeployment;
    azWebapp.hybrid = azWebappHybrid;
    azWebapp.identity = _azWebapp.az_webapp_identity;
    /** Manage web app logs. */
    azWebapp.log = azWebappLog;
    azWebapp.traffic = azWebappTraffic;
    azWebapp.vnet = azWebappVnet;
    /** Allows management operations for webjobs on a web app. */
    azWebapp.webjob = azWebappWebjob;
    return azWebapp;
}(_azWebapp.az_webapp));
/** */
var az = /** @class */ (function (_super) {
    __extends(az, _super);
    function az() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /** Manage Azure subscription information. */
    az.account = azAccount;
    /** Manage private registries with Azure Container Registries. */
    az.acr = azAcr;
    /** Manage Azure Container Services. */
    az.acs = azAcs;
    /** Manage Azure Active Directory Graph entities needed for Role Based Access Control. */
    az.ad = azAd;
    /** Manage Azure Advisor. */
    az.advisor = azAdvisor;
    /** Manage Azure Kubernetes Services. */
    az.aks = azAks;
    /** Manage Azure Media Services resources. */
    az.ams = azAms;
    /** Manage Azure API Management services. */
    az.apim = azApim;
    /** Manage App Configurations. */
    az.appconfig = azAppconfig;
    /** Manage App Service plans. */
    az.appservice = azAppservice;
    az.aro = _azAro.az_aro;
    /** Manage Azure Artifacts. */
    az.artifacts = azArtifacts;
    /** Manage Azure Backups. */
    az.backup = azBackup;
    /** Manage Azure Batch. */
    az.batch = azBatch;
    /** Manage Batch AI resources. */
    az.batchai = azBatchai;
    /** Manage Azure Billing. */
    az.billing = azBilling;
    /** Manage Azure Boards. */
    az.boards = azBoards;
    /** Manage Microsoft Azure Bot Service. */
    az.bot = azBot;
    az.cache = _azCache.az_cache;
    /** Manage Azure Content Delivery Networks (CDNs). */
    az.cdn = azCdn;
    az.cloud = _azCloud.az_cloud;
    /** Manage Azure Cognitive Services accounts. */
    az.cognitiveservices = azCognitiveservices;
    /** Manage Azure CLI configuration. */
    az.config = azConfig;
    /** Manage consumption of Azure resources. */
    az.consumption = azConsumption;
    az.container = _azContainer.az_container;
    /** Manage Azure Cosmos DB database accounts. */
    az.cosmosdb = azCosmosdb;
    /** Manage Azure Resource Manager template deployment at subscription scope. */
    az.deployment = azDeployment;
    /** Create and manage rollouts for your service. */
    az.deploymentmanager = azDeploymentmanager;
    /** Manage Azure DevOps organization level operations. */
    az.devops = azDevops;
    /** Manage Azure Managed Disks. */
    az.disk = azDisk;
    /** Manage Data Lake Analytics accounts, jobs, and catalogs. */
    az.dla = azDla;
    /** Manage Data Lake Store accounts and filesystems. */
    az.dls = azDls;
    /** Manage Azure Data Migration Service (DMS) instances. */
    az.dms = azDms;
    /** Manage Azure Event Grid topics, domains, domain topics, system topics partner topics, event subscriptions, system topic event subscriptions and partner topic event subscriptions. */
    az.eventgrid = azEventgrid;
    /** Manage Azure Event Hubs namespaces, eventhubs, consumergroups and geo recovery configurations - Alias. */
    az.eventhubs = azEventhubs;
    az.extension = _azExtension.az_extension;
    az.feature = _azFeature.az_feature;
    /** Manage function apps. To install the Azure Functions Core tools see <a href="https://github.com/Azure/azure-functions-core-tools">https://github.com/Azure/azure-functions-core-tools</a>. */
    az.functionapp = azFunctionapp;
    /** Manage resource groups and template deployments. */
    az.group = azGroup;
    /** Manage HDInsight resources. */
    az.hdinsight = azHdinsight;
    az.identity = _azIdentity.az_identity;
    /** Manage custom virtual machine images. */
    az.image = azImage;
    /** Manage Internet of Things (IoT) assets. */
    az.iot = azIot;
    /** Manage IoT Central assets. */
    az.iotcentral = azIotcentral;
    /** Manage KeyVault keys, secrets, and certificates. */
    az.keyvault = azKeyvault;
    /** Manage Azure Kusto resources. */
    az.kusto = azKusto;
    /** Manage Azure DevTest Labs. */
    az.lab = azLab;
    az.local = azLocal;
    az.lock = _azLock.az_lock;
    /** Manage template solutions provided and maintained by Independent Software Vendors (ISVs). */
    az.managedapp = azManagedapp;
    /** Manage the registration assignments and definitions in Azure. */
    az.managedservices = azManagedservices;
    /** Manage Azure Maps. */
    az.maps = azMaps;
    /** Manage Azure Database for MariaDB servers. */
    az.mariadb = azMariadb;
    /** Manage the Azure Monitor Service. */
    az.monitor = azMonitor;
    /** Manage Azure Database for MySQL servers. */
    az.mysql = azMysql;
    /** Manage Azure NetApp Files (ANF) Resources. */
    az.netappfiles = azNetappfiles;
    /** Manage Azure Network resources. */
    az.network = azNetwork;
    /** Manage Azure Red Hat OpenShift Services. */
    az.openshift = azOpenshift;
    /** Manage Azure Pipelines. */
    az.pipelines = azPipelines;
    /** Manage resource policies. */
    az.policy = azPolicy;
    /** Manage Azure Database for PostgreSQL servers. */
    az.postgres = azPostgres;
    az.ppg = _azPpg.az_ppg;
    /** Manage resource providers. */
    az.provider = azProvider;
    /** Manage dedicated Redis caches for your Azure applications. */
    az.redis = azRedis;
    /** Manage Azure Relay Service namespaces, WCF relays, hybrid connections, and rules. */
    az.relay = azRelay;
    /** Manage Azure Repos. */
    az.repos = azRepos;
    /** Manage Azure Reservations. */
    az.reservations = azReservations;
    /** Manage Azure resources. */
    az.resource = azResource;
    /** Manage user roles for access control with Azure Active Directory and service principals. */
    az.role = azRole;
    /** Manage Azure Search services, admin keys and query keys. */
    az.search = azSearch;
    /** Manage your security posture with Azure Security Center. */
    az.security = azSecurity;
    /** Manage Azure Service Bus namespaces, queues, topics, subscriptions, rules and geo-disaster recovery configuration alias. */
    az.servicebus = azServicebus;
    /** Manage and administer Azure Service Fabric clusters. */
    az.sf = azSf;
    /** Manage shared image gallery. */
    az.sig = azSig;
    /** Manage Azure SignalR Service. */
    az.signalr = azSignalr;
    az.snapshot = _azSnapshot.az_snapshot;
    /** Manage Azure SQL Databases and Data Warehouses. */
    az.sql = azSql;
    /** Manage static apps. */
    az.staticwebapp = azStaticwebapp;
    /** Manage Azure Cloud Storage resources. */
    az.storage = azStorage;
    /** Manage and operate Synapse Workspace, Spark Pool, SQL Pool. */
    az.synapse = azSynapse;
    az.tag = _azTag.az_tag;
    /** Manage Linux or Windows virtual machines. */
    az.vm = azVm;
    /** Manage groupings of virtual machines in an Azure Virtual Machine Scale Set (VMSS). */
    az.vmss = azVmss;
    /** Manage web apps. */
    az.webapp = azWebapp;
    return az;
}(_az.az));
exports.az = az;
