import React from "react";
import { useForm } from "react-hook-form";
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

export { ApplyForm };
