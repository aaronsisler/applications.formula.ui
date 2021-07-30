import React from "react";

export interface IApplicationContainer {
  applicationId?: string;
}

export const ApplicationContainer = ({
  applicationId
}: IApplicationContainer): JSX.Element => {
  return (
    <div>
      <h1>Application Page</h1>
      <p>Application Id: {applicationId}</p>
      <p>This page will be for editing the application.</p>
    </div>
  );
};
