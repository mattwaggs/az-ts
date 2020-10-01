import { az } from "./src/gen/az";

const appConfigName = "az-ts-app-config";
const resourceGroupName = "az-ts-usage-recorder";
const storageAccountName = "kyrnevtriqifrncy";
const vaultName = "usage-recorder-keyvault";

// create the resource group
az.group.create("canadacentral", resourceGroupName).execute();

// create the storage account and table storage for recording the
// reported data structures
az.storage.account
  .create(storageAccountName, resourceGroupName)
  .kind("StorageV2")
  .sku("Standard_LRS")
  .location("canadacentral")
  .accessTier("Hot")
  .execute();

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
az.appconfig
  .create("canadacentral", appConfigName, resourceGroupName)
  .sku("Free")
  .execute();

// create the keyvault if it doesn't exist
az.keyvault
  .create(resourceGroupName)
  .name(vaultName)
  .location("canadacentral")
  .enableSoftDelete(false)
  .execute();

// store the connection string in keyvault
const secret = az.keyvault.secret
  .set("TableStorage-ConnectionString", vaultName)
  .value(connectionString["connectionString"] as string)
  .execute();

// add a refernce to the secret in app config
az.appconfig.kv
  .set_keyvault("TableStorage:ConnectionString", secret.id as string)
  .name(appConfigName)
  .execute();

// create the function app
const functionApp = az.functionapp
  .create("az-ts-usage-recorder", resourceGroupName, storageAccountName)
  .runtime("dotnet")
  .consumptionPlanLocation("canadacentral")
  .functionsVersion("3")
  .assignIdentity("[system]")
  .execute();

console.log(functionApp);
// give the function app permission
az.keyvault
  .set_policy(vaultName)
  .secretPermissions("list", "get")
  .objectId(functionApp["identity"]["principalId"] as string)
  .resourceGroup(resourceGroupName)
  .execute();
