import { Link, useLocation, useParams } from "react-router-dom";
import Dropdown from "../components/Dropdown";
import Dot from "./../../../assets/Dot.svg";
import { DotIcon, DownloadCloud, LinkIcon, Plus } from "lucide-react";
import { useState } from "react";

const SingleProject = () => {
  const location = useLocation();
  const project = location.state;
  const {
    _id,
    name,
    description,
    objectives,
    leads,
    team_members,
    createdBy,
    submissions,
    status,
    date_created,
    deadline
  } = project;
  const { docs, links } = submissions;

  const [isCompleted, setIsCompleted] = useState(status === "Completed")

  return (
    <div className="py-4 px-6 mt-4 border-2 shadow-sm w-11/12 mx-auto space-y-6 rounded-lg bg-white">
      {/* Project Header */}
      <div className="relative mt-4 flex flex-col md:flex-row md:gap-4">
        <h1 className="text-xl font-bold">{name}</h1>
        <span
          className={`text-sm font-normal ${
            isCompleted ? "text-green-600" : "text-red-500"
          } md:self-end`}
        >
          {isCompleted ? "Completed" : "Uncompleted"}
        </span>

        <Dropdown completed={{ isCompleted, setIsCompleted }} id={_id} />
      </div>

      {/* Project Details */}
      <div className="w-full mb-4">
        {/* Description */}
        <h2 className="text-lg font-medium  border-b pb-2 border-1 mb-2">
          Description
        </h2>
        <p className="text-justify mb-4">{description}</p>

        {/* Recipient and Deadline */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center space-y-2 md:space-y-0 max-w-[900px] mx-auto">
          <span className="font-medium">
            Created by:{" "}
            <p className="font-normal cursor-pointer">{createdBy}</p>
          </span>
          <span className="font-medium">
            Created: <p className="font-normal">{date_created}</p>
          </span>
          <span className="font-medium">
            Deadline: <p className="font-normal">{deadline}</p>
          </span>
        </div>
      </div>

      {/* Objectives, Leads, and Team Members */}
      <div className="flex flex-col md:flex-row gap-6 md:gap-16 p-2">
        {/* Objectives */}
        <div className="md:w-3/5">
          <h2 className="text-lg font-medium border-b pb-2 border-1">
            Objectives
          </h2>
          <ul className="list-decimal list-outside space-y-2 mt-2 ml-6 sw-full break-words">
            {objectives.map((objective, index) => (
              <li key={index} className="pl-2">
                {objective}
              </li>
            ))}
          </ul>
        </div>

        {/* Leads and Team Members */}
        <div className="md:w-2/5 space-y-6">
          {/* Leads */}
          <div>
            <h2 className="text-lg font-medium border-b pb-2 border-1">
              Leads
            </h2>
            <ul className="space-y-2 mt-2">
              {leads.map((lead, index) => (
                <li key={index} className="ml-4 flex items-center gap-2">
                  <img src={Dot} alt="dot" className="w-2 h-2" />
                  {lead}
                </li>
              ))}
            </ul>
          </div>

          {/* Team Members */}
          <div>
            <h2 className="text-lg font-medium border-b">Team Members</h2>
            <ul className=" space-y-2 mt-2">
              {team_members.length > 0 ? (
                team_members.map((member, index) => (
                  <li key={index} className="ml-4 flex items-center gap-2">
                    <img src={Dot} alt="dot" className="w-2 h-2" />
                    {member}
                  </li>
                ))
              ) : (
                <li className="ml-2">No other team members</li>
              )}
            </ul>
          </div>
        </div>
      </div>

      {/*Submissions */}
      <section className="p-2">
        <h2 className="font-medium text-lg mb-4  border-b pb-2 border-1">
          Submissions
        </h2>
        <div className="flex flex-col md:flex-row gap-4 ">
          <div className="w-1/2">
            <div className="flex items-center justify-start mb-2 gap-6 border p-2 rounded-lg w-fit hover:opacity-70">
              <h3 className="font-medium ml-2">Documents</h3>
              <div className="p-[2px] bg-logo rounded-full w-fit">
                <Plus color="white" />
              </div>
            </div>
            {docs.length > 0 ? (
              <div className="flex flex-col gap-4">
                {docs.map((doc, index) => {
                  const { download_link, filename } = doc;
                  return (
                    <Link
                      className="border rounded-lg p-4 flex justify-between w-4/5 hover:bg-navBg1"
                      to={download_link}
                      key={download_link}

                    >
                      <p className="truncate mr-2 text-sm">{filename}</p>
                      <DownloadCloud />
                    </Link>
                  );
                })}
              </div>
            ) : (
              <p>No documents found for this project</p>
            )}
          </div>
          <div className="w-1/2">
            <div className="flex items-center mb-2 gap-6 border p-2 rounded-lg w-fit hover:opacity-70">
              <h3 className="font-medium  ml-2">Links</h3>
              <div className="p-[2px] bg-logo rounded-full w-fit">
                <Plus color="white" />
              </div>
            </div>
            {links.length > 0 ? (
              <div className="flex flex-col gap-4">
                {links.map((flink, index) => {
                  const { link, title } = flink;
                  return (
                    <Link
                      className="border rounded-lg p-4 flex justify-between w-4/5 hover:bg-navBg1"
                      to={link}
                      target="_blank"
                      key={link}
                    >
                      <p className="truncate mr-2 text-sm">{title}</p>
                      <LinkIcon />
                    </Link>
                  );
                })}
              </div>
            ) : (
              <p>No documents found for this project</p>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default SingleProject;
