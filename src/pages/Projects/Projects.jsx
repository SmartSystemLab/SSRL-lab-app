import React from "react";
import { LiaCheckDoubleSolid } from "react-icons/lia";
import { IoMdSearch } from "react-icons/io";
import { FaArrowLeft } from "react-icons/fa6";

import img1 from "./img1.jpg";
import profile from "./profile.jpeg";
import SearchBar from "../../components/SearchBar";

const info = [
  {
    name: "Ogunjirin M. Boluwatife",
    summary: "Sent you reports for week 2",
    images: img1,
    duration: "10 mins",
  },
  {
    name: "Ogunjirin M. Boluwatife",
    summary: "Sent you reports for week 2",
    images: img1,
    duration: "1 day",
  },
  {
    name: "Ogunjirin M. Boluwatife",
    summary: "Sent you reports for week 2",
    images: img1,
    duration: "1 day",
  },
  {
    name: "Ogunjirin M. Boluwatife",
    summary: "Sent you reports for week 2",
    images: img1,
    duration: "1 day",
  },
  {
    name: "Ogunjirin M. Boluwatife",
    summary: "Sent you reports for week 2",
    images: img1,
    duration: "1 day",
  },
  {
    name: "Ogunjirin M. Boluwatife",
    summary: "Sent you reports for week 2",
    images: img1,
    duration: "1 day",
  },
];

const Projects = () => {
  return (
    <>
      <div>
        <div className="container">
          <div className="mt-12 flex justify-between">

            {/* Back Arrow and Search Bar */}
            <div className="flex items-center gap-2 w-full">
              <button className="bg-[#FFa500] p-3 rounded-full">
                <FaArrowLeft className=" text-white text-4xl" />
              </button>
              {/* <div className="relative w-3/5 p-3 border border-black rounded-full">
                <input
                  type="text"
                  placeholder="Search for tasks, projects ..."
                  className="w-full rounded-full  px-3 py-1 focus:outline-none"
                />
                <IoMdSearch className="text-4xl text-[#FFa500] absolute top-1/2 -translate-y-1/2 right-1" />
              </div> */}
              <SearchBar />
            </div>
            {/* Profile Pic */}
            <div>
              <img
                src={profile}
                alt=""
                className="h-16 w-16 rounded-full object-cover"
              />
            </div>
          </div>

          {/* Header */}
          <div className="mt-12">
            <div className="uppercase font-bold text-4xl">
              weekly activity reports
            </div>
            <hr className="bg-black" />

            {/* Content */}
            <div className="mt-12">
              <div className="flex justify-between items-center">
                <div className="flex gap-2 font-semibold">
                  <div className="underline text-xl">Unread</div>{" "}
                  <div className="bg-[#FFa500] text-white flex items-center justify-center rounded-full w-6 h-6 text-center">
                    6
                  </div>
                </div>
                <div className="flex gap-1">
                  <LiaCheckDoubleSolid className="text-2xl text-green-700" />
                  <p>mark all as read</p>
                </div>
              </div>

              {/* Messages */}
              <section>
                {info.map((item) => {
                  return (
                    <Message
                      name={item.name}
                      summary={item.summary}
                      images={item.images}
                      duration={item.duration}
                    ></Message>
                  );
                })}
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const Message = ({ name, summary, images, duration }) => {
  return (
    <>
      <section className="p-4 flex justify-between items-center">
        <div className="flex justify-between items-center ">
          <div className="bg-green-600 w-2 h-2 rounded-full"></div>
          <img src={images} alt="" className="h-20 w-20 rounded-full m-4 object-cover" />
          <div>
            <h1 className="text-3xl font-bold text-gray-700">{name}</h1>
            <div className="text-xl text-gray-500">{summary}</div>
          </div>
        </div>
        <div>
          <div className="text-gray-500">{duration} ago</div>
        </div>
      </section>
      <hr className="bg-black" />
    </>
  );
};

export default Projects;
