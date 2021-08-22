import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Select from "react-select";
import cn from "classnames";

import { fetchTenants } from "../../actions/tenant";
import { addUserTenant, fetchUsers } from "../../actions/user";
import { Loading } from "../../components/loading";
import { Tenant } from "../../models/tenant";
import { User } from "../../models/user";
import { AdminState, AppState } from "../../store";
import { UserTenant } from "../../models/user-tenant";

const baseOption = { label: "", value: "" };
const buttonClassBase = "px-4 py-2 border rounded-md bg-indigo-500 text-white";
const buttonClassHover =
  "hover:bg-white hover:text-indigo-500 border-indigo-500";

const buttonClassDisabled = "opacity-50 bg-blue-900 cursor-not-allowed";

export const AssignTenantContainer = (): JSX.Element => {
  const { isLoading, tenants, users }: AdminState = useSelector(
    (state: AppState) => state.admin
  );

  if (isLoading) {
    return <Loading />;
  }

  const [selectedTenantOption, setTenantOption] = useState(baseOption);
  const [selectedUserOption, setUserOption] = useState(baseOption);
  const dispatch = useDispatch();
  const includeUserTenant = async (userTenant: UserTenant) =>
    dispatch(addUserTenant(userTenant));
  const loadTenants = async () => dispatch(fetchTenants());
  const loadUsers = async () => dispatch(fetchUsers());

  useEffect(() => {
    loadTenants();
    loadUsers();
  }, [dispatch]);

  const assignUserTenant = () => {
    const userTenant: UserTenant = {
      tenantId: selectedTenantOption.value,
      tenantName: selectedTenantOption.label,
      userId: selectedUserOption.value
    };
    includeUserTenant(userTenant);
  };

  const handleTenantChange = (option: any) => {
    setTenantOption(option);
  };

  const handleUserChange = (option: any) => {
    setUserOption(option);
  };

  const mapTenants = (tenants: Tenant[]) =>
    tenants.map((tenant: Tenant) => ({
      value: tenant.tenantId || "",
      label: tenant.tenantName || ""
    }));

  const mapUsers = (users: User[]) =>
    users.map((user: User) => ({
      value: user.userId,
      label: `${user.firstName} ${user.lastName} : ${user.email}`
    }));

  return (
    <div className="pt-5 px-2 max-w-5xl">
      <div className="">
        <Select
          value={selectedUserOption}
          onChange={(option) => handleUserChange(option)}
          options={mapUsers(users)}
          placeholder="Select user"
        />
        <Select
          value={selectedTenantOption}
          onChange={(option) => handleTenantChange(option)}
          options={mapTenants(tenants)}
          placeholder="Select tenant"
        />
      </div>
      <button
        onClick={assignUserTenant}
        className={cn(
          buttonClassBase,
          buttonClassHover,
          selectedUserOption?.value && selectedTenantOption?.value
            ? ""
            : buttonClassDisabled
        )}
      >
        Assign Tenant To User
      </button>
    </div>
  );
};
