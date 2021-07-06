import React from "react";

import { Hyperlink } from "../../atoms/hyperlink";

export interface ITenantContainer {
  tenantId?: string;
}

const TenantContainer = ({ tenantId }: ITenantContainer): JSX.Element => {
  return (
    <div>
      <h1>Tenant Page</h1>
      <p>Tenant Id: {tenantId}</p>
      <p>
        <Hyperlink title="Back to Manager Page" href="/manager" />
      </p>
    </div>
  );
};

export default TenantContainer;
