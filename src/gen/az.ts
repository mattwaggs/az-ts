import './src/account';
import './src/acr';
import './src/acs';
import './src/ad';
import './src/advisor';
import './src/aks';
import './src/ams';
import './src/apim';
import './src/appconfig';
import './src/appservice';
import './src/aro';
import './src/artifacts';
import './src/backup';
import './src/batch';
import './src/batchai';
import './src/billing';
import './src/boards';
import './src/bot';
import './src/cache';
import './src/cdn';
import './src/cloud';
import './src/cognitiveservices';
import './src/config';
import './src/consumption';
import './src/container';
import './src/cosmosdb';
import './src/deployment';
import './src/deploymentmanager';
import './src/devops';
import './src/disk';
import './src/dla';
import './src/dls';
import './src/dms';
import './src/eventgrid';
import './src/eventhubs';
import './src/undefined';
import './src/extension';
import './src/feature';
import './src/functionapp';
import './src/group';
import './src/hdinsight';
import './src/identity';
import './src/image';
import './src/iot';
import './src/iotcentral';
import './src/keyvault';
import './src/kusto';
import './src/lab';
import './src/local';
import './src/lock';
import './src/managedapp';
import './src/managedservices';
import './src/maps';
import './src/mariadb';
import './src/monitor';
import './src/mysql';
import './src/netappfiles';
import './src/network';
import './src/openshift';
import './src/pipelines';
import './src/policy';
import './src/postgres';
import './src/ppg';
import './src/provider';
import './src/redis';
import './src/relay';
import './src/repos';
import './src/reservations';
import './src/resource';
import './src/role';
import './src/search';
import './src/security';
import './src/servicebus';
import './src/sf';
import './src/sig';
import './src/signalr';
import './src/snapshot';
import './src/sql';
import './src/staticwebapp';
import './src/storage';
import './src/synapse';
import './src/tag';
import './src/vm';
import './src/vmss';
import './src/webapp';

class azAccountManagementGroup {
    static subscription = az_account_management_group_subscription;
}

class azAccountManagement {
    static group = azAccountManagementGroup;
}

class azAccount {
    static lock = az_account_lock;
    static management = azAccountManagement;
}

class azAcrConfigContent {
    static trust = az_acr_config_content_trust;
}

class azAcrConfig {
    static content = azAcrConfigContent;
    static retention = az_acr_config_retention;
}

class azAcrHelm {
    static repo = az_acr_helm_repo;
}

class azAcrNetwork {
    static rule = az_acr_network_rule;
}

class azAcrPrivateEndpoint {
    static connection = az_acr_private_endpoint_connection;
}

class azAcrPrivateLink {
    static resource = az_acr_private_link_resource;
}

class azAcrPrivate {
    static endpoint = azAcrPrivateEndpoint;
    static link = azAcrPrivateLink;
}

class azAcrScope {
    static map = az_acr_scope_map;
}

class azAcrTask {
    static credential = az_acr_task_credential;
    static identity = az_acr_task_identity;
    static timer = az_acr_task_timer;
}

class azAcrToken {
    static credential = az_acr_token_credential;
}

class azAcr {
    static agentpool = az_acr_agentpool;
    static config = azAcrConfig;
    static credential = az_acr_credential;
    static encryption = az_acr_encryption;
    static helm = azAcrHelm;
    static identity = az_acr_identity;
    static network = azAcrNetwork;
    static pack = az_acr_pack;
    static private = azAcrPrivate;
    static replication = az_acr_replication;
    static repository = az_acr_repository;
    static scope = azAcrScope;
    static task = azAcrTask;
    static taskrun = az_acr_taskrun;
    static token = azAcrToken;
    static webhook = az_acr_webhook;
}

class azAcs {
    static dcos = az_acs_dcos;
    static kubernetes = az_acs_kubernetes;
}

class azAdApp {
    static credential = az_ad_app_credential;
    static owner = az_ad_app_owner;
    static permission = az_ad_app_permission;
}

class azAdGroup {
    static member = az_ad_group_member;
    static owner = az_ad_group_owner;
}

class azAdSignedIn {
    static user = az_ad_signed_in_user;
}

class azAdSigned {
    static in = azAdSignedIn;
}

class azAdSp {
    static credential = az_ad_sp_credential;
    static owner = az_ad_sp_owner;
}

class azAd {
    static app = azAdApp;
    static group = azAdGroup;
    static signed = azAdSigned;
    static sp = azAdSp;
    static user = az_ad_user;
}

class azAdvisor {
    static configuration = az_advisor_configuration;
    static recommendation = az_advisor_recommendation;
}

class azAks {
    static nodepool = az_aks_nodepool;
}

class azAmsAccount {
    static filter = az_ams_account_filter;
    static mru = az_ams_account_mru;
    static sp = az_ams_account_sp;
    static storage = az_ams_account_storage;
}

class azAmsAsset {
    static filter = az_ams_asset_filter;
}

class azAmsContentKeyPolicy {
    static option = az_ams_content_key_policy_option;
}

class azAmsContentKey {
    static policy = azAmsContentKeyPolicy;
}

class azAmsContent {
    static key = azAmsContentKey;
}

class azAmsLive {
    static event = az_ams_live_event;
    static output = az_ams_live_output;
}

class azAmsStreamingEndpoint {
    static akamai = az_ams_streaming_endpoint_akamai;
}

class azAmsStreaming {
    static endpoint = azAmsStreamingEndpoint;
    static locator = az_ams_streaming_locator;
    static policy = az_ams_streaming_policy;
}

class azAmsTransform {
    static output = az_ams_transform_output;
}

class azAms {
    static account = azAmsAccount;
    static asset = azAmsAsset;
    static content = azAmsContent;
    static job = az_ams_job;
    static live = azAmsLive;
    static streaming = azAmsStreaming;
    static transform = azAmsTransform;
}

class azApimApi {
    static operation = az_apim_api_operation;
    static release = az_apim_api_release;
    static revision = az_apim_api_revision;
    static versionset = az_apim_api_versionset;
}

class azApimProduct {
    static api = az_apim_product_api;
}

class azApim {
    static api = azApimApi;
    static nv = az_apim_nv;
    static product = azApimProduct;
}

class azAppconfigFeature {
    static filter = az_appconfig_feature_filter;
}

class azAppconfig {
    static credential = az_appconfig_credential;
    static feature = azAppconfigFeature;
    static identity = az_appconfig_identity;
    static kv = az_appconfig_kv;
    static revision = az_appconfig_revision;
}

class azAppserviceHybrid {
    static connection = az_appservice_hybrid_connection;
}

class azAppserviceVnet {
    static integration = az_appservice_vnet_integration;
}

class azAppservice {
    static ase = az_appservice_ase;
    static hybrid = azAppserviceHybrid;
    static plan = az_appservice_plan;
    static vnet = azAppserviceVnet;
}

class azArtifacts {
    static universal = az_artifacts_universal;
}

class azBackupProtectable {
    static item = az_backup_protectable_item;
}

class azBackupRestore {
    static files = az_backup_restore_files;
}

class azBackupVaultBackup {
    static properties = az_backup_vault_backup_properties;
}

class azBackupVault {
    static backup = azBackupVaultBackup;
}

class azBackup {
    static container = az_backup_container;
    static item = az_backup_item;
    static job = az_backup_job;
    static policy = az_backup_policy;
    static protectable = azBackupProtectable;
    static protection = az_backup_protection;
    static recoveryconfig = az_backup_recoveryconfig;
    static recoverypoint = az_backup_recoverypoint;
    static restore = azBackupRestore;
    static vault = azBackupVault;
}

class azBatchAccountAutostorage {
    static keys = az_batch_account_autostorage_keys;
}

class azBatchAccount {
    static autostorage = azBatchAccountAutostorage;
    static keys = az_batch_account_keys;
}

class azBatchApplication {
    static package = az_batch_application_package;
    static summary = az_batch_application_summary;
}

class azBatchJobAll {
    static statistics = az_batch_job_all_statistics;
}

class azBatchJobPrepRelease {
    static status = az_batch_job_prep_release_status;
}

class azBatchJobPrep {
    static release = azBatchJobPrepRelease;
}

class azBatchJobTask {
    static counts = az_batch_job_task_counts;
}

class azBatchJob {
    static all = azBatchJobAll;
    static prep = azBatchJobPrep;
    static schedule = az_batch_job_schedule;
    static task = azBatchJobTask;
}

class azBatchLocation {
    static quotas = az_batch_location_quotas;
}

class azBatchNodeRemoteLogin {
    static settings = az_batch_node_remote_login_settings;
}

class azBatchNodeRemote {
    static desktop = az_batch_node_remote_desktop;
    static login = azBatchNodeRemoteLogin;
}

class azBatchNodeService {
    static logs = az_batch_node_service_logs;
}

class azBatchNode {
    static file = az_batch_node_file;
    static remote = azBatchNodeRemote;
    static scheduling = az_batch_node_scheduling;
    static service = azBatchNodeService;
    static user = az_batch_node_user;
}

class azBatchPoolAll {
    static statistics = az_batch_pool_all_statistics;
}

class azBatchPoolNode {
    static counts = az_batch_pool_node_counts;
}

class azBatchPoolSupported {
    static images = az_batch_pool_supported_images;
}

class azBatchPoolUsage {
    static metrics = az_batch_pool_usage_metrics;
}

class azBatchPool {
    static all = azBatchPoolAll;
    static autoscale = az_batch_pool_autoscale;
    static node = azBatchPoolNode;
    static supported = azBatchPoolSupported;
    static usage = azBatchPoolUsage;
}

class azBatchTask {
    static file = az_batch_task_file;
    static subtask = az_batch_task_subtask;
}

class azBatch {
    static account = azBatchAccount;
    static application = azBatchApplication;
    static certificate = az_batch_certificate;
    static job = azBatchJob;
    static location = azBatchLocation;
    static node = azBatchNode;
    static pool = azBatchPool;
    static task = azBatchTask;
}

class azBatchaiCluster {
    static file = az_batchai_cluster_file;
    static node = az_batchai_cluster_node;
}

class azBatchaiFile {
    static server = az_batchai_file_server;
}

class azBatchaiJob {
    static file = az_batchai_job_file;
    static node = az_batchai_job_node;
}

class azBatchai {
    static cluster = azBatchaiCluster;
    static experiment = az_batchai_experiment;
    static file = azBatchaiFile;
    static job = azBatchaiJob;
    static workspace = az_batchai_workspace;
}

class azBillingEnrollment {
    static account = az_billing_enrollment_account;
}

class azBilling {
    static enrollment = azBillingEnrollment;
    static invoice = az_billing_invoice;
    static period = az_billing_period;
}

class azBoardsArea {
    static project = az_boards_area_project;
    static team = az_boards_area_team;
}

class azBoardsIteration {
    static project = az_boards_iteration_project;
    static team = az_boards_iteration_team;
}

class azBoardsWorkItem {
    static relation = az_boards_work_item_relation;
}

class azBoardsWork {
    static item = azBoardsWorkItem;
}

class azBoards {
    static area = azBoardsArea;
    static iteration = azBoardsIteration;
    static work = azBoardsWork;
}

class azBot {
    static authsetting = az_bot_authsetting;
    static directline = az_bot_directline;
    static email = az_bot_email;
    static facebook = az_bot_facebook;
    static kik = az_bot_kik;
    static msteams = az_bot_msteams;
    static skype = az_bot_skype;
    static slack = az_bot_slack;
    static sms = az_bot_sms;
    static telegram = az_bot_telegram;
    static webchat = az_bot_webchat;
}

class azCdnCustom {
    static domain = az_cdn_custom_domain;
}

class azCdnEdge {
    static node = az_cdn_edge_node;
}

class azCdnEndpointRule {
    static action = az_cdn_endpoint_rule_action;
    static condition = az_cdn_endpoint_rule_condition;
}

class azCdnEndpointWaf {
    static policy = az_cdn_endpoint_waf_policy;
}

class azCdnEndpoint {
    static rule = azCdnEndpointRule;
    static waf = azCdnEndpointWaf;
}

class azCdnWafPolicyCustom {
    static rule = az_cdn_waf_policy_custom_rule;
}

class azCdnWafPolicyManagedRuleSetRuleGroup {
    static override = az_cdn_waf_policy_managed_rule_set_rule_group_override;
}

class azCdnWafPolicyManagedRuleSetRule {
    static group = azCdnWafPolicyManagedRuleSetRuleGroup;
}

class azCdnWafPolicyManagedRuleSet {
    static rule = azCdnWafPolicyManagedRuleSetRule;
}

class azCdnWafPolicyManagedRule {
    static set = azCdnWafPolicyManagedRuleSet;
}

class azCdnWafPolicyManaged {
    static rule = azCdnWafPolicyManagedRule;
}

class azCdnWafPolicyRateLimit {
    static rule = az_cdn_waf_policy_rate_limit_rule;
}

class azCdnWafPolicyRate {
    static limit = azCdnWafPolicyRateLimit;
}

class azCdnWafPolicy {
    static custom = azCdnWafPolicyCustom;
    static managed = azCdnWafPolicyManaged;
    static rate = azCdnWafPolicyRate;
}

class azCdnWaf {
    static policy = azCdnWafPolicy;
}

class azCdn {
    static custom = azCdnCustom;
    static edge = azCdnEdge;
    static endpoint = azCdnEndpoint;
    static origin = az_cdn_origin;
    static profile = az_cdn_profile;
    static waf = azCdnWaf;
}

class azCognitiveservicesAccountNetwork {
    static rule = az_cognitiveservices_account_network_rule;
}

class azCognitiveservicesAccount {
    static identity = az_cognitiveservices_account_identity;
    static keys = az_cognitiveservices_account_keys;
    static network = azCognitiveservicesAccountNetwork;
}

class azCognitiveservices {
    static account = azCognitiveservicesAccount;
}

class azConfigParam {
    static persist = az_config_param_persist;
}

class azConfig {
    static param = azConfigParam;
}

class azConsumptionReservation {
    static detail = az_consumption_reservation_detail;
    static summary = az_consumption_reservation_summary;
}

class azConsumption {
    static budget = az_consumption_budget;
    static marketplace = az_consumption_marketplace;
    static pricesheet = az_consumption_pricesheet;
    static reservation = azConsumptionReservation;
    static usage = az_consumption_usage;
}

class azCosmosdbCassandraKeyspace {
    static throughput = az_cosmosdb_cassandra_keyspace_throughput;
}

class azCosmosdbCassandraTable {
    static throughput = az_cosmosdb_cassandra_table_throughput;
}

class azCosmosdbCassandra {
    static keyspace = azCosmosdbCassandraKeyspace;
    static table = azCosmosdbCassandraTable;
}

class azCosmosdbGremlinDatabase {
    static throughput = az_cosmosdb_gremlin_database_throughput;
}

class azCosmosdbGremlinGraph {
    static throughput = az_cosmosdb_gremlin_graph_throughput;
}

class azCosmosdbGremlin {
    static database = azCosmosdbGremlinDatabase;
    static graph = azCosmosdbGremlinGraph;
}

class azCosmosdbMongodbCollection {
    static throughput = az_cosmosdb_mongodb_collection_throughput;
}

class azCosmosdbMongodbDatabase {
    static throughput = az_cosmosdb_mongodb_database_throughput;
}

class azCosmosdbMongodb {
    static collection = azCosmosdbMongodbCollection;
    static database = azCosmosdbMongodbDatabase;
}

class azCosmosdbNetwork {
    static rule = az_cosmosdb_network_rule;
}

class azCosmosdbPrivateEndpoint {
    static connection = az_cosmosdb_private_endpoint_connection;
}

class azCosmosdbPrivateLink {
    static resource = az_cosmosdb_private_link_resource;
}

class azCosmosdbPrivate {
    static endpoint = azCosmosdbPrivateEndpoint;
    static link = azCosmosdbPrivateLink;
}

class azCosmosdbSqlContainer {
    static throughput = az_cosmosdb_sql_container_throughput;
}

class azCosmosdbSqlDatabase {
    static throughput = az_cosmosdb_sql_database_throughput;
}

class azCosmosdbSqlStored {
    static procedure = az_cosmosdb_sql_stored_procedure;
}

class azCosmosdbSqlUserDefined {
    static function = az_cosmosdb_sql_user_defined_function;
}

class azCosmosdbSqlUser {
    static defined = azCosmosdbSqlUserDefined;
}

class azCosmosdbSql {
    static container = azCosmosdbSqlContainer;
    static database = azCosmosdbSqlDatabase;
    static stored = azCosmosdbSqlStored;
    static trigger = az_cosmosdb_sql_trigger;
    static user = azCosmosdbSqlUser;
}

class azCosmosdbTable {
    static throughput = az_cosmosdb_table_throughput;
}

class azCosmosdb {
    static cassandra = azCosmosdbCassandra;
    static collection = az_cosmosdb_collection;
    static database = az_cosmosdb_database;
    static gremlin = azCosmosdbGremlin;
    static keys = az_cosmosdb_keys;
    static mongodb = azCosmosdbMongodb;
    static network = azCosmosdbNetwork;
    static private = azCosmosdbPrivate;
    static sql = azCosmosdbSql;
    static table = azCosmosdbTable;
}

class azDeploymentOperation {
    static group = az_deployment_operation_group;
    static mg = az_deployment_operation_mg;
    static sub = az_deployment_operation_sub;
    static tenant = az_deployment_operation_tenant;
}

class azDeployment {
    static group = az_deployment_group;
    static mg = az_deployment_mg;
    static operation = azDeploymentOperation;
    static scripts = az_deployment_scripts;
    static sub = az_deployment_sub;
    static tenant = az_deployment_tenant;
}

class azDeploymentmanagerArtifact {
    static source = az_deploymentmanager_artifact_source;
}

class azDeploymentmanagerService {
    static topology = az_deploymentmanager_service_topology;
    static unit = az_deploymentmanager_service_unit;
}

class azDeploymentmanager {
    static artifact = azDeploymentmanagerArtifact;
    static rollout = az_deploymentmanager_rollout;
    static service = azDeploymentmanagerService;
    static step = az_deploymentmanager_step;
}

class azDevopsAdmin {
    static banner = az_devops_admin_banner;
}

class azDevopsSecurityGroup {
    static membership = az_devops_security_group_membership;
}

class azDevopsSecurityPermission {
    static namespace = az_devops_security_permission_namespace;
}

class azDevopsSecurity {
    static group = azDevopsSecurityGroup;
    static permission = azDevopsSecurityPermission;
}

class azDevopsServiceEndpoint {
    static azurerm = az_devops_service_endpoint_azurerm;
    static github = az_devops_service_endpoint_github;
}

class azDevopsService {
    static endpoint = azDevopsServiceEndpoint;
}

class azDevopsWiki {
    static page = az_devops_wiki_page;
}

class azDevops {
    static admin = azDevopsAdmin;
    static extension = az_devops_extension;
    static project = az_devops_project;
    static security = azDevopsSecurity;
    static service = azDevopsService;
    static team = az_devops_team;
    static user = az_devops_user;
    static wiki = azDevopsWiki;
}

class azDiskEncryption {
    static set = az_disk_encryption_set;
}

class azDisk {
    static access = az_disk_access;
    static encryption = azDiskEncryption;
}

class azDlaAccountBlob {
    static storage = az_dla_account_blob_storage;
}

class azDlaAccountCompute {
    static policy = az_dla_account_compute_policy;
}

class azDlaAccountDataLake {
    static store = az_dla_account_data_lake_store;
}

class azDlaAccountData {
    static lake = azDlaAccountDataLake;
}

class azDlaAccount {
    static blob = azDlaAccountBlob;
    static compute = azDlaAccountCompute;
    static data = azDlaAccountData;
    static firewall = az_dla_account_firewall;
}

class azDlaCatalogExternalData {
    static source = az_dla_catalog_external_data_source;
}

class azDlaCatalogExternal {
    static data = azDlaCatalogExternalData;
}

class azDlaCatalogTable {
    static partition = az_dla_catalog_table_partition;
    static stats = az_dla_catalog_table_stats;
    static type = az_dla_catalog_table_type;
}

class azDlaCatalog {
    static assembly = az_dla_catalog_assembly;
    static credential = az_dla_catalog_credential;
    static database = az_dla_catalog_database;
    static external = azDlaCatalogExternal;
    static package = az_dla_catalog_package;
    static procedure = az_dla_catalog_procedure;
    static schema = az_dla_catalog_schema;
    static table = azDlaCatalogTable;
    static tvf = az_dla_catalog_tvf;
    static view = az_dla_catalog_view;
}

class azDlaJob {
    static pipeline = az_dla_job_pipeline;
    static recurrence = az_dla_job_recurrence;
}

class azDla {
    static account = azDlaAccount;
    static catalog = azDlaCatalog;
    static job = azDlaJob;
}

class azDlsAccountNetwork {
    static rule = az_dls_account_network_rule;
}

class azDlsAccountTrusted {
    static provider = az_dls_account_trusted_provider;
}

class azDlsAccount {
    static firewall = az_dls_account_firewall;
    static network = azDlsAccountNetwork;
    static trusted = azDlsAccountTrusted;
}

class azDlsFs {
    static access = az_dls_fs_access;
}

class azDls {
    static account = azDlsAccount;
    static fs = azDlsFs;
}

class azDmsProject {
    static task = az_dms_project_task;
}

class azDms {
    static project = azDmsProject;
}

class azEventgridDomain {
    static key = az_eventgrid_domain_key;
    static topic = az_eventgrid_domain_topic;
}

class azEventgridEvent {
    static subscription = az_eventgrid_event_subscription;
}

class azEventgridExtension {
    static topic = az_eventgrid_extension_topic;
}

class azEventgridPartnerNamespaceEvent {
    static channel = az_eventgrid_partner_namespace_event_channel;
}

class azEventgridPartnerNamespace {
    static event = azEventgridPartnerNamespaceEvent;
    static key = az_eventgrid_partner_namespace_key;
}

class azEventgridPartnerTopicEvent {
    static subscription = az_eventgrid_partner_topic_event_subscription;
}

class azEventgridPartnerTopic {
    static event = azEventgridPartnerTopicEvent;
}

class azEventgridPartner {
    static namespace = azEventgridPartnerNamespace;
    static registration = az_eventgrid_partner_registration;
    static topic = azEventgridPartnerTopic;
}

class azEventgridSystemTopicEvent {
    static subscription = az_eventgrid_system_topic_event_subscription;
}

class azEventgridSystemTopic {
    static event = azEventgridSystemTopicEvent;
}

class azEventgridSystem {
    static topic = azEventgridSystemTopic;
}

class azEventgridTopic {
    static key = az_eventgrid_topic_key;
    static type = az_eventgrid_topic_type;
}

class azEventgrid {
    static domain = azEventgridDomain;
    static event = azEventgridEvent;
    static extension = azEventgridExtension;
    static partner = azEventgridPartner;
    static system = azEventgridSystem;
    static topic = azEventgridTopic;
}

class azEventhubsCluster {
    static namespace = az_eventhubs_cluster_namespace;
}

class azEventhubsEventhubAuthorizationRule {
    static keys = az_eventhubs_eventhub_authorization_rule_keys;
}

class azEventhubsEventhubAuthorization {
    static rule = azEventhubsEventhubAuthorizationRule;
}

class azEventhubsEventhubConsumer {
    static group = az_eventhubs_eventhub_consumer_group;
}

class azEventhubsEventhub {
    static authorization = azEventhubsEventhubAuthorization;
    static consumer = azEventhubsEventhubConsumer;
}

class azEventhubsGeorecoveryAliasAuthorizationRule {
    static keys = az_eventhubs_georecovery_alias_authorization_rule_keys;
}

class azEventhubsGeorecoveryAliasAuthorization {
    static rule = azEventhubsGeorecoveryAliasAuthorizationRule;
}

class azEventhubsGeorecoveryAlias {
    static authorization = azEventhubsGeorecoveryAliasAuthorization;
}

class azEventhubsGeorecovery {
    static alias = azEventhubsGeorecoveryAlias;
}

class azEventhubsNamespaceAuthorizationRule {
    static keys = az_eventhubs_namespace_authorization_rule_keys;
}

class azEventhubsNamespaceAuthorization {
    static rule = azEventhubsNamespaceAuthorizationRule;
}

class azEventhubsNamespaceNetwork {
    static rule = az_eventhubs_namespace_network_rule;
}

class azEventhubsNamespace {
    static authorization = azEventhubsNamespaceAuthorization;
    static network = azEventhubsNamespaceNetwork;
}

class azEventhubs {
    static cluster = azEventhubsCluster;
    static eventhub = azEventhubsEventhub;
    static georecovery = azEventhubsGeorecovery;
    static namespace = azEventhubsNamespace;
}

class azFunctionappConfigAccess {
    static restriction = az_functionapp_config_access_restriction;
}

class azFunctionappConfig {
    static access = azFunctionappConfigAccess;
    static appsettings = az_functionapp_config_appsettings;
    static container = az_functionapp_config_container;
    static hostname = az_functionapp_config_hostname;
    static ssl = az_functionapp_config_ssl;
}

class azFunctionappDeployment {
    static container = az_functionapp_deployment_container;
    static slot = az_functionapp_deployment_slot;
    static source = az_functionapp_deployment_source;
    static user = az_functionapp_deployment_user;
}

class azFunctionappDevops {
    static pipeline = az_functionapp_devops_pipeline;
}

class azFunctionappFunction {
    static keys = az_functionapp_function_keys;
}

class azFunctionappHybrid {
    static connection = az_functionapp_hybrid_connection;
}

class azFunctionappLog {
    static deployment = az_functionapp_log_deployment;
}

class azFunctionappVnet {
    static integration = az_functionapp_vnet_integration;
}

class azFunctionapp {
    static config = azFunctionappConfig;
    static cors = az_functionapp_cors;
    static deployment = azFunctionappDeployment;
    static devops = azFunctionappDevops;
    static function = azFunctionappFunction;
    static hybrid = azFunctionappHybrid;
    static identity = az_functionapp_identity;
    static keys = az_functionapp_keys;
    static log = azFunctionappLog;
    static plan = az_functionapp_plan;
    static vnet = azFunctionappVnet;
}

class azGroupDeployment {
    static operation = az_group_deployment_operation;
}

class azGroup {
    static deployment = azGroupDeployment;
    static lock = az_group_lock;
}

class azHdinsightAutoscale {
    static condition = az_hdinsight_autoscale_condition;
}

class azHdinsightScript {
    static action = az_hdinsight_script_action;
}

class azHdinsight {
    static application = az_hdinsight_application;
    static autoscale = azHdinsightAutoscale;
    static host = az_hdinsight_host;
    static monitor = az_hdinsight_monitor;
    static script = azHdinsightScript;
}

class azImageBuilder {
    static customizer = az_image_builder_customizer;
    static output = az_image_builder_output;
}

class azImage {
    static builder = azImageBuilder;
}

class azIotCentral {
    static app = az_iot_central_app;
}

class azIotDpsAccess {
    static policy = az_iot_dps_access_policy;
}

class azIotDpsLinked {
    static hub = az_iot_dps_linked_hub;
}

class azIotDps {
    static access = azIotDpsAccess;
    static certificate = az_iot_dps_certificate;
    static linked = azIotDpsLinked;
}

class azIotHubConsumer {
    static group = az_iot_hub_consumer_group;
}

class azIotHubMessage {
    static enrichment = az_iot_hub_message_enrichment;
}

class azIotHubRouting {
    static endpoint = az_iot_hub_routing_endpoint;
}

class azIotHub {
    static certificate = az_iot_hub_certificate;
    static consumer = azIotHubConsumer;
    static devicestream = az_iot_hub_devicestream;
    static message = azIotHubMessage;
    static policy = az_iot_hub_policy;
    static route = az_iot_hub_route;
    static routing = azIotHubRouting;
}

class azIot {
    static central = azIotCentral;
    static dps = azIotDps;
    static hub = azIotHub;
}

class azIotcentral {
    static app = az_iotcentral_app;
}

class azKeyvaultCertificateIssuer {
    static admin = az_keyvault_certificate_issuer_admin;
}

class azKeyvaultCertificate {
    static contact = az_keyvault_certificate_contact;
    static issuer = azKeyvaultCertificateIssuer;
    static pending = az_keyvault_certificate_pending;
}

class azKeyvaultNetwork {
    static rule = az_keyvault_network_rule;
}

class azKeyvaultPrivateEndpoint {
    static connection = az_keyvault_private_endpoint_connection;
}

class azKeyvaultPrivateLink {
    static resource = az_keyvault_private_link_resource;
}

class azKeyvaultPrivate {
    static endpoint = azKeyvaultPrivateEndpoint;
    static link = azKeyvaultPrivateLink;
}

class azKeyvaultRole {
    static assignment = az_keyvault_role_assignment;
    static definition = az_keyvault_role_definition;
}

class azKeyvaultSecurity {
    static domain = az_keyvault_security_domain;
}

class azKeyvaultStorageSas {
    static definition = az_keyvault_storage_sas_definition;
}

class azKeyvaultStorage {
    static sas = azKeyvaultStorageSas;
}

class azKeyvault {
    static backup = az_keyvault_backup;
    static certificate = azKeyvaultCertificate;
    static key = az_keyvault_key;
    static network = azKeyvaultNetwork;
    static private = azKeyvaultPrivate;
    static restore = az_keyvault_restore;
    static role = azKeyvaultRole;
    static secret = az_keyvault_secret;
    static security = azKeyvaultSecurity;
    static storage = azKeyvaultStorage;
}

class azKusto {
    static cluster = az_kusto_cluster;
    static database = az_kusto_database;
}

class azLabArm {
    static template = az_lab_arm_template;
}

class azLabArtifact {
    static source = az_lab_artifact_source;
}

class azLabCustom {
    static image = az_lab_custom_image;
}

class azLabGallery {
    static image = az_lab_gallery_image;
}

class azLab {
    static arm = azLabArm;
    static artifact = azLabArtifact;
    static custom = azLabCustom;
    static environment = az_lab_environment;
    static formula = az_lab_formula;
    static gallery = azLabGallery;
    static secret = az_lab_secret;
    static vm = az_lab_vm;
    static vnet = az_lab_vnet;
}

class azLocal {
    static context = az_local_context;
}

class azManagedapp {
    static definition = az_managedapp_definition;
}

class azManagedservices {
    static assignment = az_managedservices_assignment;
    static definition = az_managedservices_definition;
}

class azMapsAccount {
    static keys = az_maps_account_keys;
}

class azMaps {
    static account = azMapsAccount;
}

class azMariadbServerFirewall {
    static rule = az_mariadb_server_firewall_rule;
}

class azMariadbServerPrivateEndpoint {
    static connection = az_mariadb_server_private_endpoint_connection;
}

class azMariadbServerPrivateLink {
    static resource = az_mariadb_server_private_link_resource;
}

class azMariadbServerPrivate {
    static endpoint = azMariadbServerPrivateEndpoint;
    static link = azMariadbServerPrivateLink;
}

class azMariadbServerVnet {
    static rule = az_mariadb_server_vnet_rule;
}

class azMariadbServer {
    static configuration = az_mariadb_server_configuration;
    static firewall = azMariadbServerFirewall;
    static logs = az_mariadb_server_logs;
    static private = azMariadbServerPrivate;
    static replica = az_mariadb_server_replica;
    static vnet = azMariadbServerVnet;
}

class azMariadb {
    static db = az_mariadb_db;
    static server = azMariadbServer;
}

class azMonitorAction {
    static group = az_monitor_action_group;
}

class azMonitorActivityLogAlertAction {
    static group = az_monitor_activity_log_alert_action_group;
}

class azMonitorActivityLogAlert {
    static action = azMonitorActivityLogAlertAction;
    static scope = az_monitor_activity_log_alert_scope;
}

class azMonitorActivityLog {
    static alert = azMonitorActivityLogAlert;
}

class azMonitorActivity {
    static log = azMonitorActivityLog;
}

class azMonitorAutoscale {
    static profile = az_monitor_autoscale_profile;
    static rule = az_monitor_autoscale_rule;
    static settings = az_monitor_autoscale_settings;
}

class azMonitorDiagnosticSettings {
    static categories = az_monitor_diagnostic_settings_categories;
    static subscription = az_monitor_diagnostic_settings_subscription;
}

class azMonitorDiagnostic {
    static settings = azMonitorDiagnosticSettings;
}

class azMonitorLogAnalyticsWorkspaceData {
    static export = az_monitor_log_analytics_workspace_data_export;
}

class azMonitorLogAnalyticsWorkspaceLinked {
    static service = az_monitor_log_analytics_workspace_linked_service;
    static storage = az_monitor_log_analytics_workspace_linked_storage;
}

class azMonitorLogAnalyticsWorkspaceSaved {
    static search = az_monitor_log_analytics_workspace_saved_search;
}

class azMonitorLogAnalyticsWorkspace {
    static data = azMonitorLogAnalyticsWorkspaceData;
    static linked = azMonitorLogAnalyticsWorkspaceLinked;
    static pack = az_monitor_log_analytics_workspace_pack;
    static saved = azMonitorLogAnalyticsWorkspaceSaved;
    static table = az_monitor_log_analytics_workspace_table;
}

class azMonitorLogAnalytics {
    static cluster = az_monitor_log_analytics_cluster;
    static workspace = azMonitorLogAnalyticsWorkspace;
}

class azMonitorLog {
    static analytics = azMonitorLogAnalytics;
    static profiles = az_monitor_log_profiles;
}

class azMonitorMetrics {
    static alert = az_monitor_metrics_alert;
}

class azMonitorPrivateLinkScopePrivateEndpoint {
    static connection = az_monitor_private_link_scope_private_endpoint_connection;
}

class azMonitorPrivateLinkScopePrivateLink {
    static resource = az_monitor_private_link_scope_private_link_resource;
}

class azMonitorPrivateLinkScopePrivate {
    static endpoint = azMonitorPrivateLinkScopePrivateEndpoint;
    static link = azMonitorPrivateLinkScopePrivateLink;
}

class azMonitorPrivateLinkScopeScoped {
    static resource = az_monitor_private_link_scope_scoped_resource;
}

class azMonitorPrivateLinkScope {
    static private = azMonitorPrivateLinkScopePrivate;
    static scoped = azMonitorPrivateLinkScopeScoped;
}

class azMonitorPrivateLink {
    static scope = azMonitorPrivateLinkScope;
}

class azMonitorPrivate {
    static link = azMonitorPrivateLink;
}

class azMonitor {
    static action = azMonitorAction;
    static activity = azMonitorActivity;
    static alert = az_monitor_alert;
    static autoscale = azMonitorAutoscale;
    static diagnostic = azMonitorDiagnostic;
    static log = azMonitorLog;
    static metrics = azMonitorMetrics;
    static private = azMonitorPrivate;
}

class azMysqlFlexibleServerFirewall {
    static rule = az_mysql_flexible_server_firewall_rule;
}

class azMysqlFlexibleServer {
    static db = az_mysql_flexible_server_db;
    static firewall = azMysqlFlexibleServerFirewall;
    static parameter = az_mysql_flexible_server_parameter;
    static replica = az_mysql_flexible_server_replica;
}

class azMysqlFlexible {
    static server = azMysqlFlexibleServer;
}

class azMysqlServerAd {
    static admin = az_mysql_server_ad_admin;
}

class azMysqlServerFirewall {
    static rule = az_mysql_server_firewall_rule;
}

class azMysqlServerPrivateEndpoint {
    static connection = az_mysql_server_private_endpoint_connection;
}

class azMysqlServerPrivateLink {
    static resource = az_mysql_server_private_link_resource;
}

class azMysqlServerPrivate {
    static endpoint = azMysqlServerPrivateEndpoint;
    static link = azMysqlServerPrivateLink;
}

class azMysqlServerVnet {
    static rule = az_mysql_server_vnet_rule;
}

class azMysqlServer {
    static ad = azMysqlServerAd;
    static configuration = az_mysql_server_configuration;
    static firewall = azMysqlServerFirewall;
    static key = az_mysql_server_key;
    static logs = az_mysql_server_logs;
    static private = azMysqlServerPrivate;
    static replica = az_mysql_server_replica;
    static vnet = azMysqlServerVnet;
}

class azMysql {
    static db = az_mysql_db;
    static flexible = azMysqlFlexible;
    static server = azMysqlServer;
}

class azNetappfilesAccount {
    static ad = az_netappfiles_account_ad;
}

class azNetappfilesVolumeExport {
    static policy = az_netappfiles_volume_export_policy;
}

class azNetappfilesVolume {
    static export = azNetappfilesVolumeExport;
    static replication = az_netappfiles_volume_replication;
}

class azNetappfiles {
    static account = azNetappfilesAccount;
    static pool = az_netappfiles_pool;
    static snapshot = az_netappfiles_snapshot;
    static volume = azNetappfilesVolume;
}

class azNetworkApplicationGatewayAddress {
    static pool = az_network_application_gateway_address_pool;
}

class azNetworkApplicationGatewayAuth {
    static cert = az_network_application_gateway_auth_cert;
}

class azNetworkApplicationGatewayFrontend {
    static ip = az_network_application_gateway_frontend_ip;
    static port = az_network_application_gateway_frontend_port;
}

class azNetworkApplicationGatewayHttp {
    static listener = az_network_application_gateway_http_listener;
    static settings = az_network_application_gateway_http_settings;
}

class azNetworkApplicationGatewayPrivateLinkIp {
    static config = az_network_application_gateway_private_link_ip_config;
}

class azNetworkApplicationGatewayPrivateLink {
    static ip = azNetworkApplicationGatewayPrivateLinkIp;
}

class azNetworkApplicationGatewayPrivate {
    static link = azNetworkApplicationGatewayPrivateLink;
}

class azNetworkApplicationGatewayRedirect {
    static config = az_network_application_gateway_redirect_config;
}

class azNetworkApplicationGatewayRewriteRule {
    static condition = az_network_application_gateway_rewrite_rule_condition;
    static set = az_network_application_gateway_rewrite_rule_set;
}

class azNetworkApplicationGatewayRewrite {
    static rule = azNetworkApplicationGatewayRewriteRule;
}

class azNetworkApplicationGatewayRoot {
    static cert = az_network_application_gateway_root_cert;
}

class azNetworkApplicationGatewaySslPolicy {
    static predefined = az_network_application_gateway_ssl_policy_predefined;
}

class azNetworkApplicationGatewaySsl {
    static cert = az_network_application_gateway_ssl_cert;
    static policy = azNetworkApplicationGatewaySslPolicy;
}

class azNetworkApplicationGatewayUrlPathMap {
    static rule = az_network_application_gateway_url_path_map_rule;
}

class azNetworkApplicationGatewayUrlPath {
    static map = azNetworkApplicationGatewayUrlPathMap;
}

class azNetworkApplicationGatewayUrl {
    static path = azNetworkApplicationGatewayUrlPath;
}

class azNetworkApplicationGatewayWafPolicyCustomRuleMatch {
    static condition = az_network_application_gateway_waf_policy_custom_rule_match_condition;
}

class azNetworkApplicationGatewayWafPolicyCustomRule {
    static match = azNetworkApplicationGatewayWafPolicyCustomRuleMatch;
}

class azNetworkApplicationGatewayWafPolicyCustom {
    static rule = azNetworkApplicationGatewayWafPolicyCustomRule;
}

class azNetworkApplicationGatewayWafPolicyManagedRuleRule {
    static set = az_network_application_gateway_waf_policy_managed_rule_rule_set;
}

class azNetworkApplicationGatewayWafPolicyManagedRule {
    static exclusion = az_network_application_gateway_waf_policy_managed_rule_exclusion;
    static rule = azNetworkApplicationGatewayWafPolicyManagedRuleRule;
}

class azNetworkApplicationGatewayWafPolicyManaged {
    static rule = azNetworkApplicationGatewayWafPolicyManagedRule;
}

class azNetworkApplicationGatewayWafPolicyPolicy {
    static setting = az_network_application_gateway_waf_policy_policy_setting;
}

class azNetworkApplicationGatewayWafPolicy {
    static custom = azNetworkApplicationGatewayWafPolicyCustom;
    static managed = azNetworkApplicationGatewayWafPolicyManaged;
    static policy = azNetworkApplicationGatewayWafPolicyPolicy;
}

class azNetworkApplicationGatewayWaf {
    static config = az_network_application_gateway_waf_config;
    static policy = azNetworkApplicationGatewayWafPolicy;
}

class azNetworkApplicationGateway {
    static address = azNetworkApplicationGatewayAddress;
    static auth = azNetworkApplicationGatewayAuth;
    static frontend = azNetworkApplicationGatewayFrontend;
    static http = azNetworkApplicationGatewayHttp;
    static identity = az_network_application_gateway_identity;
    static private = azNetworkApplicationGatewayPrivate;
    static probe = az_network_application_gateway_probe;
    static redirect = azNetworkApplicationGatewayRedirect;
    static rewrite = azNetworkApplicationGatewayRewrite;
    static root = azNetworkApplicationGatewayRoot;
    static rule = az_network_application_gateway_rule;
    static ssl = azNetworkApplicationGatewaySsl;
    static url = azNetworkApplicationGatewayUrl;
    static waf = azNetworkApplicationGatewayWaf;
}

class azNetworkApplication {
    static gateway = azNetworkApplicationGateway;
}

class azNetworkDdos {
    static protection = az_network_ddos_protection;
}

class azNetworkDnsRecordSet {
    static a = az_network_dns_record_set_a;
    static aaaa = az_network_dns_record_set_aaaa;
    static caa = az_network_dns_record_set_caa;
    static cname = az_network_dns_record_set_cname;
    static mx = az_network_dns_record_set_mx;
    static ns = az_network_dns_record_set_ns;
    static ptr = az_network_dns_record_set_ptr;
    static soa = az_network_dns_record_set_soa;
    static srv = az_network_dns_record_set_srv;
    static txt = az_network_dns_record_set_txt;
}

class azNetworkDnsRecord {
    static set = azNetworkDnsRecordSet;
}

class azNetworkDns {
    static record = azNetworkDnsRecord;
    static zone = az_network_dns_zone;
}

class azNetworkExpressRouteGateway {
    static connection = az_network_express_route_gateway_connection;
}

class azNetworkExpressRoutePeeringPeer {
    static connection = az_network_express_route_peering_peer_connection;
}

class azNetworkExpressRoutePeering {
    static connection = az_network_express_route_peering_connection;
    static peer = azNetworkExpressRoutePeeringPeer;
}

class azNetworkExpressRoutePort {
    static identity = az_network_express_route_port_identity;
    static link = az_network_express_route_port_link;
    static location = az_network_express_route_port_location;
}

class azNetworkExpressRoute {
    static auth = az_network_express_route_auth;
    static gateway = azNetworkExpressRouteGateway;
    static peering = azNetworkExpressRoutePeering;
    static port = azNetworkExpressRoutePort;
}

class azNetworkExpress {
    static route = azNetworkExpressRoute;
}

class azNetworkLbAddressPool {
    static address = az_network_lb_address_pool_address;
}

class azNetworkLbAddress {
    static pool = azNetworkLbAddressPool;
}

class azNetworkLbFrontend {
    static ip = az_network_lb_frontend_ip;
}

class azNetworkLbInboundNat {
    static pool = az_network_lb_inbound_nat_pool;
    static rule = az_network_lb_inbound_nat_rule;
}

class azNetworkLbInbound {
    static nat = azNetworkLbInboundNat;
}

class azNetworkLbOutbound {
    static rule = az_network_lb_outbound_rule;
}

class azNetworkLb {
    static address = azNetworkLbAddress;
    static frontend = azNetworkLbFrontend;
    static inbound = azNetworkLbInbound;
    static outbound = azNetworkLbOutbound;
    static probe = az_network_lb_probe;
    static rule = az_network_lb_rule;
}

class azNetworkLocal {
    static gateway = az_network_local_gateway;
}

class azNetworkNat {
    static gateway = az_network_nat_gateway;
}

class azNetworkNicIpConfigAddress {
    static pool = az_network_nic_ip_config_address_pool;
}

class azNetworkNicIpConfigInboundNat {
    static rule = az_network_nic_ip_config_inbound_nat_rule;
}

class azNetworkNicIpConfigInbound {
    static nat = azNetworkNicIpConfigInboundNat;
}

class azNetworkNicIpConfig {
    static address = azNetworkNicIpConfigAddress;
    static inbound = azNetworkNicIpConfigInbound;
}

class azNetworkNicIp {
    static config = azNetworkNicIpConfig;
}

class azNetworkNic {
    static ip = azNetworkNicIp;
}

class azNetworkNsg {
    static rule = az_network_nsg_rule;
}

class azNetworkPrivateDnsLink {
    static vnet = az_network_private_dns_link_vnet;
}

class azNetworkPrivateDnsRecordSet {
    static a = az_network_private_dns_record_set_a;
    static aaaa = az_network_private_dns_record_set_aaaa;
    static cname = az_network_private_dns_record_set_cname;
    static mx = az_network_private_dns_record_set_mx;
    static ptr = az_network_private_dns_record_set_ptr;
    static soa = az_network_private_dns_record_set_soa;
    static srv = az_network_private_dns_record_set_srv;
    static txt = az_network_private_dns_record_set_txt;
}

class azNetworkPrivateDnsRecord {
    static set = azNetworkPrivateDnsRecordSet;
}

class azNetworkPrivateDns {
    static link = azNetworkPrivateDnsLink;
    static record = azNetworkPrivateDnsRecord;
    static zone = az_network_private_dns_zone;
}

class azNetworkPrivateEndpointDnsZone {
    static group = az_network_private_endpoint_dns_zone_group;
}

class azNetworkPrivateEndpointDns {
    static zone = azNetworkPrivateEndpointDnsZone;
}

class azNetworkPrivateEndpoint {
    static connection = az_network_private_endpoint_connection;
    static dns = azNetworkPrivateEndpointDns;
}

class azNetworkPrivateLinkService {
    static connection = az_network_private_link_service_connection;
}

class azNetworkPrivateLink {
    static resource = az_network_private_link_resource;
    static service = azNetworkPrivateLinkService;
}

class azNetworkPrivate {
    static dns = azNetworkPrivateDns;
    static endpoint = azNetworkPrivateEndpoint;
    static link = azNetworkPrivateLink;
}

class azNetworkPublicIp {
    static prefix = az_network_public_ip_prefix;
}

class azNetworkPublic {
    static ip = azNetworkPublicIp;
}

class azNetworkRouteFilter {
    static rule = az_network_route_filter_rule;
}

class azNetworkRouteTable {
    static route = az_network_route_table_route;
}

class azNetworkRoute {
    static filter = azNetworkRouteFilter;
    static table = azNetworkRouteTable;
}

class azNetworkSecurityPartner {
    static provider = az_network_security_partner_provider;
}

class azNetworkSecurity {
    static partner = azNetworkSecurityPartner;
}

class azNetworkServiceEndpointPolicy {
    static definition = az_network_service_endpoint_policy_definition;
}

class azNetworkServiceEndpoint {
    static policy = azNetworkServiceEndpointPolicy;
}

class azNetworkService {
    static endpoint = azNetworkServiceEndpoint;
}

class azNetworkTrafficManager {
    static endpoint = az_network_traffic_manager_endpoint;
    static profile = az_network_traffic_manager_profile;
}

class azNetworkTraffic {
    static manager = azNetworkTrafficManager;
}

class azNetworkVirtualAppliance {
    static site = az_network_virtual_appliance_site;
    static sku = az_network_virtual_appliance_sku;
}

class azNetworkVirtual {
    static appliance = azNetworkVirtualAppliance;
}

class azNetworkVnetGatewayIpsec {
    static policy = az_network_vnet_gateway_ipsec_policy;
}

class azNetworkVnetGatewayRevoked {
    static cert = az_network_vnet_gateway_revoked_cert;
}

class azNetworkVnetGatewayRoot {
    static cert = az_network_vnet_gateway_root_cert;
}

class azNetworkVnetGatewayVpn {
    static client = az_network_vnet_gateway_vpn_client;
}

class azNetworkVnetGateway {
    static aad = az_network_vnet_gateway_aad;
    static ipsec = azNetworkVnetGatewayIpsec;
    static revoked = azNetworkVnetGatewayRevoked;
    static root = azNetworkVnetGatewayRoot;
    static vpn = azNetworkVnetGatewayVpn;
}

class azNetworkVnet {
    static gateway = azNetworkVnetGateway;
    static peering = az_network_vnet_peering;
    static subnet = az_network_vnet_subnet;
}

class azNetworkVpnConnectionIpsec {
    static policy = az_network_vpn_connection_ipsec_policy;
}

class azNetworkVpnConnectionShared {
    static key = az_network_vpn_connection_shared_key;
}

class azNetworkVpnConnection {
    static ipsec = azNetworkVpnConnectionIpsec;
    static shared = azNetworkVpnConnectionShared;
}

class azNetworkVpn {
    static connection = azNetworkVpnConnection;
}

class azNetworkVrouter {
    static peering = az_network_vrouter_peering;
}

class azNetworkWatcherConnectionMonitorTest {
    static configuration = az_network_watcher_connection_monitor_test_configuration;
    static group = az_network_watcher_connection_monitor_test_group;
}

class azNetworkWatcherConnectionMonitor {
    static endpoint = az_network_watcher_connection_monitor_endpoint;
    static output = az_network_watcher_connection_monitor_output;
    static test = azNetworkWatcherConnectionMonitorTest;
}

class azNetworkWatcherConnection {
    static monitor = azNetworkWatcherConnectionMonitor;
}

class azNetworkWatcherFlow {
    static log = az_network_watcher_flow_log;
}

class azNetworkWatcherPacket {
    static capture = az_network_watcher_packet_capture;
}

class azNetworkWatcher {
    static connection = azNetworkWatcherConnection;
    static flow = azNetworkWatcherFlow;
    static packet = azNetworkWatcherPacket;
    static troubleshooting = az_network_watcher_troubleshooting;
}

class azNetwork {
    static application = azNetworkApplication;
    static asg = az_network_asg;
    static bastion = az_network_bastion;
    static ddos = azNetworkDdos;
    static dns = azNetworkDns;
    static express = azNetworkExpress;
    static lb = azNetworkLb;
    static local = azNetworkLocal;
    static nat = azNetworkNat;
    static nic = azNetworkNic;
    static nsg = azNetworkNsg;
    static private = azNetworkPrivate;
    static profile = az_network_profile;
    static public = azNetworkPublic;
    static route = azNetworkRoute;
    static security = azNetworkSecurity;
    static service = azNetworkService;
    static traffic = azNetworkTraffic;
    static virtual = azNetworkVirtual;
    static vnet = azNetworkVnet;
    static vpn = azNetworkVpn;
    static vrouter = azNetworkVrouter;
    static watcher = azNetworkWatcher;
}

class azOpenshift {
    static monitor = az_openshift_monitor;
}

class azPipelinesBuild {
    static definition = az_pipelines_build_definition;
    static tag = az_pipelines_build_tag;
}

class azPipelinesRelease {
    static definition = az_pipelines_release_definition;
}

class azPipelinesRuns {
    static artifact = az_pipelines_runs_artifact;
    static tag = az_pipelines_runs_tag;
}

class azPipelinesVariableGroup {
    static variable = az_pipelines_variable_group_variable;
}

class azPipelinesVariable {
    static group = azPipelinesVariableGroup;
}

class azPipelines {
    static agent = az_pipelines_agent;
    static build = azPipelinesBuild;
    static folder = az_pipelines_folder;
    static pool = az_pipelines_pool;
    static queue = az_pipelines_queue;
    static release = azPipelinesRelease;
    static runs = azPipelinesRuns;
    static variable = azPipelinesVariable;
}

class azPolicyAssignment {
    static identity = az_policy_assignment_identity;
}

class azPolicyRemediation {
    static deployment = az_policy_remediation_deployment;
}

class azPolicySet {
    static definition = az_policy_set_definition;
}

class azPolicy {
    static assignment = azPolicyAssignment;
    static definition = az_policy_definition;
    static event = az_policy_event;
    static metadata = az_policy_metadata;
    static remediation = azPolicyRemediation;
    static set = azPolicySet;
    static state = az_policy_state;
}

class azPostgresFlexibleServerFirewall {
    static rule = az_postgres_flexible_server_firewall_rule;
}

class azPostgresFlexibleServer {
    static firewall = azPostgresFlexibleServerFirewall;
    static parameter = az_postgres_flexible_server_parameter;
}

class azPostgresFlexible {
    static server = azPostgresFlexibleServer;
}

class azPostgresServerAd {
    static admin = az_postgres_server_ad_admin;
}

class azPostgresServerFirewall {
    static rule = az_postgres_server_firewall_rule;
}

class azPostgresServerPrivateEndpoint {
    static connection = az_postgres_server_private_endpoint_connection;
}

class azPostgresServerPrivateLink {
    static resource = az_postgres_server_private_link_resource;
}

class azPostgresServerPrivate {
    static endpoint = azPostgresServerPrivateEndpoint;
    static link = azPostgresServerPrivateLink;
}

class azPostgresServerVnet {
    static rule = az_postgres_server_vnet_rule;
}

class azPostgresServer {
    static ad = azPostgresServerAd;
    static configuration = az_postgres_server_configuration;
    static firewall = azPostgresServerFirewall;
    static key = az_postgres_server_key;
    static logs = az_postgres_server_logs;
    static private = azPostgresServerPrivate;
    static replica = az_postgres_server_replica;
    static vnet = azPostgresServerVnet;
}

class azPostgres {
    static db = az_postgres_db;
    static flexible = azPostgresFlexible;
    static server = azPostgresServer;
}

class azProvider {
    static operation = az_provider_operation;
}

class azRedisFirewall {
    static rules = az_redis_firewall_rules;
}

class azRedisPatch {
    static schedule = az_redis_patch_schedule;
}

class azRedisServer {
    static link = az_redis_server_link;
}

class azRedis {
    static firewall = azRedisFirewall;
    static patch = azRedisPatch;
    static server = azRedisServer;
}

class azRelayHycoAuthorizationRule {
    static keys = az_relay_hyco_authorization_rule_keys;
}

class azRelayHycoAuthorization {
    static rule = azRelayHycoAuthorizationRule;
}

class azRelayHyco {
    static authorization = azRelayHycoAuthorization;
}

class azRelayNamespaceAuthorizationRule {
    static keys = az_relay_namespace_authorization_rule_keys;
}

class azRelayNamespaceAuthorization {
    static rule = azRelayNamespaceAuthorizationRule;
}

class azRelayNamespace {
    static authorization = azRelayNamespaceAuthorization;
}

class azRelayWcfrelayAuthorizationRule {
    static keys = az_relay_wcfrelay_authorization_rule_keys;
}

class azRelayWcfrelayAuthorization {
    static rule = azRelayWcfrelayAuthorizationRule;
}

class azRelayWcfrelay {
    static authorization = azRelayWcfrelayAuthorization;
}

class azRelay {
    static hyco = azRelayHyco;
    static namespace = azRelayNamespace;
    static wcfrelay = azRelayWcfrelay;
}

class azReposPolicyApprover {
    static count = az_repos_policy_approver_count;
}

class azReposPolicyCase {
    static enforcement = az_repos_policy_case_enforcement;
}

class azReposPolicyComment {
    static required = az_repos_policy_comment_required;
}

class azReposPolicyFile {
    static size = az_repos_policy_file_size;
}

class azReposPolicyMerge {
    static strategy = az_repos_policy_merge_strategy;
}

class azReposPolicyRequired {
    static reviewer = az_repos_policy_required_reviewer;
}

class azReposPolicyWorkItem {
    static linking = az_repos_policy_work_item_linking;
}

class azReposPolicyWork {
    static item = azReposPolicyWorkItem;
}

class azReposPolicy {
    static approver = azReposPolicyApprover;
    static build = az_repos_policy_build;
    static case = azReposPolicyCase;
    static comment = azReposPolicyComment;
    static file = azReposPolicyFile;
    static merge = azReposPolicyMerge;
    static required = azReposPolicyRequired;
    static work = azReposPolicyWork;
}

class azReposPrWork {
    static item = az_repos_pr_work_item;
}

class azReposPr {
    static policy = az_repos_pr_policy;
    static reviewer = az_repos_pr_reviewer;
    static work = azReposPrWork;
}

class azRepos {
    static import = az_repos_import;
    static policy = azReposPolicy;
    static pr = azReposPr;
    static ref = az_repos_ref;
}

class azReservationsReservationOrder {
    static id = az_reservations_reservation_order_id;
}

class azReservationsReservation {
    static order = azReservationsReservationOrder;
}

class azReservations {
    static catalog = az_reservations_catalog;
    static reservation = azReservationsReservation;
}

class azResource {
    static link = az_resource_link;
    static lock = az_resource_lock;
}

class azRole {
    static assignment = az_role_assignment;
    static definition = az_role_definition;
}

class azSearchAdmin {
    static key = az_search_admin_key;
}

class azSearchQuery {
    static key = az_search_query_key;
}

class azSearch {
    static admin = azSearchAdmin;
    static query = azSearchQuery;
    static service = az_search_service;
}

class azSecurityAdaptiveApplication {
    static controls = az_security_adaptive_application_controls;
}

class azSecurityAdaptiveNetwork {
    static hardenings = az_security_adaptive_network_hardenings;
}

class azSecurityAdaptive {
    static application = azSecurityAdaptiveApplication;
    static network = azSecurityAdaptiveNetwork;
}

class azSecurityAllowed {
    static connections = az_security_allowed_connections;
}

class azSecurityAssessment {
    static metadata = az_security_assessment_metadata;
}

class azSecurityAtp {
    static storage = az_security_atp_storage;
}

class azSecurityAutoProvisioning {
    static setting = az_security_auto_provisioning_setting;
}

class azSecurityAuto {
    static provisioning = azSecurityAutoProvisioning;
}

class azSecurityDiscoveredSecurity {
    static solution = az_security_discovered_security_solution;
}

class azSecurityDiscovered {
    static security = azSecurityDiscoveredSecurity;
}

class azSecurityExternalSecurity {
    static solution = az_security_external_security_solution;
}

class azSecurityExternal {
    static security = azSecurityExternalSecurity;
}

class azSecurityIot {
    static alerts = az_security_iot_alerts;
    static analytics = az_security_iot_analytics;
    static recommendations = az_security_iot_recommendations;
    static solution = az_security_iot_solution;
}

class azSecurityJit {
    static policy = az_security_jit_policy;
}

class azSecurityRegulatoryCompliance {
    static assessments = az_security_regulatory_compliance_assessments;
    static controls = az_security_regulatory_compliance_controls;
    static standards = az_security_regulatory_compliance_standards;
}

class azSecurityRegulatory {
    static compliance = azSecurityRegulatoryCompliance;
}

class azSecuritySub {
    static assessment = az_security_sub_assessment;
}

class azSecurityWorkspace {
    static setting = az_security_workspace_setting;
}

class azSecurity {
    static adaptive = azSecurityAdaptive;
    static alert = az_security_alert;
    static allowed = azSecurityAllowed;
    static assessment = azSecurityAssessment;
    static atp = azSecurityAtp;
    static auto = azSecurityAuto;
    static contact = az_security_contact;
    static discovered = azSecurityDiscovered;
    static external = azSecurityExternal;
    static iot = azSecurityIot;
    static jit = azSecurityJit;
    static location = az_security_location;
    static pricing = az_security_pricing;
    static regulatory = azSecurityRegulatory;
    static setting = az_security_setting;
    static sub = azSecuritySub;
    static task = az_security_task;
    static topology = az_security_topology;
    static workspace = azSecurityWorkspace;
}

class azServicebusGeorecoveryAliasAuthorizationRule {
    static keys = az_servicebus_georecovery_alias_authorization_rule_keys;
}

class azServicebusGeorecoveryAliasAuthorization {
    static rule = azServicebusGeorecoveryAliasAuthorizationRule;
}

class azServicebusGeorecoveryAlias {
    static authorization = azServicebusGeorecoveryAliasAuthorization;
}

class azServicebusGeorecovery {
    static alias = azServicebusGeorecoveryAlias;
}

class azServicebusNamespaceAuthorizationRule {
    static keys = az_servicebus_namespace_authorization_rule_keys;
}

class azServicebusNamespaceAuthorization {
    static rule = azServicebusNamespaceAuthorizationRule;
}

class azServicebusNamespaceNetwork {
    static rule = az_servicebus_namespace_network_rule;
}

class azServicebusNamespace {
    static authorization = azServicebusNamespaceAuthorization;
    static network = azServicebusNamespaceNetwork;
}

class azServicebusQueueAuthorizationRule {
    static keys = az_servicebus_queue_authorization_rule_keys;
}

class azServicebusQueueAuthorization {
    static rule = azServicebusQueueAuthorizationRule;
}

class azServicebusQueue {
    static authorization = azServicebusQueueAuthorization;
}

class azServicebusTopicAuthorizationRule {
    static keys = az_servicebus_topic_authorization_rule_keys;
}

class azServicebusTopicAuthorization {
    static rule = azServicebusTopicAuthorizationRule;
}

class azServicebusTopicSubscription {
    static rule = az_servicebus_topic_subscription_rule;
}

class azServicebusTopic {
    static authorization = azServicebusTopicAuthorization;
    static subscription = azServicebusTopicSubscription;
}

class azServicebus {
    static georecovery = azServicebusGeorecovery;
    static migration = az_servicebus_migration;
    static namespace = azServicebusNamespace;
    static queue = azServicebusQueue;
    static topic = azServicebusTopic;
}

class azSfApplicationType {
    static version = az_sf_application_type_version;
}

class azSfApplication {
    static certificate = az_sf_application_certificate;
    static type = azSfApplicationType;
}

class azSfClusterClient {
    static certificate = az_sf_cluster_client_certificate;
}

class azSfClusterNode {
    static type = az_sf_cluster_node_type;
}

class azSfClusterUpgrade {
    static type = az_sf_cluster_upgrade_type;
}

class azSfCluster {
    static certificate = az_sf_cluster_certificate;
    static client = azSfClusterClient;
    static durability = az_sf_cluster_durability;
    static node = azSfClusterNode;
    static reliability = az_sf_cluster_reliability;
    static setting = az_sf_cluster_setting;
    static upgrade = azSfClusterUpgrade;
}

class azSfManagedClusterClient {
    static certificate = az_sf_managed_cluster_client_certificate;
}

class azSfManagedCluster {
    static client = azSfManagedClusterClient;
}

class azSfManagedNodeTypeVm {
    static extension = az_sf_managed_node_type_vm_extension;
    static secret = az_sf_managed_node_type_vm_secret;
}

class azSfManagedNodeType {
    static node = az_sf_managed_node_type_node;
    static vm = azSfManagedNodeTypeVm;
}

class azSfManagedNode {
    static type = azSfManagedNodeType;
}

class azSfManaged {
    static cluster = azSfManagedCluster;
    static node = azSfManagedNode;
}

class azSf {
    static application = azSfApplication;
    static cluster = azSfCluster;
    static managed = azSfManaged;
    static service = az_sf_service;
}

class azSigImage {
    static definition = az_sig_image_definition;
    static version = az_sig_image_version;
}

class azSig {
    static image = azSigImage;
}

class azSignalrNetwork {
    static rule = az_signalr_network_rule;
}

class azSignalr {
    static cors = az_signalr_cors;
    static key = az_signalr_key;
    static network = azSignalrNetwork;
    static upstream = az_signalr_upstream;
}

class azSqlDbAudit {
    static policy = az_sql_db_audit_policy;
}

class azSqlDbClassification {
    static recommendation = az_sql_db_classification_recommendation;
}

class azSqlDbLtr {
    static backup = az_sql_db_ltr_backup;
    static policy = az_sql_db_ltr_policy;
}

class azSqlDbThreat {
    static policy = az_sql_db_threat_policy;
}

class azSqlDb {
    static audit = azSqlDbAudit;
    static classification = azSqlDbClassification;
    static ltr = azSqlDbLtr;
    static op = az_sql_db_op;
    static replica = az_sql_db_replica;
    static tde = az_sql_db_tde;
    static threat = azSqlDbThreat;
}

class azSqlElasticPool {
    static op = az_sql_elastic_pool_op;
}

class azSqlElastic {
    static pool = azSqlElasticPool;
}

class azSqlFailover {
    static group = az_sql_failover_group;
}

class azSqlInstanceFailover {
    static group = az_sql_instance_failover_group;
}

class azSqlInstance {
    static failover = azSqlInstanceFailover;
    static pool = az_sql_instance_pool;
}

class azSqlMiAd {
    static admin = az_sql_mi_ad_admin;
}

class azSqlMiTde {
    static key = az_sql_mi_tde_key;
}

class azSqlMi {
    static ad = azSqlMiAd;
    static key = az_sql_mi_key;
    static op = az_sql_mi_op;
    static tde = azSqlMiTde;
}

class azSqlMidbLtr {
    static backup = az_sql_midb_ltr_backup;
    static policy = az_sql_midb_ltr_policy;
}

class azSqlMidbShortTermRetention {
    static policy = az_sql_midb_short_term_retention_policy;
}

class azSqlMidbShortTerm {
    static retention = azSqlMidbShortTermRetention;
}

class azSqlMidbShort {
    static term = azSqlMidbShortTerm;
}

class azSqlMidb {
    static ltr = azSqlMidbLtr;
    static short = azSqlMidbShort;
}

class azSqlServerAd {
    static admin = az_sql_server_ad_admin;
}

class azSqlServerAudit {
    static policy = az_sql_server_audit_policy;
}

class azSqlServerConn {
    static policy = az_sql_server_conn_policy;
}

class azSqlServerDns {
    static alias = az_sql_server_dns_alias;
}

class azSqlServerFirewall {
    static rule = az_sql_server_firewall_rule;
}

class azSqlServerTde {
    static key = az_sql_server_tde_key;
}

class azSqlServerVnet {
    static rule = az_sql_server_vnet_rule;
}

class azSqlServer {
    static ad = azSqlServerAd;
    static audit = azSqlServerAudit;
    static conn = azSqlServerConn;
    static dns = azSqlServerDns;
    static firewall = azSqlServerFirewall;
    static key = az_sql_server_key;
    static tde = azSqlServerTde;
    static vnet = azSqlServerVnet;
}

class azSqlVirtual {
    static cluster = az_sql_virtual_cluster;
}

class azSqlVmGroupAg {
    static listener = az_sql_vm_group_ag_listener;
}

class azSqlVmGroup {
    static ag = azSqlVmGroupAg;
}

class azSqlVm {
    static group = azSqlVmGroup;
}

class azSql {
    static db = azSqlDb;
    static dw = az_sql_dw;
    static elastic = azSqlElastic;
    static failover = azSqlFailover;
    static instance = azSqlInstance;
    static mi = azSqlMi;
    static midb = azSqlMidb;
    static server = azSqlServer;
    static virtual = azSqlVirtual;
    static vm = azSqlVm;
}

class azStaticwebapp {
    static appsettings = az_staticwebapp_appsettings;
    static environment = az_staticwebapp_environment;
    static hostname = az_staticwebapp_hostname;
    static users = az_staticwebapp_users;
}

class azStorageAccountBlobService {
    static properties = az_storage_account_blob_service_properties;
}

class azStorageAccountBlob {
    static service = azStorageAccountBlobService;
}

class azStorageAccountEncryption {
    static scope = az_storage_account_encryption_scope;
}

class azStorageAccountFileService {
    static properties = az_storage_account_file_service_properties;
}

class azStorageAccountFile {
    static service = azStorageAccountFileService;
}

class azStorageAccountManagement {
    static policy = az_storage_account_management_policy;
}

class azStorageAccountNetwork {
    static rule = az_storage_account_network_rule;
}

class azStorageAccountOrPolicy {
    static rule = az_storage_account_or_policy_rule;
}

class azStorageAccountOr {
    static policy = azStorageAccountOrPolicy;
}

class azStorageAccountPrivateEndpoint {
    static connection = az_storage_account_private_endpoint_connection;
}

class azStorageAccountPrivateLink {
    static resource = az_storage_account_private_link_resource;
}

class azStorageAccountPrivate {
    static endpoint = azStorageAccountPrivateEndpoint;
    static link = azStorageAccountPrivateLink;
}

class azStorageAccount {
    static blob = azStorageAccountBlob;
    static encryption = azStorageAccountEncryption;
    static file = azStorageAccountFile;
    static keys = az_storage_account_keys;
    static management = azStorageAccountManagement;
    static network = azStorageAccountNetwork;
    static or = azStorageAccountOr;
    static private = azStorageAccountPrivate;
}

class azStorageBlobIncremental {
    static copy = az_storage_blob_incremental_copy;
}

class azStorageBlobServicePropertiesDelete {
    static policy = az_storage_blob_service_properties_delete_policy;
}

class azStorageBlobServiceProperties {
    static delete = azStorageBlobServicePropertiesDelete;
}

class azStorageBlobService {
    static properties = azStorageBlobServiceProperties;
}

class azStorageBlob {
    static copy = az_storage_blob_copy;
    static incremental = azStorageBlobIncremental;
    static lease = az_storage_blob_lease;
    static metadata = az_storage_blob_metadata;
    static service = azStorageBlobService;
}

class azStorageContainerImmutability {
    static policy = az_storage_container_immutability_policy;
}

class azStorageContainerLegal {
    static hold = az_storage_container_legal_hold;
}

class azStorageContainer {
    static immutability = azStorageContainerImmutability;
    static lease = az_storage_container_lease;
    static legal = azStorageContainerLegal;
    static metadata = az_storage_container_metadata;
    static policy = az_storage_container_policy;
}

class azStorageDirectory {
    static metadata = az_storage_directory_metadata;
}

class azStorageFile {
    static copy = az_storage_file_copy;
    static metadata = az_storage_file_metadata;
}

class azStorageFsDirectory {
    static metadata = az_storage_fs_directory_metadata;
}

class azStorageFsFile {
    static metadata = az_storage_fs_file_metadata;
}

class azStorageFs {
    static access = az_storage_fs_access;
    static directory = azStorageFsDirectory;
    static file = azStorageFsFile;
    static metadata = az_storage_fs_metadata;
}

class azStorageQueue {
    static metadata = az_storage_queue_metadata;
    static policy = az_storage_queue_policy;
}

class azStorageShare {
    static metadata = az_storage_share_metadata;
    static policy = az_storage_share_policy;
    static rm = az_storage_share_rm;
}

class azStorageTable {
    static policy = az_storage_table_policy;
}

class azStorage {
    static account = azStorageAccount;
    static blob = azStorageBlob;
    static container = azStorageContainer;
    static cors = az_storage_cors;
    static directory = azStorageDirectory;
    static entity = az_storage_entity;
    static file = azStorageFile;
    static fs = azStorageFs;
    static logging = az_storage_logging;
    static message = az_storage_message;
    static metrics = az_storage_metrics;
    static queue = azStorageQueue;
    static share = azStorageShare;
    static table = azStorageTable;
}

class azSynapseRole {
    static assignment = az_synapse_role_assignment;
    static definition = az_synapse_role_definition;
}

class azSynapseSpark {
    static job = az_synapse_spark_job;
    static pool = az_synapse_spark_pool;
    static session = az_synapse_spark_session;
    static statement = az_synapse_spark_statement;
}

class azSynapseSql {
    static pool = az_synapse_sql_pool;
}

class azSynapseWorkspaceFirewall {
    static rule = az_synapse_workspace_firewall_rule;
}

class azSynapseWorkspace {
    static firewall = azSynapseWorkspaceFirewall;
}

class azSynapse {
    static role = azSynapseRole;
    static spark = azSynapseSpark;
    static sql = azSynapseSql;
    static workspace = azSynapseWorkspace;
}

class azVmAvailability {
    static set = az_vm_availability_set;
}

class azVmBoot {
    static diagnostics = az_vm_boot_diagnostics;
}

class azVmExtension {
    static image = az_vm_extension_image;
}

class azVmHost {
    static group = az_vm_host_group;
}

class azVmImage {
    static terms = az_vm_image_terms;
}

class azVmMonitor {
    static log = az_vm_monitor_log;
    static metrics = az_vm_monitor_metrics;
}

class azVmRun {
    static command = az_vm_run_command;
}

class azVmUnmanaged {
    static disk = az_vm_unmanaged_disk;
}

class azVm {
    static availability = azVmAvailability;
    static boot = azVmBoot;
    static diagnostics = az_vm_diagnostics;
    static disk = az_vm_disk;
    static encryption = az_vm_encryption;
    static extension = azVmExtension;
    static host = azVmHost;
    static identity = az_vm_identity;
    static image = azVmImage;
    static monitor = azVmMonitor;
    static nic = az_vm_nic;
    static run = azVmRun;
    static secret = az_vm_secret;
    static unmanaged = azVmUnmanaged;
    static user = az_vm_user;
}

class azVmssExtension {
    static image = az_vmss_extension_image;
}

class azVmssRolling {
    static upgrade = az_vmss_rolling_upgrade;
}

class azVmssRun {
    static command = az_vmss_run_command;
}

class azVmss {
    static diagnostics = az_vmss_diagnostics;
    static disk = az_vmss_disk;
    static encryption = az_vmss_encryption;
    static extension = azVmssExtension;
    static identity = az_vmss_identity;
    static nic = az_vmss_nic;
    static rolling = azVmssRolling;
    static run = azVmssRun;
}

class azWebappConfigAccess {
    static restriction = az_webapp_config_access_restriction;
}

class azWebappConfigConnection {
    static string = az_webapp_config_connection_string;
}

class azWebappConfigStorage {
    static account = az_webapp_config_storage_account;
}

class azWebappConfig {
    static access = azWebappConfigAccess;
    static appsettings = az_webapp_config_appsettings;
    static backup = az_webapp_config_backup;
    static connection = azWebappConfigConnection;
    static container = az_webapp_config_container;
    static hostname = az_webapp_config_hostname;
    static snapshot = az_webapp_config_snapshot;
    static ssl = az_webapp_config_ssl;
    static storage = azWebappConfigStorage;
}

class azWebappDeployment {
    static container = az_webapp_deployment_container;
    static slot = az_webapp_deployment_slot;
    static source = az_webapp_deployment_source;
    static user = az_webapp_deployment_user;
}

class azWebappHybrid {
    static connection = az_webapp_hybrid_connection;
}

class azWebappLog {
    static deployment = az_webapp_log_deployment;
}

class azWebappTraffic {
    static routing = az_webapp_traffic_routing;
}

class azWebappVnet {
    static integration = az_webapp_vnet_integration;
}

class azWebappWebjob {
    static continuous = az_webapp_webjob_continuous;
    static triggered = az_webapp_webjob_triggered;
}

class azWebapp {
    static auth = az_webapp_auth;
    static config = azWebappConfig;
    static cors = az_webapp_cors;
    static deleted = az_webapp_deleted;
    static deployment = azWebappDeployment;
    static hybrid = azWebappHybrid;
    static identity = az_webapp_identity;
    static log = azWebappLog;
    static traffic = azWebappTraffic;
    static vnet = azWebappVnet;
    static webjob = azWebappWebjob;
}

class az {
    static account = account;
    static acr = acr;
    static acs = acs;
    static ad = ad;
    static advisor = advisor;
    static aks = aks;
    static ams = ams;
    static apim = apim;
    static appconfig = appconfig;
    static appservice = appservice;
    static aro = az_aro;
    static artifacts = artifacts;
    static backup = backup;
    static batch = batch;
    static batchai = batchai;
    static billing = billing;
    static boards = boards;
    static bot = bot;
    static cache = az_cache;
    static cdn = cdn;
    static cloud = az_cloud;
    static cognitiveservices = cognitiveservices;
    static config = config;
    static consumption = consumption;
    static container = az_container;
    static cosmosdb = cosmosdb;
    static deployment = deployment;
    static deploymentmanager = deploymentmanager;
    static devops = devops;
    static disk = disk;
    static dla = dla;
    static dls = dls;
    static dms = dms;
    static eventgrid = eventgrid;
    static eventhubs = eventhubs;
    static extension = az_extension;
    static feature = az_feature;
    static functionapp = functionapp;
    static group = group;
    static hdinsight = hdinsight;
    static identity = az_identity;
    static image = image;
    static iot = iot;
    static iotcentral = iotcentral;
    static keyvault = keyvault;
    static kusto = kusto;
    static lab = lab;
    static local = local;
    static lock = az_lock;
    static managedapp = managedapp;
    static managedservices = managedservices;
    static maps = maps;
    static mariadb = mariadb;
    static monitor = monitor;
    static mysql = mysql;
    static netappfiles = netappfiles;
    static network = network;
    static openshift = openshift;
    static pipelines = pipelines;
    static policy = policy;
    static postgres = postgres;
    static ppg = az_ppg;
    static provider = provider;
    static redis = redis;
    static relay = relay;
    static repos = repos;
    static reservations = reservations;
    static resource = resource;
    static role = role;
    static search = search;
    static security = security;
    static servicebus = servicebus;
    static sf = sf;
    static sig = sig;
    static signalr = signalr;
    static snapshot = az_snapshot;
    static sql = sql;
    static staticwebapp = staticwebapp;
    static storage = storage;
    static synapse = synapse;
    static tag = az_tag;
    static vm = vm;
    static vmss = vmss;
    static webapp = webapp;
}

class extAccountAzAccount {
    static alias = ext_account_az_account_alias;
    static subscription = ext_account_az_account_subscription;
    static tenant = ext_account_az_account_tenant;
}

class extAccountAz {
    static account = extAccountAzAccount;
}

class extAccount {
    static az = extAccountAz;
}

class extAemAzVm {
    static aem = ext_aem_az_vm_aem;
}

class extAemAz {
    static vm = extAemAzVm;
}

class extAem {
    static az = extAemAz;
}

class extAiExamplesAzAi {
    static examples = ext_ai-examples_az_ai_examples;
}

class extAiExamplesAz {
    static ai = extAiExamplesAzAi;
}

class extAiExamples {
    static az = extAiExamplesAz;
}

class extAksPreviewAzAks {
    static nodepool = ext_aks-preview_az_aks_nodepool;
}

class extAksPreviewAz {
    static aks = extAksPreviewAzAks;
}

class extAksPreview {
    static az = extAksPreviewAz;
}

class extAlertsmanagementAzMonitorAction {
    static rule = ext_alertsmanagement_az_monitor_action_rule;
}

class extAlertsmanagementAzMonitor {
    static action = extAlertsmanagementAzMonitorAction;
}

class extAlertsmanagementAz {
    static monitor = extAlertsmanagementAzMonitor;
}

class extAlertsmanagement {
    static az = extAlertsmanagementAz;
}

class extAliasAz {
    static alias = ext_alias_az_alias;
}

class extAlias {
    static az = extAliasAz;
}

class extApplicationInsightsAzMonitorAppInsightsApi {
    static key = ext_application-insights_az_monitor_app_insights_api_key;
}

class extApplicationInsightsAzMonitorAppInsightsComponentLinked {
    static storage = ext_application-insights_az_monitor_app_insights_component_linked_storage;
}

class extApplicationInsightsAzMonitorAppInsightsComponent {
    static billing = ext_application-insights_az_monitor_app_insights_component_billing;
    static linked = extApplicationInsightsAzMonitorAppInsightsComponentLinked;
}

class extApplicationInsightsAzMonitorAppInsights {
    static api = extApplicationInsightsAzMonitorAppInsightsApi;
    static component = extApplicationInsightsAzMonitorAppInsightsComponent;
    static events = ext_application-insights_az_monitor_app_insights_events;
    static metrics = ext_application-insights_az_monitor_app_insights_metrics;
}

class extApplicationInsightsAzMonitorApp {
    static insights = extApplicationInsightsAzMonitorAppInsights;
}

class extApplicationInsightsAzMonitor {
    static app = extApplicationInsightsAzMonitorApp;
}

class extApplicationInsightsAz {
    static monitor = extApplicationInsightsAzMonitor;
}

class extApplicationInsights {
    static az = extApplicationInsightsAz;
}

class extAttestationAzAttestation {
    static policy = ext_attestation_az_attestation_policy;
    static signer = ext_attestation_az_attestation_signer;
}

class extAttestationAz {
    static attestation = extAttestationAzAttestation;
}

class extAttestation {
    static az = extAttestationAz;
}

class extAzureBatchCliExtensionsAzBatch {
    static file = ext_azure-batch-cli-extensions_az_batch_file;
    static job = ext_azure-batch-cli-extensions_az_batch_job;
    static pool = ext_azure-batch-cli-extensions_az_batch_pool;
}

class extAzureBatchCliExtensionsAz {
    static batch = extAzureBatchCliExtensionsAzBatch;
}

class extAzureBatchCliExtensions {
    static az = extAzureBatchCliExtensionsAz;
}

class extAzureCliIotExtAzIotCentralDevice {
    static twin = ext_azure-cli-iot-ext_az_iot_central_device_twin;
}

class extAzureCliIotExtAzIotCentral {
    static app = ext_azure-cli-iot-ext_az_iot_central_app;
    static device = extAzureCliIotExtAzIotCentralDevice;
}

class extAzureCliIotExtAzIotDeviceC2D {
    static message = ext_azure-cli-iot-ext_az_iot_device_c2d_message;
}

class extAzureCliIotExtAzIotDevice {
    static c2d = extAzureCliIotExtAzIotDeviceC2D;
}

class extAzureCliIotExtAzIotDpsEnrollment {
    static group = ext_azure-cli-iot-ext_az_iot_dps_enrollment_group;
}

class extAzureCliIotExtAzIotDps {
    static enrollment = extAzureCliIotExtAzIotDpsEnrollment;
    static registration = ext_azure-cli-iot-ext_az_iot_dps_registration;
}

class extAzureCliIotExtAzIotEdge {
    static deployment = ext_azure-cli-iot-ext_az_iot_edge_deployment;
}

class extAzureCliIotExtAzIotHubDevice {
    static identity = ext_azure-cli-iot-ext_az_iot_hub_device_identity;
    static twin = ext_azure-cli-iot-ext_az_iot_hub_device_twin;
}

class extAzureCliIotExtAzIotHubDistributed {
    static tracing = ext_azure-cli-iot-ext_az_iot_hub_distributed_tracing;
}

class extAzureCliIotExtAzIotHubModule {
    static identity = ext_azure-cli-iot-ext_az_iot_hub_module_identity;
    static twin = ext_azure-cli-iot-ext_az_iot_hub_module_twin;
}

class extAzureCliIotExtAzIotHub {
    static configuration = ext_azure-cli-iot-ext_az_iot_hub_configuration;
    static device = extAzureCliIotExtAzIotHubDevice;
    static distributed = extAzureCliIotExtAzIotHubDistributed;
    static job = ext_azure-cli-iot-ext_az_iot_hub_job;
    static module = extAzureCliIotExtAzIotHubModule;
}

class extAzureCliIotExtAzIotPnpCapability {
    static model = ext_azure-cli-iot-ext_az_iot_pnp_capability_model;
}

class extAzureCliIotExtAzIotPnp {
    static capability = extAzureCliIotExtAzIotPnpCapability;
    static interface = ext_azure-cli-iot-ext_az_iot_pnp_interface;
}

class extAzureCliIotExtAzIot {
    static central = extAzureCliIotExtAzIotCentral;
    static device = extAzureCliIotExtAzIotDevice;
    static dps = extAzureCliIotExtAzIotDps;
    static dt = ext_azure-cli-iot-ext_az_iot_dt;
    static edge = extAzureCliIotExtAzIotEdge;
    static hub = extAzureCliIotExtAzIotHub;
    static pnp = extAzureCliIotExtAzIotPnp;
}

class extAzureCliIotExtAzIotcentralDevice {
    static twin = ext_azure-cli-iot-ext_az_iotcentral_device_twin;
}

class extAzureCliIotExtAzIotcentral {
    static app = ext_azure-cli-iot-ext_az_iotcentral_app;
    static device = extAzureCliIotExtAzIotcentralDevice;
}

class extAzureCliIotExtAz {
    static iot = extAzureCliIotExtAzIot;
    static iotcentral = extAzureCliIotExtAzIotcentral;
}

class extAzureCliIotExt {
    static az = extAzureCliIotExtAz;
}

class extAzureCliMlAzMlComputetargetAmlcompute {
    static identity = ext_azure-cli-ml_az_ml_computetarget_amlcompute_identity;
}

class extAzureCliMlAzMlComputetarget {
    static amlcompute = extAzureCliMlAzMlComputetargetAmlcompute;
    static attach = ext_azure-cli-ml_az_ml_computetarget_attach;
    static computeinstance = ext_azure-cli-ml_az_ml_computetarget_computeinstance;
    static create = ext_azure-cli-ml_az_ml_computetarget_create;
    static update = ext_azure-cli-ml_az_ml_computetarget_update;
}

class extAzureCliMlAzMlEndpoint {
    static realtime = ext_azure-cli-ml_az_ml_endpoint_realtime;
}

class extAzureCliMlAzMlWorkspacePrivate {
    static endpoint = ext_azure-cli-ml_az_ml_workspace_private_endpoint;
}

class extAzureCliMlAzMlWorkspace {
    static private = extAzureCliMlAzMlWorkspacePrivate;
}

class extAzureCliMlAzMl {
    static computetarget = extAzureCliMlAzMlComputetarget;
    static dataset = ext_azure-cli-ml_az_ml_dataset;
    static datastore = ext_azure-cli-ml_az_ml_datastore;
    static endpoint = extAzureCliMlAzMlEndpoint;
    static environment = ext_azure-cli-ml_az_ml_environment;
    static experiment = ext_azure-cli-ml_az_ml_experiment;
    static folder = ext_azure-cli-ml_az_ml_folder;
    static model = ext_azure-cli-ml_az_ml_model;
    static pipeline = ext_azure-cli-ml_az_ml_pipeline;
    static run = ext_azure-cli-ml_az_ml_run;
    static service = ext_azure-cli-ml_az_ml_service;
    static workspace = extAzureCliMlAzMlWorkspace;
}

class extAzureCliMlAz {
    static ml = extAzureCliMlAzMl;
}

class extAzureCliMl {
    static az = extAzureCliMlAz;
}

class extAzureDevopsAzArtifacts {
    static universal = ext_azure-devops_az_artifacts_universal;
}

class extAzureDevopsAzBoardsArea {
    static project = ext_azure-devops_az_boards_area_project;
    static team = ext_azure-devops_az_boards_area_team;
}

class extAzureDevopsAzBoardsIteration {
    static project = ext_azure-devops_az_boards_iteration_project;
    static team = ext_azure-devops_az_boards_iteration_team;
}

class extAzureDevopsAzBoardsWorkItem {
    static relation = ext_azure-devops_az_boards_work_item_relation;
}

class extAzureDevopsAzBoardsWork {
    static item = extAzureDevopsAzBoardsWorkItem;
}

class extAzureDevopsAzBoards {
    static area = extAzureDevopsAzBoardsArea;
    static iteration = extAzureDevopsAzBoardsIteration;
    static work = extAzureDevopsAzBoardsWork;
}

class extAzureDevopsAzDevopsAdmin {
    static banner = ext_azure-devops_az_devops_admin_banner;
}

class extAzureDevopsAzDevopsSecurityGroup {
    static membership = ext_azure-devops_az_devops_security_group_membership;
}

class extAzureDevopsAzDevopsSecurityPermission {
    static namespace = ext_azure-devops_az_devops_security_permission_namespace;
}

class extAzureDevopsAzDevopsSecurity {
    static group = extAzureDevopsAzDevopsSecurityGroup;
    static permission = extAzureDevopsAzDevopsSecurityPermission;
}

class extAzureDevopsAzDevopsServiceEndpoint {
    static azurerm = ext_azure-devops_az_devops_service_endpoint_azurerm;
    static github = ext_azure-devops_az_devops_service_endpoint_github;
}

class extAzureDevopsAzDevopsService {
    static endpoint = extAzureDevopsAzDevopsServiceEndpoint;
}

class extAzureDevopsAzDevopsWiki {
    static page = ext_azure-devops_az_devops_wiki_page;
}

class extAzureDevopsAzDevops {
    static admin = extAzureDevopsAzDevopsAdmin;
    static extension = ext_azure-devops_az_devops_extension;
    static project = ext_azure-devops_az_devops_project;
    static security = extAzureDevopsAzDevopsSecurity;
    static service = extAzureDevopsAzDevopsService;
    static team = ext_azure-devops_az_devops_team;
    static user = ext_azure-devops_az_devops_user;
    static wiki = extAzureDevopsAzDevopsWiki;
}

class extAzureDevopsAzPipelinesBuild {
    static definition = ext_azure-devops_az_pipelines_build_definition;
    static tag = ext_azure-devops_az_pipelines_build_tag;
}

class extAzureDevopsAzPipelinesRelease {
    static definition = ext_azure-devops_az_pipelines_release_definition;
}

class extAzureDevopsAzPipelinesRuns {
    static artifact = ext_azure-devops_az_pipelines_runs_artifact;
    static tag = ext_azure-devops_az_pipelines_runs_tag;
}

class extAzureDevopsAzPipelinesVariableGroup {
    static variable = ext_azure-devops_az_pipelines_variable_group_variable;
}

class extAzureDevopsAzPipelinesVariable {
    static group = extAzureDevopsAzPipelinesVariableGroup;
}

class extAzureDevopsAzPipelines {
    static agent = ext_azure-devops_az_pipelines_agent;
    static build = extAzureDevopsAzPipelinesBuild;
    static folder = ext_azure-devops_az_pipelines_folder;
    static pool = ext_azure-devops_az_pipelines_pool;
    static queue = ext_azure-devops_az_pipelines_queue;
    static release = extAzureDevopsAzPipelinesRelease;
    static runs = extAzureDevopsAzPipelinesRuns;
    static variable = extAzureDevopsAzPipelinesVariable;
}

class extAzureDevopsAzReposPolicyApprover {
    static count = ext_azure-devops_az_repos_policy_approver_count;
}

class extAzureDevopsAzReposPolicyCase {
    static enforcement = ext_azure-devops_az_repos_policy_case_enforcement;
}

class extAzureDevopsAzReposPolicyComment {
    static required = ext_azure-devops_az_repos_policy_comment_required;
}

class extAzureDevopsAzReposPolicyFile {
    static size = ext_azure-devops_az_repos_policy_file_size;
}

class extAzureDevopsAzReposPolicyMerge {
    static strategy = ext_azure-devops_az_repos_policy_merge_strategy;
}

class extAzureDevopsAzReposPolicyRequired {
    static reviewer = ext_azure-devops_az_repos_policy_required_reviewer;
}

class extAzureDevopsAzReposPolicyWorkItem {
    static linking = ext_azure-devops_az_repos_policy_work_item_linking;
}

class extAzureDevopsAzReposPolicyWork {
    static item = extAzureDevopsAzReposPolicyWorkItem;
}

class extAzureDevopsAzReposPolicy {
    static approver = extAzureDevopsAzReposPolicyApprover;
    static build = ext_azure-devops_az_repos_policy_build;
    static case = extAzureDevopsAzReposPolicyCase;
    static comment = extAzureDevopsAzReposPolicyComment;
    static file = extAzureDevopsAzReposPolicyFile;
    static merge = extAzureDevopsAzReposPolicyMerge;
    static required = extAzureDevopsAzReposPolicyRequired;
    static work = extAzureDevopsAzReposPolicyWork;
}

class extAzureDevopsAzReposPrWork {
    static item = ext_azure-devops_az_repos_pr_work_item;
}

class extAzureDevopsAzReposPr {
    static policy = ext_azure-devops_az_repos_pr_policy;
    static reviewer = ext_azure-devops_az_repos_pr_reviewer;
    static work = extAzureDevopsAzReposPrWork;
}

class extAzureDevopsAzRepos {
    static import = ext_azure-devops_az_repos_import;
    static policy = extAzureDevopsAzReposPolicy;
    static pr = extAzureDevopsAzReposPr;
    static ref = ext_azure-devops_az_repos_ref;
}

class extAzureDevopsAz {
    static artifacts = extAzureDevopsAzArtifacts;
    static boards = extAzureDevopsAzBoards;
    static devops = extAzureDevopsAzDevops;
    static pipelines = extAzureDevopsAzPipelines;
    static repos = extAzureDevopsAzRepos;
}

class extAzureDevops {
    static az = extAzureDevopsAz;
}

class extAzureFirewallAzNetworkFirewallApplicationRule {
    static collection = ext_azure-firewall_az_network_firewall_application_rule_collection;
}

class extAzureFirewallAzNetworkFirewallApplication {
    static rule = extAzureFirewallAzNetworkFirewallApplicationRule;
}

class extAzureFirewallAzNetworkFirewallIp {
    static config = ext_azure-firewall_az_network_firewall_ip_config;
}

class extAzureFirewallAzNetworkFirewallManagementIp {
    static config = ext_azure-firewall_az_network_firewall_management_ip_config;
}

class extAzureFirewallAzNetworkFirewallManagement {
    static ip = extAzureFirewallAzNetworkFirewallManagementIp;
}

class extAzureFirewallAzNetworkFirewallNatRule {
    static collection = ext_azure-firewall_az_network_firewall_nat_rule_collection;
}

class extAzureFirewallAzNetworkFirewallNat {
    static rule = extAzureFirewallAzNetworkFirewallNatRule;
}

class extAzureFirewallAzNetworkFirewallNetworkRule {
    static collection = ext_azure-firewall_az_network_firewall_network_rule_collection;
}

class extAzureFirewallAzNetworkFirewallNetwork {
    static rule = extAzureFirewallAzNetworkFirewallNetworkRule;
}

class extAzureFirewallAzNetworkFirewallPolicyRuleCollectionGroupCollection {
    static rule = ext_azure-firewall_az_network_firewall_policy_rule_collection_group_collection_rule;
}

class extAzureFirewallAzNetworkFirewallPolicyRuleCollectionGroup {
    static collection = extAzureFirewallAzNetworkFirewallPolicyRuleCollectionGroupCollection;
}

class extAzureFirewallAzNetworkFirewallPolicyRuleCollection {
    static group = extAzureFirewallAzNetworkFirewallPolicyRuleCollectionGroup;
}

class extAzureFirewallAzNetworkFirewallPolicyRule {
    static collection = extAzureFirewallAzNetworkFirewallPolicyRuleCollection;
}

class extAzureFirewallAzNetworkFirewallPolicy {
    static rule = extAzureFirewallAzNetworkFirewallPolicyRule;
}

class extAzureFirewallAzNetworkFirewallThreatIntel {
    static allowlist = ext_azure-firewall_az_network_firewall_threat_intel_allowlist;
}

class extAzureFirewallAzNetworkFirewallThreat {
    static intel = extAzureFirewallAzNetworkFirewallThreatIntel;
}

class extAzureFirewallAzNetworkFirewall {
    static application = extAzureFirewallAzNetworkFirewallApplication;
    static ip = extAzureFirewallAzNetworkFirewallIp;
    static management = extAzureFirewallAzNetworkFirewallManagement;
    static nat = extAzureFirewallAzNetworkFirewallNat;
    static network = extAzureFirewallAzNetworkFirewallNetwork;
    static policy = extAzureFirewallAzNetworkFirewallPolicy;
    static threat = extAzureFirewallAzNetworkFirewallThreat;
}

class extAzureFirewallAzNetwork {
    static firewall = extAzureFirewallAzNetworkFirewall;
}

class extAzureFirewallAz {
    static network = extAzureFirewallAzNetwork;
}

class extAzureFirewall {
    static az = extAzureFirewallAz;
}

class extAzureIotAzDtEndpoint {
    static create = ext_azure-iot_az_dt_endpoint_create;
}

class extAzureIotAzDtRole {
    static assignment = ext_azure-iot_az_dt_role_assignment;
}

class extAzureIotAzDtTwin {
    static component = ext_azure-iot_az_dt_twin_component;
    static relationship = ext_azure-iot_az_dt_twin_relationship;
    static telemetry = ext_azure-iot_az_dt_twin_telemetry;
}

class extAzureIotAzDt {
    static endpoint = extAzureIotAzDtEndpoint;
    static model = ext_azure-iot_az_dt_model;
    static role = extAzureIotAzDtRole;
    static route = ext_azure-iot_az_dt_route;
    static twin = extAzureIotAzDtTwin;
}

class extAzureIotAzIotCentralApi {
    static token = ext_azure-iot_az_iot_central_api_token;
}

class extAzureIotAzIotCentralAppDevice {
    static twin = ext_azure-iot_az_iot_central_app_device_twin;
}

class extAzureIotAzIotCentralApp {
    static device = extAzureIotAzIotCentralAppDevice;
}

class extAzureIotAzIotCentralDevice {
    static command = ext_azure-iot_az_iot_central_device_command;
    static template = ext_azure-iot_az_iot_central_device_template;
    static twin = ext_azure-iot_az_iot_central_device_twin;
}

class extAzureIotAzIotCentral {
    static api = extAzureIotAzIotCentralApi;
    static app = extAzureIotAzIotCentralApp;
    static device = extAzureIotAzIotCentralDevice;
    static diagnostics = ext_azure-iot_az_iot_central_diagnostics;
    static user = ext_azure-iot_az_iot_central_user;
}

class extAzureIotAzIotDeviceC2D {
    static message = ext_azure-iot_az_iot_device_c2d_message;
}

class extAzureIotAzIotDevice {
    static c2d = extAzureIotAzIotDeviceC2D;
}

class extAzureIotAzIotDpsEnrollment {
    static group = ext_azure-iot_az_iot_dps_enrollment_group;
}

class extAzureIotAzIotDps {
    static enrollment = extAzureIotAzIotDpsEnrollment;
    static registration = ext_azure-iot_az_iot_dps_registration;
}

class extAzureIotAzIotEdge {
    static deployment = ext_azure-iot_az_iot_edge_deployment;
}

class extAzureIotAzIotHubConnection {
    static string = ext_azure-iot_az_iot_hub_connection_string;
}

class extAzureIotAzIotHubDeviceIdentityConnection {
    static string = ext_azure-iot_az_iot_hub_device_identity_connection_string;
}

class extAzureIotAzIotHubDeviceIdentity {
    static connection = extAzureIotAzIotHubDeviceIdentityConnection;
}

class extAzureIotAzIotHubDevice {
    static identity = extAzureIotAzIotHubDeviceIdentity;
    static twin = ext_azure-iot_az_iot_hub_device_twin;
}

class extAzureIotAzIotHubDistributed {
    static tracing = ext_azure-iot_az_iot_hub_distributed_tracing;
}

class extAzureIotAzIotHubModuleIdentityConnection {
    static string = ext_azure-iot_az_iot_hub_module_identity_connection_string;
}

class extAzureIotAzIotHubModuleIdentity {
    static connection = extAzureIotAzIotHubModuleIdentityConnection;
}

class extAzureIotAzIotHubModule {
    static identity = extAzureIotAzIotHubModuleIdentity;
    static twin = ext_azure-iot_az_iot_hub_module_twin;
}

class extAzureIotAzIotHub {
    static configuration = ext_azure-iot_az_iot_hub_configuration;
    static connection = extAzureIotAzIotHubConnection;
    static device = extAzureIotAzIotHubDevice;
    static distributed = extAzureIotAzIotHubDistributed;
    static job = ext_azure-iot_az_iot_hub_job;
    static module = extAzureIotAzIotHubModule;
}

class extAzureIotAzIotPnpRole {
    static assignment = ext_azure-iot_az_iot_pnp_role_assignment;
}

class extAzureIotAzIotPnp {
    static model = ext_azure-iot_az_iot_pnp_model;
    static repo = ext_azure-iot_az_iot_pnp_repo;
    static role = extAzureIotAzIotPnpRole;
    static twin = ext_azure-iot_az_iot_pnp_twin;
}

class extAzureIotAzIotProductTest {
    static case = ext_azure-iot_az_iot_product_test_case;
    static run = ext_azure-iot_az_iot_product_test_run;
    static task = ext_azure-iot_az_iot_product_test_task;
}

class extAzureIotAzIotProduct {
    static requirement = ext_azure-iot_az_iot_product_requirement;
    static test = extAzureIotAzIotProductTest;
}

class extAzureIotAzIot {
    static central = extAzureIotAzIotCentral;
    static device = extAzureIotAzIotDevice;
    static dps = extAzureIotAzIotDps;
    static edge = extAzureIotAzIotEdge;
    static hub = extAzureIotAzIotHub;
    static pnp = extAzureIotAzIotPnp;
    static product = extAzureIotAzIotProduct;
}

class extAzureIotAz {
    static dt = extAzureIotAzDt;
    static iot = extAzureIotAzIot;
}

class extAzureIot {
    static az = extAzureIotAz;
}

class extBlockchainAzBlockchainTransaction {
    static node = ext_blockchain_az_blockchain_transaction_node;
}

class extBlockchainAzBlockchain {
    static consortium = ext_blockchain_az_blockchain_consortium;
    static member = ext_blockchain_az_blockchain_member;
    static transaction = extBlockchainAzBlockchainTransaction;
}

class extBlockchainAz {
    static blockchain = extBlockchainAzBlockchain;
}

class extBlockchain {
    static az = extBlockchainAz;
}

class extBlueprintAzBlueprintArtifact {
    static policy = ext_blueprint_az_blueprint_artifact_policy;
    static role = ext_blueprint_az_blueprint_artifact_role;
    static template = ext_blueprint_az_blueprint_artifact_template;
}

class extBlueprintAzBlueprintResource {
    static group = ext_blueprint_az_blueprint_resource_group;
}

class extBlueprintAzBlueprintVersion {
    static artifact = ext_blueprint_az_blueprint_version_artifact;
}

class extBlueprintAzBlueprint {
    static artifact = extBlueprintAzBlueprintArtifact;
    static assignment = ext_blueprint_az_blueprint_assignment;
    static resource = extBlueprintAzBlueprintResource;
    static version = extBlueprintAzBlueprintVersion;
}

class extBlueprintAz {
    static blueprint = extBlueprintAzBlueprint;
}

class extBlueprint {
    static az = extBlueprintAz;
}

class extCodespacesAzCodespace {
    static location = ext_codespaces_az_codespace_location;
    static plan = ext_codespaces_az_codespace_plan;
    static secret = ext_codespaces_az_codespace_secret;
}

class extCodespacesAz {
    static codespace = extCodespacesAzCodespace;
}

class extCodespaces {
    static az = extCodespacesAz;
}

class extConnectedk8SAz {
    static connectedk8s = ext_connectedk8s_az_connectedk8s;
}

class extConnectedk8S {
    static az = extConnectedk8SAz;
}

class extConnectedmachineAzConnectedmachineMachine {
    static extension = ext_connectedmachine_az_connectedmachine_machine_extension;
}

class extConnectedmachineAzConnectedmachine {
    static machine = extConnectedmachineAzConnectedmachineMachine;
}

class extConnectedmachineAz {
    static connectedmachine = extConnectedmachineAzConnectedmachine;
}

class extConnectedmachine {
    static az = extConnectedmachineAz;
}

class extCostmanagementAzCostmanagement {
    static export = ext_costmanagement_az_costmanagement_export;
}

class extCostmanagementAz {
    static costmanagement = extCostmanagementAzCostmanagement;
}

class extCostmanagement {
    static az = extCostmanagementAz;
}

class extCsvmwareAzCsvmwarePrivate {
    static cloud = ext_csvmware_az_csvmware_private_cloud;
}

class extCsvmwareAzCsvmwareResource {
    static pool = ext_csvmware_az_csvmware_resource_pool;
}

class extCsvmwareAzCsvmwareVirtual {
    static network = ext_csvmware_az_csvmware_virtual_network;
}

class extCsvmwareAzCsvmwareVm {
    static disk = ext_csvmware_az_csvmware_vm_disk;
    static nic = ext_csvmware_az_csvmware_vm_nic;
    static template = ext_csvmware_az_csvmware_vm_template;
}

class extCsvmwareAzCsvmware {
    static private = extCsvmwareAzCsvmwarePrivate;
    static resource = extCsvmwareAzCsvmwareResource;
    static virtual = extCsvmwareAzCsvmwareVirtual;
    static vm = extCsvmwareAzCsvmwareVm;
}

class extCsvmwareAz {
    static csvmware = extCsvmwareAzCsvmware;
}

class extCsvmware {
    static az = extCsvmwareAz;
}

class extCustomProvidersAzCustomProvidersResource {
    static provider = ext_custom-providers_az_custom_providers_resource_provider;
}

class extCustomProvidersAzCustomProviders {
    static resource = extCustomProvidersAzCustomProvidersResource;
}

class extCustomProvidersAzCustom {
    static providers = extCustomProvidersAzCustomProviders;
}

class extCustomProvidersAz {
    static custom = extCustomProvidersAzCustom;
}

class extCustomProviders {
    static az = extCustomProvidersAz;
}

class extDataboxAzDatabox {
    static job = ext_databox_az_databox_job;
}

class extDataboxAz {
    static databox = extDataboxAzDatabox;
}

class extDatabox {
    static az = extDataboxAz;
}

class extDatabricksAzDatabricksWorkspaceVnet {
    static peering = ext_databricks_az_databricks_workspace_vnet_peering;
}

class extDatabricksAzDatabricksWorkspace {
    static vnet = extDatabricksAzDatabricksWorkspaceVnet;
}

class extDatabricksAzDatabricks {
    static workspace = extDatabricksAzDatabricksWorkspace;
}

class extDatabricksAz {
    static databricks = extDatabricksAzDatabricks;
}

class extDatabricks {
    static az = extDatabricksAz;
}

class extDatafactoryAzDatafactoryActivity {
    static run = ext_datafactory_az_datafactory_activity_run;
}

class extDatafactoryAzDatafactoryIntegrationRuntimeLinkedIntegration {
    static runtime = ext_datafactory_az_datafactory_integration_runtime_linked_integration_runtime;
}

class extDatafactoryAzDatafactoryIntegrationRuntimeLinked {
    static integration = extDatafactoryAzDatafactoryIntegrationRuntimeLinkedIntegration;
}

class extDatafactoryAzDatafactoryIntegrationRuntimeSelf {
    static hosted = ext_datafactory_az_datafactory_integration_runtime_self_hosted;
}

class extDatafactoryAzDatafactoryIntegrationRuntime {
    static linked = extDatafactoryAzDatafactoryIntegrationRuntimeLinked;
    static managed = ext_datafactory_az_datafactory_integration_runtime_managed;
    static node = ext_datafactory_az_datafactory_integration_runtime_node;
    static self = extDatafactoryAzDatafactoryIntegrationRuntimeSelf;
}

class extDatafactoryAzDatafactoryIntegration {
    static runtime = extDatafactoryAzDatafactoryIntegrationRuntime;
}

class extDatafactoryAzDatafactoryLinked {
    static service = ext_datafactory_az_datafactory_linked_service;
}

class extDatafactoryAzDatafactoryPipeline {
    static run = ext_datafactory_az_datafactory_pipeline_run;
}

class extDatafactoryAzDatafactoryTrigger {
    static run = ext_datafactory_az_datafactory_trigger_run;
}

class extDatafactoryAzDatafactory {
    static activity = extDatafactoryAzDatafactoryActivity;
    static dataset = ext_datafactory_az_datafactory_dataset;
    static factory = ext_datafactory_az_datafactory_factory;
    static integration = extDatafactoryAzDatafactoryIntegration;
    static linked = extDatafactoryAzDatafactoryLinked;
    static pipeline = extDatafactoryAzDatafactoryPipeline;
    static trigger = extDatafactoryAzDatafactoryTrigger;
}

class extDatafactoryAz {
    static datafactory = extDatafactoryAzDatafactory;
}

class extDatafactory {
    static az = extDatafactoryAz;
}

class extDatashareAzDatashareConsumerDataset {
    static mapping = ext_datashare_az_datashare_consumer_dataset_mapping;
}

class extDatashareAzDatashareConsumerShareSubscription {
    static synchronization = ext_datashare_az_datashare_consumer_share_subscription_synchronization;
}

class extDatashareAzDatashareConsumerShare {
    static subscription = extDatashareAzDatashareConsumerShareSubscription;
}

class extDatashareAzDatashareConsumer {
    static dataset = extDatashareAzDatashareConsumerDataset;
    static invitation = ext_datashare_az_datashare_consumer_invitation;
    static share = extDatashareAzDatashareConsumerShare;
    static trigger = ext_datashare_az_datashare_consumer_trigger;
}

class extDatashareAzDatashareProviderShare {
    static subscription = ext_datashare_az_datashare_provider_share_subscription;
}

class extDatashareAzDatashareProvider {
    static share = extDatashareAzDatashareProviderShare;
}

class extDatashareAzDatashareSynchronization {
    static setting = ext_datashare_az_datashare_synchronization_setting;
}

class extDatashareAzDatashare {
    static account = ext_datashare_az_datashare_account;
    static consumer = extDatashareAzDatashareConsumer;
    static dataset = ext_datashare_az_datashare_dataset;
    static invitation = ext_datashare_az_datashare_invitation;
    static provider = extDatashareAzDatashareProvider;
    static synchronization = extDatashareAzDatashareSynchronization;
}

class extDatashareAz {
    static datashare = extDatashareAzDatashare;
}

class extDatashare {
    static az = extDatashareAz;
}

class extDbUpAz {
    static mysql = ext_db-up_az_mysql;
    static postgres = ext_db-up_az_postgres;
    static sql = ext_db-up_az_sql;
}

class extDbUp {
    static az = extDbUpAz;
}

class extDeployToAzureAzAks {
    static app = ext_deploy-to-azure_az_aks_app;
}

class extDeployToAzureAzContainer {
    static app = ext_deploy-to-azure_az_container_app;
}

class extDeployToAzureAzFunctionapp {
    static app = ext_deploy-to-azure_az_functionapp_app;
}

class extDeployToAzureAz {
    static aks = extDeployToAzureAzAks;
    static container = extDeployToAzureAzContainer;
    static functionapp = extDeployToAzureAzFunctionapp;
}

class extDeployToAzure {
    static az = extDeployToAzureAz;
}

class extDesktopvirtualizationAzDesktopvirtualization {
    static applicationgroup = ext_desktopvirtualization_az_desktopvirtualization_applicationgroup;
    static hostpool = ext_desktopvirtualization_az_desktopvirtualization_hostpool;
    static workspace = ext_desktopvirtualization_az_desktopvirtualization_workspace;
}

class extDesktopvirtualizationAz {
    static desktopvirtualization = extDesktopvirtualizationAzDesktopvirtualization;
}

class extDesktopvirtualization {
    static az = extDesktopvirtualizationAz;
}

class extDevSpacesAz {
    static aks = ext_dev-spaces_az_aks;
}

class extDevSpaces {
    static az = extDevSpacesAz;
}

class extDmsPreviewAzDmsProject {
    static task = ext_dms-preview_az_dms_project_task;
}

class extDmsPreviewAzDms {
    static project = extDmsPreviewAzDmsProject;
    static task = ext_dms-preview_az_dms_task;
}

class extDmsPreviewAz {
    static dms = extDmsPreviewAzDms;
}

class extDmsPreview {
    static az = extDmsPreviewAz;
}

class extEventgridAzEventgridDomainPrivateEndpoint {
    static connection = ext_eventgrid_az_eventgrid_domain_private_endpoint_connection;
}

class extEventgridAzEventgridDomainPrivateLink {
    static resource = ext_eventgrid_az_eventgrid_domain_private_link_resource;
}

class extEventgridAzEventgridDomainPrivate {
    static endpoint = extEventgridAzEventgridDomainPrivateEndpoint;
    static link = extEventgridAzEventgridDomainPrivateLink;
}

class extEventgridAzEventgridDomain {
    static key = ext_eventgrid_az_eventgrid_domain_key;
    static private = extEventgridAzEventgridDomainPrivate;
    static topic = ext_eventgrid_az_eventgrid_domain_topic;
}

class extEventgridAzEventgridEvent {
    static subscription = ext_eventgrid_az_eventgrid_event_subscription;
}

class extEventgridAzEventgridExtension {
    static topic = ext_eventgrid_az_eventgrid_extension_topic;
}

class extEventgridAzEventgridPartnerNamespaceEvent {
    static channel = ext_eventgrid_az_eventgrid_partner_namespace_event_channel;
}

class extEventgridAzEventgridPartnerNamespace {
    static event = extEventgridAzEventgridPartnerNamespaceEvent;
    static key = ext_eventgrid_az_eventgrid_partner_namespace_key;
}

class extEventgridAzEventgridPartnerTopicEvent {
    static subscription = ext_eventgrid_az_eventgrid_partner_topic_event_subscription;
}

class extEventgridAzEventgridPartnerTopic {
    static event = extEventgridAzEventgridPartnerTopicEvent;
}

class extEventgridAzEventgridPartner {
    static namespace = extEventgridAzEventgridPartnerNamespace;
    static registration = ext_eventgrid_az_eventgrid_partner_registration;
    static topic = extEventgridAzEventgridPartnerTopic;
}

class extEventgridAzEventgridSystemTopicEvent {
    static subscription = ext_eventgrid_az_eventgrid_system_topic_event_subscription;
}

class extEventgridAzEventgridSystemTopic {
    static event = extEventgridAzEventgridSystemTopicEvent;
}

class extEventgridAzEventgridSystem {
    static topic = extEventgridAzEventgridSystemTopic;
}

class extEventgridAzEventgridTopicPrivateEndpoint {
    static connection = ext_eventgrid_az_eventgrid_topic_private_endpoint_connection;
}

class extEventgridAzEventgridTopicPrivateLink {
    static resource = ext_eventgrid_az_eventgrid_topic_private_link_resource;
}

class extEventgridAzEventgridTopicPrivate {
    static endpoint = extEventgridAzEventgridTopicPrivateEndpoint;
    static link = extEventgridAzEventgridTopicPrivateLink;
}

class extEventgridAzEventgridTopic {
    static key = ext_eventgrid_az_eventgrid_topic_key;
    static private = extEventgridAzEventgridTopicPrivate;
    static type = ext_eventgrid_az_eventgrid_topic_type;
}

class extEventgridAzEventgrid {
    static domain = extEventgridAzEventgridDomain;
    static event = extEventgridAzEventgridEvent;
    static extension = extEventgridAzEventgridExtension;
    static partner = extEventgridAzEventgridPartner;
    static system = extEventgridAzEventgridSystem;
    static topic = extEventgridAzEventgridTopic;
}

class extEventgridAz {
    static eventgrid = extEventgridAzEventgrid;
}

class extEventgrid {
    static az = extEventgridAz;
}

class extExpressRouteCrossConnectionAzNetworkCrossConnection {
    static peering = ext_express-route-cross-connection_az_network_cross_connection_peering;
}

class extExpressRouteCrossConnectionAzNetworkCross {
    static connection = extExpressRouteCrossConnectionAzNetworkCrossConnection;
}

class extExpressRouteCrossConnectionAzNetwork {
    static cross = extExpressRouteCrossConnectionAzNetworkCross;
}

class extExpressRouteCrossConnectionAz {
    static network = extExpressRouteCrossConnectionAzNetwork;
}

class extExpressRouteCrossConnection {
    static az = extExpressRouteCrossConnectionAz;
}

class extExpressRouteAzNetworkExpressRouteGateway {
    static connection = ext_express-route_az_network_express_route_gateway_connection;
}

class extExpressRouteAzNetworkExpressRoutePort {
    static link = ext_express-route_az_network_express_route_port_link;
    static location = ext_express-route_az_network_express_route_port_location;
}

class extExpressRouteAzNetworkExpressRoute {
    static gateway = extExpressRouteAzNetworkExpressRouteGateway;
    static port = extExpressRouteAzNetworkExpressRoutePort;
}

class extExpressRouteAzNetworkExpress {
    static route = extExpressRouteAzNetworkExpressRoute;
}

class extExpressRouteAzNetwork {
    static express = extExpressRouteAzNetworkExpress;
}

class extExpressRouteAz {
    static network = extExpressRouteAzNetwork;
}

class extExpressRoute {
    static az = extExpressRouteAz;
}

class extFootprintAzFootprintMeasurementEndpoint {
    static condition = ext_footprint_az_footprint_measurement_endpoint_condition;
}

class extFootprintAzFootprintMeasurement {
    static endpoint = extFootprintAzFootprintMeasurementEndpoint;
}

class extFootprintAzFootprint {
    static experiment = ext_footprint_az_footprint_experiment;
    static measurement = extFootprintAzFootprintMeasurement;
    static profile = ext_footprint_az_footprint_profile;
}

class extFootprintAz {
    static footprint = extFootprintAzFootprint;
}

class extFootprint {
    static az = extFootprintAz;
}

class extFrontDoorAzNetworkFrontDoorBackendPool {
    static backend = ext_front-door_az_network_front_door_backend_pool_backend;
}

class extFrontDoorAzNetworkFrontDoorBackend {
    static pool = extFrontDoorAzNetworkFrontDoorBackendPool;
}

class extFrontDoorAzNetworkFrontDoorFrontend {
    static endpoint = ext_front-door_az_network_front_door_frontend_endpoint;
}

class extFrontDoorAzNetworkFrontDoorLoad {
    static balancing = ext_front-door_az_network_front_door_load_balancing;
}

class extFrontDoorAzNetworkFrontDoorRouting {
    static rule = ext_front-door_az_network_front_door_routing_rule;
}

class extFrontDoorAzNetworkFrontDoorRulesEngineRule {
    static action = ext_front-door_az_network_front_door_rules_engine_rule_action;
    static condition = ext_front-door_az_network_front_door_rules_engine_rule_condition;
}

class extFrontDoorAzNetworkFrontDoorRulesEngine {
    static rule = extFrontDoorAzNetworkFrontDoorRulesEngineRule;
}

class extFrontDoorAzNetworkFrontDoorRules {
    static engine = extFrontDoorAzNetworkFrontDoorRulesEngine;
}

class extFrontDoorAzNetworkFrontDoorWafPolicyManagedRule {
    static definition = ext_front-door_az_network_front_door_waf_policy_managed_rule_definition;
}

class extFrontDoorAzNetworkFrontDoorWafPolicyManagedRules {
    static exclusion = ext_front-door_az_network_front_door_waf_policy_managed_rules_exclusion;
    static override = ext_front-door_az_network_front_door_waf_policy_managed_rules_override;
}

class extFrontDoorAzNetworkFrontDoorWafPolicyManaged {
    static rule = extFrontDoorAzNetworkFrontDoorWafPolicyManagedRule;
    static rules = extFrontDoorAzNetworkFrontDoorWafPolicyManagedRules;
}

class extFrontDoorAzNetworkFrontDoorWafPolicyRuleMatch {
    static condition = ext_front-door_az_network_front_door_waf_policy_rule_match_condition;
}

class extFrontDoorAzNetworkFrontDoorWafPolicyRule {
    static match = extFrontDoorAzNetworkFrontDoorWafPolicyRuleMatch;
}

class extFrontDoorAzNetworkFrontDoorWafPolicy {
    static managed = extFrontDoorAzNetworkFrontDoorWafPolicyManaged;
    static rule = extFrontDoorAzNetworkFrontDoorWafPolicyRule;
}

class extFrontDoorAzNetworkFrontDoorWaf {
    static policy = extFrontDoorAzNetworkFrontDoorWafPolicy;
}

class extFrontDoorAzNetworkFrontDoor {
    static backend = extFrontDoorAzNetworkFrontDoorBackend;
    static frontend = extFrontDoorAzNetworkFrontDoorFrontend;
    static load = extFrontDoorAzNetworkFrontDoorLoad;
    static probe = ext_front-door_az_network_front_door_probe;
    static routing = extFrontDoorAzNetworkFrontDoorRouting;
    static rules = extFrontDoorAzNetworkFrontDoorRules;
    static waf = extFrontDoorAzNetworkFrontDoorWaf;
}

class extFrontDoorAzNetworkFront {
    static door = extFrontDoorAzNetworkFrontDoor;
}

class extFrontDoorAzNetwork {
    static front = extFrontDoorAzNetworkFront;
}

class extFrontDoorAz {
    static network = extFrontDoorAzNetwork;
}

class extFrontDoor {
    static az = extFrontDoorAz;
}

class extFzfAz {
    static fzf = ext_fzf_az_fzf;
}

class extFzf {
    static az = extFzfAz;
}

class extGuestconfigAzGuestconfigGuestConfigurationAssignment {
    static report = ext_guestconfig_az_guestconfig_guest_configuration_assignment_report;
}

class extGuestconfigAzGuestconfigGuestConfigurationHcrpAssignment {
    static report = ext_guestconfig_az_guestconfig_guest_configuration_hcrp_assignment_report;
}

class extGuestconfigAzGuestconfigGuestConfigurationHcrp {
    static assignment = extGuestconfigAzGuestconfigGuestConfigurationHcrpAssignment;
}

class extGuestconfigAzGuestconfigGuestConfiguration {
    static assignment = extGuestconfigAzGuestconfigGuestConfigurationAssignment;
    static hcrp = extGuestconfigAzGuestconfigGuestConfigurationHcrp;
}

class extGuestconfigAzGuestconfigGuest {
    static configuration = extGuestconfigAzGuestconfigGuestConfiguration;
}

class extGuestconfigAzGuestconfig {
    static guest = extGuestconfigAzGuestconfigGuest;
}

class extGuestconfigAz {
    static guestconfig = extGuestconfigAzGuestconfig;
}

class extGuestconfig {
    static az = extGuestconfigAz;
}

class extHackAz {
    static hack = ext_hack_az_hack;
}

class extHack {
    static az = extHackAz;
}

class extHardwareSecurityModulesAzDedicated {
    static hsm = ext_hardware-security-modules_az_dedicated_hsm;
}

class extHardwareSecurityModulesAz {
    static dedicated = extHardwareSecurityModulesAzDedicated;
}

class extHardwareSecurityModules {
    static az = extHardwareSecurityModulesAz;
}

class extHealthcareapisAzHealthcareapisOperation {
    static result = ext_healthcareapis_az_healthcareapis_operation_result;
}

class extHealthcareapisAzHealthcareapis {
    static operation = extHealthcareapisAzHealthcareapisOperation;
    static service = ext_healthcareapis_az_healthcareapis_service;
}

class extHealthcareapisAz {
    static healthcareapis = extHealthcareapisAzHealthcareapis;
}

class extHealthcareapis {
    static az = extHealthcareapisAz;
}

class extHpcCacheAzHpcCacheBlobStorage {
    static target = ext_hpc-cache_az_hpc_cache_blob_storage_target;
}

class extHpcCacheAzHpcCacheBlob {
    static storage = extHpcCacheAzHpcCacheBlobStorage;
}

class extHpcCacheAzHpcCacheNfsStorage {
    static target = ext_hpc-cache_az_hpc_cache_nfs_storage_target;
}

class extHpcCacheAzHpcCacheNfs {
    static storage = extHpcCacheAzHpcCacheNfsStorage;
}

class extHpcCacheAzHpcCacheStorage {
    static target = ext_hpc-cache_az_hpc_cache_storage_target;
}

class extHpcCacheAzHpcCacheUsage {
    static model = ext_hpc-cache_az_hpc_cache_usage_model;
}

class extHpcCacheAzHpcCache {
    static blob = extHpcCacheAzHpcCacheBlob;
    static nfs = extHpcCacheAzHpcCacheNfs;
    static skus = ext_hpc-cache_az_hpc_cache_skus;
    static storage = extHpcCacheAzHpcCacheStorage;
    static usage = extHpcCacheAzHpcCacheUsage;
}

class extHpcCacheAzHpc {
    static cache = extHpcCacheAzHpcCache;
}

class extHpcCacheAz {
    static hpc = extHpcCacheAzHpc;
}

class extHpcCache {
    static az = extHpcCacheAz;
}

class extImageCopyExtensionAz {
    static image = ext_image-copy-extension_az_image;
}

class extImageCopyExtension {
    static az = extImageCopyExtensionAz;
}

class extImportExportAzImportExportBitLocker {
    static key = ext_import-export_az_import_export_bit_locker_key;
}

class extImportExportAzImportExportBit {
    static locker = extImportExportAzImportExportBitLocker;
}

class extImportExportAzImportExport {
    static bit = extImportExportAzImportExportBit;
    static location = ext_import-export_az_import_export_location;
}

class extImportExportAzImport {
    static export = extImportExportAzImportExport;
}

class extImportExportAz {
    static import = extImportExportAzImport;
}

class extImportExport {
    static az = extImportExportAz;
}

class extInteractive {
    static az = ext_interactive_az;
}

class extInternetAnalyzerAzInternetAnalyzerPreconfigured {
    static endpoint = ext_internet-analyzer_az_internet_analyzer_preconfigured_endpoint;
}

class extInternetAnalyzerAzInternetAnalyzer {
    static preconfigured = extInternetAnalyzerAzInternetAnalyzerPreconfigured;
    static profile = ext_internet-analyzer_az_internet_analyzer_profile;
    static test = ext_internet-analyzer_az_internet_analyzer_test;
}

class extInternetAnalyzerAzInternet {
    static analyzer = extInternetAnalyzerAzInternetAnalyzer;
}

class extInternetAnalyzerAz {
    static internet = extInternetAnalyzerAzInternet;
}

class extInternetAnalyzer {
    static az = extInternetAnalyzerAz;
}

class extIpGroupAzNetworkIp {
    static group = ext_ip-group_az_network_ip_group;
}

class extIpGroupAzNetwork {
    static ip = extIpGroupAzNetworkIp;
}

class extIpGroupAz {
    static network = extIpGroupAzNetwork;
}

class extIpGroup {
    static az = extIpGroupAz;
}

class extK8SconfigurationAz {
    static k8sconfiguration = ext_k8sconfiguration_az_k8sconfiguration;
}

class extK8Sconfiguration {
    static az = extK8SconfigurationAz;
}

class extKeyvaultPreviewAzKeyvaultCertificateIssuer {
    static admin = ext_keyvault-preview_az_keyvault_certificate_issuer_admin;
}

class extKeyvaultPreviewAzKeyvaultCertificate {
    static contact = ext_keyvault-preview_az_keyvault_certificate_contact;
    static issuer = extKeyvaultPreviewAzKeyvaultCertificateIssuer;
    static pending = ext_keyvault-preview_az_keyvault_certificate_pending;
}

class extKeyvaultPreviewAzKeyvaultNetwork {
    static rule = ext_keyvault-preview_az_keyvault_network_rule;
}

class extKeyvaultPreviewAzKeyvaultStorageSas {
    static definition = ext_keyvault-preview_az_keyvault_storage_sas_definition;
}

class extKeyvaultPreviewAzKeyvaultStorage {
    static sas = extKeyvaultPreviewAzKeyvaultStorageSas;
}

class extKeyvaultPreviewAzKeyvault {
    static certificate = extKeyvaultPreviewAzKeyvaultCertificate;
    static key = ext_keyvault-preview_az_keyvault_key;
    static network = extKeyvaultPreviewAzKeyvaultNetwork;
    static secret = ext_keyvault-preview_az_keyvault_secret;
    static storage = extKeyvaultPreviewAzKeyvaultStorage;
}

class extKeyvaultPreviewAz {
    static keyvault = extKeyvaultPreviewAzKeyvault;
}

class extKeyvaultPreview {
    static az = extKeyvaultPreviewAz;
}

class extKustoAzKustoAttachedDatabase {
    static configuration = ext_kusto_az_kusto_attached_database_configuration;
}

class extKustoAzKustoAttached {
    static database = extKustoAzKustoAttachedDatabase;
}

class extKustoAzKustoClusterPrincipal {
    static assignment = ext_kusto_az_kusto_cluster_principal_assignment;
}

class extKustoAzKustoCluster {
    static principal = extKustoAzKustoClusterPrincipal;
}

class extKustoAzKustoDataConnectionEvent {
    static grid = ext_kusto_az_kusto_data_connection_event_grid;
    static hub = ext_kusto_az_kusto_data_connection_event_hub;
}

class extKustoAzKustoDataConnectionIot {
    static hub = ext_kusto_az_kusto_data_connection_iot_hub;
}

class extKustoAzKustoDataConnection {
    static event = extKustoAzKustoDataConnectionEvent;
    static iot = extKustoAzKustoDataConnectionIot;
}

class extKustoAzKustoData {
    static connection = extKustoAzKustoDataConnection;
}

class extKustoAzKustoDatabasePrincipal {
    static assignment = ext_kusto_az_kusto_database_principal_assignment;
}

class extKustoAzKustoDatabase {
    static principal = extKustoAzKustoDatabasePrincipal;
}

class extKustoAzKusto {
    static attached = extKustoAzKustoAttached;
    static cluster = extKustoAzKustoCluster;
    static data = extKustoAzKustoData;
    static database = extKustoAzKustoDatabase;
}

class extKustoAz {
    static kusto = extKustoAzKusto;
}

class extKusto {
    static az = extKustoAz;
}

class extLogAnalyticsSolutionAzMonitorLogAnalytics {
    static solution = ext_log-analytics-solution_az_monitor_log_analytics_solution;
}

class extLogAnalyticsSolutionAzMonitorLog {
    static analytics = extLogAnalyticsSolutionAzMonitorLogAnalytics;
}

class extLogAnalyticsSolutionAzMonitor {
    static log = extLogAnalyticsSolutionAzMonitorLog;
}

class extLogAnalyticsSolutionAz {
    static monitor = extLogAnalyticsSolutionAzMonitor;
}

class extLogAnalyticsSolution {
    static az = extLogAnalyticsSolutionAz;
}

class extLogAnalyticsAzMonitorLog {
    static analytics = ext_log-analytics_az_monitor_log_analytics;
}

class extLogAnalyticsAzMonitor {
    static log = extLogAnalyticsAzMonitorLog;
}

class extLogAnalyticsAz {
    static monitor = extLogAnalyticsAzMonitor;
}

class extLogAnalytics {
    static az = extLogAnalyticsAz;
}

class extLogicAzLogicIntegration {
    static account = ext_logic_az_logic_integration_account;
}

class extLogicAzLogic {
    static integration = extLogicAzLogicIntegration;
    static workflow = ext_logic_az_logic_workflow;
}

class extLogicAz {
    static logic = extLogicAzLogic;
}

class extLogic {
    static az = extLogicAz;
}

class extMaintenanceAzMaintenance {
    static applyupdate = ext_maintenance_az_maintenance_applyupdate;
    static assignment = ext_maintenance_az_maintenance_assignment;
    static configuration = ext_maintenance_az_maintenance_configuration;
    static update = ext_maintenance_az_maintenance_update;
}

class extMaintenanceAz {
    static maintenance = extMaintenanceAzMaintenance;
}

class extMaintenance {
    static az = extMaintenanceAz;
}

class extManagementpartnerAz {
    static managementpartner = ext_managementpartner_az_managementpartner;
}

class extManagementpartner {
    static az = extManagementpartnerAz;
}

class extMeshAzMeshCodePackage {
    static log = ext_mesh_az_mesh_code_package_log;
}

class extMeshAzMeshCode {
    static package = extMeshAzMeshCodePackage;
}

class extMeshAzMeshService {
    static replica = ext_mesh_az_mesh_service_replica;
}

class extMeshAzMesh {
    static app = ext_mesh_az_mesh_app;
    static code = extMeshAzMeshCode;
    static deployment = ext_mesh_az_mesh_deployment;
    static gateway = ext_mesh_az_mesh_gateway;
    static generate = ext_mesh_az_mesh_generate;
    static network = ext_mesh_az_mesh_network;
    static secret = ext_mesh_az_mesh_secret;
    static secretvalue = ext_mesh_az_mesh_secretvalue;
    static service = extMeshAzMeshService;
    static volume = ext_mesh_az_mesh_volume;
}

class extMeshAz {
    static mesh = extMeshAzMesh;
}

class extMesh {
    static az = extMeshAz;
}

class extMixedRealityAzSpatialAnchorsAccount {
    static key = ext_mixed-reality_az_spatial_anchors_account_key;
}

class extMixedRealityAzSpatialAnchors {
    static account = extMixedRealityAzSpatialAnchorsAccount;
}

class extMixedRealityAzSpatial {
    static anchors = extMixedRealityAzSpatialAnchors;
}

class extMixedRealityAz {
    static spatial = extMixedRealityAzSpatial;
}

class extMixedReality {
    static az = extMixedRealityAz;
}

class extNetappfilesPreviewAzNetappfilesMount {
    static target = ext_netappfiles-preview_az_netappfiles_mount_target;
}

class extNetappfilesPreviewAzNetappfiles {
    static account = ext_netappfiles-preview_az_netappfiles_account;
    static mount = extNetappfilesPreviewAzNetappfilesMount;
    static pool = ext_netappfiles-preview_az_netappfiles_pool;
    static snapshot = ext_netappfiles-preview_az_netappfiles_snapshot;
    static volume = ext_netappfiles-preview_az_netappfiles_volume;
}

class extNetappfilesPreviewAz {
    static netappfiles = extNetappfilesPreviewAzNetappfiles;
}

class extNetappfilesPreview {
    static az = extNetappfilesPreviewAz;
}

class extNotificationHubAzNotificationHubAuthorization {
    static rule = ext_notification-hub_az_notification_hub_authorization_rule;
}

class extNotificationHubAzNotificationHubCredential {
    static adm = ext_notification-hub_az_notification_hub_credential_adm;
    static apns = ext_notification-hub_az_notification_hub_credential_apns;
    static baidu = ext_notification-hub_az_notification_hub_credential_baidu;
    static gcm = ext_notification-hub_az_notification_hub_credential_gcm;
    static mpns = ext_notification-hub_az_notification_hub_credential_mpns;
    static wns = ext_notification-hub_az_notification_hub_credential_wns;
}

class extNotificationHubAzNotificationHubNamespaceAuthorization {
    static rule = ext_notification-hub_az_notification_hub_namespace_authorization_rule;
}

class extNotificationHubAzNotificationHubNamespace {
    static authorization = extNotificationHubAzNotificationHubNamespaceAuthorization;
}

class extNotificationHubAzNotificationHub {
    static authorization = extNotificationHubAzNotificationHubAuthorization;
    static credential = extNotificationHubAzNotificationHubCredential;
    static namespace = extNotificationHubAzNotificationHubNamespace;
}

class extNotificationHubAzNotification {
    static hub = extNotificationHubAzNotificationHub;
}

class extNotificationHubAz {
    static notification = extNotificationHubAzNotification;
}

class extNotificationHub {
    static az = extNotificationHubAz;
}

class extPeeringAzPeeringReceived {
    static route = ext_peering_az_peering_received_route;
}

class extPeeringAzPeeringRegistered {
    static asn = ext_peering_az_peering_registered_asn;
    static prefix = ext_peering_az_peering_registered_prefix;
}

class extPeeringAzPeeringService {
    static country = ext_peering_az_peering_service_country;
    static location = ext_peering_az_peering_service_location;
    static prefix = ext_peering_az_peering_service_prefix;
    static provider = ext_peering_az_peering_service_provider;
}

class extPeeringAzPeering {
    static asn = ext_peering_az_peering_asn;
    static legacy = ext_peering_az_peering_legacy;
    static location = ext_peering_az_peering_location;
    static peering = ext_peering_az_peering_peering;
    static received = extPeeringAzPeeringReceived;
    static registered = extPeeringAzPeeringRegistered;
    static service = extPeeringAzPeeringService;
}

class extPeeringAz {
    static peering = extPeeringAzPeering;
}

class extPeering {
    static az = extPeeringAz;
}

class extPortalAzPortal {
    static dashboard = ext_portal_az_portal_dashboard;
}

class extPortalAz {
    static portal = extPortalAzPortal;
}

class extPortal {
    static az = extPortalAz;
}

class extPowerbidedicatedAzPowerbiEmbedded {
    static capacity = ext_powerbidedicated_az_powerbi_embedded_capacity;
}

class extPowerbidedicatedAzPowerbi {
    static embedded = extPowerbidedicatedAzPowerbiEmbedded;
}

class extPowerbidedicatedAz {
    static powerbi = extPowerbidedicatedAzPowerbi;
}

class extPowerbidedicated {
    static az = extPowerbidedicatedAz;
}

class extPrivatednsAzNetworkPrivateDnsLink {
    static vnet = ext_privatedns_az_network_private_dns_link_vnet;
}

class extPrivatednsAzNetworkPrivateDnsRecordSet {
    static a = ext_privatedns_az_network_private_dns_record_set_a;
    static aaaa = ext_privatedns_az_network_private_dns_record_set_aaaa;
    static cname = ext_privatedns_az_network_private_dns_record_set_cname;
    static mx = ext_privatedns_az_network_private_dns_record_set_mx;
    static ptr = ext_privatedns_az_network_private_dns_record_set_ptr;
    static soa = ext_privatedns_az_network_private_dns_record_set_soa;
    static srv = ext_privatedns_az_network_private_dns_record_set_srv;
    static txt = ext_privatedns_az_network_private_dns_record_set_txt;
}

class extPrivatednsAzNetworkPrivateDnsRecord {
    static set = extPrivatednsAzNetworkPrivateDnsRecordSet;
}

class extPrivatednsAzNetworkPrivateDns {
    static link = extPrivatednsAzNetworkPrivateDnsLink;
    static record = extPrivatednsAzNetworkPrivateDnsRecord;
    static zone = ext_privatedns_az_network_private_dns_zone;
}

class extPrivatednsAzNetworkPrivate {
    static dns = extPrivatednsAzNetworkPrivateDns;
}

class extPrivatednsAzNetwork {
    static private = extPrivatednsAzNetworkPrivate;
}

class extPrivatednsAz {
    static network = extPrivatednsAzNetwork;
}

class extPrivatedns {
    static az = extPrivatednsAz;
}

class extResourceGraphAzGraphShared {
    static query = ext_resource-graph_az_graph_shared_query;
}

class extResourceGraphAzGraph {
    static shared = extResourceGraphAzGraphShared;
}

class extResourceGraphAz {
    static graph = extResourceGraphAzGraph;
}

class extResourceGraph {
    static az = extResourceGraphAz;
}

class extSapHanaAzSapmonitorProvider {
    static instance = ext_sap-hana_az_sapmonitor_provider_instance;
}

class extSapHanaAzSapmonitor {
    static provider = extSapHanaAzSapmonitorProvider;
}

class extSapHanaAz {
    static hanainstance = ext_sap-hana_az_hanainstance;
    static sapmonitor = extSapHanaAzSapmonitor;
}

class extSapHana {
    static az = extSapHanaAz;
}

class extScheduledQueryAzMonitorScheduled {
    static query = ext_scheduled-query_az_monitor_scheduled_query;
}

class extScheduledQueryAzMonitor {
    static scheduled = extScheduledQueryAzMonitorScheduled;
}

class extScheduledQueryAz {
    static monitor = extScheduledQueryAzMonitor;
}

class extScheduledQuery {
    static az = extScheduledQueryAz;
}

class extSpringCloudAzSpringCloudAppBinding {
    static cosmos = ext_spring-cloud_az_spring_cloud_app_binding_cosmos;
    static mysql = ext_spring-cloud_az_spring_cloud_app_binding_mysql;
    static redis = ext_spring-cloud_az_spring_cloud_app_binding_redis;
}

class extSpringCloudAzSpringCloudAppCustom {
    static domain = ext_spring-cloud_az_spring_cloud_app_custom_domain;
}

class extSpringCloudAzSpringCloudApp {
    static binding = extSpringCloudAzSpringCloudAppBinding;
    static custom = extSpringCloudAzSpringCloudAppCustom;
    static deployment = ext_spring-cloud_az_spring_cloud_app_deployment;
    static identity = ext_spring-cloud_az_spring_cloud_app_identity;
    static log = ext_spring-cloud_az_spring_cloud_app_log;
}

class extSpringCloudAzSpringCloudConfigServerGit {
    static repo = ext_spring-cloud_az_spring_cloud_config_server_git_repo;
}

class extSpringCloudAzSpringCloudConfigServer {
    static git = extSpringCloudAzSpringCloudConfigServerGit;
}

class extSpringCloudAzSpringCloudConfig {
    static server = extSpringCloudAzSpringCloudConfigServer;
}

class extSpringCloudAzSpringCloudTest {
    static endpoint = ext_spring-cloud_az_spring_cloud_test_endpoint;
}

class extSpringCloudAzSpringCloud {
    static app = extSpringCloudAzSpringCloudApp;
    static certificate = ext_spring-cloud_az_spring_cloud_certificate;
    static config = extSpringCloudAzSpringCloudConfig;
    static test = extSpringCloudAzSpringCloudTest;
}

class extSpringCloudAzSpring {
    static cloud = extSpringCloudAzSpringCloud;
}

class extSpringCloudAz {
    static spring = extSpringCloudAzSpring;
}

class extSpringCloud {
    static az = extSpringCloudAz;
}

class extSshAz {
    static ssh = ext_ssh_az_ssh;
}

class extSsh {
    static az = extSshAz;
}

class extStackHciAzStackHci {
    static cluster = ext_stack-hci_az_stack_hci_cluster;
}

class extStackHciAzStack {
    static hci = extStackHciAzStackHci;
}

class extStackHciAz {
    static stack = extStackHciAzStack;
}

class extStackHci {
    static az = extStackHciAz;
}

class extStorageBlobPreviewAzStorageAccountBlobService {
    static properties = ext_storage-blob-preview_az_storage_account_blob_service_properties;
}

class extStorageBlobPreviewAzStorageAccountBlob {
    static service = extStorageBlobPreviewAzStorageAccountBlobService;
}

class extStorageBlobPreviewAzStorageAccountManagement {
    static policy = ext_storage-blob-preview_az_storage_account_management_policy;
}

class extStorageBlobPreviewAzStorageAccount {
    static blob = extStorageBlobPreviewAzStorageAccountBlob;
    static management = extStorageBlobPreviewAzStorageAccountManagement;
}

class extStorageBlobPreviewAzStorageBlob {
    static copy = ext_storage-blob-preview_az_storage_blob_copy;
    static lease = ext_storage-blob-preview_az_storage_blob_lease;
    static metadata = ext_storage-blob-preview_az_storage_blob_metadata;
    static tag = ext_storage-blob-preview_az_storage_blob_tag;
}

class extStorageBlobPreviewAzStorage {
    static account = extStorageBlobPreviewAzStorageAccount;
    static blob = extStorageBlobPreviewAzStorageBlob;
    static container = ext_storage-blob-preview_az_storage_container;
}

class extStorageBlobPreviewAz {
    static storage = extStorageBlobPreviewAzStorage;
}

class extStorageBlobPreview {
    static az = extStorageBlobPreviewAz;
}

class extStorageOrPreviewAzStorageAccountOrPolicy {
    static rule = ext_storage-or-preview_az_storage_account_or_policy_rule;
}

class extStorageOrPreviewAzStorageAccountOr {
    static policy = extStorageOrPreviewAzStorageAccountOrPolicy;
}

class extStorageOrPreviewAzStorageAccount {
    static or = extStorageOrPreviewAzStorageAccountOr;
}

class extStorageOrPreviewAzStorage {
    static account = extStorageOrPreviewAzStorageAccount;
}

class extStorageOrPreviewAz {
    static storage = extStorageOrPreviewAzStorage;
}

class extStorageOrPreview {
    static az = extStorageOrPreviewAz;
}

class extStoragePreviewAzStorageAccountManagement {
    static policy = ext_storage-preview_az_storage_account_management_policy;
}

class extStoragePreviewAzStorageAccountNetwork {
    static rule = ext_storage-preview_az_storage_account_network_rule;
}

class extStoragePreviewAzStorageAccount {
    static keys = ext_storage-preview_az_storage_account_keys;
    static management = extStoragePreviewAzStorageAccountManagement;
    static network = extStoragePreviewAzStorageAccountNetwork;
}

class extStoragePreviewAzStorageAzcopy {
    static blob = ext_storage-preview_az_storage_azcopy_blob;
}

class extStoragePreviewAzStorageBlobDirectory {
    static access = ext_storage-preview_az_storage_blob_directory_access;
    static metadata = ext_storage-preview_az_storage_blob_directory_metadata;
}

class extStoragePreviewAzStorageBlobService {
    static properties = ext_storage-preview_az_storage_blob_service_properties;
}

class extStoragePreviewAzStorageBlob {
    static access = ext_storage-preview_az_storage_blob_access;
    static directory = extStoragePreviewAzStorageBlobDirectory;
    static service = extStoragePreviewAzStorageBlobService;
}

class extStoragePreviewAzStorage {
    static account = extStoragePreviewAzStorageAccount;
    static azcopy = extStoragePreviewAzStorageAzcopy;
    static blob = extStoragePreviewAzStorageBlob;
}

class extStoragePreviewAz {
    static storage = extStoragePreviewAzStorage;
}

class extStoragePreview {
    static az = extStoragePreviewAz;
}

class extStoragesyncAzStoragesyncRegistered {
    static server = ext_storagesync_az_storagesync_registered_server;
}

class extStoragesyncAzStoragesyncSyncGroupCloud {
    static endpoint = ext_storagesync_az_storagesync_sync_group_cloud_endpoint;
}

class extStoragesyncAzStoragesyncSyncGroupServer {
    static endpoint = ext_storagesync_az_storagesync_sync_group_server_endpoint;
}

class extStoragesyncAzStoragesyncSyncGroup {
    static cloud = extStoragesyncAzStoragesyncSyncGroupCloud;
    static server = extStoragesyncAzStoragesyncSyncGroupServer;
}

class extStoragesyncAzStoragesyncSync {
    static group = extStoragesyncAzStoragesyncSyncGroup;
}

class extStoragesyncAzStoragesync {
    static registered = extStoragesyncAzStoragesyncRegistered;
    static sync = extStoragesyncAzStoragesyncSync;
}

class extStoragesyncAz {
    static storagesync = extStoragesyncAzStoragesync;
}

class extStoragesync {
    static az = extStoragesyncAz;
}

class extStreamAnalyticsAzStreamAnalytics {
    static function = ext_stream-analytics_az_stream_analytics_function;
    static input = ext_stream-analytics_az_stream_analytics_input;
    static job = ext_stream-analytics_az_stream_analytics_job;
    static output = ext_stream-analytics_az_stream_analytics_output;
    static quota = ext_stream-analytics_az_stream_analytics_quota;
    static transformation = ext_stream-analytics_az_stream_analytics_transformation;
}

class extStreamAnalyticsAzStream {
    static analytics = extStreamAnalyticsAzStreamAnalytics;
}

class extStreamAnalyticsAz {
    static stream = extStreamAnalyticsAzStream;
}

class extStreamAnalytics {
    static az = extStreamAnalyticsAz;
}

class extSubscriptionAz {
    static account = ext_subscription_az_account;
}

class extSubscription {
    static az = extSubscriptionAz;
}

class extSupportAzSupportServicesProblem {
    static classifications = ext_support_az_support_services_problem_classifications;
}

class extSupportAzSupportServices {
    static problem = extSupportAzSupportServicesProblem;
}

class extSupportAzSupportTickets {
    static communications = ext_support_az_support_tickets_communications;
}

class extSupportAzSupport {
    static services = extSupportAzSupportServices;
    static tickets = extSupportAzSupportTickets;
}

class extSupportAz {
    static support = extSupportAzSupport;
}

class extSupport {
    static az = extSupportAz;
}

class extSynapseAzSynapseSpark {
    static job = ext_synapse_az_synapse_spark_job;
    static pool = ext_synapse_az_synapse_spark_pool;
    static session = ext_synapse_az_synapse_spark_session;
    static statement = ext_synapse_az_synapse_spark_statement;
}

class extSynapseAzSynapseSql {
    static pool = ext_synapse_az_synapse_sql_pool;
}

class extSynapseAzSynapseWorkspaceFirewall {
    static rule = ext_synapse_az_synapse_workspace_firewall_rule;
}

class extSynapseAzSynapseWorkspace {
    static firewall = extSynapseAzSynapseWorkspaceFirewall;
}

class extSynapseAzSynapse {
    static spark = extSynapseAzSynapseSpark;
    static sql = extSynapseAzSynapseSql;
    static workspace = extSynapseAzSynapseWorkspace;
}

class extSynapseAz {
    static synapse = extSynapseAzSynapse;
}

class extSynapse {
    static az = extSynapseAz;
}

class extTimeseriesinsightsAzTimeseriesinsightsAccess {
    static policy = ext_timeseriesinsights_az_timeseriesinsights_access_policy;
}

class extTimeseriesinsightsAzTimeseriesinsightsEnvironment {
    static longterm = ext_timeseriesinsights_az_timeseriesinsights_environment_longterm;
    static standard = ext_timeseriesinsights_az_timeseriesinsights_environment_standard;
}

class extTimeseriesinsightsAzTimeseriesinsightsEventSource {
    static eventhub = ext_timeseriesinsights_az_timeseriesinsights_event_source_eventhub;
    static iothub = ext_timeseriesinsights_az_timeseriesinsights_event_source_iothub;
}

class extTimeseriesinsightsAzTimeseriesinsightsEvent {
    static source = extTimeseriesinsightsAzTimeseriesinsightsEventSource;
}

class extTimeseriesinsightsAzTimeseriesinsightsReferenceData {
    static set = ext_timeseriesinsights_az_timeseriesinsights_reference_data_set;
}

class extTimeseriesinsightsAzTimeseriesinsightsReference {
    static data = extTimeseriesinsightsAzTimeseriesinsightsReferenceData;
}

class extTimeseriesinsightsAzTimeseriesinsights {
    static access = extTimeseriesinsightsAzTimeseriesinsightsAccess;
    static environment = extTimeseriesinsightsAzTimeseriesinsightsEnvironment;
    static event = extTimeseriesinsightsAzTimeseriesinsightsEvent;
    static reference = extTimeseriesinsightsAzTimeseriesinsightsReference;
}

class extTimeseriesinsightsAz {
    static timeseriesinsights = extTimeseriesinsightsAzTimeseriesinsights;
}

class extTimeseriesinsights {
    static az = extTimeseriesinsightsAz;
}

class extVirtualNetworkTapAzNetworkNicVtap {
    static config = ext_virtual-network-tap_az_network_nic_vtap_config;
}

class extVirtualNetworkTapAzNetworkNic {
    static vtap = extVirtualNetworkTapAzNetworkNicVtap;
}

class extVirtualNetworkTapAzNetworkVnet {
    static tap = ext_virtual-network-tap_az_network_vnet_tap;
}

class extVirtualNetworkTapAzNetwork {
    static nic = extVirtualNetworkTapAzNetworkNic;
    static vnet = extVirtualNetworkTapAzNetworkVnet;
}

class extVirtualNetworkTapAz {
    static network = extVirtualNetworkTapAzNetwork;
}

class extVirtualNetworkTap {
    static az = extVirtualNetworkTapAz;
}

class extVirtualWanAzNetworkP2SVpnGateway {
    static connection = ext_virtual-wan_az_network_p2s_vpn_gateway_connection;
}

class extVirtualWanAzNetworkP2SVpn {
    static gateway = extVirtualWanAzNetworkP2SVpnGateway;
}

class extVirtualWanAzNetworkP2S {
    static vpn = extVirtualWanAzNetworkP2SVpn;
}

class extVirtualWanAzNetworkVhubRouteTable {
    static route = ext_virtual-wan_az_network_vhub_route_table_route;
}

class extVirtualWanAzNetworkVhubRoute {
    static table = extVirtualWanAzNetworkVhubRouteTable;
}

class extVirtualWanAzNetworkVhub {
    static connection = ext_virtual-wan_az_network_vhub_connection;
    static route = extVirtualWanAzNetworkVhubRoute;
}

class extVirtualWanAzNetworkVpnGatewayConnectionIpsec {
    static policy = ext_virtual-wan_az_network_vpn_gateway_connection_ipsec_policy;
}

class extVirtualWanAzNetworkVpnGatewayConnection {
    static ipsec = extVirtualWanAzNetworkVpnGatewayConnectionIpsec;
}

class extVirtualWanAzNetworkVpnGateway {
    static connection = extVirtualWanAzNetworkVpnGatewayConnection;
}

class extVirtualWanAzNetworkVpnServerConfigIpsec {
    static policy = ext_virtual-wan_az_network_vpn_server_config_ipsec_policy;
}

class extVirtualWanAzNetworkVpnServerConfig {
    static ipsec = extVirtualWanAzNetworkVpnServerConfigIpsec;
}

class extVirtualWanAzNetworkVpnServer {
    static config = extVirtualWanAzNetworkVpnServerConfig;
}

class extVirtualWanAzNetworkVpn {
    static gateway = extVirtualWanAzNetworkVpnGateway;
    static server = extVirtualWanAzNetworkVpnServer;
    static site = ext_virtual-wan_az_network_vpn_site;
}

class extVirtualWanAzNetwork {
    static p2s = extVirtualWanAzNetworkP2S;
    static vhub = extVirtualWanAzNetworkVhub;
    static vpn = extVirtualWanAzNetworkVpn;
    static vwan = ext_virtual-wan_az_network_vwan;
}

class extVirtualWanAz {
    static network = extVirtualWanAzNetwork;
}

class extVirtualWan {
    static az = extVirtualWanAz;
}

class extVmRepairAzVm {
    static repair = ext_vm-repair_az_vm_repair;
}

class extVmRepairAz {
    static vm = extVmRepairAzVm;
}

class extVmRepair {
    static az = extVmRepairAz;
}

class extVmwareAzVmwarePrivate {
    static cloud = ext_vmware_az_vmware_private_cloud;
}

class extVmwareAzVmware {
    static cluster = ext_vmware_az_vmware_cluster;
    static private = extVmwareAzVmwarePrivate;
}

class extVmwareAz {
    static vmware = extVmwareAzVmware;
}

class extVmware {
    static az = extVmwareAz;
}

class extWebappAzWebappRemote {
    static connection = ext_webapp_az_webapp_remote_connection;
}

class extWebappAzWebapp {
    static container = ext_webapp_az_webapp_container;
    static remote = extWebappAzWebappRemote;
    static scan = ext_webapp_az_webapp_scan;
}

class extWebappAz {
    static webapp = extWebappAzWebapp;
}

class extWebapp {
    static az = extWebappAz;
}

class ext {
    static account = account;
    static aem = aem;
    static ai-examples = ai-examples;
    static aks-preview = aks-preview;
    static alertsmanagement = alertsmanagement;
    static alias = alias;
    static application-insights = application-insights;
    static attestation = attestation;
    static azure-batch-cli-extensions = azure-batch-cli-extensions;
    static azure-cli-iot-ext = azure-cli-iot-ext;
    static azure-cli-ml = azure-cli-ml;
    static azure-devops = azure-devops;
    static azure-firewall = azure-firewall;
    static azure-iot = azure-iot;
    static blockchain = blockchain;
    static blueprint = blueprint;
    static codespaces = codespaces;
    static connectedk8s = connectedk8s;
    static connectedmachine = connectedmachine;
    static costmanagement = costmanagement;
    static csvmware = csvmware;
    static custom-providers = custom-providers;
    static databox = databox;
    static databricks = databricks;
    static datafactory = datafactory;
    static datashare = datashare;
    static db-up = db-up;
    static deploy-to-azure = deploy-to-azure;
    static desktopvirtualization = desktopvirtualization;
    static dev-spaces = dev-spaces;
    static dms-preview = dms-preview;
    static eventgrid = eventgrid;
    static express-route-cross-connection = express-route-cross-connection;
    static express-route = express-route;
    static footprint = footprint;
    static front-door = front-door;
    static fzf = fzf;
    static guestconfig = guestconfig;
    static hack = hack;
    static hardware-security-modules = hardware-security-modules;
    static healthcareapis = healthcareapis;
    static hpc-cache = hpc-cache;
    static image-copy-extension = image-copy-extension;
    static import-export = import-export;
    static interactive = interactive;
    static internet-analyzer = internet-analyzer;
    static ip-group = ip-group;
    static k8sconfiguration = k8sconfiguration;
    static keyvault-preview = keyvault-preview;
    static kusto = kusto;
    static log-analytics-solution = log-analytics-solution;
    static log-analytics = log-analytics;
    static logic = logic;
    static maintenance = maintenance;
    static managementpartner = managementpartner;
    static mesh = mesh;
    static mixed-reality = mixed-reality;
    static netappfiles-preview = netappfiles-preview;
    static notification-hub = notification-hub;
    static peering = peering;
    static portal = portal;
    static powerbidedicated = powerbidedicated;
    static privatedns = privatedns;
    static resource-graph = resource-graph;
    static sap-hana = sap-hana;
    static scheduled-query = scheduled-query;
    static spring-cloud = spring-cloud;
    static ssh = ssh;
    static stack-hci = stack-hci;
    static storage-blob-preview = storage-blob-preview;
    static storage-or-preview = storage-or-preview;
    static storage-preview = storage-preview;
    static storagesync = storagesync;
    static stream-analytics = stream-analytics;
    static subscription = subscription;
    static support = support;
    static synapse = synapse;
    static timeseriesinsights = timeseriesinsights;
    static virtual-network-tap = virtual-network-tap;
    static virtual-wan = virtual-wan;
    static vm-repair = vm-repair;
    static vmware = vmware;
    static webapp = webapp;
}
