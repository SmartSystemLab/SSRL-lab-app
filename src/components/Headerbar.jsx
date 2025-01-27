import SearchBar from "../components/SearchBar.jsx";
import Navarrow from "../assets/Navarrow.svg";
import { Link, useNavigate } from "react-router-dom";
import { IoNotificationsOutline } from "react-icons/io5";
import { RxAvatar } from "react-icons/rx";
import { FaBars } from "react-icons/fa6";
import { ArrowLeft } from "lucide-react";

const Headerbar = ({ toggleSideNav, isSideNavOpen }) => {
  const navigate = useNavigate();
  return (
    <div
      className={`fixed left-0 right-0 top-0 flex h-[62px] items-center justify-between border-b bg-white px-4 md:px-8 lg:ml-64`}
    >
      <div className="text-logo lg:hidden">
        <button onClick={toggleSideNav} className="cursor-pointer">
          {!isSideNavOpen && <FaBars className="h-5 w-5" />}
        </button>
      </div>
      <div className="flex w-3/4 items-center gap-2">
        <div className="flex h-7 w-7 cursor-pointer items-center justify-center rounded-full bg-logo p-1 transition-all duration-200 hover:scale-125 hover:transition-transform">
          <ArrowLeft className=" " color="white" onClick={() => navigate(-1)} />
        </div>
        <SearchBar />
      </div>
      <div className="flex gap-2">
        <Link to={`/home/dashboard/notifications`}>
          <IoNotificationsOutline className="h-7 w-7 cursor-pointer transition-all duration-200 hover:scale-125 hover:transition-transform" />
        </Link>
        <Link to={`/home/dashboard/user-profile`}>
          <RxAvatar className="h-7 w-7 cursor-pointer transition-all duration-200 hover:scale-125 hover:transition-transform" />
        </Link>
      </div>
    </div>
  );
};

export default Headerbar;
