import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { fetchTenants, fetchUser } from "../../actions/user";
import { Hyperlink } from "../../atoms/hyperlink";
import { User } from "../../models/user";
import { UserTenant } from "../../models/user-tenant";
import { IState } from "../../store/initial-state";

const userMock = { userId: "123" };

export const ManagerContainer = (): JSX.Element => {
  const user: User = useSelector((state: IState) => state.user);
  const dispatch = useDispatch();
  const loadUser = async () => dispatch(fetchUser(userMock.userId));
  const loadTenants = async () => dispatch(fetchTenants());

  useEffect(() => {
    loadUser().then(loadTenants);
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
