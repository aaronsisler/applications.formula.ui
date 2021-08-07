import { Tenant } from "../models/tenant";

export interface TenantState {
  isLoading: boolean;
  data?: Tenant;
}
