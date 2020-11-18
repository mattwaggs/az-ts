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
import * as _azTs from './src/az_ts';
import * as _azVm from './src/az_vm';
import * as _azVmss from './src/az_vmss';
import * as _azWebapp from './src/az_webapp';

/** Manage Azure Management Groups. */
class azAccountManagementGroup extends _azAccount.az_account_management_group {
    static subscription = _azAccount.az_account_management_group_subscription;
}

class azAccountManagement {
    /** Manage Azure Management Groups. */
    static group = azAccountManagementGroup;
}

/** Manage Azure subscription information. */
class azAccount extends _azAccount.az_account {
    static lock = _azAccount.az_account_lock;
    static management = azAccountManagement;
}

class azAcrConfigContent {
    static trust = _azAcr.az_acr_config_content_trust;
}

/** Configure policies for Azure Container Registries. */
class azAcrConfig extends _azAcr.az_acr_config {
    static content = azAcrConfigContent;
    static retention = _azAcr.az_acr_config_retention;
}

/** Manage helm charts for Azure Container Registries. */
class azAcrHelm extends _azAcr.az_acr_helm {
    static repo = _azAcr.az_acr_helm_repo;
}

class azAcrNetwork {
    static rule = _azAcr.az_acr_network_rule;
}

class azAcrPrivateEndpoint {
    static connection = _azAcr.az_acr_private_endpoint_connection;
}

class azAcrPrivateLink {
    static resource = _azAcr.az_acr_private_link_resource;
}

class azAcrPrivate {
    static endpoint = azAcrPrivateEndpoint;
    static link = azAcrPrivateLink;
}

class azAcrScope {
    static map = _azAcr.az_acr_scope_map;
}

/** Manage a collection of steps for building, testing and OS & Framework patching container images using Azure Container Registries. */
class azAcrTask extends _azAcr.az_acr_task {
    static credential = _azAcr.az_acr_task_credential;
    static identity = _azAcr.az_acr_task_identity;
    static timer = _azAcr.az_acr_task_timer;
}

/** Manage tokens for an Azure Container Registry. */
class azAcrToken extends _azAcr.az_acr_token {
    static credential = _azAcr.az_acr_token_credential;
}

/** Manage private registries with Azure Container Registries. */
class azAcr extends _azAcr.az_acr {
    static agentpool = _azAcr.az_acr_agentpool;
    /** Configure policies for Azure Container Registries. */
    static config = azAcrConfig;
    static credential = _azAcr.az_acr_credential;
    static encryption = _azAcr.az_acr_encryption;
    /** Manage helm charts for Azure Container Registries. */
    static helm = azAcrHelm;
    static identity = _azAcr.az_acr_identity;
    static network = azAcrNetwork;
    static pack = _azAcr.az_acr_pack;
    static private = azAcrPrivate;
    static replication = _azAcr.az_acr_replication;
    static repository = _azAcr.az_acr_repository;
    static scope = azAcrScope;
    /** Manage a collection of steps for building, testing and OS & Framework patching container images using Azure Container Registries. */
    static task = azAcrTask;
    static taskrun = _azAcr.az_acr_taskrun;
    /** Manage tokens for an Azure Container Registry. */
    static token = azAcrToken;
    static webhook = _azAcr.az_acr_webhook;
}

/** Manage Azure Container Services. */
class azAcs extends _azAcs.az_acs {
    static dcos = _azAcs.az_acs_dcos;
    static kubernetes = _azAcs.az_acs_kubernetes;
}

/** Manage applications with AAD Graph. */
class azAdApp extends _azAd.az_ad_app {
    static credential = _azAd.az_ad_app_credential;
    static owner = _azAd.az_ad_app_owner;
    static permission = _azAd.az_ad_app_permission;
}

/** Manage Azure Active Directory groups. */
class azAdGroup extends _azAd.az_ad_group {
    static member = _azAd.az_ad_group_member;
    static owner = _azAd.az_ad_group_owner;
}

class azAdSignedIn {
    static user = _azAd.az_ad_signed_in_user;
}

class azAdSigned {
    static in = azAdSignedIn;
}

/** Manage Azure Active Directory service principals for automation authentication. */
class azAdSp extends _azAd.az_ad_sp {
    static credential = _azAd.az_ad_sp_credential;
    static owner = _azAd.az_ad_sp_owner;
}

/** Manage Azure Active Directory Graph entities needed for Role Based Access Control. */
class azAd extends _azAd.az_ad {
    /** Manage applications with AAD Graph. */
    static app = azAdApp;
    /** Manage Azure Active Directory groups. */
    static group = azAdGroup;
    static signed = azAdSigned;
    /** Manage Azure Active Directory service principals for automation authentication. */
    static sp = azAdSp;
    static user = _azAd.az_ad_user;
}

/** Manage Azure Advisor. */
class azAdvisor extends _azAdvisor.az_advisor {
    static configuration = _azAdvisor.az_advisor_configuration;
    static recommendation = _azAdvisor.az_advisor_recommendation;
}

/** Manage Azure Kubernetes Services. */
class azAks extends _azAks.az_aks {
    static nodepool = _azAks.az_aks_nodepool;
}

/** Manage Azure Media Services accounts. */
class azAmsAccount extends _azAms.az_ams_account {
    static filter = _azAms.az_ams_account_filter;
    static mru = _azAms.az_ams_account_mru;
    static sp = _azAms.az_ams_account_sp;
    static storage = _azAms.az_ams_account_storage;
}

/** Manage assets for an Azure Media Services account. */
class azAmsAsset extends _azAms.az_ams_asset {
    static filter = _azAms.az_ams_asset_filter;
}

/** Manage content key policies for an Azure Media Services account. */
class azAmsContentKeyPolicy extends _azAms.az_ams_content_key_policy {
    static option = _azAms.az_ams_content_key_policy_option;
}

class azAmsContentKey {
    /** Manage content key policies for an Azure Media Services account. */
    static policy = azAmsContentKeyPolicy;
}

class azAmsContent {
    static key = azAmsContentKey;
}

class azAmsLive {
    static event = _azAms.az_ams_live_event;
    static output = _azAms.az_ams_live_output;
}

/** Manage streaming endpoints for an Azure Media Service account. */
class azAmsStreamingEndpoint extends _azAms.az_ams_streaming_endpoint {
    static akamai = _azAms.az_ams_streaming_endpoint_akamai;
}

class azAmsStreaming {
    /** Manage streaming endpoints for an Azure Media Service account. */
    static endpoint = azAmsStreamingEndpoint;
    static locator = _azAms.az_ams_streaming_locator;
    static policy = _azAms.az_ams_streaming_policy;
}

/** Manage transforms for an Azure Media Services account. */
class azAmsTransform extends _azAms.az_ams_transform {
    static output = _azAms.az_ams_transform_output;
}

/** Manage Azure Media Services resources. */
class azAms extends _azAms.az_ams {
    /** Manage Azure Media Services accounts. */
    static account = azAmsAccount;
    /** Manage assets for an Azure Media Services account. */
    static asset = azAmsAsset;
    static content = azAmsContent;
    static job = _azAms.az_ams_job;
    static live = azAmsLive;
    static streaming = azAmsStreaming;
    /** Manage transforms for an Azure Media Services account. */
    static transform = azAmsTransform;
}

/** Manage Azure API Management API's. */
class azApimApi extends _azApim.az_apim_api {
    static operation = _azApim.az_apim_api_operation;
    static release = _azApim.az_apim_api_release;
    static revision = _azApim.az_apim_api_revision;
    static versionset = _azApim.az_apim_api_versionset;
}

/** Manage Azure API Management Product's. */
class azApimProduct extends _azApim.az_apim_product {
    static api = _azApim.az_apim_product_api;
}

/** Manage Azure API Management services. */
class azApim extends _azApim.az_apim {
    /** Manage Azure API Management API's. */
    static api = azApimApi;
    static nv = _azApim.az_apim_nv;
    /** Manage Azure API Management Product's. */
    static product = azApimProduct;
}

/** Manage feature flags stored in an App Configuration. */
class azAppconfigFeature extends _azAppconfig.az_appconfig_feature {
    static filter = _azAppconfig.az_appconfig_feature_filter;
}

/** Manage App Configurations. */
class azAppconfig extends _azAppconfig.az_appconfig {
    static credential = _azAppconfig.az_appconfig_credential;
    /** Manage feature flags stored in an App Configuration. */
    static feature = azAppconfigFeature;
    static identity = _azAppconfig.az_appconfig_identity;
    static kv = _azAppconfig.az_appconfig_kv;
    static revision = _azAppconfig.az_appconfig_revision;
}

class azAppserviceHybrid {
    static connection = _azAppservice.az_appservice_hybrid_connection;
}

class azAppserviceVnet {
    static integration = _azAppservice.az_appservice_vnet_integration;
}

/** Manage App Service plans. */
class azAppservice extends _azAppservice.az_appservice {
    static ase = _azAppservice.az_appservice_ase;
    static domain = _azAppservice.az_appservice_domain;
    static hybrid = azAppserviceHybrid;
    static plan = _azAppservice.az_appservice_plan;
    static vnet = azAppserviceVnet;
}

/** Manage Azure Artifacts. */
class azArtifacts extends _azArtifacts.az_artifacts {
    static universal = _azArtifacts.az_artifacts_universal;
}

class azBackupProtectable {
    static item = _azBackup.az_backup_protectable_item;
}

/** Restore backed up items from recovery points in a Recovery Services vault. */
class azBackupRestore extends _azBackup.az_backup_restore {
    static files = _azBackup.az_backup_restore_files;
}

class azBackupVaultBackup {
    static properties = _azBackup.az_backup_vault_backup_properties;
}

/** Online storage entity in Azure used to hold data such as backup copies, recovery points and backup policies. */
class azBackupVault extends _azBackup.az_backup_vault {
    static backup = azBackupVaultBackup;
}

/** Manage Azure Backups. */
class azBackup extends _azBackup.az_backup {
    static container = _azBackup.az_backup_container;
    static item = _azBackup.az_backup_item;
    static job = _azBackup.az_backup_job;
    static policy = _azBackup.az_backup_policy;
    static protectable = azBackupProtectable;
    static protection = _azBackup.az_backup_protection;
    static recoveryconfig = _azBackup.az_backup_recoveryconfig;
    static recoverypoint = _azBackup.az_backup_recoverypoint;
    /** Restore backed up items from recovery points in a Recovery Services vault. */
    static restore = azBackupRestore;
    /** Online storage entity in Azure used to hold data such as backup copies, recovery points and backup policies. */
    static vault = azBackupVault;
}

class azBatchAccountAutostorage {
    static keys = _azBatch.az_batch_account_autostorage_keys;
}

/** Manage Azure Batch accounts. */
class azBatchAccount extends _azBatch.az_batch_account {
    static autostorage = azBatchAccountAutostorage;
    static keys = _azBatch.az_batch_account_keys;
}

/** Manage Batch applications. */
class azBatchApplication extends _azBatch.az_batch_application {
    static package = _azBatch.az_batch_application_package;
    static summary = _azBatch.az_batch_application_summary;
}

class azBatchJobAll {
    static statistics = _azBatch.az_batch_job_all_statistics;
}

class azBatchJobPrepRelease {
    static status = _azBatch.az_batch_job_prep_release_status;
}

class azBatchJobPrep {
    static release = azBatchJobPrepRelease;
}

class azBatchJobTask {
    static counts = _azBatch.az_batch_job_task_counts;
}

/** Manage Batch jobs. */
class azBatchJob extends _azBatch.az_batch_job {
    static all = azBatchJobAll;
    static prep = azBatchJobPrep;
    static schedule = _azBatch.az_batch_job_schedule;
    static task = azBatchJobTask;
}

/** Manage Batch service options for a subscription at the region level. */
class azBatchLocation extends _azBatch.az_batch_location {
    static quotas = _azBatch.az_batch_location_quotas;
}

class azBatchNodeRemoteLogin {
    static settings = _azBatch.az_batch_node_remote_login_settings;
}

class azBatchNodeRemote {
    static desktop = _azBatch.az_batch_node_remote_desktop;
    static login = azBatchNodeRemoteLogin;
}

class azBatchNodeService {
    static logs = _azBatch.az_batch_node_service_logs;
}

/** Manage Batch compute nodes. */
class azBatchNode extends _azBatch.az_batch_node {
    static file = _azBatch.az_batch_node_file;
    static remote = azBatchNodeRemote;
    static scheduling = _azBatch.az_batch_node_scheduling;
    static service = azBatchNodeService;
    static user = _azBatch.az_batch_node_user;
}

class azBatchPoolAll {
    static statistics = _azBatch.az_batch_pool_all_statistics;
}

class azBatchPoolNode {
    static counts = _azBatch.az_batch_pool_node_counts;
}

class azBatchPoolSupported {
    static images = _azBatch.az_batch_pool_supported_images;
}

class azBatchPoolUsage {
    static metrics = _azBatch.az_batch_pool_usage_metrics;
}

/** Manage Batch pools. */
class azBatchPool extends _azBatch.az_batch_pool {
    static all = azBatchPoolAll;
    static autoscale = _azBatch.az_batch_pool_autoscale;
    static node = azBatchPoolNode;
    static supported = azBatchPoolSupported;
    static usage = azBatchPoolUsage;
}

/** Manage Batch tasks. */
class azBatchTask extends _azBatch.az_batch_task {
    static file = _azBatch.az_batch_task_file;
    static subtask = _azBatch.az_batch_task_subtask;
}

/** Manage Azure Batch. */
class azBatch extends _azBatch.az_batch {
    /** Manage Azure Batch accounts. */
    static account = azBatchAccount;
    /** Manage Batch applications. */
    static application = azBatchApplication;
    static certificate = _azBatch.az_batch_certificate;
    /** Manage Batch jobs. */
    static job = azBatchJob;
    /** Manage Batch service options for a subscription at the region level. */
    static location = azBatchLocation;
    /** Manage Batch compute nodes. */
    static node = azBatchNode;
    /** Manage Batch pools. */
    static pool = azBatchPool;
    /** Manage Batch tasks. */
    static task = azBatchTask;
}

/** Commands to manage clusters. */
class azBatchaiCluster extends _azBatchai.az_batchai_cluster {
    static file = _azBatchai.az_batchai_cluster_file;
    static node = _azBatchai.az_batchai_cluster_node;
}

class azBatchaiFile {
    static server = _azBatchai.az_batchai_file_server;
}

/** Commands to manage jobs. */
class azBatchaiJob extends _azBatchai.az_batchai_job {
    static file = _azBatchai.az_batchai_job_file;
    static node = _azBatchai.az_batchai_job_node;
}

/** Manage Batch AI resources. */
class azBatchai extends _azBatchai.az_batchai {
    /** Commands to manage clusters. */
    static cluster = azBatchaiCluster;
    static experiment = _azBatchai.az_batchai_experiment;
    static file = azBatchaiFile;
    /** Commands to manage jobs. */
    static job = azBatchaiJob;
    static workspace = _azBatchai.az_batchai_workspace;
}

class azBillingEnrollment {
    static account = _azBilling.az_billing_enrollment_account;
}

/** Get billing invoices for a subscription. */
class azBillingInvoice extends _azBilling.az_billing_invoice {
    static section = _azBilling.az_billing_invoice_section;
}

class azBillingRole {
    static assignment = _azBilling.az_billing_role_assignment;
    static definition = _azBilling.az_billing_role_definition;
}

/** Manage Azure Billing. */
class azBilling extends _azBilling.az_billing {
    static account = _azBilling.az_billing_account;
    static agreement = _azBilling.az_billing_agreement;
    static balance = _azBilling.az_billing_balance;
    static customer = _azBilling.az_billing_customer;
    static enrollment = azBillingEnrollment;
    static instruction = _azBilling.az_billing_instruction;
    /** Get billing invoices for a subscription. */
    static invoice = azBillingInvoice;
    static period = _azBilling.az_billing_period;
    static permission = _azBilling.az_billing_permission;
    static policy = _azBilling.az_billing_policy;
    static product = _azBilling.az_billing_product;
    static profile = _azBilling.az_billing_profile;
    static property = _azBilling.az_billing_property;
    static role = azBillingRole;
    static subscription = _azBilling.az_billing_subscription;
    static transaction = _azBilling.az_billing_transaction;
}

/** Manage area paths. */
class azBoardsArea extends _azBoards.az_boards_area {
    static project = _azBoards.az_boards_area_project;
    static team = _azBoards.az_boards_area_team;
}

/** Manage iterations. */
class azBoardsIteration extends _azBoards.az_boards_iteration {
    static project = _azBoards.az_boards_iteration_project;
    static team = _azBoards.az_boards_iteration_team;
}

/** Manage work items. */
class azBoardsWorkItem extends _azBoards.az_boards_work_item {
    static relation = _azBoards.az_boards_work_item_relation;
}

class azBoardsWork {
    /** Manage work items. */
    static item = azBoardsWorkItem;
}

/** Manage Azure Boards. */
class azBoards extends _azBoards.az_boards {
    /** Manage area paths. */
    static area = azBoardsArea;
    /** Manage iterations. */
    static iteration = azBoardsIteration;
    static work = azBoardsWork;
}

/** Manage Microsoft Azure Bot Service. */
class azBot extends _azBot.az_bot {
    static authsetting = _azBot.az_bot_authsetting;
    static directline = _azBot.az_bot_directline;
    static email = _azBot.az_bot_email;
    static facebook = _azBot.az_bot_facebook;
    static kik = _azBot.az_bot_kik;
    static msteams = _azBot.az_bot_msteams;
    static skype = _azBot.az_bot_skype;
    static slack = _azBot.az_bot_slack;
    static sms = _azBot.az_bot_sms;
    static telegram = _azBot.az_bot_telegram;
    static webchat = _azBot.az_bot_webchat;
}

class azCdnCustom {
    static domain = _azCdn.az_cdn_custom_domain;
}

class azCdnEdge {
    static node = _azCdn.az_cdn_edge_node;
}

/** Manage delivery rules for an endpoint. */
class azCdnEndpointRule extends _azCdn.az_cdn_endpoint_rule {
    static action = _azCdn.az_cdn_endpoint_rule_action;
    static condition = _azCdn.az_cdn_endpoint_rule_condition;
}

/** Manage WAF properties of a CDN endpoint. */
class azCdnEndpointWaf extends _azCdn.az_cdn_endpoint_waf {
    static policy = _azCdn.az_cdn_endpoint_waf_policy;
}

/** Manage CDN endpoints. */
class azCdnEndpoint extends _azCdn.az_cdn_endpoint {
    /** Manage delivery rules for an endpoint. */
    static rule = azCdnEndpointRule;
    /** Manage WAF properties of a CDN endpoint. */
    static waf = azCdnEndpointWaf;
}

class azCdnWafPolicyCustom {
    static rule = _azCdn.az_cdn_waf_policy_custom_rule;
}

class azCdnWafPolicyManagedRuleSetRuleGroup {
    static override = _azCdn.az_cdn_waf_policy_managed_rule_set_rule_group_override;
}

class azCdnWafPolicyManagedRuleSetRule {
    static group = azCdnWafPolicyManagedRuleSetRuleGroup;
}

/** Manage managed rule sets of a CDN WAF policy. */
class azCdnWafPolicyManagedRuleSet extends _azCdn.az_cdn_waf_policy_managed_rule_set {
    static rule = azCdnWafPolicyManagedRuleSetRule;
}

class azCdnWafPolicyManagedRule {
    /** Manage managed rule sets of a CDN WAF policy. */
    static set = azCdnWafPolicyManagedRuleSet;
}

class azCdnWafPolicyManaged {
    static rule = azCdnWafPolicyManagedRule;
}

class azCdnWafPolicyRateLimit {
    static rule = _azCdn.az_cdn_waf_policy_rate_limit_rule;
}

class azCdnWafPolicyRate {
    static limit = azCdnWafPolicyRateLimit;
}

/** Manage CDN WAF policies. */
class azCdnWafPolicy extends _azCdn.az_cdn_waf_policy {
    static custom = azCdnWafPolicyCustom;
    static managed = azCdnWafPolicyManaged;
    static rate = azCdnWafPolicyRate;
}

/** */
class azCdnWaf extends _azCdn.az_cdn_waf {
    /** Manage CDN WAF policies. */
    static policy = azCdnWafPolicy;
}

/** Manage Azure Content Delivery Networks (CDNs). */
class azCdn extends _azCdn.az_cdn {
    static custom = azCdnCustom;
    static edge = azCdnEdge;
    /** Manage CDN endpoints. */
    static endpoint = azCdnEndpoint;
    static origin = _azCdn.az_cdn_origin;
    static profile = _azCdn.az_cdn_profile;
    static waf = azCdnWaf;
}

class azCognitiveservicesAccountNetwork {
    static rule = _azCognitiveservices.az_cognitiveservices_account_network_rule;
}

/** Manage Azure Cognitive Services accounts. */
class azCognitiveservicesAccount extends _azCognitiveservices.az_cognitiveservices_account {
    static identity = _azCognitiveservices.az_cognitiveservices_account_identity;
    static keys = _azCognitiveservices.az_cognitiveservices_account_keys;
    static network = azCognitiveservicesAccountNetwork;
}

/** Manage Azure Cognitive Services accounts. */
class azCognitiveservices extends _azCognitiveservices.az_cognitiveservices {
    /** Manage Azure Cognitive Services accounts. */
    static account = azCognitiveservicesAccount;
}

class azConfigParam {
    static persist = _azConfig.az_config_param_persist;
}

/** Manage Azure CLI configuration. */
class azConfig extends _azConfig.az_config {
    static param = azConfigParam;
}

/** Manage reservations for Azure resources. */
class azConsumptionReservation extends _azConsumption.az_consumption_reservation {
    static detail = _azConsumption.az_consumption_reservation_detail;
    static summary = _azConsumption.az_consumption_reservation_summary;
}

/** Manage consumption of Azure resources. */
class azConsumption extends _azConsumption.az_consumption {
    static budget = _azConsumption.az_consumption_budget;
    static marketplace = _azConsumption.az_consumption_marketplace;
    static pricesheet = _azConsumption.az_consumption_pricesheet;
    /** Manage reservations for Azure resources. */
    static reservation = azConsumptionReservation;
    static usage = _azConsumption.az_consumption_usage;
}

/** Manage Azure Cosmos DB Cassandra keyspaces. */
class azCosmosdbCassandraKeyspace extends _azCosmosdb.az_cosmosdb_cassandra_keyspace {
    static throughput = _azCosmosdb.az_cosmosdb_cassandra_keyspace_throughput;
}

/** Manage Azure Cosmos DB Cassandra tables. */
class azCosmosdbCassandraTable extends _azCosmosdb.az_cosmosdb_cassandra_table {
    static throughput = _azCosmosdb.az_cosmosdb_cassandra_table_throughput;
}

/** Manage Cassandra resources of Azure Cosmos DB account. */
class azCosmosdbCassandra extends _azCosmosdb.az_cosmosdb_cassandra {
    /** Manage Azure Cosmos DB Cassandra keyspaces. */
    static keyspace = azCosmosdbCassandraKeyspace;
    /** Manage Azure Cosmos DB Cassandra tables. */
    static table = azCosmosdbCassandraTable;
}

/** Manage Azure Cosmos DB Gremlin databases. */
class azCosmosdbGremlinDatabase extends _azCosmosdb.az_cosmosdb_gremlin_database {
    static throughput = _azCosmosdb.az_cosmosdb_gremlin_database_throughput;
}

/** Manage Azure Cosmos DB Gremlin graphs. */
class azCosmosdbGremlinGraph extends _azCosmosdb.az_cosmosdb_gremlin_graph {
    static throughput = _azCosmosdb.az_cosmosdb_gremlin_graph_throughput;
}

/** Manage Gremlin resources of Azure Cosmos DB account. */
class azCosmosdbGremlin extends _azCosmosdb.az_cosmosdb_gremlin {
    /** Manage Azure Cosmos DB Gremlin databases. */
    static database = azCosmosdbGremlinDatabase;
    /** Manage Azure Cosmos DB Gremlin graphs. */
    static graph = azCosmosdbGremlinGraph;
}

/** Manage Azure Cosmos DB MongoDB collections. */
class azCosmosdbMongodbCollection extends _azCosmosdb.az_cosmosdb_mongodb_collection {
    static throughput = _azCosmosdb.az_cosmosdb_mongodb_collection_throughput;
}

/** Manage Azure Cosmos DB MongoDB databases. */
class azCosmosdbMongodbDatabase extends _azCosmosdb.az_cosmosdb_mongodb_database {
    static throughput = _azCosmosdb.az_cosmosdb_mongodb_database_throughput;
}

/** Manage MongoDB resources of Azure Cosmos DB account. */
class azCosmosdbMongodb extends _azCosmosdb.az_cosmosdb_mongodb {
    /** Manage Azure Cosmos DB MongoDB collections. */
    static collection = azCosmosdbMongodbCollection;
    /** Manage Azure Cosmos DB MongoDB databases. */
    static database = azCosmosdbMongodbDatabase;
}

class azCosmosdbNetwork {
    static rule = _azCosmosdb.az_cosmosdb_network_rule;
}

class azCosmosdbPrivateEndpoint {
    static connection = _azCosmosdb.az_cosmosdb_private_endpoint_connection;
}

class azCosmosdbPrivateLink {
    static resource = _azCosmosdb.az_cosmosdb_private_link_resource;
}

class azCosmosdbPrivate {
    static endpoint = azCosmosdbPrivateEndpoint;
    static link = azCosmosdbPrivateLink;
}

/** Manage Azure Cosmos DB SQL containers. */
class azCosmosdbSqlContainer extends _azCosmosdb.az_cosmosdb_sql_container {
    static throughput = _azCosmosdb.az_cosmosdb_sql_container_throughput;
}

/** Manage Azure Cosmos DB SQL databases. */
class azCosmosdbSqlDatabase extends _azCosmosdb.az_cosmosdb_sql_database {
    static throughput = _azCosmosdb.az_cosmosdb_sql_database_throughput;
}

class azCosmosdbSqlStored {
    static procedure = _azCosmosdb.az_cosmosdb_sql_stored_procedure;
}

class azCosmosdbSqlUserDefined {
    static function = _azCosmosdb.az_cosmosdb_sql_user_defined_function;
}

class azCosmosdbSqlUser {
    static defined = azCosmosdbSqlUserDefined;
}

/** Manage SQL resources of Azure Cosmos DB account. */
class azCosmosdbSql extends _azCosmosdb.az_cosmosdb_sql {
    /** Manage Azure Cosmos DB SQL containers. */
    static container = azCosmosdbSqlContainer;
    /** Manage Azure Cosmos DB SQL databases. */
    static database = azCosmosdbSqlDatabase;
    static stored = azCosmosdbSqlStored;
    static trigger = _azCosmosdb.az_cosmosdb_sql_trigger;
    static user = azCosmosdbSqlUser;
}

/** Manage Table resources of Azure Cosmos DB account. */
class azCosmosdbTable extends _azCosmosdb.az_cosmosdb_table {
    static throughput = _azCosmosdb.az_cosmosdb_table_throughput;
}

/** Manage Azure Cosmos DB database accounts. */
class azCosmosdb extends _azCosmosdb.az_cosmosdb {
    /** Manage Cassandra resources of Azure Cosmos DB account. */
    static cassandra = azCosmosdbCassandra;
    static collection = _azCosmosdb.az_cosmosdb_collection;
    static database = _azCosmosdb.az_cosmosdb_database;
    /** Manage Gremlin resources of Azure Cosmos DB account. */
    static gremlin = azCosmosdbGremlin;
    static keys = _azCosmosdb.az_cosmosdb_keys;
    /** Manage MongoDB resources of Azure Cosmos DB account. */
    static mongodb = azCosmosdbMongodb;
    static network = azCosmosdbNetwork;
    static private = azCosmosdbPrivate;
    /** Manage SQL resources of Azure Cosmos DB account. */
    static sql = azCosmosdbSql;
    /** Manage Table resources of Azure Cosmos DB account. */
    static table = azCosmosdbTable;
}

/** Manage deployment operations at subscription scope. */
class azDeploymentOperation extends _azDeployment.az_deployment_operation {
    static group = _azDeployment.az_deployment_operation_group;
    static mg = _azDeployment.az_deployment_operation_mg;
    static sub = _azDeployment.az_deployment_operation_sub;
    static tenant = _azDeployment.az_deployment_operation_tenant;
}

/** Manage Azure Resource Manager template deployment at subscription scope. */
class azDeployment extends _azDeployment.az_deployment {
    static group = _azDeployment.az_deployment_group;
    static mg = _azDeployment.az_deployment_mg;
    /** Manage deployment operations at subscription scope. */
    static operation = azDeploymentOperation;
    static scripts = _azDeployment.az_deployment_scripts;
    static sub = _azDeployment.az_deployment_sub;
    static tenant = _azDeployment.az_deployment_tenant;
}

class azDeploymentmanagerArtifact {
    static source = _azDeploymentmanager.az_deploymentmanager_artifact_source;
}

/** Manage the services in a service topology. */
class azDeploymentmanagerService extends _azDeploymentmanager.az_deploymentmanager_service {
    static topology = _azDeploymentmanager.az_deploymentmanager_service_topology;
    static unit = _azDeploymentmanager.az_deploymentmanager_service_unit;
}

/** Create and manage rollouts for your service. */
class azDeploymentmanager extends _azDeploymentmanager.az_deploymentmanager {
    static artifact = azDeploymentmanagerArtifact;
    static rollout = _azDeploymentmanager.az_deploymentmanager_rollout;
    /** Manage the services in a service topology. */
    static service = azDeploymentmanagerService;
    static step = _azDeploymentmanager.az_deploymentmanager_step;
}

/** Manage administration operations. */
class azDevopsAdmin extends _azDevops.az_devops_admin {
    static banner = _azDevops.az_devops_admin_banner;
}

/** Manage security groups. */
class azDevopsSecurityGroup extends _azDevops.az_devops_security_group {
    static membership = _azDevops.az_devops_security_group_membership;
}

/** Manage security permissions. */
class azDevopsSecurityPermission extends _azDevops.az_devops_security_permission {
    static namespace = _azDevops.az_devops_security_permission_namespace;
}

/** Manage security related operations. */
class azDevopsSecurity extends _azDevops.az_devops_security {
    /** Manage security groups. */
    static group = azDevopsSecurityGroup;
    /** Manage security permissions. */
    static permission = azDevopsSecurityPermission;
}

/** Manage service endpoints/connections. */
class azDevopsServiceEndpoint extends _azDevops.az_devops_service_endpoint {
    static azurerm = _azDevops.az_devops_service_endpoint_azurerm;
    static github = _azDevops.az_devops_service_endpoint_github;
}

class azDevopsService {
    /** Manage service endpoints/connections. */
    static endpoint = azDevopsServiceEndpoint;
}

/** Manage wikis. */
class azDevopsWiki extends _azDevops.az_devops_wiki {
    static page = _azDevops.az_devops_wiki_page;
}

/** Manage Azure DevOps organization level operations. */
class azDevops extends _azDevops.az_devops {
    /** Manage administration operations. */
    static admin = azDevopsAdmin;
    static extension = _azDevops.az_devops_extension;
    static project = _azDevops.az_devops_project;
    /** Manage security related operations. */
    static security = azDevopsSecurity;
    static service = azDevopsService;
    static team = _azDevops.az_devops_team;
    static user = _azDevops.az_devops_user;
    /** Manage wikis. */
    static wiki = azDevopsWiki;
}

class azDiskEncryption {
    static set = _azDisk.az_disk_encryption_set;
}

/** Manage Azure Managed Disks. */
class azDisk extends _azDisk.az_disk {
    static access = _azDisk.az_disk_access;
    static encryption = azDiskEncryption;
}

class azDlaAccountBlob {
    static storage = _azDla.az_dla_account_blob_storage;
}

class azDlaAccountCompute {
    static policy = _azDla.az_dla_account_compute_policy;
}

class azDlaAccountDataLake {
    static store = _azDla.az_dla_account_data_lake_store;
}

class azDlaAccountData {
    static lake = azDlaAccountDataLake;
}

/** Manage Data Lake Analytics accounts. */
class azDlaAccount extends _azDla.az_dla_account {
    static blob = azDlaAccountBlob;
    static compute = azDlaAccountCompute;
    static data = azDlaAccountData;
    static firewall = _azDla.az_dla_account_firewall;
}

class azDlaCatalogExternalData {
    static source = _azDla.az_dla_catalog_external_data_source;
}

class azDlaCatalogExternal {
    static data = azDlaCatalogExternalData;
}

/** Manage Data Lake Analytics catalog tables. */
class azDlaCatalogTable extends _azDla.az_dla_catalog_table {
    static partition = _azDla.az_dla_catalog_table_partition;
    static stats = _azDla.az_dla_catalog_table_stats;
    static type = _azDla.az_dla_catalog_table_type;
}

/** Manage Data Lake Analytics catalogs. */
class azDlaCatalog extends _azDla.az_dla_catalog {
    static assembly = _azDla.az_dla_catalog_assembly;
    static credential = _azDla.az_dla_catalog_credential;
    static database = _azDla.az_dla_catalog_database;
    static external = azDlaCatalogExternal;
    static package = _azDla.az_dla_catalog_package;
    static procedure = _azDla.az_dla_catalog_procedure;
    static schema = _azDla.az_dla_catalog_schema;
    /** Manage Data Lake Analytics catalog tables. */
    static table = azDlaCatalogTable;
    static tvf = _azDla.az_dla_catalog_tvf;
    static view = _azDla.az_dla_catalog_view;
}

/** Manage Data Lake Analytics jobs. */
class azDlaJob extends _azDla.az_dla_job {
    static pipeline = _azDla.az_dla_job_pipeline;
    static recurrence = _azDla.az_dla_job_recurrence;
}

/** Manage Data Lake Analytics accounts, jobs, and catalogs. */
class azDla extends _azDla.az_dla {
    /** Manage Data Lake Analytics accounts. */
    static account = azDlaAccount;
    /** Manage Data Lake Analytics catalogs. */
    static catalog = azDlaCatalog;
    /** Manage Data Lake Analytics jobs. */
    static job = azDlaJob;
}

class azDlsAccountNetwork {
    static rule = _azDls.az_dls_account_network_rule;
}

class azDlsAccountTrusted {
    static provider = _azDls.az_dls_account_trusted_provider;
}

/** Manage Data Lake Store accounts. */
class azDlsAccount extends _azDls.az_dls_account {
    static firewall = _azDls.az_dls_account_firewall;
    static network = azDlsAccountNetwork;
    static trusted = azDlsAccountTrusted;
}

/** Manage a Data Lake Store filesystem. */
class azDlsFs extends _azDls.az_dls_fs {
    static access = _azDls.az_dls_fs_access;
}

/** Manage Data Lake Store accounts and filesystems. */
class azDls extends _azDls.az_dls {
    /** Manage Data Lake Store accounts. */
    static account = azDlsAccount;
    /** Manage a Data Lake Store filesystem. */
    static fs = azDlsFs;
}

/** Manage Projects for an instance of the Data Migration Service. */
class azDmsProject extends _azDms.az_dms_project {
    static task = _azDms.az_dms_project_task;
}

/** Manage Azure Data Migration Service (DMS) instances. */
class azDms extends _azDms.az_dms {
    /** Manage Projects for an instance of the Data Migration Service. */
    static project = azDmsProject;
}

/** Manage event domains. */
class azEventgridDomain extends _azEventgrid.az_eventgrid_domain {
    static key = _azEventgrid.az_eventgrid_domain_key;
    static topic = _azEventgrid.az_eventgrid_domain_topic;
}

class azEventgridEvent {
    static subscription = _azEventgrid.az_eventgrid_event_subscription;
}

class azEventgridExtension {
    static topic = _azEventgrid.az_eventgrid_extension_topic;
}

class azEventgridPartnerNamespaceEvent {
    static channel = _azEventgrid.az_eventgrid_partner_namespace_event_channel;
}

/** Manage partner namespaces. */
class azEventgridPartnerNamespace extends _azEventgrid.az_eventgrid_partner_namespace {
    static event = azEventgridPartnerNamespaceEvent;
    static key = _azEventgrid.az_eventgrid_partner_namespace_key;
}

class azEventgridPartnerTopicEvent {
    static subscription = _azEventgrid.az_eventgrid_partner_topic_event_subscription;
}

/** Manage partner topics. */
class azEventgridPartnerTopic extends _azEventgrid.az_eventgrid_partner_topic {
    static event = azEventgridPartnerTopicEvent;
}

/** Manage partner resources. */
class azEventgridPartner extends _azEventgrid.az_eventgrid_partner {
    /** Manage partner namespaces. */
    static namespace = azEventgridPartnerNamespace;
    static registration = _azEventgrid.az_eventgrid_partner_registration;
    /** Manage partner topics. */
    static topic = azEventgridPartnerTopic;
}

class azEventgridSystemTopicEvent {
    static subscription = _azEventgrid.az_eventgrid_system_topic_event_subscription;
}

/** Manage system topics. */
class azEventgridSystemTopic extends _azEventgrid.az_eventgrid_system_topic {
    static event = azEventgridSystemTopicEvent;
}

class azEventgridSystem {
    /** Manage system topics. */
    static topic = azEventgridSystemTopic;
}

/** Manage Azure Event Grid topics. */
class azEventgridTopic extends _azEventgrid.az_eventgrid_topic {
    static key = _azEventgrid.az_eventgrid_topic_key;
    static type = _azEventgrid.az_eventgrid_topic_type;
}

/** Manage Azure Event Grid topics, domains, domain topics, system topics partner topics, event subscriptions, system topic event subscriptions and partner topic event subscriptions. */
class azEventgrid extends _azEventgrid.az_eventgrid {
    /** Manage event domains. */
    static domain = azEventgridDomain;
    static event = azEventgridEvent;
    static extension = azEventgridExtension;
    /** Manage partner resources. */
    static partner = azEventgridPartner;
    static system = azEventgridSystem;
    /** Manage Azure Event Grid topics. */
    static topic = azEventgridTopic;
}

/** Manage Azure EventHubs Clusters. */
class azEventhubsCluster extends _azEventhubs.az_eventhubs_cluster {
    static namespace = _azEventhubs.az_eventhubs_cluster_namespace;
}

/** Manage Azure Service Bus Authorizationrule for Eventhub. */
class azEventhubsEventhubAuthorizationRule extends _azEventhubs.az_eventhubs_eventhub_authorization_rule {
    static keys = _azEventhubs.az_eventhubs_eventhub_authorization_rule_keys;
}

class azEventhubsEventhubAuthorization {
    /** Manage Azure Service Bus Authorizationrule for Eventhub. */
    static rule = azEventhubsEventhubAuthorizationRule;
}

class azEventhubsEventhubConsumer {
    static group = _azEventhubs.az_eventhubs_eventhub_consumer_group;
}

/** Manage Azure EventHubs eventhub and authorization-rule. */
class azEventhubsEventhub extends _azEventhubs.az_eventhubs_eventhub {
    static authorization = azEventhubsEventhubAuthorization;
    static consumer = azEventhubsEventhubConsumer;
}

/** Manage Azure EventHubs Authorizationrule for Geo Recovery configuration Alias. */
class azEventhubsGeorecoveryAliasAuthorizationRule extends _azEventhubs.az_eventhubs_georecovery_alias_authorization_rule {
    static keys = _azEventhubs.az_eventhubs_georecovery_alias_authorization_rule_keys;
}

class azEventhubsGeorecoveryAliasAuthorization {
    /** Manage Azure EventHubs Authorizationrule for Geo Recovery configuration Alias. */
    static rule = azEventhubsGeorecoveryAliasAuthorizationRule;
}

/** Manage Azure EventHubs Geo Recovery configuration Alias. */
class azEventhubsGeorecoveryAlias extends _azEventhubs.az_eventhubs_georecovery_alias {
    static authorization = azEventhubsGeorecoveryAliasAuthorization;
}

class azEventhubsGeorecovery {
    /** Manage Azure EventHubs Geo Recovery configuration Alias. */
    static alias = azEventhubsGeorecoveryAlias;
}

/** Manage Azure EventHubs Authorizationrule for Namespace. */
class azEventhubsNamespaceAuthorizationRule extends _azEventhubs.az_eventhubs_namespace_authorization_rule {
    static keys = _azEventhubs.az_eventhubs_namespace_authorization_rule_keys;
}

class azEventhubsNamespaceAuthorization {
    /** Manage Azure EventHubs Authorizationrule for Namespace. */
    static rule = azEventhubsNamespaceAuthorizationRule;
}

class azEventhubsNamespaceNetwork {
    static rule = _azEventhubs.az_eventhubs_namespace_network_rule;
}

/** Manage Azure EventHubs namespace and Authorizationrule. */
class azEventhubsNamespace extends _azEventhubs.az_eventhubs_namespace {
    static authorization = azEventhubsNamespaceAuthorization;
    static network = azEventhubsNamespaceNetwork;
}

/** Manage Azure Event Hubs namespaces, eventhubs, consumergroups and geo recovery configurations - Alias. */
class azEventhubs extends _azEventhubs.az_eventhubs {
    /** Manage Azure EventHubs Clusters. */
    static cluster = azEventhubsCluster;
    /** Manage Azure EventHubs eventhub and authorization-rule. */
    static eventhub = azEventhubsEventhub;
    static georecovery = azEventhubsGeorecovery;
    /** Manage Azure EventHubs namespace and Authorizationrule. */
    static namespace = azEventhubsNamespace;
}

class azFunctionappConfigAccess {
    static restriction = _azFunctionapp.az_functionapp_config_access_restriction;
}

/** Configure a function app. */
class azFunctionappConfig extends _azFunctionapp.az_functionapp_config {
    static access = azFunctionappConfigAccess;
    static appsettings = _azFunctionapp.az_functionapp_config_appsettings;
    static container = _azFunctionapp.az_functionapp_config_container;
    static hostname = _azFunctionapp.az_functionapp_config_hostname;
    static ssl = _azFunctionapp.az_functionapp_config_ssl;
}

/** Manage function app deployments. */
class azFunctionappDeployment extends _azFunctionapp.az_functionapp_deployment {
    static container = _azFunctionapp.az_functionapp_deployment_container;
    static slot = _azFunctionapp.az_functionapp_deployment_slot;
    static source = _azFunctionapp.az_functionapp_deployment_source;
    static user = _azFunctionapp.az_functionapp_deployment_user;
}

class azFunctionappDevops {
    static pipeline = _azFunctionapp.az_functionapp_devops_pipeline;
}

/** Manage function app functions. */
class azFunctionappFunction extends _azFunctionapp.az_functionapp_function {
    static keys = _azFunctionapp.az_functionapp_function_keys;
}

class azFunctionappHybrid {
    static connection = _azFunctionapp.az_functionapp_hybrid_connection;
}

/** */
class azFunctionappLog extends _azFunctionapp.az_functionapp_log {
    static deployment = _azFunctionapp.az_functionapp_log_deployment;
}

class azFunctionappVnet {
    static integration = _azFunctionapp.az_functionapp_vnet_integration;
}

/** Manage function apps. To install the Azure Functions Core tools see <a href="https://github.com/Azure/azure-functions-core-tools">https://github.com/Azure/azure-functions-core-tools</a>. */
class azFunctionapp extends _azFunctionapp.az_functionapp {
    /** Configure a function app. */
    static config = azFunctionappConfig;
    static cors = _azFunctionapp.az_functionapp_cors;
    /** Manage function app deployments. */
    static deployment = azFunctionappDeployment;
    static devops = azFunctionappDevops;
    /** Manage function app functions. */
    static function = azFunctionappFunction;
    static hybrid = azFunctionappHybrid;
    static identity = _azFunctionapp.az_functionapp_identity;
    static keys = _azFunctionapp.az_functionapp_keys;
    static log = azFunctionappLog;
    static plan = _azFunctionapp.az_functionapp_plan;
    static vnet = azFunctionappVnet;
}

/** Manage Azure Resource Manager deployments. */
class azGroupDeployment extends _azGroup.az_group_deployment {
    static operation = _azGroup.az_group_deployment_operation;
}

/** Manage resource groups and template deployments. */
class azGroup extends _azGroup.az_group {
    /** Manage Azure Resource Manager deployments. */
    static deployment = azGroupDeployment;
    static lock = _azGroup.az_group_lock;
}

/** Manage HDInsight cluster's Autoscale configuration. */
class azHdinsightAutoscale extends _azHdinsight.az_hdinsight_autoscale {
    static condition = _azHdinsight.az_hdinsight_autoscale_condition;
}

class azHdinsightScript {
    static action = _azHdinsight.az_hdinsight_script_action;
}

/** Manage HDInsight resources. */
class azHdinsight extends _azHdinsight.az_hdinsight {
    static application = _azHdinsight.az_hdinsight_application;
    /** Manage HDInsight cluster's Autoscale configuration. */
    static autoscale = azHdinsightAutoscale;
    static host = _azHdinsight.az_hdinsight_host;
    static monitor = _azHdinsight.az_hdinsight_monitor;
    static script = azHdinsightScript;
}

/** Manage and build image builder templates. */
class azImageBuilder extends _azImage.az_image_builder {
    static customizer = _azImage.az_image_builder_customizer;
    static output = _azImage.az_image_builder_output;
}

/** Manage custom virtual machine images. */
class azImage extends _azImage.az_image {
    /** Manage and build image builder templates. */
    static builder = azImageBuilder;
}

/** Manage IoT Central resources. */
class azIotCentral extends _azIot.az_iot_central {
    static app = _azIot.az_iot_central_app;
}

class azIotDpsAccess {
    static policy = _azIot.az_iot_dps_access_policy;
}

class azIotDpsLinked {
    static hub = _azIot.az_iot_dps_linked_hub;
}

/** Manage Azure IoT Hub Device Provisioning Service. */
class azIotDps extends _azIot.az_iot_dps {
    static access = azIotDpsAccess;
    static certificate = _azIot.az_iot_dps_certificate;
    static linked = azIotDpsLinked;
}

class azIotHubConsumer {
    static group = _azIot.az_iot_hub_consumer_group;
}

class azIotHubMessage {
    static enrichment = _azIot.az_iot_hub_message_enrichment;
}

class azIotHubRouting {
    static endpoint = _azIot.az_iot_hub_routing_endpoint;
}

/** Manage Azure IoT hubs. */
class azIotHub extends _azIot.az_iot_hub {
    static certificate = _azIot.az_iot_hub_certificate;
    static consumer = azIotHubConsumer;
    static devicestream = _azIot.az_iot_hub_devicestream;
    static message = azIotHubMessage;
    static policy = _azIot.az_iot_hub_policy;
    static route = _azIot.az_iot_hub_route;
    static routing = azIotHubRouting;
}

/** Manage Internet of Things (IoT) assets. */
class azIot extends _azIot.az_iot {
    /** Manage IoT Central resources. */
    static central = azIotCentral;
    /** Manage Azure IoT Hub Device Provisioning Service. */
    static dps = azIotDps;
    /** Manage Azure IoT hubs. */
    static hub = azIotHub;
}

/** Manage certificate issuer information. */
class azKeyvaultCertificateIssuer extends _azKeyvault.az_keyvault_certificate_issuer {
    static admin = _azKeyvault.az_keyvault_certificate_issuer_admin;
}

/** Manage certificates. */
class azKeyvaultCertificate extends _azKeyvault.az_keyvault_certificate {
    static contact = _azKeyvault.az_keyvault_certificate_contact;
    /** Manage certificate issuer information. */
    static issuer = azKeyvaultCertificateIssuer;
    static pending = _azKeyvault.az_keyvault_certificate_pending;
}

class azKeyvaultNetwork {
    static rule = _azKeyvault.az_keyvault_network_rule;
}

class azKeyvaultPrivateEndpoint {
    static connection = _azKeyvault.az_keyvault_private_endpoint_connection;
}

class azKeyvaultPrivateLink {
    static resource = _azKeyvault.az_keyvault_private_link_resource;
}

class azKeyvaultPrivate {
    static endpoint = azKeyvaultPrivateEndpoint;
    static link = azKeyvaultPrivateLink;
}

/** Manage user roles for access control. */
class azKeyvaultRole extends _azKeyvault.az_keyvault_role {
    static assignment = _azKeyvault.az_keyvault_role_assignment;
    static definition = _azKeyvault.az_keyvault_role_definition;
}

class azKeyvaultSecurity {
    static domain = _azKeyvault.az_keyvault_security_domain;
}

class azKeyvaultStorageSas {
    static definition = _azKeyvault.az_keyvault_storage_sas_definition;
}

/** Manage storage accounts. */
class azKeyvaultStorage extends _azKeyvault.az_keyvault_storage {
    static sas = azKeyvaultStorageSas;
}

/** Manage KeyVault keys, secrets, and certificates. */
class azKeyvault extends _azKeyvault.az_keyvault {
    static backup = _azKeyvault.az_keyvault_backup;
    /** Manage certificates. */
    static certificate = azKeyvaultCertificate;
    static key = _azKeyvault.az_keyvault_key;
    static network = azKeyvaultNetwork;
    static private = azKeyvaultPrivate;
    static restore = _azKeyvault.az_keyvault_restore;
    /** Manage user roles for access control. */
    static role = azKeyvaultRole;
    static secret = _azKeyvault.az_keyvault_secret;
    static security = azKeyvaultSecurity;
    /** Manage storage accounts. */
    static storage = azKeyvaultStorage;
}

/** Manage Azure Kusto resources. */
class azKusto extends _azKusto.az_kusto {
    static cluster = _azKusto.az_kusto_cluster;
    static database = _azKusto.az_kusto_database;
}

class azLabArm {
    static template = _azLab.az_lab_arm_template;
}

/** Manage DevTest Labs artifacts. */
class azLabArtifact extends _azLab.az_lab_artifact {
    static source = _azLab.az_lab_artifact_source;
}

class azLabCustom {
    static image = _azLab.az_lab_custom_image;
}

class azLabGallery {
    static image = _azLab.az_lab_gallery_image;
}

/** Manage Azure DevTest Labs. */
class azLab extends _azLab.az_lab {
    static arm = azLabArm;
    /** Manage DevTest Labs artifacts. */
    static artifact = azLabArtifact;
    static custom = azLabCustom;
    static environment = _azLab.az_lab_environment;
    static formula = _azLab.az_lab_formula;
    static gallery = azLabGallery;
    static secret = _azLab.az_lab_secret;
    static vm = _azLab.az_lab_vm;
    static vnet = _azLab.az_lab_vnet;
}

class azLocal {
    static context = _azLocal.az_local_context;
}

/** Manage template solutions provided and maintained by Independent Software Vendors (ISVs). */
class azManagedapp extends _azManagedapp.az_managedapp {
    static definition = _azManagedapp.az_managedapp_definition;
}

/** Manage the registration assignments and definitions in Azure. */
class azManagedservices extends _azManagedservices.az_managedservices {
    static assignment = _azManagedservices.az_managedservices_assignment;
    static definition = _azManagedservices.az_managedservices_definition;
}

/** Manage Azure Maps accounts. */
class azMapsAccount extends _azMaps.az_maps_account {
    static keys = _azMaps.az_maps_account_keys;
}

/** Manage Azure Maps. */
class azMaps extends _azMaps.az_maps {
    /** Manage Azure Maps accounts. */
    static account = azMapsAccount;
}

class azMariadbServerFirewall {
    static rule = _azMariadb.az_mariadb_server_firewall_rule;
}

class azMariadbServerPrivateEndpoint {
    static connection = _azMariadb.az_mariadb_server_private_endpoint_connection;
}

class azMariadbServerPrivateLink {
    static resource = _azMariadb.az_mariadb_server_private_link_resource;
}

class azMariadbServerPrivate {
    static endpoint = azMariadbServerPrivateEndpoint;
    static link = azMariadbServerPrivateLink;
}

class azMariadbServerVnet {
    static rule = _azMariadb.az_mariadb_server_vnet_rule;
}

/** Manage MariaDB servers. */
class azMariadbServer extends _azMariadb.az_mariadb_server {
    static configuration = _azMariadb.az_mariadb_server_configuration;
    static firewall = azMariadbServerFirewall;
    static logs = _azMariadb.az_mariadb_server_logs;
    static private = azMariadbServerPrivate;
    static replica = _azMariadb.az_mariadb_server_replica;
    static vnet = azMariadbServerVnet;
}

/** Manage Azure Database for MariaDB servers. */
class azMariadb extends _azMariadb.az_mariadb {
    static db = _azMariadb.az_mariadb_db;
    /** Manage MariaDB servers. */
    static server = azMariadbServer;
}

class azMonitorAction {
    static group = _azMonitor.az_monitor_action_group;
}

class azMonitorActivityLogAlertAction {
    static group = _azMonitor.az_monitor_activity_log_alert_action_group;
}

/** Manage activity log alerts. */
class azMonitorActivityLogAlert extends _azMonitor.az_monitor_activity_log_alert {
    static action = azMonitorActivityLogAlertAction;
    static scope = _azMonitor.az_monitor_activity_log_alert_scope;
}

/** Manage activity logs. */
class azMonitorActivityLog extends _azMonitor.az_monitor_activity_log {
    /** Manage activity log alerts. */
    static alert = azMonitorActivityLogAlert;
}

class azMonitorActivity {
    /** Manage activity logs. */
    static log = azMonitorActivityLog;
}

/** Manage autoscale settings. */
class azMonitorAutoscale extends _azMonitor.az_monitor_autoscale {
    static profile = _azMonitor.az_monitor_autoscale_profile;
    static rule = _azMonitor.az_monitor_autoscale_rule;
    static settings = _azMonitor.az_monitor_autoscale_settings;
}

/** Manage service diagnostic settings. */
class azMonitorDiagnosticSettings extends _azMonitor.az_monitor_diagnostic_settings {
    static categories = _azMonitor.az_monitor_diagnostic_settings_categories;
    static subscription = _azMonitor.az_monitor_diagnostic_settings_subscription;
}

class azMonitorDiagnostic {
    /** Manage service diagnostic settings. */
    static settings = azMonitorDiagnosticSettings;
}

class azMonitorLogAnalyticsWorkspaceData {
    static export = _azMonitor.az_monitor_log_analytics_workspace_data_export;
}

class azMonitorLogAnalyticsWorkspaceLinked {
    static service = _azMonitor.az_monitor_log_analytics_workspace_linked_service;
    static storage = _azMonitor.az_monitor_log_analytics_workspace_linked_storage;
}

class azMonitorLogAnalyticsWorkspaceSaved {
    static search = _azMonitor.az_monitor_log_analytics_workspace_saved_search;
}

/** Manage Azure log analytics workspace. */
class azMonitorLogAnalyticsWorkspace extends _azMonitor.az_monitor_log_analytics_workspace {
    static data = azMonitorLogAnalyticsWorkspaceData;
    static linked = azMonitorLogAnalyticsWorkspaceLinked;
    static pack = _azMonitor.az_monitor_log_analytics_workspace_pack;
    static saved = azMonitorLogAnalyticsWorkspaceSaved;
    static table = _azMonitor.az_monitor_log_analytics_workspace_table;
}

/** Manage Azure log analytics. */
class azMonitorLogAnalytics extends _azMonitor.az_monitor_log_analytics {
    static cluster = _azMonitor.az_monitor_log_analytics_cluster;
    /** Manage Azure log analytics workspace. */
    static workspace = azMonitorLogAnalyticsWorkspace;
}

class azMonitorLog {
    /** Manage Azure log analytics. */
    static analytics = azMonitorLogAnalytics;
    static profiles = _azMonitor.az_monitor_log_profiles;
}

/** View Azure resource metrics. */
class azMonitorMetrics extends _azMonitor.az_monitor_metrics {
    static alert = _azMonitor.az_monitor_metrics_alert;
}

class azMonitorPrivateLinkScopePrivateEndpoint {
    static connection = _azMonitor.az_monitor_private_link_scope_private_endpoint_connection;
}

class azMonitorPrivateLinkScopePrivateLink {
    static resource = _azMonitor.az_monitor_private_link_scope_private_link_resource;
}

class azMonitorPrivateLinkScopePrivate {
    static endpoint = azMonitorPrivateLinkScopePrivateEndpoint;
    static link = azMonitorPrivateLinkScopePrivateLink;
}

class azMonitorPrivateLinkScopeScoped {
    static resource = _azMonitor.az_monitor_private_link_scope_scoped_resource;
}

/** Manage monitor private link scope resource. */
class azMonitorPrivateLinkScope extends _azMonitor.az_monitor_private_link_scope {
    static private = azMonitorPrivateLinkScopePrivate;
    static scoped = azMonitorPrivateLinkScopeScoped;
}

class azMonitorPrivateLink {
    /** Manage monitor private link scope resource. */
    static scope = azMonitorPrivateLinkScope;
}

class azMonitorPrivate {
    static link = azMonitorPrivateLink;
}

/** Manage the Azure Monitor Service. */
class azMonitor extends _azMonitor.az_monitor {
    static action = azMonitorAction;
    static activity = azMonitorActivity;
    static alert = _azMonitor.az_monitor_alert;
    /** Manage autoscale settings. */
    static autoscale = azMonitorAutoscale;
    static diagnostic = azMonitorDiagnostic;
    static log = azMonitorLog;
    /** View Azure resource metrics. */
    static metrics = azMonitorMetrics;
    static private = azMonitorPrivate;
}

class azMysqlFlexibleServerFirewall {
    static rule = _azMysql.az_mysql_flexible_server_firewall_rule;
}

/** Manage Azure Database for MySQL Flexible Servers. */
class azMysqlFlexibleServer extends _azMysql.az_mysql_flexible_server {
    static db = _azMysql.az_mysql_flexible_server_db;
    static firewall = azMysqlFlexibleServerFirewall;
    static parameter = _azMysql.az_mysql_flexible_server_parameter;
    static replica = _azMysql.az_mysql_flexible_server_replica;
}

class azMysqlFlexible {
    /** Manage Azure Database for MySQL Flexible Servers. */
    static server = azMysqlFlexibleServer;
}

class azMysqlServerAd {
    static admin = _azMysql.az_mysql_server_ad_admin;
}

class azMysqlServerFirewall {
    static rule = _azMysql.az_mysql_server_firewall_rule;
}

class azMysqlServerPrivateEndpoint {
    static connection = _azMysql.az_mysql_server_private_endpoint_connection;
}

class azMysqlServerPrivateLink {
    static resource = _azMysql.az_mysql_server_private_link_resource;
}

class azMysqlServerPrivate {
    static endpoint = azMysqlServerPrivateEndpoint;
    static link = azMysqlServerPrivateLink;
}

class azMysqlServerVnet {
    static rule = _azMysql.az_mysql_server_vnet_rule;
}

/** Manage MySQL servers. */
class azMysqlServer extends _azMysql.az_mysql_server {
    static ad = azMysqlServerAd;
    static configuration = _azMysql.az_mysql_server_configuration;
    static firewall = azMysqlServerFirewall;
    static key = _azMysql.az_mysql_server_key;
    static logs = _azMysql.az_mysql_server_logs;
    static private = azMysqlServerPrivate;
    static replica = _azMysql.az_mysql_server_replica;
    static vnet = azMysqlServerVnet;
}

/** Manage Azure Database for MySQL servers. */
class azMysql extends _azMysql.az_mysql {
    static db = _azMysql.az_mysql_db;
    static flexible = azMysqlFlexible;
    /** Manage MySQL servers. */
    static server = azMysqlServer;
}

/** Manage Azure NetApp Files (ANF) Account Backup Resources. */
class azNetappfilesAccountBackup extends _azNetappfiles.az_netappfiles_account_backup {
    static policy = _azNetappfiles.az_netappfiles_account_backup_policy;
}

/** Manage Azure NetApp Files (ANF) Account Resources. */
class azNetappfilesAccount extends _azNetappfiles.az_netappfiles_account {
    static ad = _azNetappfiles.az_netappfiles_account_ad;
    /** Manage Azure NetApp Files (ANF) Account Backup Resources. */
    static backup = azNetappfilesAccountBackup;
}

/** Manage Azure NetApp Files (ANF) Snapshot Resources. */
class azNetappfilesSnapshot extends _azNetappfiles.az_netappfiles_snapshot {
    static policy = _azNetappfiles.az_netappfiles_snapshot_policy;
}

class azNetappfilesVolumeExport {
    static policy = _azNetappfiles.az_netappfiles_volume_export_policy;
}

/** Manage Azure NetApp Files (ANF) Volume Resources. */
class azNetappfilesVolume extends _azNetappfiles.az_netappfiles_volume {
    static backup = _azNetappfiles.az_netappfiles_volume_backup;
    static export = azNetappfilesVolumeExport;
    static replication = _azNetappfiles.az_netappfiles_volume_replication;
}

/** Manage Azure NetApp Files (ANF) Resources. */
class azNetappfiles extends _azNetappfiles.az_netappfiles {
    /** Manage Azure NetApp Files (ANF) Account Resources. */
    static account = azNetappfilesAccount;
    static pool = _azNetappfiles.az_netappfiles_pool;
    /** Manage Azure NetApp Files (ANF) Snapshot Resources. */
    static snapshot = azNetappfilesSnapshot;
    static vault = _azNetappfiles.az_netappfiles_vault;
    /** Manage Azure NetApp Files (ANF) Volume Resources. */
    static volume = azNetappfilesVolume;
}

class azNetworkApplicationGatewayAddress {
    static pool = _azNetwork.az_network_application_gateway_address_pool;
}

class azNetworkApplicationGatewayAuth {
    static cert = _azNetwork.az_network_application_gateway_auth_cert;
}

class azNetworkApplicationGatewayFrontend {
    static ip = _azNetwork.az_network_application_gateway_frontend_ip;
    static port = _azNetwork.az_network_application_gateway_frontend_port;
}

class azNetworkApplicationGatewayHttp {
    static listener = _azNetwork.az_network_application_gateway_http_listener;
    static settings = _azNetwork.az_network_application_gateway_http_settings;
}

class azNetworkApplicationGatewayPrivateLinkIp {
    static config = _azNetwork.az_network_application_gateway_private_link_ip_config;
}

/** Manage Private Link of an Application Gateway. */
class azNetworkApplicationGatewayPrivateLink extends _azNetwork.az_network_application_gateway_private_link {
    static ip = azNetworkApplicationGatewayPrivateLinkIp;
}

class azNetworkApplicationGatewayPrivate {
    /** Manage Private Link of an Application Gateway. */
    static link = azNetworkApplicationGatewayPrivateLink;
}

class azNetworkApplicationGatewayRedirect {
    static config = _azNetwork.az_network_application_gateway_redirect_config;
}

/** Manage rewrite rules of an application gateway. */
class azNetworkApplicationGatewayRewriteRule extends _azNetwork.az_network_application_gateway_rewrite_rule {
    static condition = _azNetwork.az_network_application_gateway_rewrite_rule_condition;
    static set = _azNetwork.az_network_application_gateway_rewrite_rule_set;
}

class azNetworkApplicationGatewayRewrite {
    /** Manage rewrite rules of an application gateway. */
    static rule = azNetworkApplicationGatewayRewriteRule;
}

class azNetworkApplicationGatewayRoot {
    static cert = _azNetwork.az_network_application_gateway_root_cert;
}

/** Manage the SSL policy of an application gateway. */
class azNetworkApplicationGatewaySslPolicy extends _azNetwork.az_network_application_gateway_ssl_policy {
    static predefined = _azNetwork.az_network_application_gateway_ssl_policy_predefined;
}

class azNetworkApplicationGatewaySsl {
    static cert = _azNetwork.az_network_application_gateway_ssl_cert;
    /** Manage the SSL policy of an application gateway. */
    static policy = azNetworkApplicationGatewaySslPolicy;
}

/** Manage URL path maps of an application gateway. */
class azNetworkApplicationGatewayUrlPathMap extends _azNetwork.az_network_application_gateway_url_path_map {
    static rule = _azNetwork.az_network_application_gateway_url_path_map_rule;
}

class azNetworkApplicationGatewayUrlPath {
    /** Manage URL path maps of an application gateway. */
    static map = azNetworkApplicationGatewayUrlPathMap;
}

class azNetworkApplicationGatewayUrl {
    static path = azNetworkApplicationGatewayUrlPath;
}

class azNetworkApplicationGatewayWafPolicyCustomRuleMatch {
    static condition = _azNetwork.az_network_application_gateway_waf_policy_custom_rule_match_condition;
}

/** Manage application gateway web application firewall (WAF) policy custom rules. */
class azNetworkApplicationGatewayWafPolicyCustomRule extends _azNetwork.az_network_application_gateway_waf_policy_custom_rule {
    static match = azNetworkApplicationGatewayWafPolicyCustomRuleMatch;
}

class azNetworkApplicationGatewayWafPolicyCustom {
    /** Manage application gateway web application firewall (WAF) policy custom rules. */
    static rule = azNetworkApplicationGatewayWafPolicyCustomRule;
}

class azNetworkApplicationGatewayWafPolicyManagedRuleRule {
    static set = _azNetwork.az_network_application_gateway_waf_policy_managed_rule_rule_set;
}

/** Manage managed rules of a waf-policy. Visit: <a href="https://docs.microsoft.com/en-us/azure/web-application-firewall/afds/afds-overview">https://docs.microsoft.com/en-us/azure/web-application-firewall/afds/afds-overview</a>. */
class azNetworkApplicationGatewayWafPolicyManagedRule extends _azNetwork.az_network_application_gateway_waf_policy_managed_rule {
    static exclusion = _azNetwork.az_network_application_gateway_waf_policy_managed_rule_exclusion;
    static rule = azNetworkApplicationGatewayWafPolicyManagedRuleRule;
}

class azNetworkApplicationGatewayWafPolicyManaged {
    /** Manage managed rules of a waf-policy. Visit: <a href="https://docs.microsoft.com/en-us/azure/web-application-firewall/afds/afds-overview">https://docs.microsoft.com/en-us/azure/web-application-firewall/afds/afds-overview</a>. */
    static rule = azNetworkApplicationGatewayWafPolicyManagedRule;
}

class azNetworkApplicationGatewayWafPolicyPolicy {
    static setting = _azNetwork.az_network_application_gateway_waf_policy_policy_setting;
}

/** Manage application gateway web application firewall (WAF) policies. */
class azNetworkApplicationGatewayWafPolicy extends _azNetwork.az_network_application_gateway_waf_policy {
    static custom = azNetworkApplicationGatewayWafPolicyCustom;
    static managed = azNetworkApplicationGatewayWafPolicyManaged;
    static policy = azNetworkApplicationGatewayWafPolicyPolicy;
}

class azNetworkApplicationGatewayWaf {
    static config = _azNetwork.az_network_application_gateway_waf_config;
    /** Manage application gateway web application firewall (WAF) policies. */
    static policy = azNetworkApplicationGatewayWafPolicy;
}

/** Manage application-level routing and load balancing services. */
class azNetworkApplicationGateway extends _azNetwork.az_network_application_gateway {
    static address = azNetworkApplicationGatewayAddress;
    static auth = azNetworkApplicationGatewayAuth;
    static frontend = azNetworkApplicationGatewayFrontend;
    static http = azNetworkApplicationGatewayHttp;
    static identity = _azNetwork.az_network_application_gateway_identity;
    static private = azNetworkApplicationGatewayPrivate;
    static probe = _azNetwork.az_network_application_gateway_probe;
    static redirect = azNetworkApplicationGatewayRedirect;
    static rewrite = azNetworkApplicationGatewayRewrite;
    static root = azNetworkApplicationGatewayRoot;
    static rule = _azNetwork.az_network_application_gateway_rule;
    static ssl = azNetworkApplicationGatewaySsl;
    static url = azNetworkApplicationGatewayUrl;
    static waf = azNetworkApplicationGatewayWaf;
}

class azNetworkApplication {
    /** Manage application-level routing and load balancing services. */
    static gateway = azNetworkApplicationGateway;
}

class azNetworkDdos {
    static protection = _azNetwork.az_network_ddos_protection;
}

/** Manage DNS records and record sets. */
class azNetworkDnsRecordSet extends _azNetwork.az_network_dns_record_set {
    static a = _azNetwork.az_network_dns_record_set_a;
    static aaaa = _azNetwork.az_network_dns_record_set_aaaa;
    static caa = _azNetwork.az_network_dns_record_set_caa;
    static cname = _azNetwork.az_network_dns_record_set_cname;
    static mx = _azNetwork.az_network_dns_record_set_mx;
    static ns = _azNetwork.az_network_dns_record_set_ns;
    static ptr = _azNetwork.az_network_dns_record_set_ptr;
    static soa = _azNetwork.az_network_dns_record_set_soa;
    static srv = _azNetwork.az_network_dns_record_set_srv;
    static txt = _azNetwork.az_network_dns_record_set_txt;
}

class azNetworkDnsRecord {
    /** Manage DNS records and record sets. */
    static set = azNetworkDnsRecordSet;
}

/** Manage DNS domains in Azure. */
class azNetworkDns extends _azNetwork.az_network_dns {
    static record = azNetworkDnsRecord;
    static zone = _azNetwork.az_network_dns_zone;
}

/** Manage ExpressRoute gateways. */
class azNetworkExpressRouteGateway extends _azNetwork.az_network_express_route_gateway {
    static connection = _azNetwork.az_network_express_route_gateway_connection;
}

class azNetworkExpressRoutePeeringPeer {
    static connection = _azNetwork.az_network_express_route_peering_peer_connection;
}

/** Manage ExpressRoute peering of an ExpressRoute circuit. */
class azNetworkExpressRoutePeering extends _azNetwork.az_network_express_route_peering {
    static connection = _azNetwork.az_network_express_route_peering_connection;
    static peer = azNetworkExpressRoutePeeringPeer;
}

/** Manage ExpressRoute ports. */
class azNetworkExpressRoutePort extends _azNetwork.az_network_express_route_port {
    static identity = _azNetwork.az_network_express_route_port_identity;
    static link = _azNetwork.az_network_express_route_port_link;
    static location = _azNetwork.az_network_express_route_port_location;
}

/** Manage dedicated private network fiber connections to Azure. */
class azNetworkExpressRoute extends _azNetwork.az_network_express_route {
    static auth = _azNetwork.az_network_express_route_auth;
    /** Manage ExpressRoute gateways. */
    static gateway = azNetworkExpressRouteGateway;
    /** Manage ExpressRoute peering of an ExpressRoute circuit. */
    static peering = azNetworkExpressRoutePeering;
    /** Manage ExpressRoute ports. */
    static port = azNetworkExpressRoutePort;
}

class azNetworkExpress {
    /** Manage dedicated private network fiber connections to Azure. */
    static route = azNetworkExpressRoute;
}

/** Manage address pools of a load balancer. */
class azNetworkLbAddressPool extends _azNetwork.az_network_lb_address_pool {
    static address = _azNetwork.az_network_lb_address_pool_address;
}

class azNetworkLbAddress {
    /** Manage address pools of a load balancer. */
    static pool = azNetworkLbAddressPool;
}

class azNetworkLbFrontend {
    static ip = _azNetwork.az_network_lb_frontend_ip;
}

class azNetworkLbInboundNat {
    static pool = _azNetwork.az_network_lb_inbound_nat_pool;
    static rule = _azNetwork.az_network_lb_inbound_nat_rule;
}

class azNetworkLbInbound {
    static nat = azNetworkLbInboundNat;
}

class azNetworkLbOutbound {
    static rule = _azNetwork.az_network_lb_outbound_rule;
}

/** Manage and configure load balancers. */
class azNetworkLb extends _azNetwork.az_network_lb {
    static address = azNetworkLbAddress;
    static frontend = azNetworkLbFrontend;
    static inbound = azNetworkLbInbound;
    static outbound = azNetworkLbOutbound;
    static probe = _azNetwork.az_network_lb_probe;
    static rule = _azNetwork.az_network_lb_rule;
}

class azNetworkLocal {
    static gateway = _azNetwork.az_network_local_gateway;
}

/** Commands to manage NAT resources. */
class azNetworkNat extends _azNetwork.az_network_nat {
    static gateway = _azNetwork.az_network_nat_gateway;
}

class azNetworkNicIpConfigAddress {
    static pool = _azNetwork.az_network_nic_ip_config_address_pool;
}

class azNetworkNicIpConfigInboundNat {
    static rule = _azNetwork.az_network_nic_ip_config_inbound_nat_rule;
}

class azNetworkNicIpConfigInbound {
    static nat = azNetworkNicIpConfigInboundNat;
}

/** Manage IP configurations of a network interface. */
class azNetworkNicIpConfig extends _azNetwork.az_network_nic_ip_config {
    static address = azNetworkNicIpConfigAddress;
    static inbound = azNetworkNicIpConfigInbound;
}

class azNetworkNicIp {
    /** Manage IP configurations of a network interface. */
    static config = azNetworkNicIpConfig;
}

/** Manage network interfaces. */
class azNetworkNic extends _azNetwork.az_network_nic {
    static ip = azNetworkNicIp;
}

/** Manage Azure Network Security Groups (NSGs). */
class azNetworkNsg extends _azNetwork.az_network_nsg {
    static rule = _azNetwork.az_network_nsg_rule;
}

/** Manage Private DNS links. */
class azNetworkPrivateDnsLink extends _azNetwork.az_network_private_dns_link {
    static vnet = _azNetwork.az_network_private_dns_link_vnet;
}

/** Manage Private DNS records and record sets. */
class azNetworkPrivateDnsRecordSet extends _azNetwork.az_network_private_dns_record_set {
    static a = _azNetwork.az_network_private_dns_record_set_a;
    static aaaa = _azNetwork.az_network_private_dns_record_set_aaaa;
    static cname = _azNetwork.az_network_private_dns_record_set_cname;
    static mx = _azNetwork.az_network_private_dns_record_set_mx;
    static ptr = _azNetwork.az_network_private_dns_record_set_ptr;
    static soa = _azNetwork.az_network_private_dns_record_set_soa;
    static srv = _azNetwork.az_network_private_dns_record_set_srv;
    static txt = _azNetwork.az_network_private_dns_record_set_txt;
}

class azNetworkPrivateDnsRecord {
    /** Manage Private DNS records and record sets. */
    static set = azNetworkPrivateDnsRecordSet;
}

/** Manage Private DNS domains in Azure. */
class azNetworkPrivateDns extends _azNetwork.az_network_private_dns {
    /** Manage Private DNS links. */
    static link = azNetworkPrivateDnsLink;
    static record = azNetworkPrivateDnsRecord;
    static zone = _azNetwork.az_network_private_dns_zone;
}

class azNetworkPrivateEndpointDnsZone {
    static group = _azNetwork.az_network_private_endpoint_dns_zone_group;
}

class azNetworkPrivateEndpointDns {
    static zone = azNetworkPrivateEndpointDnsZone;
}

/** Manage private endpoints. */
class azNetworkPrivateEndpoint extends _azNetwork.az_network_private_endpoint {
    static connection = _azNetwork.az_network_private_endpoint_connection;
    static dns = azNetworkPrivateEndpointDns;
}

/** Manage private link services. */
class azNetworkPrivateLinkService extends _azNetwork.az_network_private_link_service {
    static connection = _azNetwork.az_network_private_link_service_connection;
}

class azNetworkPrivateLink {
    static resource = _azNetwork.az_network_private_link_resource;
    /** Manage private link services. */
    static service = azNetworkPrivateLinkService;
}

class azNetworkPrivate {
    /** Manage Private DNS domains in Azure. */
    static dns = azNetworkPrivateDns;
    /** Manage private endpoints. */
    static endpoint = azNetworkPrivateEndpoint;
    static link = azNetworkPrivateLink;
}

/** Manage public IP addresses. */
class azNetworkPublicIp extends _azNetwork.az_network_public_ip {
    static prefix = _azNetwork.az_network_public_ip_prefix;
}

class azNetworkPublic {
    /** Manage public IP addresses. */
    static ip = azNetworkPublicIp;
}

/** Manage route filters. */
class azNetworkRouteFilter extends _azNetwork.az_network_route_filter {
    static rule = _azNetwork.az_network_route_filter_rule;
}

/** Manage route tables. */
class azNetworkRouteTable extends _azNetwork.az_network_route_table {
    static route = _azNetwork.az_network_route_table_route;
}

class azNetworkRoute {
    /** Manage route filters. */
    static filter = azNetworkRouteFilter;
    /** Manage route tables. */
    static table = azNetworkRouteTable;
}

class azNetworkSecurityPartner {
    static provider = _azNetwork.az_network_security_partner_provider;
}

class azNetworkSecurity {
    static partner = azNetworkSecurityPartner;
}

/** Manage service endpoint policies. */
class azNetworkServiceEndpointPolicy extends _azNetwork.az_network_service_endpoint_policy {
    static definition = _azNetwork.az_network_service_endpoint_policy_definition;
}

/** Manage policies related to service endpoints. */
class azNetworkServiceEndpoint extends _azNetwork.az_network_service_endpoint {
    /** Manage service endpoint policies. */
    static policy = azNetworkServiceEndpointPolicy;
}

class azNetworkService {
    /** Manage policies related to service endpoints. */
    static endpoint = azNetworkServiceEndpoint;
}

/** Manage the routing of incoming traffic. */
class azNetworkTrafficManager extends _azNetwork.az_network_traffic_manager {
    static endpoint = _azNetwork.az_network_traffic_manager_endpoint;
    static profile = _azNetwork.az_network_traffic_manager_profile;
}

class azNetworkTraffic {
    /** Manage the routing of incoming traffic. */
    static manager = azNetworkTrafficManager;
}

/** Manage Azure Network Virtual Appliance. */
class azNetworkVirtualAppliance extends _azNetwork.az_network_virtual_appliance {
    static site = _azNetwork.az_network_virtual_appliance_site;
    static sku = _azNetwork.az_network_virtual_appliance_sku;
}

class azNetworkVirtual {
    /** Manage Azure Network Virtual Appliance. */
    static appliance = azNetworkVirtualAppliance;
}

class azNetworkVnetGatewayIpsec {
    static policy = _azNetwork.az_network_vnet_gateway_ipsec_policy;
}

class azNetworkVnetGatewayRevoked {
    static cert = _azNetwork.az_network_vnet_gateway_revoked_cert;
}

class azNetworkVnetGatewayRoot {
    static cert = _azNetwork.az_network_vnet_gateway_root_cert;
}

class azNetworkVnetGatewayVpn {
    static client = _azNetwork.az_network_vnet_gateway_vpn_client;
}

/** Use an Azure Virtual Network Gateway to establish secure, cross-premises connectivity. */
class azNetworkVnetGateway extends _azNetwork.az_network_vnet_gateway {
    static aad = _azNetwork.az_network_vnet_gateway_aad;
    static ipsec = azNetworkVnetGatewayIpsec;
    static revoked = azNetworkVnetGatewayRevoked;
    static root = azNetworkVnetGatewayRoot;
    static vpn = azNetworkVnetGatewayVpn;
}

/** Manage Azure Virtual Networks. */
class azNetworkVnet extends _azNetwork.az_network_vnet {
    /** Use an Azure Virtual Network Gateway to establish secure, cross-premises connectivity. */
    static gateway = azNetworkVnetGateway;
    static peering = _azNetwork.az_network_vnet_peering;
    static subnet = _azNetwork.az_network_vnet_subnet;
}

class azNetworkVpnConnectionIpsec {
    static policy = _azNetwork.az_network_vpn_connection_ipsec_policy;
}

class azNetworkVpnConnectionShared {
    static key = _azNetwork.az_network_vpn_connection_shared_key;
}

/** Manage VPN connections. */
class azNetworkVpnConnection extends _azNetwork.az_network_vpn_connection {
    static ipsec = azNetworkVpnConnectionIpsec;
    static shared = azNetworkVpnConnectionShared;
}

class azNetworkVpn {
    /** Manage VPN connections. */
    static connection = azNetworkVpnConnection;
}

/** Manage the virtual router. This feature supports both VirtualHub and VirtualRouter. Considering VirtualRouter is deprecated, we recommend to create VirtualRouter with --hosted-subnet instead. */
class azNetworkVrouter extends _azNetwork.az_network_vrouter {
    static peering = _azNetwork.az_network_vrouter_peering;
}

class azNetworkWatcherConnectionMonitorTest {
    static configuration = _azNetwork.az_network_watcher_connection_monitor_test_configuration;
    static group = _azNetwork.az_network_watcher_connection_monitor_test_group;
}

/** Manage connection monitoring between an Azure Virtual Machine and any IP resource. */
class azNetworkWatcherConnectionMonitor extends _azNetwork.az_network_watcher_connection_monitor {
    static endpoint = _azNetwork.az_network_watcher_connection_monitor_endpoint;
    static output = _azNetwork.az_network_watcher_connection_monitor_output;
    static test = azNetworkWatcherConnectionMonitorTest;
}

class azNetworkWatcherConnection {
    /** Manage connection monitoring between an Azure Virtual Machine and any IP resource. */
    static monitor = azNetworkWatcherConnectionMonitor;
}

class azNetworkWatcherFlow {
    static log = _azNetwork.az_network_watcher_flow_log;
}

class azNetworkWatcherPacket {
    static capture = _azNetwork.az_network_watcher_packet_capture;
}

/** Manage the Azure Network Watcher. */
class azNetworkWatcher extends _azNetwork.az_network_watcher {
    static connection = azNetworkWatcherConnection;
    static flow = azNetworkWatcherFlow;
    static packet = azNetworkWatcherPacket;
    static troubleshooting = _azNetwork.az_network_watcher_troubleshooting;
}

/** Manage Azure Network resources. */
class azNetwork extends _azNetwork.az_network {
    static application = azNetworkApplication;
    static asg = _azNetwork.az_network_asg;
    static bastion = _azNetwork.az_network_bastion;
    static ddos = azNetworkDdos;
    /** Manage DNS domains in Azure. */
    static dns = azNetworkDns;
    static express = azNetworkExpress;
    /** Manage and configure load balancers. */
    static lb = azNetworkLb;
    static local = azNetworkLocal;
    /** Commands to manage NAT resources. */
    static nat = azNetworkNat;
    /** Manage network interfaces. */
    static nic = azNetworkNic;
    /** Manage Azure Network Security Groups (NSGs). */
    static nsg = azNetworkNsg;
    static private = azNetworkPrivate;
    static profile = _azNetwork.az_network_profile;
    static public = azNetworkPublic;
    static route = azNetworkRoute;
    static security = azNetworkSecurity;
    static service = azNetworkService;
    static traffic = azNetworkTraffic;
    static virtual = azNetworkVirtual;
    /** Manage Azure Virtual Networks. */
    static vnet = azNetworkVnet;
    static vpn = azNetworkVpn;
    /** Manage the virtual router. This feature supports both VirtualHub and VirtualRouter. Considering VirtualRouter is deprecated, we recommend to create VirtualRouter with --hosted-subnet instead. */
    static vrouter = azNetworkVrouter;
    /** Manage the Azure Network Watcher. */
    static watcher = azNetworkWatcher;
}

/** Manage Azure Red Hat OpenShift 3.11 clusters. */
class azOpenshift extends _azOpenshift.az_openshift {
    static monitor = _azOpenshift.az_openshift_monitor;
}

/** Manage builds. */
class azPipelinesBuild extends _azPipelines.az_pipelines_build {
    static definition = _azPipelines.az_pipelines_build_definition;
    static tag = _azPipelines.az_pipelines_build_tag;
}

/** Manage releases. */
class azPipelinesRelease extends _azPipelines.az_pipelines_release {
    static definition = _azPipelines.az_pipelines_release_definition;
}

/** Manage pipeline runs. */
class azPipelinesRuns extends _azPipelines.az_pipelines_runs {
    static artifact = _azPipelines.az_pipelines_runs_artifact;
    static tag = _azPipelines.az_pipelines_runs_tag;
}

/** Manage variable groups. */
class azPipelinesVariableGroup extends _azPipelines.az_pipelines_variable_group {
    static variable = _azPipelines.az_pipelines_variable_group_variable;
}

/** Manage pipeline variables. */
class azPipelinesVariable extends _azPipelines.az_pipelines_variable {
    /** Manage variable groups. */
    static group = azPipelinesVariableGroup;
}

/** Manage Azure Pipelines. */
class azPipelines extends _azPipelines.az_pipelines {
    static agent = _azPipelines.az_pipelines_agent;
    /** Manage builds. */
    static build = azPipelinesBuild;
    static folder = _azPipelines.az_pipelines_folder;
    static pool = _azPipelines.az_pipelines_pool;
    static queue = _azPipelines.az_pipelines_queue;
    /** Manage releases. */
    static release = azPipelinesRelease;
    /** Manage pipeline runs. */
    static runs = azPipelinesRuns;
    /** Manage pipeline variables. */
    static variable = azPipelinesVariable;
}

/** Manage resource policy assignments. */
class azPolicyAssignment extends _azPolicy.az_policy_assignment {
    static identity = _azPolicy.az_policy_assignment_identity;
}

/** Manage resource policy remediations. */
class azPolicyRemediation extends _azPolicy.az_policy_remediation {
    static deployment = _azPolicy.az_policy_remediation_deployment;
}

class azPolicySet {
    static definition = _azPolicy.az_policy_set_definition;
}

/** Manage resource policies. */
class azPolicy extends _azPolicy.az_policy {
    /** Manage resource policy assignments. */
    static assignment = azPolicyAssignment;
    static definition = _azPolicy.az_policy_definition;
    static event = _azPolicy.az_policy_event;
    static metadata = _azPolicy.az_policy_metadata;
    /** Manage resource policy remediations. */
    static remediation = azPolicyRemediation;
    static set = azPolicySet;
    static state = _azPolicy.az_policy_state;
}

class azPostgresFlexibleServerFirewall {
    static rule = _azPostgres.az_postgres_flexible_server_firewall_rule;
}

/** Manage Azure Database for PostgreSQL Flexible Servers. */
class azPostgresFlexibleServer extends _azPostgres.az_postgres_flexible_server {
    static firewall = azPostgresFlexibleServerFirewall;
    static parameter = _azPostgres.az_postgres_flexible_server_parameter;
}

class azPostgresFlexible {
    /** Manage Azure Database for PostgreSQL Flexible Servers. */
    static server = azPostgresFlexibleServer;
}

class azPostgresServerAd {
    static admin = _azPostgres.az_postgres_server_ad_admin;
}

class azPostgresServerFirewall {
    static rule = _azPostgres.az_postgres_server_firewall_rule;
}

class azPostgresServerPrivateEndpoint {
    static connection = _azPostgres.az_postgres_server_private_endpoint_connection;
}

class azPostgresServerPrivateLink {
    static resource = _azPostgres.az_postgres_server_private_link_resource;
}

class azPostgresServerPrivate {
    static endpoint = azPostgresServerPrivateEndpoint;
    static link = azPostgresServerPrivateLink;
}

class azPostgresServerVnet {
    static rule = _azPostgres.az_postgres_server_vnet_rule;
}

/** Manage PostgreSQL servers. */
class azPostgresServer extends _azPostgres.az_postgres_server {
    static ad = azPostgresServerAd;
    static configuration = _azPostgres.az_postgres_server_configuration;
    static firewall = azPostgresServerFirewall;
    static key = _azPostgres.az_postgres_server_key;
    static logs = _azPostgres.az_postgres_server_logs;
    static private = azPostgresServerPrivate;
    static replica = _azPostgres.az_postgres_server_replica;
    static vnet = azPostgresServerVnet;
}

/** Manage Azure Database for PostgreSQL servers. */
class azPostgres extends _azPostgres.az_postgres {
    static db = _azPostgres.az_postgres_db;
    static flexible = azPostgresFlexible;
    /** Manage PostgreSQL servers. */
    static server = azPostgresServer;
}

/** Manage resource providers. */
class azProvider extends _azProvider.az_provider {
    static operation = _azProvider.az_provider_operation;
}

class azRedisFirewall {
    static rules = _azRedis.az_redis_firewall_rules;
}

class azRedisPatch {
    static schedule = _azRedis.az_redis_patch_schedule;
}

class azRedisServer {
    static link = _azRedis.az_redis_server_link;
}

/** Manage dedicated Redis caches for your Azure applications. */
class azRedis extends _azRedis.az_redis {
    static firewall = azRedisFirewall;
    static patch = azRedisPatch;
    static server = azRedisServer;
}

/** Manage Azure Relay Service Hybrid Connection Authorization Rule. */
class azRelayHycoAuthorizationRule extends _azRelay.az_relay_hyco_authorization_rule {
    static keys = _azRelay.az_relay_hyco_authorization_rule_keys;
}

class azRelayHycoAuthorization {
    /** Manage Azure Relay Service Hybrid Connection Authorization Rule. */
    static rule = azRelayHycoAuthorizationRule;
}

/** Manage Azure Relay Service Hybrid Connection and Authorization Rule. */
class azRelayHyco extends _azRelay.az_relay_hyco {
    static authorization = azRelayHycoAuthorization;
}

/** Manage Azure Relay Service Namespace Authorization Rule. */
class azRelayNamespaceAuthorizationRule extends _azRelay.az_relay_namespace_authorization_rule {
    static keys = _azRelay.az_relay_namespace_authorization_rule_keys;
}

class azRelayNamespaceAuthorization {
    /** Manage Azure Relay Service Namespace Authorization Rule. */
    static rule = azRelayNamespaceAuthorizationRule;
}

/** Manage Azure Relay Service Namespace. */
class azRelayNamespace extends _azRelay.az_relay_namespace {
    static authorization = azRelayNamespaceAuthorization;
}

/** Manage Azure Relay Service WCF Relay Authorization Rule. */
class azRelayWcfrelayAuthorizationRule extends _azRelay.az_relay_wcfrelay_authorization_rule {
    static keys = _azRelay.az_relay_wcfrelay_authorization_rule_keys;
}

class azRelayWcfrelayAuthorization {
    /** Manage Azure Relay Service WCF Relay Authorization Rule. */
    static rule = azRelayWcfrelayAuthorizationRule;
}

/** Manage Azure Relay Service WCF Relay and Authorization Rule. */
class azRelayWcfrelay extends _azRelay.az_relay_wcfrelay {
    static authorization = azRelayWcfrelayAuthorization;
}

/** Manage Azure Relay Service namespaces, WCF relays, hybrid connections, and rules. */
class azRelay extends _azRelay.az_relay {
    /** Manage Azure Relay Service Hybrid Connection and Authorization Rule. */
    static hyco = azRelayHyco;
    /** Manage Azure Relay Service Namespace. */
    static namespace = azRelayNamespace;
    /** Manage Azure Relay Service WCF Relay and Authorization Rule. */
    static wcfrelay = azRelayWcfrelay;
}

class azReposPolicyApprover {
    static count = _azRepos.az_repos_policy_approver_count;
}

class azReposPolicyCase {
    static enforcement = _azRepos.az_repos_policy_case_enforcement;
}

class azReposPolicyComment {
    static required = _azRepos.az_repos_policy_comment_required;
}

class azReposPolicyFile {
    static size = _azRepos.az_repos_policy_file_size;
}

class azReposPolicyMerge {
    static strategy = _azRepos.az_repos_policy_merge_strategy;
}

class azReposPolicyRequired {
    static reviewer = _azRepos.az_repos_policy_required_reviewer;
}

class azReposPolicyWorkItem {
    static linking = _azRepos.az_repos_policy_work_item_linking;
}

class azReposPolicyWork {
    static item = azReposPolicyWorkItem;
}

/** Manage branch policy. */
class azReposPolicy extends _azRepos.az_repos_policy {
    static approver = azReposPolicyApprover;
    static build = _azRepos.az_repos_policy_build;
    static case = azReposPolicyCase;
    static comment = azReposPolicyComment;
    static file = azReposPolicyFile;
    static merge = azReposPolicyMerge;
    static required = azReposPolicyRequired;
    static work = azReposPolicyWork;
}

class azReposPrWork {
    static item = _azRepos.az_repos_pr_work_item;
}

/** Manage pull requests. */
class azReposPr extends _azRepos.az_repos_pr {
    static policy = _azRepos.az_repos_pr_policy;
    static reviewer = _azRepos.az_repos_pr_reviewer;
    static work = azReposPrWork;
}

/** Manage Azure Repos. */
class azRepos extends _azRepos.az_repos {
    static import = _azRepos.az_repos_import;
    /** Manage branch policy. */
    static policy = azReposPolicy;
    /** Manage pull requests. */
    static pr = azReposPr;
    static ref = _azRepos.az_repos_ref;
}

/** Manage reservation order, which is container for reservations. */
class azReservationsReservationOrder extends _azReservations.az_reservations_reservation_order {
    static id = _azReservations.az_reservations_reservation_order_id;
}

/** Manage reservation entities. */
class azReservationsReservation extends _azReservations.az_reservations_reservation {
    /** Manage reservation order, which is container for reservations. */
    static order = azReservationsReservationOrder;
}

/** Manage Azure Reservations. */
class azReservations extends _azReservations.az_reservations {
    static catalog = _azReservations.az_reservations_catalog;
    /** Manage reservation entities. */
    static reservation = azReservationsReservation;
}

/** Manage Azure resources. */
class azResource extends _azResource.az_resource {
    static link = _azResource.az_resource_link;
    static lock = _azResource.az_resource_lock;
}

/** Manage user roles for access control with Azure Active Directory and service principals. */
class azRole extends _azRole.az_role {
    static assignment = _azRole.az_role_assignment;
    static definition = _azRole.az_role_definition;
}

class azSearchAdmin {
    static key = _azSearch.az_search_admin_key;
}

class azSearchQuery {
    static key = _azSearch.az_search_query_key;
}

/** Manage Azure Search services, admin keys and query keys. */
class azSearch extends _azSearch.az_search {
    static admin = azSearchAdmin;
    static query = azSearchQuery;
    static service = _azSearch.az_search_service;
}

class azSecurityAdaptiveApplication {
    static controls = _azSecurity.az_security_adaptive_application_controls;
}

class azSecurityAdaptiveNetwork {
    static hardenings = _azSecurity.az_security_adaptive_network_hardenings;
}

class azSecurityAdaptive {
    static application = azSecurityAdaptiveApplication;
    static network = azSecurityAdaptiveNetwork;
}

class azSecurityAllowed {
    static connections = _azSecurity.az_security_allowed_connections;
}

/** View your security assessment results. */
class azSecurityAssessment extends _azSecurity.az_security_assessment {
    static metadata = _azSecurity.az_security_assessment_metadata;
}

/** View and manage Advanced Threat Protection settings. */
class azSecurityAtp extends _azSecurity.az_security_atp {
    static storage = _azSecurity.az_security_atp_storage;
}

class azSecurityAutoProvisioning {
    static setting = _azSecurity.az_security_auto_provisioning_setting;
}

class azSecurityAuto {
    static provisioning = azSecurityAutoProvisioning;
}

class azSecurityDiscoveredSecurity {
    static solution = _azSecurity.az_security_discovered_security_solution;
}

class azSecurityDiscovered {
    static security = azSecurityDiscoveredSecurity;
}

class azSecurityExternalSecurity {
    static solution = _azSecurity.az_security_external_security_solution;
}

class azSecurityExternal {
    static security = azSecurityExternalSecurity;
}

class azSecurityIot {
    static alerts = _azSecurity.az_security_iot_alerts;
    static analytics = _azSecurity.az_security_iot_analytics;
    static recommendations = _azSecurity.az_security_iot_recommendations;
    static solution = _azSecurity.az_security_iot_solution;
}

class azSecurityJit {
    static policy = _azSecurity.az_security_jit_policy;
}

class azSecurityRegulatoryCompliance {
    static assessments = _azSecurity.az_security_regulatory_compliance_assessments;
    static controls = _azSecurity.az_security_regulatory_compliance_controls;
    static standards = _azSecurity.az_security_regulatory_compliance_standards;
}

class azSecurityRegulatory {
    static compliance = azSecurityRegulatoryCompliance;
}

class azSecuritySub {
    static assessment = _azSecurity.az_security_sub_assessment;
}

class azSecurityWorkspace {
    static setting = _azSecurity.az_security_workspace_setting;
}

/** Manage your security posture with Azure Security Center. */
class azSecurity extends _azSecurity.az_security {
    static adaptive = azSecurityAdaptive;
    static alert = _azSecurity.az_security_alert;
    static allowed = azSecurityAllowed;
    /** View your security assessment results. */
    static assessment = azSecurityAssessment;
    /** View and manage Advanced Threat Protection settings. */
    static atp = azSecurityAtp;
    static auto = azSecurityAuto;
    static contact = _azSecurity.az_security_contact;
    static discovered = azSecurityDiscovered;
    static external = azSecurityExternal;
    static iot = azSecurityIot;
    static jit = azSecurityJit;
    static location = _azSecurity.az_security_location;
    static pricing = _azSecurity.az_security_pricing;
    static regulatory = azSecurityRegulatory;
    static setting = _azSecurity.az_security_setting;
    static sub = azSecuritySub;
    static task = _azSecurity.az_security_task;
    static topology = _azSecurity.az_security_topology;
    static workspace = azSecurityWorkspace;
}

/** Manage Azure Service Bus Authorization Rule for Namespace with Geo-Disaster Recovery Configuration Alias. */
class azServicebusGeorecoveryAliasAuthorizationRule extends _azServicebus.az_servicebus_georecovery_alias_authorization_rule {
    static keys = _azServicebus.az_servicebus_georecovery_alias_authorization_rule_keys;
}

class azServicebusGeorecoveryAliasAuthorization {
    /** Manage Azure Service Bus Authorization Rule for Namespace with Geo-Disaster Recovery Configuration Alias. */
    static rule = azServicebusGeorecoveryAliasAuthorizationRule;
}

/** Manage Azure Service Bus Geo-Disaster Recovery Configuration Alias. */
class azServicebusGeorecoveryAlias extends _azServicebus.az_servicebus_georecovery_alias {
    static authorization = azServicebusGeorecoveryAliasAuthorization;
}

class azServicebusGeorecovery {
    /** Manage Azure Service Bus Geo-Disaster Recovery Configuration Alias. */
    static alias = azServicebusGeorecoveryAlias;
}

/** Manage Azure Service Bus Namespace Authorization Rule. */
class azServicebusNamespaceAuthorizationRule extends _azServicebus.az_servicebus_namespace_authorization_rule {
    static keys = _azServicebus.az_servicebus_namespace_authorization_rule_keys;
}

class azServicebusNamespaceAuthorization {
    /** Manage Azure Service Bus Namespace Authorization Rule. */
    static rule = azServicebusNamespaceAuthorizationRule;
}

class azServicebusNamespaceNetwork {
    static rule = _azServicebus.az_servicebus_namespace_network_rule;
}

/** Manage Azure Service Bus Namespace. */
class azServicebusNamespace extends _azServicebus.az_servicebus_namespace {
    static authorization = azServicebusNamespaceAuthorization;
    static network = azServicebusNamespaceNetwork;
}

/** Manage Azure Service Bus Queue Authorization Rule. */
class azServicebusQueueAuthorizationRule extends _azServicebus.az_servicebus_queue_authorization_rule {
    static keys = _azServicebus.az_servicebus_queue_authorization_rule_keys;
}

class azServicebusQueueAuthorization {
    /** Manage Azure Service Bus Queue Authorization Rule. */
    static rule = azServicebusQueueAuthorizationRule;
}

/** Manage Azure Service Bus Queue and Authorization Rule. */
class azServicebusQueue extends _azServicebus.az_servicebus_queue {
    static authorization = azServicebusQueueAuthorization;
}

/** Manage Azure Service Bus Topic Authorization Rule. */
class azServicebusTopicAuthorizationRule extends _azServicebus.az_servicebus_topic_authorization_rule {
    static keys = _azServicebus.az_servicebus_topic_authorization_rule_keys;
}

class azServicebusTopicAuthorization {
    /** Manage Azure Service Bus Topic Authorization Rule. */
    static rule = azServicebusTopicAuthorizationRule;
}

/** Manage Azure Service Bus Subscription. */
class azServicebusTopicSubscription extends _azServicebus.az_servicebus_topic_subscription {
    static rule = _azServicebus.az_servicebus_topic_subscription_rule;
}

/** Manage Azure Service Bus Topic and Authorization Rule. */
class azServicebusTopic extends _azServicebus.az_servicebus_topic {
    static authorization = azServicebusTopicAuthorization;
    /** Manage Azure Service Bus Subscription. */
    static subscription = azServicebusTopicSubscription;
}

/** Manage Azure Service Bus namespaces, queues, topics, subscriptions, rules and geo-disaster recovery configuration alias. */
class azServicebus extends _azServicebus.az_servicebus {
    static georecovery = azServicebusGeorecovery;
    static migration = _azServicebus.az_servicebus_migration;
    /** Manage Azure Service Bus Namespace. */
    static namespace = azServicebusNamespace;
    /** Manage Azure Service Bus Queue and Authorization Rule. */
    static queue = azServicebusQueue;
    /** Manage Azure Service Bus Topic and Authorization Rule. */
    static topic = azServicebusTopic;
}

/** Manage application types on an Azure Service Fabric cluster. */
class azSfApplicationType extends _azSf.az_sf_application_type {
    static version = _azSf.az_sf_application_type_version;
}

/** Manage applications running on an Azure Service Fabric cluster. */
class azSfApplication extends _azSf.az_sf_application {
    static certificate = _azSf.az_sf_application_certificate;
    /** Manage application types on an Azure Service Fabric cluster. */
    static type = azSfApplicationType;
}

class azSfClusterClient {
    static certificate = _azSf.az_sf_cluster_client_certificate;
}

/** Manage the node instance of a cluster. */
class azSfClusterNode extends _azSf.az_sf_cluster_node {
    static type = _azSf.az_sf_cluster_node_type;
}

class azSfClusterUpgrade {
    static type = _azSf.az_sf_cluster_upgrade_type;
}

/** Manage an Azure Service Fabric cluster. */
class azSfCluster extends _azSf.az_sf_cluster {
    static certificate = _azSf.az_sf_cluster_certificate;
    static client = azSfClusterClient;
    static durability = _azSf.az_sf_cluster_durability;
    /** Manage the node instance of a cluster. */
    static node = azSfClusterNode;
    static reliability = _azSf.az_sf_cluster_reliability;
    static setting = _azSf.az_sf_cluster_setting;
    static upgrade = azSfClusterUpgrade;
}

class azSfManagedClusterClient {
    static certificate = _azSf.az_sf_managed_cluster_client_certificate;
}

/** Manage an Azure Service Fabric managed cluster. */
class azSfManagedCluster extends _azSf.az_sf_managed_cluster {
    static client = azSfManagedClusterClient;
}

class azSfManagedNodeTypeVm {
    static extension = _azSf.az_sf_managed_node_type_vm_extension;
    static secret = _azSf.az_sf_managed_node_type_vm_secret;
}

/** Manage a node type of an Azure Service Fabric managed cluster. */
class azSfManagedNodeType extends _azSf.az_sf_managed_node_type {
    static node = _azSf.az_sf_managed_node_type_node;
    static vm = azSfManagedNodeTypeVm;
}

class azSfManagedNode {
    /** Manage a node type of an Azure Service Fabric managed cluster. */
    static type = azSfManagedNodeType;
}

class azSfManaged {
    /** Manage an Azure Service Fabric managed cluster. */
    static cluster = azSfManagedCluster;
    static node = azSfManagedNode;
}

/** Manage and administer Azure Service Fabric clusters. */
class azSf extends _azSf.az_sf {
    /** Manage applications running on an Azure Service Fabric cluster. */
    static application = azSfApplication;
    /** Manage an Azure Service Fabric cluster. */
    static cluster = azSfCluster;
    static managed = azSfManaged;
    static service = _azSf.az_sf_service;
}

class azSigImage {
    static definition = _azSig.az_sig_image_definition;
    static version = _azSig.az_sig_image_version;
}

/** Manage shared image gallery. */
class azSig extends _azSig.az_sig {
    static image = azSigImage;
}

class azSignalrNetwork {
    static rule = _azSignalr.az_signalr_network_rule;
}

/** Manage Azure SignalR Service. */
class azSignalr extends _azSignalr.az_signalr {
    static cors = _azSignalr.az_signalr_cors;
    static key = _azSignalr.az_signalr_key;
    static network = azSignalrNetwork;
    static upstream = _azSignalr.az_signalr_upstream;
}

class azSqlDbAudit {
    static policy = _azSql.az_sql_db_audit_policy;
}

/** Manage sensitivity classifications. */
class azSqlDbClassification extends _azSql.az_sql_db_classification {
    static recommendation = _azSql.az_sql_db_classification_recommendation;
}

class azSqlDbLtr {
    static backup = _azSql.az_sql_db_ltr_backup;
    static policy = _azSql.az_sql_db_ltr_policy;
}

class azSqlDbThreat {
    static policy = _azSql.az_sql_db_threat_policy;
}

/** Manage databases. */
class azSqlDb extends _azSql.az_sql_db {
    static audit = azSqlDbAudit;
    /** Manage sensitivity classifications. */
    static classification = azSqlDbClassification;
    static ltr = azSqlDbLtr;
    static op = _azSql.az_sql_db_op;
    static replica = _azSql.az_sql_db_replica;
    static tde = _azSql.az_sql_db_tde;
    static threat = azSqlDbThreat;
}

/** Manage elastic pools. */
class azSqlElasticPool extends _azSql.az_sql_elastic_pool {
    static op = _azSql.az_sql_elastic_pool_op;
}

class azSqlElastic {
    /** Manage elastic pools. */
    static pool = azSqlElasticPool;
}

class azSqlFailover {
    static group = _azSql.az_sql_failover_group;
}

class azSqlInstanceFailover {
    static group = _azSql.az_sql_instance_failover_group;
}

class azSqlInstance {
    static failover = azSqlInstanceFailover;
    static pool = _azSql.az_sql_instance_pool;
}

class azSqlMiAdOnly {
    static auth = _azSql.az_sql_mi_ad_only_auth;
}

class azSqlMiAd {
    static admin = _azSql.az_sql_mi_ad_admin;
    static only = azSqlMiAdOnly;
}

class azSqlMiTde {
    static key = _azSql.az_sql_mi_tde_key;
}

/** Manage SQL managed instances. */
class azSqlMi extends _azSql.az_sql_mi {
    static ad = azSqlMiAd;
    static key = _azSql.az_sql_mi_key;
    static op = _azSql.az_sql_mi_op;
    static tde = azSqlMiTde;
}

class azSqlMidbLog {
    static replay = _azSql.az_sql_midb_log_replay;
}

class azSqlMidbLtr {
    static backup = _azSql.az_sql_midb_ltr_backup;
    static policy = _azSql.az_sql_midb_ltr_policy;
}

class azSqlMidbShortTermRetention {
    static policy = _azSql.az_sql_midb_short_term_retention_policy;
}

class azSqlMidbShortTerm {
    static retention = azSqlMidbShortTermRetention;
}

class azSqlMidbShort {
    static term = azSqlMidbShortTerm;
}

/** Manage SQL managed instance databases. */
class azSqlMidb extends _azSql.az_sql_midb {
    static log = azSqlMidbLog;
    static ltr = azSqlMidbLtr;
    static short = azSqlMidbShort;
}

class azSqlServerAdOnly {
    static auth = _azSql.az_sql_server_ad_only_auth;
}

class azSqlServerAd {
    static admin = _azSql.az_sql_server_ad_admin;
    static only = azSqlServerAdOnly;
}

class azSqlServerAudit {
    static policy = _azSql.az_sql_server_audit_policy;
}

class azSqlServerConn {
    static policy = _azSql.az_sql_server_conn_policy;
}

class azSqlServerDns {
    static alias = _azSql.az_sql_server_dns_alias;
}

class azSqlServerFirewall {
    static rule = _azSql.az_sql_server_firewall_rule;
}

class azSqlServerTde {
    static key = _azSql.az_sql_server_tde_key;
}

class azSqlServerVnet {
    static rule = _azSql.az_sql_server_vnet_rule;
}

/** Manage SQL servers. */
class azSqlServer extends _azSql.az_sql_server {
    static ad = azSqlServerAd;
    static audit = azSqlServerAudit;
    static conn = azSqlServerConn;
    static dns = azSqlServerDns;
    static firewall = azSqlServerFirewall;
    static key = _azSql.az_sql_server_key;
    static tde = azSqlServerTde;
    static vnet = azSqlServerVnet;
}

class azSqlVirtual {
    static cluster = _azSql.az_sql_virtual_cluster;
}

class azSqlVmGroupAg {
    static listener = _azSql.az_sql_vm_group_ag_listener;
}

/** Manage SQL virtual machine groups. */
class azSqlVmGroup extends _azSql.az_sql_vm_group {
    static ag = azSqlVmGroupAg;
}

/** Manage SQL virtual machines. */
class azSqlVm extends _azSql.az_sql_vm {
    /** Manage SQL virtual machine groups. */
    static group = azSqlVmGroup;
}

/** Manage Azure SQL Databases and Data Warehouses. */
class azSql extends _azSql.az_sql {
    /** Manage databases. */
    static db = azSqlDb;
    static dw = _azSql.az_sql_dw;
    static elastic = azSqlElastic;
    static failover = azSqlFailover;
    static instance = azSqlInstance;
    /** Manage SQL managed instances. */
    static mi = azSqlMi;
    /** Manage SQL managed instance databases. */
    static midb = azSqlMidb;
    /** Manage SQL servers. */
    static server = azSqlServer;
    static virtual = azSqlVirtual;
    /** Manage SQL virtual machines. */
    static vm = azSqlVm;
}

/** Manage static apps. */
class azStaticwebapp extends _azStaticwebapp.az_staticwebapp {
    static appsettings = _azStaticwebapp.az_staticwebapp_appsettings;
    static environment = _azStaticwebapp.az_staticwebapp_environment;
    static hostname = _azStaticwebapp.az_staticwebapp_hostname;
    static users = _azStaticwebapp.az_staticwebapp_users;
}

class azStorageAccountBlobService {
    static properties = _azStorage.az_storage_account_blob_service_properties;
}

class azStorageAccountBlob {
    static service = azStorageAccountBlobService;
}

class azStorageAccountEncryption {
    static scope = _azStorage.az_storage_account_encryption_scope;
}

class azStorageAccountFileService {
    static properties = _azStorage.az_storage_account_file_service_properties;
}

class azStorageAccountFile {
    static service = azStorageAccountFileService;
}

class azStorageAccountManagement {
    static policy = _azStorage.az_storage_account_management_policy;
}

class azStorageAccountNetwork {
    static rule = _azStorage.az_storage_account_network_rule;
}

/** Manage storage account Object Replication Policy. */
class azStorageAccountOrPolicy extends _azStorage.az_storage_account_or_policy {
    static rule = _azStorage.az_storage_account_or_policy_rule;
}

class azStorageAccountOr {
    /** Manage storage account Object Replication Policy. */
    static policy = azStorageAccountOrPolicy;
}

class azStorageAccountPrivateEndpoint {
    static connection = _azStorage.az_storage_account_private_endpoint_connection;
}

class azStorageAccountPrivateLink {
    static resource = _azStorage.az_storage_account_private_link_resource;
}

class azStorageAccountPrivate {
    static endpoint = azStorageAccountPrivateEndpoint;
    static link = azStorageAccountPrivateLink;
}

/** Manage storage accounts. */
class azStorageAccount extends _azStorage.az_storage_account {
    static blob = azStorageAccountBlob;
    static encryption = azStorageAccountEncryption;
    static file = azStorageAccountFile;
    static keys = _azStorage.az_storage_account_keys;
    static management = azStorageAccountManagement;
    static network = azStorageAccountNetwork;
    static or = azStorageAccountOr;
    static private = azStorageAccountPrivate;
}

class azStorageBlobIncremental {
    static copy = _azStorage.az_storage_blob_incremental_copy;
}

class azStorageBlobServicePropertiesDelete {
    static policy = _azStorage.az_storage_blob_service_properties_delete_policy;
}

/** Manage storage blob service properties. */
class azStorageBlobServiceProperties extends _azStorage.az_storage_blob_service_properties {
    static delete = azStorageBlobServicePropertiesDelete;
}

class azStorageBlobService {
    /** Manage storage blob service properties. */
    static properties = azStorageBlobServiceProperties;
}

/** Manage object storage for unstructured data (blobs). */
class azStorageBlob extends _azStorage.az_storage_blob {
    static copy = _azStorage.az_storage_blob_copy;
    static incremental = azStorageBlobIncremental;
    static lease = _azStorage.az_storage_blob_lease;
    static metadata = _azStorage.az_storage_blob_metadata;
    static service = azStorageBlobService;
}

class azStorageContainerImmutability {
    static policy = _azStorage.az_storage_container_immutability_policy;
}

class azStorageContainerLegal {
    static hold = _azStorage.az_storage_container_legal_hold;
}

/** Manage blob storage containers. */
class azStorageContainer extends _azStorage.az_storage_container {
    static immutability = azStorageContainerImmutability;
    static lease = _azStorage.az_storage_container_lease;
    static legal = azStorageContainerLegal;
    static metadata = _azStorage.az_storage_container_metadata;
    static policy = _azStorage.az_storage_container_policy;
    static rm = _azStorage.az_storage_container_rm;
}

/** Manage file storage directories. */
class azStorageDirectory extends _azStorage.az_storage_directory {
    static metadata = _azStorage.az_storage_directory_metadata;
}

/** Manage file shares that use the SMB 3.0 protocol. */
class azStorageFile extends _azStorage.az_storage_file {
    static copy = _azStorage.az_storage_file_copy;
    static metadata = _azStorage.az_storage_file_metadata;
}

/** Manage directories in Azure Data Lake Storage Gen2 account. */
class azStorageFsDirectory extends _azStorage.az_storage_fs_directory {
    static metadata = _azStorage.az_storage_fs_directory_metadata;
}

/** Manage files in Azure Data Lake Storage Gen2 account. */
class azStorageFsFile extends _azStorage.az_storage_fs_file {
    static metadata = _azStorage.az_storage_fs_file_metadata;
}

/** Manage file systems in Azure Data Lake Storage Gen2 account. */
class azStorageFs extends _azStorage.az_storage_fs {
    static access = _azStorage.az_storage_fs_access;
    /** Manage directories in Azure Data Lake Storage Gen2 account. */
    static directory = azStorageFsDirectory;
    /** Manage files in Azure Data Lake Storage Gen2 account. */
    static file = azStorageFsFile;
    static metadata = _azStorage.az_storage_fs_metadata;
}

/** Manage storage queues. */
class azStorageQueue extends _azStorage.az_storage_queue {
    static metadata = _azStorage.az_storage_queue_metadata;
    static policy = _azStorage.az_storage_queue_policy;
}

/** Manage file shares. */
class azStorageShare extends _azStorage.az_storage_share {
    static metadata = _azStorage.az_storage_share_metadata;
    static policy = _azStorage.az_storage_share_policy;
    static rm = _azStorage.az_storage_share_rm;
}

/** Manage NoSQL key-value storage. */
class azStorageTable extends _azStorage.az_storage_table {
    static policy = _azStorage.az_storage_table_policy;
}

/** Manage Azure Cloud Storage resources. */
class azStorage extends _azStorage.az_storage {
    /** Manage storage accounts. */
    static account = azStorageAccount;
    /** Manage object storage for unstructured data (blobs). */
    static blob = azStorageBlob;
    /** Manage blob storage containers. */
    static container = azStorageContainer;
    static cors = _azStorage.az_storage_cors;
    /** Manage file storage directories. */
    static directory = azStorageDirectory;
    static entity = _azStorage.az_storage_entity;
    /** Manage file shares that use the SMB 3.0 protocol. */
    static file = azStorageFile;
    /** Manage file systems in Azure Data Lake Storage Gen2 account. */
    static fs = azStorageFs;
    static logging = _azStorage.az_storage_logging;
    static message = _azStorage.az_storage_message;
    static metrics = _azStorage.az_storage_metrics;
    /** Manage storage queues. */
    static queue = azStorageQueue;
    /** Manage file shares. */
    static share = azStorageShare;
    /** Manage NoSQL key-value storage. */
    static table = azStorageTable;
}

class azSynapseActivity {
    static run = _azSynapse.az_synapse_activity_run;
}

class azSynapseData {
    static flow = _azSynapse.az_synapse_data_flow;
}

class azSynapseLinked {
    static service = _azSynapse.az_synapse_linked_service;
}

/** Manage Synapse's pipelines. */
class azSynapsePipeline extends _azSynapse.az_synapse_pipeline {
    static run = _azSynapse.az_synapse_pipeline_run;
}

/** Manage Synapse's role assignments and definitions. */
class azSynapseRole extends _azSynapse.az_synapse_role {
    static assignment = _azSynapse.az_synapse_role_assignment;
    static definition = _azSynapse.az_synapse_role_definition;
}

/** Manage Spark pools and Spark jobs. */
class azSynapseSpark extends _azSynapse.az_synapse_spark {
    static job = _azSynapse.az_synapse_spark_job;
    static pool = _azSynapse.az_synapse_spark_pool;
    static session = _azSynapse.az_synapse_spark_session;
    static statement = _azSynapse.az_synapse_spark_statement;
}

/** Manage SQL pools. */
class azSynapseSql extends _azSynapse.az_synapse_sql {
    static pool = _azSynapse.az_synapse_sql_pool;
}

/** Manage Synapse's triggers. */
class azSynapseTrigger extends _azSynapse.az_synapse_trigger {
    static run = _azSynapse.az_synapse_trigger_run;
}

class azSynapseWorkspaceFirewall {
    static rule = _azSynapse.az_synapse_workspace_firewall_rule;
}

/** Manage Synapse workspaces. */
class azSynapseWorkspace extends _azSynapse.az_synapse_workspace {
    static firewall = azSynapseWorkspaceFirewall;
}

/** Manage and operate Synapse Workspace, Spark Pool, SQL Pool. */
class azSynapse extends _azSynapse.az_synapse {
    static activity = azSynapseActivity;
    static data = azSynapseData;
    static dataset = _azSynapse.az_synapse_dataset;
    static linked = azSynapseLinked;
    static notebook = _azSynapse.az_synapse_notebook;
    /** Manage Synapse's pipelines. */
    static pipeline = azSynapsePipeline;
    /** Manage Synapse's role assignments and definitions. */
    static role = azSynapseRole;
    /** Manage Spark pools and Spark jobs. */
    static spark = azSynapseSpark;
    /** Manage SQL pools. */
    static sql = azSynapseSql;
    /** Manage Synapse's triggers. */
    static trigger = azSynapseTrigger;
    /** Manage Synapse workspaces. */
    static workspace = azSynapseWorkspace;
}

class azVmAvailability {
    static set = _azVm.az_vm_availability_set;
}

class azVmBoot {
    static diagnostics = _azVm.az_vm_boot_diagnostics;
}

/** Manage extensions on VMs. */
class azVmExtension extends _azVm.az_vm_extension {
    static image = _azVm.az_vm_extension_image;
}

/** Manage Dedicated Hosts for Virtual Machines. */
class azVmHost extends _azVm.az_vm_host {
    static group = _azVm.az_vm_host_group;
}

/** Information on available virtual machine images. */
class azVmImage extends _azVm.az_vm_image {
    static terms = _azVm.az_vm_image_terms;
}

/** Manage monitor aspect for a vm. */
class azVmMonitor extends _azVm.az_vm_monitor {
    static log = _azVm.az_vm_monitor_log;
    static metrics = _azVm.az_vm_monitor_metrics;
}

class azVmRun {
    static command = _azVm.az_vm_run_command;
}

class azVmUnmanaged {
    static disk = _azVm.az_vm_unmanaged_disk;
}

/** Manage Linux or Windows virtual machines. */
class azVm extends _azVm.az_vm {
    static availability = azVmAvailability;
    static boot = azVmBoot;
    static diagnostics = _azVm.az_vm_diagnostics;
    static disk = _azVm.az_vm_disk;
    static encryption = _azVm.az_vm_encryption;
    /** Manage extensions on VMs. */
    static extension = azVmExtension;
    /** Manage Dedicated Hosts for Virtual Machines. */
    static host = azVmHost;
    static identity = _azVm.az_vm_identity;
    /** Information on available virtual machine images. */
    static image = azVmImage;
    /** Manage monitor aspect for a vm. */
    static monitor = azVmMonitor;
    static nic = _azVm.az_vm_nic;
    static run = azVmRun;
    static secret = _azVm.az_vm_secret;
    static unmanaged = azVmUnmanaged;
    static user = _azVm.az_vm_user;
}

/** Manage extensions on a VM scale set. */
class azVmssExtension extends _azVmss.az_vmss_extension {
    static image = _azVmss.az_vmss_extension_image;
}

class azVmssRolling {
    static upgrade = _azVmss.az_vmss_rolling_upgrade;
}

class azVmssRun {
    static command = _azVmss.az_vmss_run_command;
}

/** Manage groupings of virtual machines in an Azure Virtual Machine Scale Set (VMSS). */
class azVmss extends _azVmss.az_vmss {
    static diagnostics = _azVmss.az_vmss_diagnostics;
    static disk = _azVmss.az_vmss_disk;
    static encryption = _azVmss.az_vmss_encryption;
    /** Manage extensions on a VM scale set. */
    static extension = azVmssExtension;
    static identity = _azVmss.az_vmss_identity;
    static nic = _azVmss.az_vmss_nic;
    static rolling = azVmssRolling;
    static run = azVmssRun;
}

class azWebappConfigAccess {
    static restriction = _azWebapp.az_webapp_config_access_restriction;
}

class azWebappConfigConnection {
    static string = _azWebapp.az_webapp_config_connection_string;
}

class azWebappConfigStorage {
    static account = _azWebapp.az_webapp_config_storage_account;
}

/** Configure a web app. */
class azWebappConfig extends _azWebapp.az_webapp_config {
    static access = azWebappConfigAccess;
    static appsettings = _azWebapp.az_webapp_config_appsettings;
    static backup = _azWebapp.az_webapp_config_backup;
    static connection = azWebappConfigConnection;
    static container = _azWebapp.az_webapp_config_container;
    static hostname = _azWebapp.az_webapp_config_hostname;
    static snapshot = _azWebapp.az_webapp_config_snapshot;
    static ssl = _azWebapp.az_webapp_config_ssl;
    static storage = azWebappConfigStorage;
}

/** Manage web app deployments. */
class azWebappDeployment extends _azWebapp.az_webapp_deployment {
    static container = _azWebapp.az_webapp_deployment_container;
    static slot = _azWebapp.az_webapp_deployment_slot;
    static source = _azWebapp.az_webapp_deployment_source;
    static user = _azWebapp.az_webapp_deployment_user;
}

class azWebappHybrid {
    static connection = _azWebapp.az_webapp_hybrid_connection;
}

/** Manage web app logs. */
class azWebappLog extends _azWebapp.az_webapp_log {
    static deployment = _azWebapp.az_webapp_log_deployment;
}

class azWebappTraffic {
    static routing = _azWebapp.az_webapp_traffic_routing;
}

class azWebappVnet {
    static integration = _azWebapp.az_webapp_vnet_integration;
}

/** Allows management operations for webjobs on a web app. */
class azWebappWebjob extends _azWebapp.az_webapp_webjob {
    static continuous = _azWebapp.az_webapp_webjob_continuous;
    static triggered = _azWebapp.az_webapp_webjob_triggered;
}

/** Manage web apps. */
class azWebapp extends _azWebapp.az_webapp {
    static auth = _azWebapp.az_webapp_auth;
    /** Configure a web app. */
    static config = azWebappConfig;
    static cors = _azWebapp.az_webapp_cors;
    static deleted = _azWebapp.az_webapp_deleted;
    /** Manage web app deployments. */
    static deployment = azWebappDeployment;
    static hybrid = azWebappHybrid;
    static identity = _azWebapp.az_webapp_identity;
    /** Manage web app logs. */
    static log = azWebappLog;
    static traffic = azWebappTraffic;
    static vnet = azWebappVnet;
    /** Allows management operations for webjobs on a web app. */
    static webjob = azWebappWebjob;
}

/** */
export class az extends _az.az {
    /** Manage Azure subscription information. */
    static account = azAccount;
    /** Manage private registries with Azure Container Registries. */
    static acr = azAcr;
    /** Manage Azure Container Services. */
    static acs = azAcs;
    /** Manage Azure Active Directory Graph entities needed for Role Based Access Control. */
    static ad = azAd;
    /** Manage Azure Advisor. */
    static advisor = azAdvisor;
    /** Manage Azure Kubernetes Services. */
    static aks = azAks;
    /** Manage Azure Media Services resources. */
    static ams = azAms;
    /** Manage Azure API Management services. */
    static apim = azApim;
    /** Manage App Configurations. */
    static appconfig = azAppconfig;
    /** Manage App Service plans. */
    static appservice = azAppservice;
    static aro = _azAro.az_aro;
    /** Manage Azure Artifacts. */
    static artifacts = azArtifacts;
    /** Manage Azure Backups. */
    static backup = azBackup;
    /** Manage Azure Batch. */
    static batch = azBatch;
    /** Manage Batch AI resources. */
    static batchai = azBatchai;
    /** Manage Azure Billing. */
    static billing = azBilling;
    /** Manage Azure Boards. */
    static boards = azBoards;
    /** Manage Microsoft Azure Bot Service. */
    static bot = azBot;
    static cache = _azCache.az_cache;
    /** Manage Azure Content Delivery Networks (CDNs). */
    static cdn = azCdn;
    static cloud = _azCloud.az_cloud;
    /** Manage Azure Cognitive Services accounts. */
    static cognitiveservices = azCognitiveservices;
    /** Manage Azure CLI configuration. */
    static config = azConfig;
    /** Manage consumption of Azure resources. */
    static consumption = azConsumption;
    static container = _azContainer.az_container;
    /** Manage Azure Cosmos DB database accounts. */
    static cosmosdb = azCosmosdb;
    /** Manage Azure Resource Manager template deployment at subscription scope. */
    static deployment = azDeployment;
    /** Create and manage rollouts for your service. */
    static deploymentmanager = azDeploymentmanager;
    /** Manage Azure DevOps organization level operations. */
    static devops = azDevops;
    /** Manage Azure Managed Disks. */
    static disk = azDisk;
    /** Manage Data Lake Analytics accounts, jobs, and catalogs. */
    static dla = azDla;
    /** Manage Data Lake Store accounts and filesystems. */
    static dls = azDls;
    /** Manage Azure Data Migration Service (DMS) instances. */
    static dms = azDms;
    /** Manage Azure Event Grid topics, domains, domain topics, system topics partner topics, event subscriptions, system topic event subscriptions and partner topic event subscriptions. */
    static eventgrid = azEventgrid;
    /** Manage Azure Event Hubs namespaces, eventhubs, consumergroups and geo recovery configurations - Alias. */
    static eventhubs = azEventhubs;
    static extension = _azExtension.az_extension;
    static feature = _azFeature.az_feature;
    /** Manage function apps. To install the Azure Functions Core tools see <a href="https://github.com/Azure/azure-functions-core-tools">https://github.com/Azure/azure-functions-core-tools</a>. */
    static functionapp = azFunctionapp;
    /** Manage resource groups and template deployments. */
    static group = azGroup;
    /** Manage HDInsight resources. */
    static hdinsight = azHdinsight;
    static identity = _azIdentity.az_identity;
    /** Manage custom virtual machine images. */
    static image = azImage;
    /** Manage Internet of Things (IoT) assets. */
    static iot = azIot;
    /** Manage KeyVault keys, secrets, and certificates. */
    static keyvault = azKeyvault;
    /** Manage Azure Kusto resources. */
    static kusto = azKusto;
    /** Manage Azure DevTest Labs. */
    static lab = azLab;
    static local = azLocal;
    static lock = _azLock.az_lock;
    /** Manage template solutions provided and maintained by Independent Software Vendors (ISVs). */
    static managedapp = azManagedapp;
    /** Manage the registration assignments and definitions in Azure. */
    static managedservices = azManagedservices;
    /** Manage Azure Maps. */
    static maps = azMaps;
    /** Manage Azure Database for MariaDB servers. */
    static mariadb = azMariadb;
    /** Manage the Azure Monitor Service. */
    static monitor = azMonitor;
    /** Manage Azure Database for MySQL servers. */
    static mysql = azMysql;
    /** Manage Azure NetApp Files (ANF) Resources. */
    static netappfiles = azNetappfiles;
    /** Manage Azure Network resources. */
    static network = azNetwork;
    /** Manage Azure Red Hat OpenShift 3.11 clusters. */
    static openshift = azOpenshift;
    /** Manage Azure Pipelines. */
    static pipelines = azPipelines;
    /** Manage resource policies. */
    static policy = azPolicy;
    /** Manage Azure Database for PostgreSQL servers. */
    static postgres = azPostgres;
    static ppg = _azPpg.az_ppg;
    /** Manage resource providers. */
    static provider = azProvider;
    /** Manage dedicated Redis caches for your Azure applications. */
    static redis = azRedis;
    /** Manage Azure Relay Service namespaces, WCF relays, hybrid connections, and rules. */
    static relay = azRelay;
    /** Manage Azure Repos. */
    static repos = azRepos;
    /** Manage Azure Reservations. */
    static reservations = azReservations;
    /** Manage Azure resources. */
    static resource = azResource;
    /** Manage user roles for access control with Azure Active Directory and service principals. */
    static role = azRole;
    /** Manage Azure Search services, admin keys and query keys. */
    static search = azSearch;
    /** Manage your security posture with Azure Security Center. */
    static security = azSecurity;
    /** Manage Azure Service Bus namespaces, queues, topics, subscriptions, rules and geo-disaster recovery configuration alias. */
    static servicebus = azServicebus;
    /** Manage and administer Azure Service Fabric clusters. */
    static sf = azSf;
    /** Manage shared image gallery. */
    static sig = azSig;
    /** Manage Azure SignalR Service. */
    static signalr = azSignalr;
    static snapshot = _azSnapshot.az_snapshot;
    /** Manage Azure SQL Databases and Data Warehouses. */
    static sql = azSql;
    /** Manage static apps. */
    static staticwebapp = azStaticwebapp;
    /** Manage Azure Cloud Storage resources. */
    static storage = azStorage;
    /** Manage and operate Synapse Workspace, Spark Pool, SQL Pool. */
    static synapse = azSynapse;
    static tag = _azTag.az_tag;
    static ts = _azTs.az_ts;
    /** Manage Linux or Windows virtual machines. */
    static vm = azVm;
    /** Manage groupings of virtual machines in an Azure Virtual Machine Scale Set (VMSS). */
    static vmss = azVmss;
    /** Manage web apps. */
    static webapp = azWebapp;
}
