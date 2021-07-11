import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { IState } from "../../store/initial-state";
import { fetchTenants, setUser } from "../../actions/user";
import { User } from "../../models/user";
import { UserTenant } from "../../models/user-tenant";
import { Hyperlink } from "../../atoms/hyperlink";

const userMock = { userId: "123", firstName: "Aaron", lastName: "Sisler" };

export const ManagerContainer = (): JSX.Element => {
  const user: User = useSelector((state: IState) => state.user);
  const dispatch = useDispatch();
  const loadUser = async () => dispatch(setUser(userMock));
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
