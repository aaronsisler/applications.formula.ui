import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { clearTenant, fetchTenant } from "../../actions/tenant";
import { paperScroll } from "../../assets/svgs";
import { Hyperlink } from "../../atoms/hyperlink";
import { Card } from "../../components/card";
import { Loading } from "../../components/loading";
import { TenantApplication } from "../../models/tenant-application";
import { AppState, TenantState } from "../../store";

export interface ITenantContainer {
  tenantId?: string;
}

export const TenantContainer = ({
  tenantId
}: ITenantContainer): JSX.Element => {
  const { data: tenant, isLoading }: TenantState = useSelector(
    (state: AppState) => state.tenant
  );
  const dispatch = useDispatch();
  const loadTenant = async () => dispatch(fetchTenant(tenantId));
  const unloadTenant = async () => dispatch(clearTenant());

  useEffect(() => {
    loadTenant();

    return () => {
      unloadTenant();
    };
  }, [dispatch]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="container px-6 py-4 mx-auto">
      <div className="grid gap-6 mb-8 md:grid-cols-2 lg:grid-cols-3">
        {tenant?.applications?.map((tenantApplication: TenantApplication) => (
          <Hyperlink
            key={tenantApplication.applicationId}
            href={`/applicants/${tenantApplication.applicationId}`}
          >
            <Card
              content={tenantApplication.applicationName}
              icon={paperScroll}
            />
          </Hyperlink>
        ))}
      </div>
    </div>
  );
};
