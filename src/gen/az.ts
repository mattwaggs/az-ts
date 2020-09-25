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

class azAccountLock {
}

class azAccountManagement {
    static group = azAccountManagementGroup;
}

class azAcrConfigContent {
    static trust = az_acr_config_content_trust;
}

class azAcrConfigRetention {
}

class azAcrPrivateEndpoint {
    static connection = az_acr_private_endpoint_connection;
}

class azAcrPrivateLink {
    static resource = az_acr_private_link_resource;
}

class azAcrAgentpool {
}

class azAcrConfig extends az_acr_config {
    static retention = az_acr_config_retention;
    static content = azAcrConfigContent;
    static retention = azAcrConfigRetention;
}

class azAcrCredential {
}

class azAcrEncryption {
}

class azAcrHelm {
    static repo = az_acr_helm_repo;
}

class azAcrIdentity {
}

class azAcrNetwork {
    static rule = az_acr_network_rule;
}

class azAcrPack {
}

class azAcrPrivate {
    static endpoint = azAcrPrivateEndpoint;
    static link = azAcrPrivateLink;
}

class azAcrReplication {
}

class azAcrRepository {
}

class azAcrScope {
    static map = az_acr_scope_map;
}

class azAcrTask {
    static credential = az_acr_task_credential;
    static identity = az_acr_task_identity;
    static timer = az_acr_task_timer;
}

class azAcrTaskrun {
}

class azAcrToken {
    static credential = az_acr_token_credential;
}

class azAcrWebhook {
}

class azAdSignedIn {
    static user = az_ad_signed_in_user;
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

class azAdSigned {
    static in = azAdSignedIn;
}

class azAdSp {
    static credential = az_ad_sp_credential;
    static owner = az_ad_sp_owner;
}

class azAdUser {
}

class azAmsContentKeyPolicy {
    static option = az_ams_content_key_policy_option;
}

class azAmsContentKey {
    static policy = azAmsContentKeyPolicy;
}

class azAmsStreamingEndpoint {
    static akamai = az_ams_streaming_endpoint_akamai;
}

class azAmsStreamingLocator {
}

class azAmsStreamingPolicy {
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

class azAmsContent {
    static key = azAmsContentKey;
}

class azAmsJob {
}

class azAmsLive {
    static event = az_ams_live_event;
    static output = az_ams_live_output;
}

class azAmsStreaming {
    static locator = az_ams_streaming_locator;
    static policy = az_ams_streaming_policy;
    static endpoint = azAmsStreamingEndpoint;
    static locator = azAmsStreamingLocator;
    static policy = azAmsStreamingPolicy;
}

class azAmsTransform {
    static output = az_ams_transform_output;
}

class azApimApi {
    static operation = az_apim_api_operation;
    static release = az_apim_api_release;
    static revision = az_apim_api_revision;
    static versionset = az_apim_api_versionset;
}

class azApimNv {
}

class azApimProduct {
    static api = az_apim_product_api;
}

class azAppconfigCredential {
}

class azAppconfigFeature {
    static filter = az_appconfig_feature_filter;
}

class azAppconfigIdentity {
}

class azAppconfigKv {
}

class azAppconfigRevision {
}

class azAppserviceAse {
}

class azAppserviceHybrid {
    static connection = az_appservice_hybrid_connection;
}

class azAppservicePlan {
}

class azAppserviceVnet {
    static integration = az_appservice_vnet_integration;
}

class azBackupVaultBackup {
    static properties = az_backup_vault_backup_properties;
}

class azBackupContainer {
}

class azBackupItem {
}

class azBackupJob {
}

class azBackupPolicy {
}

class azBackupProtectable {
    static item = az_backup_protectable_item;
}

class azBackupProtection {
}

class azBackupRecoveryconfig {
}

class azBackupRecoverypoint {
}

class azBackupRestore {
    static files = az_backup_restore_files;
}

class azBackupVault extends az_backup_vault {
    static backup = azBackupVaultBackup;
}

class azBatchAccountAutostorage {
    static keys = az_batch_account_autostorage_keys;
}

class azBatchAccountKeys {
}

class azBatchJobPrepRelease {
    static status = az_batch_job_prep_release_status;
}

class azBatchJobAll {
    static statistics = az_batch_job_all_statistics;
}

class azBatchJobPrep {
    static release = azBatchJobPrepRelease;
}

class azBatchJobSchedule {
}

class azBatchJobTask {
    static counts = az_batch_job_task_counts;
}

class azBatchNodeRemoteDesktop {
}

class azBatchNodeRemoteLogin {
    static settings = az_batch_node_remote_login_settings;
}

class azBatchNodeFile {
}

class azBatchNodeRemote {
    static desktop = az_batch_node_remote_desktop;
    static desktop = azBatchNodeRemoteDesktop;
    static login = azBatchNodeRemoteLogin;
}

class azBatchNodeScheduling {
}

class azBatchNodeService {
    static logs = az_batch_node_service_logs;
}

class azBatchNodeUser {
}

class azBatchPoolAll {
    static statistics = az_batch_pool_all_statistics;
}

class azBatchPoolAutoscale {
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

class azBatchAccount extends az_batch_account {
    static keys = az_batch_account_keys;
    static autostorage = azBatchAccountAutostorage;
    static keys = azBatchAccountKeys;
}

class azBatchApplication {
    static package = az_batch_application_package;
    static summary = az_batch_application_summary;
}

class azBatchCertificate {
}

class azBatchJob extends az_batch_job {
    static schedule = az_batch_job_schedule;
    static all = azBatchJobAll;
    static prep = azBatchJobPrep;
    static schedule = azBatchJobSchedule;
    static task = azBatchJobTask;
}

class azBatchLocation {
    static quotas = az_batch_location_quotas;
}

class azBatchNode extends az_batch_node {
    static file = az_batch_node_file;
    static scheduling = az_batch_node_scheduling;
    static user = az_batch_node_user;
    static file = azBatchNodeFile;
    static remote = azBatchNodeRemote;
    static scheduling = azBatchNodeScheduling;
    static service = azBatchNodeService;
    static user = azBatchNodeUser;
}

class azBatchPool extends az_batch_pool {
    static autoscale = az_batch_pool_autoscale;
    static all = azBatchPoolAll;
    static autoscale = azBatchPoolAutoscale;
    static node = azBatchPoolNode;
    static supported = azBatchPoolSupported;
    static usage = azBatchPoolUsage;
}

class azBatchTask {
    static file = az_batch_task_file;
    static subtask = az_batch_task_subtask;
}

class azBatchaiCluster {
    static file = az_batchai_cluster_file;
    static node = az_batchai_cluster_node;
}

class azBatchaiExperiment {
}

class azBatchaiFile {
    static server = az_batchai_file_server;
}

class azBatchaiJob {
    static file = az_batchai_job_file;
    static node = az_batchai_job_node;
}

class azBatchaiWorkspace {
}

class azBillingEnrollment {
    static account = az_billing_enrollment_account;
}

class azBillingInvoice {
}

class azBillingPeriod {
}

class azBoardsWorkItem {
    static relation = az_boards_work_item_relation;
}

class azBoardsArea {
    static project = az_boards_area_project;
    static team = az_boards_area_team;
}

class azBoardsIteration {
    static project = az_boards_iteration_project;
    static team = az_boards_iteration_team;
}

class azBoardsWork {
    static item = azBoardsWorkItem;
}

class azCdnEndpointRule {
    static action = az_cdn_endpoint_rule_action;
    static condition = az_cdn_endpoint_rule_condition;
}

class azCdnEndpointWaf {
    static policy = az_cdn_endpoint_waf_policy;
}

class azCdnWafPolicyManagedRuleSetRuleGroup {
    static override = az_cdn_waf_policy_managed_rule_set_rule_group_override;
}

class azCdnWafPolicyManagedRuleSetRule {
    static group = azCdnWafPolicyManagedRuleSetRuleGroup;
}

class azCdnWafPolicyManagedRuleSet extends az_cdn_waf_policy_managed_rule_set {
    static rule = azCdnWafPolicyManagedRuleSetRule;
}

class azCdnWafPolicyManagedRule {
    static set = azCdnWafPolicyManagedRuleSet;
}

class azCdnWafPolicyRateLimit {
    static rule = az_cdn_waf_policy_rate_limit_rule;
}

class azCdnWafPolicyCustom {
    static rule = az_cdn_waf_policy_custom_rule;
}

class azCdnWafPolicyManaged {
    static rule = azCdnWafPolicyManagedRule;
}

class azCdnWafPolicyRate {
    static limit = azCdnWafPolicyRateLimit;
}

class azCdnWafPolicy extends az_cdn_waf_policy {
    static custom = azCdnWafPolicyCustom;
    static managed = azCdnWafPolicyManaged;
    static rate = azCdnWafPolicyRate;
}

class azCdnCustom {
    static domain = az_cdn_custom_domain;
}

class azCdnEdge {
    static node = az_cdn_edge_node;
}

class azCdnEndpoint extends az_cdn_endpoint {
    static rule = azCdnEndpointRule;
    static waf = azCdnEndpointWaf;
}

class azCdnOrigin {
}

class azCdnProfile {
}

class azCdnWaf extends az_cdn_waf {
    static policy = azCdnWafPolicy;
}

class azCognitiveservicesAccountIdentity {
}

class azCognitiveservicesAccountKeys {
}

class azCognitiveservicesAccountNetwork {
    static rule = az_cognitiveservices_account_network_rule;
}

class azCognitiveservicesAccount extends az_cognitiveservices_account {
    static identity = az_cognitiveservices_account_identity;
    static keys = az_cognitiveservices_account_keys;
    static identity = azCognitiveservicesAccountIdentity;
    static keys = azCognitiveservicesAccountKeys;
    static network = azCognitiveservicesAccountNetwork;
}

class azConfigParam {
    static persist = az_config_param_persist;
}

class azConsumptionBudget {
}

class azConsumptionMarketplace {
}

class azConsumptionPricesheet {
}

class azConsumptionReservation {
    static detail = az_consumption_reservation_detail;
    static summary = az_consumption_reservation_summary;
}

class azConsumptionUsage {
}

class azCosmosdbCassandraKeyspace {
    static throughput = az_cosmosdb_cassandra_keyspace_throughput;
}

class azCosmosdbCassandraTable {
    static throughput = az_cosmosdb_cassandra_table_throughput;
}

class azCosmosdbGremlinDatabase {
    static throughput = az_cosmosdb_gremlin_database_throughput;
}

class azCosmosdbGremlinGraph {
    static throughput = az_cosmosdb_gremlin_graph_throughput;
}

class azCosmosdbMongodbCollection {
    static throughput = az_cosmosdb_mongodb_collection_throughput;
}

class azCosmosdbMongodbDatabase {
    static throughput = az_cosmosdb_mongodb_database_throughput;
}

class azCosmosdbPrivateEndpoint {
    static connection = az_cosmosdb_private_endpoint_connection;
}

class azCosmosdbPrivateLink {
    static resource = az_cosmosdb_private_link_resource;
}

class azCosmosdbSqlUserDefined {
    static function = az_cosmosdb_sql_user_defined_function;
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

class azCosmosdbSqlTrigger {
}

class azCosmosdbSqlUser {
    static defined = azCosmosdbSqlUserDefined;
}

class azCosmosdbCassandra extends az_cosmosdb_cassandra {
    static keyspace = azCosmosdbCassandraKeyspace;
    static table = azCosmosdbCassandraTable;
}

class azCosmosdbCollection {
}

class azCosmosdbDatabase {
}

class azCosmosdbGremlin extends az_cosmosdb_gremlin {
    static database = azCosmosdbGremlinDatabase;
    static graph = azCosmosdbGremlinGraph;
}

class azCosmosdbKeys {
}

class azCosmosdbMongodb extends az_cosmosdb_mongodb {
    static collection = azCosmosdbMongodbCollection;
    static database = azCosmosdbMongodbDatabase;
}

class azCosmosdbNetwork {
    static rule = az_cosmosdb_network_rule;
}

class azCosmosdbPrivate {
    static endpoint = azCosmosdbPrivateEndpoint;
    static link = azCosmosdbPrivateLink;
}

class azCosmosdbSql extends az_cosmosdb_sql {
    static trigger = az_cosmosdb_sql_trigger;
    static container = azCosmosdbSqlContainer;
    static database = azCosmosdbSqlDatabase;
    static stored = azCosmosdbSqlStored;
    static trigger = azCosmosdbSqlTrigger;
    static user = azCosmosdbSqlUser;
}

class azCosmosdbTable {
    static throughput = az_cosmosdb_table_throughput;
}

class azDeploymentGroup {
}

class azDeploymentMg {
}

class azDeploymentOperation {
    static group = az_deployment_operation_group;
    static mg = az_deployment_operation_mg;
    static sub = az_deployment_operation_sub;
    static tenant = az_deployment_operation_tenant;
}

class azDeploymentScripts {
}

class azDeploymentSub {
}

class azDeploymentTenant {
}

class azDeploymentmanagerArtifact {
    static source = az_deploymentmanager_artifact_source;
}

class azDeploymentmanagerRollout {
}

class azDeploymentmanagerService {
    static topology = az_deploymentmanager_service_topology;
    static unit = az_deploymentmanager_service_unit;
}

class azDeploymentmanagerStep {
}

class azDevopsSecurityGroup {
    static membership = az_devops_security_group_membership;
}

class azDevopsSecurityPermission {
    static namespace = az_devops_security_permission_namespace;
}

class azDevopsServiceEndpoint {
    static azurerm = az_devops_service_endpoint_azurerm;
    static github = az_devops_service_endpoint_github;
}

class azDevopsAdmin {
    static banner = az_devops_admin_banner;
}

class azDevopsExtension {
}

class azDevopsProject {
}

class azDevopsSecurity extends az_devops_security {
    static group = azDevopsSecurityGroup;
    static permission = azDevopsSecurityPermission;
}

class azDevopsService {
    static endpoint = azDevopsServiceEndpoint;
}

class azDevopsTeam {
}

class azDevopsUser {
}

class azDevopsWiki {
    static page = az_devops_wiki_page;
}

class azDiskAccess {
}

class azDiskEncryption {
    static set = az_disk_encryption_set;
}

class azDlaAccountDataLake {
    static store = az_dla_account_data_lake_store;
}

class azDlaAccountBlob {
    static storage = az_dla_account_blob_storage;
}

class azDlaAccountCompute {
    static policy = az_dla_account_compute_policy;
}

class azDlaAccountData {
    static lake = azDlaAccountDataLake;
}

class azDlaAccountFirewall {
}

class azDlaCatalogExternalData {
    static source = az_dla_catalog_external_data_source;
}

class azDlaCatalogAssembly {
}

class azDlaCatalogCredential {
}

class azDlaCatalogDatabase {
}

class azDlaCatalogExternal {
    static data = azDlaCatalogExternalData;
}

class azDlaCatalogPackage {
}

class azDlaCatalogProcedure {
}

class azDlaCatalogSchema {
}

class azDlaCatalogTable {
    static partition = az_dla_catalog_table_partition;
    static stats = az_dla_catalog_table_stats;
    static type = az_dla_catalog_table_type;
}

class azDlaCatalogTvf {
}

class azDlaCatalogView {
}

class azDlaAccount extends az_dla_account {
    static firewall = az_dla_account_firewall;
    static blob = azDlaAccountBlob;
    static compute = azDlaAccountCompute;
    static data = azDlaAccountData;
    static firewall = azDlaAccountFirewall;
}

class azDlaCatalog extends az_dla_catalog {
    static assembly = az_dla_catalog_assembly;
    static credential = az_dla_catalog_credential;
    static database = az_dla_catalog_database;
    static package = az_dla_catalog_package;
    static procedure = az_dla_catalog_procedure;
    static schema = az_dla_catalog_schema;
    static tvf = az_dla_catalog_tvf;
    static view = az_dla_catalog_view;
    static assembly = azDlaCatalogAssembly;
    static credential = azDlaCatalogCredential;
    static database = azDlaCatalogDatabase;
    static external = azDlaCatalogExternal;
    static package = azDlaCatalogPackage;
    static procedure = azDlaCatalogProcedure;
    static schema = azDlaCatalogSchema;
    static table = azDlaCatalogTable;
    static tvf = azDlaCatalogTvf;
    static view = azDlaCatalogView;
}

class azDlaJob {
    static pipeline = az_dla_job_pipeline;
    static recurrence = az_dla_job_recurrence;
}

class azDlsAccountFirewall {
}

class azDlsAccountNetwork {
    static rule = az_dls_account_network_rule;
}

class azDlsAccountTrusted {
    static provider = az_dls_account_trusted_provider;
}

class azDlsAccount extends az_dls_account {
    static firewall = az_dls_account_firewall;
    static firewall = azDlsAccountFirewall;
    static network = azDlsAccountNetwork;
    static trusted = azDlsAccountTrusted;
}

class azDlsFs {
    static access = az_dls_fs_access;
}

class azDmsProject {
    static task = az_dms_project_task;
}

class azEventgridPartnerNamespaceEvent {
    static channel = az_eventgrid_partner_namespace_event_channel;
}

class azEventgridPartnerNamespaceKey {
}

class azEventgridPartnerTopicEvent {
    static subscription = az_eventgrid_partner_topic_event_subscription;
}

class azEventgridPartnerNamespace extends az_eventgrid_partner_namespace {
    static key = az_eventgrid_partner_namespace_key;
    static event = azEventgridPartnerNamespaceEvent;
    static key = azEventgridPartnerNamespaceKey;
}

class azEventgridPartnerRegistration {
}

class azEventgridPartnerTopic extends az_eventgrid_partner_topic {
    static event = azEventgridPartnerTopicEvent;
}

class azEventgridSystemTopicEvent {
    static subscription = az_eventgrid_system_topic_event_subscription;
}

class azEventgridSystemTopic extends az_eventgrid_system_topic {
    static event = azEventgridSystemTopicEvent;
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

class azEventgridPartner extends az_eventgrid_partner {
    static registration = az_eventgrid_partner_registration;
    static namespace = azEventgridPartnerNamespace;
    static registration = azEventgridPartnerRegistration;
    static topic = azEventgridPartnerTopic;
}

class azEventgridSystem {
    static topic = azEventgridSystemTopic;
}

class azEventgridTopic {
    static key = az_eventgrid_topic_key;
    static type = az_eventgrid_topic_type;
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

class azEventhubsGeorecoveryAliasAuthorizationRule {
    static keys = az_eventhubs_georecovery_alias_authorization_rule_keys;
}

class azEventhubsGeorecoveryAliasAuthorization {
    static rule = azEventhubsGeorecoveryAliasAuthorizationRule;
}

class azEventhubsGeorecoveryAlias extends az_eventhubs_georecovery_alias {
    static authorization = azEventhubsGeorecoveryAliasAuthorization;
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

class azEventhubsCluster {
    static namespace = az_eventhubs_cluster_namespace;
}

class azEventhubsEventhub extends az_eventhubs_eventhub {
    static authorization = azEventhubsEventhubAuthorization;
    static consumer = azEventhubsEventhubConsumer;
}

class azEventhubsGeorecovery {
    static alias = azEventhubsGeorecoveryAlias;
}

class azEventhubsNamespace extends az_eventhubs_namespace {
    static authorization = azEventhubsNamespaceAuthorization;
    static network = azEventhubsNamespaceNetwork;
}

class azFunctionappConfigAccess {
    static restriction = az_functionapp_config_access_restriction;
}

class azFunctionappConfigAppsettings {
}

class azFunctionappConfigContainer {
}

class azFunctionappConfigHostname {
}

class azFunctionappConfigSsl {
}

class azFunctionappConfig extends az_functionapp_config {
    static appsettings = az_functionapp_config_appsettings;
    static container = az_functionapp_config_container;
    static hostname = az_functionapp_config_hostname;
    static ssl = az_functionapp_config_ssl;
    static access = azFunctionappConfigAccess;
    static appsettings = azFunctionappConfigAppsettings;
    static container = azFunctionappConfigContainer;
    static hostname = azFunctionappConfigHostname;
    static ssl = azFunctionappConfigSsl;
}

class azFunctionappCors {
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

class azFunctionappIdentity {
}

class azFunctionappKeys {
}

class azFunctionappLog {
    static deployment = az_functionapp_log_deployment;
}

class azFunctionappPlan {
}

class azFunctionappVnet {
    static integration = az_functionapp_vnet_integration;
}

class azGroupDeployment {
    static operation = az_group_deployment_operation;
}

class azGroupLock {
}

class azHdinsightApplication {
}

class azHdinsightAutoscale {
    static condition = az_hdinsight_autoscale_condition;
}

class azHdinsightHost {
}

class azHdinsightMonitor {
}

class azHdinsightScript {
    static action = az_hdinsight_script_action;
}

class azImageBuilder {
    static customizer = az_image_builder_customizer;
    static output = az_image_builder_output;
}

class azIotDpsAccess {
    static policy = az_iot_dps_access_policy;
}

class azIotDpsCertificate {
}

class azIotDpsLinked {
    static hub = az_iot_dps_linked_hub;
}

class azIotHubCertificate {
}

class azIotHubConsumer {
    static group = az_iot_hub_consumer_group;
}

class azIotHubDevicestream {
}

class azIotHubMessage {
    static enrichment = az_iot_hub_message_enrichment;
}

class azIotHubPolicy {
}

class azIotHubRoute {
}

class azIotHubRouting {
    static endpoint = az_iot_hub_routing_endpoint;
}

class azIotCentral {
    static app = az_iot_central_app;
}

class azIotDps extends az_iot_dps {
    static certificate = az_iot_dps_certificate;
    static access = azIotDpsAccess;
    static certificate = azIotDpsCertificate;
    static linked = azIotDpsLinked;
}

class azIotHub extends az_iot_hub {
    static certificate = az_iot_hub_certificate;
    static devicestream = az_iot_hub_devicestream;
    static policy = az_iot_hub_policy;
    static route = az_iot_hub_route;
    static certificate = azIotHubCertificate;
    static consumer = azIotHubConsumer;
    static devicestream = azIotHubDevicestream;
    static message = azIotHubMessage;
    static policy = azIotHubPolicy;
    static route = azIotHubRoute;
    static routing = azIotHubRouting;
}

class azKeyvaultCertificateContact {
}

class azKeyvaultCertificateIssuer {
    static admin = az_keyvault_certificate_issuer_admin;
}

class azKeyvaultCertificatePending {
}

class azKeyvaultPrivateEndpoint {
    static connection = az_keyvault_private_endpoint_connection;
}

class azKeyvaultPrivateLink {
    static resource = az_keyvault_private_link_resource;
}

class azKeyvaultStorageSas {
    static definition = az_keyvault_storage_sas_definition;
}

class azKeyvaultBackup {
}

class azKeyvaultCertificate extends az_keyvault_certificate {
    static contact = az_keyvault_certificate_contact;
    static pending = az_keyvault_certificate_pending;
    static contact = azKeyvaultCertificateContact;
    static issuer = azKeyvaultCertificateIssuer;
    static pending = azKeyvaultCertificatePending;
}

class azKeyvaultKey {
}

class azKeyvaultNetwork {
    static rule = az_keyvault_network_rule;
}

class azKeyvaultPrivate {
    static endpoint = azKeyvaultPrivateEndpoint;
    static link = azKeyvaultPrivateLink;
}

class azKeyvaultRestore {
}

class azKeyvaultRole {
    static assignment = az_keyvault_role_assignment;
    static definition = az_keyvault_role_definition;
}

class azKeyvaultSecret {
}

class azKeyvaultSecurity {
    static domain = az_keyvault_security_domain;
}

class azKeyvaultStorage extends az_keyvault_storage {
    static sas = azKeyvaultStorageSas;
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

class azLabEnvironment {
}

class azLabFormula {
}

class azLabGallery {
    static image = az_lab_gallery_image;
}

class azLabSecret {
}

class azLabVm {
}

class azLabVnet {
}

class azMapsAccount {
    static keys = az_maps_account_keys;
}

class azMariadbServerPrivateEndpoint {
    static connection = az_mariadb_server_private_endpoint_connection;
}

class azMariadbServerPrivateLink {
    static resource = az_mariadb_server_private_link_resource;
}

class azMariadbServerConfiguration {
}

class azMariadbServerFirewall {
    static rule = az_mariadb_server_firewall_rule;
}

class azMariadbServerLogs {
}

class azMariadbServerPrivate {
    static endpoint = azMariadbServerPrivateEndpoint;
    static link = azMariadbServerPrivateLink;
}

class azMariadbServerReplica {
}

class azMariadbServerVnet {
    static rule = az_mariadb_server_vnet_rule;
}

class azMariadbDb {
}

class azMariadbServer extends az_mariadb_server {
    static configuration = az_mariadb_server_configuration;
    static logs = az_mariadb_server_logs;
    static replica = az_mariadb_server_replica;
    static configuration = azMariadbServerConfiguration;
    static firewall = azMariadbServerFirewall;
    static logs = azMariadbServerLogs;
    static private = azMariadbServerPrivate;
    static replica = azMariadbServerReplica;
    static vnet = azMariadbServerVnet;
}

class azMonitorActivityLogAlertAction {
    static group = az_monitor_activity_log_alert_action_group;
}

class azMonitorActivityLogAlertScope {
}

class azMonitorActivityLogAlert extends az_monitor_activity_log_alert {
    static scope = az_monitor_activity_log_alert_scope;
    static action = azMonitorActivityLogAlertAction;
    static scope = azMonitorActivityLogAlertScope;
}

class azMonitorActivityLog extends az_monitor_activity_log {
    static alert = azMonitorActivityLogAlert;
}

class azMonitorDiagnosticSettings {
    static categories = az_monitor_diagnostic_settings_categories;
    static subscription = az_monitor_diagnostic_settings_subscription;
}

class azMonitorLogAnalyticsWorkspaceData {
    static export = az_monitor_log_analytics_workspace_data_export;
}

class azMonitorLogAnalyticsWorkspaceLinked {
    static service = az_monitor_log_analytics_workspace_linked_service;
    static storage = az_monitor_log_analytics_workspace_linked_storage;
}

class azMonitorLogAnalyticsWorkspacePack {
}

class azMonitorLogAnalyticsWorkspaceSaved {
    static search = az_monitor_log_analytics_workspace_saved_search;
}

class azMonitorLogAnalyticsWorkspaceTable {
}

class azMonitorLogAnalyticsCluster {
}

class azMonitorLogAnalyticsWorkspace extends az_monitor_log_analytics_workspace {
    static pack = az_monitor_log_analytics_workspace_pack;
    static table = az_monitor_log_analytics_workspace_table;
    static data = azMonitorLogAnalyticsWorkspaceData;
    static linked = azMonitorLogAnalyticsWorkspaceLinked;
    static pack = azMonitorLogAnalyticsWorkspacePack;
    static saved = azMonitorLogAnalyticsWorkspaceSaved;
    static table = azMonitorLogAnalyticsWorkspaceTable;
}

class azMonitorLogAnalytics extends az_monitor_log_analytics {
    static cluster = az_monitor_log_analytics_cluster;
    static cluster = azMonitorLogAnalyticsCluster;
    static workspace = azMonitorLogAnalyticsWorkspace;
}

class azMonitorLogProfiles {
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

class azMonitorPrivateLinkScope extends az_monitor_private_link_scope {
    static private = azMonitorPrivateLinkScopePrivate;
    static scoped = azMonitorPrivateLinkScopeScoped;
}

class azMonitorPrivateLink {
    static scope = azMonitorPrivateLinkScope;
}

class azMonitorAction {
    static group = az_monitor_action_group;
}

class azMonitorActivity {
    static log = azMonitorActivityLog;
}

class azMonitorAlert {
}

class azMonitorAutoscale {
    static profile = az_monitor_autoscale_profile;
    static rule = az_monitor_autoscale_rule;
    static settings = az_monitor_autoscale_settings;
}

class azMonitorDiagnostic {
    static settings = azMonitorDiagnosticSettings;
}

class azMonitorLog {
    static profiles = az_monitor_log_profiles;
    static analytics = azMonitorLogAnalytics;
    static profiles = azMonitorLogProfiles;
}

class azMonitorMetrics {
    static alert = az_monitor_metrics_alert;
}

class azMonitorPrivate {
    static link = azMonitorPrivateLink;
}

class azMysqlFlexibleServerDb {
}

class azMysqlFlexibleServerFirewall {
    static rule = az_mysql_flexible_server_firewall_rule;
}

class azMysqlFlexibleServerParameter {
}

class azMysqlFlexibleServerReplica {
}

class azMysqlFlexibleServer extends az_mysql_flexible_server {
    static db = az_mysql_flexible_server_db;
    static parameter = az_mysql_flexible_server_parameter;
    static replica = az_mysql_flexible_server_replica;
    static db = azMysqlFlexibleServerDb;
    static firewall = azMysqlFlexibleServerFirewall;
    static parameter = azMysqlFlexibleServerParameter;
    static replica = azMysqlFlexibleServerReplica;
}

class azMysqlServerPrivateEndpoint {
    static connection = az_mysql_server_private_endpoint_connection;
}

class azMysqlServerPrivateLink {
    static resource = az_mysql_server_private_link_resource;
}

class azMysqlServerAd {
    static admin = az_mysql_server_ad_admin;
}

class azMysqlServerConfiguration {
}

class azMysqlServerFirewall {
    static rule = az_mysql_server_firewall_rule;
}

class azMysqlServerKey {
}

class azMysqlServerLogs {
}

class azMysqlServerPrivate {
    static endpoint = azMysqlServerPrivateEndpoint;
    static link = azMysqlServerPrivateLink;
}

class azMysqlServerReplica {
}

class azMysqlServerVnet {
    static rule = az_mysql_server_vnet_rule;
}

class azMysqlDb {
}

class azMysqlFlexible {
    static server = azMysqlFlexibleServer;
}

class azMysqlServer extends az_mysql_server {
    static configuration = az_mysql_server_configuration;
    static key = az_mysql_server_key;
    static logs = az_mysql_server_logs;
    static replica = az_mysql_server_replica;
    static ad = azMysqlServerAd;
    static configuration = azMysqlServerConfiguration;
    static firewall = azMysqlServerFirewall;
    static key = azMysqlServerKey;
    static logs = azMysqlServerLogs;
    static private = azMysqlServerPrivate;
    static replica = azMysqlServerReplica;
    static vnet = azMysqlServerVnet;
}

class azNetappfilesVolumeExport {
    static policy = az_netappfiles_volume_export_policy;
}

class azNetappfilesVolumeReplication {
}

class azNetappfilesAccount {
    static ad = az_netappfiles_account_ad;
}

class azNetappfilesPool {
}

class azNetappfilesSnapshot {
}

class azNetappfilesVolume extends az_netappfiles_volume {
    static replication = az_netappfiles_volume_replication;
    static export = azNetappfilesVolumeExport;
    static replication = azNetappfilesVolumeReplication;
}

class azNetworkApplicationGatewayPrivateLinkIp {
    static config = az_network_application_gateway_private_link_ip_config;
}

class azNetworkApplicationGatewayPrivateLink extends az_network_application_gateway_private_link {
    static ip = azNetworkApplicationGatewayPrivateLinkIp;
}

class azNetworkApplicationGatewayRewriteRule {
    static condition = az_network_application_gateway_rewrite_rule_condition;
    static set = az_network_application_gateway_rewrite_rule_set;
}

class azNetworkApplicationGatewaySslCert {
}

class azNetworkApplicationGatewaySslPolicy {
    static predefined = az_network_application_gateway_ssl_policy_predefined;
}

class azNetworkApplicationGatewayUrlPathMap {
    static rule = az_network_application_gateway_url_path_map_rule;
}

class azNetworkApplicationGatewayUrlPath {
    static map = azNetworkApplicationGatewayUrlPathMap;
}

class azNetworkApplicationGatewayWafPolicyCustomRuleMatch {
    static condition = az_network_application_gateway_waf_policy_custom_rule_match_condition;
}

class azNetworkApplicationGatewayWafPolicyCustomRule extends az_network_application_gateway_waf_policy_custom_rule {
    static match = azNetworkApplicationGatewayWafPolicyCustomRuleMatch;
}

class azNetworkApplicationGatewayWafPolicyManagedRuleExclusion {
}

class azNetworkApplicationGatewayWafPolicyManagedRuleRule {
    static set = az_network_application_gateway_waf_policy_managed_rule_rule_set;
}

class azNetworkApplicationGatewayWafPolicyManagedRule extends az_network_application_gateway_waf_policy_managed_rule {
    static exclusion = az_network_application_gateway_waf_policy_managed_rule_exclusion;
    static exclusion = azNetworkApplicationGatewayWafPolicyManagedRuleExclusion;
    static rule = azNetworkApplicationGatewayWafPolicyManagedRuleRule;
}

class azNetworkApplicationGatewayWafPolicyCustom {
    static rule = azNetworkApplicationGatewayWafPolicyCustomRule;
}

class azNetworkApplicationGatewayWafPolicyManaged {
    static rule = azNetworkApplicationGatewayWafPolicyManagedRule;
}

class azNetworkApplicationGatewayWafPolicyPolicy {
    static setting = az_network_application_gateway_waf_policy_policy_setting;
}

class azNetworkApplicationGatewayWafConfig {
}

class azNetworkApplicationGatewayWafPolicy extends az_network_application_gateway_waf_policy {
    static custom = azNetworkApplicationGatewayWafPolicyCustom;
    static managed = azNetworkApplicationGatewayWafPolicyManaged;
    static policy = azNetworkApplicationGatewayWafPolicyPolicy;
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

class azNetworkApplicationGatewayIdentity {
}

class azNetworkApplicationGatewayPrivate {
    static link = azNetworkApplicationGatewayPrivateLink;
}

class azNetworkApplicationGatewayProbe {
}

class azNetworkApplicationGatewayRedirect {
    static config = az_network_application_gateway_redirect_config;
}

class azNetworkApplicationGatewayRewrite {
    static rule = azNetworkApplicationGatewayRewriteRule;
}

class azNetworkApplicationGatewayRoot {
    static cert = az_network_application_gateway_root_cert;
}

class azNetworkApplicationGatewayRule {
}

class azNetworkApplicationGatewaySsl {
    static cert = az_network_application_gateway_ssl_cert;
    static cert = azNetworkApplicationGatewaySslCert;
    static policy = azNetworkApplicationGatewaySslPolicy;
}

class azNetworkApplicationGatewayUrl {
    static path = azNetworkApplicationGatewayUrlPath;
}

class azNetworkApplicationGatewayWaf {
    static config = az_network_application_gateway_waf_config;
    static config = azNetworkApplicationGatewayWafConfig;
    static policy = azNetworkApplicationGatewayWafPolicy;
}

class azNetworkApplicationGateway extends az_network_application_gateway {
    static identity = az_network_application_gateway_identity;
    static probe = az_network_application_gateway_probe;
    static rule = az_network_application_gateway_rule;
    static address = azNetworkApplicationGatewayAddress;
    static auth = azNetworkApplicationGatewayAuth;
    static frontend = azNetworkApplicationGatewayFrontend;
    static http = azNetworkApplicationGatewayHttp;
    static identity = azNetworkApplicationGatewayIdentity;
    static private = azNetworkApplicationGatewayPrivate;
    static probe = azNetworkApplicationGatewayProbe;
    static redirect = azNetworkApplicationGatewayRedirect;
    static rewrite = azNetworkApplicationGatewayRewrite;
    static root = azNetworkApplicationGatewayRoot;
    static rule = azNetworkApplicationGatewayRule;
    static ssl = azNetworkApplicationGatewaySsl;
    static url = azNetworkApplicationGatewayUrl;
    static waf = azNetworkApplicationGatewayWaf;
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

class azNetworkDnsZone {
}

class azNetworkExpressRoutePeeringConnection {
}

class azNetworkExpressRoutePeeringPeer {
    static connection = az_network_express_route_peering_peer_connection;
}

class azNetworkExpressRouteAuth {
}

class azNetworkExpressRouteGateway {
    static connection = az_network_express_route_gateway_connection;
}

class azNetworkExpressRoutePeering extends az_network_express_route_peering {
    static connection = az_network_express_route_peering_connection;
    static connection = azNetworkExpressRoutePeeringConnection;
    static peer = azNetworkExpressRoutePeeringPeer;
}

class azNetworkExpressRoutePort {
    static identity = az_network_express_route_port_identity;
    static link = az_network_express_route_port_link;
    static location = az_network_express_route_port_location;
}

class azNetworkExpressRoute extends az_network_express_route {
    static auth = az_network_express_route_auth;
    static auth = azNetworkExpressRouteAuth;
    static gateway = azNetworkExpressRouteGateway;
    static peering = azNetworkExpressRoutePeering;
    static port = azNetworkExpressRoutePort;
}

class azNetworkLbAddressPool {
    static address = az_network_lb_address_pool_address;
}

class azNetworkLbInboundNat {
    static pool = az_network_lb_inbound_nat_pool;
    static rule = az_network_lb_inbound_nat_rule;
}

class azNetworkLbAddress {
    static pool = azNetworkLbAddressPool;
}

class azNetworkLbFrontend {
    static ip = az_network_lb_frontend_ip;
}

class azNetworkLbInbound {
    static nat = azNetworkLbInboundNat;
}

class azNetworkLbOutbound {
    static rule = az_network_lb_outbound_rule;
}

class azNetworkLbProbe {
}

class azNetworkLbRule {
}

class azNetworkNicIpConfigInboundNat {
    static rule = az_network_nic_ip_config_inbound_nat_rule;
}

class azNetworkNicIpConfigAddress {
    static pool = az_network_nic_ip_config_address_pool;
}

class azNetworkNicIpConfigInbound {
    static nat = azNetworkNicIpConfigInboundNat;
}

class azNetworkNicIpConfig extends az_network_nic_ip_config {
    static address = azNetworkNicIpConfigAddress;
    static inbound = azNetworkNicIpConfigInbound;
}

class azNetworkNicIp {
    static config = azNetworkNicIpConfig;
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

class azNetworkPrivateDnsLink {
    static vnet = az_network_private_dns_link_vnet;
}

class azNetworkPrivateDnsRecord {
    static set = azNetworkPrivateDnsRecordSet;
}

class azNetworkPrivateDnsZone {
}

class azNetworkPrivateEndpointDnsZone {
    static group = az_network_private_endpoint_dns_zone_group;
}

class azNetworkPrivateEndpointConnection {
}

class azNetworkPrivateEndpointDns {
    static zone = azNetworkPrivateEndpointDnsZone;
}

class azNetworkPrivateLinkResource {
}

class azNetworkPrivateLinkService {
    static connection = az_network_private_link_service_connection;
}

class azNetworkPrivateDns extends az_network_private_dns {
    static zone = az_network_private_dns_zone;
    static link = azNetworkPrivateDnsLink;
    static record = azNetworkPrivateDnsRecord;
    static zone = azNetworkPrivateDnsZone;
}

class azNetworkPrivateEndpoint extends az_network_private_endpoint {
    static connection = az_network_private_endpoint_connection;
    static connection = azNetworkPrivateEndpointConnection;
    static dns = azNetworkPrivateEndpointDns;
}

class azNetworkPrivateLink {
    static resource = az_network_private_link_resource;
    static resource = azNetworkPrivateLinkResource;
    static service = azNetworkPrivateLinkService;
}

class azNetworkPublicIp {
    static prefix = az_network_public_ip_prefix;
}

class azNetworkRouteFilter {
    static rule = az_network_route_filter_rule;
}

class azNetworkRouteTable {
    static route = az_network_route_table_route;
}

class azNetworkSecurityPartner {
    static provider = az_network_security_partner_provider;
}

class azNetworkServiceEndpointPolicy {
    static definition = az_network_service_endpoint_policy_definition;
}

class azNetworkServiceEndpoint extends az_network_service_endpoint {
    static policy = azNetworkServiceEndpointPolicy;
}

class azNetworkTrafficManager {
    static endpoint = az_network_traffic_manager_endpoint;
    static profile = az_network_traffic_manager_profile;
}

class azNetworkVirtualAppliance {
    static site = az_network_virtual_appliance_site;
    static sku = az_network_virtual_appliance_sku;
}

class azNetworkVnetGatewayAad {
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

class azNetworkVnetGateway extends az_network_vnet_gateway {
    static aad = az_network_vnet_gateway_aad;
    static aad = azNetworkVnetGatewayAad;
    static ipsec = azNetworkVnetGatewayIpsec;
    static revoked = azNetworkVnetGatewayRevoked;
    static root = azNetworkVnetGatewayRoot;
    static vpn = azNetworkVnetGatewayVpn;
}

class azNetworkVnetPeering {
}

class azNetworkVnetSubnet {
}

class azNetworkVpnConnectionIpsec {
    static policy = az_network_vpn_connection_ipsec_policy;
}

class azNetworkVpnConnectionShared {
    static key = az_network_vpn_connection_shared_key;
}

class azNetworkVpnConnection extends az_network_vpn_connection {
    static ipsec = azNetworkVpnConnectionIpsec;
    static shared = azNetworkVpnConnectionShared;
}

class azNetworkWatcherConnectionMonitorEndpoint {
}

class azNetworkWatcherConnectionMonitorOutput {
}

class azNetworkWatcherConnectionMonitorTest {
    static configuration = az_network_watcher_connection_monitor_test_configuration;
    static group = az_network_watcher_connection_monitor_test_group;
}

class azNetworkWatcherConnectionMonitor extends az_network_watcher_connection_monitor {
    static endpoint = az_network_watcher_connection_monitor_endpoint;
    static output = az_network_watcher_connection_monitor_output;
    static endpoint = azNetworkWatcherConnectionMonitorEndpoint;
    static output = azNetworkWatcherConnectionMonitorOutput;
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

class azNetworkWatcherTroubleshooting {
}

class azNetworkApplication {
    static gateway = azNetworkApplicationGateway;
}

class azNetworkAsg {
}

class azNetworkBastion {
}

class azNetworkDdos {
    static protection = az_network_ddos_protection;
}

class azNetworkDns extends az_network_dns {
    static zone = az_network_dns_zone;
    static record = azNetworkDnsRecord;
    static zone = azNetworkDnsZone;
}

class azNetworkExpress {
    static route = azNetworkExpressRoute;
}

class azNetworkLb extends az_network_lb {
    static probe = az_network_lb_probe;
    static rule = az_network_lb_rule;
    static address = azNetworkLbAddress;
    static frontend = azNetworkLbFrontend;
    static inbound = azNetworkLbInbound;
    static outbound = azNetworkLbOutbound;
    static probe = azNetworkLbProbe;
    static rule = azNetworkLbRule;
}

class azNetworkLocal {
    static gateway = az_network_local_gateway;
}

class azNetworkNat {
    static gateway = az_network_nat_gateway;
}

class azNetworkNic extends az_network_nic {
    static ip = azNetworkNicIp;
}

class azNetworkNsg {
    static rule = az_network_nsg_rule;
}

class azNetworkPrivate {
    static dns = azNetworkPrivateDns;
    static endpoint = azNetworkPrivateEndpoint;
    static link = azNetworkPrivateLink;
}

class azNetworkProfile {
}

class azNetworkPublic {
    static ip = azNetworkPublicIp;
}

class azNetworkRoute {
    static filter = azNetworkRouteFilter;
    static table = azNetworkRouteTable;
}

class azNetworkSecurity {
    static partner = azNetworkSecurityPartner;
}

class azNetworkService {
    static endpoint = azNetworkServiceEndpoint;
}

class azNetworkTraffic {
    static manager = azNetworkTrafficManager;
}

class azNetworkVirtual {
    static appliance = azNetworkVirtualAppliance;
}

class azNetworkVnet extends az_network_vnet {
    static peering = az_network_vnet_peering;
    static subnet = az_network_vnet_subnet;
    static gateway = azNetworkVnetGateway;
    static peering = azNetworkVnetPeering;
    static subnet = azNetworkVnetSubnet;
}

class azNetworkVpn {
    static connection = azNetworkVpnConnection;
}

class azNetworkVrouter {
    static peering = az_network_vrouter_peering;
}

class azNetworkWatcher extends az_network_watcher {
    static troubleshooting = az_network_watcher_troubleshooting;
    static connection = azNetworkWatcherConnection;
    static flow = azNetworkWatcherFlow;
    static packet = azNetworkWatcherPacket;
    static troubleshooting = azNetworkWatcherTroubleshooting;
}

class azPipelinesVariableGroup {
    static variable = az_pipelines_variable_group_variable;
}

class azPipelinesAgent {
}

class azPipelinesBuild {
    static definition = az_pipelines_build_definition;
    static tag = az_pipelines_build_tag;
}

class azPipelinesFolder {
}

class azPipelinesPool {
}

class azPipelinesQueue {
}

class azPipelinesRelease {
    static definition = az_pipelines_release_definition;
}

class azPipelinesRuns {
    static artifact = az_pipelines_runs_artifact;
    static tag = az_pipelines_runs_tag;
}

class azPipelinesVariable extends az_pipelines_variable {
    static group = azPipelinesVariableGroup;
}

class azPolicyAssignment {
    static identity = az_policy_assignment_identity;
}

class azPolicyDefinition {
}

class azPolicyEvent {
}

class azPolicyMetadata {
}

class azPolicyRemediation {
    static deployment = az_policy_remediation_deployment;
}

class azPolicySet {
    static definition = az_policy_set_definition;
}

class azPolicyState {
}

class azPostgresFlexibleServerFirewall {
    static rule = az_postgres_flexible_server_firewall_rule;
}

class azPostgresFlexibleServerParameter {
}

class azPostgresFlexibleServer extends az_postgres_flexible_server {
    static parameter = az_postgres_flexible_server_parameter;
    static firewall = azPostgresFlexibleServerFirewall;
    static parameter = azPostgresFlexibleServerParameter;
}

class azPostgresServerPrivateEndpoint {
    static connection = az_postgres_server_private_endpoint_connection;
}

class azPostgresServerPrivateLink {
    static resource = az_postgres_server_private_link_resource;
}

class azPostgresServerAd {
    static admin = az_postgres_server_ad_admin;
}

class azPostgresServerConfiguration {
}

class azPostgresServerFirewall {
    static rule = az_postgres_server_firewall_rule;
}

class azPostgresServerKey {
}

class azPostgresServerLogs {
}

class azPostgresServerPrivate {
    static endpoint = azPostgresServerPrivateEndpoint;
    static link = azPostgresServerPrivateLink;
}

class azPostgresServerReplica {
}

class azPostgresServerVnet {
    static rule = az_postgres_server_vnet_rule;
}

class azPostgresDb {
}

class azPostgresFlexible {
    static server = azPostgresFlexibleServer;
}

class azPostgresServer extends az_postgres_server {
    static configuration = az_postgres_server_configuration;
    static key = az_postgres_server_key;
    static logs = az_postgres_server_logs;
    static replica = az_postgres_server_replica;
    static ad = azPostgresServerAd;
    static configuration = azPostgresServerConfiguration;
    static firewall = azPostgresServerFirewall;
    static key = azPostgresServerKey;
    static logs = azPostgresServerLogs;
    static private = azPostgresServerPrivate;
    static replica = azPostgresServerReplica;
    static vnet = azPostgresServerVnet;
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

class azRelayHycoAuthorizationRule {
    static keys = az_relay_hyco_authorization_rule_keys;
}

class azRelayHycoAuthorization {
    static rule = azRelayHycoAuthorizationRule;
}

class azRelayNamespaceAuthorizationRule {
    static keys = az_relay_namespace_authorization_rule_keys;
}

class azRelayNamespaceAuthorization {
    static rule = azRelayNamespaceAuthorizationRule;
}

class azRelayWcfrelayAuthorizationRule {
    static keys = az_relay_wcfrelay_authorization_rule_keys;
}

class azRelayWcfrelayAuthorization {
    static rule = azRelayWcfrelayAuthorizationRule;
}

class azRelayHyco extends az_relay_hyco {
    static authorization = azRelayHycoAuthorization;
}

class azRelayNamespace extends az_relay_namespace {
    static authorization = azRelayNamespaceAuthorization;
}

class azRelayWcfrelay extends az_relay_wcfrelay {
    static authorization = azRelayWcfrelayAuthorization;
}

class azReposPolicyWorkItem {
    static linking = az_repos_policy_work_item_linking;
}

class azReposPolicyApprover {
    static count = az_repos_policy_approver_count;
}

class azReposPolicyBuild {
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

class azReposPolicyWork {
    static item = azReposPolicyWorkItem;
}

class azReposPrPolicy {
}

class azReposPrReviewer {
}

class azReposPrWork {
    static item = az_repos_pr_work_item;
}

class azReposImport {
}

class azReposPolicy extends az_repos_policy {
    static build = az_repos_policy_build;
    static approver = azReposPolicyApprover;
    static build = azReposPolicyBuild;
    static case = azReposPolicyCase;
    static comment = azReposPolicyComment;
    static file = azReposPolicyFile;
    static merge = azReposPolicyMerge;
    static required = azReposPolicyRequired;
    static work = azReposPolicyWork;
}

class azReposPr extends az_repos_pr {
    static policy = az_repos_pr_policy;
    static reviewer = az_repos_pr_reviewer;
    static policy = azReposPrPolicy;
    static reviewer = azReposPrReviewer;
    static work = azReposPrWork;
}

class azReposRef {
}

class azReservationsReservationOrder {
    static id = az_reservations_reservation_order_id;
}

class azReservationsCatalog {
}

class azReservationsReservation extends az_reservations_reservation {
    static order = azReservationsReservationOrder;
}

class azSearchAdmin {
    static key = az_search_admin_key;
}

class azSearchQuery {
    static key = az_search_query_key;
}

class azSearchService {
}

class azSecurityAdaptiveApplication {
    static controls = az_security_adaptive_application_controls;
}

class azSecurityAdaptiveNetwork {
    static hardenings = az_security_adaptive_network_hardenings;
}

class azSecurityAutoProvisioning {
    static setting = az_security_auto_provisioning_setting;
}

class azSecurityDiscoveredSecurity {
    static solution = az_security_discovered_security_solution;
}

class azSecurityExternalSecurity {
    static solution = az_security_external_security_solution;
}

class azSecurityRegulatoryCompliance {
    static assessments = az_security_regulatory_compliance_assessments;
    static controls = az_security_regulatory_compliance_controls;
    static standards = az_security_regulatory_compliance_standards;
}

class azSecurityAdaptive {
    static application = azSecurityAdaptiveApplication;
    static network = azSecurityAdaptiveNetwork;
}

class azSecurityAlert {
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

class azSecurityAuto {
    static provisioning = azSecurityAutoProvisioning;
}

class azSecurityContact {
}

class azSecurityDiscovered {
    static security = azSecurityDiscoveredSecurity;
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

class azSecurityLocation {
}

class azSecurityPricing {
}

class azSecurityRegulatory {
    static compliance = azSecurityRegulatoryCompliance;
}

class azSecuritySetting {
}

class azSecuritySub {
    static assessment = az_security_sub_assessment;
}

class azSecurityTask {
}

class azSecurityTopology {
}

class azSecurityWorkspace {
    static setting = az_security_workspace_setting;
}

class azServicebusGeorecoveryAliasAuthorizationRule {
    static keys = az_servicebus_georecovery_alias_authorization_rule_keys;
}

class azServicebusGeorecoveryAliasAuthorization {
    static rule = azServicebusGeorecoveryAliasAuthorizationRule;
}

class azServicebusGeorecoveryAlias extends az_servicebus_georecovery_alias {
    static authorization = azServicebusGeorecoveryAliasAuthorization;
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

class azServicebusQueueAuthorizationRule {
    static keys = az_servicebus_queue_authorization_rule_keys;
}

class azServicebusQueueAuthorization {
    static rule = azServicebusQueueAuthorizationRule;
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

class azServicebusGeorecovery {
    static alias = azServicebusGeorecoveryAlias;
}

class azServicebusMigration {
}

class azServicebusNamespace extends az_servicebus_namespace {
    static authorization = azServicebusNamespaceAuthorization;
    static network = azServicebusNamespaceNetwork;
}

class azServicebusQueue extends az_servicebus_queue {
    static authorization = azServicebusQueueAuthorization;
}

class azServicebusTopic extends az_servicebus_topic {
    static authorization = azServicebusTopicAuthorization;
    static subscription = azServicebusTopicSubscription;
}

class azSfApplicationCertificate {
}

class azSfApplicationType {
    static version = az_sf_application_type_version;
}

class azSfClusterCertificate {
}

class azSfClusterClient {
    static certificate = az_sf_cluster_client_certificate;
}

class azSfClusterDurability {
}

class azSfClusterNode {
    static type = az_sf_cluster_node_type;
}

class azSfClusterReliability {
}

class azSfClusterSetting {
}

class azSfClusterUpgrade {
    static type = az_sf_cluster_upgrade_type;
}

class azSfManagedClusterClient {
    static certificate = az_sf_managed_cluster_client_certificate;
}

class azSfManagedNodeTypeNode {
}

class azSfManagedNodeTypeVm {
    static extension = az_sf_managed_node_type_vm_extension;
    static secret = az_sf_managed_node_type_vm_secret;
}

class azSfManagedNodeType extends az_sf_managed_node_type {
    static node = az_sf_managed_node_type_node;
    static node = azSfManagedNodeTypeNode;
    static vm = azSfManagedNodeTypeVm;
}

class azSfManagedCluster extends az_sf_managed_cluster {
    static client = azSfManagedClusterClient;
}

class azSfManagedNode {
    static type = azSfManagedNodeType;
}

class azSfApplication extends az_sf_application {
    static certificate = az_sf_application_certificate;
    static certificate = azSfApplicationCertificate;
    static type = azSfApplicationType;
}

class azSfCluster extends az_sf_cluster {
    static certificate = az_sf_cluster_certificate;
    static durability = az_sf_cluster_durability;
    static reliability = az_sf_cluster_reliability;
    static setting = az_sf_cluster_setting;
    static certificate = azSfClusterCertificate;
    static client = azSfClusterClient;
    static durability = azSfClusterDurability;
    static node = azSfClusterNode;
    static reliability = azSfClusterReliability;
    static setting = azSfClusterSetting;
    static upgrade = azSfClusterUpgrade;
}

class azSfManaged {
    static cluster = azSfManagedCluster;
    static node = azSfManagedNode;
}

class azSfService {
}

class azSigImage {
    static definition = az_sig_image_definition;
    static version = az_sig_image_version;
}

class azSignalrCors {
}

class azSignalrKey {
}

class azSignalrNetwork {
    static rule = az_signalr_network_rule;
}

class azSignalrUpstream {
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

class azSqlDbOp {
}

class azSqlDbReplica {
}

class azSqlDbTde {
}

class azSqlDbThreat {
    static policy = az_sql_db_threat_policy;
}

class azSqlElasticPool {
    static op = az_sql_elastic_pool_op;
}

class azSqlInstanceFailover {
    static group = az_sql_instance_failover_group;
}

class azSqlInstancePool {
}

class azSqlMiAd {
    static admin = az_sql_mi_ad_admin;
}

class azSqlMiKey {
}

class azSqlMiOp {
}

class azSqlMiTde {
    static key = az_sql_mi_tde_key;
}

class azSqlMidbShortTermRetention {
    static policy = az_sql_midb_short_term_retention_policy;
}

class azSqlMidbShortTerm {
    static retention = azSqlMidbShortTermRetention;
}

class azSqlMidbLtr {
    static backup = az_sql_midb_ltr_backup;
    static policy = az_sql_midb_ltr_policy;
}

class azSqlMidbShort {
    static term = azSqlMidbShortTerm;
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

class azSqlServerKey {
}

class azSqlServerTde {
    static key = az_sql_server_tde_key;
}

class azSqlServerVnet {
    static rule = az_sql_server_vnet_rule;
}

class azSqlVmGroupAg {
    static listener = az_sql_vm_group_ag_listener;
}

class azSqlVmGroup extends az_sql_vm_group {
    static ag = azSqlVmGroupAg;
}

class azSqlDb extends az_sql_db {
    static op = az_sql_db_op;
    static replica = az_sql_db_replica;
    static tde = az_sql_db_tde;
    static audit = azSqlDbAudit;
    static classification = azSqlDbClassification;
    static ltr = azSqlDbLtr;
    static op = azSqlDbOp;
    static replica = azSqlDbReplica;
    static tde = azSqlDbTde;
    static threat = azSqlDbThreat;
}

class azSqlDw {
}

class azSqlElastic {
    static pool = azSqlElasticPool;
}

class azSqlFailover {
    static group = az_sql_failover_group;
}

class azSqlInstance {
    static pool = az_sql_instance_pool;
    static failover = azSqlInstanceFailover;
    static pool = azSqlInstancePool;
}

class azSqlMi extends az_sql_mi {
    static key = az_sql_mi_key;
    static op = az_sql_mi_op;
    static ad = azSqlMiAd;
    static key = azSqlMiKey;
    static op = azSqlMiOp;
    static tde = azSqlMiTde;
}

class azSqlMidb extends az_sql_midb {
    static ltr = azSqlMidbLtr;
    static short = azSqlMidbShort;
}

class azSqlServer extends az_sql_server {
    static key = az_sql_server_key;
    static ad = azSqlServerAd;
    static audit = azSqlServerAudit;
    static conn = azSqlServerConn;
    static dns = azSqlServerDns;
    static firewall = azSqlServerFirewall;
    static key = azSqlServerKey;
    static tde = azSqlServerTde;
    static vnet = azSqlServerVnet;
}

class azSqlVirtual {
    static cluster = az_sql_virtual_cluster;
}

class azSqlVm extends az_sql_vm {
    static group = azSqlVmGroup;
}

class azStorageAccountBlobService {
    static properties = az_storage_account_blob_service_properties;
}

class azStorageAccountFileService {
    static properties = az_storage_account_file_service_properties;
}

class azStorageAccountOrPolicy {
    static rule = az_storage_account_or_policy_rule;
}

class azStorageAccountPrivateEndpoint {
    static connection = az_storage_account_private_endpoint_connection;
}

class azStorageAccountPrivateLink {
    static resource = az_storage_account_private_link_resource;
}

class azStorageAccountBlob {
    static service = azStorageAccountBlobService;
}

class azStorageAccountEncryption {
    static scope = az_storage_account_encryption_scope;
}

class azStorageAccountFile {
    static service = azStorageAccountFileService;
}

class azStorageAccountKeys {
}

class azStorageAccountManagement {
    static policy = az_storage_account_management_policy;
}

class azStorageAccountNetwork {
    static rule = az_storage_account_network_rule;
}

class azStorageAccountOr {
    static policy = azStorageAccountOrPolicy;
}

class azStorageAccountPrivate {
    static endpoint = azStorageAccountPrivateEndpoint;
    static link = azStorageAccountPrivateLink;
}

class azStorageBlobServicePropertiesDelete {
    static policy = az_storage_blob_service_properties_delete_policy;
}

class azStorageBlobServiceProperties extends az_storage_blob_service_properties {
    static delete = azStorageBlobServicePropertiesDelete;
}

class azStorageBlobCopy {
}

class azStorageBlobIncremental {
    static copy = az_storage_blob_incremental_copy;
}

class azStorageBlobLease {
}

class azStorageBlobMetadata {
}

class azStorageBlobService {
    static properties = azStorageBlobServiceProperties;
}

class azStorageContainerImmutability {
    static policy = az_storage_container_immutability_policy;
}

class azStorageContainerLease {
}

class azStorageContainerLegal {
    static hold = az_storage_container_legal_hold;
}

class azStorageContainerMetadata {
}

class azStorageContainerPolicy {
}

class azStorageFsAccess {
}

class azStorageFsDirectory {
    static metadata = az_storage_fs_directory_metadata;
}

class azStorageFsFile {
    static metadata = az_storage_fs_file_metadata;
}

class azStorageFsMetadata {
}

class azStorageAccount extends az_storage_account {
    static keys = az_storage_account_keys;
    static blob = azStorageAccountBlob;
    static encryption = azStorageAccountEncryption;
    static file = azStorageAccountFile;
    static keys = azStorageAccountKeys;
    static management = azStorageAccountManagement;
    static network = azStorageAccountNetwork;
    static or = azStorageAccountOr;
    static private = azStorageAccountPrivate;
}

class azStorageBlob extends az_storage_blob {
    static copy = az_storage_blob_copy;
    static lease = az_storage_blob_lease;
    static metadata = az_storage_blob_metadata;
    static copy = azStorageBlobCopy;
    static incremental = azStorageBlobIncremental;
    static lease = azStorageBlobLease;
    static metadata = azStorageBlobMetadata;
    static service = azStorageBlobService;
}

class azStorageContainer extends az_storage_container {
    static lease = az_storage_container_lease;
    static metadata = az_storage_container_metadata;
    static policy = az_storage_container_policy;
    static immutability = azStorageContainerImmutability;
    static lease = azStorageContainerLease;
    static legal = azStorageContainerLegal;
    static metadata = azStorageContainerMetadata;
    static policy = azStorageContainerPolicy;
}

class azStorageCors {
}

class azStorageDirectory {
    static metadata = az_storage_directory_metadata;
}

class azStorageEntity {
}

class azStorageFile {
    static copy = az_storage_file_copy;
    static metadata = az_storage_file_metadata;
}

class azStorageFs extends az_storage_fs {
    static access = az_storage_fs_access;
    static metadata = az_storage_fs_metadata;
    static access = azStorageFsAccess;
    static directory = azStorageFsDirectory;
    static file = azStorageFsFile;
    static metadata = azStorageFsMetadata;
}

class azStorageLogging {
}

class azStorageMessage {
}

class azStorageMetrics {
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

class azSynapseWorkspaceFirewall {
    static rule = az_synapse_workspace_firewall_rule;
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

class azSynapseWorkspace extends az_synapse_workspace {
    static firewall = azSynapseWorkspaceFirewall;
}

class azVmAvailability {
    static set = az_vm_availability_set;
}

class azVmBoot {
    static diagnostics = az_vm_boot_diagnostics;
}

class azVmDiagnostics {
}

class azVmDisk {
}

class azVmEncryption {
}

class azVmExtension {
    static image = az_vm_extension_image;
}

class azVmHost {
    static group = az_vm_host_group;
}

class azVmIdentity {
}

class azVmImage {
    static terms = az_vm_image_terms;
}

class azVmMonitor {
    static log = az_vm_monitor_log;
    static metrics = az_vm_monitor_metrics;
}

class azVmNic {
}

class azVmRun {
    static command = az_vm_run_command;
}

class azVmSecret {
}

class azVmUnmanaged {
    static disk = az_vm_unmanaged_disk;
}

class azVmUser {
}

class azVmssDiagnostics {
}

class azVmssDisk {
}

class azVmssEncryption {
}

class azVmssExtension {
    static image = az_vmss_extension_image;
}

class azVmssIdentity {
}

class azVmssNic {
}

class azVmssRolling {
    static upgrade = az_vmss_rolling_upgrade;
}

class azVmssRun {
    static command = az_vmss_run_command;
}

class azWebappConfigAccess {
    static restriction = az_webapp_config_access_restriction;
}

class azWebappConfigAppsettings {
}

class azWebappConfigBackup {
}

class azWebappConfigConnection {
    static string = az_webapp_config_connection_string;
}

class azWebappConfigContainer {
}

class azWebappConfigHostname {
}

class azWebappConfigSnapshot {
}

class azWebappConfigSsl {
}

class azWebappConfigStorage {
    static account = az_webapp_config_storage_account;
}

class azWebappAuth {
}

class azWebappConfig extends az_webapp_config {
    static appsettings = az_webapp_config_appsettings;
    static backup = az_webapp_config_backup;
    static container = az_webapp_config_container;
    static hostname = az_webapp_config_hostname;
    static snapshot = az_webapp_config_snapshot;
    static ssl = az_webapp_config_ssl;
    static access = azWebappConfigAccess;
    static appsettings = azWebappConfigAppsettings;
    static backup = azWebappConfigBackup;
    static connection = azWebappConfigConnection;
    static container = azWebappConfigContainer;
    static hostname = azWebappConfigHostname;
    static snapshot = azWebappConfigSnapshot;
    static ssl = azWebappConfigSsl;
    static storage = azWebappConfigStorage;
}

class azWebappCors {
}

class azWebappDeleted {
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

class azWebappIdentity {
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

class azAccount extends az_account {
    static lock = az_account_lock;
    static lock = azAccountLock;
    static management = azAccountManagement;
}

class azAcr extends az_acr {
    static agentpool = az_acr_agentpool;
    static credential = az_acr_credential;
    static encryption = az_acr_encryption;
    static identity = az_acr_identity;
    static pack = az_acr_pack;
    static replication = az_acr_replication;
    static repository = az_acr_repository;
    static taskrun = az_acr_taskrun;
    static webhook = az_acr_webhook;
    static agentpool = azAcrAgentpool;
    static config = azAcrConfig;
    static credential = azAcrCredential;
    static encryption = azAcrEncryption;
    static helm = azAcrHelm;
    static identity = azAcrIdentity;
    static network = azAcrNetwork;
    static pack = azAcrPack;
    static private = azAcrPrivate;
    static replication = azAcrReplication;
    static repository = azAcrRepository;
    static scope = azAcrScope;
    static task = azAcrTask;
    static taskrun = azAcrTaskrun;
    static token = azAcrToken;
    static webhook = azAcrWebhook;
}

class azAcs {
    static dcos = az_acs_dcos;
    static kubernetes = az_acs_kubernetes;
}

class azAd extends az_ad {
    static user = az_ad_user;
    static app = azAdApp;
    static group = azAdGroup;
    static signed = azAdSigned;
    static sp = azAdSp;
    static user = azAdUser;
}

class azAdvisor {
    static configuration = az_advisor_configuration;
    static recommendation = az_advisor_recommendation;
}

class azAks {
    static nodepool = az_aks_nodepool;
}

class azAms extends az_ams {
    static job = az_ams_job;
    static account = azAmsAccount;
    static asset = azAmsAsset;
    static content = azAmsContent;
    static job = azAmsJob;
    static live = azAmsLive;
    static streaming = azAmsStreaming;
    static transform = azAmsTransform;
}

class azApim extends az_apim {
    static nv = az_apim_nv;
    static api = azApimApi;
    static nv = azApimNv;
    static product = azApimProduct;
}

class azAppconfig extends az_appconfig {
    static credential = az_appconfig_credential;
    static identity = az_appconfig_identity;
    static kv = az_appconfig_kv;
    static revision = az_appconfig_revision;
    static credential = azAppconfigCredential;
    static feature = azAppconfigFeature;
    static identity = azAppconfigIdentity;
    static kv = azAppconfigKv;
    static revision = azAppconfigRevision;
}

class azAppservice extends az_appservice {
    static ase = az_appservice_ase;
    static plan = az_appservice_plan;
    static ase = azAppserviceAse;
    static hybrid = azAppserviceHybrid;
    static plan = azAppservicePlan;
    static vnet = azAppserviceVnet;
}

class azAro {
}

class azArtifacts {
    static universal = az_artifacts_universal;
}

class azBackup extends az_backup {
    static container = az_backup_container;
    static item = az_backup_item;
    static job = az_backup_job;
    static policy = az_backup_policy;
    static protection = az_backup_protection;
    static recoveryconfig = az_backup_recoveryconfig;
    static recoverypoint = az_backup_recoverypoint;
    static container = azBackupContainer;
    static item = azBackupItem;
    static job = azBackupJob;
    static policy = azBackupPolicy;
    static protectable = azBackupProtectable;
    static protection = azBackupProtection;
    static recoveryconfig = azBackupRecoveryconfig;
    static recoverypoint = azBackupRecoverypoint;
    static restore = azBackupRestore;
    static vault = azBackupVault;
}

class azBatch extends az_batch {
    static certificate = az_batch_certificate;
    static account = azBatchAccount;
    static application = azBatchApplication;
    static certificate = azBatchCertificate;
    static job = azBatchJob;
    static location = azBatchLocation;
    static node = azBatchNode;
    static pool = azBatchPool;
    static task = azBatchTask;
}

class azBatchai extends az_batchai {
    static experiment = az_batchai_experiment;
    static workspace = az_batchai_workspace;
    static cluster = azBatchaiCluster;
    static experiment = azBatchaiExperiment;
    static file = azBatchaiFile;
    static job = azBatchaiJob;
    static workspace = azBatchaiWorkspace;
}

class azBilling extends az_billing {
    static invoice = az_billing_invoice;
    static period = az_billing_period;
    static enrollment = azBillingEnrollment;
    static invoice = azBillingInvoice;
    static period = azBillingPeriod;
}

class azBoards extends az_boards {
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

class azCache {
}

class azCdn extends az_cdn {
    static origin = az_cdn_origin;
    static profile = az_cdn_profile;
    static custom = azCdnCustom;
    static edge = azCdnEdge;
    static endpoint = azCdnEndpoint;
    static origin = azCdnOrigin;
    static profile = azCdnProfile;
    static waf = azCdnWaf;
}

class azCloud {
}

class azCognitiveservices extends az_cognitiveservices {
    static account = azCognitiveservicesAccount;
}

class azConfig extends az_config {
    static param = azConfigParam;
}

class azConsumption extends az_consumption {
    static budget = az_consumption_budget;
    static marketplace = az_consumption_marketplace;
    static pricesheet = az_consumption_pricesheet;
    static usage = az_consumption_usage;
    static budget = azConsumptionBudget;
    static marketplace = azConsumptionMarketplace;
    static pricesheet = azConsumptionPricesheet;
    static reservation = azConsumptionReservation;
    static usage = azConsumptionUsage;
}

class azContainer {
}

class azCosmosdb extends az_cosmosdb {
    static collection = az_cosmosdb_collection;
    static database = az_cosmosdb_database;
    static keys = az_cosmosdb_keys;
    static cassandra = azCosmosdbCassandra;
    static collection = azCosmosdbCollection;
    static database = azCosmosdbDatabase;
    static gremlin = azCosmosdbGremlin;
    static keys = azCosmosdbKeys;
    static mongodb = azCosmosdbMongodb;
    static network = azCosmosdbNetwork;
    static private = azCosmosdbPrivate;
    static sql = azCosmosdbSql;
    static table = azCosmosdbTable;
}

class azDeployment extends az_deployment {
    static group = az_deployment_group;
    static mg = az_deployment_mg;
    static scripts = az_deployment_scripts;
    static sub = az_deployment_sub;
    static tenant = az_deployment_tenant;
    static group = azDeploymentGroup;
    static mg = azDeploymentMg;
    static operation = azDeploymentOperation;
    static scripts = azDeploymentScripts;
    static sub = azDeploymentSub;
    static tenant = azDeploymentTenant;
}

class azDeploymentmanager extends az_deploymentmanager {
    static rollout = az_deploymentmanager_rollout;
    static step = az_deploymentmanager_step;
    static artifact = azDeploymentmanagerArtifact;
    static rollout = azDeploymentmanagerRollout;
    static service = azDeploymentmanagerService;
    static step = azDeploymentmanagerStep;
}

class azDevops extends az_devops {
    static extension = az_devops_extension;
    static project = az_devops_project;
    static team = az_devops_team;
    static user = az_devops_user;
    static admin = azDevopsAdmin;
    static extension = azDevopsExtension;
    static project = azDevopsProject;
    static security = azDevopsSecurity;
    static service = azDevopsService;
    static team = azDevopsTeam;
    static user = azDevopsUser;
    static wiki = azDevopsWiki;
}

class azDisk extends az_disk {
    static access = az_disk_access;
    static access = azDiskAccess;
    static encryption = azDiskEncryption;
}

class azDla extends az_dla {
    static account = azDlaAccount;
    static catalog = azDlaCatalog;
    static job = azDlaJob;
}

class azDls extends az_dls {
    static account = azDlsAccount;
    static fs = azDlsFs;
}

class azDms extends az_dms {
    static project = azDmsProject;
}

class azEventgrid extends az_eventgrid {
    static domain = azEventgridDomain;
    static event = azEventgridEvent;
    static extension = azEventgridExtension;
    static partner = azEventgridPartner;
    static system = azEventgridSystem;
    static topic = azEventgridTopic;
}

class azEventhubs extends az_eventhubs {
    static cluster = azEventhubsCluster;
    static eventhub = azEventhubsEventhub;
    static georecovery = azEventhubsGeorecovery;
    static namespace = azEventhubsNamespace;
}

class azExtension {
}

class azFeature {
}

class azFunctionapp extends az_functionapp {
    static cors = az_functionapp_cors;
    static identity = az_functionapp_identity;
    static keys = az_functionapp_keys;
    static plan = az_functionapp_plan;
    static config = azFunctionappConfig;
    static cors = azFunctionappCors;
    static deployment = azFunctionappDeployment;
    static devops = azFunctionappDevops;
    static function = azFunctionappFunction;
    static hybrid = azFunctionappHybrid;
    static identity = azFunctionappIdentity;
    static keys = azFunctionappKeys;
    static log = azFunctionappLog;
    static plan = azFunctionappPlan;
    static vnet = azFunctionappVnet;
}

class azGroup extends az_group {
    static lock = az_group_lock;
    static deployment = azGroupDeployment;
    static lock = azGroupLock;
}

class azHdinsight extends az_hdinsight {
    static application = az_hdinsight_application;
    static host = az_hdinsight_host;
    static monitor = az_hdinsight_monitor;
    static application = azHdinsightApplication;
    static autoscale = azHdinsightAutoscale;
    static host = azHdinsightHost;
    static monitor = azHdinsightMonitor;
    static script = azHdinsightScript;
}

class azIdentity {
}

class azImage extends az_image {
    static builder = azImageBuilder;
}

class azIot extends az_iot {
    static central = azIotCentral;
    static dps = azIotDps;
    static hub = azIotHub;
}

class azIotcentral {
    static app = az_iotcentral_app;
}

class azKeyvault extends az_keyvault {
    static backup = az_keyvault_backup;
    static key = az_keyvault_key;
    static restore = az_keyvault_restore;
    static secret = az_keyvault_secret;
    static backup = azKeyvaultBackup;
    static certificate = azKeyvaultCertificate;
    static key = azKeyvaultKey;
    static network = azKeyvaultNetwork;
    static private = azKeyvaultPrivate;
    static restore = azKeyvaultRestore;
    static role = azKeyvaultRole;
    static secret = azKeyvaultSecret;
    static security = azKeyvaultSecurity;
    static storage = azKeyvaultStorage;
}

class azKusto {
    static cluster = az_kusto_cluster;
    static database = az_kusto_database;
}

class azLab extends az_lab {
    static environment = az_lab_environment;
    static formula = az_lab_formula;
    static secret = az_lab_secret;
    static vm = az_lab_vm;
    static vnet = az_lab_vnet;
    static arm = azLabArm;
    static artifact = azLabArtifact;
    static custom = azLabCustom;
    static environment = azLabEnvironment;
    static formula = azLabFormula;
    static gallery = azLabGallery;
    static secret = azLabSecret;
    static vm = azLabVm;
    static vnet = azLabVnet;
}

class azLocal {
    static context = az_local_context;
}

class azLock {
}

class azManagedapp {
    static definition = az_managedapp_definition;
}

class azManagedservices {
    static assignment = az_managedservices_assignment;
    static definition = az_managedservices_definition;
}

class azMaps extends az_maps {
    static account = azMapsAccount;
}

class azMariadb extends az_mariadb {
    static db = az_mariadb_db;
    static db = azMariadbDb;
    static server = azMariadbServer;
}

class azMonitor extends az_monitor {
    static alert = az_monitor_alert;
    static action = azMonitorAction;
    static activity = azMonitorActivity;
    static alert = azMonitorAlert;
    static autoscale = azMonitorAutoscale;
    static diagnostic = azMonitorDiagnostic;
    static log = azMonitorLog;
    static metrics = azMonitorMetrics;
    static private = azMonitorPrivate;
}

class azMysql extends az_mysql {
    static db = az_mysql_db;
    static db = azMysqlDb;
    static flexible = azMysqlFlexible;
    static server = azMysqlServer;
}

class azNetappfiles extends az_netappfiles {
    static pool = az_netappfiles_pool;
    static snapshot = az_netappfiles_snapshot;
    static account = azNetappfilesAccount;
    static pool = azNetappfilesPool;
    static snapshot = azNetappfilesSnapshot;
    static volume = azNetappfilesVolume;
}

class azNetwork extends az_network {
    static asg = az_network_asg;
    static bastion = az_network_bastion;
    static profile = az_network_profile;
    static application = azNetworkApplication;
    static asg = azNetworkAsg;
    static bastion = azNetworkBastion;
    static ddos = azNetworkDdos;
    static dns = azNetworkDns;
    static express = azNetworkExpress;
    static lb = azNetworkLb;
    static local = azNetworkLocal;
    static nat = azNetworkNat;
    static nic = azNetworkNic;
    static nsg = azNetworkNsg;
    static private = azNetworkPrivate;
    static profile = azNetworkProfile;
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

class azPipelines extends az_pipelines {
    static agent = az_pipelines_agent;
    static folder = az_pipelines_folder;
    static pool = az_pipelines_pool;
    static queue = az_pipelines_queue;
    static agent = azPipelinesAgent;
    static build = azPipelinesBuild;
    static folder = azPipelinesFolder;
    static pool = azPipelinesPool;
    static queue = azPipelinesQueue;
    static release = azPipelinesRelease;
    static runs = azPipelinesRuns;
    static variable = azPipelinesVariable;
}

class azPolicy extends az_policy {
    static definition = az_policy_definition;
    static event = az_policy_event;
    static metadata = az_policy_metadata;
    static state = az_policy_state;
    static assignment = azPolicyAssignment;
    static definition = azPolicyDefinition;
    static event = azPolicyEvent;
    static metadata = azPolicyMetadata;
    static remediation = azPolicyRemediation;
    static set = azPolicySet;
    static state = azPolicyState;
}

class azPostgres extends az_postgres {
    static db = az_postgres_db;
    static db = azPostgresDb;
    static flexible = azPostgresFlexible;
    static server = azPostgresServer;
}

class azPpg {
}

class azProvider {
    static operation = az_provider_operation;
}

class azRedis extends az_redis {
    static firewall = azRedisFirewall;
    static patch = azRedisPatch;
    static server = azRedisServer;
}

class azRelay extends az_relay {
    static hyco = azRelayHyco;
    static namespace = azRelayNamespace;
    static wcfrelay = azRelayWcfrelay;
}

class azRepos extends az_repos {
    static import = az_repos_import;
    static ref = az_repos_ref;
    static import = azReposImport;
    static policy = azReposPolicy;
    static pr = azReposPr;
    static ref = azReposRef;
}

class azReservations extends az_reservations {
    static catalog = az_reservations_catalog;
    static catalog = azReservationsCatalog;
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

class azSearch extends az_search {
    static service = az_search_service;
    static admin = azSearchAdmin;
    static query = azSearchQuery;
    static service = azSearchService;
}

class azSecurity extends az_security {
    static alert = az_security_alert;
    static contact = az_security_contact;
    static location = az_security_location;
    static pricing = az_security_pricing;
    static setting = az_security_setting;
    static task = az_security_task;
    static topology = az_security_topology;
    static adaptive = azSecurityAdaptive;
    static alert = azSecurityAlert;
    static allowed = azSecurityAllowed;
    static assessment = azSecurityAssessment;
    static atp = azSecurityAtp;
    static auto = azSecurityAuto;
    static contact = azSecurityContact;
    static discovered = azSecurityDiscovered;
    static external = azSecurityExternal;
    static iot = azSecurityIot;
    static jit = azSecurityJit;
    static location = azSecurityLocation;
    static pricing = azSecurityPricing;
    static regulatory = azSecurityRegulatory;
    static setting = azSecuritySetting;
    static sub = azSecuritySub;
    static task = azSecurityTask;
    static topology = azSecurityTopology;
    static workspace = azSecurityWorkspace;
}

class azServicebus extends az_servicebus {
    static migration = az_servicebus_migration;
    static georecovery = azServicebusGeorecovery;
    static migration = azServicebusMigration;
    static namespace = azServicebusNamespace;
    static queue = azServicebusQueue;
    static topic = azServicebusTopic;
}

class azSf extends az_sf {
    static service = az_sf_service;
    static application = azSfApplication;
    static cluster = azSfCluster;
    static managed = azSfManaged;
    static service = azSfService;
}

class azSig extends az_sig {
    static image = azSigImage;
}

class azSignalr extends az_signalr {
    static cors = az_signalr_cors;
    static key = az_signalr_key;
    static upstream = az_signalr_upstream;
    static cors = azSignalrCors;
    static key = azSignalrKey;
    static network = azSignalrNetwork;
    static upstream = azSignalrUpstream;
}

class azSnapshot {
}

class azSql extends az_sql {
    static dw = az_sql_dw;
    static db = azSqlDb;
    static dw = azSqlDw;
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

class azStorage extends az_storage {
    static cors = az_storage_cors;
    static entity = az_storage_entity;
    static logging = az_storage_logging;
    static message = az_storage_message;
    static metrics = az_storage_metrics;
    static account = azStorageAccount;
    static blob = azStorageBlob;
    static container = azStorageContainer;
    static cors = azStorageCors;
    static directory = azStorageDirectory;
    static entity = azStorageEntity;
    static file = azStorageFile;
    static fs = azStorageFs;
    static logging = azStorageLogging;
    static message = azStorageMessage;
    static metrics = azStorageMetrics;
    static queue = azStorageQueue;
    static share = azStorageShare;
    static table = azStorageTable;
}

class azSynapse extends az_synapse {
    static role = azSynapseRole;
    static spark = azSynapseSpark;
    static sql = azSynapseSql;
    static workspace = azSynapseWorkspace;
}

class azTag {
}

class azVm extends az_vm {
    static diagnostics = az_vm_diagnostics;
    static disk = az_vm_disk;
    static encryption = az_vm_encryption;
    static identity = az_vm_identity;
    static nic = az_vm_nic;
    static secret = az_vm_secret;
    static user = az_vm_user;
    static availability = azVmAvailability;
    static boot = azVmBoot;
    static diagnostics = azVmDiagnostics;
    static disk = azVmDisk;
    static encryption = azVmEncryption;
    static extension = azVmExtension;
    static host = azVmHost;
    static identity = azVmIdentity;
    static image = azVmImage;
    static monitor = azVmMonitor;
    static nic = azVmNic;
    static run = azVmRun;
    static secret = azVmSecret;
    static unmanaged = azVmUnmanaged;
    static user = azVmUser;
}

class azVmss extends az_vmss {
    static diagnostics = az_vmss_diagnostics;
    static disk = az_vmss_disk;
    static encryption = az_vmss_encryption;
    static identity = az_vmss_identity;
    static nic = az_vmss_nic;
    static diagnostics = azVmssDiagnostics;
    static disk = azVmssDisk;
    static encryption = azVmssEncryption;
    static extension = azVmssExtension;
    static identity = azVmssIdentity;
    static nic = azVmssNic;
    static rolling = azVmssRolling;
    static run = azVmssRun;
}

class azWebapp extends az_webapp {
    static auth = az_webapp_auth;
    static cors = az_webapp_cors;
    static deleted = az_webapp_deleted;
    static identity = az_webapp_identity;
    static auth = azWebappAuth;
    static config = azWebappConfig;
    static cors = azWebappCors;
    static deleted = azWebappDeleted;
    static deployment = azWebappDeployment;
    static hybrid = azWebappHybrid;
    static identity = azWebappIdentity;
    static log = azWebappLog;
    static traffic = azWebappTraffic;
    static vnet = azWebappVnet;
    static webjob = azWebappWebjob;
}

class extAccountAzAccount {
    static alias = ext_account_az_account_alias;
    static subscription = ext_account_az_account_subscription;
    static tenant = ext_account_az_account_tenant;
}

class extAccountAz extends ext_account_az {
    static account = extAccountAzAccount;
}

class extAemAzVm {
    static aem = ext_aem_az_vm_aem;
}

class extAemAz extends ext_aem_az {
    static vm = extAemAzVm;
}

class extAiExamplesAzAi {
    static examples = ext_ai-examples_az_ai_examples;
}

class extAiExamplesAz extends ext_ai-examples_az {
    static ai = extAiExamplesAzAi;
}

class extAksPreviewAzAks {
    static nodepool = ext_aks-preview_az_aks_nodepool;
}

class extAksPreviewAz extends ext_aks-preview_az {
    static aks = extAksPreviewAzAks;
}

class extAlertsmanagementAzMonitorAction {
    static rule = ext_alertsmanagement_az_monitor_action_rule;
}

class extAlertsmanagementAzMonitor extends ext_alertsmanagement_az_monitor {
    static action = extAlertsmanagementAzMonitorAction;
}

class extAlertsmanagementAz extends ext_alertsmanagement_az {
    static monitor = extAlertsmanagementAzMonitor;
}

class extAliasAz {
    static alias = ext_alias_az_alias;
}

class extApplicationInsightsAzMonitorAppInsightsComponentBilling {
}

class extApplicationInsightsAzMonitorAppInsightsComponentLinked {
    static storage = ext_application-insights_az_monitor_app_insights_component_linked_storage;
}

class extApplicationInsightsAzMonitorAppInsightsApi {
    static key = ext_application-insights_az_monitor_app_insights_api_key;
}

class extApplicationInsightsAzMonitorAppInsightsComponent extends ext_application-insights_az_monitor_app_insights_component {
    static billing = ext_application-insights_az_monitor_app_insights_component_billing;
    static billing = extApplicationInsightsAzMonitorAppInsightsComponentBilling;
    static linked = extApplicationInsightsAzMonitorAppInsightsComponentLinked;
}

class extApplicationInsightsAzMonitorAppInsightsEvents {
}

class extApplicationInsightsAzMonitorAppInsightsMetrics {
}

class extApplicationInsightsAzMonitorAppInsights extends ext_application-insights_az_monitor_app_insights {
    static events = ext_application-insights_az_monitor_app_insights_events;
    static metrics = ext_application-insights_az_monitor_app_insights_metrics;
    static api = extApplicationInsightsAzMonitorAppInsightsApi;
    static component = extApplicationInsightsAzMonitorAppInsightsComponent;
    static events = extApplicationInsightsAzMonitorAppInsightsEvents;
    static metrics = extApplicationInsightsAzMonitorAppInsightsMetrics;
}

class extApplicationInsightsAzMonitorApp {
    static insights = extApplicationInsightsAzMonitorAppInsights;
}

class extApplicationInsightsAzMonitor extends ext_application-insights_az_monitor {
    static app = extApplicationInsightsAzMonitorApp;
}

class extApplicationInsightsAz extends ext_application-insights_az {
    static monitor = extApplicationInsightsAzMonitor;
}

class extAttestationAzAttestation {
    static policy = ext_attestation_az_attestation_policy;
    static signer = ext_attestation_az_attestation_signer;
}

class extAttestationAz extends ext_attestation_az {
    static attestation = extAttestationAzAttestation;
}

class extAzureBatchCliExtensionsAzBatch {
    static file = ext_azure-batch-cli-extensions_az_batch_file;
    static job = ext_azure-batch-cli-extensions_az_batch_job;
    static pool = ext_azure-batch-cli-extensions_az_batch_pool;
}

class extAzureBatchCliExtensionsAz extends ext_azure-batch-cli-extensions_az {
    static batch = extAzureBatchCliExtensionsAzBatch;
}

class extAzureCliIotExtAzIotCentralApp {
}

class extAzureCliIotExtAzIotCentralDevice {
    static twin = ext_azure-cli-iot-ext_az_iot_central_device_twin;
}

class extAzureCliIotExtAzIotDeviceC2D {
    static message = ext_azure-cli-iot-ext_az_iot_device_c2d_message;
}

class extAzureCliIotExtAzIotDpsEnrollment {
    static group = ext_azure-cli-iot-ext_az_iot_dps_enrollment_group;
}

class extAzureCliIotExtAzIotDpsRegistration {
}

class extAzureCliIotExtAzIotHubConfiguration {
}

class extAzureCliIotExtAzIotHubDevice {
    static identity = ext_azure-cli-iot-ext_az_iot_hub_device_identity;
    static twin = ext_azure-cli-iot-ext_az_iot_hub_device_twin;
}

class extAzureCliIotExtAzIotHubDistributed {
    static tracing = ext_azure-cli-iot-ext_az_iot_hub_distributed_tracing;
}

class extAzureCliIotExtAzIotHubJob {
}

class extAzureCliIotExtAzIotHubModule {
    static identity = ext_azure-cli-iot-ext_az_iot_hub_module_identity;
    static twin = ext_azure-cli-iot-ext_az_iot_hub_module_twin;
}

class extAzureCliIotExtAzIotPnpCapability {
    static model = ext_azure-cli-iot-ext_az_iot_pnp_capability_model;
}

class extAzureCliIotExtAzIotPnpInterface {
}

class extAzureCliIotExtAzIotCentral extends ext_azure-cli-iot-ext_az_iot_central {
    static app = ext_azure-cli-iot-ext_az_iot_central_app;
    static app = extAzureCliIotExtAzIotCentralApp;
    static device = extAzureCliIotExtAzIotCentralDevice;
}

class extAzureCliIotExtAzIotDevice extends ext_azure-cli-iot-ext_az_iot_device {
    static c2D = extAzureCliIotExtAzIotDeviceC2D;
}

class extAzureCliIotExtAzIotDps extends ext_azure-cli-iot-ext_az_iot_dps {
    static registration = ext_azure-cli-iot-ext_az_iot_dps_registration;
    static enrollment = extAzureCliIotExtAzIotDpsEnrollment;
    static registration = extAzureCliIotExtAzIotDpsRegistration;
}

class extAzureCliIotExtAzIotDt {
}

class extAzureCliIotExtAzIotEdge {
    static deployment = ext_azure-cli-iot-ext_az_iot_edge_deployment;
}

class extAzureCliIotExtAzIotHub extends ext_azure-cli-iot-ext_az_iot_hub {
    static configuration = ext_azure-cli-iot-ext_az_iot_hub_configuration;
    static job = ext_azure-cli-iot-ext_az_iot_hub_job;
    static configuration = extAzureCliIotExtAzIotHubConfiguration;
    static device = extAzureCliIotExtAzIotHubDevice;
    static distributed = extAzureCliIotExtAzIotHubDistributed;
    static job = extAzureCliIotExtAzIotHubJob;
    static module = extAzureCliIotExtAzIotHubModule;
}

class extAzureCliIotExtAzIotPnp extends ext_azure-cli-iot-ext_az_iot_pnp {
    static interface = ext_azure-cli-iot-ext_az_iot_pnp_interface;
    static capability = extAzureCliIotExtAzIotPnpCapability;
    static interface = extAzureCliIotExtAzIotPnpInterface;
}

class extAzureCliIotExtAzIotcentralApp {
}

class extAzureCliIotExtAzIotcentralDevice {
    static twin = ext_azure-cli-iot-ext_az_iotcentral_device_twin;
}

class extAzureCliIotExtAzIot extends ext_azure-cli-iot-ext_az_iot {
    static dt = ext_azure-cli-iot-ext_az_iot_dt;
    static central = extAzureCliIotExtAzIotCentral;
    static device = extAzureCliIotExtAzIotDevice;
    static dps = extAzureCliIotExtAzIotDps;
    static dt = extAzureCliIotExtAzIotDt;
    static edge = extAzureCliIotExtAzIotEdge;
    static hub = extAzureCliIotExtAzIotHub;
    static pnp = extAzureCliIotExtAzIotPnp;
}

class extAzureCliIotExtAzIotcentral extends ext_azure-cli-iot-ext_az_iotcentral {
    static app = ext_azure-cli-iot-ext_az_iotcentral_app;
    static app = extAzureCliIotExtAzIotcentralApp;
    static device = extAzureCliIotExtAzIotcentralDevice;
}

class extAzureCliIotExtAz extends ext_azure-cli-iot-ext_az {
    static iot = extAzureCliIotExtAzIot;
    static iotcentral = extAzureCliIotExtAzIotcentral;
}

class extAzureCliMlAzMlComputetargetAmlcompute {
    static identity = ext_azure-cli-ml_az_ml_computetarget_amlcompute_identity;
}

class extAzureCliMlAzMlComputetargetAttach {
}

class extAzureCliMlAzMlComputetargetComputeinstance {
}

class extAzureCliMlAzMlComputetargetCreate {
}

class extAzureCliMlAzMlComputetargetUpdate {
}

class extAzureCliMlAzMlWorkspacePrivate {
    static endpoint = ext_azure-cli-ml_az_ml_workspace_private_endpoint;
}

class extAzureCliMlAzMlComputetarget extends ext_azure-cli-ml_az_ml_computetarget {
    static attach = ext_azure-cli-ml_az_ml_computetarget_attach;
    static computeinstance = ext_azure-cli-ml_az_ml_computetarget_computeinstance;
    static create = ext_azure-cli-ml_az_ml_computetarget_create;
    static update = ext_azure-cli-ml_az_ml_computetarget_update;
    static amlcompute = extAzureCliMlAzMlComputetargetAmlcompute;
    static attach = extAzureCliMlAzMlComputetargetAttach;
    static computeinstance = extAzureCliMlAzMlComputetargetComputeinstance;
    static create = extAzureCliMlAzMlComputetargetCreate;
    static update = extAzureCliMlAzMlComputetargetUpdate;
}

class extAzureCliMlAzMlDataset {
}

class extAzureCliMlAzMlDatastore {
}

class extAzureCliMlAzMlEndpoint {
    static realtime = ext_azure-cli-ml_az_ml_endpoint_realtime;
}

class extAzureCliMlAzMlEnvironment {
}

class extAzureCliMlAzMlExperiment {
}

class extAzureCliMlAzMlFolder {
}

class extAzureCliMlAzMlModel {
}

class extAzureCliMlAzMlPipeline {
}

class extAzureCliMlAzMlRun {
}

class extAzureCliMlAzMlService {
}

class extAzureCliMlAzMlWorkspace extends ext_azure-cli-ml_az_ml_workspace {
    static private = extAzureCliMlAzMlWorkspacePrivate;
}

class extAzureCliMlAzMl extends ext_azure-cli-ml_az_ml {
    static dataset = ext_azure-cli-ml_az_ml_dataset;
    static datastore = ext_azure-cli-ml_az_ml_datastore;
    static environment = ext_azure-cli-ml_az_ml_environment;
    static experiment = ext_azure-cli-ml_az_ml_experiment;
    static folder = ext_azure-cli-ml_az_ml_folder;
    static model = ext_azure-cli-ml_az_ml_model;
    static pipeline = ext_azure-cli-ml_az_ml_pipeline;
    static run = ext_azure-cli-ml_az_ml_run;
    static service = ext_azure-cli-ml_az_ml_service;
    static computetarget = extAzureCliMlAzMlComputetarget;
    static dataset = extAzureCliMlAzMlDataset;
    static datastore = extAzureCliMlAzMlDatastore;
    static endpoint = extAzureCliMlAzMlEndpoint;
    static environment = extAzureCliMlAzMlEnvironment;
    static experiment = extAzureCliMlAzMlExperiment;
    static folder = extAzureCliMlAzMlFolder;
    static model = extAzureCliMlAzMlModel;
    static pipeline = extAzureCliMlAzMlPipeline;
    static run = extAzureCliMlAzMlRun;
    static service = extAzureCliMlAzMlService;
    static workspace = extAzureCliMlAzMlWorkspace;
}

class extAzureCliMlAz extends ext_azure-cli-ml_az {
    static ml = extAzureCliMlAzMl;
}

class extAzureDevopsAzBoardsWorkItem {
    static relation = ext_azure-devops_az_boards_work_item_relation;
}

class extAzureDevopsAzBoardsArea {
    static project = ext_azure-devops_az_boards_area_project;
    static team = ext_azure-devops_az_boards_area_team;
}

class extAzureDevopsAzBoardsIteration {
    static project = ext_azure-devops_az_boards_iteration_project;
    static team = ext_azure-devops_az_boards_iteration_team;
}

class extAzureDevopsAzBoardsWork {
    static item = extAzureDevopsAzBoardsWorkItem;
}

class extAzureDevopsAzDevopsSecurityGroup {
    static membership = ext_azure-devops_az_devops_security_group_membership;
}

class extAzureDevopsAzDevopsSecurityPermission {
    static namespace = ext_azure-devops_az_devops_security_permission_namespace;
}

class extAzureDevopsAzDevopsServiceEndpoint {
    static azurerm = ext_azure-devops_az_devops_service_endpoint_azurerm;
    static github = ext_azure-devops_az_devops_service_endpoint_github;
}

class extAzureDevopsAzDevopsAdmin {
    static banner = ext_azure-devops_az_devops_admin_banner;
}

class extAzureDevopsAzDevopsExtension {
}

class extAzureDevopsAzDevopsProject {
}

class extAzureDevopsAzDevopsSecurity extends ext_azure-devops_az_devops_security {
    static group = extAzureDevopsAzDevopsSecurityGroup;
    static permission = extAzureDevopsAzDevopsSecurityPermission;
}

class extAzureDevopsAzDevopsService {
    static endpoint = extAzureDevopsAzDevopsServiceEndpoint;
}

class extAzureDevopsAzDevopsTeam {
}

class extAzureDevopsAzDevopsUser {
}

class extAzureDevopsAzDevopsWiki {
    static page = ext_azure-devops_az_devops_wiki_page;
}

class extAzureDevopsAzPipelinesVariableGroup {
    static variable = ext_azure-devops_az_pipelines_variable_group_variable;
}

class extAzureDevopsAzPipelinesAgent {
}

class extAzureDevopsAzPipelinesBuild {
    static definition = ext_azure-devops_az_pipelines_build_definition;
    static tag = ext_azure-devops_az_pipelines_build_tag;
}

class extAzureDevopsAzPipelinesFolder {
}

class extAzureDevopsAzPipelinesPool {
}

class extAzureDevopsAzPipelinesQueue {
}

class extAzureDevopsAzPipelinesRelease {
    static definition = ext_azure-devops_az_pipelines_release_definition;
}

class extAzureDevopsAzPipelinesRuns {
    static artifact = ext_azure-devops_az_pipelines_runs_artifact;
    static tag = ext_azure-devops_az_pipelines_runs_tag;
}

class extAzureDevopsAzPipelinesVariable extends ext_azure-devops_az_pipelines_variable {
    static group = extAzureDevopsAzPipelinesVariableGroup;
}

class extAzureDevopsAzReposPolicyWorkItem {
    static linking = ext_azure-devops_az_repos_policy_work_item_linking;
}

class extAzureDevopsAzReposPolicyApprover {
    static count = ext_azure-devops_az_repos_policy_approver_count;
}

class extAzureDevopsAzReposPolicyBuild {
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

class extAzureDevopsAzReposPolicyWork {
    static item = extAzureDevopsAzReposPolicyWorkItem;
}

class extAzureDevopsAzReposPrPolicy {
}

class extAzureDevopsAzReposPrReviewer {
}

class extAzureDevopsAzReposPrWork {
    static item = ext_azure-devops_az_repos_pr_work_item;
}

class extAzureDevopsAzReposImport {
}

class extAzureDevopsAzReposPolicy extends ext_azure-devops_az_repos_policy {
    static build = ext_azure-devops_az_repos_policy_build;
    static approver = extAzureDevopsAzReposPolicyApprover;
    static build = extAzureDevopsAzReposPolicyBuild;
    static case = extAzureDevopsAzReposPolicyCase;
    static comment = extAzureDevopsAzReposPolicyComment;
    static file = extAzureDevopsAzReposPolicyFile;
    static merge = extAzureDevopsAzReposPolicyMerge;
    static required = extAzureDevopsAzReposPolicyRequired;
    static work = extAzureDevopsAzReposPolicyWork;
}

class extAzureDevopsAzReposPr extends ext_azure-devops_az_repos_pr {
    static policy = ext_azure-devops_az_repos_pr_policy;
    static reviewer = ext_azure-devops_az_repos_pr_reviewer;
    static policy = extAzureDevopsAzReposPrPolicy;
    static reviewer = extAzureDevopsAzReposPrReviewer;
    static work = extAzureDevopsAzReposPrWork;
}

class extAzureDevopsAzReposRef {
}

class extAzureDevopsAzArtifacts {
    static universal = ext_azure-devops_az_artifacts_universal;
}

class extAzureDevopsAzBoards extends ext_azure-devops_az_boards {
    static area = extAzureDevopsAzBoardsArea;
    static iteration = extAzureDevopsAzBoardsIteration;
    static work = extAzureDevopsAzBoardsWork;
}

class extAzureDevopsAzDevops extends ext_azure-devops_az_devops {
    static extension = ext_azure-devops_az_devops_extension;
    static project = ext_azure-devops_az_devops_project;
    static team = ext_azure-devops_az_devops_team;
    static user = ext_azure-devops_az_devops_user;
    static admin = extAzureDevopsAzDevopsAdmin;
    static extension = extAzureDevopsAzDevopsExtension;
    static project = extAzureDevopsAzDevopsProject;
    static security = extAzureDevopsAzDevopsSecurity;
    static service = extAzureDevopsAzDevopsService;
    static team = extAzureDevopsAzDevopsTeam;
    static user = extAzureDevopsAzDevopsUser;
    static wiki = extAzureDevopsAzDevopsWiki;
}

class extAzureDevopsAzPipelines extends ext_azure-devops_az_pipelines {
    static agent = ext_azure-devops_az_pipelines_agent;
    static folder = ext_azure-devops_az_pipelines_folder;
    static pool = ext_azure-devops_az_pipelines_pool;
    static queue = ext_azure-devops_az_pipelines_queue;
    static agent = extAzureDevopsAzPipelinesAgent;
    static build = extAzureDevopsAzPipelinesBuild;
    static folder = extAzureDevopsAzPipelinesFolder;
    static pool = extAzureDevopsAzPipelinesPool;
    static queue = extAzureDevopsAzPipelinesQueue;
    static release = extAzureDevopsAzPipelinesRelease;
    static runs = extAzureDevopsAzPipelinesRuns;
    static variable = extAzureDevopsAzPipelinesVariable;
}

class extAzureDevopsAzRepos extends ext_azure-devops_az_repos {
    static import = ext_azure-devops_az_repos_import;
    static ref = ext_azure-devops_az_repos_ref;
    static import = extAzureDevopsAzReposImport;
    static policy = extAzureDevopsAzReposPolicy;
    static pr = extAzureDevopsAzReposPr;
    static ref = extAzureDevopsAzReposRef;
}

class extAzureDevopsAz extends ext_azure-devops_az {
    static artifacts = extAzureDevopsAzArtifacts;
    static boards = extAzureDevopsAzBoards;
    static devops = extAzureDevopsAzDevops;
    static pipelines = extAzureDevopsAzPipelines;
    static repos = extAzureDevopsAzRepos;
}

class extAzureFirewallAzNetworkFirewallApplicationRule {
    static collection = ext_azure-firewall_az_network_firewall_application_rule_collection;
}

class extAzureFirewallAzNetworkFirewallManagementIp {
    static config = ext_azure-firewall_az_network_firewall_management_ip_config;
}

class extAzureFirewallAzNetworkFirewallNatRule {
    static collection = ext_azure-firewall_az_network_firewall_nat_rule_collection;
}

class extAzureFirewallAzNetworkFirewallNetworkRule {
    static collection = ext_azure-firewall_az_network_firewall_network_rule_collection;
}

class extAzureFirewallAzNetworkFirewallPolicyRuleCollectionGroupCollection {
    static rule = ext_azure-firewall_az_network_firewall_policy_rule_collection_group_collection_rule;
}

class extAzureFirewallAzNetworkFirewallPolicyRuleCollectionGroup extends ext_azure-firewall_az_network_firewall_policy_rule_collection_group {
    static collection = extAzureFirewallAzNetworkFirewallPolicyRuleCollectionGroupCollection;
}

class extAzureFirewallAzNetworkFirewallPolicyRuleCollection {
    static group = extAzureFirewallAzNetworkFirewallPolicyRuleCollectionGroup;
}

class extAzureFirewallAzNetworkFirewallPolicyRule {
    static collection = extAzureFirewallAzNetworkFirewallPolicyRuleCollection;
}

class extAzureFirewallAzNetworkFirewallThreatIntel {
    static allowlist = ext_azure-firewall_az_network_firewall_threat_intel_allowlist;
}

class extAzureFirewallAzNetworkFirewallApplication {
    static rule = extAzureFirewallAzNetworkFirewallApplicationRule;
}

class extAzureFirewallAzNetworkFirewallIp {
    static config = ext_azure-firewall_az_network_firewall_ip_config;
}

class extAzureFirewallAzNetworkFirewallManagement {
    static ip = extAzureFirewallAzNetworkFirewallManagementIp;
}

class extAzureFirewallAzNetworkFirewallNat {
    static rule = extAzureFirewallAzNetworkFirewallNatRule;
}

class extAzureFirewallAzNetworkFirewallNetwork {
    static rule = extAzureFirewallAzNetworkFirewallNetworkRule;
}

class extAzureFirewallAzNetworkFirewallPolicy extends ext_azure-firewall_az_network_firewall_policy {
    static rule = extAzureFirewallAzNetworkFirewallPolicyRule;
}

class extAzureFirewallAzNetworkFirewallThreat {
    static intel = extAzureFirewallAzNetworkFirewallThreatIntel;
}

class extAzureFirewallAzNetworkFirewall extends ext_azure-firewall_az_network_firewall {
    static application = extAzureFirewallAzNetworkFirewallApplication;
    static ip = extAzureFirewallAzNetworkFirewallIp;
    static management = extAzureFirewallAzNetworkFirewallManagement;
    static nat = extAzureFirewallAzNetworkFirewallNat;
    static network = extAzureFirewallAzNetworkFirewallNetwork;
    static policy = extAzureFirewallAzNetworkFirewallPolicy;
    static threat = extAzureFirewallAzNetworkFirewallThreat;
}

class extAzureFirewallAzNetwork extends ext_azure-firewall_az_network {
    static firewall = extAzureFirewallAzNetworkFirewall;
}

class extAzureFirewallAz extends ext_azure-firewall_az {
    static network = extAzureFirewallAzNetwork;
}

class extAzureIotAzDtEndpoint {
    static create = ext_azure-iot_az_dt_endpoint_create;
}

class extAzureIotAzDtModel {
}

class extAzureIotAzDtRole {
    static assignment = ext_azure-iot_az_dt_role_assignment;
}

class extAzureIotAzDtRoute {
}

class extAzureIotAzDtTwin {
    static component = ext_azure-iot_az_dt_twin_component;
    static relationship = ext_azure-iot_az_dt_twin_relationship;
    static telemetry = ext_azure-iot_az_dt_twin_telemetry;
}

class extAzureIotAzIotCentralAppDevice {
    static twin = ext_azure-iot_az_iot_central_app_device_twin;
}

class extAzureIotAzIotCentralApi {
    static token = ext_azure-iot_az_iot_central_api_token;
}

class extAzureIotAzIotCentralApp extends ext_azure-iot_az_iot_central_app {
    static device = extAzureIotAzIotCentralAppDevice;
}

class extAzureIotAzIotCentralDevice {
    static command = ext_azure-iot_az_iot_central_device_command;
    static template = ext_azure-iot_az_iot_central_device_template;
    static twin = ext_azure-iot_az_iot_central_device_twin;
}

class extAzureIotAzIotCentralDiagnostics {
}

class extAzureIotAzIotCentralUser {
}

class extAzureIotAzIotDeviceC2D {
    static message = ext_azure-iot_az_iot_device_c2d_message;
}

class extAzureIotAzIotDpsEnrollment {
    static group = ext_azure-iot_az_iot_dps_enrollment_group;
}

class extAzureIotAzIotDpsRegistration {
}

class extAzureIotAzIotHubDeviceIdentityConnection {
    static string = ext_azure-iot_az_iot_hub_device_identity_connection_string;
}

class extAzureIotAzIotHubDeviceIdentity extends ext_azure-iot_az_iot_hub_device_identity {
    static connection = extAzureIotAzIotHubDeviceIdentityConnection;
}

class extAzureIotAzIotHubDeviceTwin {
}

class extAzureIotAzIotHubModuleIdentityConnection {
    static string = ext_azure-iot_az_iot_hub_module_identity_connection_string;
}

class extAzureIotAzIotHubModuleIdentity extends ext_azure-iot_az_iot_hub_module_identity {
    static connection = extAzureIotAzIotHubModuleIdentityConnection;
}

class extAzureIotAzIotHubModuleTwin {
}

class extAzureIotAzIotHubConfiguration {
}

class extAzureIotAzIotHubConnection {
    static string = ext_azure-iot_az_iot_hub_connection_string;
}

class extAzureIotAzIotHubDevice {
    static twin = ext_azure-iot_az_iot_hub_device_twin;
    static identity = extAzureIotAzIotHubDeviceIdentity;
    static twin = extAzureIotAzIotHubDeviceTwin;
}

class extAzureIotAzIotHubDistributed {
    static tracing = ext_azure-iot_az_iot_hub_distributed_tracing;
}

class extAzureIotAzIotHubJob {
}

class extAzureIotAzIotHubModule {
    static twin = ext_azure-iot_az_iot_hub_module_twin;
    static identity = extAzureIotAzIotHubModuleIdentity;
    static twin = extAzureIotAzIotHubModuleTwin;
}

class extAzureIotAzIotPnpModel {
}

class extAzureIotAzIotPnpRepo {
}

class extAzureIotAzIotPnpRole {
    static assignment = ext_azure-iot_az_iot_pnp_role_assignment;
}

class extAzureIotAzIotPnpTwin {
}

class extAzureIotAzIotProductRequirement {
}

class extAzureIotAzIotProductTest {
    static case = ext_azure-iot_az_iot_product_test_case;
    static run = ext_azure-iot_az_iot_product_test_run;
    static task = ext_azure-iot_az_iot_product_test_task;
}

class extAzureIotAzIotCentral extends ext_azure-iot_az_iot_central {
    static diagnostics = ext_azure-iot_az_iot_central_diagnostics;
    static user = ext_azure-iot_az_iot_central_user;
    static api = extAzureIotAzIotCentralApi;
    static app = extAzureIotAzIotCentralApp;
    static device = extAzureIotAzIotCentralDevice;
    static diagnostics = extAzureIotAzIotCentralDiagnostics;
    static user = extAzureIotAzIotCentralUser;
}

class extAzureIotAzIotDevice extends ext_azure-iot_az_iot_device {
    static c2D = extAzureIotAzIotDeviceC2D;
}

class extAzureIotAzIotDps extends ext_azure-iot_az_iot_dps {
    static registration = ext_azure-iot_az_iot_dps_registration;
    static enrollment = extAzureIotAzIotDpsEnrollment;
    static registration = extAzureIotAzIotDpsRegistration;
}

class extAzureIotAzIotEdge {
    static deployment = ext_azure-iot_az_iot_edge_deployment;
}

class extAzureIotAzIotHub extends ext_azure-iot_az_iot_hub {
    static configuration = ext_azure-iot_az_iot_hub_configuration;
    static job = ext_azure-iot_az_iot_hub_job;
    static configuration = extAzureIotAzIotHubConfiguration;
    static connection = extAzureIotAzIotHubConnection;
    static device = extAzureIotAzIotHubDevice;
    static distributed = extAzureIotAzIotHubDistributed;
    static job = extAzureIotAzIotHubJob;
    static module = extAzureIotAzIotHubModule;
}

class extAzureIotAzIotPnp extends ext_azure-iot_az_iot_pnp {
    static model = ext_azure-iot_az_iot_pnp_model;
    static repo = ext_azure-iot_az_iot_pnp_repo;
    static twin = ext_azure-iot_az_iot_pnp_twin;
    static model = extAzureIotAzIotPnpModel;
    static repo = extAzureIotAzIotPnpRepo;
    static role = extAzureIotAzIotPnpRole;
    static twin = extAzureIotAzIotPnpTwin;
}

class extAzureIotAzIotProduct extends ext_azure-iot_az_iot_product {
    static requirement = ext_azure-iot_az_iot_product_requirement;
    static requirement = extAzureIotAzIotProductRequirement;
    static test = extAzureIotAzIotProductTest;
}

class extAzureIotAzDt extends ext_azure-iot_az_dt {
    static model = ext_azure-iot_az_dt_model;
    static route = ext_azure-iot_az_dt_route;
    static endpoint = extAzureIotAzDtEndpoint;
    static model = extAzureIotAzDtModel;
    static role = extAzureIotAzDtRole;
    static route = extAzureIotAzDtRoute;
    static twin = extAzureIotAzDtTwin;
}

class extAzureIotAzIot extends ext_azure-iot_az_iot {
    static central = extAzureIotAzIotCentral;
    static device = extAzureIotAzIotDevice;
    static dps = extAzureIotAzIotDps;
    static edge = extAzureIotAzIotEdge;
    static hub = extAzureIotAzIotHub;
    static pnp = extAzureIotAzIotPnp;
    static product = extAzureIotAzIotProduct;
}

class extAzureIotAz extends ext_azure-iot_az {
    static dt = extAzureIotAzDt;
    static iot = extAzureIotAzIot;
}

class extBlockchainAzBlockchainConsortium {
}

class extBlockchainAzBlockchainMember {
}

class extBlockchainAzBlockchainTransaction {
    static node = ext_blockchain_az_blockchain_transaction_node;
}

class extBlockchainAzBlockchain extends ext_blockchain_az_blockchain {
    static consortium = ext_blockchain_az_blockchain_consortium;
    static member = ext_blockchain_az_blockchain_member;
    static consortium = extBlockchainAzBlockchainConsortium;
    static member = extBlockchainAzBlockchainMember;
    static transaction = extBlockchainAzBlockchainTransaction;
}

class extBlockchainAz extends ext_blockchain_az {
    static blockchain = extBlockchainAzBlockchain;
}

class extBlueprintAzBlueprintArtifact {
    static policy = ext_blueprint_az_blueprint_artifact_policy;
    static role = ext_blueprint_az_blueprint_artifact_role;
    static template = ext_blueprint_az_blueprint_artifact_template;
}

class extBlueprintAzBlueprintAssignment {
}

class extBlueprintAzBlueprintResource {
    static group = ext_blueprint_az_blueprint_resource_group;
}

class extBlueprintAzBlueprintVersion {
    static artifact = ext_blueprint_az_blueprint_version_artifact;
}

class extBlueprintAzBlueprint extends ext_blueprint_az_blueprint {
    static assignment = ext_blueprint_az_blueprint_assignment;
    static artifact = extBlueprintAzBlueprintArtifact;
    static assignment = extBlueprintAzBlueprintAssignment;
    static resource = extBlueprintAzBlueprintResource;
    static version = extBlueprintAzBlueprintVersion;
}

class extBlueprintAz extends ext_blueprint_az {
    static blueprint = extBlueprintAzBlueprint;
}

class extCodespacesAzCodespace {
    static location = ext_codespaces_az_codespace_location;
    static plan = ext_codespaces_az_codespace_plan;
    static secret = ext_codespaces_az_codespace_secret;
}

class extCodespacesAz extends ext_codespaces_az {
    static codespace = extCodespacesAzCodespace;
}

class extConnectedk8SAz {
    static connectedk8S = ext_connectedk8s_az_connectedk8s;
}

class extConnectedmachineAzConnectedmachineMachine {
    static extension = ext_connectedmachine_az_connectedmachine_machine_extension;
}

class extConnectedmachineAzConnectedmachine extends ext_connectedmachine_az_connectedmachine {
    static machine = extConnectedmachineAzConnectedmachineMachine;
}

class extConnectedmachineAz extends ext_connectedmachine_az {
    static connectedmachine = extConnectedmachineAzConnectedmachine;
}

class extCostmanagementAzCostmanagement {
    static export = ext_costmanagement_az_costmanagement_export;
}

class extCostmanagementAz extends ext_costmanagement_az {
    static costmanagement = extCostmanagementAzCostmanagement;
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

class extCsvmwareAzCsvmware extends ext_csvmware_az_csvmware {
    static private = extCsvmwareAzCsvmwarePrivate;
    static resource = extCsvmwareAzCsvmwareResource;
    static virtual = extCsvmwareAzCsvmwareVirtual;
    static vm = extCsvmwareAzCsvmwareVm;
}

class extCsvmwareAz extends ext_csvmware_az {
    static csvmware = extCsvmwareAzCsvmware;
}

class extCustomProvidersAzCustomProvidersResource {
    static provider = ext_custom-providers_az_custom_providers_resource_provider;
}

class extCustomProvidersAzCustomProviders extends ext_custom-providers_az_custom_providers {
    static resource = extCustomProvidersAzCustomProvidersResource;
}

class extCustomProvidersAzCustom {
    static providers = extCustomProvidersAzCustomProviders;
}

class extCustomProvidersAz extends ext_custom-providers_az {
    static custom = extCustomProvidersAzCustom;
}

class extDataboxAzDatabox {
    static job = ext_databox_az_databox_job;
}

class extDataboxAz extends ext_databox_az {
    static databox = extDataboxAzDatabox;
}

class extDatabricksAzDatabricksWorkspaceVnet {
    static peering = ext_databricks_az_databricks_workspace_vnet_peering;
}

class extDatabricksAzDatabricksWorkspace extends ext_databricks_az_databricks_workspace {
    static vnet = extDatabricksAzDatabricksWorkspaceVnet;
}

class extDatabricksAzDatabricks extends ext_databricks_az_databricks {
    static workspace = extDatabricksAzDatabricksWorkspace;
}

class extDatabricksAz extends ext_databricks_az {
    static databricks = extDatabricksAzDatabricks;
}

class extDatafactoryAzDatafactoryIntegrationRuntimeLinkedIntegration {
    static runtime = ext_datafactory_az_datafactory_integration_runtime_linked_integration_runtime;
}

class extDatafactoryAzDatafactoryIntegrationRuntimeLinked {
    static integration = extDatafactoryAzDatafactoryIntegrationRuntimeLinkedIntegration;
}

class extDatafactoryAzDatafactoryIntegrationRuntimeManaged {
}

class extDatafactoryAzDatafactoryIntegrationRuntimeNode {
}

class extDatafactoryAzDatafactoryIntegrationRuntimeSelf {
    static hosted = ext_datafactory_az_datafactory_integration_runtime_self_hosted;
}

class extDatafactoryAzDatafactoryIntegrationRuntime extends ext_datafactory_az_datafactory_integration_runtime {
    static managed = ext_datafactory_az_datafactory_integration_runtime_managed;
    static node = ext_datafactory_az_datafactory_integration_runtime_node;
    static linked = extDatafactoryAzDatafactoryIntegrationRuntimeLinked;
    static managed = extDatafactoryAzDatafactoryIntegrationRuntimeManaged;
    static node = extDatafactoryAzDatafactoryIntegrationRuntimeNode;
    static self = extDatafactoryAzDatafactoryIntegrationRuntimeSelf;
}

class extDatafactoryAzDatafactoryActivity {
    static run = ext_datafactory_az_datafactory_activity_run;
}

class extDatafactoryAzDatafactoryDataset {
}

class extDatafactoryAzDatafactoryFactory {
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

class extDatafactoryAzDatafactory extends ext_datafactory_az_datafactory {
    static dataset = ext_datafactory_az_datafactory_dataset;
    static factory = ext_datafactory_az_datafactory_factory;
    static activity = extDatafactoryAzDatafactoryActivity;
    static dataset = extDatafactoryAzDatafactoryDataset;
    static factory = extDatafactoryAzDatafactoryFactory;
    static integration = extDatafactoryAzDatafactoryIntegration;
    static linked = extDatafactoryAzDatafactoryLinked;
    static pipeline = extDatafactoryAzDatafactoryPipeline;
    static trigger = extDatafactoryAzDatafactoryTrigger;
}

class extDatafactoryAz extends ext_datafactory_az {
    static datafactory = extDatafactoryAzDatafactory;
}

class extDatashareAzDatashareConsumerShareSubscription {
    static synchronization = ext_datashare_az_datashare_consumer_share_subscription_synchronization;
}

class extDatashareAzDatashareConsumerDataset {
    static mapping = ext_datashare_az_datashare_consumer_dataset_mapping;
}

class extDatashareAzDatashareConsumerInvitation {
}

class extDatashareAzDatashareConsumerShare {
    static subscription = extDatashareAzDatashareConsumerShareSubscription;
}

class extDatashareAzDatashareConsumerTrigger {
}

class extDatashareAzDatashareProviderShare {
    static subscription = ext_datashare_az_datashare_provider_share_subscription;
}

class extDatashareAzDatashareAccount {
}

class extDatashareAzDatashareConsumer extends ext_datashare_az_datashare_consumer {
    static invitation = ext_datashare_az_datashare_consumer_invitation;
    static trigger = ext_datashare_az_datashare_consumer_trigger;
    static dataset = extDatashareAzDatashareConsumerDataset;
    static invitation = extDatashareAzDatashareConsumerInvitation;
    static share = extDatashareAzDatashareConsumerShare;
    static trigger = extDatashareAzDatashareConsumerTrigger;
}

class extDatashareAzDatashareDataset {
}

class extDatashareAzDatashareInvitation {
}

class extDatashareAzDatashareProvider {
    static share = extDatashareAzDatashareProviderShare;
}

class extDatashareAzDatashareSynchronization {
    static setting = ext_datashare_az_datashare_synchronization_setting;
}

class extDatashareAzDatashare extends ext_datashare_az_datashare {
    static account = ext_datashare_az_datashare_account;
    static dataset = ext_datashare_az_datashare_dataset;
    static invitation = ext_datashare_az_datashare_invitation;
    static account = extDatashareAzDatashareAccount;
    static consumer = extDatashareAzDatashareConsumer;
    static dataset = extDatashareAzDatashareDataset;
    static invitation = extDatashareAzDatashareInvitation;
    static provider = extDatashareAzDatashareProvider;
    static synchronization = extDatashareAzDatashareSynchronization;
}

class extDatashareAz extends ext_datashare_az {
    static datashare = extDatashareAzDatashare;
}

class extDbUpAz {
    static mysql = ext_db-up_az_mysql;
    static postgres = ext_db-up_az_postgres;
    static sql = ext_db-up_az_sql;
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

class extDeployToAzureAz extends ext_deploy-to-azure_az {
    static aks = extDeployToAzureAzAks;
    static container = extDeployToAzureAzContainer;
    static functionapp = extDeployToAzureAzFunctionapp;
}

class extDesktopvirtualizationAzDesktopvirtualization {
    static applicationgroup = ext_desktopvirtualization_az_desktopvirtualization_applicationgroup;
    static hostpool = ext_desktopvirtualization_az_desktopvirtualization_hostpool;
    static workspace = ext_desktopvirtualization_az_desktopvirtualization_workspace;
}

class extDesktopvirtualizationAz extends ext_desktopvirtualization_az {
    static desktopvirtualization = extDesktopvirtualizationAzDesktopvirtualization;
}

class extDevSpacesAz {
    static aks = ext_dev-spaces_az_aks;
}

class extDmsPreviewAzDmsProject {
    static task = ext_dms-preview_az_dms_project_task;
}

class extDmsPreviewAzDmsTask {
}

class extDmsPreviewAzDms extends ext_dms-preview_az_dms {
    static task = ext_dms-preview_az_dms_task;
    static project = extDmsPreviewAzDmsProject;
    static task = extDmsPreviewAzDmsTask;
}

class extDmsPreviewAz extends ext_dms-preview_az {
    static dms = extDmsPreviewAzDms;
}

class extEventgridAzEventgridDomainPrivateEndpoint {
    static connection = ext_eventgrid_az_eventgrid_domain_private_endpoint_connection;
}

class extEventgridAzEventgridDomainPrivateLink {
    static resource = ext_eventgrid_az_eventgrid_domain_private_link_resource;
}

class extEventgridAzEventgridDomainKey {
}

class extEventgridAzEventgridDomainPrivate {
    static endpoint = extEventgridAzEventgridDomainPrivateEndpoint;
    static link = extEventgridAzEventgridDomainPrivateLink;
}

class extEventgridAzEventgridDomainTopic {
}

class extEventgridAzEventgridPartnerNamespaceEvent {
    static channel = ext_eventgrid_az_eventgrid_partner_namespace_event_channel;
}

class extEventgridAzEventgridPartnerNamespaceKey {
}

class extEventgridAzEventgridPartnerTopicEvent {
    static subscription = ext_eventgrid_az_eventgrid_partner_topic_event_subscription;
}

class extEventgridAzEventgridPartnerNamespace extends ext_eventgrid_az_eventgrid_partner_namespace {
    static key = ext_eventgrid_az_eventgrid_partner_namespace_key;
    static event = extEventgridAzEventgridPartnerNamespaceEvent;
    static key = extEventgridAzEventgridPartnerNamespaceKey;
}

class extEventgridAzEventgridPartnerRegistration {
}

class extEventgridAzEventgridPartnerTopic extends ext_eventgrid_az_eventgrid_partner_topic {
    static event = extEventgridAzEventgridPartnerTopicEvent;
}

class extEventgridAzEventgridSystemTopicEvent {
    static subscription = ext_eventgrid_az_eventgrid_system_topic_event_subscription;
}

class extEventgridAzEventgridSystemTopic extends ext_eventgrid_az_eventgrid_system_topic {
    static event = extEventgridAzEventgridSystemTopicEvent;
}

class extEventgridAzEventgridTopicPrivateEndpoint {
    static connection = ext_eventgrid_az_eventgrid_topic_private_endpoint_connection;
}

class extEventgridAzEventgridTopicPrivateLink {
    static resource = ext_eventgrid_az_eventgrid_topic_private_link_resource;
}

class extEventgridAzEventgridTopicKey {
}

class extEventgridAzEventgridTopicPrivate {
    static endpoint = extEventgridAzEventgridTopicPrivateEndpoint;
    static link = extEventgridAzEventgridTopicPrivateLink;
}

class extEventgridAzEventgridTopicType {
}

class extEventgridAzEventgridDomain extends ext_eventgrid_az_eventgrid_domain {
    static key = ext_eventgrid_az_eventgrid_domain_key;
    static topic = ext_eventgrid_az_eventgrid_domain_topic;
    static key = extEventgridAzEventgridDomainKey;
    static private = extEventgridAzEventgridDomainPrivate;
    static topic = extEventgridAzEventgridDomainTopic;
}

class extEventgridAzEventgridEvent {
    static subscription = ext_eventgrid_az_eventgrid_event_subscription;
}

class extEventgridAzEventgridExtension {
    static topic = ext_eventgrid_az_eventgrid_extension_topic;
}

class extEventgridAzEventgridPartner extends ext_eventgrid_az_eventgrid_partner {
    static registration = ext_eventgrid_az_eventgrid_partner_registration;
    static namespace = extEventgridAzEventgridPartnerNamespace;
    static registration = extEventgridAzEventgridPartnerRegistration;
    static topic = extEventgridAzEventgridPartnerTopic;
}

class extEventgridAzEventgridSystem {
    static topic = extEventgridAzEventgridSystemTopic;
}

class extEventgridAzEventgridTopic extends ext_eventgrid_az_eventgrid_topic {
    static key = ext_eventgrid_az_eventgrid_topic_key;
    static type = ext_eventgrid_az_eventgrid_topic_type;
    static key = extEventgridAzEventgridTopicKey;
    static private = extEventgridAzEventgridTopicPrivate;
    static type = extEventgridAzEventgridTopicType;
}

class extEventgridAzEventgrid extends ext_eventgrid_az_eventgrid {
    static domain = extEventgridAzEventgridDomain;
    static event = extEventgridAzEventgridEvent;
    static extension = extEventgridAzEventgridExtension;
    static partner = extEventgridAzEventgridPartner;
    static system = extEventgridAzEventgridSystem;
    static topic = extEventgridAzEventgridTopic;
}

class extEventgridAz extends ext_eventgrid_az {
    static eventgrid = extEventgridAzEventgrid;
}

class extExpressRouteCrossConnectionAzNetworkCrossConnection {
    static peering = ext_express-route-cross-connection_az_network_cross_connection_peering;
}

class extExpressRouteCrossConnectionAzNetworkCross {
    static connection = extExpressRouteCrossConnectionAzNetworkCrossConnection;
}

class extExpressRouteCrossConnectionAzNetwork extends ext_express-route-cross-connection_az_network {
    static cross = extExpressRouteCrossConnectionAzNetworkCross;
}

class extExpressRouteCrossConnectionAz extends ext_express-route-cross-connection_az {
    static network = extExpressRouteCrossConnectionAzNetwork;
}

class extExpressRouteAzNetworkExpressRouteGateway {
    static connection = ext_express-route_az_network_express_route_gateway_connection;
}

class extExpressRouteAzNetworkExpressRoutePort {
    static link = ext_express-route_az_network_express_route_port_link;
    static location = ext_express-route_az_network_express_route_port_location;
}

class extExpressRouteAzNetworkExpressRoute extends ext_express-route_az_network_express_route {
    static gateway = extExpressRouteAzNetworkExpressRouteGateway;
    static port = extExpressRouteAzNetworkExpressRoutePort;
}

class extExpressRouteAzNetworkExpress {
    static route = extExpressRouteAzNetworkExpressRoute;
}

class extExpressRouteAzNetwork extends ext_express-route_az_network {
    static express = extExpressRouteAzNetworkExpress;
}

class extExpressRouteAz extends ext_express-route_az {
    static network = extExpressRouteAzNetwork;
}

class extFootprintAzFootprintMeasurementEndpoint {
    static condition = ext_footprint_az_footprint_measurement_endpoint_condition;
}

class extFootprintAzFootprintExperiment {
}

class extFootprintAzFootprintMeasurement {
    static endpoint = extFootprintAzFootprintMeasurementEndpoint;
}

class extFootprintAzFootprintProfile {
}

class extFootprintAzFootprint extends ext_footprint_az_footprint {
    static experiment = ext_footprint_az_footprint_experiment;
    static profile = ext_footprint_az_footprint_profile;
    static experiment = extFootprintAzFootprintExperiment;
    static measurement = extFootprintAzFootprintMeasurement;
    static profile = extFootprintAzFootprintProfile;
}

class extFootprintAz extends ext_footprint_az {
    static footprint = extFootprintAzFootprint;
}

class extFrontDoorAzNetworkFrontDoorBackendPool {
    static backend = ext_front-door_az_network_front_door_backend_pool_backend;
}

class extFrontDoorAzNetworkFrontDoorRulesEngineRule {
    static action = ext_front-door_az_network_front_door_rules_engine_rule_action;
    static condition = ext_front-door_az_network_front_door_rules_engine_rule_condition;
}

class extFrontDoorAzNetworkFrontDoorRulesEngine extends ext_front-door_az_network_front_door_rules_engine {
    static rule = extFrontDoorAzNetworkFrontDoorRulesEngineRule;
}

class extFrontDoorAzNetworkFrontDoorWafPolicyManagedRule {
    static definition = ext_front-door_az_network_front_door_waf_policy_managed_rule_definition;
}

class extFrontDoorAzNetworkFrontDoorWafPolicyManagedRules {
    static exclusion = ext_front-door_az_network_front_door_waf_policy_managed_rules_exclusion;
    static override = ext_front-door_az_network_front_door_waf_policy_managed_rules_override;
}

class extFrontDoorAzNetworkFrontDoorWafPolicyRuleMatch {
    static condition = ext_front-door_az_network_front_door_waf_policy_rule_match_condition;
}

class extFrontDoorAzNetworkFrontDoorWafPolicyManaged {
    static rule = extFrontDoorAzNetworkFrontDoorWafPolicyManagedRule;
    static rules = extFrontDoorAzNetworkFrontDoorWafPolicyManagedRules;
}

class extFrontDoorAzNetworkFrontDoorWafPolicyRule extends ext_front-door_az_network_front_door_waf_policy_rule {
    static match = extFrontDoorAzNetworkFrontDoorWafPolicyRuleMatch;
}

class extFrontDoorAzNetworkFrontDoorWafPolicy extends ext_front-door_az_network_front_door_waf_policy {
    static managed = extFrontDoorAzNetworkFrontDoorWafPolicyManaged;
    static rule = extFrontDoorAzNetworkFrontDoorWafPolicyRule;
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

class extFrontDoorAzNetworkFrontDoorProbe {
}

class extFrontDoorAzNetworkFrontDoorRouting {
    static rule = ext_front-door_az_network_front_door_routing_rule;
}

class extFrontDoorAzNetworkFrontDoorRules {
    static engine = extFrontDoorAzNetworkFrontDoorRulesEngine;
}

class extFrontDoorAzNetworkFrontDoorWaf {
    static policy = extFrontDoorAzNetworkFrontDoorWafPolicy;
}

class extFrontDoorAzNetworkFrontDoor extends ext_front-door_az_network_front_door {
    static probe = ext_front-door_az_network_front_door_probe;
    static backend = extFrontDoorAzNetworkFrontDoorBackend;
    static frontend = extFrontDoorAzNetworkFrontDoorFrontend;
    static load = extFrontDoorAzNetworkFrontDoorLoad;
    static probe = extFrontDoorAzNetworkFrontDoorProbe;
    static routing = extFrontDoorAzNetworkFrontDoorRouting;
    static rules = extFrontDoorAzNetworkFrontDoorRules;
    static waf = extFrontDoorAzNetworkFrontDoorWaf;
}

class extFrontDoorAzNetworkFront {
    static door = extFrontDoorAzNetworkFrontDoor;
}

class extFrontDoorAzNetwork extends ext_front-door_az_network {
    static front = extFrontDoorAzNetworkFront;
}

class extFrontDoorAz extends ext_front-door_az {
    static network = extFrontDoorAzNetwork;
}

class extFzfAz {
    static fzf = ext_fzf_az_fzf;
}

class extGuestconfigAzGuestconfigGuestConfigurationHcrpAssignment {
    static report = ext_guestconfig_az_guestconfig_guest_configuration_hcrp_assignment_report;
}

class extGuestconfigAzGuestconfigGuestConfigurationAssignment {
    static report = ext_guestconfig_az_guestconfig_guest_configuration_assignment_report;
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

class extGuestconfigAzGuestconfig extends ext_guestconfig_az_guestconfig {
    static guest = extGuestconfigAzGuestconfigGuest;
}

class extGuestconfigAz extends ext_guestconfig_az {
    static guestconfig = extGuestconfigAzGuestconfig;
}

class extHackAz {
    static hack = ext_hack_az_hack;
}

class extHardwareSecurityModulesAzDedicated {
    static hsm = ext_hardware-security-modules_az_dedicated_hsm;
}

class extHardwareSecurityModulesAz extends ext_hardware-security-modules_az {
    static dedicated = extHardwareSecurityModulesAzDedicated;
}

class extHealthcareapisAzHealthcareapisOperation {
    static result = ext_healthcareapis_az_healthcareapis_operation_result;
}

class extHealthcareapisAzHealthcareapisService {
}

class extHealthcareapisAzHealthcareapis extends ext_healthcareapis_az_healthcareapis {
    static service = ext_healthcareapis_az_healthcareapis_service;
    static operation = extHealthcareapisAzHealthcareapisOperation;
    static service = extHealthcareapisAzHealthcareapisService;
}

class extHealthcareapisAz extends ext_healthcareapis_az {
    static healthcareapis = extHealthcareapisAzHealthcareapis;
}

class extHpcCacheAzHpcCacheBlobStorage {
    static target = ext_hpc-cache_az_hpc_cache_blob_storage_target;
}

class extHpcCacheAzHpcCacheNfsStorage {
    static target = ext_hpc-cache_az_hpc_cache_nfs_storage_target;
}

class extHpcCacheAzHpcCacheBlob {
    static storage = extHpcCacheAzHpcCacheBlobStorage;
}

class extHpcCacheAzHpcCacheNfs {
    static storage = extHpcCacheAzHpcCacheNfsStorage;
}

class extHpcCacheAzHpcCacheSkus {
}

class extHpcCacheAzHpcCacheStorage {
    static target = ext_hpc-cache_az_hpc_cache_storage_target;
}

class extHpcCacheAzHpcCacheUsage {
    static model = ext_hpc-cache_az_hpc_cache_usage_model;
}

class extHpcCacheAzHpcCache extends ext_hpc-cache_az_hpc_cache {
    static skus = ext_hpc-cache_az_hpc_cache_skus;
    static blob = extHpcCacheAzHpcCacheBlob;
    static nfs = extHpcCacheAzHpcCacheNfs;
    static skus = extHpcCacheAzHpcCacheSkus;
    static storage = extHpcCacheAzHpcCacheStorage;
    static usage = extHpcCacheAzHpcCacheUsage;
}

class extHpcCacheAzHpc {
    static cache = extHpcCacheAzHpcCache;
}

class extHpcCacheAz extends ext_hpc-cache_az {
    static hpc = extHpcCacheAzHpc;
}

class extImageCopyExtensionAz {
    static image = ext_image-copy-extension_az_image;
}

class extImportExportAzImportExportBitLocker {
    static key = ext_import-export_az_import_export_bit_locker_key;
}

class extImportExportAzImportExportBit {
    static locker = extImportExportAzImportExportBitLocker;
}

class extImportExportAzImportExportLocation {
}

class extImportExportAzImportExport extends ext_import-export_az_import_export {
    static location = ext_import-export_az_import_export_location;
    static bit = extImportExportAzImportExportBit;
    static location = extImportExportAzImportExportLocation;
}

class extImportExportAzImport {
    static export = extImportExportAzImportExport;
}

class extImportExportAz extends ext_import-export_az {
    static import = extImportExportAzImport;
}

class extInternetAnalyzerAzInternetAnalyzerPreconfigured {
    static endpoint = ext_internet-analyzer_az_internet_analyzer_preconfigured_endpoint;
}

class extInternetAnalyzerAzInternetAnalyzerProfile {
}

class extInternetAnalyzerAzInternetAnalyzerTest {
}

class extInternetAnalyzerAzInternetAnalyzer extends ext_internet-analyzer_az_internet_analyzer {
    static profile = ext_internet-analyzer_az_internet_analyzer_profile;
    static test = ext_internet-analyzer_az_internet_analyzer_test;
    static preconfigured = extInternetAnalyzerAzInternetAnalyzerPreconfigured;
    static profile = extInternetAnalyzerAzInternetAnalyzerProfile;
    static test = extInternetAnalyzerAzInternetAnalyzerTest;
}

class extInternetAnalyzerAzInternet {
    static analyzer = extInternetAnalyzerAzInternetAnalyzer;
}

class extInternetAnalyzerAz extends ext_internet-analyzer_az {
    static internet = extInternetAnalyzerAzInternet;
}

class extIpGroupAzNetworkIp {
    static group = ext_ip-group_az_network_ip_group;
}

class extIpGroupAzNetwork extends ext_ip-group_az_network {
    static ip = extIpGroupAzNetworkIp;
}

class extIpGroupAz extends ext_ip-group_az {
    static network = extIpGroupAzNetwork;
}

class extK8SconfigurationAz {
    static k8Sconfiguration = ext_k8sconfiguration_az_k8sconfiguration;
}

class extKeyvaultPreviewAzKeyvaultCertificateContact {
}

class extKeyvaultPreviewAzKeyvaultCertificateIssuer {
    static admin = ext_keyvault-preview_az_keyvault_certificate_issuer_admin;
}

class extKeyvaultPreviewAzKeyvaultCertificatePending {
}

class extKeyvaultPreviewAzKeyvaultStorageSas {
    static definition = ext_keyvault-preview_az_keyvault_storage_sas_definition;
}

class extKeyvaultPreviewAzKeyvaultCertificate extends ext_keyvault-preview_az_keyvault_certificate {
    static contact = ext_keyvault-preview_az_keyvault_certificate_contact;
    static pending = ext_keyvault-preview_az_keyvault_certificate_pending;
    static contact = extKeyvaultPreviewAzKeyvaultCertificateContact;
    static issuer = extKeyvaultPreviewAzKeyvaultCertificateIssuer;
    static pending = extKeyvaultPreviewAzKeyvaultCertificatePending;
}

class extKeyvaultPreviewAzKeyvaultKey {
}

class extKeyvaultPreviewAzKeyvaultNetwork {
    static rule = ext_keyvault-preview_az_keyvault_network_rule;
}

class extKeyvaultPreviewAzKeyvaultSecret {
}

class extKeyvaultPreviewAzKeyvaultStorage extends ext_keyvault-preview_az_keyvault_storage {
    static sas = extKeyvaultPreviewAzKeyvaultStorageSas;
}

class extKeyvaultPreviewAzKeyvault extends ext_keyvault-preview_az_keyvault {
    static key = ext_keyvault-preview_az_keyvault_key;
    static secret = ext_keyvault-preview_az_keyvault_secret;
    static certificate = extKeyvaultPreviewAzKeyvaultCertificate;
    static key = extKeyvaultPreviewAzKeyvaultKey;
    static network = extKeyvaultPreviewAzKeyvaultNetwork;
    static secret = extKeyvaultPreviewAzKeyvaultSecret;
    static storage = extKeyvaultPreviewAzKeyvaultStorage;
}

class extKeyvaultPreviewAz extends ext_keyvault-preview_az {
    static keyvault = extKeyvaultPreviewAzKeyvault;
}

class extKustoAzKustoAttachedDatabase {
    static configuration = ext_kusto_az_kusto_attached_database_configuration;
}

class extKustoAzKustoClusterPrincipal {
    static assignment = ext_kusto_az_kusto_cluster_principal_assignment;
}

class extKustoAzKustoDataConnectionEvent {
    static grid = ext_kusto_az_kusto_data_connection_event_grid;
    static hub = ext_kusto_az_kusto_data_connection_event_hub;
}

class extKustoAzKustoDataConnectionIot {
    static hub = ext_kusto_az_kusto_data_connection_iot_hub;
}

class extKustoAzKustoDataConnection extends ext_kusto_az_kusto_data_connection {
    static event = extKustoAzKustoDataConnectionEvent;
    static iot = extKustoAzKustoDataConnectionIot;
}

class extKustoAzKustoDatabasePrincipal {
    static assignment = ext_kusto_az_kusto_database_principal_assignment;
}

class extKustoAzKustoAttached {
    static database = extKustoAzKustoAttachedDatabase;
}

class extKustoAzKustoCluster extends ext_kusto_az_kusto_cluster {
    static principal = extKustoAzKustoClusterPrincipal;
}

class extKustoAzKustoData {
    static connection = extKustoAzKustoDataConnection;
}

class extKustoAzKustoDatabase extends ext_kusto_az_kusto_database {
    static principal = extKustoAzKustoDatabasePrincipal;
}

class extKustoAzKusto extends ext_kusto_az_kusto {
    static attached = extKustoAzKustoAttached;
    static cluster = extKustoAzKustoCluster;
    static data = extKustoAzKustoData;
    static database = extKustoAzKustoDatabase;
}

class extKustoAz extends ext_kusto_az {
    static kusto = extKustoAzKusto;
}

class extLogAnalyticsSolutionAzMonitorLogAnalytics {
    static solution = ext_log-analytics-solution_az_monitor_log_analytics_solution;
}

class extLogAnalyticsSolutionAzMonitorLog {
    static analytics = extLogAnalyticsSolutionAzMonitorLogAnalytics;
}

class extLogAnalyticsSolutionAzMonitor extends ext_log-analytics-solution_az_monitor {
    static log = extLogAnalyticsSolutionAzMonitorLog;
}

class extLogAnalyticsSolutionAz extends ext_log-analytics-solution_az {
    static monitor = extLogAnalyticsSolutionAzMonitor;
}

class extLogAnalyticsAzMonitorLog {
    static analytics = ext_log-analytics_az_monitor_log_analytics;
}

class extLogAnalyticsAzMonitor extends ext_log-analytics_az_monitor {
    static log = extLogAnalyticsAzMonitorLog;
}

class extLogAnalyticsAz extends ext_log-analytics_az {
    static monitor = extLogAnalyticsAzMonitor;
}

class extLogicAzLogicIntegration {
    static account = ext_logic_az_logic_integration_account;
}

class extLogicAzLogicWorkflow {
}

class extLogicAzLogic extends ext_logic_az_logic {
    static workflow = ext_logic_az_logic_workflow;
    static integration = extLogicAzLogicIntegration;
    static workflow = extLogicAzLogicWorkflow;
}

class extLogicAz extends ext_logic_az {
    static logic = extLogicAzLogic;
}

class extMaintenanceAzMaintenance {
    static applyupdate = ext_maintenance_az_maintenance_applyupdate;
    static assignment = ext_maintenance_az_maintenance_assignment;
    static configuration = ext_maintenance_az_maintenance_configuration;
    static update = ext_maintenance_az_maintenance_update;
}

class extMaintenanceAz extends ext_maintenance_az {
    static maintenance = extMaintenanceAzMaintenance;
}

class extManagementpartnerAz {
    static managementpartner = ext_managementpartner_az_managementpartner;
}

class extMeshAzMeshCodePackage {
    static log = ext_mesh_az_mesh_code_package_log;
}

class extMeshAzMeshApp {
}

class extMeshAzMeshCode {
    static package = extMeshAzMeshCodePackage;
}

class extMeshAzMeshDeployment {
}

class extMeshAzMeshGateway {
}

class extMeshAzMeshGenerate {
}

class extMeshAzMeshNetwork {
}

class extMeshAzMeshSecret {
}

class extMeshAzMeshSecretvalue {
}

class extMeshAzMeshService {
    static replica = ext_mesh_az_mesh_service_replica;
}

class extMeshAzMeshVolume {
}

class extMeshAzMesh extends ext_mesh_az_mesh {
    static app = ext_mesh_az_mesh_app;
    static deployment = ext_mesh_az_mesh_deployment;
    static gateway = ext_mesh_az_mesh_gateway;
    static generate = ext_mesh_az_mesh_generate;
    static network = ext_mesh_az_mesh_network;
    static secret = ext_mesh_az_mesh_secret;
    static secretvalue = ext_mesh_az_mesh_secretvalue;
    static volume = ext_mesh_az_mesh_volume;
    static app = extMeshAzMeshApp;
    static code = extMeshAzMeshCode;
    static deployment = extMeshAzMeshDeployment;
    static gateway = extMeshAzMeshGateway;
    static generate = extMeshAzMeshGenerate;
    static network = extMeshAzMeshNetwork;
    static secret = extMeshAzMeshSecret;
    static secretvalue = extMeshAzMeshSecretvalue;
    static service = extMeshAzMeshService;
    static volume = extMeshAzMeshVolume;
}

class extMeshAz extends ext_mesh_az {
    static mesh = extMeshAzMesh;
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

class extMixedRealityAz extends ext_mixed-reality_az {
    static spatial = extMixedRealityAzSpatial;
}

class extNetappfilesPreviewAzNetappfilesAccount {
}

class extNetappfilesPreviewAzNetappfilesMount {
    static target = ext_netappfiles-preview_az_netappfiles_mount_target;
}

class extNetappfilesPreviewAzNetappfilesPool {
}

class extNetappfilesPreviewAzNetappfilesSnapshot {
}

class extNetappfilesPreviewAzNetappfilesVolume {
}

class extNetappfilesPreviewAzNetappfiles extends ext_netappfiles-preview_az_netappfiles {
    static account = ext_netappfiles-preview_az_netappfiles_account;
    static pool = ext_netappfiles-preview_az_netappfiles_pool;
    static snapshot = ext_netappfiles-preview_az_netappfiles_snapshot;
    static volume = ext_netappfiles-preview_az_netappfiles_volume;
    static account = extNetappfilesPreviewAzNetappfilesAccount;
    static mount = extNetappfilesPreviewAzNetappfilesMount;
    static pool = extNetappfilesPreviewAzNetappfilesPool;
    static snapshot = extNetappfilesPreviewAzNetappfilesSnapshot;
    static volume = extNetappfilesPreviewAzNetappfilesVolume;
}

class extNetappfilesPreviewAz extends ext_netappfiles-preview_az {
    static netappfiles = extNetappfilesPreviewAzNetappfiles;
}

class extNotificationHubAzNotificationHubNamespaceAuthorization {
    static rule = ext_notification-hub_az_notification_hub_namespace_authorization_rule;
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

class extNotificationHubAzNotificationHubNamespace extends ext_notification-hub_az_notification_hub_namespace {
    static authorization = extNotificationHubAzNotificationHubNamespaceAuthorization;
}

class extNotificationHubAzNotificationHub extends ext_notification-hub_az_notification_hub {
    static authorization = extNotificationHubAzNotificationHubAuthorization;
    static credential = extNotificationHubAzNotificationHubCredential;
    static namespace = extNotificationHubAzNotificationHubNamespace;
}

class extNotificationHubAzNotification {
    static hub = extNotificationHubAzNotificationHub;
}

class extNotificationHubAz extends ext_notification-hub_az {
    static notification = extNotificationHubAzNotification;
}

class extPeeringAzPeeringAsn {
}

class extPeeringAzPeeringLegacy {
}

class extPeeringAzPeeringLocation {
}

class extPeeringAzPeeringPeering {
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

class extPeeringAzPeering extends ext_peering_az_peering {
    static asn = ext_peering_az_peering_asn;
    static legacy = ext_peering_az_peering_legacy;
    static location = ext_peering_az_peering_location;
    static peering = ext_peering_az_peering_peering;
    static asn = extPeeringAzPeeringAsn;
    static legacy = extPeeringAzPeeringLegacy;
    static location = extPeeringAzPeeringLocation;
    static peering = extPeeringAzPeeringPeering;
    static received = extPeeringAzPeeringReceived;
    static registered = extPeeringAzPeeringRegistered;
    static service = extPeeringAzPeeringService;
}

class extPeeringAz extends ext_peering_az {
    static peering = extPeeringAzPeering;
}

class extPortalAzPortal {
    static dashboard = ext_portal_az_portal_dashboard;
}

class extPortalAz extends ext_portal_az {
    static portal = extPortalAzPortal;
}

class extPowerbidedicatedAzPowerbiEmbedded {
    static capacity = ext_powerbidedicated_az_powerbi_embedded_capacity;
}

class extPowerbidedicatedAzPowerbi extends ext_powerbidedicated_az_powerbi {
    static embedded = extPowerbidedicatedAzPowerbiEmbedded;
}

class extPowerbidedicatedAz extends ext_powerbidedicated_az {
    static powerbi = extPowerbidedicatedAzPowerbi;
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

class extPrivatednsAzNetworkPrivateDnsLink {
    static vnet = ext_privatedns_az_network_private_dns_link_vnet;
}

class extPrivatednsAzNetworkPrivateDnsRecord {
    static set = extPrivatednsAzNetworkPrivateDnsRecordSet;
}

class extPrivatednsAzNetworkPrivateDnsZone {
}

class extPrivatednsAzNetworkPrivateDns extends ext_privatedns_az_network_private_dns {
    static zone = ext_privatedns_az_network_private_dns_zone;
    static link = extPrivatednsAzNetworkPrivateDnsLink;
    static record = extPrivatednsAzNetworkPrivateDnsRecord;
    static zone = extPrivatednsAzNetworkPrivateDnsZone;
}

class extPrivatednsAzNetworkPrivate {
    static dns = extPrivatednsAzNetworkPrivateDns;
}

class extPrivatednsAzNetwork extends ext_privatedns_az_network {
    static private = extPrivatednsAzNetworkPrivate;
}

class extPrivatednsAz extends ext_privatedns_az {
    static network = extPrivatednsAzNetwork;
}

class extResourceGraphAzGraphShared {
    static query = ext_resource-graph_az_graph_shared_query;
}

class extResourceGraphAzGraph extends ext_resource-graph_az_graph {
    static shared = extResourceGraphAzGraphShared;
}

class extResourceGraphAz extends ext_resource-graph_az {
    static graph = extResourceGraphAzGraph;
}

class extSapHanaAzSapmonitorProvider {
    static instance = ext_sap-hana_az_sapmonitor_provider_instance;
}

class extSapHanaAzHanainstance {
}

class extSapHanaAzSapmonitor extends ext_sap-hana_az_sapmonitor {
    static provider = extSapHanaAzSapmonitorProvider;
}

class extSapHanaAz extends ext_sap-hana_az {
    static hanainstance = ext_sap-hana_az_hanainstance;
    static hanainstance = extSapHanaAzHanainstance;
    static sapmonitor = extSapHanaAzSapmonitor;
}

class extScheduledQueryAzMonitorScheduled {
    static query = ext_scheduled-query_az_monitor_scheduled_query;
}

class extScheduledQueryAzMonitor extends ext_scheduled-query_az_monitor {
    static scheduled = extScheduledQueryAzMonitorScheduled;
}

class extScheduledQueryAz extends ext_scheduled-query_az {
    static monitor = extScheduledQueryAzMonitor;
}

class extSpringCloudAzSpringCloudAppBinding {
    static cosmos = ext_spring-cloud_az_spring_cloud_app_binding_cosmos;
    static mysql = ext_spring-cloud_az_spring_cloud_app_binding_mysql;
    static redis = ext_spring-cloud_az_spring_cloud_app_binding_redis;
}

class extSpringCloudAzSpringCloudAppCustom {
    static domain = ext_spring-cloud_az_spring_cloud_app_custom_domain;
}

class extSpringCloudAzSpringCloudAppDeployment {
}

class extSpringCloudAzSpringCloudAppIdentity {
}

class extSpringCloudAzSpringCloudAppLog {
}

class extSpringCloudAzSpringCloudConfigServerGit {
    static repo = ext_spring-cloud_az_spring_cloud_config_server_git_repo;
}

class extSpringCloudAzSpringCloudConfigServer extends ext_spring-cloud_az_spring_cloud_config_server {
    static git = extSpringCloudAzSpringCloudConfigServerGit;
}

class extSpringCloudAzSpringCloudApp extends ext_spring-cloud_az_spring_cloud_app {
    static deployment = ext_spring-cloud_az_spring_cloud_app_deployment;
    static identity = ext_spring-cloud_az_spring_cloud_app_identity;
    static log = ext_spring-cloud_az_spring_cloud_app_log;
    static binding = extSpringCloudAzSpringCloudAppBinding;
    static custom = extSpringCloudAzSpringCloudAppCustom;
    static deployment = extSpringCloudAzSpringCloudAppDeployment;
    static identity = extSpringCloudAzSpringCloudAppIdentity;
    static log = extSpringCloudAzSpringCloudAppLog;
}

class extSpringCloudAzSpringCloudCertificate {
}

class extSpringCloudAzSpringCloudConfig {
    static server = extSpringCloudAzSpringCloudConfigServer;
}

class extSpringCloudAzSpringCloudTest {
    static endpoint = ext_spring-cloud_az_spring_cloud_test_endpoint;
}

class extSpringCloudAzSpringCloud extends ext_spring-cloud_az_spring_cloud {
    static certificate = ext_spring-cloud_az_spring_cloud_certificate;
    static app = extSpringCloudAzSpringCloudApp;
    static certificate = extSpringCloudAzSpringCloudCertificate;
    static config = extSpringCloudAzSpringCloudConfig;
    static test = extSpringCloudAzSpringCloudTest;
}

class extSpringCloudAzSpring {
    static cloud = extSpringCloudAzSpringCloud;
}

class extSpringCloudAz extends ext_spring-cloud_az {
    static spring = extSpringCloudAzSpring;
}

class extSshAz {
    static ssh = ext_ssh_az_ssh;
}

class extStackHciAzStackHci {
    static cluster = ext_stack-hci_az_stack_hci_cluster;
}

class extStackHciAzStack {
    static hci = extStackHciAzStackHci;
}

class extStackHciAz extends ext_stack-hci_az {
    static stack = extStackHciAzStack;
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

class extStorageBlobPreviewAzStorageAccount extends ext_storage-blob-preview_az_storage_account {
    static blob = extStorageBlobPreviewAzStorageAccountBlob;
    static management = extStorageBlobPreviewAzStorageAccountManagement;
}

class extStorageBlobPreviewAzStorageBlob {
    static copy = ext_storage-blob-preview_az_storage_blob_copy;
    static lease = ext_storage-blob-preview_az_storage_blob_lease;
    static metadata = ext_storage-blob-preview_az_storage_blob_metadata;
    static tag = ext_storage-blob-preview_az_storage_blob_tag;
}

class extStorageBlobPreviewAzStorageContainer {
}

class extStorageBlobPreviewAzStorage extends ext_storage-blob-preview_az_storage {
    static container = ext_storage-blob-preview_az_storage_container;
    static account = extStorageBlobPreviewAzStorageAccount;
    static blob = extStorageBlobPreviewAzStorageBlob;
    static container = extStorageBlobPreviewAzStorageContainer;
}

class extStorageBlobPreviewAz extends ext_storage-blob-preview_az {
    static storage = extStorageBlobPreviewAzStorage;
}

class extStorageOrPreviewAzStorageAccountOrPolicy {
    static rule = ext_storage-or-preview_az_storage_account_or_policy_rule;
}

class extStorageOrPreviewAzStorageAccountOr {
    static policy = extStorageOrPreviewAzStorageAccountOrPolicy;
}

class extStorageOrPreviewAzStorageAccount extends ext_storage-or-preview_az_storage_account {
    static or = extStorageOrPreviewAzStorageAccountOr;
}

class extStorageOrPreviewAzStorage extends ext_storage-or-preview_az_storage {
    static account = extStorageOrPreviewAzStorageAccount;
}

class extStorageOrPreviewAz extends ext_storage-or-preview_az {
    static storage = extStorageOrPreviewAzStorage;
}

class extStoragePreviewAzStorageAccountKeys {
}

class extStoragePreviewAzStorageAccountManagement {
    static policy = ext_storage-preview_az_storage_account_management_policy;
}

class extStoragePreviewAzStorageAccountNetwork {
    static rule = ext_storage-preview_az_storage_account_network_rule;
}

class extStoragePreviewAzStorageBlobAccess {
}

class extStoragePreviewAzStorageBlobDirectory {
    static access = ext_storage-preview_az_storage_blob_directory_access;
    static metadata = ext_storage-preview_az_storage_blob_directory_metadata;
}

class extStoragePreviewAzStorageBlobService {
    static properties = ext_storage-preview_az_storage_blob_service_properties;
}

class extStoragePreviewAzStorageAccount extends ext_storage-preview_az_storage_account {
    static keys = ext_storage-preview_az_storage_account_keys;
    static keys = extStoragePreviewAzStorageAccountKeys;
    static management = extStoragePreviewAzStorageAccountManagement;
    static network = extStoragePreviewAzStorageAccountNetwork;
}

class extStoragePreviewAzStorageAzcopy {
    static blob = ext_storage-preview_az_storage_azcopy_blob;
}

class extStoragePreviewAzStorageBlob extends ext_storage-preview_az_storage_blob {
    static access = ext_storage-preview_az_storage_blob_access;
    static access = extStoragePreviewAzStorageBlobAccess;
    static directory = extStoragePreviewAzStorageBlobDirectory;
    static service = extStoragePreviewAzStorageBlobService;
}

class extStoragePreviewAzStorage extends ext_storage-preview_az_storage {
    static account = extStoragePreviewAzStorageAccount;
    static azcopy = extStoragePreviewAzStorageAzcopy;
    static blob = extStoragePreviewAzStorageBlob;
}

class extStoragePreviewAz extends ext_storage-preview_az {
    static storage = extStoragePreviewAzStorage;
}

class extStoragesyncAzStoragesyncSyncGroupCloud {
    static endpoint = ext_storagesync_az_storagesync_sync_group_cloud_endpoint;
}

class extStoragesyncAzStoragesyncSyncGroupServer {
    static endpoint = ext_storagesync_az_storagesync_sync_group_server_endpoint;
}

class extStoragesyncAzStoragesyncSyncGroup extends ext_storagesync_az_storagesync_sync_group {
    static cloud = extStoragesyncAzStoragesyncSyncGroupCloud;
    static server = extStoragesyncAzStoragesyncSyncGroupServer;
}

class extStoragesyncAzStoragesyncRegistered {
    static server = ext_storagesync_az_storagesync_registered_server;
}

class extStoragesyncAzStoragesyncSync {
    static group = extStoragesyncAzStoragesyncSyncGroup;
}

class extStoragesyncAzStoragesync extends ext_storagesync_az_storagesync {
    static registered = extStoragesyncAzStoragesyncRegistered;
    static sync = extStoragesyncAzStoragesyncSync;
}

class extStoragesyncAz extends ext_storagesync_az {
    static storagesync = extStoragesyncAzStoragesync;
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

class extStreamAnalyticsAz extends ext_stream-analytics_az {
    static stream = extStreamAnalyticsAzStream;
}

class extSubscriptionAz {
    static account = ext_subscription_az_account;
}

class extSupportAzSupportServicesProblem {
    static classifications = ext_support_az_support_services_problem_classifications;
}

class extSupportAzSupportServices extends ext_support_az_support_services {
    static problem = extSupportAzSupportServicesProblem;
}

class extSupportAzSupportTickets {
    static communications = ext_support_az_support_tickets_communications;
}

class extSupportAzSupport extends ext_support_az_support {
    static services = extSupportAzSupportServices;
    static tickets = extSupportAzSupportTickets;
}

class extSupportAz extends ext_support_az {
    static support = extSupportAzSupport;
}

class extSynapseAzSynapseWorkspaceFirewall {
    static rule = ext_synapse_az_synapse_workspace_firewall_rule;
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

class extSynapseAzSynapseWorkspace extends ext_synapse_az_synapse_workspace {
    static firewall = extSynapseAzSynapseWorkspaceFirewall;
}

class extSynapseAzSynapse extends ext_synapse_az_synapse {
    static spark = extSynapseAzSynapseSpark;
    static sql = extSynapseAzSynapseSql;
    static workspace = extSynapseAzSynapseWorkspace;
}

class extSynapseAz extends ext_synapse_az {
    static synapse = extSynapseAzSynapse;
}

class extTimeseriesinsightsAzTimeseriesinsightsEventSource {
    static eventhub = ext_timeseriesinsights_az_timeseriesinsights_event_source_eventhub;
    static iothub = ext_timeseriesinsights_az_timeseriesinsights_event_source_iothub;
}

class extTimeseriesinsightsAzTimeseriesinsightsReferenceData {
    static set = ext_timeseriesinsights_az_timeseriesinsights_reference_data_set;
}

class extTimeseriesinsightsAzTimeseriesinsightsAccess {
    static policy = ext_timeseriesinsights_az_timeseriesinsights_access_policy;
}

class extTimeseriesinsightsAzTimeseriesinsightsEnvironment {
    static longterm = ext_timeseriesinsights_az_timeseriesinsights_environment_longterm;
    static standard = ext_timeseriesinsights_az_timeseriesinsights_environment_standard;
}

class extTimeseriesinsightsAzTimeseriesinsightsEvent {
    static source = extTimeseriesinsightsAzTimeseriesinsightsEventSource;
}

class extTimeseriesinsightsAzTimeseriesinsightsReference {
    static data = extTimeseriesinsightsAzTimeseriesinsightsReferenceData;
}

class extTimeseriesinsightsAzTimeseriesinsights extends ext_timeseriesinsights_az_timeseriesinsights {
    static access = extTimeseriesinsightsAzTimeseriesinsightsAccess;
    static environment = extTimeseriesinsightsAzTimeseriesinsightsEnvironment;
    static event = extTimeseriesinsightsAzTimeseriesinsightsEvent;
    static reference = extTimeseriesinsightsAzTimeseriesinsightsReference;
}

class extTimeseriesinsightsAz extends ext_timeseriesinsights_az {
    static timeseriesinsights = extTimeseriesinsightsAzTimeseriesinsights;
}

class extVirtualNetworkTapAzNetworkNicVtap {
    static config = ext_virtual-network-tap_az_network_nic_vtap_config;
}

class extVirtualNetworkTapAzNetworkNic extends ext_virtual-network-tap_az_network_nic {
    static vtap = extVirtualNetworkTapAzNetworkNicVtap;
}

class extVirtualNetworkTapAzNetworkVnet {
    static tap = ext_virtual-network-tap_az_network_vnet_tap;
}

class extVirtualNetworkTapAzNetwork extends ext_virtual-network-tap_az_network {
    static nic = extVirtualNetworkTapAzNetworkNic;
    static vnet = extVirtualNetworkTapAzNetworkVnet;
}

class extVirtualNetworkTapAz extends ext_virtual-network-tap_az {
    static network = extVirtualNetworkTapAzNetwork;
}

class extVirtualWanAzNetworkP2SVpnGateway {
    static connection = ext_virtual-wan_az_network_p2s_vpn_gateway_connection;
}

class extVirtualWanAzNetworkP2SVpn {
    static gateway = extVirtualWanAzNetworkP2SVpnGateway;
}

class extVirtualWanAzNetworkVhubRouteTable {
    static route = ext_virtual-wan_az_network_vhub_route_table_route;
}

class extVirtualWanAzNetworkVhubConnection {
}

class extVirtualWanAzNetworkVhubRoute extends ext_virtual-wan_az_network_vhub_route {
    static table = extVirtualWanAzNetworkVhubRouteTable;
}

class extVirtualWanAzNetworkVpnGatewayConnectionIpsec {
    static policy = ext_virtual-wan_az_network_vpn_gateway_connection_ipsec_policy;
}

class extVirtualWanAzNetworkVpnGatewayConnection extends ext_virtual-wan_az_network_vpn_gateway_connection {
    static ipsec = extVirtualWanAzNetworkVpnGatewayConnectionIpsec;
}

class extVirtualWanAzNetworkVpnServerConfigIpsec {
    static policy = ext_virtual-wan_az_network_vpn_server_config_ipsec_policy;
}

class extVirtualWanAzNetworkVpnServerConfig extends ext_virtual-wan_az_network_vpn_server_config {
    static ipsec = extVirtualWanAzNetworkVpnServerConfigIpsec;
}

class extVirtualWanAzNetworkVpnGateway extends ext_virtual-wan_az_network_vpn_gateway {
    static connection = extVirtualWanAzNetworkVpnGatewayConnection;
}

class extVirtualWanAzNetworkVpnServer {
    static config = extVirtualWanAzNetworkVpnServerConfig;
}

class extVirtualWanAzNetworkVpnSite {
}

class extVirtualWanAzNetworkP2S {
    static vpn = extVirtualWanAzNetworkP2SVpn;
}

class extVirtualWanAzNetworkVhub extends ext_virtual-wan_az_network_vhub {
    static connection = ext_virtual-wan_az_network_vhub_connection;
    static connection = extVirtualWanAzNetworkVhubConnection;
    static route = extVirtualWanAzNetworkVhubRoute;
}

class extVirtualWanAzNetworkVpn {
    static site = ext_virtual-wan_az_network_vpn_site;
    static gateway = extVirtualWanAzNetworkVpnGateway;
    static server = extVirtualWanAzNetworkVpnServer;
    static site = extVirtualWanAzNetworkVpnSite;
}

class extVirtualWanAzNetworkVwan {
}

class extVirtualWanAzNetwork extends ext_virtual-wan_az_network {
    static vwan = ext_virtual-wan_az_network_vwan;
    static p2S = extVirtualWanAzNetworkP2S;
    static vhub = extVirtualWanAzNetworkVhub;
    static vpn = extVirtualWanAzNetworkVpn;
    static vwan = extVirtualWanAzNetworkVwan;
}

class extVirtualWanAz extends ext_virtual-wan_az {
    static network = extVirtualWanAzNetwork;
}

class extVmRepairAzVm {
    static repair = ext_vm-repair_az_vm_repair;
}

class extVmRepairAz extends ext_vm-repair_az {
    static vm = extVmRepairAzVm;
}

class extVmwareAzVmwareCluster {
}

class extVmwareAzVmwarePrivate {
    static cloud = ext_vmware_az_vmware_private_cloud;
}

class extVmwareAzVmware extends ext_vmware_az_vmware {
    static cluster = ext_vmware_az_vmware_cluster;
    static cluster = extVmwareAzVmwareCluster;
    static private = extVmwareAzVmwarePrivate;
}

class extVmwareAz extends ext_vmware_az {
    static vmware = extVmwareAzVmware;
}

class extWebappAzWebappContainer {
}

class extWebappAzWebappRemote {
    static connection = ext_webapp_az_webapp_remote_connection;
}

class extWebappAzWebappScan {
}

class extWebappAzWebapp extends ext_webapp_az_webapp {
    static container = ext_webapp_az_webapp_container;
    static scan = ext_webapp_az_webapp_scan;
    static container = extWebappAzWebappContainer;
    static remote = extWebappAzWebappRemote;
    static scan = extWebappAzWebappScan;
}

class extWebappAz extends ext_webapp_az {
    static webapp = extWebappAzWebapp;
}

class extAccount {
    static az = extAccountAz;
}

class extAem {
    static az = extAemAz;
}

class extAiExamples {
    static az = extAiExamplesAz;
}

class extAksPreview {
    static az = extAksPreviewAz;
}

class extAlertsmanagement {
    static az = extAlertsmanagementAz;
}

class extAlias {
    static az = extAliasAz;
}

class extApplicationInsights {
    static az = extApplicationInsightsAz;
}

class extAttestation {
    static az = extAttestationAz;
}

class extAzureBatchCliExtensions {
    static az = extAzureBatchCliExtensionsAz;
}

class extAzureCliIotExt {
    static az = extAzureCliIotExtAz;
}

class extAzureCliMl {
    static az = extAzureCliMlAz;
}

class extAzureDevops {
    static az = extAzureDevopsAz;
}

class extAzureFirewall {
    static az = extAzureFirewallAz;
}

class extAzureIot {
    static az = extAzureIotAz;
}

class extBlockchain {
    static az = extBlockchainAz;
}

class extBlueprint {
    static az = extBlueprintAz;
}

class extCodespaces {
    static az = extCodespacesAz;
}

class extConnectedk8S {
    static az = extConnectedk8SAz;
}

class extConnectedmachine {
    static az = extConnectedmachineAz;
}

class extCostmanagement {
    static az = extCostmanagementAz;
}

class extCsvmware {
    static az = extCsvmwareAz;
}

class extCustomProviders {
    static az = extCustomProvidersAz;
}

class extDatabox {
    static az = extDataboxAz;
}

class extDatabricks {
    static az = extDatabricksAz;
}

class extDatafactory {
    static az = extDatafactoryAz;
}

class extDatashare {
    static az = extDatashareAz;
}

class extDbUp {
    static az = extDbUpAz;
}

class extDeployToAzure {
    static az = extDeployToAzureAz;
}

class extDesktopvirtualization {
    static az = extDesktopvirtualizationAz;
}

class extDevSpaces {
    static az = extDevSpacesAz;
}

class extDmsPreview {
    static az = extDmsPreviewAz;
}

class extEventgrid {
    static az = extEventgridAz;
}

class extExpressRouteCrossConnection {
    static az = extExpressRouteCrossConnectionAz;
}

class extExpressRoute {
    static az = extExpressRouteAz;
}

class extFootprint {
    static az = extFootprintAz;
}

class extFrontDoor {
    static az = extFrontDoorAz;
}

class extFzf {
    static az = extFzfAz;
}

class extGuestconfig {
    static az = extGuestconfigAz;
}

class extHack {
    static az = extHackAz;
}

class extHardwareSecurityModules {
    static az = extHardwareSecurityModulesAz;
}

class extHealthcareapis {
    static az = extHealthcareapisAz;
}

class extHpcCache {
    static az = extHpcCacheAz;
}

class extImageCopyExtension {
    static az = extImageCopyExtensionAz;
}

class extImportExport {
    static az = extImportExportAz;
}

class extInteractive {
    static az = ext_interactive_az;
}

class extInternetAnalyzer {
    static az = extInternetAnalyzerAz;
}

class extIpGroup {
    static az = extIpGroupAz;
}

class extK8Sconfiguration {
    static az = extK8SconfigurationAz;
}

class extKeyvaultPreview {
    static az = extKeyvaultPreviewAz;
}

class extKusto {
    static az = extKustoAz;
}

class extLogAnalyticsSolution {
    static az = extLogAnalyticsSolutionAz;
}

class extLogAnalytics {
    static az = extLogAnalyticsAz;
}

class extLogic {
    static az = extLogicAz;
}

class extMaintenance {
    static az = extMaintenanceAz;
}

class extManagementpartner {
    static az = extManagementpartnerAz;
}

class extMesh {
    static az = extMeshAz;
}

class extMixedReality {
    static az = extMixedRealityAz;
}

class extNetappfilesPreview {
    static az = extNetappfilesPreviewAz;
}

class extNotificationHub {
    static az = extNotificationHubAz;
}

class extPeering {
    static az = extPeeringAz;
}

class extPortal {
    static az = extPortalAz;
}

class extPowerbidedicated {
    static az = extPowerbidedicatedAz;
}

class extPrivatedns {
    static az = extPrivatednsAz;
}

class extResourceGraph {
    static az = extResourceGraphAz;
}

class extSapHana {
    static az = extSapHanaAz;
}

class extScheduledQuery {
    static az = extScheduledQueryAz;
}

class extSpringCloud {
    static az = extSpringCloudAz;
}

class extSsh {
    static az = extSshAz;
}

class extStackHci {
    static az = extStackHciAz;
}

class extStorageBlobPreview {
    static az = extStorageBlobPreviewAz;
}

class extStorageOrPreview {
    static az = extStorageOrPreviewAz;
}

class extStoragePreview {
    static az = extStoragePreviewAz;
}

class extStoragesync {
    static az = extStoragesyncAz;
}

class extStreamAnalytics {
    static az = extStreamAnalyticsAz;
}

class extSubscription {
    static az = extSubscriptionAz;
}

class extSupport {
    static az = extSupportAz;
}

class extSynapse {
    static az = extSynapseAz;
}

class extTimeseriesinsights {
    static az = extTimeseriesinsightsAz;
}

class extVirtualNetworkTap {
    static az = extVirtualNetworkTapAz;
}

class extVirtualWan {
    static az = extVirtualWanAz;
}

class extVmRepair {
    static az = extVmRepairAz;
}

class extVmware {
    static az = extVmwareAz;
}

class extWebapp {
    static az = extWebappAz;
}

class az extends az {
    static aro = az_aro;
    static cache = az_cache;
    static cloud = az_cloud;
    static container = az_container;
    static extension = az_extension;
    static feature = az_feature;
    static identity = az_identity;
    static lock = az_lock;
    static ppg = az_ppg;
    static snapshot = az_snapshot;
    static tag = az_tag;
    static account = azAccount;
    static acr = azAcr;
    static acs = azAcs;
    static ad = azAd;
    static advisor = azAdvisor;
    static aks = azAks;
    static ams = azAms;
    static apim = azApim;
    static appconfig = azAppconfig;
    static appservice = azAppservice;
    static aro = azAro;
    static artifacts = azArtifacts;
    static backup = azBackup;
    static batch = azBatch;
    static batchai = azBatchai;
    static billing = azBilling;
    static boards = azBoards;
    static bot = azBot;
    static cache = azCache;
    static cdn = azCdn;
    static cloud = azCloud;
    static cognitiveservices = azCognitiveservices;
    static config = azConfig;
    static consumption = azConsumption;
    static container = azContainer;
    static cosmosdb = azCosmosdb;
    static deployment = azDeployment;
    static deploymentmanager = azDeploymentmanager;
    static devops = azDevops;
    static disk = azDisk;
    static dla = azDla;
    static dls = azDls;
    static dms = azDms;
    static eventgrid = azEventgrid;
    static eventhubs = azEventhubs;
    static extension = azExtension;
    static feature = azFeature;
    static functionapp = azFunctionapp;
    static group = azGroup;
    static hdinsight = azHdinsight;
    static identity = azIdentity;
    static image = azImage;
    static iot = azIot;
    static iotcentral = azIotcentral;
    static keyvault = azKeyvault;
    static kusto = azKusto;
    static lab = azLab;
    static local = azLocal;
    static lock = azLock;
    static managedapp = azManagedapp;
    static managedservices = azManagedservices;
    static maps = azMaps;
    static mariadb = azMariadb;
    static monitor = azMonitor;
    static mysql = azMysql;
    static netappfiles = azNetappfiles;
    static network = azNetwork;
    static openshift = azOpenshift;
    static pipelines = azPipelines;
    static policy = azPolicy;
    static postgres = azPostgres;
    static ppg = azPpg;
    static provider = azProvider;
    static redis = azRedis;
    static relay = azRelay;
    static repos = azRepos;
    static reservations = azReservations;
    static resource = azResource;
    static role = azRole;
    static search = azSearch;
    static security = azSecurity;
    static servicebus = azServicebus;
    static sf = azSf;
    static sig = azSig;
    static signalr = azSignalr;
    static snapshot = azSnapshot;
    static sql = azSql;
    static staticwebapp = azStaticwebapp;
    static storage = azStorage;
    static synapse = azSynapse;
    static tag = azTag;
    static vm = azVm;
    static vmss = azVmss;
    static webapp = azWebapp;
}

class ext {
    static account = extAccount;
    static aem = extAem;
    static aiExamples = extAiExamples;
    static aksPreview = extAksPreview;
    static alertsmanagement = extAlertsmanagement;
    static alias = extAlias;
    static applicationInsights = extApplicationInsights;
    static attestation = extAttestation;
    static azureBatchCliExtensions = extAzureBatchCliExtensions;
    static azureCliIotExt = extAzureCliIotExt;
    static azureCliMl = extAzureCliMl;
    static azureDevops = extAzureDevops;
    static azureFirewall = extAzureFirewall;
    static azureIot = extAzureIot;
    static blockchain = extBlockchain;
    static blueprint = extBlueprint;
    static codespaces = extCodespaces;
    static connectedk8S = extConnectedk8S;
    static connectedmachine = extConnectedmachine;
    static costmanagement = extCostmanagement;
    static csvmware = extCsvmware;
    static customProviders = extCustomProviders;
    static databox = extDatabox;
    static databricks = extDatabricks;
    static datafactory = extDatafactory;
    static datashare = extDatashare;
    static dbUp = extDbUp;
    static deployToAzure = extDeployToAzure;
    static desktopvirtualization = extDesktopvirtualization;
    static devSpaces = extDevSpaces;
    static dmsPreview = extDmsPreview;
    static eventgrid = extEventgrid;
    static expressRouteCrossConnection = extExpressRouteCrossConnection;
    static expressRoute = extExpressRoute;
    static footprint = extFootprint;
    static frontDoor = extFrontDoor;
    static fzf = extFzf;
    static guestconfig = extGuestconfig;
    static hack = extHack;
    static hardwareSecurityModules = extHardwareSecurityModules;
    static healthcareapis = extHealthcareapis;
    static hpcCache = extHpcCache;
    static imageCopyExtension = extImageCopyExtension;
    static importExport = extImportExport;
    static interactive = extInteractive;
    static internetAnalyzer = extInternetAnalyzer;
    static ipGroup = extIpGroup;
    static k8Sconfiguration = extK8Sconfiguration;
    static keyvaultPreview = extKeyvaultPreview;
    static kusto = extKusto;
    static logAnalyticsSolution = extLogAnalyticsSolution;
    static logAnalytics = extLogAnalytics;
    static logic = extLogic;
    static maintenance = extMaintenance;
    static managementpartner = extManagementpartner;
    static mesh = extMesh;
    static mixedReality = extMixedReality;
    static netappfilesPreview = extNetappfilesPreview;
    static notificationHub = extNotificationHub;
    static peering = extPeering;
    static portal = extPortal;
    static powerbidedicated = extPowerbidedicated;
    static privatedns = extPrivatedns;
    static resourceGraph = extResourceGraph;
    static sapHana = extSapHana;
    static scheduledQuery = extScheduledQuery;
    static springCloud = extSpringCloud;
    static ssh = extSsh;
    static stackHci = extStackHci;
    static storageBlobPreview = extStorageBlobPreview;
    static storageOrPreview = extStorageOrPreview;
    static storagePreview = extStoragePreview;
    static storagesync = extStoragesync;
    static streamAnalytics = extStreamAnalytics;
    static subscription = extSubscription;
    static support = extSupport;
    static synapse = extSynapse;
    static timeseriesinsights = extTimeseriesinsights;
    static virtualNetworkTap = extVirtualNetworkTap;
    static virtualWan = extVirtualWan;
    static vmRepair = extVmRepair;
    static vmware = extVmware;
    static webapp = extWebapp;
}
