import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { fetchTenants } from "../../actions/user";
import { Hyperlink } from "../../atoms/hyperlink";
import { UserTenant } from "../../models/user-tenant";
import { AppState } from "../../store";
import { UserState } from "../../store/user";

export const ManagerContainer = (): JSX.Element => {
  const { data: user }: UserState = useSelector(
    (state: AppState) => state.user
  );
  const dispatch = useDispatch();
  const loadTenants = async () => dispatch(fetchTenants());

  useEffect(() => {
    loadTenants();
  }, [dispatch]);

  return (
    <div>
      <h1>
        User: <span>{user?.firstName}</span>
      </h1>
      {user?.tenants?.map((userTenant: UserTenant) => (
        <p key={userTenant.tenantId}>
          <Hyperlink
            title={`Tenant ${userTenant.tenantName}`}
            href={`/tenant/${userTenant.tenantId}`}
          />
        </p>
      ))}
    </div>
  );
};
