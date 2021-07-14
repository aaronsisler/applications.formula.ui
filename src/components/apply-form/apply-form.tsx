import React from "react";
import { useForm } from "react-hook-form";
import { NameInputField } from "../input-fields/name-input-field";
import { ApplicationField } from "../../models/application-field";
import { InputFieldComponentMapper } from "../../utils/input-field-component-mapper";

interface IApplyForm {
  applicationFields?: ApplicationField[];
}

const ApplyForm = ({ applicationFields }: IApplyForm): JSX.Element => {
  const {
    register,
    handleSubmit,
    formState: { isDirty, isValid }
  } = useForm({
    mode: "onBlur"
  });

  const onSubmit = (data: any) => console.log(data);
  return (
    <div className="apply-form">
      <p>Is Dirty: {`${isDirty}`}</p>
      <p>Is Valid: {`${isValid}`}</p>
      <form className="apply-form__form" onSubmit={handleSubmit(onSubmit)}>
        {applicationFields?.map((applicationField: ApplicationField) => (
          <React.Fragment key={applicationField.applicationFieldId}>
            {InputFieldComponentMapper.getInputField(
              applicationField,
              register(applicationField.inputFieldName)
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

export { ApplyForm };
