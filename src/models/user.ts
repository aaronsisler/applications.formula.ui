import { UserTenant } from "./user-tenant";

export interface User {
  userId?: string;
  isOnboarded: boolean;
  firstName?: string;
  lastName?: string;
  email?: string;
  tenants?: UserTenant[];
}
