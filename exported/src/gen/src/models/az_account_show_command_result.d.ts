export declare type az_account_show_command_result = az_account_show_command_result_item[];
interface az_account_show_command_result_item {
    environmentName: string;
    homeTenantId: string;
    id: string;
    isDefault: boolean;
    managedByTenants: any[];
    name: string;
    state: string;
    tenantId: string;
    user: User;
}
interface User {
    name: string;
    type: string;
}
export {};
