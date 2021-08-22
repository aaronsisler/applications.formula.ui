import { UserTenant } from "./user-tenant";
import { UserType } from "./user-type";

export interface User {
  userId: string;
  userType?: UserType;
  firstName?: string;
  lastName?: string;
  email?: string;
  tenants?: UserTenant[];
}
