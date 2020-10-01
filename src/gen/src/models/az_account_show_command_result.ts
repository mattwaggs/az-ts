export interface az_account_show_command_result {
  environmentName: string;
  homeTenantId: string;
  id: string;
  isDefault: boolean;
  managedByTenants: ManagedByTenants;
  name: string;
  state: string;
  tenantId: string;
  user: User;
}

export interface User {
  name: string;
  type: string;
}

export interface ManagedByTenants {
}