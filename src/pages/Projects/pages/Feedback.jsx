import { useState } from "react";
import { useLocation } from "react-router-dom";
import BigGreenButton from "../../../components/BigGreenButton";
import { useRequest } from "../../../Modules/useRequest";
import toast from "react-hot-toast";
import { Loader } from "lucide-react";
import { X } from "lucide-react";

const Feedback = () => {
  const location = useLocation();
  const { id, name } = location.state;

  const [
    sendFeedback,
    sendLoading,
    setSendLoading,
    sendError,
    setSendError,
  ] = useRequest();

  const [message, setMessage] = useState("");

  const handleFeedback = async () => {
    if (!message) {
      toast.error("Enter a feeedback");
      return;
    }

    setSendLoading(true);
    const res = await sendFeedback(
      `project/send_feedback/${id}`,
      "POST",
      {
        feedback: message,
      },
    );

    const data = await res.json();

    if (res.ok) {
      toast.success("Feedback sent successfully!");
      setMessage("");
    } else {
      console.log(data)
      toast.error(sendError.msg);
    }

    setSendLoading(false);
  };

  return (
    <div className="mx-auto h-full w-full overflow-y-auto bg-white px-6 py-6">
      <h1 className="mb-4 text-2xl font-medium text-gray-800">
        Give a Feedback About <span className="text-navBg2">{name}</span>
      </h1>
      <hr className="mb-6 mt-1 bg-black" />
      <div className="space-y-4">
        {/* Announcement Details */}
        <label
          htmlFor="message"
          className="block text-lg font-medium text-gray-700"
        >
          Feedback Details
        </label>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="block w-full resize-none rounded-lg border border-slate-900 px-4 py-3 opacity-35 focus:opacity-100 focus:outline-none"
          placeholder="Feedback details"
          rows={5}
          required
        />
        <div className="mt-6 flex flex-col gap-4 transition-all duration-200 ease-in sm:flex-row">
          <BigGreenButton action={handleFeedback}>
            Send Feedback
          </BigGreenButton>
          {sendLoading && <Loader className="animate-spin" size={24} />}
        </div>
      </div>
    </div>
  );
};

export default Feedback;
