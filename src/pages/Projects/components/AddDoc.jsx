import { Plus } from "lucide-react";
import React from "react";
import { useRef } from "react";
import { useRequest } from "../../../hooks/useRequest";
import { Loader } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";

const AddDoc = ({ id, sub, setSub }) => {
  const docRef = useRef();
  const [addRequest, addLoading, setAddLoading, addError, setAddError] =
    useRequest();

  const handleFileAdd = async (event) => {
    setAddLoading(true);
    const file = event.target.files[0];
    console.log(file);
    const formData = new FormData();

    formData.append("doc", file);

    const res = await addRequest(`project/submit_doc/${id}`, "PATCH", formData);
    const data = await res.json();
    
    if (res.ok) {
      toast.success("Doc uploaded successfully");
      setSub([...sub, data.submission])
    } else {
      toast.error(data.message);
    }
    setAddLoading(false);
  };

  return (
    <div
      className="group mb-2 flex w-fit items-center justify-start gap-6 rounded-lg border p-2 hover:opacity-70"
      onClick={() => {
        docRef.current.click();
      }}
    >
      <h3 className="ml-2 font-medium">Documents</h3>
      <div className="w-fit rounded-full bg-logo p-[2px] group-hover:rotate-90">
        <input
          type="file"
          className="hidden"
          ref={docRef}
          onChange={handleFileAdd}
          accept="file/*"
        />
        {addLoading ? (
          <Loader className="animate-spin" color="white" />
        ) : (
          <Plus color="white" className="group-hover:rotate-90" />
        )}
      </div>
    </div>
  );
};

export default AddDoc;
