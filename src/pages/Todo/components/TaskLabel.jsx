import React, { useState } from "react";
import InputError from "../../../components/UI/InputError";
import BigGreenButton from "../../../components/UI/BigGreenButton";
import { useRequest } from "../../../hooks/useRequest";
import toast from "react-hot-toast";
import Spinner from "../../../components/UI/Spinner";

const TaskLabel = ({
  value,
  onChange,
  inputClassName,
  placeholder,
  checked,
  edit,
  handleEdit,
  id,
}) => {
  const [editRequest, editLoading, setEditLoading, editError, setEditError] =
    useRequest();

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("Okay");
    setEditLoading(true);
    if (!value) {
      toast.error("No changes made");
      setEditLoading(false);
      return;
    }
    const res = await editRequest(`todo/edit/${id}`, "PATCH", {
      todo: value,
    });
    const data = await res.json();

    if (res.ok) {
      toast.success(data.message);
      handleEdit();
    } else {
      toast.error(data.message);
    }

    setEditLoading(false);
  };

  return (
    <form className={`relative flex items-center w-full`} onSubmit={handleSubmit}>
      <input
        value={value}
        onChange={onChange}
        className={`h-10 w-full appearance-none rounded-lg px-3 py-1 capitalize text-slate-900 opacity-100 focus:text-black focus:opacity-100 focus:outline-none ${inputClassName} ${checked && "italic line-through"} ${edit ? "border border-zinc-500" : "pointer-events-none select-none"} `}
        placeholder={placeholder}
      />

      {
        <div className="flex items-center mx-3">
         { edit && <BigGreenButton
            type={"submit"}
          >
            Save
          </BigGreenButton>}
          {editLoading && <Spinner />}
        </div>}
      
    </form>
  );
};

export default TaskLabel;
