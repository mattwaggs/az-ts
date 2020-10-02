export interface az_eventhubs_eventhub_create_command_result {
    captureDescription?: any;
    createdAt: string;
    id: string;
    location: string;
    messageRetentionInDays: number;
    name: string;
    partitionCount: number;
    partitionIds: PartitionId[];
    resourceGroup: string;
    status: string;
    type: string;
    updatedAt: string;
}
interface PartitionId {
    '0': string;
}
export {};
