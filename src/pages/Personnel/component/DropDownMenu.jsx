import { useState } from "react";
import { FaEllipsisV } from "react-icons/fa";
import { getSessionStorage } from "../../../Modules/getSessionStorage";
import { Edit, Loader, Loader2, LoaderCircle, Trash2, TriangleAlert, UserRoundCog, UserRoundPlus } from "lucide-react";
import { useRequest } from "../../../Modules/useRequest";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const DropDownMenu = ({ uid, role, suspended, profile }) => {
  const [setProfileRole, profileRole] = role
  const [suspend, setSuspend] = suspended
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const userRole = getSessionStorage("userRole", "");
  const [useAdminRequest, adminLoading, setAdminLoading] = useRequest()
  const [useLeadRequest, leadLoading, setLeadLoading] = useRequest();
  const [useDeleteRequest, deleteLoading, setDeleteLoading] = useRequest();
  const [useSuspendRequest, suspendLoading, setSuspendLoading] = useRequest();
  const navigate = useNavigate()

  const handleLead = async () => {
    const lead = profileRole === "Lead";
    setLeadLoading(true);
    const res = await useLeadRequest(`${profileRole !== "Lead" ? "add" : "remove"}_lead/${uid}`, "PATCH");
    const data = await res.json();

    if (res.ok) {
      setProfileRole(lead ? "Intern" : "Lead")
      toast.success(data.message);
    } else {
      toast.error(data.message);
    }
    setLeadLoading(false);
  };

  const handleAdmin = async () => {
    const admin = profileRole === "Admin"
    setAdminLoading(true)
    const res = await useAdminRequest(`${profileRole !== "Admin" ? "add" : "remove"}_admin/${uid}`, 'PATCH')
    const data = await res.json()

    if (res.ok) {
      setProfileRole(admin ? "Intern" : "Admin")
      toast.success(data.message)
    }
    else {
      toast.error(data.message)
    }
    setAdminLoading(false)
  }

  const handleDelete = async () => {
    setDeleteLoading(true);
    const res = await useDeleteRequest(
      `admin/delete_user/${uid}`,
      "PATCH"
    );
    const data = await res.json();

    if (res.ok) {
      toast.success(data.message);
      setTimeout(() => {
        navigate(-1)
      }, 2000);
    } else {
      toast.error(data.message);
    }
    setDeleteLoading(false);
  };

  const handleSuspend = async () => {
    setSuspendLoading(true);
    console.log(suspend)
    const res = await useSuspendRequest(`admin/${suspend === "True" ? "unsuspend" : "suspend"}_user/${uid}`, "PATCH");
    const data = await res.json();

    if (res.ok) {
      setSuspend(suspend === "False" ? "True" : "False")
      toast.success(data.message);
    } else {
      toast.error(data.message);
    }
    setSuspendLoading(false);
  };

  return (
    <div
      className={`absolute top-10 right-10 ${
        userRole !== "Intern" ? "block" : "hidden"
      }`}
    >
      <div className="relative">
        <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <FaEllipsisV color="white" size={20} />
        </button>
        {isMenuOpen && (
          <div className="absolute top-6 right-0 mt-2 z-50 font-medium bg-white border rounded shadow-lg transition-all ease-in duration-300 w-max">
            <div>
              <button
                className={`items-center gap-2 w-full px-4 py-2 text-sm text-zinc-700 hover:bg-gray-100 border-b flex`}
              >
                <Link to={`/home/personnel/edit/:id`} className="" state={profile}>
                  <Edit />
                  <p>Edit</p>
                </Link>
              </button>

              <button
                className="flex items-center w-full gap-2 px-4 py-2 text-sm text-zinc-700 hover:bg-green-50 border-b"
                onClick={handleLead}
              >
                <UserRoundPlus />
                {/* <span>Make a Lead</span> */}
                <span>
                  {profileRole !== "Lead" ? "Make a Lead" : "Remove Lead"}
                </span>

                {leadLoading && <Loader2 className="animate-spin" size={16} />}
              </button>

              {userRole !== "Lead" && (
                <>
                  <button
                    className="flex items-center w-full gap-2 px-4 py-2 text-sm hover:bg-green-50 border-b"
                    onClick={handleAdmin}
                  >
                    <UserRoundCog />
                    <span>
                      {profileRole !== "Admin"
                        ? "Make an Admin"
                        : "Remove Admin"}
                    </span>
                    {adminLoading && (
                      <Loader2 className="animate-spin" size={16} />
                    )}
                  </button>

                  <button
                    className="flex items-center w-full gap-2 px-4 py-2 text-sm text-zinc-700 hover:bg-yellow-50 border-b"
                    onClick={handleSuspend}
                  >
                    <TriangleAlert color="gold" />
                    <span>{suspend === "True" ? "Unsuspend" : "Suspend"}</span>
                    {suspendLoading && (
                      <Loader2 className="animate-spin" size={16} />
                    )}
                  </button>

                  <button
                    className="flex items-center w-full gap-2 px-4 py-2 text-sm text-red-600 hover:bg-red-50"
                    onClick={handleDelete}
                  >
                    <Trash2 color="red" />
                    <span>Delete</span>
                    {deleteLoading && (
                      <Loader2
                        className="animate-spin justify-self-end"
                        size={16}
                      />
                    )}
                  </button>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DropDownMenu;
