import { useLocation } from "react-router-dom";
import BigGreenButton from "../../../components/BigGreenButton";
import { formatDate } from "../../../Modules/funcs";

const SingleRequests = () => {
  const location = useLocation();
  const request = location.state;
  const {
    title,
    status,
    created_at,
    request_dtls,
    type,
    _id,
    sender,
    receipient,
  } = request;
  console.log(request);

  return (
    <div className="mt-2 min-h-screen overflow-y-auto px-6 py-4">
      <h2 className="text-2xl font-medium capitalize">{type} Request</h2>
      <hr className="mt-1 bg-black" />
      <div className="mx-auto my-12 mt-8 flex flex-col gap-5 rounded-xl border px-10 py-8 shadow-lg">
        <h2 className="text-xl font-medium">Title: {title}</h2>
        {type === "eqpt" && (
          <div className="mt-4">
            <h3 className="text-lg font-medium">Equipment Details</h3>
            <table className="mt-4 w-full table-auto border-separate rounded-md border border-gray-500 md:w-1/2 ">
              <thead>
                <tr>
                  <th className="border-b border-r border-gray-500 px-4 py-2 text-left text-lg font-medium">
                    Equipment Name
                  </th>
                  <th className="border-b border-gray-500 px-4 py-2 text-left text-lg font-medium">
                    Quantity
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border-r border-gray-500 px-4 py-2 text-lg capitalize">
                    {request_dtls.name}
                  </td>
                  <td className="px-4 py-2 text-lg">{request_dtls.quantity}</td>
                </tr>
              </tbody>
            </table>
            <h2 className="mt-2 text-lg font-medium">Purpose</h2>
            <p className="mt-2 w-full break-words rounded-md border border-gray-300 p-4 text-base text-gray-700">
              {request_dtls.purpose}
            </p>
          </div>
        )}
        {request.type === "leave" && (
          <>
            <div className="">
              <h3 className="text-lg font-medium">Leave Details</h3>
              <table className="w-full table-auto border-separate border border-gray-500 rounded-md mt-2">
                <thead>
                  <tr>
                    <th className="border-b border-r border-gray-500 px-4 py-2 text-left text-lg font-medium">
                      From
                    </th>
                    <th className="border-b border-gray-500 px-4 py-2 text-left text-lg font-medium">
                      to
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border-r border-gray-500 px-4 py-2 text-lg">
                      {formatDate(request_dtls.from)}
                    </td>
                    <td className="px-4 py-2 text-lg">{formatDate(request_dtls.to)}</td>
                  </tr>
                </tbody>
              </table>
              <h2 className="mt-2 text-lg font-medium">Purpose</h2>
              <p className="p-4rounded-md mt-2 w-full break-words text-base text-gray-700">
                {request_dtls.purpose}
              </p>
            </div>
          </>
        )}
        {request.type === "other" && (
          <div>
            <h2 className="mt-2 text-lg font-medium">Description:</h2>
            <p className="mt-2 w-full break-words rounded-md p-4 text-base text-gray-700">
              {request_dtls.purpose}
            </p>
          </div>
        )}
        <p className="break-words">{sender.name}</p>
        <BigGreenButton type="submit">Approve</BigGreenButton>
      </div>
    </div>
  );
};

export default SingleRequests;
