export interface az_account_show_command_result {
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

export interface User {
  name: string;
  type: string;
}