import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { IState } from "../../store/initial-state";
import { clearTenant, fetchTenant } from "../../actions/tenant";
import { Hyperlink } from "../../atoms/hyperlink";
import { Tenant } from "../../models/tenant";

export interface ITenantContainer {
  tenantId?: string;
}

const TenantContainer = ({ tenantId }: ITenantContainer): JSX.Element => {
  const tenant: Tenant = useSelector((state: IState) => state.tenant);
  const dispatch = useDispatch();
  const unloadTenant = async () => dispatch(clearTenant());
  const loadTenant = async () => dispatch(fetchTenant(tenantId));

  useEffect(() => {
    loadTenant();
  }, [dispatch]);

  return (
    <div>
      <h1>Tenant Page</h1>
      <p>Tenant Id: {tenant?.tenantId}</p>
      <p>Tenant Name: {tenant?.tenantName}</p>
      <p>
        <Hyperlink
          title="Back to Manager Page"
          href="/manager"
          onClick={unloadTenant}
        />
      </p>
    </div>
  );
};

export default TenantContainer;
