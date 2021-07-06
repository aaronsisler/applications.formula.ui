import { UserTenant } from "./user-tenant";

export interface User {
  userId?: string;
  firstName?: string;
  lastName?: string;
  tenants?: UserTenant[];
}
