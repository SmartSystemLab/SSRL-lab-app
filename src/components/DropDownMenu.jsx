import { useState } from 'react'
import { FaEllipsisV } from 'react-icons/fa';
import Edit from '../assets/Edit.svg'
import Remove from '../assets/Remove.svg'
import Suspend from '../assets/Suspend.svg'

const DropDownMenu = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    return (

        <div style={{ position: 'absolute', top: '10px', right: '8px' }}>
            <div className='relative'>
                <button onClick={toggleMenu} className='dropdown'>

                    <FaEllipsisV className=" text-lg text-white/75" />
                </button>
                {isMenuOpen && (
                    <div className="absolute top-10 right-0 mt-2 font-medium bg-white border rounded shadow-lg transition-all ease-in duration-300" style={{ width: 'max-content' }}>
                        <div className="py-1">

                            <button className="flex items-center gap-2 w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                <img src={Edit} alt="Edit" className="w-4 h-4 " />
                                <span>Edit</span>
                            </button>


                            <button className="flex items-center w-full gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                <img src={Suspend} alt="Suspend" className="w-4 h-4 " />
                                <span>Suspend</span>
                            </button>


                            <button className="flex items-center w-full gap-2 px-4 py-2 text-sm text-red-600 hover:bg-red-50">
                                <img src={Remove} alt="Delete" className="w-4 h-4 " />
                                <span>Delete</span>
                            </button>
                        </div>
                    </div>
                )}

            </div >
        </div>
    )
}

export default DropDownMenu