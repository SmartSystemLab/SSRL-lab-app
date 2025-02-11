import React from "react";
import { Link } from "react-router-dom";
import { LiaCheckDoubleSolid } from "react-icons/lia";
import { Plus } from "lucide-react";
import Messages from "../components/Messages";
import img1 from "../pages../../../../assets/img1.jpg";
import { useRequest } from "../../../Modules/useRequest";
import { useState } from "react";
import { useEffect } from "react";

const info = [
  {
    name: "Ogunjirin M. Boluwatife",
    intern: "Ogunjirin M. Boluwatife",
    summary: "Sent you weekly report",
    stack: "Embedded Systems",
    images: img1,
    duration: "10 mins",
    id: 1,
    type: "activity",
    period: "Weekly",
    completed: [
      "Completed login authentication feature",
      "Implemented frontend for dashboard",
      "Integrated API for user profiles"
    ],
    ongoing: [
      "Working on real-time chat feature",
      "Fixing UI bugs on mobile responsiveness"
    ],
    nextTask: [
      "Deploy application to production",
      "Write documentation for frontend components"
    ]
  },
  {
    name: "Agboola Oluwatofunmi B.",
    intern: "Agboola Oluwatofunmi B.",
    summary: "Sent you Lab App report",
    stack: "Embedded System",
    images: img1,
    duration: "1 day",
    id: 2,
    type: "project",
    title: "Nexo Ai project",
    Summary: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure architecto, obcaecati, eligendi consequatur laudantium ipsam quo ipsa eos dicta natus saepe sed odit necessitatibus placeat! Voluptatem a amet debitis labore. Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure architecto, obcaecati, eligendi consequatur laudantium ipsam quo ipsa eos dicta natus saepe sed odit necessitatibus placeat! Voluptatem a amet debitis labore."
  },
  {
    name: "Adeosun Covenant J",
    intern: "Adeosun Covenant J",
    summary: "Sent you Hardware interns report",
    stack: "Front End web development",
    images: img1,
    period: "Monthly",
    duration: "1 day",
    id: 3,
    type: "activity",
    completed: ["Fixed UI bugs", "Implemented search feature"],
    ongoing: ["Testing new API"],
    nextTask: ["Deploy to production"],
  },
];

const Reports = () => {
  const [reports, setReports] = useState(null);
  const [
    getReports,
    reportsLoading,
    setReportsLoading,
    reportsError,
    setReportsError,
  ] = useRequest();

  const getAllReports = async () => {
    setReportsLoading(true);
    const res = await getReports("reports/get_all");
    const data = await res.json();
    if (res.ok) {
      setReports(data.reports)
    }
    else {
      setReportsError({ status: true, msg: data.message })
    }
    setReportsLoading(false);
  };

  useEffect(() => {
    getAllReports();
  }, []);

  return (
    <div className="mt-4 md:px-4 px-1">

      <div className="flex justify-between items-center">

        <h1 className="uppercase font-medium text-2xl">Reports</h1>

        <div className="">
          <Link className="flex items-center gap-2 text-lg  rounded-lg font-medium p-2 hover:bg-neutral-100 hover:rounded-lg transition-all duration-300 cursor-pointer"
            to={'/home/reports/create'}>
            <div className="p-[2px] bg-logo rounded-full">
              <Plus color="white" />
            </div>
            <span>Write Report</span>
          </Link>
        </div>
      </div>

      <hr className="bg-black" />

      {/* Content */}
      <div className="mt-4 px-0 md:px-4 py-2">

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
            to='/home/reports'
          ></Messages>
        </section>

      </div>



    </div>
  );
};

export default Reports;
