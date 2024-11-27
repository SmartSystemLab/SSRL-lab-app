import React from "react";
import { LiaCheckDoubleSolid } from "react-icons/lia";
import Messages from "../../sharedLayouts/Messages";

import img1 from "../../assets/img1.jpg";

const info = [
  {
    name: "Ogunjirin M. Boluwatife",
    summary: "Sent you reports for week 2",
    images: img1,
    duration: "10 mins",
    id: 1,
  },
  {
    name: "Ogunjirin M. Boluwatife",
    summary: "Sent you reports for week 2",
    images: img1,
    duration: "1 day",
    id: 2,
  },
  {
    name: "Ogunjirin M. Boluwatife",
    summary: "Sent you reports for week 2",
    images: img1,
    duration: "1 day",
    id: 3,

  },
  {
    name: "Ogunjirin M. Boluwatife",
    summary: "Sent you reports for week 2",
    images: img1,
    duration: "1 day",
    id: 4,
  },
  {
    name: "Ogunjirin M. Boluwatife",
    summary: "Sent you reports for week 2",
    images: img1,
    duration: "1 day",
    id: 5,
  },
  {
    name: "Ogunjirin M. Boluwatife",
    summary: "Sent you reports for week 2",
    images: img1,
    duration: "1 day",
    id: 6,
  },
];

const Notifications = () => {
  return (
    <>
      <div>
        <div className="container">
          {/* Header */}
          <div className="mt-8">
            <div className="uppercase font-bold text-2xl">
              notifications
            </div>
            <hr className="bg-black" />

            {/* Content */}
            <div className="mt-6">
              <div className="flex justify-between items-center">
                <div className="flex gap-2 font-semibold">
                  <div className="underline ">Unread</div>{" "}
                  <div className="bg-[#FFa500] text-white flex items-center justify-center rounded-full w-6 h-6 text-center">
                    6
                  </div>
                </div>
                <div className="flex gap-1">
                  <LiaCheckDoubleSolid className=" text-green-700" />
                  <p>mark all as read</p>
                </div>
              </div>

              {/* Messages */}
              <section className="mt-4">


                <Messages
                  info={info}
                  to='/home/dashboard/notifications'
                ></Messages>


              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};


export default Notifications;
