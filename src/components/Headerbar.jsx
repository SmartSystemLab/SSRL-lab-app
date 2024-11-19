import SearchBar from '../components/SearchBar.jsx'
import Navarrow from '../assets/Navarrow.svg'
import { Link, useNavigate } from "react-router-dom"
import { IoNotificationsOutline } from "react-icons/io5"
import { RxAvatar } from "react-icons/rx"

const Headerbar = () => {
    const navigate = useNavigate()
    return (
        < div className='flex md:justify-between justify-center w-full items-center px-6 max-w-screen-2xl' >
            <div className='flex gap-2 items-center w-3/4'>
                <img
                    src={Navarrow} alt="back"
                    className='w-7 h-7 hover:scale-125 transition-all duration-200 hover:transition-transform '
                    onClick={() => navigate(-1)}
                />
                <SearchBar />
            </div>
            <div className='flex gap-2'>
                <Link to={`/home/dashboard/notifications`}>
                    <IoNotificationsOutline className='w-7 h-7 cursor-pointer hover:scale-125 transition-all duration-200 hover:transition-transform' />

                </Link>
                <Link to={`/home/dashboard/profile`}>
                    <RxAvatar className='w-7 h-7 cursor-pointer hover:scale-125 transition-all duration-200 hover:transition-transform' />
                </Link>
            </div>

        </div >
    )
}

export default Headerbar