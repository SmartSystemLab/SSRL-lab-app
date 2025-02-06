import React, { useState } from "react";
import InputError from "../../../components/InputError";
import { Check } from "lucide-react";

const TaskLabel = ({
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

  const handleSubmit = () => {
    console.log(value);
  };
  return (
    <div className="relative flex items-center">
      <input
        type={inputType || "text"}
        value={value}
        id={htmlFor}
        defaultValue={defaultVal}
        onChange={onChange}
        onBlur={onBlur}
        required={required}
        className={`h-10 w-full appearance-none rounded-lg border border-black px-3 py-1 capitalize text-slate-900 opacity-100 focus:text-black focus:opacity-100 focus:outline-none ${inputClassName}`}
        placeholder={placeholder}
        name={htmlFor}
      />
      <button
        className="absolute inset-y-0 right-0 cursor-pointer pr-3 text-center"
        onClick={handleSubmit}
      >
        <Check color="green" />
      </button>
      {isError && <InputError> {errorMessage} </InputError>}
    </div>
  );
};

export default TaskLabel;
