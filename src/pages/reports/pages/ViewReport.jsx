import { useState } from "react";
import { useLocation } from "react-router-dom";
import Feedback from "../components/Feedback";
import BigGreenButton from "../../../components/BigGreenButton";
import ListDisplay from "../components/ListDisplay";

const ViewReport = () => {
  const location = useLocation();
  const report = location.state;

  console.log(report);
  const [showPopup, setShowPopup] = useState(false);

  const handleSendFeedback = (feedbackText) => {
    console.log("Feedback sent:", feedbackText);
  };

  return (
    <div className="relative min-h-screen overflow-y-auto px-6 py-4">
      <h2 className="text-2xl font-semibold capitalize">
        {report.type} Report
      </h2>
      <hr className="mt-1 bg-black" />
      <div className="mx-auto mt-10 flex flex-col gap-5 rounded-xl border px-10 py-8 shadow-lg">
        <div className="flex flex-col items-start md:flex-row md:justify-between">
          <div className="space-y-3">
            <p className="flex gap-2">
              <span className="font-medium">Intern Name:</span>
              {report.sender.name}
            </p>
            <p className="flex gap-2">
              <span className="font-medium">Stack:</span>
              {report.stack}
            </p>
            {report.report_type === "activity" && (
              <p className="flex gap-2">
                <span className="font-medium">Duration:</span>
                {report.duration}
              </p>
            )}
          </div>

          <button
            className="w-fit cursor-pointer rounded-full bg-navBg2 px-4 py-1 font-medium capitalize text-white hover:scale-105"
            onClick={() => setShowPopup(true)}
          >
            Give feeback
          </button>
        </div>
        {showPopup && (
          <Feedback
            onSend={handleSendFeedback}
            onClose={() => setShowPopup(false)}
            id={report._id}
          />
        )}

        {report.report_type === "activity" && (
          <div className="mt-4 space-y-5">
            <ListDisplay Text="Completed Tasks" content={report.completed} />
            <ListDisplay Text="Ongoing Tasks" content={report.ongoing} />
            <ListDisplay
              Text={`Tasks for next ${report.duration.slice(0, -2)}`}
              content={report.next}
            />
          </div>
        )}

        {report.report_type === "project" && (
          <div className="mt-4">
            <h2 className="text-xl font-semibold capitalize">
              {report.title} Report
            </h2>
            <p className="mt-2 w-full whitespace-normal break-words rounded-md p-4 text-base text-gray-700">
              {report.summary}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ViewReport;
