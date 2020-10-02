declare class UsageReporting {
    reportCommandResultDataStructure: (dataTypeName: string, emptyDataObject: Record<string, unknown>) => void;
    recursivelyStripDataForReporting: (jsonObject: any) => any;
    getAllUsage: () => Promise<any>;
}
declare const _default: UsageReporting;
export default _default;
