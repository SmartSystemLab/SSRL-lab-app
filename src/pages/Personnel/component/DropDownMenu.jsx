import { useState } from "react";
import { FaEllipsisV } from "react-icons/fa";
import Edit from "../../../assets/Edit.svg";
import Remove from "../../../assets/Remove.svg";
import Suspend from "../../../assets/Suspend.svg";
import Add from "../../../assets/Add.svg";
import { getSessionStorage } from "../../../Modules/getSessionStorage";

const DropDownMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const userRole = getSessionStorage("userRole", "");

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
                <img src={Edit} alt="Edit" className="w-4 h-4" />
                <p>Edit</p>
              </button>

              {userRole !== "Lead" && (
                <>
                  <button className="flex items-center w-full gap-2 px-4 py-2 text-sm text-zinc-700 hover:bg-gray-100 border-b">
                    <img src={Suspend} alt="Suspend" className="w-4 h-4" />
                    <span>Suspend</span>
                  </button>

                  <button className="flex items-center w-full gap-2 px-4 py-2 text-sm text-red-600 hover:bg-red-50 border-b">
                    <img src={Remove} alt="Delete" className="w-4 h-4" />
                    <span>Delete</span>
                  </button>
                </>
              )}

              <button className="flex items-center w-full gap-2 px-4 py-2 text-sm text-zinc-700 hover:bg-green-50 border-b">
                <img src={Add} alt="Suspend" className="w-4 h-4" />
                <span>Make Lead</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DropDownMenu;
