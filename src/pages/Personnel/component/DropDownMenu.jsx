import { useState } from "react";
import { FaEllipsisV } from "react-icons/fa";
import { getSessionStorage } from "../../../Modules/getSessionStorage";
import { Edit, Trash2, TriangleAlert, UserRoundCog, UserRoundPlus } from "lucide-react";
import { useRequest } from "../../../Modules/useRequest";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const DropDownMenu = ({uid}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const userRole = getSessionStorage("userRole", "");
  const [useAdminRequest] = useRequest()
  const navigate = useNavigate()

  const handleAdmin = async () => {
    const res = await useAdminRequest(`admin/add_lead/${uid}`, 'PATCH')
    const data = await res.json()

    if (res.ok) {
      toast.success(data.message)
      // navigate(-1)
    }
    console.log(res)
  }

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
        {/*Change icons later with lucide react */}
        {isMenuOpen && (
          <div className="absolute top-6 right-0 mt-2 z-50 font-medium bg-white border rounded shadow-lg transition-all ease-in duration-300 w-max">
            <div>
              <button
                className={`items-center gap-2 w-full px-4 py-2 text-sm text-zinc-700 hover:bg-gray-100 border-b flex`}
              >
                <Edit />
                <p>Edit</p>
              </button>

              {userRole !== "Lead" && (
                <>
                  <button className="flex items-center w-full gap-2 px-4 py-2 text-sm text-zinc-700 hover:bg-yellow-50 border-b">
                    <TriangleAlert color='gold' />
                    <span>Suspend</span>
                  </button>

                  <button className="flex items-center w-full gap-2 px-4 py-2 text-sm hover:bg-green-50 border-b" onClick={handleAdmin}>
                    <UserRoundCog />
                    <span>Make an Admin</span>
                  </button>
                </>
              )}

              <button className="flex items-center w-full gap-2 px-4 py-2 text-sm text-zinc-700 hover:bg-green-50 border-b">
                <UserRoundPlus />
                <span>Make a Lead</span>
              </button>

              {userRole !== "Lead" &&  <button className="flex items-center w-full gap-2 px-4 py-2 text-sm text-red-600 hover:bg-red-50 border-b">
                    <Trash2 color='red' />
                    <span>Delete</span>
                  </button>
}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DropDownMenu;
