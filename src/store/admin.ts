import { Tenant } from "../models/tenant";
import { User } from "../models/user";

export interface AdminState {
  isLoading: boolean;
  tenants?: Tenant[];
  users?: User[];
}
