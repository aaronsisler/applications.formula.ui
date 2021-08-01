import React from "react";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";

import { submitApplication } from "../../actions/application";
import { ApplicationField } from "../../models/application-field";
import { InputFieldComponentMapper } from "../../utils/input-field-component-mapper";
import { ApplicationSubmission } from "../../models/application-submission";
import { ApplicationFieldData } from "../../models/application-field-data";

interface IApplyForm {
  applicationId?: string;
  applicationFields?: ApplicationField[];
}

export const ApplyForm = ({
  applicationFields,
  applicationId
}: IApplyForm): JSX.Element => {
  const {
    register,
    handleSubmit,
    formState: { isDirty, isValid }
  } = useForm({
    mode: "onBlur"
  });

  const dispatch = useDispatch();

  const onSubmit = (data: any) => {
    console.log(data);

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
    console.log(applicationSubmission);
    return dispatch(submitApplication(applicationSubmission));
  };

  return (
    <div className="apply-form">
      <p>Is Dirty: {`${isDirty}`}</p>
      <p>Is Valid: {`${isValid}`}</p>
      <form className="apply-form__form" onSubmit={handleSubmit(onSubmit)}>
        {applicationFields?.map((applicationField: ApplicationField) => (
          <React.Fragment key={applicationField.applicationFieldId}>
            {InputFieldComponentMapper.getInputField(
              applicationField,
              register
            )}
            <br />
          </React.Fragment>
        ))}
        <br />
        <button>Submit</button>
      </form>
    </div>
  );
};
