import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { clearApplication, fetchApplication } from "../../actions/application";
import { Hyperlink } from "../../atoms/hyperlink";
import { ApplyForm } from "../../components/apply-form";
import { Application } from "../../models/application";
import { AppState } from "../../store";

export interface IApplyContainer {
  applicationId?: string;
}

export const ApplyContainer = ({
  applicationId
}: IApplyContainer): JSX.Element => {
  const application: Application = useSelector(
    (state: AppState) => state.application
  );

  const dispatch = useDispatch();
  const loadApplication = async () =>
    dispatch(fetchApplication(applicationId, true));
  const unloadApplication = async () => dispatch(clearApplication());

  useEffect(() => {
    loadApplication();

    return () => {
      unloadApplication();
    };
  }, [dispatch]);

  return (
    <div>
      <h1>Application Page</h1>
      <p>
        <Hyperlink
          title="Back to Tenant Page"
          href={`/tenant/${application?.tenantId}`}
        />
      </p>
      <p>Application Id: {application?.applicationId}</p>
      <p>Application Name: {application?.applicationName}</p>
      <ApplyForm
        applicationId={application?.applicationId}
        applicationFields={application?.applicationFields}
      />
    </div>
  );
};
