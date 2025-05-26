import { useRequest } from "@hooks/useRequest";
import { Loader, Plus } from "lucide-react";
import React from "react";

const AddLink = ({id}) => {
  const [linkRequest, linkLoading, setLinkLoading, linkError, setLinkError] =
    useRequest();

    const handleSendLink = async  () => {
        const res = await linkRequest(`project/submit_doc/${id}`, 'PATCH')
    }



  return (
    <div>
      <div className="mb-2 flex w-fit items-center gap-6 rounded-lg border p-2 hover:opacity-70" onClick={handleSendLink}>
        <h3 className="ml-2 font-medium">Links</h3>
        <div className="w-fit rounded-full bg-logo p-[2px]">
          {linkLoading ? <Loader color="white" className="animate-spin" /> : <Plus color="white" />}
        </div>
      </div>
    </div>
  );
};

export default AddLink;
