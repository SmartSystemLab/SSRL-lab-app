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
  },
  {
    name: "Agboola Oluwatofunmi B.",
    summary: "Sent you requests for equipments",
    images: img1,
    duration: "1 day",
  },
  {
    name: "Adeosun Covenant J",
    summary: "Sent you requests for leave",
    images: img1,
    duration: "1 day",
    id: 3,

  },
];
const Requests = () => {
  return (
    <div >
      {/* Header */}
      <div className="mt-8 p-2">
        <div className="flex justify-between items-center">
          <h1 className="uppercase font-bold text-xl md:text-2xl">Requests</h1>
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
        <div className="mt-6 p-2">

          {/* unread tag */}
          <div className="flex justify-between items-center">

            <div className="flex gap-2 font-semibold">
              <span className="underline ">Unread</span>{" "}
              <span className="bg-logo text-white rounded-full w-6 h-6 text-center">
                6
              </span>
            </div>

            <div className="flex gap-1 items-center">
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