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
    <div className="flex justify-between w-full items-center md:px-0 px-4 max-w-screen-2xl ">
      <div className="text-logo lg:hidden">
        <button onClick={toggleSideNav} className="cursor-pointer">
          {!isSideNavOpen && <FaBars className="w-5 h-5" />}
        </button>
      </div>
      <div className="lg:flex gap-2 items-center w-3/4 hidden">
        {/* <img
                    src={Navarrow} alt="back"

                    className='w-7 h-7 hover:scale-125 transition-all duration-200 hover:transition-transform '
                    
                /> */}
                <div className='p-1 rounded-full bg-logo hover:scale-125 transition-all duration-200 hover:transition-transform w-7 h-7 cursor-pointer flex justify-center items-center'>
                    <ArrowLeft className=' ' color='white' onClick={() => navigate(-1)}/>
                </div>
                <SearchBar />
            </div>
            <div className='flex gap-2'>
                <Link to={`/home/dashboard/notifications`}>
                    <IoNotificationsOutline className='w-7 h-7 cursor-pointer hover:scale-125 transition-all duration-200 hover:transition-transform' />

                </Link>
                <Link to={`/home/dashboard/user-profile`}>
                    <RxAvatar className='w-7 h-7 cursor-pointer hover:scale-125 transition-all duration-200 hover:transition-transform' />
                </Link>
            </div>
            </div>)};

export default Headerbar;
