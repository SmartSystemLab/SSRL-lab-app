import { UserRound } from "lucide-react";
import Pro_bg from "./../../../assets/Pro_bg.svg";
import { Link } from "react-router-dom";
import { getRandomSoftHexColor, formatDate } from "../../../Modules/funcs";
import { format } from "date-fns"

const ProjectCard = ({ project }) => {
  const { name, deadline, team_members, leads, team_avatars } = project;
  const maxVisibleMembers = 3;
  const allMembers = [...leads, ...team_members]
  const extraMembers = allMembers.length - maxVisibleMembers;

  return (
    <Link
      to={`/home/projects/${project._id}`}
      state={project}
    >
      <div
        className="cursor:pointer my-2 w-80 min-w-[240px] rounded-3xl bg-navBg2 bg-no-repeat p-4 text-white shadow-lg transition-all duration-200 hover:scale-105"
        style={{
          backgroundImage: `url(${Pro_bg})`,
          backgroundPosition: "bottom -5px right -5px",
          backgroundSize: "50%",
        }}
      >
        <div className="px-1 py-2">
          <h3 className="text-xl font-medium">{name}</h3>
          <p className="mt-1 text-base">{formatDate(deadline)}</p>
          <div className="mt-5 flex items-center">
            <div className="flex">
              {team_avatars.slice(0, maxVisibleMembers).map((avatar, index) => (
                <div
                  className="m-2 -ml-4 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border bg-white first-of-type:ml-0"
                  key={index}
                >
                  {avatar !== "NIL" ? (
                    <img src={avatar} alt="" className="h-full w-full rounded-full" />
                  ) : (
                    <span
                      className={`flex h-full w-full items-center justify-center rounded-full text-xs font-medium text-black`}
                      style={{
                        backgroundColor: `${getRandomSoftHexColor()}50`,
                      }}
                    >
                      {allMembers[index].id.slice(0, 3)}
                    </span>
                  )}
                </div>
              ))}
            </div>
            {extraMembers > 0 && (
              <span className="text-sm">+{extraMembers}</span>
            )}
          </div>
          <p className="text-sm">
            {allMembers[0].id}{" "}
            {allMembers.length > 1 && `and ${allMembers.length - 1} others`}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
