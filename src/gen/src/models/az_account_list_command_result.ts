export interface az_account_list_command_result {
  '0': _0;
}

export interface _0 {
  cloudName: string;
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