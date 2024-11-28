import Pro_bg from "./../../../assets/Pro_bg.svg"
import { Link } from "react-router-dom"
const ProjectStatus = ({ project }) => {
    const { name, deadline, members } = project;
    const maxVisibleMembers = 3;
    const extraMembers = members.length - maxVisibleMembers;
    return (
        <Link to={`/home/projects/${project.id}`}>
            <div className=" w-80 min-w-[240px] shadow-lg rounded-3xl p-4 m-2 text-white bg-navBg2 cursor:pointer"
                style={{
                    backgroundImage: `url(${Pro_bg})`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "bottom -5px right -5px",
                    backgroundSize: "50%",
                }} >
                <div className="py-2 px-1">
                    <h3 className="text-xl font-medium">{name}</h3>
                    <p className="text-base mt-1">{deadline}</p>
                    <div className="mt-5 flex items-center">
                        <div className="flex space-x-1">

                            {members.slice(0, maxVisibleMembers).map((member, index) => (
                                <img
                                    key={index}
                                    src={member.img}
                                    alt={member.name}
                                    className="w-7 h-7 rounded-full object-cover"
                                />
                            ))}
                        </div>
                        {extraMembers > 0 && (
                            <span className="w-8 h-8 flex items-center justify-center rounded-full  text-white text-sm">
                                +{extraMembers}
                            </span>
                        )}

                    </div>
                    <p className="text-sm">
                        {members[0].name} {members.length > 1 && `and ${members.length - 1} others`}
                    </p>
                </div>
            </div>
        </Link>
    );
};

export default ProjectStatus 
