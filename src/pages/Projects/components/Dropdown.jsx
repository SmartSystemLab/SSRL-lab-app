import { useState } from "react";
import {
  Bell,
  CheckCircle,
  EditIcon,
  EllipsisVertical,
  Loader2,
  Trash2,
  XCircle,
} from "lucide-react";
import { useRequest } from "../../../Modules/useRequest";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Dropdown = ({ completed, id }) => {
  const [isDropOpen, setIsDropOpen] = useState(false);
  const { isCompleted, setIsCompleted } = completed;
  const [
    completeRequest,
    completeLoading,
    setCompleteLoading,
    completeError,
  ] = useRequest();
  const [
    deleteRequest,
    deleteLoading,
    setDeleteLoading,
    deleteError,
    setDeleteError,
  ] = useRequest();
  const navigate = useNavigate()

  const handleComplete = async () => {
    setCompleteLoading(true);
    try {
      const res = await completeRequest(
        `project/${isCompleted ? "incomplete" : "completed"}/${id}`,
        "PATCH"
      );
      const data = await res.json();

      if (res.ok) {
        setIsCompleted(!isCompleted);
        toast.success(data.message);
      } else {
        toast.error(data.message);
      }
    } catch {
        toast.error(completeError.msg)
    }
    setCompleteLoading(false);
  };

  const handleDelete = async () => {
    setDeleteLoading(true);
    try {
      const res = await deleteRequest(
        `project/delete/${id}`,
        "DELETE"
      );
      const data = await res.json();

      if (res.ok) {
        toast.success(data.message);
        setTimeout(() => {
            navigate(-1)
        }, 2000)
      } else {
        toast.error(data.message);
      }
    } catch {
      toast.error(deleteError.msg);
    }
    setDeleteLoading(false);
  };

  return (
    <div className="absolute top-[10px] right-2">
      <div className="relative">
        <button onClick={() => setIsDropOpen(!isDropOpen)} className="dropdown">
          <EllipsisVertical />
        </button>
        {isDropOpen && (
          <div className="absolute top-6 right-0 mt-2 z-50 font-medium bg-white rounded-lg shadow-lg transition-all ease-in duration-300 w-max border">
            <div>
              <button className="flex items-center gap-2 w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 border-b">
                <EditIcon />
                <span>Edit Project</span>
              </button>

              <div onClick={handleComplete}>
                {!isCompleted ? (
                  <button className="flex items-center w-full gap-2 px-4 py-2 text-sm  text-green-700 hover:bg-green-100 border-b">
                    <CheckCircle size={20} />
                    <span>Mark as complete</span>
                    {completeLoading && (
                      <Loader2 className="animate-spin" size={16} />
                    )}
                  </button>
                ) : (
                  <button className="flex items-center w-full gap-2 px-4 py-2 text-sm text-yellow-600 hover:bg-yellow-100 border-b">
                    <XCircle />
                    <span>Mark as incomplete</span>
                    {completeLoading && (
                      <Loader2 className="animate-spin" size={16} />
                    )}
                  </button>
                )}
              </div>

              <button className="flex items-center w-full gap-2 px-4 py-2 text-sm text-black hover:bg-gray-100 border-b">
                <Bell />
                <span>Make announcement</span>
              </button>

              <button
                className="flex items-center w-full gap-2 px-4 py-2 text-sm text-red-600 hover:bg-red-50 border-b"
                onClick={handleDelete}
              >
                <Trash2 />
                <span>Delete Project</span>
                {deleteLoading && (
                  <Loader2 className="animate-spin" size={16} />
                )}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default Dropdown;
