import Dot from './../../../assets/Dot.svg';

const ProjectList = ({ projectCounts }) => {
    return (
        <ul className="mt-4 space-y-4">
            <li className="flex items-center gap-2 ">
                <div className="flex items-center">
                    <img src={Dot} alt="dot" className="w-2.5 h-2.5 mr-2" />
                    Total projects
                </div>
                <span className="bg-logo text-white rounded-full px-2 py-0.5 text-sm font-medium">
                    {projectCounts.total}
                </span>
            </li>

            <li className="flex items-center gap-2  ">
                <div className="flex items-center">
                    <img src={Dot} alt="dot" className="w-2.5 h-2.5 mr-2" />
                    Completed projects
                </div>
                <span className="bg-logo text-white rounded-full px-2 py-0.5 text-sm font-medium">
                    {projectCounts.completed}
                </span>
            </li>

            <li className="flex items-center gap-2  ">
                <div className="flex items-center">
                    <img src={Dot} alt="dot" className="w-2.5 h-2.5 mr-2" />
                    Projects in progress
                </div>
                <span className="bg-logo text-white  rounded-full px-2 py-0.5 text-sm font-medium">
                    {projectCounts.inProgress}
                </span>
            </li>
        </ul>
    );
};

export default ProjectList;
