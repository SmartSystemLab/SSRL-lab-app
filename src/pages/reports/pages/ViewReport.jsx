import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Feedback from "../components/Feedback";
import BigGreenButton from "../../../components/UI/BigGreenButton";
import ListDisplay from "../components/ListDisplay";
import { useRequest } from "../../../hooks/useRequest";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { Loader, Trash2 } from "lucide-react";

const ViewReport = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const report = location.state;
  const {
    report_id,
    sender,
    stack,
    report_details,
    report_type,
    title,
    submissions,
    feedback,
  } = report;

  const [
    deleteRequest,
    deleteLoading,
    setDeleteLoading,
    deleteError,
    setDeleteError,
  ] = useRequest();

  const [showPopup, setShowPopup] = useState(false);

  const handleDelete = async () => {
    setDeleteLoading(true);
    try {
      const res = await deleteRequest(`report/delete/${report_id}`, "DELETE");
      const data = await res.json();

      if (res.ok) {
        toast.success(data.message);
        setTimeout(() => {
          navigate(-1);
        }, 2000);
      } else {
        toast.error(data.message);
      }
    } catch {
      toast.error(deleteError.msg);
    }
    setDeleteLoading(false);
  };

  return (
    <div className="relative min-h-screen overflow-y-auto px-6 py-4">
      <h2 className="text-2xl font-semibold capitalize">
        {report_type} Report
      </h2>
      <hr className="mt-1 bg-black" />
      <div className="mx-auto mt-10 flex flex-col gap-5 rounded-xl border px-10 py-8 shadow-lg">
        <div className="flex flex-col items-start md:flex-row md:justify-between">
          <div className="space-y-3">
            <p className="flex gap-2">
              <span className="font-medium">Intern Name:</span>
              {sender.name}
            </p>
            <p className="flex gap-2">
              <span className="font-medium">Stack:</span>
              {stack}
            </p>
            {report_type === "activity" && (
              <p className="flex gap-2">
                <span className="font-medium">Duration:</span>
                {report_details.duration}
              </p>
            )}
          </div>

          <div className="flex gap-4">
            <BigGreenButton
              className=""
              action={() => {
                console.log("Okay");
                setShowPopup(true);
              }}
            >
              Give feeback
            </BigGreenButton>

            <Link
              to={`/home/reports/${report_id}/feedback`}
              state={{ feedback, title }}
              className="rounded-full border-2 border-logo p-2 px-4 font-medium hover:bg-logo hover:text-white"
            >
              See all feeback
            </Link>

            <div className="flex items-center gap-4">
              <Trash2 onClick={handleDelete} color="red" />
              {deleteLoading && <Loader className="animate-spin text-navBg2" />}
            </div>
          </div>
        </div>

        {showPopup && (
          <Feedback
            setShowPopup={setShowPopup}
            id={report_id}
          />
        )}

        {report_type === "activity" && (
          <div className="mt-4 space-y-5">
            <ListDisplay
              Text="Completed Tasks"
              content={report_details.completed}
            />
            <ListDisplay
              Text="Ongoing Tasks"
              content={report_details.ongoing}
            />
            <ListDisplay
              Text={`Tasks for next ${report_details.duration.slice(0, -2)}`}
              content={report_details.next}
            />
          </div>
        )}

        {report_type === "project" && (
          <div className="mt-4">
            <h2 className="text-xl font-semibold capitalize">{title}</h2>
            <p className="mt-2 w-full whitespace-normal break-words rounded-md p-4 text-base text-gray-700">
              {report_details.summary}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ViewReport;
