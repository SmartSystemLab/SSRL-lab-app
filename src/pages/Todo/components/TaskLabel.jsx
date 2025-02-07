import React, { useState } from "react";
import InputError from "../../../components/InputError";
import BigGreenButton from "../../../components/BigGreenButton";
import { Check, Strikethrough } from "lucide-react";

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
  status,
  edit,
  handleEdit,
}) => {
  const handleSubmit = () => {
    // console.log(value);
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
        className={`h-10 w-full appearance-none rounded-lg px-3 py-1 capitalize text-slate-900 opacity-100 focus:text-black focus:opacity-100 focus:outline-none ${inputClassName} ${status && "italic line-through"} ${(edit && "border border-black") || "pointer-events-none select-none"}`}
        placeholder={placeholder}
        name={htmlFor}
      />
      {/* <button
        className={`right-0 mx-2 cursor-pointer rounded-full bg-[#053F05F0] p-1 px-3 py-1 text-center text-white hover:scale-105 ${edit || "hidden"}`}
        onClick={(handleSubmit, handleEdit)}
      >
        Save
      </button> */}
      {/* <Button
        className={`right-0 mx-2 cursor-pointer rounded-full bg-green-600 p-1 text-center text-white scale-50 ${edit || "hidden"}`}
        text="save"
        onClick={ handleEdit}
      /> */}
      <BigGreenButton
        children="save"
        action={(handleSubmit, handleEdit)}
        className={`mx-3 ${edit || "hidden"}`}
      />
      {isError && <InputError> {errorMessage} </InputError>}
    </div>
  );
};

export default TaskLabel;
