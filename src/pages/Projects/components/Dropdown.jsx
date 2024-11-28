import { useState } from 'react'
import { FaEllipsisV } from 'react-icons/fa';
import Edit from './../../../assets/Edit.svg'
import { IoNotificationsOutline } from "react-icons/io5"
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import { FaRegCircle } from "react-icons/fa";
import Remove from './../../../assets/Remove.svg'
const Dropdown = () => {
    const [isDropOpen, setIsDropOpen] = useState(false)
    const toggleDrop = () => setIsDropOpen(!isDropOpen)

    return (
        <div style={{ position: 'absolute', top: '10px', right: '8px' }} className=''>
            <div className='relative'>
                <button onClick={toggleDrop} className='dropdown'>

                    <FaEllipsisV className=" text-lg text-black" />
                </button>
                {isDropOpen && (
                    <div className="absolute top-8 right-0 mt-2 z-50 font-medium bg-white border rounded shadow-lg transition-all ease-in duration-300" style={{ width: 'max-content' }}>
                        <div className="py-1">
                            <button className="flex items-center gap-2 w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                <img src={Edit} alt="Edit" className="w-4 h-4" />
                                <span>Edit Project</span>
                            </button>
                            <button className="flex items-center w-full gap-2 px-4 py-2 text-sm text-red-600 hover:bg-red-50">
                                <img src={Remove} alt="Delete" className="w-4 h-4" />
                                <span>Delete Project</span>
                            </button>
                            <button className="flex items-center w-full gap-2 px-4 py-2 text-sm  text-green-700 hover:bg-green-100">
                                <IoCheckmarkCircleOutline className='w-4 h-4' />
                                <span>Mark as complete</span>
                            </button>
                            <button className="flex items-center w-full gap-2 px-4 py-2 text-sm text-yellow-700 hover:bg-yellow-100">
                                <FaRegCircle className='w-4 h-4' />
                                <span>Mark as incomplete</span>
                            </button>
                            <button className="flex items-center w-full gap-2 px-4 py-2 text-sm text-black hover:bg-gray-100">
                                <IoNotificationsOutline className='w-4 h-4' />
                                <span>Make announcement</span>
                            </button>
                        </div>
                    </div>
                )}

            </div >
        </div>
    )
}
export default Dropdown