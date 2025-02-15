import React, { useState } from "react";
import InputError from "../../../components/InputError";
import BigGreenButton from "../../../components/BigGreenButton";
import { Check, Strikethrough } from "lucide-react";

const TaskLabel = ({
  value,
  onChange,
  inputClassName,
  placeholder,
  checked,
  edit,
  handleEdit
}) => {

  const handleSubmit = (event) => {
    event.preventDefault()
    // console.log(event.target)
    // console.log(value);
    handleEdit()
  };

  return (
    <form
      className={`relative flex items-center`}
      onSubmit={handleSubmit}
    >
      <input
        value={value}
        onChange={onChange}
        className={`h-10 w-full appearance-none rounded-lg px-3 py-1 capitalize text-slate-900 opacity-100 focus:text-black focus:opacity-100 focus:outline-none ${inputClassName} ${checked && "italic line-through"} ${edit ? " border border-black" : "pointer-events-none select-none"} `}
        placeholder={placeholder}
      />

      <BigGreenButton
        children="save"
        className={`mx-3 ${edit || "hidden"}`}
        type={"submit"}
      />
    </form>
  );
};

export default TaskLabel;
