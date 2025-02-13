import React, { useState } from "react";
import { useRequest } from "../../../Modules/useRequest";
import toast from "react-hot-toast";
import BigGreenButton from "../../../components/BigGreenButton";
import { Loader } from "lucide-react";

const Feedback = ({ onClose, onSend, id }) => {
  const [feedback, setFeedback] = useState("");

  const [sendFeedback, sendLoading, setSendLoading, sendError, setSendError] =
    useRequest();

  const handleFeedback = async () => {
    if (!feedback) {
      toast.error("Enter a feeedback");
      return;
    }

    setSendLoading(true);
    const res = await sendFeedback(`report/send_feedback/${id}`, "POST", {
      feedback: feedback,
    });

    const data = await res.json();

    if (res.ok) {
      toast.success("Feedback sent successfully!");
      setFeedback("");
      if (feedback.trim()) {
        onSend(feedback);
        onClose();
      }
    } else {
      console.log(data);
      toast.error(sendError.msg);
    }

    setSendLoading(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-opacity-50 backdrop-blur-sm">
      <div className="shadow-3xl w-10/12 rounded-lg border bg-white p-6 md:w-3/5">
        <textarea
          className="mt-4 h-40 w-full resize-none rounded-md border p-3 focus:outline-none"
          placeholder="Write your feedback here..."
          value={feedback}
          rows={5}
          onChange={(e) => setFeedback(e.target.value)}
        />

        <div className="mt-2 flex items-center justify-end gap-3">
          {sendLoading && <Loader className="animate-spin text-navBg2" />}
          <button
            className="rounded-full bg-gray-200 px-3 py-1 font-medium transition hover:bg-gray-300"
            onClick={onClose}
          >
            Cancel
          </button>
          <BigGreenButton
            disabled={!feedback.trim()}
            action={handleFeedback}
          >
            Submit
          </BigGreenButton>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
