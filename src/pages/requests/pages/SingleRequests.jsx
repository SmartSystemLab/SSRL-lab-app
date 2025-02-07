import { useLocation } from "react-router-dom"
import BigGreenButton from '../../../components/BigGreenButton'


const SingleRequests = () => {
  const location = useLocation()
  const request = location.state

  return (
    <div className="mt-2 px-6 py-4 min-h-screen overflow-y-auto">
      <h2 className="text-2xl font-semibold capitalize">{request.type} Request</h2>
      <hr className="bg-black mt-1" />
      <div className="mt-8 mx-auto my-12 flex flex-col gap-5 rounded-xl border px-10 py-8 shadow-lg">
        <h2 className='font-medium text-xl '>Title: {request.Title}</h2>


        {request.type === 'equipment' && (
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
                  <td className="py-2 px-4 border-r border-gray-500 text-lg">{request.equipmentName}</td>
                  <td className="py-2 px-4  text-lg">{request.equipmentQuantity}</td>
                </tr>
              </tbody>
            </table>
            <h2 className="text-lg font-medium mt-2">Purpose</h2>
            <p className="mt-2 text-gray-700 text-base p-4 border border-gray-300 rounded-md  w-full break-words">
              {request.purpose}
            </p>
          </div>
        )}
        {request.type === 'leave' && (
          <>
            <div className="mt-4">
              <h3 className="text-lg font-medium">Leave Details</h3>
              <table className="w-full table-auto border-separate border border-gray-500 rounded-md mt-4">
                <thead>
                  <tr>
                    <th className="text-left py-2 px-4 border-r border-b border-gray-500 font-medium text-lg">From</th>
                    <th className="text-left py-2 px-4  border-b border-gray-500 font-medium text-lg">to</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-2 px-4 border-r border-gray-500 text-lg">
                      {request.leaveDatesfrom}
                    </td>
                    <td className="py-2 px-4 text-lg">
                      {request.leaveDatesto}
                    </td>
                  </tr>

                </tbody>
              </table>
              <h2 className="text-lg font-medium mt-2">Purpose</h2>
              <p className="mt-2 text-gray-700 text-base p-4rounded-md  w-full break-words">
                {request.purpose}
              </p>
            </div>


          </>
        )}
        {request.type === 'others' && (
          <div>
            <h2 className="text-lg font-medium mt-2">Description:</h2>
            <p className="mt-2 text-gray-700 text-base p-4 rounded-md w-full break-words">
              {request.description}
            </p>
          </div>
        )}
        <ul className="list-decimal list-outside ml-2 space-y-1 pl-2">
          <h2 className="text-lg font-medium mt-2"> Recipients</h2>
          {request.receipients.map((recipient) => (
            <li key={recipient} className="break-words">
              {recipient}
            </li>
          ))}
        </ul>
        <BigGreenButton
          type="submit"
        >
          Approve
        </BigGreenButton>
      </div>
    </div>
  )
}

export default SingleRequests