import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { clearTenant, fetchTenant } from "../../actions/tenant";
import { Hyperlink } from "../../atoms/hyperlink";
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
    <div>
      <h1>Tenant Page</h1>
      <p>
        <Hyperlink title="Back to Manager Page" href="/manager" />
      </p>
      <p>Tenant Id: {tenant?.tenantId}</p>
      <p>Tenant Name: {tenant?.tenantName}</p>
      <p>Applicants</p>
      {tenant?.applications?.map((tenantApplication: TenantApplication) => (
        <p key={tenantApplication.applicationId}>
          <Hyperlink
            title={`Application: ${tenantApplication.applicationName}`}
            href={`/applicants/${tenantApplication.applicationId}`}
          />
        </p>
      ))}

      <p>Submit Application</p>
      {tenant?.applications?.map((tenantApplication: TenantApplication) => (
        <p key={tenantApplication.applicationId}>
          <Hyperlink
            title={`Application: ${tenantApplication.applicationName}`}
            href={`/apply/${tenantApplication.applicationId}`}
          />
        </p>
      ))}
    </div>
  );
};
