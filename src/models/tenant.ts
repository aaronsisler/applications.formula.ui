import { TenantApplication } from "./tenant-application";

export interface Tenant {
  tenantId?: string;
  tenantName?: string;
  applications?: TenantApplication[];
}
