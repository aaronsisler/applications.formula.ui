import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  clearTenant,
  fetchTenant,
  fetchApplications
} from "../../actions/tenant";
import { Hyperlink } from "../../atoms/hyperlink";
import { Tenant } from "../../models/tenant";
import { TenantApplication } from "../../models/tenant-application";
import { IState } from "../../store/initial-state";

export interface ITenantContainer {
  tenantId?: string;
}

const TenantContainer = ({ tenantId }: ITenantContainer): JSX.Element => {
  const tenant: Tenant = useSelector((state: IState) => state.tenant);
  const dispatch = useDispatch();
  const loadApplications = async () => dispatch(fetchApplications());
  const loadTenant = async () => dispatch(fetchTenant(tenantId));
  const unloadTenant = async () => dispatch(clearTenant());

  useEffect(() => {
    loadTenant().then(loadApplications);

    return () => {
      unloadTenant();
    };
  }, [dispatch]);

  return (
    <div>
      <h1>Tenant Page</h1>
      <p>
        <Hyperlink title="Back to Manager Page" href="/manager" />
      </p>
      <p>Tenant Id: {tenant?.tenantId}</p>
      <p>Tenant Name: {tenant?.tenantName}</p>
      {tenant?.applications?.map((tenantApplication: TenantApplication) => (
        <p key={tenantApplication.applicationId}>
          <Hyperlink
            title={`Application: ${tenantApplication.applicationName}`}
            href={`/application/${tenantApplication.applicationId}`}
          />
        </p>
      ))}
    </div>
  );
};

export default TenantContainer;
