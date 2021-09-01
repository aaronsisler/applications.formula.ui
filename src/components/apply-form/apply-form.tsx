import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";

import { submitApplication } from "../../actions/application";
import { ApplicationFormGroup } from "../../models/application-form-group";
import { ApplicationSubmission } from "../../models/application-submission";
import { ApplicationFieldData } from "../../models/application-field-data";
import { ApplicationState, AppState } from "../../store";
import { Button } from "../../atoms/button";
import { FormGroupComponentMapper } from "../../utils/form-group-component-mapper";

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
  const { applicationId, applicationFormGroups } = application || {};

  const dispatch = useDispatch();

  const onSubmit = (data: any) => {
    console.log(data);
    // const applicationFieldData: ApplicationFieldData[] = [];

    // applicationFormGroups?.forEach((applicationFormGroup: ApplicationFormGroup) => {
    //   applicationFieldData.push({
    //     applicationFieldId: applicationField.applicationFieldId,
    //     applicationFieldData: data[applicationField.inputFieldName]
    //   });
    // });

    // const applicationSubmission: ApplicationSubmission = {
    //   applicationId,
    //   applicationFieldData
    // };

    // return dispatch(submitApplication(applicationSubmission));
  };

  return (
    <div className="apply-form px-10 py-16 ">
      <form className="apply-form__form">
        {applicationFormGroups?.map(
          (applicationFormGroup: ApplicationFormGroup) => (
            <React.Fragment key={applicationFormGroup.applicationFormGroupId}>
              {FormGroupComponentMapper.getFormGroup(
                applicationFormGroup.formGroupType,
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
