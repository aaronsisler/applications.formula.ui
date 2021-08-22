import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { fetchUsersTenants } from "../../actions/user";
import { filingCabinet } from "../../assets/svgs";
import { Hyperlink } from "../../atoms/hyperlink";
import { Card } from "../../components/card";
import { Loading } from "../../components/loading";
import { UserTenant } from "../../models/user-tenant";
import { AppState } from "../../store";
import { UserState } from "../../store/user";

export const ManagerContainer = (): JSX.Element => {
  const { data: user, isLoading }: UserState = useSelector(
    (state: AppState) => state.user
  );
  const dispatch = useDispatch();
  const loadUsersTenants = async () => dispatch(fetchUsersTenants());

  useEffect(() => {
    loadUsersTenants();
  }, [dispatch]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="container px-6 py-4 mx-auto">
      <div className="grid gap-6 mb-8 md:grid-cols-2 lg:grid-cols-3">
        {user?.tenants?.map((userTenant: UserTenant) => (
          <Hyperlink
            key={userTenant.tenantId}
            href={`/tenant/${userTenant.tenantId}`}
          >
            <Card content={userTenant.tenantName} icon={filingCabinet} />
          </Hyperlink>
        ))}
      </div>
    </div>
  );
};
