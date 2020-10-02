export interface az_appservice_plan_update_command_result {
  freeOfferExpirationTime?: any;
  geoRegion: string;
  hostingEnvironmentProfile?: any;
  hyperV: boolean;
  id: string;
  isSpot: boolean;
  isXenon: boolean;
  kind: string;
  location: string;
  maximumElasticWorkerCount: number;
  maximumNumberOfWorkers: number;
  name: string;
  numberOfSites: number;
  perSiteScaling: boolean;
  provisioningState?: any;
  reserved: boolean;
  resourceGroup: string;
  sku: Sku;
  spotExpirationTime?: any;
  status: string;
  subscription: string;
  tags?: any;
  targetWorkerCount: number;
  targetWorkerSizeId: number;
  type: string;
  workerTierName?: any;
}

interface Sku {
  capabilities?: any;
  capacity: number;
  family?: any;
  locations?: any;
  name: string;
  size: string;
  skuCapacity?: any;
  tier: string;
}