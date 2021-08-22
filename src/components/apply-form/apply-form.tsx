import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";

import { submitApplication } from "../../actions/application";
import { ApplicationField } from "../../models/application-field";
import { InputFieldComponentMapper } from "../../utils/input-field-component-mapper";
import { ApplicationSubmission } from "../../models/application-submission";
import { ApplicationFieldData } from "../../models/application-field-data";
import { ApplicationState, AppState } from "../../store";
import { Button } from "../../atoms/button";

export const ApplyForm = (): JSX.Element => {
  const {
    register,
    handleSubmit,
    formState: { isValid }
  } = useForm({
    mode: "onChange"
  });
  const { data: application, isSubmitting }: ApplicationState = useSelector(
    (state: AppState) => state.application
  );
  const { applicationId, applicationFields } = application || {};

  const dispatch = useDispatch();

  const onSubmit = (data: any) => {
    const applicationFieldData: ApplicationFieldData[] = [];

    applicationFields?.forEach((applicationField: ApplicationField) => {
      applicationFieldData.push({
        applicationFieldId: applicationField.applicationFieldId,
        applicationFieldData: data[applicationField.inputFieldName]
      });
    });

    const applicationSubmission: ApplicationSubmission = {
      applicationId,
      applicationFieldData
    };

    return dispatch(submitApplication(applicationSubmission));
  };

  return (
    <div className="apply-form px-10 py-16 ">
      <form className="apply-form__form">
        {application?.applicationFields?.map(
          (applicationField: ApplicationField) => (
            <React.Fragment key={applicationField.applicationFieldId}>
              {InputFieldComponentMapper.getInputField(
                applicationField,
                register
              )}
              <br />
            </React.Fragment>
          )
        )}
        <br />
        <Button
          isDisabled={!isValid || isSubmitting}
          onClick={handleSubmit(onSubmit)}
          text="Submit Application"
        />
      </form>
    </div>
  );
};
