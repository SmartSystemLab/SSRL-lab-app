import { Link } from "react-router-dom";
import { LiaCheckDoubleSolid } from "react-icons/lia";
import { Plus } from "lucide-react";
import Messages from "../pages../../../../components/Messages";
import img1 from "../pages../../../../assets/img1.jpg";
import { useRequest } from "../../../Modules/useRequest";
import { useState } from "react";
import { useEffect } from "react";
import { formatDistanceToNow } from "date-fns";
import { getInitials, getRandomSoftHexColor } from "../../../Modules/funcs";

const info = [
  {
    name: "Ogunjirin M. Boluwatife",
    summary: "Sent you requests for Personal Business",
    images: img1,
    duration: "10 mins",
    id: 1,
    Title: "Requests for Personal Business",
    type: "others",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure architecto, obcaecati, eligendi consequatur laudantium ipsam quo ipsa eos dicta natus saepe sed odit necessitatibus placeat! Voluptatem a amet debitis labore. Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure architecto, obcaecati, eligendi consequatur laudantium ipsam quo ipsa eos dicta natus saepe sed odit necessitatibus placeat! Voluptatem a amet debitis labore.",
    receipients: ["cejay", "Prof Mrs", "Jayeola", "Nunsi shaki"],
  },
  {
    name: "Agboola Oluwatofunmi B.",
    summary: "Sent you requests for equipments",
    images: img1,
    duration: "1 day",
    id: 2,
    Title: "Requests for equipments",
    type: "equipment",
    equipmentName: "3d printer BiBO",
    equipmentQuantity: 5,
    purpose:
      "3d printing and simulation of ssrl backyard famring kit and poultry",
    receipients: ["cejay", "Prof Mrs", "Nunsi shaki"],
  },
  {
    name: "Adeosun Covenant J",
    summary: "Sent you requests for leave",
    images: img1,
    duration: "1 day",
    id: 3,
    Title: "Request for leave",
    type: "leave",
    leaveDatesfrom: "31/01/2025",
    leaveDatesto: "28/02/2025",
    purpose: "Exam and grandpa died back in taraba state",
    receipients: ["cejay", "Prof Mrs", "Jayeola", "Nunsi shaki"],
  },
];

const Requests = () => {
  const [requests, setRequests] = useState([]);

  const [
    getRequest,
    getRequestLoading,
    setRequestLoading,
    getRequestError,
    setRequestError,
  ] = useRequest();

  const getAllRequests = async () => {
    setRequestLoading(true);
    const res = await getRequest("request/get_all");
    const data = await res.json();

    if (res.ok) {
      console.log(data);
      setRequests(data.requests);
    } else {
      const data = await res.json();
      setRequestError({ status: true, msg: data.message });
    }
    setRequestLoading(false);
  };

  useEffect(() => {
    getAllRequests();
  }, []);

  return (
    <div>
      {/* Header */}
      <div className="mt-4 px-1 md:px-4">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-semibold uppercase md:text-2xl">
            Requests
          </h1>
          <div>
            <Link
              className="flex items-center gap-2 p-2 text-base font-medium transition-all duration-300 hover:rounded-lg hover:bg-neutral-100 md:text-lg"
              to={"/home/requests/create"}
            >
              <span>Create Request</span>
              <div className="rounded-full bg-logo p-[2px]">
                <Plus color="white" />
              </div>
            </Link>
          </div>
        </div>

        <hr className="bg-black" />

        {/* Content */}
        <div className="mt-4 px-0 py-2 md:px-4">
          {/* unread tag */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 font-semibold">
              <span className="underline">Unread</span>{" "}
              <span className="flex h-4 w-4 items-center justify-center rounded-full bg-logo text-center text-xs text-white">
                6
              </span>
            </div>

            <div className="flex cursor-pointer items-center gap-1">
              <LiaCheckDoubleSolid className="text-green-700" />
              <p>mark all as read</p>
            </div>
          </div>

          {/* Messages */}
          <section className="mt-4">
            {requests &&
              requests.map((request) => {
                const { created_at, avatar, sender, title, _id } = request;
                return (
                  <Link
                    className="flex items-center gap-4 border-b hover:bg-zinc-100"
                    key={created_at}
                    to={`/home/requests/${_id}`}
                    state={request}
                  >
                    <div className="m-2 mt-4 h-12 w-12 rounded-full">
                      {avatar !== "NIL" ? (
                        <img
                          src={avatar}
                          alt=""
                          className="h-full w-full rounded-full"
                        />
                      ) : (
                        <span
                          className={`flex h-full w-full items-center justify-center rounded-full border-2 text-xs font-medium text-black`}
                          style={{
                            backgroundColor: `${getRandomSoftHexColor()}50`,
                          }}
                        >
                          {getInitials(sender.name)}
                        </span>
                      )}
                    </div>
                    <div className="flex-grow">
                      <p className="truncate font-semibold">{title}</p>
                      <p className="text-sm">{sender.name}</p>
                    </div>
                    <p className="text-xs font-light italic">
                      {formatDistanceToNow(created_at, { addSuffix: true })}
                    </p>
                  </Link>
                );
              })}
          </section>
        </div>
      </div>
    </div>
  );
};

export default Requests;
