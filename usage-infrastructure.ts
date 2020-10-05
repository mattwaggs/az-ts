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
const connStrings = az.storage.account
  .show_connection_string()
  .resourceGroup(resourceGroupName)
  .name(storageAccountName)
  .execute();

// create the function app
const functionApp = az.functionapp
  .create("az-ts-usage-recorder", resourceGroupName, storageAccountName)
  .runtime("dotnet")
  .consumptionPlanLocation("canadacentral")
  .functionsVersion("3")
  .assignIdentity("[system]")
  .execute();

az.functionapp.config.appsettings
  .set()
  .name("az-ts-usage-recorder")
  .resourceGroup(resourceGroupName)
  .settings(`TableStorage:ConnectionString=${connStrings.connectionString}`)
  .execute();
