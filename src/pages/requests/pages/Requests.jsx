import { Link } from "react-router-dom"
import { LiaCheckDoubleSolid } from "react-icons/lia";
import { Plus } from "lucide-react";
import Messages from "../pages../../../../components/Messages";
import img1 from "../pages../../../../assets/img1.jpg";

const info = [
  {
    name: "Ogunjirin M. Boluwatife",
    summary: "Sent you requests for Personal Business",
    images: img1,
    duration: "10 mins",
    id: 1,
    Title: 'Requests for Personal Business',
    type: "others",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure architecto, obcaecati, eligendi consequatur laudantium ipsam quo ipsa eos dicta natus saepe sed odit necessitatibus placeat! Voluptatem a amet debitis labore. Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure architecto, obcaecati, eligendi consequatur laudantium ipsam quo ipsa eos dicta natus saepe sed odit necessitatibus placeat! Voluptatem a amet debitis labore.",
    receipients: [
      'cejay',
      'Prof Mrs',
      'Jayeola',
      'Nunsi shaki'
    ]
  },
  {
    name: "Agboola Oluwatofunmi B.",
    summary: "Sent you requests for equipments",
    images: img1,
    duration: "1 day",
    id: 2,
    Title: 'Requests for equipments',
    type: "equipment",
    equipmentName: "3d printer BiBO",
    equipmentQuantity: 5,
    purpose: '3d printing and simulation of ssrl backyard famring kit and poultry',
    receipients: [
      'cejay',
      'Prof Mrs',
      'Nunsi shaki'
    ]
  },
  {
    name: "Adeosun Covenant J",
    summary: "Sent you requests for leave",
    images: img1,
    duration: "1 day",
    id: 3,
    Title: 'Request for leave',
    type: "leave",
    leaveDatesfrom: '31/01/2025',
    leaveDatesto: '28/02/2025',
    purpose: 'Exam and grandpa died back in taraba state',
    receipients: [
      'cejay',
      'Prof Mrs',
      'Jayeola',
      'Nunsi shaki'
    ]
  },
];
const Requests = () => {
  return (
    <div >
      {/* Header */}
      <div className="mt-4 md:px-4 px-1">
        <div className="flex justify-between items-center">
          <h1 className="uppercase font-semibold text-xl md:text-2xl">Requests</h1>
          <div>
            <Link className="flex items-center gap-2 text-base md:text-lg font-medium hover:bg-neutral-100 p-2 hover:rounded-lg transition-all duration-300"
              to={'/home/requests/create'}>
              <span>Create Request</span>
              <div className="p-[2px] bg-logo rounded-full">
                <Plus color="white" />
              </div>
            </Link>
          </div>
        </div>

        <hr className="bg-black" />

        {/* Content */}
        <div className="mt-4 md:px-4 px-0 py-2">

          {/* unread tag */}
          <div className="flex justify-between items-center">

            <div className="flex gap-2 font-semibold">
              <span className="underline ">Unread</span>{" "}
              <span className="bg-logo text-white rounded-full w-6 h-6 text-center">
                6
              </span>
            </div>

            <div className="flex gap-1 items-center cursor-pointer">
              <LiaCheckDoubleSolid className=" text-green-700" />
              <p>mark all as read</p>
            </div>
          </div>

          {/* Messages */}
          <section className="mt-4">
            <Messages
              info={info}
              to='/home/requests'
            ></Messages>
          </section>
        </div>

      </div>

    </div>

  )
}

export default Requests