import { useLocation } from "react-router-dom"
import BigGreenButton from '../../../components/BigGreenButton'


const SingleRequests = () => {
  const location = useLocation()
  const request = location.state

  return (
    <div className=" px-6 py-4 min-h-screen overflow-y-auto">
      <h2 className="text-2xl font-semibold capitalize">{request.type} Request</h2>
      <hr className="bg-black mt-1" />
      <div className="mt-8 mx-auto my-12 flex flex-col gap-3 rounded-xl border px-10 py-8 shadow-lg fromLeft">

        <h2 className='font-medium text-xl'>{request.Title}</h2>


        {request.type === 'equipment' && (
          <div className="">
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

            <div className="mt-2">
              <h2 className="text-lg font-medium">Purpose</h2>
              <p className="text-gray-700 text-base px-4 py-1 rounded-md  w-full break-words">
                {request.purpose}
              </p>
            </div>
          </div>
        )}
        {request.type === 'leave' && (
          <>
            <div className="">
              <h3 className="text-lg font-medium">Leave Details</h3>
              <table className="w-full table-auto border-separate border border-gray-500 rounded-md mt-2">
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

              <div className="mt-2">
                <h2 className="text-lg font-medium">Purpose</h2>
                <p className="mt-2 text-gray-700 text-base p-4rounded-md  w-full break-words">
                  {request.purpose}
                </p>
              </div>
            </div>


          </>
        )}
        {request.type === 'others' && (
          <div>
            <h2 className="text-lg font-medium">Description:</h2>
            <p className="text-gray-700 text-base px-4 py-1 rounded-md w-full break-words">
              {request.description}
            </p>
          </div>
        )}

        <div>
          <h2 className="text-lg font-medium "> Recipients</h2>
          <ul className="list-disc marker:text-navBg2 list-outside ml-2 px-4">
            {request.receipients.map((recipient) => (
              <li key={recipient} className="break-words ">
                {recipient}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex gap-2">

          <BigGreenButton
            type="submit"
          >
            Approve
          </BigGreenButton>
          <BigGreenButton
            type="submit"
            className="bg-red-700"
          >
            Decline
          </BigGreenButton>
        </div>
      </div>
    </div>
  )
}

export default SingleRequests