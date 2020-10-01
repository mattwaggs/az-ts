export interface az_eventhubs_eventhub_create_command_result {
  captureDescription?: any;
  createdAt: string;
  id: string;
  location: string;
  messageRetentionInDays: number;
  name: string;
  partitionCount: number;
  partitionIds: PartitionIds;
  resourceGroup: string;
  status: string;
  type: string;
  updatedAt: string;
}

export interface PartitionIds {
  '0': string;
  '1': string;
  '2': string;
  '3': string;
}