import * as _azAccount from './src/az_account';
import * as _azAcr from './src/az_acr';
import * as _azAcs from './src/az_acs';
import * as _azAd from './src/az_ad';
import * as _azAdvisor from './src/az_advisor';
import * as _azAks from './src/az_aks';
import * as _azAms from './src/az_ams';
import * as _azApim from './src/az_apim';
import * as _azAppconfig from './src/az_appconfig';
import * as _azAppservice from './src/az_appservice';
import * as _azAro from './src/az_aro';
import * as _azArtifacts from './src/az_artifacts';
import * as _azBackup from './src/az_backup';
import * as _azBatch from './src/az_batch';
import * as _azBatchai from './src/az_batchai';
import * as _azBilling from './src/az_billing';
import * as _azBoards from './src/az_boards';
import * as _azBot from './src/az_bot';
import * as _azCache from './src/az_cache';
import * as _azCdn from './src/az_cdn';
import * as _azCloud from './src/az_cloud';
import * as _azCognitiveservices from './src/az_cognitiveservices';
import * as _azConfig from './src/az_config';
import * as _azConsumption from './src/az_consumption';
import * as _azContainer from './src/az_container';
import * as _azCosmosdb from './src/az_cosmosdb';
import * as _azDeployment from './src/az_deployment';
import * as _azDeploymentmanager from './src/az_deploymentmanager';
import * as _azDevops from './src/az_devops';
import * as _azDisk from './src/az_disk';
import * as _azDla from './src/az_dla';
import * as _azDls from './src/az_dls';
import * as _azDms from './src/az_dms';
import * as _azEventgrid from './src/az_eventgrid';
import * as _azEventhubs from './src/az_eventhubs';
import * as _azExtension from './src/az_extension';
import * as _azFeature from './src/az_feature';
import * as _azFunctionapp from './src/az_functionapp';
import * as _azGroup from './src/az_group';
import * as _azHdinsight from './src/az_hdinsight';
import * as _azIdentity from './src/az_identity';
import * as _azImage from './src/az_image';
import * as _azIot from './src/az_iot';
import * as _azIotcentral from './src/az_iotcentral';
import * as _azKeyvault from './src/az_keyvault';
import * as _azKusto from './src/az_kusto';
import * as _azLab from './src/az_lab';
import * as _azLocal from './src/az_local';
import * as _azLock from './src/az_lock';
import * as _azManagedapp from './src/az_managedapp';
import * as _azManagedservices from './src/az_managedservices';
import * as _azMaps from './src/az_maps';
import * as _azMariadb from './src/az_mariadb';
import * as _azMonitor from './src/az_monitor';
import * as _azMysql from './src/az_mysql';
import * as _azNetappfiles from './src/az_netappfiles';
import * as _azNetwork from './src/az_network';
import * as _azOpenshift from './src/az_openshift';
import * as _azPipelines from './src/az_pipelines';
import * as _azPolicy from './src/az_policy';
import * as _azPostgres from './src/az_postgres';
import * as _azPpg from './src/az_ppg';
import * as _azProvider from './src/az_provider';
import * as _azRedis from './src/az_redis';
import * as _az from './src/az';
import * as _azRelay from './src/az_relay';
import * as _azRepos from './src/az_repos';
import * as _azReservations from './src/az_reservations';
import * as _azResource from './src/az_resource';
import * as _azRole from './src/az_role';
import * as _azSearch from './src/az_search';
import * as _azSecurity from './src/az_security';
import * as _azServicebus from './src/az_servicebus';
import * as _azSf from './src/az_sf';
import * as _azSig from './src/az_sig';
import * as _azSignalr from './src/az_signalr';
import * as _azSnapshot from './src/az_snapshot';
import * as _azSql from './src/az_sql';
import * as _azStaticwebapp from './src/az_staticwebapp';
import * as _azStorage from './src/az_storage';
import * as _azSynapse from './src/az_synapse';
import * as _azTag from './src/az_tag';
import * as _azVm from './src/az_vm';
import * as _azVmss from './src/az_vmss';
import * as _azWebapp from './src/az_webapp';
/** Manage Azure Management Groups. */
declare class azAccountManagementGroup extends _azAccount.az_account_management_group {
    static subscription: typeof _azAccount.az_account_management_group_subscription;
}
declare class azAccountManagement {
    /** Manage Azure Management Groups. */
    static group: typeof azAccountManagementGroup;
}
/** Manage Azure subscription information. */
declare class azAccount extends _azAccount.az_account {
    static lock: typeof _azAccount.az_account_lock;
    static management: typeof azAccountManagement;
}
declare class azAcrConfigContent {
    static trust: typeof _azAcr.az_acr_config_content_trust;
}
/** Configure policies for Azure Container Registries. */
declare class azAcrConfig extends _azAcr.az_acr_config {
    static content: typeof azAcrConfigContent;
    static retention: typeof _azAcr.az_acr_config_retention;
}
/** Manage helm charts for Azure Container Registries. */
declare class azAcrHelm extends _azAcr.az_acr_helm {
    static repo: typeof _azAcr.az_acr_helm_repo;
}
declare class azAcrNetwork {
    static rule: typeof _azAcr.az_acr_network_rule;
}
declare class azAcrPrivateEndpoint {
    static connection: typeof _azAcr.az_acr_private_endpoint_connection;
}
declare class azAcrPrivateLink {
    static resource: typeof _azAcr.az_acr_private_link_resource;
}
declare class azAcrPrivate {
    static endpoint: typeof azAcrPrivateEndpoint;
    static link: typeof azAcrPrivateLink;
}
declare class azAcrScope {
    static map: typeof _azAcr.az_acr_scope_map;
}
/** Manage a collection of steps for building, testing and OS & Framework patching container images using Azure Container Registries. */
declare class azAcrTask extends _azAcr.az_acr_task {
    static credential: typeof _azAcr.az_acr_task_credential;
    static identity: typeof _azAcr.az_acr_task_identity;
    static timer: typeof _azAcr.az_acr_task_timer;
}
/** Manage tokens for an Azure Container Registry. */
declare class azAcrToken extends _azAcr.az_acr_token {
    static credential: typeof _azAcr.az_acr_token_credential;
}
/** Manage private registries with Azure Container Registries. */
declare class azAcr extends _azAcr.az_acr {
    static agentpool: typeof _azAcr.az_acr_agentpool;
    /** Configure policies for Azure Container Registries. */
    static config: typeof azAcrConfig;
    static credential: typeof _azAcr.az_acr_credential;
    static encryption: typeof _azAcr.az_acr_encryption;
    /** Manage helm charts for Azure Container Registries. */
    static helm: typeof azAcrHelm;
    static identity: typeof _azAcr.az_acr_identity;
    static network: typeof azAcrNetwork;
    static pack: typeof _azAcr.az_acr_pack;
    static private: typeof azAcrPrivate;
    static replication: typeof _azAcr.az_acr_replication;
    static repository: typeof _azAcr.az_acr_repository;
    static scope: typeof azAcrScope;
    /** Manage a collection of steps for building, testing and OS & Framework patching container images using Azure Container Registries. */
    static task: typeof azAcrTask;
    static taskrun: typeof _azAcr.az_acr_taskrun;
    /** Manage tokens for an Azure Container Registry. */
    static token: typeof azAcrToken;
    static webhook: typeof _azAcr.az_acr_webhook;
}
/** Manage Azure Container Services. */
declare class azAcs extends _azAcs.az_acs {
    static dcos: typeof _azAcs.az_acs_dcos;
    static kubernetes: typeof _azAcs.az_acs_kubernetes;
}
/** Manage applications with AAD Graph. */
declare class azAdApp extends _azAd.az_ad_app {
    static credential: typeof _azAd.az_ad_app_credential;
    static owner: typeof _azAd.az_ad_app_owner;
    static permission: typeof _azAd.az_ad_app_permission;
}
/** Manage Azure Active Directory groups. */
declare class azAdGroup extends _azAd.az_ad_group {
    static member: typeof _azAd.az_ad_group_member;
    static owner: typeof _azAd.az_ad_group_owner;
}
declare class azAdSignedIn {
    static user: typeof _azAd.az_ad_signed_in_user;
}
declare class azAdSigned {
    static in: typeof azAdSignedIn;
}
/** Manage Azure Active Directory service principals for automation authentication. */
declare class azAdSp extends _azAd.az_ad_sp {
    static credential: typeof _azAd.az_ad_sp_credential;
    static owner: typeof _azAd.az_ad_sp_owner;
}
/** Manage Azure Active Directory Graph entities needed for Role Based Access Control. */
declare class azAd extends _azAd.az_ad {
    /** Manage applications with AAD Graph. */
    static app: typeof azAdApp;
    /** Manage Azure Active Directory groups. */
    static group: typeof azAdGroup;
    static signed: typeof azAdSigned;
    /** Manage Azure Active Directory service principals for automation authentication. */
    static sp: typeof azAdSp;
    static user: typeof _azAd.az_ad_user;
}
/** Manage Azure Advisor. */
declare class azAdvisor extends _azAdvisor.az_advisor {
    static configuration: typeof _azAdvisor.az_advisor_configuration;
    static recommendation: typeof _azAdvisor.az_advisor_recommendation;
}
/** Manage Azure Kubernetes Services. */
declare class azAks extends _azAks.az_aks {
    static nodepool: typeof _azAks.az_aks_nodepool;
}
/** Manage Azure Media Services accounts. */
declare class azAmsAccount extends _azAms.az_ams_account {
    static filter: typeof _azAms.az_ams_account_filter;
    static mru: typeof _azAms.az_ams_account_mru;
    static sp: typeof _azAms.az_ams_account_sp;
    static storage: typeof _azAms.az_ams_account_storage;
}
/** Manage assets for an Azure Media Services account. */
declare class azAmsAsset extends _azAms.az_ams_asset {
    static filter: typeof _azAms.az_ams_asset_filter;
}
/** Manage content key policies for an Azure Media Services account. */
declare class azAmsContentKeyPolicy extends _azAms.az_ams_content_key_policy {
    static option: typeof _azAms.az_ams_content_key_policy_option;
}
declare class azAmsContentKey {
    /** Manage content key policies for an Azure Media Services account. */
    static policy: typeof azAmsContentKeyPolicy;
}
declare class azAmsContent {
    static key: typeof azAmsContentKey;
}
declare class azAmsLive {
    static event: typeof _azAms.az_ams_live_event;
    static output: typeof _azAms.az_ams_live_output;
}
/** Manage streaming endpoints for an Azure Media Service account. */
declare class azAmsStreamingEndpoint extends _azAms.az_ams_streaming_endpoint {
    static akamai: typeof _azAms.az_ams_streaming_endpoint_akamai;
}
declare class azAmsStreaming {
    /** Manage streaming endpoints for an Azure Media Service account. */
    static endpoint: typeof azAmsStreamingEndpoint;
    static locator: typeof _azAms.az_ams_streaming_locator;
    static policy: typeof _azAms.az_ams_streaming_policy;
}
/** Manage transforms for an Azure Media Services account. */
declare class azAmsTransform extends _azAms.az_ams_transform {
    static output: typeof _azAms.az_ams_transform_output;
}
/** Manage Azure Media Services resources. */
declare class azAms extends _azAms.az_ams {
    /** Manage Azure Media Services accounts. */
    static account: typeof azAmsAccount;
    /** Manage assets for an Azure Media Services account. */
    static asset: typeof azAmsAsset;
    static content: typeof azAmsContent;
    static job: typeof _azAms.az_ams_job;
    static live: typeof azAmsLive;
    static streaming: typeof azAmsStreaming;
    /** Manage transforms for an Azure Media Services account. */
    static transform: typeof azAmsTransform;
}
/** Manage Azure API Management API's. */
declare class azApimApi extends _azApim.az_apim_api {
    static operation: typeof _azApim.az_apim_api_operation;
    static release: typeof _azApim.az_apim_api_release;
    static revision: typeof _azApim.az_apim_api_revision;
    static versionset: typeof _azApim.az_apim_api_versionset;
}
/** Manage Azure API Management Product's. */
declare class azApimProduct extends _azApim.az_apim_product {
    static api: typeof _azApim.az_apim_product_api;
}
/** Manage Azure API Management services. */
declare class azApim extends _azApim.az_apim {
    /** Manage Azure API Management API's. */
    static api: typeof azApimApi;
    static nv: typeof _azApim.az_apim_nv;
    /** Manage Azure API Management Product's. */
    static product: typeof azApimProduct;
}
/** Manage feature flags stored in an App Configuration. */
declare class azAppconfigFeature extends _azAppconfig.az_appconfig_feature {
    static filter: typeof _azAppconfig.az_appconfig_feature_filter;
}
/** Manage App Configurations. */
declare class azAppconfig extends _azAppconfig.az_appconfig {
    static credential: typeof _azAppconfig.az_appconfig_credential;
    /** Manage feature flags stored in an App Configuration. */
    static feature: typeof azAppconfigFeature;
    static identity: typeof _azAppconfig.az_appconfig_identity;
    static kv: typeof _azAppconfig.az_appconfig_kv;
    static revision: typeof _azAppconfig.az_appconfig_revision;
}
declare class azAppserviceHybrid {
    static connection: typeof _azAppservice.az_appservice_hybrid_connection;
}
declare class azAppserviceVnet {
    static integration: typeof _azAppservice.az_appservice_vnet_integration;
}
/** Manage App Service plans. */
declare class azAppservice extends _azAppservice.az_appservice {
    static ase: typeof _azAppservice.az_appservice_ase;
    static hybrid: typeof azAppserviceHybrid;
    static plan: typeof _azAppservice.az_appservice_plan;
    static vnet: typeof azAppserviceVnet;
}
/** Manage Azure Artifacts. */
declare class azArtifacts extends _azArtifacts.az_artifacts {
    static universal: typeof _azArtifacts.az_artifacts_universal;
}
declare class azBackupProtectable {
    static item: typeof _azBackup.az_backup_protectable_item;
}
/** Restore backed up items from recovery points in a Recovery Services vault. */
declare class azBackupRestore extends _azBackup.az_backup_restore {
    static files: typeof _azBackup.az_backup_restore_files;
}
declare class azBackupVaultBackup {
    static properties: typeof _azBackup.az_backup_vault_backup_properties;
}
/** Online storage entity in Azure used to hold data such as backup copies, recovery points and backup policies. */
declare class azBackupVault extends _azBackup.az_backup_vault {
    static backup: typeof azBackupVaultBackup;
}
/** Manage Azure Backups. */
declare class azBackup extends _azBackup.az_backup {
    static container: typeof _azBackup.az_backup_container;
    static item: typeof _azBackup.az_backup_item;
    static job: typeof _azBackup.az_backup_job;
    static policy: typeof _azBackup.az_backup_policy;
    static protectable: typeof azBackupProtectable;
    static protection: typeof _azBackup.az_backup_protection;
    static recoveryconfig: typeof _azBackup.az_backup_recoveryconfig;
    static recoverypoint: typeof _azBackup.az_backup_recoverypoint;
    /** Restore backed up items from recovery points in a Recovery Services vault. */
    static restore: typeof azBackupRestore;
    /** Online storage entity in Azure used to hold data such as backup copies, recovery points and backup policies. */
    static vault: typeof azBackupVault;
}
declare class azBatchAccountAutostorage {
    static keys: typeof _azBatch.az_batch_account_autostorage_keys;
}
/** Manage Azure Batch accounts. */
declare class azBatchAccount extends _azBatch.az_batch_account {
    static autostorage: typeof azBatchAccountAutostorage;
    static keys: typeof _azBatch.az_batch_account_keys;
}
/** Manage Batch applications. */
declare class azBatchApplication extends _azBatch.az_batch_application {
    static package: typeof _azBatch.az_batch_application_package;
    static summary: typeof _azBatch.az_batch_application_summary;
}
declare class azBatchJobAll {
    static statistics: typeof _azBatch.az_batch_job_all_statistics;
}
declare class azBatchJobPrepRelease {
    static status: typeof _azBatch.az_batch_job_prep_release_status;
}
declare class azBatchJobPrep {
    static release: typeof azBatchJobPrepRelease;
}
declare class azBatchJobTask {
    static counts: typeof _azBatch.az_batch_job_task_counts;
}
/** Manage Batch jobs. */
declare class azBatchJob extends _azBatch.az_batch_job {
    static all: typeof azBatchJobAll;
    static prep: typeof azBatchJobPrep;
    static schedule: typeof _azBatch.az_batch_job_schedule;
    static task: typeof azBatchJobTask;
}
/** Manage Batch service options for a subscription at the region level. */
declare class azBatchLocation extends _azBatch.az_batch_location {
    static quotas: typeof _azBatch.az_batch_location_quotas;
}
declare class azBatchNodeRemoteLogin {
    static settings: typeof _azBatch.az_batch_node_remote_login_settings;
}
declare class azBatchNodeRemote {
    static desktop: typeof _azBatch.az_batch_node_remote_desktop;
    static login: typeof azBatchNodeRemoteLogin;
}
declare class azBatchNodeService {
    static logs: typeof _azBatch.az_batch_node_service_logs;
}
/** Manage Batch compute nodes. */
declare class azBatchNode extends _azBatch.az_batch_node {
    static file: typeof _azBatch.az_batch_node_file;
    static remote: typeof azBatchNodeRemote;
    static scheduling: typeof _azBatch.az_batch_node_scheduling;
    static service: typeof azBatchNodeService;
    static user: typeof _azBatch.az_batch_node_user;
}
declare class azBatchPoolAll {
    static statistics: typeof _azBatch.az_batch_pool_all_statistics;
}
declare class azBatchPoolNode {
    static counts: typeof _azBatch.az_batch_pool_node_counts;
}
declare class azBatchPoolSupported {
    static images: typeof _azBatch.az_batch_pool_supported_images;
}
declare class azBatchPoolUsage {
    static metrics: typeof _azBatch.az_batch_pool_usage_metrics;
}
/** Manage Batch pools. */
declare class azBatchPool extends _azBatch.az_batch_pool {
    static all: typeof azBatchPoolAll;
    static autoscale: typeof _azBatch.az_batch_pool_autoscale;
    static node: typeof azBatchPoolNode;
    static supported: typeof azBatchPoolSupported;
    static usage: typeof azBatchPoolUsage;
}
/** Manage Batch tasks. */
declare class azBatchTask extends _azBatch.az_batch_task {
    static file: typeof _azBatch.az_batch_task_file;
    static subtask: typeof _azBatch.az_batch_task_subtask;
}
/** Manage Azure Batch. */
declare class azBatch extends _azBatch.az_batch {
    /** Manage Azure Batch accounts. */
    static account: typeof azBatchAccount;
    /** Manage Batch applications. */
    static application: typeof azBatchApplication;
    static certificate: typeof _azBatch.az_batch_certificate;
    /** Manage Batch jobs. */
    static job: typeof azBatchJob;
    /** Manage Batch service options for a subscription at the region level. */
    static location: typeof azBatchLocation;
    /** Manage Batch compute nodes. */
    static node: typeof azBatchNode;
    /** Manage Batch pools. */
    static pool: typeof azBatchPool;
    /** Manage Batch tasks. */
    static task: typeof azBatchTask;
}
/** Commands to manage clusters. */
declare class azBatchaiCluster extends _azBatchai.az_batchai_cluster {
    static file: typeof _azBatchai.az_batchai_cluster_file;
    static node: typeof _azBatchai.az_batchai_cluster_node;
}
declare class azBatchaiFile {
    static server: typeof _azBatchai.az_batchai_file_server;
}
/** Commands to manage jobs. */
declare class azBatchaiJob extends _azBatchai.az_batchai_job {
    static file: typeof _azBatchai.az_batchai_job_file;
    static node: typeof _azBatchai.az_batchai_job_node;
}
/** Manage Batch AI resources. */
declare class azBatchai extends _azBatchai.az_batchai {
    /** Commands to manage clusters. */
    static cluster: typeof azBatchaiCluster;
    static experiment: typeof _azBatchai.az_batchai_experiment;
    static file: typeof azBatchaiFile;
    /** Commands to manage jobs. */
    static job: typeof azBatchaiJob;
    static workspace: typeof _azBatchai.az_batchai_workspace;
}
declare class azBillingEnrollment {
    static account: typeof _azBilling.az_billing_enrollment_account;
}
/** Manage Azure Billing. */
declare class azBilling extends _azBilling.az_billing {
    static enrollment: typeof azBillingEnrollment;
    static invoice: typeof _azBilling.az_billing_invoice;
    static period: typeof _azBilling.az_billing_period;
}
/** Manage area paths. */
declare class azBoardsArea extends _azBoards.az_boards_area {
    static project: typeof _azBoards.az_boards_area_project;
    static team: typeof _azBoards.az_boards_area_team;
}
/** Manage iterations. */
declare class azBoardsIteration extends _azBoards.az_boards_iteration {
    static project: typeof _azBoards.az_boards_iteration_project;
    static team: typeof _azBoards.az_boards_iteration_team;
}
/** Manage work items. */
declare class azBoardsWorkItem extends _azBoards.az_boards_work_item {
    static relation: typeof _azBoards.az_boards_work_item_relation;
}
declare class azBoardsWork {
    /** Manage work items. */
    static item: typeof azBoardsWorkItem;
}
/** Manage Azure Boards. */
declare class azBoards extends _azBoards.az_boards {
    /** Manage area paths. */
    static area: typeof azBoardsArea;
    /** Manage iterations. */
    static iteration: typeof azBoardsIteration;
    static work: typeof azBoardsWork;
}
/** Manage Microsoft Azure Bot Service. */
declare class azBot extends _azBot.az_bot {
    static authsetting: typeof _azBot.az_bot_authsetting;
    static directline: typeof _azBot.az_bot_directline;
    static email: typeof _azBot.az_bot_email;
    static facebook: typeof _azBot.az_bot_facebook;
    static kik: typeof _azBot.az_bot_kik;
    static msteams: typeof _azBot.az_bot_msteams;
    static skype: typeof _azBot.az_bot_skype;
    static slack: typeof _azBot.az_bot_slack;
    static sms: typeof _azBot.az_bot_sms;
    static telegram: typeof _azBot.az_bot_telegram;
    static webchat: typeof _azBot.az_bot_webchat;
}
declare class azCdnCustom {
    static domain: typeof _azCdn.az_cdn_custom_domain;
}
declare class azCdnEdge {
    static node: typeof _azCdn.az_cdn_edge_node;
}
/** Manage delivery rules for an endpoint. */
declare class azCdnEndpointRule extends _azCdn.az_cdn_endpoint_rule {
    static action: typeof _azCdn.az_cdn_endpoint_rule_action;
    static condition: typeof _azCdn.az_cdn_endpoint_rule_condition;
}
/** Manage WAF properties of a CDN endpoint. */
declare class azCdnEndpointWaf extends _azCdn.az_cdn_endpoint_waf {
    static policy: typeof _azCdn.az_cdn_endpoint_waf_policy;
}
/** Manage CDN endpoints. */
declare class azCdnEndpoint extends _azCdn.az_cdn_endpoint {
    /** Manage delivery rules for an endpoint. */
    static rule: typeof azCdnEndpointRule;
    /** Manage WAF properties of a CDN endpoint. */
    static waf: typeof azCdnEndpointWaf;
}
declare class azCdnWafPolicyCustom {
    static rule: typeof _azCdn.az_cdn_waf_policy_custom_rule;
}
declare class azCdnWafPolicyManagedRuleSetRuleGroup {
    static override: typeof _azCdn.az_cdn_waf_policy_managed_rule_set_rule_group_override;
}
declare class azCdnWafPolicyManagedRuleSetRule {
    static group: typeof azCdnWafPolicyManagedRuleSetRuleGroup;
}
/** Manage managed rule sets of a CDN WAF policy. */
declare class azCdnWafPolicyManagedRuleSet extends _azCdn.az_cdn_waf_policy_managed_rule_set {
    static rule: typeof azCdnWafPolicyManagedRuleSetRule;
}
declare class azCdnWafPolicyManagedRule {
    /** Manage managed rule sets of a CDN WAF policy. */
    static set: typeof azCdnWafPolicyManagedRuleSet;
}
declare class azCdnWafPolicyManaged {
    static rule: typeof azCdnWafPolicyManagedRule;
}
declare class azCdnWafPolicyRateLimit {
    static rule: typeof _azCdn.az_cdn_waf_policy_rate_limit_rule;
}
declare class azCdnWafPolicyRate {
    static limit: typeof azCdnWafPolicyRateLimit;
}
/** Manage CDN WAF policies. */
declare class azCdnWafPolicy extends _azCdn.az_cdn_waf_policy {
    static custom: typeof azCdnWafPolicyCustom;
    static managed: typeof azCdnWafPolicyManaged;
    static rate: typeof azCdnWafPolicyRate;
}
/** */
declare class azCdnWaf extends _azCdn.az_cdn_waf {
    /** Manage CDN WAF policies. */
    static policy: typeof azCdnWafPolicy;
}
/** Manage Azure Content Delivery Networks (CDNs). */
declare class azCdn extends _azCdn.az_cdn {
    static custom: typeof azCdnCustom;
    static edge: typeof azCdnEdge;
    /** Manage CDN endpoints. */
    static endpoint: typeof azCdnEndpoint;
    static origin: typeof _azCdn.az_cdn_origin;
    static profile: typeof _azCdn.az_cdn_profile;
    static waf: typeof azCdnWaf;
}
declare class azCognitiveservicesAccountNetwork {
    static rule: typeof _azCognitiveservices.az_cognitiveservices_account_network_rule;
}
/** Manage Azure Cognitive Services accounts. */
declare class azCognitiveservicesAccount extends _azCognitiveservices.az_cognitiveservices_account {
    static identity: typeof _azCognitiveservices.az_cognitiveservices_account_identity;
    static keys: typeof _azCognitiveservices.az_cognitiveservices_account_keys;
    static network: typeof azCognitiveservicesAccountNetwork;
}
/** Manage Azure Cognitive Services accounts. */
declare class azCognitiveservices extends _azCognitiveservices.az_cognitiveservices {
    /** Manage Azure Cognitive Services accounts. */
    static account: typeof azCognitiveservicesAccount;
}
declare class azConfigParam {
    static persist: typeof _azConfig.az_config_param_persist;
}
/** Manage Azure CLI configuration. */
declare class azConfig extends _azConfig.az_config {
    static param: typeof azConfigParam;
}
/** Manage reservations for Azure resources. */
declare class azConsumptionReservation extends _azConsumption.az_consumption_reservation {
    static detail: typeof _azConsumption.az_consumption_reservation_detail;
    static summary: typeof _azConsumption.az_consumption_reservation_summary;
}
/** Manage consumption of Azure resources. */
declare class azConsumption extends _azConsumption.az_consumption {
    static budget: typeof _azConsumption.az_consumption_budget;
    static marketplace: typeof _azConsumption.az_consumption_marketplace;
    static pricesheet: typeof _azConsumption.az_consumption_pricesheet;
    /** Manage reservations for Azure resources. */
    static reservation: typeof azConsumptionReservation;
    static usage: typeof _azConsumption.az_consumption_usage;
}
/** Manage Azure Cosmos DB Cassandra keyspaces. */
declare class azCosmosdbCassandraKeyspace extends _azCosmosdb.az_cosmosdb_cassandra_keyspace {
    static throughput: typeof _azCosmosdb.az_cosmosdb_cassandra_keyspace_throughput;
}
/** Manage Azure Cosmos DB Cassandra tables. */
declare class azCosmosdbCassandraTable extends _azCosmosdb.az_cosmosdb_cassandra_table {
    static throughput: typeof _azCosmosdb.az_cosmosdb_cassandra_table_throughput;
}
/** Manage Cassandra resources of Azure Cosmos DB account. */
declare class azCosmosdbCassandra extends _azCosmosdb.az_cosmosdb_cassandra {
    /** Manage Azure Cosmos DB Cassandra keyspaces. */
    static keyspace: typeof azCosmosdbCassandraKeyspace;
    /** Manage Azure Cosmos DB Cassandra tables. */
    static table: typeof azCosmosdbCassandraTable;
}
/** Manage Azure Cosmos DB Gremlin databases. */
declare class azCosmosdbGremlinDatabase extends _azCosmosdb.az_cosmosdb_gremlin_database {
    static throughput: typeof _azCosmosdb.az_cosmosdb_gremlin_database_throughput;
}
/** Manage Azure Cosmos DB Gremlin graphs. */
declare class azCosmosdbGremlinGraph extends _azCosmosdb.az_cosmosdb_gremlin_graph {
    static throughput: typeof _azCosmosdb.az_cosmosdb_gremlin_graph_throughput;
}
/** Manage Gremlin resources of Azure Cosmos DB account. */
declare class azCosmosdbGremlin extends _azCosmosdb.az_cosmosdb_gremlin {
    /** Manage Azure Cosmos DB Gremlin databases. */
    static database: typeof azCosmosdbGremlinDatabase;
    /** Manage Azure Cosmos DB Gremlin graphs. */
    static graph: typeof azCosmosdbGremlinGraph;
}
/** Manage Azure Cosmos DB MongoDB collections. */
declare class azCosmosdbMongodbCollection extends _azCosmosdb.az_cosmosdb_mongodb_collection {
    static throughput: typeof _azCosmosdb.az_cosmosdb_mongodb_collection_throughput;
}
/** Manage Azure Cosmos DB MongoDB databases. */
declare class azCosmosdbMongodbDatabase extends _azCosmosdb.az_cosmosdb_mongodb_database {
    static throughput: typeof _azCosmosdb.az_cosmosdb_mongodb_database_throughput;
}
/** Manage MongoDB resources of Azure Cosmos DB account. */
declare class azCosmosdbMongodb extends _azCosmosdb.az_cosmosdb_mongodb {
    /** Manage Azure Cosmos DB MongoDB collections. */
    static collection: typeof azCosmosdbMongodbCollection;
    /** Manage Azure Cosmos DB MongoDB databases. */
    static database: typeof azCosmosdbMongodbDatabase;
}
declare class azCosmosdbNetwork {
    static rule: typeof _azCosmosdb.az_cosmosdb_network_rule;
}
declare class azCosmosdbPrivateEndpoint {
    static connection: typeof _azCosmosdb.az_cosmosdb_private_endpoint_connection;
}
declare class azCosmosdbPrivateLink {
    static resource: typeof _azCosmosdb.az_cosmosdb_private_link_resource;
}
declare class azCosmosdbPrivate {
    static endpoint: typeof azCosmosdbPrivateEndpoint;
    static link: typeof azCosmosdbPrivateLink;
}
/** Manage Azure Cosmos DB SQL containers. */
declare class azCosmosdbSqlContainer extends _azCosmosdb.az_cosmosdb_sql_container {
    static throughput: typeof _azCosmosdb.az_cosmosdb_sql_container_throughput;
}
/** Manage Azure Cosmos DB SQL databases. */
declare class azCosmosdbSqlDatabase extends _azCosmosdb.az_cosmosdb_sql_database {
    static throughput: typeof _azCosmosdb.az_cosmosdb_sql_database_throughput;
}
declare class azCosmosdbSqlStored {
    static procedure: typeof _azCosmosdb.az_cosmosdb_sql_stored_procedure;
}
declare class azCosmosdbSqlUserDefined {
    static function: typeof _azCosmosdb.az_cosmosdb_sql_user_defined_function;
}
declare class azCosmosdbSqlUser {
    static defined: typeof azCosmosdbSqlUserDefined;
}
/** Manage SQL resources of Azure Cosmos DB account. */
declare class azCosmosdbSql extends _azCosmosdb.az_cosmosdb_sql {
    /** Manage Azure Cosmos DB SQL containers. */
    static container: typeof azCosmosdbSqlContainer;
    /** Manage Azure Cosmos DB SQL databases. */
    static database: typeof azCosmosdbSqlDatabase;
    static stored: typeof azCosmosdbSqlStored;
    static trigger: typeof _azCosmosdb.az_cosmosdb_sql_trigger;
    static user: typeof azCosmosdbSqlUser;
}
/** Manage Table resources of Azure Cosmos DB account. */
declare class azCosmosdbTable extends _azCosmosdb.az_cosmosdb_table {
    static throughput: typeof _azCosmosdb.az_cosmosdb_table_throughput;
}
/** Manage Azure Cosmos DB database accounts. */
declare class azCosmosdb extends _azCosmosdb.az_cosmosdb {
    /** Manage Cassandra resources of Azure Cosmos DB account. */
    static cassandra: typeof azCosmosdbCassandra;
    static collection: typeof _azCosmosdb.az_cosmosdb_collection;
    static database: typeof _azCosmosdb.az_cosmosdb_database;
    /** Manage Gremlin resources of Azure Cosmos DB account. */
    static gremlin: typeof azCosmosdbGremlin;
    static keys: typeof _azCosmosdb.az_cosmosdb_keys;
    /** Manage MongoDB resources of Azure Cosmos DB account. */
    static mongodb: typeof azCosmosdbMongodb;
    static network: typeof azCosmosdbNetwork;
    static private: typeof azCosmosdbPrivate;
    /** Manage SQL resources of Azure Cosmos DB account. */
    static sql: typeof azCosmosdbSql;
    /** Manage Table resources of Azure Cosmos DB account. */
    static table: typeof azCosmosdbTable;
}
/** Manage deployment operations at subscription scope. */
declare class azDeploymentOperation extends _azDeployment.az_deployment_operation {
    static group: typeof _azDeployment.az_deployment_operation_group;
    static mg: typeof _azDeployment.az_deployment_operation_mg;
    static sub: typeof _azDeployment.az_deployment_operation_sub;
    static tenant: typeof _azDeployment.az_deployment_operation_tenant;
}
/** Manage Azure Resource Manager template deployment at subscription scope. */
declare class azDeployment extends _azDeployment.az_deployment {
    static group: typeof _azDeployment.az_deployment_group;
    static mg: typeof _azDeployment.az_deployment_mg;
    /** Manage deployment operations at subscription scope. */
    static operation: typeof azDeploymentOperation;
    static scripts: typeof _azDeployment.az_deployment_scripts;
    static sub: typeof _azDeployment.az_deployment_sub;
    static tenant: typeof _azDeployment.az_deployment_tenant;
}
declare class azDeploymentmanagerArtifact {
    static source: typeof _azDeploymentmanager.az_deploymentmanager_artifact_source;
}
/** Manage the services in a service topology. */
declare class azDeploymentmanagerService extends _azDeploymentmanager.az_deploymentmanager_service {
    static topology: typeof _azDeploymentmanager.az_deploymentmanager_service_topology;
    static unit: typeof _azDeploymentmanager.az_deploymentmanager_service_unit;
}
/** Create and manage rollouts for your service. */
declare class azDeploymentmanager extends _azDeploymentmanager.az_deploymentmanager {
    static artifact: typeof azDeploymentmanagerArtifact;
    static rollout: typeof _azDeploymentmanager.az_deploymentmanager_rollout;
    /** Manage the services in a service topology. */
    static service: typeof azDeploymentmanagerService;
    static step: typeof _azDeploymentmanager.az_deploymentmanager_step;
}
/** Manage administration operations. */
declare class azDevopsAdmin extends _azDevops.az_devops_admin {
    static banner: typeof _azDevops.az_devops_admin_banner;
}
/** Manage security groups. */
declare class azDevopsSecurityGroup extends _azDevops.az_devops_security_group {
    static membership: typeof _azDevops.az_devops_security_group_membership;
}
/** Manage security permissions. */
declare class azDevopsSecurityPermission extends _azDevops.az_devops_security_permission {
    static namespace: typeof _azDevops.az_devops_security_permission_namespace;
}
/** Manage security related operations. */
declare class azDevopsSecurity extends _azDevops.az_devops_security {
    /** Manage security groups. */
    static group: typeof azDevopsSecurityGroup;
    /** Manage security permissions. */
    static permission: typeof azDevopsSecurityPermission;
}
/** Manage service endpoints/connections. */
declare class azDevopsServiceEndpoint extends _azDevops.az_devops_service_endpoint {
    static azurerm: typeof _azDevops.az_devops_service_endpoint_azurerm;
    static github: typeof _azDevops.az_devops_service_endpoint_github;
}
declare class azDevopsService {
    /** Manage service endpoints/connections. */
    static endpoint: typeof azDevopsServiceEndpoint;
}
/** Manage wikis. */
declare class azDevopsWiki extends _azDevops.az_devops_wiki {
    static page: typeof _azDevops.az_devops_wiki_page;
}
/** Manage Azure DevOps organization level operations. */
declare class azDevops extends _azDevops.az_devops {
    /** Manage administration operations. */
    static admin: typeof azDevopsAdmin;
    static extension: typeof _azDevops.az_devops_extension;
    static project: typeof _azDevops.az_devops_project;
    /** Manage security related operations. */
    static security: typeof azDevopsSecurity;
    static service: typeof azDevopsService;
    static team: typeof _azDevops.az_devops_team;
    static user: typeof _azDevops.az_devops_user;
    /** Manage wikis. */
    static wiki: typeof azDevopsWiki;
}
declare class azDiskEncryption {
    static set: typeof _azDisk.az_disk_encryption_set;
}
/** Manage Azure Managed Disks. */
declare class azDisk extends _azDisk.az_disk {
    static access: typeof _azDisk.az_disk_access;
    static encryption: typeof azDiskEncryption;
}
declare class azDlaAccountBlob {
    static storage: typeof _azDla.az_dla_account_blob_storage;
}
declare class azDlaAccountCompute {
    static policy: typeof _azDla.az_dla_account_compute_policy;
}
declare class azDlaAccountDataLake {
    static store: typeof _azDla.az_dla_account_data_lake_store;
}
declare class azDlaAccountData {
    static lake: typeof azDlaAccountDataLake;
}
/** Manage Data Lake Analytics accounts. */
declare class azDlaAccount extends _azDla.az_dla_account {
    static blob: typeof azDlaAccountBlob;
    static compute: typeof azDlaAccountCompute;
    static data: typeof azDlaAccountData;
    static firewall: typeof _azDla.az_dla_account_firewall;
}
declare class azDlaCatalogExternalData {
    static source: typeof _azDla.az_dla_catalog_external_data_source;
}
declare class azDlaCatalogExternal {
    static data: typeof azDlaCatalogExternalData;
}
/** Manage Data Lake Analytics catalog tables. */
declare class azDlaCatalogTable extends _azDla.az_dla_catalog_table {
    static partition: typeof _azDla.az_dla_catalog_table_partition;
    static stats: typeof _azDla.az_dla_catalog_table_stats;
    static type: typeof _azDla.az_dla_catalog_table_type;
}
/** Manage Data Lake Analytics catalogs. */
declare class azDlaCatalog extends _azDla.az_dla_catalog {
    static assembly: typeof _azDla.az_dla_catalog_assembly;
    static credential: typeof _azDla.az_dla_catalog_credential;
    static database: typeof _azDla.az_dla_catalog_database;
    static external: typeof azDlaCatalogExternal;
    static package: typeof _azDla.az_dla_catalog_package;
    static procedure: typeof _azDla.az_dla_catalog_procedure;
    static schema: typeof _azDla.az_dla_catalog_schema;
    /** Manage Data Lake Analytics catalog tables. */
    static table: typeof azDlaCatalogTable;
    static tvf: typeof _azDla.az_dla_catalog_tvf;
    static view: typeof _azDla.az_dla_catalog_view;
}
/** Manage Data Lake Analytics jobs. */
declare class azDlaJob extends _azDla.az_dla_job {
    static pipeline: typeof _azDla.az_dla_job_pipeline;
    static recurrence: typeof _azDla.az_dla_job_recurrence;
}
/** Manage Data Lake Analytics accounts, jobs, and catalogs. */
declare class azDla extends _azDla.az_dla {
    /** Manage Data Lake Analytics accounts. */
    static account: typeof azDlaAccount;
    /** Manage Data Lake Analytics catalogs. */
    static catalog: typeof azDlaCatalog;
    /** Manage Data Lake Analytics jobs. */
    static job: typeof azDlaJob;
}
declare class azDlsAccountNetwork {
    static rule: typeof _azDls.az_dls_account_network_rule;
}
declare class azDlsAccountTrusted {
    static provider: typeof _azDls.az_dls_account_trusted_provider;
}
/** Manage Data Lake Store accounts. */
declare class azDlsAccount extends _azDls.az_dls_account {
    static firewall: typeof _azDls.az_dls_account_firewall;
    static network: typeof azDlsAccountNetwork;
    static trusted: typeof azDlsAccountTrusted;
}
/** Manage a Data Lake Store filesystem. */
declare class azDlsFs extends _azDls.az_dls_fs {
    static access: typeof _azDls.az_dls_fs_access;
}
/** Manage Data Lake Store accounts and filesystems. */
declare class azDls extends _azDls.az_dls {
    /** Manage Data Lake Store accounts. */
    static account: typeof azDlsAccount;
    /** Manage a Data Lake Store filesystem. */
    static fs: typeof azDlsFs;
}
/** Manage Projects for an instance of the Data Migration Service. */
declare class azDmsProject extends _azDms.az_dms_project {
    static task: typeof _azDms.az_dms_project_task;
}
/** Manage Azure Data Migration Service (DMS) instances. */
declare class azDms extends _azDms.az_dms {
    /** Manage Projects for an instance of the Data Migration Service. */
    static project: typeof azDmsProject;
}
/** Manage event domains. */
declare class azEventgridDomain extends _azEventgrid.az_eventgrid_domain {
    static key: typeof _azEventgrid.az_eventgrid_domain_key;
    static topic: typeof _azEventgrid.az_eventgrid_domain_topic;
}
declare class azEventgridEvent {
    static subscription: typeof _azEventgrid.az_eventgrid_event_subscription;
}
declare class azEventgridExtension {
    static topic: typeof _azEventgrid.az_eventgrid_extension_topic;
}
declare class azEventgridPartnerNamespaceEvent {
    static channel: typeof _azEventgrid.az_eventgrid_partner_namespace_event_channel;
}
/** Manage partner namespaces. */
declare class azEventgridPartnerNamespace extends _azEventgrid.az_eventgrid_partner_namespace {
    static event: typeof azEventgridPartnerNamespaceEvent;
    static key: typeof _azEventgrid.az_eventgrid_partner_namespace_key;
}
declare class azEventgridPartnerTopicEvent {
    static subscription: typeof _azEventgrid.az_eventgrid_partner_topic_event_subscription;
}
/** Manage partner topics. */
declare class azEventgridPartnerTopic extends _azEventgrid.az_eventgrid_partner_topic {
    static event: typeof azEventgridPartnerTopicEvent;
}
/** Manage partner resources. */
declare class azEventgridPartner extends _azEventgrid.az_eventgrid_partner {
    /** Manage partner namespaces. */
    static namespace: typeof azEventgridPartnerNamespace;
    static registration: typeof _azEventgrid.az_eventgrid_partner_registration;
    /** Manage partner topics. */
    static topic: typeof azEventgridPartnerTopic;
}
declare class azEventgridSystemTopicEvent {
    static subscription: typeof _azEventgrid.az_eventgrid_system_topic_event_subscription;
}
/** Manage system topics. */
declare class azEventgridSystemTopic extends _azEventgrid.az_eventgrid_system_topic {
    static event: typeof azEventgridSystemTopicEvent;
}
declare class azEventgridSystem {
    /** Manage system topics. */
    static topic: typeof azEventgridSystemTopic;
}
/** Manage Azure Event Grid topics. */
declare class azEventgridTopic extends _azEventgrid.az_eventgrid_topic {
    static key: typeof _azEventgrid.az_eventgrid_topic_key;
    static type: typeof _azEventgrid.az_eventgrid_topic_type;
}
/** Manage Azure Event Grid topics, domains, domain topics, system topics partner topics, event subscriptions, system topic event subscriptions and partner topic event subscriptions. */
declare class azEventgrid extends _azEventgrid.az_eventgrid {
    /** Manage event domains. */
    static domain: typeof azEventgridDomain;
    static event: typeof azEventgridEvent;
    static extension: typeof azEventgridExtension;
    /** Manage partner resources. */
    static partner: typeof azEventgridPartner;
    static system: typeof azEventgridSystem;
    /** Manage Azure Event Grid topics. */
    static topic: typeof azEventgridTopic;
}
/** Manage Azure EventHubs Clusters. */
declare class azEventhubsCluster extends _azEventhubs.az_eventhubs_cluster {
    static namespace: typeof _azEventhubs.az_eventhubs_cluster_namespace;
}
/** Manage Azure Service Bus Authorizationrule for Eventhub. */
declare class azEventhubsEventhubAuthorizationRule extends _azEventhubs.az_eventhubs_eventhub_authorization_rule {
    static keys: typeof _azEventhubs.az_eventhubs_eventhub_authorization_rule_keys;
}
declare class azEventhubsEventhubAuthorization {
    /** Manage Azure Service Bus Authorizationrule for Eventhub. */
    static rule: typeof azEventhubsEventhubAuthorizationRule;
}
declare class azEventhubsEventhubConsumer {
    static group: typeof _azEventhubs.az_eventhubs_eventhub_consumer_group;
}
/** Manage Azure EventHubs eventhub and authorization-rule. */
declare class azEventhubsEventhub extends _azEventhubs.az_eventhubs_eventhub {
    static authorization: typeof azEventhubsEventhubAuthorization;
    static consumer: typeof azEventhubsEventhubConsumer;
}
/** Manage Azure EventHubs Authorizationrule for Geo Recovery configuration Alias. */
declare class azEventhubsGeorecoveryAliasAuthorizationRule extends _azEventhubs.az_eventhubs_georecovery_alias_authorization_rule {
    static keys: typeof _azEventhubs.az_eventhubs_georecovery_alias_authorization_rule_keys;
}
declare class azEventhubsGeorecoveryAliasAuthorization {
    /** Manage Azure EventHubs Authorizationrule for Geo Recovery configuration Alias. */
    static rule: typeof azEventhubsGeorecoveryAliasAuthorizationRule;
}
/** Manage Azure EventHubs Geo Recovery configuration Alias. */
declare class azEventhubsGeorecoveryAlias extends _azEventhubs.az_eventhubs_georecovery_alias {
    static authorization: typeof azEventhubsGeorecoveryAliasAuthorization;
}
declare class azEventhubsGeorecovery {
    /** Manage Azure EventHubs Geo Recovery configuration Alias. */
    static alias: typeof azEventhubsGeorecoveryAlias;
}
/** Manage Azure EventHubs Authorizationrule for Namespace. */
declare class azEventhubsNamespaceAuthorizationRule extends _azEventhubs.az_eventhubs_namespace_authorization_rule {
    static keys: typeof _azEventhubs.az_eventhubs_namespace_authorization_rule_keys;
}
declare class azEventhubsNamespaceAuthorization {
    /** Manage Azure EventHubs Authorizationrule for Namespace. */
    static rule: typeof azEventhubsNamespaceAuthorizationRule;
}
declare class azEventhubsNamespaceNetwork {
    static rule: typeof _azEventhubs.az_eventhubs_namespace_network_rule;
}
/** Manage Azure EventHubs namespace and Authorizationrule. */
declare class azEventhubsNamespace extends _azEventhubs.az_eventhubs_namespace {
    static authorization: typeof azEventhubsNamespaceAuthorization;
    static network: typeof azEventhubsNamespaceNetwork;
}
/** Manage Azure Event Hubs namespaces, eventhubs, consumergroups and geo recovery configurations - Alias. */
declare class azEventhubs extends _azEventhubs.az_eventhubs {
    /** Manage Azure EventHubs Clusters. */
    static cluster: typeof azEventhubsCluster;
    /** Manage Azure EventHubs eventhub and authorization-rule. */
    static eventhub: typeof azEventhubsEventhub;
    static georecovery: typeof azEventhubsGeorecovery;
    /** Manage Azure EventHubs namespace and Authorizationrule. */
    static namespace: typeof azEventhubsNamespace;
}
declare class azFunctionappConfigAccess {
    static restriction: typeof _azFunctionapp.az_functionapp_config_access_restriction;
}
/** Configure a function app. */
declare class azFunctionappConfig extends _azFunctionapp.az_functionapp_config {
    static access: typeof azFunctionappConfigAccess;
    static appsettings: typeof _azFunctionapp.az_functionapp_config_appsettings;
    static container: typeof _azFunctionapp.az_functionapp_config_container;
    static hostname: typeof _azFunctionapp.az_functionapp_config_hostname;
    static ssl: typeof _azFunctionapp.az_functionapp_config_ssl;
}
/** Manage function app deployments. */
declare class azFunctionappDeployment extends _azFunctionapp.az_functionapp_deployment {
    static container: typeof _azFunctionapp.az_functionapp_deployment_container;
    static slot: typeof _azFunctionapp.az_functionapp_deployment_slot;
    static source: typeof _azFunctionapp.az_functionapp_deployment_source;
    static user: typeof _azFunctionapp.az_functionapp_deployment_user;
}
declare class azFunctionappDevops {
    static pipeline: typeof _azFunctionapp.az_functionapp_devops_pipeline;
}
/** Manage function app functions. */
declare class azFunctionappFunction extends _azFunctionapp.az_functionapp_function {
    static keys: typeof _azFunctionapp.az_functionapp_function_keys;
}
declare class azFunctionappHybrid {
    static connection: typeof _azFunctionapp.az_functionapp_hybrid_connection;
}
/** */
declare class azFunctionappLog extends _azFunctionapp.az_functionapp_log {
    static deployment: typeof _azFunctionapp.az_functionapp_log_deployment;
}
declare class azFunctionappVnet {
    static integration: typeof _azFunctionapp.az_functionapp_vnet_integration;
}
/** Manage function apps. To install the Azure Functions Core tools see <a href="https://github.com/Azure/azure-functions-core-tools">https://github.com/Azure/azure-functions-core-tools</a>. */
declare class azFunctionapp extends _azFunctionapp.az_functionapp {
    /** Configure a function app. */
    static config: typeof azFunctionappConfig;
    static cors: typeof _azFunctionapp.az_functionapp_cors;
    /** Manage function app deployments. */
    static deployment: typeof azFunctionappDeployment;
    static devops: typeof azFunctionappDevops;
    /** Manage function app functions. */
    static function: typeof azFunctionappFunction;
    static hybrid: typeof azFunctionappHybrid;
    static identity: typeof _azFunctionapp.az_functionapp_identity;
    static keys: typeof _azFunctionapp.az_functionapp_keys;
    static log: typeof azFunctionappLog;
    static plan: typeof _azFunctionapp.az_functionapp_plan;
    static vnet: typeof azFunctionappVnet;
}
/** Manage Azure Resource Manager deployments. */
declare class azGroupDeployment extends _azGroup.az_group_deployment {
    static operation: typeof _azGroup.az_group_deployment_operation;
}
/** Manage resource groups and template deployments. */
declare class azGroup extends _azGroup.az_group {
    /** Manage Azure Resource Manager deployments. */
    static deployment: typeof azGroupDeployment;
    static lock: typeof _azGroup.az_group_lock;
}
/** Manage HDInsight cluster's Autoscale configuration. */
declare class azHdinsightAutoscale extends _azHdinsight.az_hdinsight_autoscale {
    static condition: typeof _azHdinsight.az_hdinsight_autoscale_condition;
}
declare class azHdinsightScript {
    static action: typeof _azHdinsight.az_hdinsight_script_action;
}
/** Manage HDInsight resources. */
declare class azHdinsight extends _azHdinsight.az_hdinsight {
    static application: typeof _azHdinsight.az_hdinsight_application;
    /** Manage HDInsight cluster's Autoscale configuration. */
    static autoscale: typeof azHdinsightAutoscale;
    static host: typeof _azHdinsight.az_hdinsight_host;
    static monitor: typeof _azHdinsight.az_hdinsight_monitor;
    static script: typeof azHdinsightScript;
}
/** Manage and build image builder templates. */
declare class azImageBuilder extends _azImage.az_image_builder {
    static customizer: typeof _azImage.az_image_builder_customizer;
    static output: typeof _azImage.az_image_builder_output;
}
/** Manage custom virtual machine images. */
declare class azImage extends _azImage.az_image {
    /** Manage and build image builder templates. */
    static builder: typeof azImageBuilder;
}
/** Manage IoT Central resources. */
declare class azIotCentral extends _azIot.az_iot_central {
    static app: typeof _azIot.az_iot_central_app;
}
declare class azIotDpsAccess {
    static policy: typeof _azIot.az_iot_dps_access_policy;
}
declare class azIotDpsLinked {
    static hub: typeof _azIot.az_iot_dps_linked_hub;
}
/** Manage Azure IoT Hub Device Provisioning Service. */
declare class azIotDps extends _azIot.az_iot_dps {
    static access: typeof azIotDpsAccess;
    static certificate: typeof _azIot.az_iot_dps_certificate;
    static linked: typeof azIotDpsLinked;
}
declare class azIotHubConsumer {
    static group: typeof _azIot.az_iot_hub_consumer_group;
}
declare class azIotHubMessage {
    static enrichment: typeof _azIot.az_iot_hub_message_enrichment;
}
declare class azIotHubRouting {
    static endpoint: typeof _azIot.az_iot_hub_routing_endpoint;
}
/** Manage Azure IoT hubs. */
declare class azIotHub extends _azIot.az_iot_hub {
    static certificate: typeof _azIot.az_iot_hub_certificate;
    static consumer: typeof azIotHubConsumer;
    static devicestream: typeof _azIot.az_iot_hub_devicestream;
    static message: typeof azIotHubMessage;
    static policy: typeof _azIot.az_iot_hub_policy;
    static route: typeof _azIot.az_iot_hub_route;
    static routing: typeof azIotHubRouting;
}
/** Manage Internet of Things (IoT) assets. */
declare class azIot extends _azIot.az_iot {
    /** Manage IoT Central resources. */
    static central: typeof azIotCentral;
    /** Manage Azure IoT Hub Device Provisioning Service. */
    static dps: typeof azIotDps;
    /** Manage Azure IoT hubs. */
    static hub: typeof azIotHub;
}
/** Manage IoT Central assets. */
declare class azIotcentral extends _azIotcentral.az_iotcentral {
    static app: typeof _azIotcentral.az_iotcentral_app;
}
/** Manage certificate issuer information. */
declare class azKeyvaultCertificateIssuer extends _azKeyvault.az_keyvault_certificate_issuer {
    static admin: typeof _azKeyvault.az_keyvault_certificate_issuer_admin;
}
/** Manage certificates. */
declare class azKeyvaultCertificate extends _azKeyvault.az_keyvault_certificate {
    static contact: typeof _azKeyvault.az_keyvault_certificate_contact;
    /** Manage certificate issuer information. */
    static issuer: typeof azKeyvaultCertificateIssuer;
    static pending: typeof _azKeyvault.az_keyvault_certificate_pending;
}
declare class azKeyvaultNetwork {
    static rule: typeof _azKeyvault.az_keyvault_network_rule;
}
declare class azKeyvaultPrivateEndpoint {
    static connection: typeof _azKeyvault.az_keyvault_private_endpoint_connection;
}
declare class azKeyvaultPrivateLink {
    static resource: typeof _azKeyvault.az_keyvault_private_link_resource;
}
declare class azKeyvaultPrivate {
    static endpoint: typeof azKeyvaultPrivateEndpoint;
    static link: typeof azKeyvaultPrivateLink;
}
/** Manage user roles for access control. */
declare class azKeyvaultRole extends _azKeyvault.az_keyvault_role {
    static assignment: typeof _azKeyvault.az_keyvault_role_assignment;
    static definition: typeof _azKeyvault.az_keyvault_role_definition;
}
declare class azKeyvaultSecurity {
    static domain: typeof _azKeyvault.az_keyvault_security_domain;
}
declare class azKeyvaultStorageSas {
    static definition: typeof _azKeyvault.az_keyvault_storage_sas_definition;
}
/** Manage storage accounts. */
declare class azKeyvaultStorage extends _azKeyvault.az_keyvault_storage {
    static sas: typeof azKeyvaultStorageSas;
}
/** Manage KeyVault keys, secrets, and certificates. */
declare class azKeyvault extends _azKeyvault.az_keyvault {
    static backup: typeof _azKeyvault.az_keyvault_backup;
    /** Manage certificates. */
    static certificate: typeof azKeyvaultCertificate;
    static key: typeof _azKeyvault.az_keyvault_key;
    static network: typeof azKeyvaultNetwork;
    static private: typeof azKeyvaultPrivate;
    static restore: typeof _azKeyvault.az_keyvault_restore;
    /** Manage user roles for access control. */
    static role: typeof azKeyvaultRole;
    static secret: typeof _azKeyvault.az_keyvault_secret;
    static security: typeof azKeyvaultSecurity;
    /** Manage storage accounts. */
    static storage: typeof azKeyvaultStorage;
}
/** Manage Azure Kusto resources. */
declare class azKusto extends _azKusto.az_kusto {
    static cluster: typeof _azKusto.az_kusto_cluster;
    static database: typeof _azKusto.az_kusto_database;
}
declare class azLabArm {
    static template: typeof _azLab.az_lab_arm_template;
}
/** Manage DevTest Labs artifacts. */
declare class azLabArtifact extends _azLab.az_lab_artifact {
    static source: typeof _azLab.az_lab_artifact_source;
}
declare class azLabCustom {
    static image: typeof _azLab.az_lab_custom_image;
}
declare class azLabGallery {
    static image: typeof _azLab.az_lab_gallery_image;
}
/** Manage Azure DevTest Labs. */
declare class azLab extends _azLab.az_lab {
    static arm: typeof azLabArm;
    /** Manage DevTest Labs artifacts. */
    static artifact: typeof azLabArtifact;
    static custom: typeof azLabCustom;
    static environment: typeof _azLab.az_lab_environment;
    static formula: typeof _azLab.az_lab_formula;
    static gallery: typeof azLabGallery;
    static secret: typeof _azLab.az_lab_secret;
    static vm: typeof _azLab.az_lab_vm;
    static vnet: typeof _azLab.az_lab_vnet;
}
declare class azLocal {
    static context: typeof _azLocal.az_local_context;
}
/** Manage template solutions provided and maintained by Independent Software Vendors (ISVs). */
declare class azManagedapp extends _azManagedapp.az_managedapp {
    static definition: typeof _azManagedapp.az_managedapp_definition;
}
/** Manage the registration assignments and definitions in Azure. */
declare class azManagedservices extends _azManagedservices.az_managedservices {
    static assignment: typeof _azManagedservices.az_managedservices_assignment;
    static definition: typeof _azManagedservices.az_managedservices_definition;
}
/** Manage Azure Maps accounts. */
declare class azMapsAccount extends _azMaps.az_maps_account {
    static keys: typeof _azMaps.az_maps_account_keys;
}
/** Manage Azure Maps. */
declare class azMaps extends _azMaps.az_maps {
    /** Manage Azure Maps accounts. */
    static account: typeof azMapsAccount;
}
declare class azMariadbServerFirewall {
    static rule: typeof _azMariadb.az_mariadb_server_firewall_rule;
}
declare class azMariadbServerPrivateEndpoint {
    static connection: typeof _azMariadb.az_mariadb_server_private_endpoint_connection;
}
declare class azMariadbServerPrivateLink {
    static resource: typeof _azMariadb.az_mariadb_server_private_link_resource;
}
declare class azMariadbServerPrivate {
    static endpoint: typeof azMariadbServerPrivateEndpoint;
    static link: typeof azMariadbServerPrivateLink;
}
declare class azMariadbServerVnet {
    static rule: typeof _azMariadb.az_mariadb_server_vnet_rule;
}
/** Manage MariaDB servers. */
declare class azMariadbServer extends _azMariadb.az_mariadb_server {
    static configuration: typeof _azMariadb.az_mariadb_server_configuration;
    static firewall: typeof azMariadbServerFirewall;
    static logs: typeof _azMariadb.az_mariadb_server_logs;
    static private: typeof azMariadbServerPrivate;
    static replica: typeof _azMariadb.az_mariadb_server_replica;
    static vnet: typeof azMariadbServerVnet;
}
/** Manage Azure Database for MariaDB servers. */
declare class azMariadb extends _azMariadb.az_mariadb {
    static db: typeof _azMariadb.az_mariadb_db;
    /** Manage MariaDB servers. */
    static server: typeof azMariadbServer;
}
declare class azMonitorAction {
    static group: typeof _azMonitor.az_monitor_action_group;
}
declare class azMonitorActivityLogAlertAction {
    static group: typeof _azMonitor.az_monitor_activity_log_alert_action_group;
}
/** Manage activity log alerts. */
declare class azMonitorActivityLogAlert extends _azMonitor.az_monitor_activity_log_alert {
    static action: typeof azMonitorActivityLogAlertAction;
    static scope: typeof _azMonitor.az_monitor_activity_log_alert_scope;
}
/** Manage activity logs. */
declare class azMonitorActivityLog extends _azMonitor.az_monitor_activity_log {
    /** Manage activity log alerts. */
    static alert: typeof azMonitorActivityLogAlert;
}
declare class azMonitorActivity {
    /** Manage activity logs. */
    static log: typeof azMonitorActivityLog;
}
/** Manage autoscale settings. */
declare class azMonitorAutoscale extends _azMonitor.az_monitor_autoscale {
    static profile: typeof _azMonitor.az_monitor_autoscale_profile;
    static rule: typeof _azMonitor.az_monitor_autoscale_rule;
    static settings: typeof _azMonitor.az_monitor_autoscale_settings;
}
/** Manage service diagnostic settings. */
declare class azMonitorDiagnosticSettings extends _azMonitor.az_monitor_diagnostic_settings {
    static categories: typeof _azMonitor.az_monitor_diagnostic_settings_categories;
    static subscription: typeof _azMonitor.az_monitor_diagnostic_settings_subscription;
}
declare class azMonitorDiagnostic {
    /** Manage service diagnostic settings. */
    static settings: typeof azMonitorDiagnosticSettings;
}
declare class azMonitorLogAnalyticsWorkspaceData {
    static export: typeof _azMonitor.az_monitor_log_analytics_workspace_data_export;
}
declare class azMonitorLogAnalyticsWorkspaceLinked {
    static service: typeof _azMonitor.az_monitor_log_analytics_workspace_linked_service;
    static storage: typeof _azMonitor.az_monitor_log_analytics_workspace_linked_storage;
}
declare class azMonitorLogAnalyticsWorkspaceSaved {
    static search: typeof _azMonitor.az_monitor_log_analytics_workspace_saved_search;
}
/** Manage Azure log analytics workspace. */
declare class azMonitorLogAnalyticsWorkspace extends _azMonitor.az_monitor_log_analytics_workspace {
    static data: typeof azMonitorLogAnalyticsWorkspaceData;
    static linked: typeof azMonitorLogAnalyticsWorkspaceLinked;
    static pack: typeof _azMonitor.az_monitor_log_analytics_workspace_pack;
    static saved: typeof azMonitorLogAnalyticsWorkspaceSaved;
    static table: typeof _azMonitor.az_monitor_log_analytics_workspace_table;
}
/** Manage Azure log analytics. */
declare class azMonitorLogAnalytics extends _azMonitor.az_monitor_log_analytics {
    static cluster: typeof _azMonitor.az_monitor_log_analytics_cluster;
    /** Manage Azure log analytics workspace. */
    static workspace: typeof azMonitorLogAnalyticsWorkspace;
}
declare class azMonitorLog {
    /** Manage Azure log analytics. */
    static analytics: typeof azMonitorLogAnalytics;
    static profiles: typeof _azMonitor.az_monitor_log_profiles;
}
/** View Azure resource metrics. */
declare class azMonitorMetrics extends _azMonitor.az_monitor_metrics {
    static alert: typeof _azMonitor.az_monitor_metrics_alert;
}
declare class azMonitorPrivateLinkScopePrivateEndpoint {
    static connection: typeof _azMonitor.az_monitor_private_link_scope_private_endpoint_connection;
}
declare class azMonitorPrivateLinkScopePrivateLink {
    static resource: typeof _azMonitor.az_monitor_private_link_scope_private_link_resource;
}
declare class azMonitorPrivateLinkScopePrivate {
    static endpoint: typeof azMonitorPrivateLinkScopePrivateEndpoint;
    static link: typeof azMonitorPrivateLinkScopePrivateLink;
}
declare class azMonitorPrivateLinkScopeScoped {
    static resource: typeof _azMonitor.az_monitor_private_link_scope_scoped_resource;
}
/** Manage monitor private link scope resource. */
declare class azMonitorPrivateLinkScope extends _azMonitor.az_monitor_private_link_scope {
    static private: typeof azMonitorPrivateLinkScopePrivate;
    static scoped: typeof azMonitorPrivateLinkScopeScoped;
}
declare class azMonitorPrivateLink {
    /** Manage monitor private link scope resource. */
    static scope: typeof azMonitorPrivateLinkScope;
}
declare class azMonitorPrivate {
    static link: typeof azMonitorPrivateLink;
}
/** Manage the Azure Monitor Service. */
declare class azMonitor extends _azMonitor.az_monitor {
    static action: typeof azMonitorAction;
    static activity: typeof azMonitorActivity;
    static alert: typeof _azMonitor.az_monitor_alert;
    /** Manage autoscale settings. */
    static autoscale: typeof azMonitorAutoscale;
    static diagnostic: typeof azMonitorDiagnostic;
    static log: typeof azMonitorLog;
    /** View Azure resource metrics. */
    static metrics: typeof azMonitorMetrics;
    static private: typeof azMonitorPrivate;
}
declare class azMysqlFlexibleServerFirewall {
    static rule: typeof _azMysql.az_mysql_flexible_server_firewall_rule;
}
/** Manage Azure Database for MySQL Flexible Servers. */
declare class azMysqlFlexibleServer extends _azMysql.az_mysql_flexible_server {
    static db: typeof _azMysql.az_mysql_flexible_server_db;
    static firewall: typeof azMysqlFlexibleServerFirewall;
    static parameter: typeof _azMysql.az_mysql_flexible_server_parameter;
    static replica: typeof _azMysql.az_mysql_flexible_server_replica;
}
declare class azMysqlFlexible {
    /** Manage Azure Database for MySQL Flexible Servers. */
    static server: typeof azMysqlFlexibleServer;
}
declare class azMysqlServerAd {
    static admin: typeof _azMysql.az_mysql_server_ad_admin;
}
declare class azMysqlServerFirewall {
    static rule: typeof _azMysql.az_mysql_server_firewall_rule;
}
declare class azMysqlServerPrivateEndpoint {
    static connection: typeof _azMysql.az_mysql_server_private_endpoint_connection;
}
declare class azMysqlServerPrivateLink {
    static resource: typeof _azMysql.az_mysql_server_private_link_resource;
}
declare class azMysqlServerPrivate {
    static endpoint: typeof azMysqlServerPrivateEndpoint;
    static link: typeof azMysqlServerPrivateLink;
}
declare class azMysqlServerVnet {
    static rule: typeof _azMysql.az_mysql_server_vnet_rule;
}
/** Manage MySQL servers. */
declare class azMysqlServer extends _azMysql.az_mysql_server {
    static ad: typeof azMysqlServerAd;
    static configuration: typeof _azMysql.az_mysql_server_configuration;
    static firewall: typeof azMysqlServerFirewall;
    static key: typeof _azMysql.az_mysql_server_key;
    static logs: typeof _azMysql.az_mysql_server_logs;
    static private: typeof azMysqlServerPrivate;
    static replica: typeof _azMysql.az_mysql_server_replica;
    static vnet: typeof azMysqlServerVnet;
}
/** Manage Azure Database for MySQL servers. */
declare class azMysql extends _azMysql.az_mysql {
    static db: typeof _azMysql.az_mysql_db;
    static flexible: typeof azMysqlFlexible;
    /** Manage MySQL servers. */
    static server: typeof azMysqlServer;
}
/** Manage Azure NetApp Files (ANF) Account Resources. */
declare class azNetappfilesAccount extends _azNetappfiles.az_netappfiles_account {
    static ad: typeof _azNetappfiles.az_netappfiles_account_ad;
}
declare class azNetappfilesVolumeExport {
    static policy: typeof _azNetappfiles.az_netappfiles_volume_export_policy;
}
/** Manage Azure NetApp Files (ANF) Volume Resources. */
declare class azNetappfilesVolume extends _azNetappfiles.az_netappfiles_volume {
    static export: typeof azNetappfilesVolumeExport;
    static replication: typeof _azNetappfiles.az_netappfiles_volume_replication;
}
/** Manage Azure NetApp Files (ANF) Resources. */
declare class azNetappfiles extends _azNetappfiles.az_netappfiles {
    /** Manage Azure NetApp Files (ANF) Account Resources. */
    static account: typeof azNetappfilesAccount;
    static pool: typeof _azNetappfiles.az_netappfiles_pool;
    static snapshot: typeof _azNetappfiles.az_netappfiles_snapshot;
    /** Manage Azure NetApp Files (ANF) Volume Resources. */
    static volume: typeof azNetappfilesVolume;
}
declare class azNetworkApplicationGatewayAddress {
    static pool: typeof _azNetwork.az_network_application_gateway_address_pool;
}
declare class azNetworkApplicationGatewayAuth {
    static cert: typeof _azNetwork.az_network_application_gateway_auth_cert;
}
declare class azNetworkApplicationGatewayFrontend {
    static ip: typeof _azNetwork.az_network_application_gateway_frontend_ip;
    static port: typeof _azNetwork.az_network_application_gateway_frontend_port;
}
declare class azNetworkApplicationGatewayHttp {
    static listener: typeof _azNetwork.az_network_application_gateway_http_listener;
    static settings: typeof _azNetwork.az_network_application_gateway_http_settings;
}
declare class azNetworkApplicationGatewayPrivateLinkIp {
    static config: typeof _azNetwork.az_network_application_gateway_private_link_ip_config;
}
/** Manage Private Link of an Application Gateway. */
declare class azNetworkApplicationGatewayPrivateLink extends _azNetwork.az_network_application_gateway_private_link {
    static ip: typeof azNetworkApplicationGatewayPrivateLinkIp;
}
declare class azNetworkApplicationGatewayPrivate {
    /** Manage Private Link of an Application Gateway. */
    static link: typeof azNetworkApplicationGatewayPrivateLink;
}
declare class azNetworkApplicationGatewayRedirect {
    static config: typeof _azNetwork.az_network_application_gateway_redirect_config;
}
/** Manage rewrite rules of an application gateway. */
declare class azNetworkApplicationGatewayRewriteRule extends _azNetwork.az_network_application_gateway_rewrite_rule {
    static condition: typeof _azNetwork.az_network_application_gateway_rewrite_rule_condition;
    static set: typeof _azNetwork.az_network_application_gateway_rewrite_rule_set;
}
declare class azNetworkApplicationGatewayRewrite {
    /** Manage rewrite rules of an application gateway. */
    static rule: typeof azNetworkApplicationGatewayRewriteRule;
}
declare class azNetworkApplicationGatewayRoot {
    static cert: typeof _azNetwork.az_network_application_gateway_root_cert;
}
/** Manage the SSL policy of an application gateway. */
declare class azNetworkApplicationGatewaySslPolicy extends _azNetwork.az_network_application_gateway_ssl_policy {
    static predefined: typeof _azNetwork.az_network_application_gateway_ssl_policy_predefined;
}
declare class azNetworkApplicationGatewaySsl {
    static cert: typeof _azNetwork.az_network_application_gateway_ssl_cert;
    /** Manage the SSL policy of an application gateway. */
    static policy: typeof azNetworkApplicationGatewaySslPolicy;
}
/** Manage URL path maps of an application gateway. */
declare class azNetworkApplicationGatewayUrlPathMap extends _azNetwork.az_network_application_gateway_url_path_map {
    static rule: typeof _azNetwork.az_network_application_gateway_url_path_map_rule;
}
declare class azNetworkApplicationGatewayUrlPath {
    /** Manage URL path maps of an application gateway. */
    static map: typeof azNetworkApplicationGatewayUrlPathMap;
}
declare class azNetworkApplicationGatewayUrl {
    static path: typeof azNetworkApplicationGatewayUrlPath;
}
declare class azNetworkApplicationGatewayWafPolicyCustomRuleMatch {
    static condition: typeof _azNetwork.az_network_application_gateway_waf_policy_custom_rule_match_condition;
}
/** Manage application gateway web application firewall (WAF) policy custom rules. */
declare class azNetworkApplicationGatewayWafPolicyCustomRule extends _azNetwork.az_network_application_gateway_waf_policy_custom_rule {
    static match: typeof azNetworkApplicationGatewayWafPolicyCustomRuleMatch;
}
declare class azNetworkApplicationGatewayWafPolicyCustom {
    /** Manage application gateway web application firewall (WAF) policy custom rules. */
    static rule: typeof azNetworkApplicationGatewayWafPolicyCustomRule;
}
declare class azNetworkApplicationGatewayWafPolicyManagedRuleRule {
    static set: typeof _azNetwork.az_network_application_gateway_waf_policy_managed_rule_rule_set;
}
/** Manage managed rules of a waf-policy. Visit: <a href="https://docs.microsoft.com/en-us/azure/web-application-firewall/afds/afds-overview">https://docs.microsoft.com/en-us/azure/web-application-firewall/afds/afds-overview</a>. */
declare class azNetworkApplicationGatewayWafPolicyManagedRule extends _azNetwork.az_network_application_gateway_waf_policy_managed_rule {
    static exclusion: typeof _azNetwork.az_network_application_gateway_waf_policy_managed_rule_exclusion;
    static rule: typeof azNetworkApplicationGatewayWafPolicyManagedRuleRule;
}
declare class azNetworkApplicationGatewayWafPolicyManaged {
    /** Manage managed rules of a waf-policy. Visit: <a href="https://docs.microsoft.com/en-us/azure/web-application-firewall/afds/afds-overview">https://docs.microsoft.com/en-us/azure/web-application-firewall/afds/afds-overview</a>. */
    static rule: typeof azNetworkApplicationGatewayWafPolicyManagedRule;
}
declare class azNetworkApplicationGatewayWafPolicyPolicy {
    static setting: typeof _azNetwork.az_network_application_gateway_waf_policy_policy_setting;
}
/** Manage application gateway web application firewall (WAF) policies. */
declare class azNetworkApplicationGatewayWafPolicy extends _azNetwork.az_network_application_gateway_waf_policy {
    static custom: typeof azNetworkApplicationGatewayWafPolicyCustom;
    static managed: typeof azNetworkApplicationGatewayWafPolicyManaged;
    static policy: typeof azNetworkApplicationGatewayWafPolicyPolicy;
}
declare class azNetworkApplicationGatewayWaf {
    static config: typeof _azNetwork.az_network_application_gateway_waf_config;
    /** Manage application gateway web application firewall (WAF) policies. */
    static policy: typeof azNetworkApplicationGatewayWafPolicy;
}
/** Manage application-level routing and load balancing services. */
declare class azNetworkApplicationGateway extends _azNetwork.az_network_application_gateway {
    static address: typeof azNetworkApplicationGatewayAddress;
    static auth: typeof azNetworkApplicationGatewayAuth;
    static frontend: typeof azNetworkApplicationGatewayFrontend;
    static http: typeof azNetworkApplicationGatewayHttp;
    static identity: typeof _azNetwork.az_network_application_gateway_identity;
    static private: typeof azNetworkApplicationGatewayPrivate;
    static probe: typeof _azNetwork.az_network_application_gateway_probe;
    static redirect: typeof azNetworkApplicationGatewayRedirect;
    static rewrite: typeof azNetworkApplicationGatewayRewrite;
    static root: typeof azNetworkApplicationGatewayRoot;
    static rule: typeof _azNetwork.az_network_application_gateway_rule;
    static ssl: typeof azNetworkApplicationGatewaySsl;
    static url: typeof azNetworkApplicationGatewayUrl;
    static waf: typeof azNetworkApplicationGatewayWaf;
}
declare class azNetworkApplication {
    /** Manage application-level routing and load balancing services. */
    static gateway: typeof azNetworkApplicationGateway;
}
declare class azNetworkDdos {
    static protection: typeof _azNetwork.az_network_ddos_protection;
}
/** Manage DNS records and record sets. */
declare class azNetworkDnsRecordSet extends _azNetwork.az_network_dns_record_set {
    static a: typeof _azNetwork.az_network_dns_record_set_a;
    static aaaa: typeof _azNetwork.az_network_dns_record_set_aaaa;
    static caa: typeof _azNetwork.az_network_dns_record_set_caa;
    static cname: typeof _azNetwork.az_network_dns_record_set_cname;
    static mx: typeof _azNetwork.az_network_dns_record_set_mx;
    static ns: typeof _azNetwork.az_network_dns_record_set_ns;
    static ptr: typeof _azNetwork.az_network_dns_record_set_ptr;
    static soa: typeof _azNetwork.az_network_dns_record_set_soa;
    static srv: typeof _azNetwork.az_network_dns_record_set_srv;
    static txt: typeof _azNetwork.az_network_dns_record_set_txt;
}
declare class azNetworkDnsRecord {
    /** Manage DNS records and record sets. */
    static set: typeof azNetworkDnsRecordSet;
}
/** Manage DNS domains in Azure. */
declare class azNetworkDns extends _azNetwork.az_network_dns {
    static record: typeof azNetworkDnsRecord;
    static zone: typeof _azNetwork.az_network_dns_zone;
}
/** Manage ExpressRoute gateways. */
declare class azNetworkExpressRouteGateway extends _azNetwork.az_network_express_route_gateway {
    static connection: typeof _azNetwork.az_network_express_route_gateway_connection;
}
declare class azNetworkExpressRoutePeeringPeer {
    static connection: typeof _azNetwork.az_network_express_route_peering_peer_connection;
}
/** Manage ExpressRoute peering of an ExpressRoute circuit. */
declare class azNetworkExpressRoutePeering extends _azNetwork.az_network_express_route_peering {
    static connection: typeof _azNetwork.az_network_express_route_peering_connection;
    static peer: typeof azNetworkExpressRoutePeeringPeer;
}
/** Manage ExpressRoute ports. */
declare class azNetworkExpressRoutePort extends _azNetwork.az_network_express_route_port {
    static identity: typeof _azNetwork.az_network_express_route_port_identity;
    static link: typeof _azNetwork.az_network_express_route_port_link;
    static location: typeof _azNetwork.az_network_express_route_port_location;
}
/** Manage dedicated private network fiber connections to Azure. */
declare class azNetworkExpressRoute extends _azNetwork.az_network_express_route {
    static auth: typeof _azNetwork.az_network_express_route_auth;
    /** Manage ExpressRoute gateways. */
    static gateway: typeof azNetworkExpressRouteGateway;
    /** Manage ExpressRoute peering of an ExpressRoute circuit. */
    static peering: typeof azNetworkExpressRoutePeering;
    /** Manage ExpressRoute ports. */
    static port: typeof azNetworkExpressRoutePort;
}
declare class azNetworkExpress {
    /** Manage dedicated private network fiber connections to Azure. */
    static route: typeof azNetworkExpressRoute;
}
/** Manage address pools of a load balancer. */
declare class azNetworkLbAddressPool extends _azNetwork.az_network_lb_address_pool {
    static address: typeof _azNetwork.az_network_lb_address_pool_address;
}
declare class azNetworkLbAddress {
    /** Manage address pools of a load balancer. */
    static pool: typeof azNetworkLbAddressPool;
}
declare class azNetworkLbFrontend {
    static ip: typeof _azNetwork.az_network_lb_frontend_ip;
}
declare class azNetworkLbInboundNat {
    static pool: typeof _azNetwork.az_network_lb_inbound_nat_pool;
    static rule: typeof _azNetwork.az_network_lb_inbound_nat_rule;
}
declare class azNetworkLbInbound {
    static nat: typeof azNetworkLbInboundNat;
}
declare class azNetworkLbOutbound {
    static rule: typeof _azNetwork.az_network_lb_outbound_rule;
}
/** Manage and configure load balancers. */
declare class azNetworkLb extends _azNetwork.az_network_lb {
    static address: typeof azNetworkLbAddress;
    static frontend: typeof azNetworkLbFrontend;
    static inbound: typeof azNetworkLbInbound;
    static outbound: typeof azNetworkLbOutbound;
    static probe: typeof _azNetwork.az_network_lb_probe;
    static rule: typeof _azNetwork.az_network_lb_rule;
}
declare class azNetworkLocal {
    static gateway: typeof _azNetwork.az_network_local_gateway;
}
/** Commands to manage NAT resources. */
declare class azNetworkNat extends _azNetwork.az_network_nat {
    static gateway: typeof _azNetwork.az_network_nat_gateway;
}
declare class azNetworkNicIpConfigAddress {
    static pool: typeof _azNetwork.az_network_nic_ip_config_address_pool;
}
declare class azNetworkNicIpConfigInboundNat {
    static rule: typeof _azNetwork.az_network_nic_ip_config_inbound_nat_rule;
}
declare class azNetworkNicIpConfigInbound {
    static nat: typeof azNetworkNicIpConfigInboundNat;
}
/** Manage IP configurations of a network interface. */
declare class azNetworkNicIpConfig extends _azNetwork.az_network_nic_ip_config {
    static address: typeof azNetworkNicIpConfigAddress;
    static inbound: typeof azNetworkNicIpConfigInbound;
}
declare class azNetworkNicIp {
    /** Manage IP configurations of a network interface. */
    static config: typeof azNetworkNicIpConfig;
}
/** Manage network interfaces. */
declare class azNetworkNic extends _azNetwork.az_network_nic {
    static ip: typeof azNetworkNicIp;
}
/** Manage Azure Network Security Groups (NSGs). */
declare class azNetworkNsg extends _azNetwork.az_network_nsg {
    static rule: typeof _azNetwork.az_network_nsg_rule;
}
/** Manage Private DNS links. */
declare class azNetworkPrivateDnsLink extends _azNetwork.az_network_private_dns_link {
    static vnet: typeof _azNetwork.az_network_private_dns_link_vnet;
}
/** Manage Private DNS records and record sets. */
declare class azNetworkPrivateDnsRecordSet extends _azNetwork.az_network_private_dns_record_set {
    static a: typeof _azNetwork.az_network_private_dns_record_set_a;
    static aaaa: typeof _azNetwork.az_network_private_dns_record_set_aaaa;
    static cname: typeof _azNetwork.az_network_private_dns_record_set_cname;
    static mx: typeof _azNetwork.az_network_private_dns_record_set_mx;
    static ptr: typeof _azNetwork.az_network_private_dns_record_set_ptr;
    static soa: typeof _azNetwork.az_network_private_dns_record_set_soa;
    static srv: typeof _azNetwork.az_network_private_dns_record_set_srv;
    static txt: typeof _azNetwork.az_network_private_dns_record_set_txt;
}
declare class azNetworkPrivateDnsRecord {
    /** Manage Private DNS records and record sets. */
    static set: typeof azNetworkPrivateDnsRecordSet;
}
/** Manage Private DNS domains in Azure. */
declare class azNetworkPrivateDns extends _azNetwork.az_network_private_dns {
    /** Manage Private DNS links. */
    static link: typeof azNetworkPrivateDnsLink;
    static record: typeof azNetworkPrivateDnsRecord;
    static zone: typeof _azNetwork.az_network_private_dns_zone;
}
declare class azNetworkPrivateEndpointDnsZone {
    static group: typeof _azNetwork.az_network_private_endpoint_dns_zone_group;
}
declare class azNetworkPrivateEndpointDns {
    static zone: typeof azNetworkPrivateEndpointDnsZone;
}
/** Manage private endpoints. */
declare class azNetworkPrivateEndpoint extends _azNetwork.az_network_private_endpoint {
    static connection: typeof _azNetwork.az_network_private_endpoint_connection;
    static dns: typeof azNetworkPrivateEndpointDns;
}
/** Manage private link services. */
declare class azNetworkPrivateLinkService extends _azNetwork.az_network_private_link_service {
    static connection: typeof _azNetwork.az_network_private_link_service_connection;
}
declare class azNetworkPrivateLink {
    static resource: typeof _azNetwork.az_network_private_link_resource;
    /** Manage private link services. */
    static service: typeof azNetworkPrivateLinkService;
}
declare class azNetworkPrivate {
    /** Manage Private DNS domains in Azure. */
    static dns: typeof azNetworkPrivateDns;
    /** Manage private endpoints. */
    static endpoint: typeof azNetworkPrivateEndpoint;
    static link: typeof azNetworkPrivateLink;
}
/** Manage public IP addresses. */
declare class azNetworkPublicIp extends _azNetwork.az_network_public_ip {
    static prefix: typeof _azNetwork.az_network_public_ip_prefix;
}
declare class azNetworkPublic {
    /** Manage public IP addresses. */
    static ip: typeof azNetworkPublicIp;
}
/** Manage route filters. */
declare class azNetworkRouteFilter extends _azNetwork.az_network_route_filter {
    static rule: typeof _azNetwork.az_network_route_filter_rule;
}
/** Manage route tables. */
declare class azNetworkRouteTable extends _azNetwork.az_network_route_table {
    static route: typeof _azNetwork.az_network_route_table_route;
}
declare class azNetworkRoute {
    /** Manage route filters. */
    static filter: typeof azNetworkRouteFilter;
    /** Manage route tables. */
    static table: typeof azNetworkRouteTable;
}
declare class azNetworkSecurityPartner {
    static provider: typeof _azNetwork.az_network_security_partner_provider;
}
declare class azNetworkSecurity {
    static partner: typeof azNetworkSecurityPartner;
}
/** Manage service endpoint policies. */
declare class azNetworkServiceEndpointPolicy extends _azNetwork.az_network_service_endpoint_policy {
    static definition: typeof _azNetwork.az_network_service_endpoint_policy_definition;
}
/** Manage policies related to service endpoints. */
declare class azNetworkServiceEndpoint extends _azNetwork.az_network_service_endpoint {
    /** Manage service endpoint policies. */
    static policy: typeof azNetworkServiceEndpointPolicy;
}
declare class azNetworkService {
    /** Manage policies related to service endpoints. */
    static endpoint: typeof azNetworkServiceEndpoint;
}
/** Manage the routing of incoming traffic. */
declare class azNetworkTrafficManager extends _azNetwork.az_network_traffic_manager {
    static endpoint: typeof _azNetwork.az_network_traffic_manager_endpoint;
    static profile: typeof _azNetwork.az_network_traffic_manager_profile;
}
declare class azNetworkTraffic {
    /** Manage the routing of incoming traffic. */
    static manager: typeof azNetworkTrafficManager;
}
/** Manage Azure Network Virtual Appliance. */
declare class azNetworkVirtualAppliance extends _azNetwork.az_network_virtual_appliance {
    static site: typeof _azNetwork.az_network_virtual_appliance_site;
    static sku: typeof _azNetwork.az_network_virtual_appliance_sku;
}
declare class azNetworkVirtual {
    /** Manage Azure Network Virtual Appliance. */
    static appliance: typeof azNetworkVirtualAppliance;
}
declare class azNetworkVnetGatewayIpsec {
    static policy: typeof _azNetwork.az_network_vnet_gateway_ipsec_policy;
}
declare class azNetworkVnetGatewayRevoked {
    static cert: typeof _azNetwork.az_network_vnet_gateway_revoked_cert;
}
declare class azNetworkVnetGatewayRoot {
    static cert: typeof _azNetwork.az_network_vnet_gateway_root_cert;
}
declare class azNetworkVnetGatewayVpn {
    static client: typeof _azNetwork.az_network_vnet_gateway_vpn_client;
}
/** Use an Azure Virtual Network Gateway to establish secure, cross-premises connectivity. */
declare class azNetworkVnetGateway extends _azNetwork.az_network_vnet_gateway {
    static aad: typeof _azNetwork.az_network_vnet_gateway_aad;
    static ipsec: typeof azNetworkVnetGatewayIpsec;
    static revoked: typeof azNetworkVnetGatewayRevoked;
    static root: typeof azNetworkVnetGatewayRoot;
    static vpn: typeof azNetworkVnetGatewayVpn;
}
/** Manage Azure Virtual Networks. */
declare class azNetworkVnet extends _azNetwork.az_network_vnet {
    /** Use an Azure Virtual Network Gateway to establish secure, cross-premises connectivity. */
    static gateway: typeof azNetworkVnetGateway;
    static peering: typeof _azNetwork.az_network_vnet_peering;
    static subnet: typeof _azNetwork.az_network_vnet_subnet;
}
declare class azNetworkVpnConnectionIpsec {
    static policy: typeof _azNetwork.az_network_vpn_connection_ipsec_policy;
}
declare class azNetworkVpnConnectionShared {
    static key: typeof _azNetwork.az_network_vpn_connection_shared_key;
}
/** Manage VPN connections. */
declare class azNetworkVpnConnection extends _azNetwork.az_network_vpn_connection {
    static ipsec: typeof azNetworkVpnConnectionIpsec;
    static shared: typeof azNetworkVpnConnectionShared;
}
declare class azNetworkVpn {
    /** Manage VPN connections. */
    static connection: typeof azNetworkVpnConnection;
}
/** Manage the virtual router. This feature supports both VirtualHub and VirtualRouter. Considering VirtualRouter is depcated, we recommand to create VirtualRouter instead. */
declare class azNetworkVrouter extends _azNetwork.az_network_vrouter {
    static peering: typeof _azNetwork.az_network_vrouter_peering;
}
declare class azNetworkWatcherConnectionMonitorTest {
    static configuration: typeof _azNetwork.az_network_watcher_connection_monitor_test_configuration;
    static group: typeof _azNetwork.az_network_watcher_connection_monitor_test_group;
}
/** Manage connection monitoring between an Azure Virtual Machine and any IP resource. */
declare class azNetworkWatcherConnectionMonitor extends _azNetwork.az_network_watcher_connection_monitor {
    static endpoint: typeof _azNetwork.az_network_watcher_connection_monitor_endpoint;
    static output: typeof _azNetwork.az_network_watcher_connection_monitor_output;
    static test: typeof azNetworkWatcherConnectionMonitorTest;
}
declare class azNetworkWatcherConnection {
    /** Manage connection monitoring between an Azure Virtual Machine and any IP resource. */
    static monitor: typeof azNetworkWatcherConnectionMonitor;
}
declare class azNetworkWatcherFlow {
    static log: typeof _azNetwork.az_network_watcher_flow_log;
}
declare class azNetworkWatcherPacket {
    static capture: typeof _azNetwork.az_network_watcher_packet_capture;
}
/** Manage the Azure Network Watcher. */
declare class azNetworkWatcher extends _azNetwork.az_network_watcher {
    static connection: typeof azNetworkWatcherConnection;
    static flow: typeof azNetworkWatcherFlow;
    static packet: typeof azNetworkWatcherPacket;
    static troubleshooting: typeof _azNetwork.az_network_watcher_troubleshooting;
}
/** Manage Azure Network resources. */
declare class azNetwork extends _azNetwork.az_network {
    static application: typeof azNetworkApplication;
    static asg: typeof _azNetwork.az_network_asg;
    static bastion: typeof _azNetwork.az_network_bastion;
    static ddos: typeof azNetworkDdos;
    /** Manage DNS domains in Azure. */
    static dns: typeof azNetworkDns;
    static express: typeof azNetworkExpress;
    /** Manage and configure load balancers. */
    static lb: typeof azNetworkLb;
    static local: typeof azNetworkLocal;
    /** Commands to manage NAT resources. */
    static nat: typeof azNetworkNat;
    /** Manage network interfaces. */
    static nic: typeof azNetworkNic;
    /** Manage Azure Network Security Groups (NSGs). */
    static nsg: typeof azNetworkNsg;
    static private: typeof azNetworkPrivate;
    static profile: typeof _azNetwork.az_network_profile;
    static public: typeof azNetworkPublic;
    static route: typeof azNetworkRoute;
    static security: typeof azNetworkSecurity;
    static service: typeof azNetworkService;
    static traffic: typeof azNetworkTraffic;
    static virtual: typeof azNetworkVirtual;
    /** Manage Azure Virtual Networks. */
    static vnet: typeof azNetworkVnet;
    static vpn: typeof azNetworkVpn;
    /** Manage the virtual router. This feature supports both VirtualHub and VirtualRouter. Considering VirtualRouter is depcated, we recommand to create VirtualRouter instead. */
    static vrouter: typeof azNetworkVrouter;
    /** Manage the Azure Network Watcher. */
    static watcher: typeof azNetworkWatcher;
}
/** Manage Azure Red Hat OpenShift Services. */
declare class azOpenshift extends _azOpenshift.az_openshift {
    static monitor: typeof _azOpenshift.az_openshift_monitor;
}
/** Manage builds. */
declare class azPipelinesBuild extends _azPipelines.az_pipelines_build {
    static definition: typeof _azPipelines.az_pipelines_build_definition;
    static tag: typeof _azPipelines.az_pipelines_build_tag;
}
/** Manage releases. */
declare class azPipelinesRelease extends _azPipelines.az_pipelines_release {
    static definition: typeof _azPipelines.az_pipelines_release_definition;
}
/** Manage pipeline runs. */
declare class azPipelinesRuns extends _azPipelines.az_pipelines_runs {
    static artifact: typeof _azPipelines.az_pipelines_runs_artifact;
    static tag: typeof _azPipelines.az_pipelines_runs_tag;
}
/** Manage variable groups. */
declare class azPipelinesVariableGroup extends _azPipelines.az_pipelines_variable_group {
    static variable: typeof _azPipelines.az_pipelines_variable_group_variable;
}
/** Manage pipeline variables. */
declare class azPipelinesVariable extends _azPipelines.az_pipelines_variable {
    /** Manage variable groups. */
    static group: typeof azPipelinesVariableGroup;
}
/** Manage Azure Pipelines. */
declare class azPipelines extends _azPipelines.az_pipelines {
    static agent: typeof _azPipelines.az_pipelines_agent;
    /** Manage builds. */
    static build: typeof azPipelinesBuild;
    static folder: typeof _azPipelines.az_pipelines_folder;
    static pool: typeof _azPipelines.az_pipelines_pool;
    static queue: typeof _azPipelines.az_pipelines_queue;
    /** Manage releases. */
    static release: typeof azPipelinesRelease;
    /** Manage pipeline runs. */
    static runs: typeof azPipelinesRuns;
    /** Manage pipeline variables. */
    static variable: typeof azPipelinesVariable;
}
/** Manage resource policy assignments. */
declare class azPolicyAssignment extends _azPolicy.az_policy_assignment {
    static identity: typeof _azPolicy.az_policy_assignment_identity;
}
/** Manage resource policy remediations. */
declare class azPolicyRemediation extends _azPolicy.az_policy_remediation {
    static deployment: typeof _azPolicy.az_policy_remediation_deployment;
}
declare class azPolicySet {
    static definition: typeof _azPolicy.az_policy_set_definition;
}
/** Manage resource policies. */
declare class azPolicy extends _azPolicy.az_policy {
    /** Manage resource policy assignments. */
    static assignment: typeof azPolicyAssignment;
    static definition: typeof _azPolicy.az_policy_definition;
    static event: typeof _azPolicy.az_policy_event;
    static metadata: typeof _azPolicy.az_policy_metadata;
    /** Manage resource policy remediations. */
    static remediation: typeof azPolicyRemediation;
    static set: typeof azPolicySet;
    static state: typeof _azPolicy.az_policy_state;
}
declare class azPostgresFlexibleServerFirewall {
    static rule: typeof _azPostgres.az_postgres_flexible_server_firewall_rule;
}
/** Manage Azure Database for PostgreSQL Flexible Servers. */
declare class azPostgresFlexibleServer extends _azPostgres.az_postgres_flexible_server {
    static firewall: typeof azPostgresFlexibleServerFirewall;
    static parameter: typeof _azPostgres.az_postgres_flexible_server_parameter;
}
declare class azPostgresFlexible {
    /** Manage Azure Database for PostgreSQL Flexible Servers. */
    static server: typeof azPostgresFlexibleServer;
}
declare class azPostgresServerAd {
    static admin: typeof _azPostgres.az_postgres_server_ad_admin;
}
declare class azPostgresServerFirewall {
    static rule: typeof _azPostgres.az_postgres_server_firewall_rule;
}
declare class azPostgresServerPrivateEndpoint {
    static connection: typeof _azPostgres.az_postgres_server_private_endpoint_connection;
}
declare class azPostgresServerPrivateLink {
    static resource: typeof _azPostgres.az_postgres_server_private_link_resource;
}
declare class azPostgresServerPrivate {
    static endpoint: typeof azPostgresServerPrivateEndpoint;
    static link: typeof azPostgresServerPrivateLink;
}
declare class azPostgresServerVnet {
    static rule: typeof _azPostgres.az_postgres_server_vnet_rule;
}
/** Manage PostgreSQL servers. */
declare class azPostgresServer extends _azPostgres.az_postgres_server {
    static ad: typeof azPostgresServerAd;
    static configuration: typeof _azPostgres.az_postgres_server_configuration;
    static firewall: typeof azPostgresServerFirewall;
    static key: typeof _azPostgres.az_postgres_server_key;
    static logs: typeof _azPostgres.az_postgres_server_logs;
    static private: typeof azPostgresServerPrivate;
    static replica: typeof _azPostgres.az_postgres_server_replica;
    static vnet: typeof azPostgresServerVnet;
}
/** Manage Azure Database for PostgreSQL servers. */
declare class azPostgres extends _azPostgres.az_postgres {
    static db: typeof _azPostgres.az_postgres_db;
    static flexible: typeof azPostgresFlexible;
    /** Manage PostgreSQL servers. */
    static server: typeof azPostgresServer;
}
/** Manage resource providers. */
declare class azProvider extends _azProvider.az_provider {
    static operation: typeof _azProvider.az_provider_operation;
}
declare class azRedisFirewall {
    static rules: typeof _azRedis.az_redis_firewall_rules;
}
declare class azRedisPatch {
    static schedule: typeof _azRedis.az_redis_patch_schedule;
}
declare class azRedisServer {
    static link: typeof _azRedis.az_redis_server_link;
}
/** Manage dedicated Redis caches for your Azure applications. */
declare class azRedis extends _azRedis.az_redis {
    static firewall: typeof azRedisFirewall;
    static patch: typeof azRedisPatch;
    static server: typeof azRedisServer;
}
/** Manage Azure Relay Service Hybrid Connection Authorization Rule. */
declare class azRelayHycoAuthorizationRule extends _azRelay.az_relay_hyco_authorization_rule {
    static keys: typeof _azRelay.az_relay_hyco_authorization_rule_keys;
}
declare class azRelayHycoAuthorization {
    /** Manage Azure Relay Service Hybrid Connection Authorization Rule. */
    static rule: typeof azRelayHycoAuthorizationRule;
}
/** Manage Azure Relay Service Hybrid Connection and Authorization Rule. */
declare class azRelayHyco extends _azRelay.az_relay_hyco {
    static authorization: typeof azRelayHycoAuthorization;
}
/** Manage Azure Relay Service Namespace Authorization Rule. */
declare class azRelayNamespaceAuthorizationRule extends _azRelay.az_relay_namespace_authorization_rule {
    static keys: typeof _azRelay.az_relay_namespace_authorization_rule_keys;
}
declare class azRelayNamespaceAuthorization {
    /** Manage Azure Relay Service Namespace Authorization Rule. */
    static rule: typeof azRelayNamespaceAuthorizationRule;
}
/** Manage Azure Relay Service Namespace. */
declare class azRelayNamespace extends _azRelay.az_relay_namespace {
    static authorization: typeof azRelayNamespaceAuthorization;
}
/** Manage Azure Relay Service WCF Relay Authorization Rule. */
declare class azRelayWcfrelayAuthorizationRule extends _azRelay.az_relay_wcfrelay_authorization_rule {
    static keys: typeof _azRelay.az_relay_wcfrelay_authorization_rule_keys;
}
declare class azRelayWcfrelayAuthorization {
    /** Manage Azure Relay Service WCF Relay Authorization Rule. */
    static rule: typeof azRelayWcfrelayAuthorizationRule;
}
/** Manage Azure Relay Service WCF Relay and Authorization Rule. */
declare class azRelayWcfrelay extends _azRelay.az_relay_wcfrelay {
    static authorization: typeof azRelayWcfrelayAuthorization;
}
/** Manage Azure Relay Service namespaces, WCF relays, hybrid connections, and rules. */
declare class azRelay extends _azRelay.az_relay {
    /** Manage Azure Relay Service Hybrid Connection and Authorization Rule. */
    static hyco: typeof azRelayHyco;
    /** Manage Azure Relay Service Namespace. */
    static namespace: typeof azRelayNamespace;
    /** Manage Azure Relay Service WCF Relay and Authorization Rule. */
    static wcfrelay: typeof azRelayWcfrelay;
}
declare class azReposPolicyApprover {
    static count: typeof _azRepos.az_repos_policy_approver_count;
}
declare class azReposPolicyCase {
    static enforcement: typeof _azRepos.az_repos_policy_case_enforcement;
}
declare class azReposPolicyComment {
    static required: typeof _azRepos.az_repos_policy_comment_required;
}
declare class azReposPolicyFile {
    static size: typeof _azRepos.az_repos_policy_file_size;
}
declare class azReposPolicyMerge {
    static strategy: typeof _azRepos.az_repos_policy_merge_strategy;
}
declare class azReposPolicyRequired {
    static reviewer: typeof _azRepos.az_repos_policy_required_reviewer;
}
declare class azReposPolicyWorkItem {
    static linking: typeof _azRepos.az_repos_policy_work_item_linking;
}
declare class azReposPolicyWork {
    static item: typeof azReposPolicyWorkItem;
}
/** Manage branch policy. */
declare class azReposPolicy extends _azRepos.az_repos_policy {
    static approver: typeof azReposPolicyApprover;
    static build: typeof _azRepos.az_repos_policy_build;
    static case: typeof azReposPolicyCase;
    static comment: typeof azReposPolicyComment;
    static file: typeof azReposPolicyFile;
    static merge: typeof azReposPolicyMerge;
    static required: typeof azReposPolicyRequired;
    static work: typeof azReposPolicyWork;
}
declare class azReposPrWork {
    static item: typeof _azRepos.az_repos_pr_work_item;
}
/** Manage pull requests. */
declare class azReposPr extends _azRepos.az_repos_pr {
    static policy: typeof _azRepos.az_repos_pr_policy;
    static reviewer: typeof _azRepos.az_repos_pr_reviewer;
    static work: typeof azReposPrWork;
}
/** Manage Azure Repos. */
declare class azRepos extends _azRepos.az_repos {
    static import: typeof _azRepos.az_repos_import;
    /** Manage branch policy. */
    static policy: typeof azReposPolicy;
    /** Manage pull requests. */
    static pr: typeof azReposPr;
    static ref: typeof _azRepos.az_repos_ref;
}
/** Manage reservation order, which is container for reservations. */
declare class azReservationsReservationOrder extends _azReservations.az_reservations_reservation_order {
    static id: typeof _azReservations.az_reservations_reservation_order_id;
}
/** Manage reservation entities. */
declare class azReservationsReservation extends _azReservations.az_reservations_reservation {
    /** Manage reservation order, which is container for reservations. */
    static order: typeof azReservationsReservationOrder;
}
/** Manage Azure Reservations. */
declare class azReservations extends _azReservations.az_reservations {
    static catalog: typeof _azReservations.az_reservations_catalog;
    /** Manage reservation entities. */
    static reservation: typeof azReservationsReservation;
}
/** Manage Azure resources. */
declare class azResource extends _azResource.az_resource {
    static link: typeof _azResource.az_resource_link;
    static lock: typeof _azResource.az_resource_lock;
}
/** Manage user roles for access control with Azure Active Directory and service principals. */
declare class azRole extends _azRole.az_role {
    static assignment: typeof _azRole.az_role_assignment;
    static definition: typeof _azRole.az_role_definition;
}
declare class azSearchAdmin {
    static key: typeof _azSearch.az_search_admin_key;
}
declare class azSearchQuery {
    static key: typeof _azSearch.az_search_query_key;
}
/** Manage Azure Search services, admin keys and query keys. */
declare class azSearch extends _azSearch.az_search {
    static admin: typeof azSearchAdmin;
    static query: typeof azSearchQuery;
    static service: typeof _azSearch.az_search_service;
}
declare class azSecurityAdaptiveApplication {
    static controls: typeof _azSecurity.az_security_adaptive_application_controls;
}
declare class azSecurityAdaptiveNetwork {
    static hardenings: typeof _azSecurity.az_security_adaptive_network_hardenings;
}
declare class azSecurityAdaptive {
    static application: typeof azSecurityAdaptiveApplication;
    static network: typeof azSecurityAdaptiveNetwork;
}
declare class azSecurityAllowed {
    static connections: typeof _azSecurity.az_security_allowed_connections;
}
/** View your security assessment results. */
declare class azSecurityAssessment extends _azSecurity.az_security_assessment {
    static metadata: typeof _azSecurity.az_security_assessment_metadata;
}
/** View and manage Advanced Threat Protection settings. */
declare class azSecurityAtp extends _azSecurity.az_security_atp {
    static storage: typeof _azSecurity.az_security_atp_storage;
}
declare class azSecurityAutoProvisioning {
    static setting: typeof _azSecurity.az_security_auto_provisioning_setting;
}
declare class azSecurityAuto {
    static provisioning: typeof azSecurityAutoProvisioning;
}
declare class azSecurityDiscoveredSecurity {
    static solution: typeof _azSecurity.az_security_discovered_security_solution;
}
declare class azSecurityDiscovered {
    static security: typeof azSecurityDiscoveredSecurity;
}
declare class azSecurityExternalSecurity {
    static solution: typeof _azSecurity.az_security_external_security_solution;
}
declare class azSecurityExternal {
    static security: typeof azSecurityExternalSecurity;
}
declare class azSecurityIot {
    static alerts: typeof _azSecurity.az_security_iot_alerts;
    static analytics: typeof _azSecurity.az_security_iot_analytics;
    static recommendations: typeof _azSecurity.az_security_iot_recommendations;
    static solution: typeof _azSecurity.az_security_iot_solution;
}
declare class azSecurityJit {
    static policy: typeof _azSecurity.az_security_jit_policy;
}
declare class azSecurityRegulatoryCompliance {
    static assessments: typeof _azSecurity.az_security_regulatory_compliance_assessments;
    static controls: typeof _azSecurity.az_security_regulatory_compliance_controls;
    static standards: typeof _azSecurity.az_security_regulatory_compliance_standards;
}
declare class azSecurityRegulatory {
    static compliance: typeof azSecurityRegulatoryCompliance;
}
declare class azSecuritySub {
    static assessment: typeof _azSecurity.az_security_sub_assessment;
}
declare class azSecurityWorkspace {
    static setting: typeof _azSecurity.az_security_workspace_setting;
}
/** Manage your security posture with Azure Security Center. */
declare class azSecurity extends _azSecurity.az_security {
    static adaptive: typeof azSecurityAdaptive;
    static alert: typeof _azSecurity.az_security_alert;
    static allowed: typeof azSecurityAllowed;
    /** View your security assessment results. */
    static assessment: typeof azSecurityAssessment;
    /** View and manage Advanced Threat Protection settings. */
    static atp: typeof azSecurityAtp;
    static auto: typeof azSecurityAuto;
    static contact: typeof _azSecurity.az_security_contact;
    static discovered: typeof azSecurityDiscovered;
    static external: typeof azSecurityExternal;
    static iot: typeof azSecurityIot;
    static jit: typeof azSecurityJit;
    static location: typeof _azSecurity.az_security_location;
    static pricing: typeof _azSecurity.az_security_pricing;
    static regulatory: typeof azSecurityRegulatory;
    static setting: typeof _azSecurity.az_security_setting;
    static sub: typeof azSecuritySub;
    static task: typeof _azSecurity.az_security_task;
    static topology: typeof _azSecurity.az_security_topology;
    static workspace: typeof azSecurityWorkspace;
}
/** Manage Azure Service Bus Authorization Rule for Namespace with Geo-Disaster Recovery Configuration Alias. */
declare class azServicebusGeorecoveryAliasAuthorizationRule extends _azServicebus.az_servicebus_georecovery_alias_authorization_rule {
    static keys: typeof _azServicebus.az_servicebus_georecovery_alias_authorization_rule_keys;
}
declare class azServicebusGeorecoveryAliasAuthorization {
    /** Manage Azure Service Bus Authorization Rule for Namespace with Geo-Disaster Recovery Configuration Alias. */
    static rule: typeof azServicebusGeorecoveryAliasAuthorizationRule;
}
/** Manage Azure Service Bus Geo-Disaster Recovery Configuration Alias. */
declare class azServicebusGeorecoveryAlias extends _azServicebus.az_servicebus_georecovery_alias {
    static authorization: typeof azServicebusGeorecoveryAliasAuthorization;
}
declare class azServicebusGeorecovery {
    /** Manage Azure Service Bus Geo-Disaster Recovery Configuration Alias. */
    static alias: typeof azServicebusGeorecoveryAlias;
}
/** Manage Azure Service Bus Namespace Authorization Rule. */
declare class azServicebusNamespaceAuthorizationRule extends _azServicebus.az_servicebus_namespace_authorization_rule {
    static keys: typeof _azServicebus.az_servicebus_namespace_authorization_rule_keys;
}
declare class azServicebusNamespaceAuthorization {
    /** Manage Azure Service Bus Namespace Authorization Rule. */
    static rule: typeof azServicebusNamespaceAuthorizationRule;
}
declare class azServicebusNamespaceNetwork {
    static rule: typeof _azServicebus.az_servicebus_namespace_network_rule;
}
/** Manage Azure Service Bus Namespace. */
declare class azServicebusNamespace extends _azServicebus.az_servicebus_namespace {
    static authorization: typeof azServicebusNamespaceAuthorization;
    static network: typeof azServicebusNamespaceNetwork;
}
/** Manage Azure Service Bus Queue Authorization Rule. */
declare class azServicebusQueueAuthorizationRule extends _azServicebus.az_servicebus_queue_authorization_rule {
    static keys: typeof _azServicebus.az_servicebus_queue_authorization_rule_keys;
}
declare class azServicebusQueueAuthorization {
    /** Manage Azure Service Bus Queue Authorization Rule. */
    static rule: typeof azServicebusQueueAuthorizationRule;
}
/** Manage Azure Service Bus Queue and Authorization Rule. */
declare class azServicebusQueue extends _azServicebus.az_servicebus_queue {
    static authorization: typeof azServicebusQueueAuthorization;
}
/** Manage Azure Service Bus Topic Authorization Rule. */
declare class azServicebusTopicAuthorizationRule extends _azServicebus.az_servicebus_topic_authorization_rule {
    static keys: typeof _azServicebus.az_servicebus_topic_authorization_rule_keys;
}
declare class azServicebusTopicAuthorization {
    /** Manage Azure Service Bus Topic Authorization Rule. */
    static rule: typeof azServicebusTopicAuthorizationRule;
}
/** Manage Azure Service Bus Subscription. */
declare class azServicebusTopicSubscription extends _azServicebus.az_servicebus_topic_subscription {
    static rule: typeof _azServicebus.az_servicebus_topic_subscription_rule;
}
/** Manage Azure Service Bus Topic and Authorization Rule. */
declare class azServicebusTopic extends _azServicebus.az_servicebus_topic {
    static authorization: typeof azServicebusTopicAuthorization;
    /** Manage Azure Service Bus Subscription. */
    static subscription: typeof azServicebusTopicSubscription;
}
/** Manage Azure Service Bus namespaces, queues, topics, subscriptions, rules and geo-disaster recovery configuration alias. */
declare class azServicebus extends _azServicebus.az_servicebus {
    static georecovery: typeof azServicebusGeorecovery;
    static migration: typeof _azServicebus.az_servicebus_migration;
    /** Manage Azure Service Bus Namespace. */
    static namespace: typeof azServicebusNamespace;
    /** Manage Azure Service Bus Queue and Authorization Rule. */
    static queue: typeof azServicebusQueue;
    /** Manage Azure Service Bus Topic and Authorization Rule. */
    static topic: typeof azServicebusTopic;
}
/** Manage application types on an Azure Service Fabric cluster. */
declare class azSfApplicationType extends _azSf.az_sf_application_type {
    static version: typeof _azSf.az_sf_application_type_version;
}
/** Manage applications running on an Azure Service Fabric cluster. */
declare class azSfApplication extends _azSf.az_sf_application {
    static certificate: typeof _azSf.az_sf_application_certificate;
    /** Manage application types on an Azure Service Fabric cluster. */
    static type: typeof azSfApplicationType;
}
declare class azSfClusterClient {
    static certificate: typeof _azSf.az_sf_cluster_client_certificate;
}
/** Manage the node instance of a cluster. */
declare class azSfClusterNode extends _azSf.az_sf_cluster_node {
    static type: typeof _azSf.az_sf_cluster_node_type;
}
declare class azSfClusterUpgrade {
    static type: typeof _azSf.az_sf_cluster_upgrade_type;
}
/** Manage an Azure Service Fabric cluster. */
declare class azSfCluster extends _azSf.az_sf_cluster {
    static certificate: typeof _azSf.az_sf_cluster_certificate;
    static client: typeof azSfClusterClient;
    static durability: typeof _azSf.az_sf_cluster_durability;
    /** Manage the node instance of a cluster. */
    static node: typeof azSfClusterNode;
    static reliability: typeof _azSf.az_sf_cluster_reliability;
    static setting: typeof _azSf.az_sf_cluster_setting;
    static upgrade: typeof azSfClusterUpgrade;
}
declare class azSfManagedClusterClient {
    static certificate: typeof _azSf.az_sf_managed_cluster_client_certificate;
}
/** Manage an Azure Service Fabric managed cluster. */
declare class azSfManagedCluster extends _azSf.az_sf_managed_cluster {
    static client: typeof azSfManagedClusterClient;
}
declare class azSfManagedNodeTypeVm {
    static extension: typeof _azSf.az_sf_managed_node_type_vm_extension;
    static secret: typeof _azSf.az_sf_managed_node_type_vm_secret;
}
/** Manage a node type of an Azure Service Fabric managed cluster. */
declare class azSfManagedNodeType extends _azSf.az_sf_managed_node_type {
    static node: typeof _azSf.az_sf_managed_node_type_node;
    static vm: typeof azSfManagedNodeTypeVm;
}
declare class azSfManagedNode {
    /** Manage a node type of an Azure Service Fabric managed cluster. */
    static type: typeof azSfManagedNodeType;
}
declare class azSfManaged {
    /** Manage an Azure Service Fabric managed cluster. */
    static cluster: typeof azSfManagedCluster;
    static node: typeof azSfManagedNode;
}
/** Manage and administer Azure Service Fabric clusters. */
declare class azSf extends _azSf.az_sf {
    /** Manage applications running on an Azure Service Fabric cluster. */
    static application: typeof azSfApplication;
    /** Manage an Azure Service Fabric cluster. */
    static cluster: typeof azSfCluster;
    static managed: typeof azSfManaged;
    static service: typeof _azSf.az_sf_service;
}
declare class azSigImage {
    static definition: typeof _azSig.az_sig_image_definition;
    static version: typeof _azSig.az_sig_image_version;
}
/** Manage shared image gallery. */
declare class azSig extends _azSig.az_sig {
    static image: typeof azSigImage;
}
declare class azSignalrNetwork {
    static rule: typeof _azSignalr.az_signalr_network_rule;
}
/** Manage Azure SignalR Service. */
declare class azSignalr extends _azSignalr.az_signalr {
    static cors: typeof _azSignalr.az_signalr_cors;
    static key: typeof _azSignalr.az_signalr_key;
    static network: typeof azSignalrNetwork;
    static upstream: typeof _azSignalr.az_signalr_upstream;
}
declare class azSqlDbAudit {
    static policy: typeof _azSql.az_sql_db_audit_policy;
}
/** Manage sensitivity classifications. */
declare class azSqlDbClassification extends _azSql.az_sql_db_classification {
    static recommendation: typeof _azSql.az_sql_db_classification_recommendation;
}
declare class azSqlDbLtr {
    static backup: typeof _azSql.az_sql_db_ltr_backup;
    static policy: typeof _azSql.az_sql_db_ltr_policy;
}
declare class azSqlDbThreat {
    static policy: typeof _azSql.az_sql_db_threat_policy;
}
/** Manage databases. */
declare class azSqlDb extends _azSql.az_sql_db {
    static audit: typeof azSqlDbAudit;
    /** Manage sensitivity classifications. */
    static classification: typeof azSqlDbClassification;
    static ltr: typeof azSqlDbLtr;
    static op: typeof _azSql.az_sql_db_op;
    static replica: typeof _azSql.az_sql_db_replica;
    static tde: typeof _azSql.az_sql_db_tde;
    static threat: typeof azSqlDbThreat;
}
/** Manage elastic pools. */
declare class azSqlElasticPool extends _azSql.az_sql_elastic_pool {
    static op: typeof _azSql.az_sql_elastic_pool_op;
}
declare class azSqlElastic {
    /** Manage elastic pools. */
    static pool: typeof azSqlElasticPool;
}
declare class azSqlFailover {
    static group: typeof _azSql.az_sql_failover_group;
}
declare class azSqlInstanceFailover {
    static group: typeof _azSql.az_sql_instance_failover_group;
}
declare class azSqlInstance {
    static failover: typeof azSqlInstanceFailover;
    static pool: typeof _azSql.az_sql_instance_pool;
}
declare class azSqlMiAd {
    static admin: typeof _azSql.az_sql_mi_ad_admin;
}
declare class azSqlMiTde {
    static key: typeof _azSql.az_sql_mi_tde_key;
}
/** Manage SQL managed instances. */
declare class azSqlMi extends _azSql.az_sql_mi {
    static ad: typeof azSqlMiAd;
    static key: typeof _azSql.az_sql_mi_key;
    static op: typeof _azSql.az_sql_mi_op;
    static tde: typeof azSqlMiTde;
}
declare class azSqlMidbLtr {
    static backup: typeof _azSql.az_sql_midb_ltr_backup;
    static policy: typeof _azSql.az_sql_midb_ltr_policy;
}
declare class azSqlMidbShortTermRetention {
    static policy: typeof _azSql.az_sql_midb_short_term_retention_policy;
}
declare class azSqlMidbShortTerm {
    static retention: typeof azSqlMidbShortTermRetention;
}
declare class azSqlMidbShort {
    static term: typeof azSqlMidbShortTerm;
}
/** Manage SQL managed instance databases. */
declare class azSqlMidb extends _azSql.az_sql_midb {
    static ltr: typeof azSqlMidbLtr;
    static short: typeof azSqlMidbShort;
}
declare class azSqlServerAd {
    static admin: typeof _azSql.az_sql_server_ad_admin;
}
declare class azSqlServerAudit {
    static policy: typeof _azSql.az_sql_server_audit_policy;
}
declare class azSqlServerConn {
    static policy: typeof _azSql.az_sql_server_conn_policy;
}
declare class azSqlServerDns {
    static alias: typeof _azSql.az_sql_server_dns_alias;
}
declare class azSqlServerFirewall {
    static rule: typeof _azSql.az_sql_server_firewall_rule;
}
declare class azSqlServerTde {
    static key: typeof _azSql.az_sql_server_tde_key;
}
declare class azSqlServerVnet {
    static rule: typeof _azSql.az_sql_server_vnet_rule;
}
/** Manage SQL servers. */
declare class azSqlServer extends _azSql.az_sql_server {
    static ad: typeof azSqlServerAd;
    static audit: typeof azSqlServerAudit;
    static conn: typeof azSqlServerConn;
    static dns: typeof azSqlServerDns;
    static firewall: typeof azSqlServerFirewall;
    static key: typeof _azSql.az_sql_server_key;
    static tde: typeof azSqlServerTde;
    static vnet: typeof azSqlServerVnet;
}
declare class azSqlVirtual {
    static cluster: typeof _azSql.az_sql_virtual_cluster;
}
declare class azSqlVmGroupAg {
    static listener: typeof _azSql.az_sql_vm_group_ag_listener;
}
/** Manage SQL virtual machine groups. */
declare class azSqlVmGroup extends _azSql.az_sql_vm_group {
    static ag: typeof azSqlVmGroupAg;
}
/** Manage SQL virtual machines. */
declare class azSqlVm extends _azSql.az_sql_vm {
    /** Manage SQL virtual machine groups. */
    static group: typeof azSqlVmGroup;
}
/** Manage Azure SQL Databases and Data Warehouses. */
declare class azSql extends _azSql.az_sql {
    /** Manage databases. */
    static db: typeof azSqlDb;
    static dw: typeof _azSql.az_sql_dw;
    static elastic: typeof azSqlElastic;
    static failover: typeof azSqlFailover;
    static instance: typeof azSqlInstance;
    /** Manage SQL managed instances. */
    static mi: typeof azSqlMi;
    /** Manage SQL managed instance databases. */
    static midb: typeof azSqlMidb;
    /** Manage SQL servers. */
    static server: typeof azSqlServer;
    static virtual: typeof azSqlVirtual;
    /** Manage SQL virtual machines. */
    static vm: typeof azSqlVm;
}
/** Manage static apps. */
declare class azStaticwebapp extends _azStaticwebapp.az_staticwebapp {
    static appsettings: typeof _azStaticwebapp.az_staticwebapp_appsettings;
    static environment: typeof _azStaticwebapp.az_staticwebapp_environment;
    static hostname: typeof _azStaticwebapp.az_staticwebapp_hostname;
    static users: typeof _azStaticwebapp.az_staticwebapp_users;
}
declare class azStorageAccountBlobService {
    static properties: typeof _azStorage.az_storage_account_blob_service_properties;
}
declare class azStorageAccountBlob {
    static service: typeof azStorageAccountBlobService;
}
declare class azStorageAccountEncryption {
    static scope: typeof _azStorage.az_storage_account_encryption_scope;
}
declare class azStorageAccountFileService {
    static properties: typeof _azStorage.az_storage_account_file_service_properties;
}
declare class azStorageAccountFile {
    static service: typeof azStorageAccountFileService;
}
declare class azStorageAccountManagement {
    static policy: typeof _azStorage.az_storage_account_management_policy;
}
declare class azStorageAccountNetwork {
    static rule: typeof _azStorage.az_storage_account_network_rule;
}
/** Manage storage account Object Replication Policy. */
declare class azStorageAccountOrPolicy extends _azStorage.az_storage_account_or_policy {
    static rule: typeof _azStorage.az_storage_account_or_policy_rule;
}
declare class azStorageAccountOr {
    /** Manage storage account Object Replication Policy. */
    static policy: typeof azStorageAccountOrPolicy;
}
declare class azStorageAccountPrivateEndpoint {
    static connection: typeof _azStorage.az_storage_account_private_endpoint_connection;
}
declare class azStorageAccountPrivateLink {
    static resource: typeof _azStorage.az_storage_account_private_link_resource;
}
declare class azStorageAccountPrivate {
    static endpoint: typeof azStorageAccountPrivateEndpoint;
    static link: typeof azStorageAccountPrivateLink;
}
/** Manage storage accounts. */
declare class azStorageAccount extends _azStorage.az_storage_account {
    static blob: typeof azStorageAccountBlob;
    static encryption: typeof azStorageAccountEncryption;
    static file: typeof azStorageAccountFile;
    static keys: typeof _azStorage.az_storage_account_keys;
    static management: typeof azStorageAccountManagement;
    static network: typeof azStorageAccountNetwork;
    static or: typeof azStorageAccountOr;
    static private: typeof azStorageAccountPrivate;
}
declare class azStorageBlobIncremental {
    static copy: typeof _azStorage.az_storage_blob_incremental_copy;
}
declare class azStorageBlobServicePropertiesDelete {
    static policy: typeof _azStorage.az_storage_blob_service_properties_delete_policy;
}
/** Manage storage blob service properties. */
declare class azStorageBlobServiceProperties extends _azStorage.az_storage_blob_service_properties {
    static delete: typeof azStorageBlobServicePropertiesDelete;
}
declare class azStorageBlobService {
    /** Manage storage blob service properties. */
    static properties: typeof azStorageBlobServiceProperties;
}
/** Manage object storage for unstructured data (blobs). */
declare class azStorageBlob extends _azStorage.az_storage_blob {
    static copy: typeof _azStorage.az_storage_blob_copy;
    static incremental: typeof azStorageBlobIncremental;
    static lease: typeof _azStorage.az_storage_blob_lease;
    static metadata: typeof _azStorage.az_storage_blob_metadata;
    static service: typeof azStorageBlobService;
}
declare class azStorageContainerImmutability {
    static policy: typeof _azStorage.az_storage_container_immutability_policy;
}
declare class azStorageContainerLegal {
    static hold: typeof _azStorage.az_storage_container_legal_hold;
}
/** Manage blob storage containers. */
declare class azStorageContainer extends _azStorage.az_storage_container {
    static immutability: typeof azStorageContainerImmutability;
    static lease: typeof _azStorage.az_storage_container_lease;
    static legal: typeof azStorageContainerLegal;
    static metadata: typeof _azStorage.az_storage_container_metadata;
    static policy: typeof _azStorage.az_storage_container_policy;
}
/** Manage file storage directories. */
declare class azStorageDirectory extends _azStorage.az_storage_directory {
    static metadata: typeof _azStorage.az_storage_directory_metadata;
}
/** Manage file shares that use the SMB 3.0 protocol. */
declare class azStorageFile extends _azStorage.az_storage_file {
    static copy: typeof _azStorage.az_storage_file_copy;
    static metadata: typeof _azStorage.az_storage_file_metadata;
}
/** Manage directories in Azure Data Lake Storage Gen2 account. */
declare class azStorageFsDirectory extends _azStorage.az_storage_fs_directory {
    static metadata: typeof _azStorage.az_storage_fs_directory_metadata;
}
/** Manage files in Azure Data Lake Storage Gen2 account. */
declare class azStorageFsFile extends _azStorage.az_storage_fs_file {
    static metadata: typeof _azStorage.az_storage_fs_file_metadata;
}
/** Manage file systems in Azure Data Lake Storage Gen2 account. */
declare class azStorageFs extends _azStorage.az_storage_fs {
    static access: typeof _azStorage.az_storage_fs_access;
    /** Manage directories in Azure Data Lake Storage Gen2 account. */
    static directory: typeof azStorageFsDirectory;
    /** Manage files in Azure Data Lake Storage Gen2 account. */
    static file: typeof azStorageFsFile;
    static metadata: typeof _azStorage.az_storage_fs_metadata;
}
/** Manage shared access policies of a storage table. */
declare class azStorageQueue extends _azStorage.az_storage_queue {
    static metadata: typeof _azStorage.az_storage_queue_metadata;
    static policy: typeof _azStorage.az_storage_queue_policy;
}
/** Manage file shares. */
declare class azStorageShare extends _azStorage.az_storage_share {
    static metadata: typeof _azStorage.az_storage_share_metadata;
    static policy: typeof _azStorage.az_storage_share_policy;
    static rm: typeof _azStorage.az_storage_share_rm;
}
/** Manage NoSQL key-value storage. */
declare class azStorageTable extends _azStorage.az_storage_table {
    static policy: typeof _azStorage.az_storage_table_policy;
}
/** Manage Azure Cloud Storage resources. */
declare class azStorage extends _azStorage.az_storage {
    /** Manage storage accounts. */
    static account: typeof azStorageAccount;
    /** Manage object storage for unstructured data (blobs). */
    static blob: typeof azStorageBlob;
    /** Manage blob storage containers. */
    static container: typeof azStorageContainer;
    static cors: typeof _azStorage.az_storage_cors;
    /** Manage file storage directories. */
    static directory: typeof azStorageDirectory;
    static entity: typeof _azStorage.az_storage_entity;
    /** Manage file shares that use the SMB 3.0 protocol. */
    static file: typeof azStorageFile;
    /** Manage file systems in Azure Data Lake Storage Gen2 account. */
    static fs: typeof azStorageFs;
    static logging: typeof _azStorage.az_storage_logging;
    static message: typeof _azStorage.az_storage_message;
    static metrics: typeof _azStorage.az_storage_metrics;
    /** Manage shared access policies of a storage table. */
    static queue: typeof azStorageQueue;
    /** Manage file shares. */
    static share: typeof azStorageShare;
    /** Manage NoSQL key-value storage. */
    static table: typeof azStorageTable;
}
/** Manage Synapse's role assignments and definitions. */
declare class azSynapseRole extends _azSynapse.az_synapse_role {
    static assignment: typeof _azSynapse.az_synapse_role_assignment;
    static definition: typeof _azSynapse.az_synapse_role_definition;
}
/** Manage Spark pools and Spark jobs. */
declare class azSynapseSpark extends _azSynapse.az_synapse_spark {
    static job: typeof _azSynapse.az_synapse_spark_job;
    static pool: typeof _azSynapse.az_synapse_spark_pool;
    static session: typeof _azSynapse.az_synapse_spark_session;
    static statement: typeof _azSynapse.az_synapse_spark_statement;
}
/** Manage SQL pools. */
declare class azSynapseSql extends _azSynapse.az_synapse_sql {
    static pool: typeof _azSynapse.az_synapse_sql_pool;
}
declare class azSynapseWorkspaceFirewall {
    static rule: typeof _azSynapse.az_synapse_workspace_firewall_rule;
}
/** Manage Synapse workspaces. */
declare class azSynapseWorkspace extends _azSynapse.az_synapse_workspace {
    static firewall: typeof azSynapseWorkspaceFirewall;
}
/** Manage and operate Synapse Workspace, Spark Pool, SQL Pool. */
declare class azSynapse extends _azSynapse.az_synapse {
    /** Manage Synapse's role assignments and definitions. */
    static role: typeof azSynapseRole;
    /** Manage Spark pools and Spark jobs. */
    static spark: typeof azSynapseSpark;
    /** Manage SQL pools. */
    static sql: typeof azSynapseSql;
    /** Manage Synapse workspaces. */
    static workspace: typeof azSynapseWorkspace;
}
declare class azVmAvailability {
    static set: typeof _azVm.az_vm_availability_set;
}
declare class azVmBoot {
    static diagnostics: typeof _azVm.az_vm_boot_diagnostics;
}
/** Manage extensions on VMs. */
declare class azVmExtension extends _azVm.az_vm_extension {
    static image: typeof _azVm.az_vm_extension_image;
}
/** Manage Dedicated Hosts for Virtual Machines. */
declare class azVmHost extends _azVm.az_vm_host {
    static group: typeof _azVm.az_vm_host_group;
}
/** Information on available virtual machine images. */
declare class azVmImage extends _azVm.az_vm_image {
    static terms: typeof _azVm.az_vm_image_terms;
}
/** Manage monitor aspect for a vm. */
declare class azVmMonitor extends _azVm.az_vm_monitor {
    static log: typeof _azVm.az_vm_monitor_log;
    static metrics: typeof _azVm.az_vm_monitor_metrics;
}
declare class azVmRun {
    static command: typeof _azVm.az_vm_run_command;
}
declare class azVmUnmanaged {
    static disk: typeof _azVm.az_vm_unmanaged_disk;
}
/** Manage Linux or Windows virtual machines. */
declare class azVm extends _azVm.az_vm {
    static availability: typeof azVmAvailability;
    static boot: typeof azVmBoot;
    static diagnostics: typeof _azVm.az_vm_diagnostics;
    static disk: typeof _azVm.az_vm_disk;
    static encryption: typeof _azVm.az_vm_encryption;
    /** Manage extensions on VMs. */
    static extension: typeof azVmExtension;
    /** Manage Dedicated Hosts for Virtual Machines. */
    static host: typeof azVmHost;
    static identity: typeof _azVm.az_vm_identity;
    /** Information on available virtual machine images. */
    static image: typeof azVmImage;
    /** Manage monitor aspect for a vm. */
    static monitor: typeof azVmMonitor;
    static nic: typeof _azVm.az_vm_nic;
    static run: typeof azVmRun;
    static secret: typeof _azVm.az_vm_secret;
    static unmanaged: typeof azVmUnmanaged;
    static user: typeof _azVm.az_vm_user;
}
/** Manage extensions on a VM scale set. */
declare class azVmssExtension extends _azVmss.az_vmss_extension {
    static image: typeof _azVmss.az_vmss_extension_image;
}
declare class azVmssRolling {
    static upgrade: typeof _azVmss.az_vmss_rolling_upgrade;
}
declare class azVmssRun {
    static command: typeof _azVmss.az_vmss_run_command;
}
/** Manage groupings of virtual machines in an Azure Virtual Machine Scale Set (VMSS). */
declare class azVmss extends _azVmss.az_vmss {
    static diagnostics: typeof _azVmss.az_vmss_diagnostics;
    static disk: typeof _azVmss.az_vmss_disk;
    static encryption: typeof _azVmss.az_vmss_encryption;
    /** Manage extensions on a VM scale set. */
    static extension: typeof azVmssExtension;
    static identity: typeof _azVmss.az_vmss_identity;
    static nic: typeof _azVmss.az_vmss_nic;
    static rolling: typeof azVmssRolling;
    static run: typeof azVmssRun;
}
declare class azWebappConfigAccess {
    static restriction: typeof _azWebapp.az_webapp_config_access_restriction;
}
declare class azWebappConfigConnection {
    static string: typeof _azWebapp.az_webapp_config_connection_string;
}
declare class azWebappConfigStorage {
    static account: typeof _azWebapp.az_webapp_config_storage_account;
}
/** Configure a web app. */
declare class azWebappConfig extends _azWebapp.az_webapp_config {
    static access: typeof azWebappConfigAccess;
    static appsettings: typeof _azWebapp.az_webapp_config_appsettings;
    static backup: typeof _azWebapp.az_webapp_config_backup;
    static connection: typeof azWebappConfigConnection;
    static container: typeof _azWebapp.az_webapp_config_container;
    static hostname: typeof _azWebapp.az_webapp_config_hostname;
    static snapshot: typeof _azWebapp.az_webapp_config_snapshot;
    static ssl: typeof _azWebapp.az_webapp_config_ssl;
    static storage: typeof azWebappConfigStorage;
}
/** Manage web app deployments. */
declare class azWebappDeployment extends _azWebapp.az_webapp_deployment {
    static container: typeof _azWebapp.az_webapp_deployment_container;
    static slot: typeof _azWebapp.az_webapp_deployment_slot;
    static source: typeof _azWebapp.az_webapp_deployment_source;
    static user: typeof _azWebapp.az_webapp_deployment_user;
}
declare class azWebappHybrid {
    static connection: typeof _azWebapp.az_webapp_hybrid_connection;
}
/** Manage web app logs. */
declare class azWebappLog extends _azWebapp.az_webapp_log {
    static deployment: typeof _azWebapp.az_webapp_log_deployment;
}
declare class azWebappTraffic {
    static routing: typeof _azWebapp.az_webapp_traffic_routing;
}
declare class azWebappVnet {
    static integration: typeof _azWebapp.az_webapp_vnet_integration;
}
/** Allows management operations for webjobs on a web app. */
declare class azWebappWebjob extends _azWebapp.az_webapp_webjob {
    static continuous: typeof _azWebapp.az_webapp_webjob_continuous;
    static triggered: typeof _azWebapp.az_webapp_webjob_triggered;
}
/** Manage web apps. */
declare class azWebapp extends _azWebapp.az_webapp {
    static auth: typeof _azWebapp.az_webapp_auth;
    /** Configure a web app. */
    static config: typeof azWebappConfig;
    static cors: typeof _azWebapp.az_webapp_cors;
    static deleted: typeof _azWebapp.az_webapp_deleted;
    /** Manage web app deployments. */
    static deployment: typeof azWebappDeployment;
    static hybrid: typeof azWebappHybrid;
    static identity: typeof _azWebapp.az_webapp_identity;
    /** Manage web app logs. */
    static log: typeof azWebappLog;
    static traffic: typeof azWebappTraffic;
    static vnet: typeof azWebappVnet;
    /** Allows management operations for webjobs on a web app. */
    static webjob: typeof azWebappWebjob;
}
/** */
export declare class az extends _az.az {
    /** Manage Azure subscription information. */
    static account: typeof azAccount;
    /** Manage private registries with Azure Container Registries. */
    static acr: typeof azAcr;
    /** Manage Azure Container Services. */
    static acs: typeof azAcs;
    /** Manage Azure Active Directory Graph entities needed for Role Based Access Control. */
    static ad: typeof azAd;
    /** Manage Azure Advisor. */
    static advisor: typeof azAdvisor;
    /** Manage Azure Kubernetes Services. */
    static aks: typeof azAks;
    /** Manage Azure Media Services resources. */
    static ams: typeof azAms;
    /** Manage Azure API Management services. */
    static apim: typeof azApim;
    /** Manage App Configurations. */
    static appconfig: typeof azAppconfig;
    /** Manage App Service plans. */
    static appservice: typeof azAppservice;
    static aro: typeof _azAro.az_aro;
    /** Manage Azure Artifacts. */
    static artifacts: typeof azArtifacts;
    /** Manage Azure Backups. */
    static backup: typeof azBackup;
    /** Manage Azure Batch. */
    static batch: typeof azBatch;
    /** Manage Batch AI resources. */
    static batchai: typeof azBatchai;
    /** Manage Azure Billing. */
    static billing: typeof azBilling;
    /** Manage Azure Boards. */
    static boards: typeof azBoards;
    /** Manage Microsoft Azure Bot Service. */
    static bot: typeof azBot;
    static cache: typeof _azCache.az_cache;
    /** Manage Azure Content Delivery Networks (CDNs). */
    static cdn: typeof azCdn;
    static cloud: typeof _azCloud.az_cloud;
    /** Manage Azure Cognitive Services accounts. */
    static cognitiveservices: typeof azCognitiveservices;
    /** Manage Azure CLI configuration. */
    static config: typeof azConfig;
    /** Manage consumption of Azure resources. */
    static consumption: typeof azConsumption;
    static container: typeof _azContainer.az_container;
    /** Manage Azure Cosmos DB database accounts. */
    static cosmosdb: typeof azCosmosdb;
    /** Manage Azure Resource Manager template deployment at subscription scope. */
    static deployment: typeof azDeployment;
    /** Create and manage rollouts for your service. */
    static deploymentmanager: typeof azDeploymentmanager;
    /** Manage Azure DevOps organization level operations. */
    static devops: typeof azDevops;
    /** Manage Azure Managed Disks. */
    static disk: typeof azDisk;
    /** Manage Data Lake Analytics accounts, jobs, and catalogs. */
    static dla: typeof azDla;
    /** Manage Data Lake Store accounts and filesystems. */
    static dls: typeof azDls;
    /** Manage Azure Data Migration Service (DMS) instances. */
    static dms: typeof azDms;
    /** Manage Azure Event Grid topics, domains, domain topics, system topics partner topics, event subscriptions, system topic event subscriptions and partner topic event subscriptions. */
    static eventgrid: typeof azEventgrid;
    /** Manage Azure Event Hubs namespaces, eventhubs, consumergroups and geo recovery configurations - Alias. */
    static eventhubs: typeof azEventhubs;
    static extension: typeof _azExtension.az_extension;
    static feature: typeof _azFeature.az_feature;
    /** Manage function apps. To install the Azure Functions Core tools see <a href="https://github.com/Azure/azure-functions-core-tools">https://github.com/Azure/azure-functions-core-tools</a>. */
    static functionapp: typeof azFunctionapp;
    /** Manage resource groups and template deployments. */
    static group: typeof azGroup;
    /** Manage HDInsight resources. */
    static hdinsight: typeof azHdinsight;
    static identity: typeof _azIdentity.az_identity;
    /** Manage custom virtual machine images. */
    static image: typeof azImage;
    /** Manage Internet of Things (IoT) assets. */
    static iot: typeof azIot;
    /** Manage IoT Central assets. */
    static iotcentral: typeof azIotcentral;
    /** Manage KeyVault keys, secrets, and certificates. */
    static keyvault: typeof azKeyvault;
    /** Manage Azure Kusto resources. */
    static kusto: typeof azKusto;
    /** Manage Azure DevTest Labs. */
    static lab: typeof azLab;
    static local: typeof azLocal;
    static lock: typeof _azLock.az_lock;
    /** Manage template solutions provided and maintained by Independent Software Vendors (ISVs). */
    static managedapp: typeof azManagedapp;
    /** Manage the registration assignments and definitions in Azure. */
    static managedservices: typeof azManagedservices;
    /** Manage Azure Maps. */
    static maps: typeof azMaps;
    /** Manage Azure Database for MariaDB servers. */
    static mariadb: typeof azMariadb;
    /** Manage the Azure Monitor Service. */
    static monitor: typeof azMonitor;
    /** Manage Azure Database for MySQL servers. */
    static mysql: typeof azMysql;
    /** Manage Azure NetApp Files (ANF) Resources. */
    static netappfiles: typeof azNetappfiles;
    /** Manage Azure Network resources. */
    static network: typeof azNetwork;
    /** Manage Azure Red Hat OpenShift Services. */
    static openshift: typeof azOpenshift;
    /** Manage Azure Pipelines. */
    static pipelines: typeof azPipelines;
    /** Manage resource policies. */
    static policy: typeof azPolicy;
    /** Manage Azure Database for PostgreSQL servers. */
    static postgres: typeof azPostgres;
    static ppg: typeof _azPpg.az_ppg;
    /** Manage resource providers. */
    static provider: typeof azProvider;
    /** Manage dedicated Redis caches for your Azure applications. */
    static redis: typeof azRedis;
    /** Manage Azure Relay Service namespaces, WCF relays, hybrid connections, and rules. */
    static relay: typeof azRelay;
    /** Manage Azure Repos. */
    static repos: typeof azRepos;
    /** Manage Azure Reservations. */
    static reservations: typeof azReservations;
    /** Manage Azure resources. */
    static resource: typeof azResource;
    /** Manage user roles for access control with Azure Active Directory and service principals. */
    static role: typeof azRole;
    /** Manage Azure Search services, admin keys and query keys. */
    static search: typeof azSearch;
    /** Manage your security posture with Azure Security Center. */
    static security: typeof azSecurity;
    /** Manage Azure Service Bus namespaces, queues, topics, subscriptions, rules and geo-disaster recovery configuration alias. */
    static servicebus: typeof azServicebus;
    /** Manage and administer Azure Service Fabric clusters. */
    static sf: typeof azSf;
    /** Manage shared image gallery. */
    static sig: typeof azSig;
    /** Manage Azure SignalR Service. */
    static signalr: typeof azSignalr;
    static snapshot: typeof _azSnapshot.az_snapshot;
    /** Manage Azure SQL Databases and Data Warehouses. */
    static sql: typeof azSql;
    /** Manage static apps. */
    static staticwebapp: typeof azStaticwebapp;
    /** Manage Azure Cloud Storage resources. */
    static storage: typeof azStorage;
    /** Manage and operate Synapse Workspace, Spark Pool, SQL Pool. */
    static synapse: typeof azSynapse;
    static tag: typeof _azTag.az_tag;
    /** Manage Linux or Windows virtual machines. */
    static vm: typeof azVm;
    /** Manage groupings of virtual machines in an Azure Virtual Machine Scale Set (VMSS). */
    static vmss: typeof azVmss;
    /** Manage web apps. */
    static webapp: typeof azWebapp;
}
export {};
