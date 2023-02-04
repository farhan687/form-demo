import { Controller } from "react-hook-form";
import Input from "@mui/material/Input";

const InputFieldInternal = ({
  control,
  name,
  error,
  register,
  placeholder,
  uiType,
  ...extra
}) => (
  <>
    {uiType === "mui" ? (
      <div>
        <Controller
          {...register(name)}
          {...extra}
          control={control}
          placeholder={placeholder}
          render={({ field }) => <Input {...field} placeholder={placeholder} />}
        />
        <p>{error}</p>
      </div>
    ) : (
      <div>
        <label>{placeholder}</label>
        <input {...register(name)} {...extra} />
        {error && <p>{error}</p>}
      </div>
    )}
  </>
);

export default InputFieldInternal;
