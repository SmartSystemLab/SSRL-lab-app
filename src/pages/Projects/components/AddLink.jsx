import Spinner from "@components/UI/Spinner";
import { useRequest } from "@hooks/useRequest";
import { Loader, Plus } from "lucide-react";
import React, { useState } from "react";
import toast from "react-hot-toast";

const AddLink = ({ id, setLink, link }) => {
  const [linkRequest, linkLoading, setLinkLoading, linkError, setLinkError] =
    useRequest();
  const [inputOpen, setInputOpen] = useState(false);
  const [enteredLink, setEnteredLink] = useState();
  const [enteredLinkTitle, setEnteredLinkTitle] = useState();

  const handleSendLink = async () => {
    const payload = {title: enteredLinkTitle, link: enteredLink}
    setLinkLoading(true);
    const res = await linkRequest(`project/submit_link/${id}`, "PATCH", payload);
    const data = await res.json();

    if (res.ok) {
      toast.success("Doc uploaded successfully");
      setLink([...link, payload]);
    } else {
      toast.error(data.message);
    }
    setLinkLoading(false);
  };

  return (
    <div>
      <div
        className="mb-2 flex w-fit items-center gap-6 rounded-lg border p-2 hover:opacity-70"
        onClick={() => setInputOpen(!inputOpen)}
      >
        <h3 className="ml-2 font-medium">Links</h3>
        <div className="w-fit rounded-full bg-logo p-[2px]">
          <Plus color="white" />
        </div>
      </div>

      <div className={`fromTop items-center justify-between ${inputOpen ? 'flex' : 'hidden'}`}>
        <div>
            <div className="flex gap-3 items-center"> 
                <label htmlFor="linkTitle" className="font-medium">Tille: </label>
                <input
                  type="text"
                  placeholder="Enter link title"
                  className="max-w-4/5 mb-2 rounded-xl border border-[#111111] px-4 py-1 text-[#000000] ring-black focus:outline-none focus:ring-1"
                  value={enteredLinkTitle}
                  onChange={(e) => setEnteredLinkTitle(e.target.value)}
                />
            </div>
            <div className="flex gap-3 items-center">
                <label htmlFor="linkTitle" className="font-medium">Link: </label>
                <input
                  type="text"
                  placeholder="Enter link"
                  className="max-w-4/5 my-2 rounded-xl border border-[#111111] px-4 py-1 text-[#000000] ring-black focus:outline-none focus:ring-1"
                  value={enteredLink}
                  onChange={(e) => setEnteredLink(e.target.value)}
                />
            </div>
        </div>
        <button
          className="rounded-lg bg-navBg2 px-4 py-2 text-white"
          onClick={handleSendLink}
        >
          {linkLoading ? (
            <Loader color="white" className="animate-spin" />
          ) : (
            "Submit"
          )}
        </button>
      </div>
    </div>
  );
};

export default AddLink;
