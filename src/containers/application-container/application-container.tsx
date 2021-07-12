import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { clearApplication, fetchApplication } from "../../actions/application";
import { Hyperlink } from "../../atoms/hyperlink";
import { Application } from "../../models/application";
import { ApplicationField } from "../../models/application-field";
import { IState } from "../../store/initial-state";
import { InputFieldComponentMapper } from "../../utils/input-field-component-mapper";

export interface IApplicationContainer {
  applicationId?: string;
}

export const ApplicationContainer = ({
  applicationId
}: IApplicationContainer): JSX.Element => {
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

  const inputFieldComponentMapper = new InputFieldComponentMapper();

  return (
    <div>
      <h1>Application Page</h1>
      <p>
        <Hyperlink title="Back to Tenant Page" href="/manager" />
      </p>
      <p>Application Id: {application?.applicationId}</p>
      <p>Application Name: {application?.applicationName}</p>
      {application?.applicationFields?.map(
        (applicationField: ApplicationField) => (
          <div key={applicationField.applicationFieldId}>
            {inputFieldComponentMapper.getInputField(
              applicationField.inputFieldType,
              () => ({})
            )}
          </div>
        )
      )}
    </div>
  );
};
