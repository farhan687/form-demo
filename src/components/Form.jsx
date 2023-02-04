import React from "react";
import InputFieldInternal from "./InputFieldInternal";
import { useDynamicForm } from "../hooks/useDynamicForm";

const Form = ({ children, onSubmit }) => {
  const { formChildren, useFormData } = useDynamicForm({ children });

  const { control, register, handleSubmit, formState } = useFormData || {};

  if (!formChildren) {
    return <p>No form children found</p>;
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {Object.entries(formChildren).map(([name, extraProps]) => (
        <InputFieldInternal
          key={name}
          register={register}
          name={name}
          control={control}
          error={formState.errors[name]?.message}
          {...extraProps}
        />
      ))}
      <input type="submit" />
    </form>
  );
};

export default Form;
