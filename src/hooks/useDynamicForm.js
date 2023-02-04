import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

export const useDynamicForm = ({ children }) => {
  const [schema, setSchema] = useState(yup.object().required());
  const [formChildren, setFormChildren] = useState(null);
  const useFormData = useForm({
    resolver: yupResolver(schema),
  });

  /**
   * On component mount: iterate over children to prepare schema and formData
   */
  useEffect(() => {
    const newFormChildren = {};
    const newSchema = {};
    React.Children.forEach(children, (child) => {
      const { name, validationRule, ...extra } = child.props;
      newFormChildren[name] = { name, ...extra };
      newSchema[name] = validationRule;
    });

    const finalSchema = yup.object(newSchema).required();

    setSchema(finalSchema);
    setFormChildren(newFormChildren);
  }, []);

  return {
    schema,
    formChildren,
    useFormData,
  };
};
