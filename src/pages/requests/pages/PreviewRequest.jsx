import { useLocation, useNavigate } from 'react-router-dom';

const PreviewRequest = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const { title, activeOption, eqpName, quantity, description, purpose, leaveDates, selectedRecipients } = location.state || {};

    const handleEdit = () => {
        navigate('/home/requests/create', { state: location.state });
    };

    return (
        <div className="mt-8 px-6 py-4 min-h-screen overflow-y-auto">
            <h2 className="text-2xl font-semibold">Preview Request</h2>
            <hr className="bg-black mt-1" />
            <div className="mt-4">
                <h2 className='font-medium text-xl'>Title: {title}</h2>


                {activeOption === 'equipment' && (
                    <div className="mt-4">
                        <h3 className="text-lg font-medium">Equipment Details</h3>
                        <table className="md:w-1/2 w-full table-auto border-separate border border-gray-500 rounded-md mt-4">
                            <thead>
                                <tr>
                                    <th className="text-left py-2 px-4 border-r border-b border-gray-500 font-medium text-lg">Equipment Name</th>
                                    <th className="text-left py-2 px-4  border-b border-gray-500 font-medium text-lg">Quantity</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="py-2 px-4 border-r border-gray-500 text-lg">{eqpName}</td>
                                    <td className="py-2 px-4  text-lg">{quantity}</td>
                                </tr>
                            </tbody>
                        </table>
                        <h2 className="text-lg font-medium mt-2">Purpose</h2>
                        <p className="mt-2 text-gray-700 text-base p-4 border border-gray-300 rounded-md md:w-1/2 w-full break-words">
                            {purpose}
                        </p>
                    </div>
                )}
                {activeOption === 'leave' && (
                    <>
                        <div className="mt-4">
                            <h3 className="text-lg font-medium">Leave Details</h3>
                            <table className="md:w-1/2 w-full table-auto border-separate border border-gray-500 rounded-md mt-4">
                                <thead>
                                    <tr>
                                        <th className="text-left py-2 px-4 border-r border-b border-gray-500 font-medium text-lg">From</th>
                                        <th className="text-left py-2 px-4  border-b border-gray-500 font-medium text-lg">to</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="py-2 px-4 border-r border-gray-500 text-lg">
                                            {leaveDates.from ? new Date(leaveDates.from).toLocaleDateString() : "N/A"}
                                        </td>
                                        <td className="py-2 px-4 text-lg">
                                            {leaveDates.to ? new Date(leaveDates.to).toLocaleDateString() : "N/A"}
                                        </td>
                                    </tr>

                                </tbody>
                            </table>
                            <h2 className="text-lg font-medium mt-2">Purpose</h2>
                            <p className="mt-2 text-gray-700 text-base p-4 border border-gray-300 rounded-md md:w-1/2 w-full break-words">
                                {purpose}
                            </p>
                        </div>


                    </>
                )}
                {activeOption === 'others' && (
                    <>
                        <h2 className="text-lg font-medium mt-2">Description:</h2>
                        <p className="mt-2 text-gray-700 text-base p-4 border border-gray-300 rounded-md md:w-1/2 w-full break-words">
                            {description}
                        </p>
                    </>
                )}
                <ul className="list-decimal list-outside ml-2 space-y-1 pl-2">
                    <h2 className="text-lg font-medium mt-2"> Recipients</h2>
                    {selectedRecipients.map((recipient) => (
                        <li key={recipient} className="break-words">
                            {recipient}
                        </li>
                    ))}
                </ul>
                <button onClick={handleEdit} className="bg-logo text-white px-3 py-1 rounded-xl mt-4">go back to edit</button>
            </div>
        </div>
    );
};

export default PreviewRequest;
