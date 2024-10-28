import React from "react";
import img1 from "./img1.jpg";

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
];

const Projects = () => {
  return (
    <>
      <div className="uppercase">weekly activity reports</div>
      <hr className="bg-black" />
      <div className="flex justify-between items-center">
        <div className="flex">
          <div className="underline">
            Unread</div> <div className="bg-[#FFa500] rounded-full w-6 text-center">6</div>
          
        </div>
        <div>mark all as read</div>
      </div>
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
    </>
  );
};

const Message = ({ name, summary, images, duration }) => {
  return (
    <>
      <section className="flex justify-between items-center">
        <div className="flex justify-between items-center ">
          <div className="bg-green-600 w-2 h-2 rounded-full"></div>
          <img src={images} alt="" className="h-12 w-12 rounded-full m-4" />
          <div>
            <h1 className="text-xl font-bold text-gray-700">{name}</h1>
            <div className="text-gray-500">{summary}</div>
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
