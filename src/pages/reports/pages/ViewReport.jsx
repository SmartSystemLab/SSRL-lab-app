import { useState } from "react";
import { useLocation } from "react-router-dom";
import Feedback from "../components/Feedback";
import BigGreenButton from "../../../components/BigGreenButton";
import ListDisplay from "../components/ListDisplay";
import { useRequest } from "../../../Modules/useRequest";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import {Loader} from 'lucide-react'

const ViewReport = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const report = location.state;
  const {
    _id,
    sender,
    type,
    stack,
    duration,
    report_type,
    completed,
    ongoing,
    next,
    summary,
    title,
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
      const res = await deleteRequest(`report/delete/${_id}`, "DELETE");
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
      <h2 className="text-2xl font-semibold capitalize">{type} Report</h2>
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
                {duration}
              </p>
            )}
          </div>

          <button
            className="w-fit cursor-pointer rounded-full bg-navBg2 px-4 py-1 font-medium capitalize text-white hover:scale-105"
            onClick={() => setShowPopup(true)}
          >
            Give feeback
          </button>
          <div className="flex items-center gap-4">
            {deleteLoading && <Loader className="text-navBg2 animate-spin"/>}
            <button
              className="w-fit cursor-pointer rounded-full bg-navBg2 px-4 py-1 font-medium capitalize text-white hover:scale-105"
              onClick={handleDelete}
            >
              Delete
            </button>
          </div>
        </div>
        {showPopup && <Feedback onClose={() => setShowPopup(false)} id={_id} />}

        {report_type === "activity" && (
          <div className="mt-4 space-y-5">
            <ListDisplay Text="Completed Tasks" content={completed} />
            <ListDisplay Text="Ongoing Tasks" content={ongoing} />
            <ListDisplay
              Text={`Tasks for next ${duration.slice(0, -2)}`}
              content={next}
            />
          </div>
        )}

        {report_type === "project" && (
          <div className="mt-4">
            <h2 className="text-xl font-semibold capitalize">{title}</h2>
            <p className="mt-2 w-full whitespace-normal break-words rounded-md p-4 text-base text-gray-700">
              {summary}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ViewReport;
