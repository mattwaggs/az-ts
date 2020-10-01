import { az } from "./src/gen/az";

const accounts = az.storage.account.list().execute();
import crypto from "crypto";

const uniqueId = crypto.randomBytes(4).toString("hex");

const resourceGroupName = `matt-test-rg-${uniqueId}`;
const appServicePlanName = `matt-test-plan-${uniqueId}`;
const webappName = `matt-test-${uniqueId}`;
const storageAccountName = `test${uniqueId}`;
const tableName = `table${uniqueId}`;
const ehNamespaceName = `name${uniqueId}`;
const ehName = `eh${uniqueId}`;
const appConfigName = `appconfig${uniqueId}`;
const vaultName = `vault${uniqueId}`;

// resource group
az.group.list();
az.group.create("canadacentral", resourceGroupName).execute();
az.group.list();
az.group.show(resourceGroupName).execute();

// app service plans
az.appservice.plan.list();
az.appservice.plan
  .create(appServicePlanName, resourceGroupName)
  .sku("F1")
  .location("canadacentral")
  .execute();

az.appservice.plan.list();
az.appservice.plan
  .show()
  .name(appServicePlanName)
  .resourceGroup(resourceGroupName)
  .execute();

az.appservice.plan
  .update()
  .name(appServicePlanName)
  .resourceGroup(resourceGroupName)
  .sku("F1")
  .execute();

// webapps
az.webapp.list().execute();
const webapp = az.webapp
  .create(webappName, appServicePlanName, resourceGroupName)
  .execute();

az.webapp.list().execute();
az.webapp.show().name(webappName).resourceGroup(resourceGroupName).execute();
az.webapp
  .update()
  .name(webappName)
  .resourceGroup(resourceGroupName)
  .httpsOnly(true)
  .execute();

az.webapp.identity
  .assign()
  .name(webappName)
  .resourceGroup(resourceGroupName)
  .identities("[system]")
  .execute();

az.webapp.identity
  .show()
  .name(webappName)
  .resourceGroup(resourceGroupName)
  .execute();

az.webapp.deployment.slot
  .list()
  .name(webappName)
  .resourceGroup(resourceGroupName)
  .execute();

az.webapp.deployment.slot
  .create(webappName, resourceGroupName, "staging")
  .execute();

az.webapp.deployment.slot
  .list()
  .name(webappName)
  .resourceGroup(resourceGroupName)
  .execute();

az.webapp.deployment.slot
  .delete("staging")
  .resourceGroup(resourceGroupName)
  .name(webappName)
  .execute();

// storage
az.storage.account.list().execute();
az.storage.account
  .create(storageAccountName, resourceGroupName)
  .kind("StorageV2")
  .sku("Standard_LRS")
  .location("canadacentral")
  .accessTier("Hot")
  .execute();

az.storage.account.list().execute();
az.storage.account
  .show()
  .name(storageAccountName)
  .resourceGroup(resourceGroupName)
  .execute();

const connString = az.storage.account
  .show_connection_string()
  .name(storageAccountName)
  .resourceGroup(resourceGroupName)
  .execute();

az.storage.table
  .list()
  .accountName(storageAccountName)
  .connectionString(connString.connectionString)
  .execute();

az.storage.table
  .create(tableName)
  .accountName(storageAccountName)
  .connectionString(connString.connectionString)
  .execute();

az.storage.table
  .list()
  .accountName(storageAccountName)
  .connectionString(connString.connectionString)
  .execute();

az.storage.table
  .generate_sas(tableName)
  .accountName(storageAccountName)
  .connectionString(connString.connectionString)
  .execute();

az.storage.table
  .delete(tableName)
  .accountName(storageAccountName)
  .connectionString(connString.connectionString)
  .execute();

// event hubs
az.eventhubs.namespace.list().execute();

az.eventhubs.namespace
  .create(ehNamespaceName, resourceGroupName)
  .location("canadacentral")
  .sku("Basic")
  .execute();

az.eventhubs.namespace.list().execute();
az.eventhubs.namespace
  .show()
  .name(ehNamespaceName)
  .resourceGroup(resourceGroupName)
  .execute();

az.eventhubs.eventhub.list(ehNamespaceName, resourceGroupName).execute();
az.eventhubs.eventhub
  .create(ehName, ehNamespaceName, resourceGroupName)
  .messageRetention("1")
  .execute();

az.eventhubs.eventhub.list(ehNamespaceName, resourceGroupName).execute();
az.eventhubs.eventhub
  .show()
  .name(ehName)
  .resourceGroup(resourceGroupName)
  .namespaceName(ehNamespaceName)
  .execute();

az.eventhubs.eventhub.authorization.rule
  .list(ehName, ehNamespaceName, resourceGroupName)
  .execute();

az.eventhubs.eventhub.authorization.rule
  .create(ehName, "my-new-rule", ehNamespaceName, resourceGroupName, "Listen")
  .execute();

az.eventhubs.eventhub.authorization.rule
  .list(ehName, ehNamespaceName, resourceGroupName)
  .execute();

az.eventhubs.eventhub.authorization.rule
  .show()
  .name("my-new-rule")
  .eventhubName(ehName)
  .namespaceName(ehNamespaceName)
  .resourceGroup(resourceGroupName)
  .execute();

az.eventhubs.eventhub.authorization.rule
  .delete()
  .name("my-new-rule")
  .eventhubName(ehName)
  .namespaceName(ehNamespaceName)
  .resourceGroup(resourceGroupName)
  .execute();

// keyvaults
az.keyvault.list().execute();
az.keyvault
  .create(resourceGroupName)
  .name(vaultName)
  .sku("standard")
  .location("canadacentral")
  .execute();
az.keyvault.list().execute();
az.keyvault.show().name(vaultName).resourceGroup(resourceGroupName).execute();

const activeKeyName = `activekeyname${uniqueId}`;
const newStorageAccountName = `newstorage${uniqueId}`;
az.keyvault.storage.list(vaultName).execute();
az.keyvault.storage
  .add(activeKeyName, newStorageAccountName, resourceGroupName, vaultName)
  .autoRegenerateKey(false)
  .execute();

az.keyvault.storage.list(vaultName).execute();
az.keyvault.storage
  .show()
  .name(newStorageAccountName)
  .vaultName(vaultName)
  .execute();

az.keyvault.secret.list().vaultName(vaultName).execute();
az.keyvault.secret.set("secretname", vaultName).value("asdf").execute();
az.keyvault.secret.list().vaultName(vaultName).execute();
az.keyvault.secret.show().name("secretname").vaultName(vaultName).execute();
az.keyvault.secret.delete().vaultName(vaultName).name("secretname").execute();
az.keyvault.secret.show_deleted().vaultName(vaultName).execute();

const referencedKey = az.keyvault.secret
  .set("referenced", vaultName)
  .value("asdf")
  .execute();

az.keyvault.key.list().vaultName(vaultName).execute();
az.keyvault.key
  .create()
  .vaultName(vaultName)
  .name("keyname")
  .size("2048")
  .curve("P-256")
  .execute();
az.keyvault.key.list().vaultName(vaultName).execute();
az.keyvault.key.show().name("keyname").vaultName(vaultName).execute();
az.keyvault.key.delete().vaultName(vaultName).name("keyname").execute();

// app config
az.appconfig.list().execute();
az.appconfig
  .create("canadacentral", appConfigName, resourceGroupName)
  .sku("Free")
  .execute();

az.appconfig.list().execute();
az.appconfig.show(appConfigName).resourceGroup(resourceGroupName).execute();
az.appconfig.kv
  .set("key1")
  .name(appConfigName)
  .value("value")
  .yes("")
  .execute();

az.appconfig.kv
  .set_keyvault("key2", referencedKey.id as string)
  .name(appConfigName)
  .yes("")
  .execute();

az.appconfig.kv.show("key1").name(appConfigName).execute();
az.appconfig.kv.show("key2").name(appConfigName).execute();
az.appconfig.kv.list().name(appConfigName).execute();
az.appconfig.kv.list().name(appConfigName).resolveKeyvault(true).execute();

// ad stuff
az.ad.user.list().execute();
const newPassword = crypto.randomBytes(24).toString("base64");

const newUser = az.ad.user
  .create(
    uniqueId,
    newPassword,
    `${uniqueId}@mattwaggonerdevfacto.onmicrosoft.com`
  )
  .execute();
az.ad.user.list().execute();
az.ad.user.show(newUser.objectId as any).execute();
az.ad.user.get_member_groups(newUser.objectId as any).execute();

az.ad.group.list().execute();
const newGroup = az.ad.group
  .create("customgroupname", "custommailname")
  .execute();
const newParentGroup = az.ad.group
  .create("parentGroup", "parentGroup")
  .execute();

az.ad.group.member
  .add(newGroup.objectId as any, newUser.objectId as any)
  .execute();
az.ad.group.member.list(newGroup.objectId as any).execute();

az.ad.group.member
  .add(newParentGroup.objectId as any, newGroup.objectId as any)
  .execute();

az.ad.group.list().execute();

az.ad.group.show(newGroup.objectId as any).execute();

az.ad.group.get_member_groups(newGroup.objectId as any).execute();

az.ad.user.get_member_groups(newUser.objectId as any).execute();

// role assignments
az.role.definition.list().execute();
az.role.definition.create("myroledef").execute();
az.role.definition.list().execute();

az.role.assignment.list().execute();
az.role.assignment
  .create("Owner")
  .assignee(newUser.objectId as any)
  .scope(webapp.id)
  .execute();

az.role.assignment.list().execute();
az.role.assignment.list_changelogs().execute();

// accounts
az.account.list().execute();
const subscription = az.account.show().execute();
az.account.set(subscription.id as any).execute();

az.group.delete(resourceGroupName).yes("").execute();
