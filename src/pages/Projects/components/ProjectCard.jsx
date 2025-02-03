import { UserRound } from "lucide-react";
import Pro_bg from "./../../../assets/Pro_bg.svg";
import { Link } from "react-router-dom";
import { getRandomSoftHexColor } from "../../../Modules/funcs";

const ProjectCard = ({ project }) => {
  const { name, date_created, team_members, leads, team_avatars } = project;
  const maxVisibleMembers = 3;
  const allMembers = [...leads, ...team_members]
  const extraMembers = allMembers.length - maxVisibleMembers;
  return (
    <Link to={`/home/projects/${project._id}`} state={project}>
      <div
        className=" w-80 min-w-[240px] shadow-lg rounded-3xl p-4 my-2 text-white bg-navBg2 cursor:pointer hover:scale-105 transition-all duration-200 bg-no-repeat"
        style={{
          backgroundImage: `url(${Pro_bg})`,
          backgroundPosition: "bottom -5px right -5px",
          backgroundSize: "50%",
        }}
      >
        <div className="py-2 px-1">
          <h3 className="text-xl font-medium">{name}</h3>
          <p className="text-base mt-1">{date_created}</p>
          <div className="mt-5 flex items-center">
            <div className="flex">
              {team_avatars.slice(0, maxVisibleMembers).map((avatar, index) => (
                <div
                  className="flex h-8 w-8 rounded-full m-2 flex-shrink-0 items-center justify-center border -ml-4 first-of-type:ml-0 bg-white"
                  key={index}
                >
                  {avatar !== "NIL" ? (
                    <img src={avatar} alt="" className="w-full h-full" />
                  ) : (
                      <span className={`text-xs text-black w-full h-full rounded-full flex items-center justify-center font-medium`} style={{ backgroundColor: `${getRandomSoftHexColor()}50` }}>{allMembers[index].slice(0,3)}</span>
                  )}
                </div>
              ))}
            </div>
            {extraMembers > 0 && (
              <span className="text-sm">+{extraMembers}</span>
            )}
          </div>
          <p className="text-sm">
            {allMembers[0]}{" "}
            {allMembers.length > 1 && `and ${allMembers.length - 1} others`}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
