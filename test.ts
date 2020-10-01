import { az } from "./src/gen/az";

import crypto from "crypto";

const uniqueId = crypto.randomBytes(4).toString("hex");

const resourceGroupName = `matt-test-rg-${uniqueId}`;
const appServicePlanName = `matt-test-plan-${uniqueId}`;
const webappName = `matt-test-${uniqueId}`;
const storageAccountName = `test${uniqueId}`;
const tableName = `table{uniqueId}`;
const ehNamespaceName = `name{uniqueId}`;
const ehName = `eh{uniqueId}`;

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
az.webapp.create(webappName, appServicePlanName, resourceGroupName).execute();

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

az.webapp.deployment.slot.list().execute();
az.webapp.deployment.slot
  .create(webappName, resourceGroupName, "staging")
  .execute();

az.webapp.deployment.slot.list().execute();
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

az.storage.account
  .show_connection_string()
  .name(storageAccountName)
  .resourceGroup(resourceGroupName)
  .execute();

az.storage.table.list().accountName(storageAccountName).execute();

az.storage.table.create(tableName).accountName(storageAccountName).execute();
az.storage.table.list().accountName(storageAccountName).execute();
az.storage.table
  .generate_sas(tableName)
  .accountName(storageAccountName)
  .execute();

az.storage.table.delete(tableName).accountName(storageAccountName).execute();

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
  .execute();

az.eventhubs.eventhub.list(ehNamespaceName, resourceGroupName).execute();
az.eventhubs.eventhub
  .show()
  .name(ehName)
  .namespaceName(ehNamespaceName)
  .execute();

az.eventhubs.eventhub.authorization.rule
  .list(ehName, ehNamespaceName, resourceGroupName)
  .execute();

az.eventhubs.eventhub.authorization.rule
  .create(ehName, "my-new-rule", ehNamespaceName, resourceGroupName, "Manage")
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

// app config

// keyvaults

// role assignments

// ad stuff

// accounts

// subscriptions

const appConfigName = "az-ts-app-config";
const vaultName = "usage-recorder-keyvault";

// create the resource group
az.group.create("canadacentral", resourceGroupName).execute();

// create the storage account and table storage for recording the
// reported data structures

az.storage.table
  .create("datatypelogs")
  .accountName(storageAccountName)
  .execute();

// get the connection string
const connectionString = az.storage.account
  .show_connection_string()
  .resourceGroup(resourceGroupName)
  .name(storageAccountName)
  .execute();

// create an app config
//az.appconfig
//  .create("canadacentral", appConfigName, resourceGroupName)
//  .sku("Free")
//  .execute();
//
//// create the keyvault if it doesn't exist
//az.keyvault
//  .create(resourceGroupName)
//  .name(vaultName)
//  .location("canadacentral")
//  .enableSoftDelete(false)
//  .execute();
//
//// store the connection string in keyvault
//const secret = az.keyvault.secret
//  .set("TableStorage-ConnectionString", vaultName)
//  .value(connectionString["connectionString"] as string)
//  .execute();
//
//// add a refernce to the secret in app config
//az.appconfig.kv
//  .set_keyvault("TableStorage:ConnectionString", secret.id as string)
//  .name(appConfigName)
//  .execute();

// create the function app

//az.keyvault
//  .set_policy(vaultName)
//  .secretPermissions("list", "get")
//  .objectId(functionApp["identity"]["principalId"] as string)
//  .resourceGroup(resourceGroupName)
//  .execute();
