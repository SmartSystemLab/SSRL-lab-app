import { useState } from "react";
import { useLocation } from "react-router-dom";
import BigGreenButton from "../../../components/UI/BigGreenButton";
import { useRequest } from "../../../hooks/useRequest";
import toast from "react-hot-toast";
import { Loader } from "lucide-react";
import { X } from "lucide-react";

const Announcement = () => {
  const location = useLocation();
  const { id, name } = location.state;

  const [
    sendAnnouncememnt,
    sendLoading,
    setSendLoading,
    sendError,
    setSendError,
  ] = useRequest();

  const [message, setMessage] = useState("");

  const handleSendMessage = async (recipients) => {
    if (!message) {
      toast.error("Enter an announcement");
      return;
    }

    setSendLoading(true);
    const res = await sendAnnouncememnt(
      `project/send_announcement/${id}`,
      "POST",
      {
        receivers: recipients,
        announcement: message,
      },
    );

    const data = await res.json();

    if (res.ok) {
      toast.success("Announcement sent successfully!");
      setMessage("");
    } else {
      toast.error(sendError.msg);
    }

    setSendLoading(false);
  };

  return (
      <div className="mx-auto overflow-y-auto w-full h-full bg-white px-6 py-6">
        <h1 className="mb-4 text-2xl font-medium text-gray-800">
          Send an Announcement About <span className="text-navBg2">{name}</span>
        </h1>
        <hr className="mb-6 mt-1 bg-black" />
        <div className="space-y-4">
          {/* Announcement Details */}
          <label
            htmlFor="message"
            className="block text-lg font-medium text-gray-700"
          >
            Announcement Details
          </label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="block w-full resize-none rounded-lg border border-slate-900 px-4 py-3 opacity-35 focus:opacity-100 focus:outline-none"
            placeholder="Announcemnent details"
            rows={5}
            required
          />
          <div className="mt-6 flex flex-col gap-4 transition-all duration-200 ease-in sm:flex-row">
            <BigGreenButton action={() => handleSendMessage("all")}>
              Send to All
            </BigGreenButton>
            <BigGreenButton action={() => handleSendMessage("leads")}>
              Send to Leads
            </BigGreenButton>
            {sendLoading && <Loader className="animate-spin" size={24} />}
          </div>
        </div>
      </div>
  );
};

export default Announcement;
