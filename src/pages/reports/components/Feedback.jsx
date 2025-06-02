import React, { useState } from "react";
import { useRequest } from "../../../hooks/useRequest";
import toast from "react-hot-toast";
import BigGreenButton from "../../../components/UI/BigGreenButton";
import { Loader } from "lucide-react";

const Feedback = ({ id, setShowPopup }) => {
  const [feedback, setFeedback] = useState("");
  const [sendFeedback, sendLoading, setSendLoading, sendError, setSendError] =
    useRequest();

  const handleFeedback = async () => {
    if (!feedback.trim()) {
      toast.error("Enter a feedback");
      return;
    }

    setSendLoading(true);

    const res = await sendFeedback(`report/send_feedback/${id}`, "POST", {feedback});
    const data = await res.json();

    if (res.ok) {
      toast.success("Feedback sent successfully!");
      setFeedback("");
      setShowPopup(false);
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
            onClick={() => setShowPopup(false)}
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
