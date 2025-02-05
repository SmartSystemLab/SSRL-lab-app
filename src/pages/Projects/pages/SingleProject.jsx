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
    <div className="mx-auto mt-4 w-11/12 space-y-6 rounded-lg border-2 bg-white px-6 py-4 shadow-sm">
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

        <Dropdown
          completed={{ isCompleted, setIsCompleted }}
          id={_id}
          project={project}
        />
      </div>

      {/* Project Details */}
      <div className="mb-4 w-full">
        {/* Description */}
        <h2 className="border-1 mb-2 border-b pb-2 text-lg font-medium">
          Description
        </h2>
        <p className="mb-4 text-justify">{description}</p>

        {/* Recipient and Deadline */}
        <div className="mx-auto flex max-w-[900px] flex-col space-y-2 md:flex-row md:items-center md:justify-between md:space-y-0">
          <span className="font-medium">
            Created by:{" "}
            <p className="cursor-pointer font-normal">{createdBy}</p>
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
      <div className="flex flex-col gap-6 p-2 md:flex-row md:gap-16">
        {/* Objectives */}
        <div className="md:w-3/5">
          <h2 className="border-1 border-b pb-2 text-lg font-medium">
            Objectives
          </h2>
          <ul className="sw-full ml-6 mt-2 list-outside list-decimal space-y-2 break-words">
            {objectives.map((objective, index) => (
              <li key={index} className="pl-2">
                {objective}
              </li>
            ))}
          </ul>
        </div>

        {/* Leads and Team Members */}
        <div className="space-y-6 md:w-2/5">
          {/* Leads */}
          <div>
            <h2 className="border-1 border-b pb-2 text-lg font-medium">
              Leads
            </h2>
            <ul className="mt-2 space-y-2">
              {leads.map((lead, index) => (
                <li key={index} className="ml-4 flex items-center gap-2">
                  <img src={Dot} alt="dot" className="h-2 w-2" />
                  {lead.id}
                </li>
              ))}
            </ul>
          </div>

          {/* Team Members */}
          <div>
            <h2 className="border-b text-lg font-medium">Team Members</h2>
            <ul className="mt-2 space-y-2">
              {team_members.length > 0 ? (
                team_members.map((member, index) => (
                  <li key={index} className="ml-4 flex items-center gap-2">
                    <img src={Dot} alt="dot" className="h-2 w-2" />
                    {member.name}
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
        <h2 className="border-1 mb-4 border-b pb-2 text-lg font-medium">
          Submissions
        </h2>
        <div className="flex flex-col gap-4 md:flex-row">
          <div className="w-1/2">
            <div className="group mb-2 flex w-fit items-center justify-start gap-6 rounded-lg border p-2 hover:opacity-70">
              <h3 className="ml-2 font-medium">Documents</h3>
              <div className="w-fit rounded-full bg-logo p-[2px] group-hover:rotate-90">
                <Plus color="white" className="group-hover:rotate-90" />
              </div>
            </div>
            {docs.length > 0 ? (
              <div className="flex flex-col gap-4">
                {docs.map((doc, index) => {
                  const { download_link, filename } = doc;
                  return (
                    <Link
                      className="flex w-4/5 justify-between rounded-lg border p-4 hover:bg-navBg1"
                      to={download_link}
                      key={download_link}
                    >
                      <p className="mr-2 truncate text-sm">{filename}</p>
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
            <div className="mb-2 flex w-fit items-center gap-6 rounded-lg border p-2 hover:opacity-70">
              <h3 className="ml-2 font-medium">Links</h3>
              <div className="w-fit rounded-full bg-logo p-[2px]">
                <Plus color="white" />
              </div>
            </div>
            {links.length > 0 ? (
              <div className="flex flex-col gap-4">
                {links.map((flink, index) => {
                  const { link, title } = flink;
                  return (
                    <Link
                      className="flex w-4/5 justify-between rounded-lg border p-4 hover:bg-navBg1"
                      to={link}
                      target="_blank"
                      key={link}
                    >
                      <p className="mr-2 truncate text-sm">{title}</p>
                      <LinkIcon />
                    </Link>
                  );
                })}
              </div>
            ) : (
              <p>No links found for this project</p>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default SingleProject;
