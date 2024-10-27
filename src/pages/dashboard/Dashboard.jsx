import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Dashboxes from '../../components/Dashboxes';

// import Write from '../../assets/Write.svg'
import { RiDeleteBin6Line } from "react-icons/ri";
import { MdClose } from 'react-icons/md';





const Dashboard = () => {
    const [projects, setProjects] = useState([]);
    const [reports, setReports] = useState([]);
    const [requests, setRequests] = useState([]);
    const [todos, setTodos] = useState([]);
    const [notifications, setNotifications] = useState([])
    const [loading, setLoading] = useState(true);


    useEffect(() => {

        setTimeout(() => {
            setProjects([{ id: 1, name: 'Project 1' }, { id: 2, name: 'Project 2' }]);
            setLoading(false);
            setReports([{ id: 1, name: 'Report 1' }, { id: 2, name: 'Report 2' }]);
            setRequests([{ id: 1, name: 'Request 1' }, { id: 2, name: 'Request 2' }]);
            setTodos([{ id: 1, task: 'Complete the proposal' }, { id: 2, task: 'Fix dashboard bug' }]);
            setNotifications([
                { "id": 1, "message": "New project assigned" },
                { "id": 2, "message": "Meeting at 3 PM" },
                { "id": 3, "message": "Task due tomorrow" }
            ]
            )
        }, 1000);
    }, []);

    const dismissNotification = (id) => {
        setNotifications(notifications.filter((notification) => notification.id !== id));
    };


    // set the date
    const today = new Date();
    const getOrdinalSuffix = (day) => {
        if (day > 3 && day < 21) return 'th';
        switch (day % 10) {
            case 1: return 'st';
            case 2: return 'nd';
            case 3: return 'rd';
            default: return 'th';
        }
    };
    const day = today.getDate();
    const month = today.toLocaleString('default', { month: 'long' });
    const year = today.getFullYear();
    const formattedDate = `${day}${getOrdinalSuffix(day)}, ${month} ${year}`;

    return (
        <div className='p-5 w-full max-h-screen object-cover flex flex-1 gap-12 justify-start items-start overflow-y-auto'>

            <div className='w-1/2 space-y-6 py-2 px-6 '>

                <div className='space-y-2 bg-white shadow-lg border-2 p-6 rounded-md text-center'>
                    <h2 className=' text-navBg2 font-semibold text-3xl'>Welcome Madara!</h2>
                    <p className=' text-navBg2 text-xl font-normal'>{formattedDate} </p>
                    <p className=' text-[#357932] text-lg font-bold'>Let's do the best today</p>
                </div>

                {/* projects */}
                <Dashboxes header='Projects' boxData={projects} nav='projects' />
                {/* reports */}
                <Dashboxes header='Reports' boxData={reports} nav='submissions' />
                {/* requests */}
                <Dashboxes header='Requests' boxData={requests} nav='submissions' />


            </div>

            <div className=' py-2 w-1/2'>

                {/* to dos */}
                <div className='w-full border-2 p-2 shadow-md rounded-md'>
                    <h2 className='text-2xl font-bold text-center mb-2'>To-do list</h2>
                    <div className="flex space-x-2 mb-4">
                        <input
                            type="text"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            placeholder="Enter a new task"
                        />
                        <button

                            className="px-4 py-2 bg text-black bg-navBg1 rounded border font-medium"
                        >
                            Create
                        </button>
                    </div>
                    <ul className="space-y-2">
                        {todos.length > 0 ? (
                            todos.map((todo) => (
                                <li
                                    key={todo.id}
                                    className="flex justify-between items-center bg-gray-100 px-4 py-2 rounded-md"
                                > <div className='flex justify-center gap-2'>
                                        <input
                                            type="checkbox"
                                            // checked
                                            // onChange={}
                                            className="mr-3"
                                        />
                                        <span>{todo.task}</span>
                                    </div>

                                    <button className="text-red-500 hover:text-red-700"> <RiDeleteBin6Line /></button>

                                </li>
                            ))
                        ) : (
                            <p>Loading to-do items...</p>
                        )}
                    </ul>
                    <Link to={`/home/to-do`}
                        className=' text-logo block text-base text-right p-2 rounded font-medium  hover:bg-purple-300 hover:text-white transition-all duration-300 ease-in'
                    >See All</Link>
                </div>

                {/* notifications */}
                <div className='p-2 border-2 bg-white shadow-md mt-6 rounded-md h-full'>
                    <h2 className='text-xl font-bold text-center mb-3'>Notifications</h2>
                    <ul className="space-y-2">
                        {notifications.length > 0 ? (
                            notifications.map((notification) => (
                                <li
                                    key={notification.id}
                                    className="flex justify-between items-center bg-gray-100 px-4 py-2 rounded-md"
                                >
                                    <span>{notification.message}</span>
                                    <button
                                        onClick={() => dismissNotification(notification.id)}
                                        className="text-red-500 hover:text-red-700"
                                    >
                                        <MdClose />
                                    </button>
                                </li>
                            ))
                        ) : (
                            <p>No notifications</p>
                        )}
                    </ul>
                    <Link to={`/home/notifications`}
                        className=' text-logo block text-base text-right p-2 rounded font-medium  hover:bg-purple-300 hover:text-white transition-all duration-300 ease-in'
                    >See All</Link>
                </div>
            </div>

        </div>
    )
}

export default Dashboard