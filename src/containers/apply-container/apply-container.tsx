import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { clearApplication, fetchApplication } from "../../actions/application";
import { Hyperlink } from "../../atoms/hyperlink";
import { ApplyForm } from "../../components/apply-form";
import { Application } from "../../models/application";
import { IState } from "../../store/initial-state";

export interface IApplyContainer {
  applicationId?: string;
}

export const ApplyContainer = ({
  applicationId
}: IApplyContainer): JSX.Element => {
  const application: Application = useSelector(
    (state: IState) => state.application
  );

  const dispatch = useDispatch();
  const loadApplication = async () => dispatch(fetchApplication(applicationId));
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
        <Hyperlink title="Back to Tenant Page" href="/manager" />
      </p>
      <p>Application Id: {application?.applicationId}</p>
      <p>Application Name: {application?.applicationName}</p>
      <ApplyForm applicationFields={application?.applicationFields} />
    </div>
  );
};
