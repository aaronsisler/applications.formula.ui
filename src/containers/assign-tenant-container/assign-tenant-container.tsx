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
import { Button } from "../../atoms/button";

const baseOption = { label: "", value: "" };

export const AssignTenantContainer = (): JSX.Element => {
  const { isLoading, tenants, users }: AdminState = useSelector(
    (state: AppState) => state.admin
  );
  const dispatch = useDispatch();
  const [selectedTenantOption, setTenantOption] = useState(baseOption);
  const [selectedUserOption, setUserOption] = useState(baseOption);

  useEffect(() => {
    loadTenants();
    loadUsers();
  }, [dispatch]);

  if (isLoading) {
    return <Loading />;
  }

  const includeUserTenant = async (userTenant: UserTenant) =>
    dispatch(addUserTenant(userTenant));
  const loadTenants = async () => dispatch(fetchTenants());
  const loadUsers = async () => dispatch(fetchUsers());

  const assignUserTenant = () => {
    const userTenant: UserTenant = {
      tenantId: selectedTenantOption.value,
      tenantName: selectedTenantOption.label,
      userId: selectedUserOption.value
    };
    includeUserTenant(userTenant).then(clearOptions);
  };

  const clearOptions = () => {
    setTenantOption(baseOption);
    setUserOption(baseOption);
  };

  const handleTenantChange = (option: any) => {
    setTenantOption(option);
  };

  const handleUserChange = (option: any) => {
    setUserOption(option);
  };

  const mapTenants = (tenants: Tenant[] = []) =>
    tenants.map((tenant: Tenant) => ({
      value: tenant.tenantId || "",
      label: tenant.tenantName || ""
    }));

  const mapUsers = (users: User[] = []) =>
    users.map((user: User) => ({
      value: user.userId,
      label: `${user.firstName} ${user.lastName} : ${user.email}`
    }));

  return (
    <div className="pt-5 px-2 max-w-5xl">
      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div>
          <Select
            value={selectedUserOption}
            onChange={(option) => handleUserChange(option)}
            options={mapUsers(users)}
            placeholder="Select user"
          />
        </div>
        <div>
          <Select
            value={selectedTenantOption}
            onChange={(option) => handleTenantChange(option)}
            options={mapTenants(tenants)}
            placeholder="Select tenant"
          />
        </div>
      </div>
      <Button
        className="float-right"
        isDisabled={!selectedUserOption?.value || !selectedTenantOption?.value}
        onClick={assignUserTenant}
        text="Assign Tenant To User"
      />
    </div>
  );
};
