export type az_eventhubs_namespace_show_command_result = az_eventhubs_namespace_show_command_result_item[];

interface az_eventhubs_namespace_show_command_result_item {
  clusterArmId?: any;
  createdAt: string;
  encryption?: any;
  id: string;
  identity?: any;
  isAutoInflateEnabled: boolean;
  kafkaEnabled: boolean;
  location: string;
  maximumThroughputUnits: number;
  metricId: string;
  name: string;
  provisioningState: string;
  resourceGroup: string;
  serviceBusEndpoint: string;
  sku: Sku;
  tags: Tags;
  type: string;
  updatedAt: string;
  zoneRedundant: boolean;
}

interface Tags {
}

interface Sku {
  capacity: number;
  name: string;
  tier: string;
}