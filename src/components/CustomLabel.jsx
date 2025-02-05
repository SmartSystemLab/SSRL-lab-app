import React from "react";
import InputError from "./InputError.jsx";

const CustomLabel = ({
    children,
  htmlFor,
  labelText,
  inputType,
  value,
  defaultVal,
  onChange,
  onBlur,
  isError,
  errorMessage,
  inputClassName,
  labelClassName,
  placeholder,
  required,
  name,
}) => {
  return (
    <div>
      <label htmlFor={htmlFor} className={`${labelClassName} flex gap-2 items-center font-medium`}>
        {children}
      </label>
      <input
        type={inputType || "text"}
        value={value}
        id={htmlFor}
        defaultValue={defaultVal}
        onChange={onChange}
        onBlur={onBlur}
        required={required}
        className={`h-10 w-full appearance-none rounded-lg border border-slate-900 px-3 py-1 text-slate-900 opacity-35 focus:text-black focus:opacity-100 focus:outline-none ${inputClassName}`}
        placeholder={placeholder}
        name={htmlFor}
      />
      {isError && <InputError> {errorMessage} </InputError>}
    </div>
  );
};

export default CustomLabel;
