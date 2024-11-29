import { Link } from "react-router-dom"
import ProjectStatus from "./components/ProjectStatus"
import ProjectList from "./components/ProjectList"
import img1 from "../../assets/img1.jpg"
import Add from '../../assets/Add.svg'


const info = [
  {
    name: "SSRL lab app",
    members: [
      { name: 'Bolu', img: img1, role: 'Lead' },
      { name: 'Ceejay', img: img1, role: 'Admin' },
      { name: 'Dabira', img: img1, role: 'Intern' },
      { name: 'Banky', img: img1, role: 'Admin' },
    ],

    deadline: "Jan 2025",
    id: 1,
  },
  {
    name: "SSRL lab app",
    members: [
      { name: 'Bolu', img: img1, role: 'Lead' },
      // { name: 'Ceejay', img: img1, role: 'Admin' },
      // { name: 'Dabira', img: img1, role: 'Intern' },
    ],

    deadline: "Jan 2025",
    id: 2,
  },
  {
    name: "SSRL lab app",
    members: [
      { name: 'Bolu', img: img1, role: 'Lead' },
      { name: 'Ceejay', img: img1, role: 'Admin' },
      { name: 'Dabira', img: img1, role: 'Intern' },
      { name: 'Banky', img: img1, role: 'Admin' },
    ],

    deadline: "Jan 2025",
    id: 3,
  },
  {
    name: "SSRL lab app",
    members: [
      { name: 'Bolu', img: img1, role: 'Lead' },
      { name: 'Ceejay', img: img1, role: 'Admin' },
      { name: 'Dabira', img: img1, role: 'Intern' },
      { name: 'Banky', img: img1, role: 'Admin' },
    ],

    deadline: "Jan 2025",
    id: 4,
  },
  {
    name: "SSRL lab app",
    members: [
      { name: 'Ceejay', img: img1, role: 'Admin' },
      { name: 'Ceejay', img: img1, role: 'Admin' },
      { name: 'Bolu', img: img1, role: 'Lead' },
      { name: 'Dabira', img: img1, role: 'Intern' },
      { name: 'Banky', img: img1, role: 'Admin' },
    ],

    deadline: "Jan 2025",
    id: 5,
  },
  {
    name: "SSRL lab app",
    members: [
      { name: 'Bolu', img: img1, role: 'Lead' },
      { name: 'Ceejay', img: img1, role: 'Admin' },
      { name: 'Dabira', img: img1, role: 'Intern' },
      { name: 'Banky', img: img1, role: 'Admin' },
      { name: 'Banky', img: img1, role: 'Admin' },
      { name: 'Banky', img: img1, role: 'Admin' },
    ],

    deadline: "Jan 2025",
    id: 6,
  },

];

const Projects = () => {
  return (
    <div className="flex flex-col">
      <div className="mt-4 py-2 px-4">
        {/* Header */}
        <div className="flex justify-between items-center">
          <h1 className="uppercase font-bold text-2xl">Projects</h1>
          <Link to={`/home/projects/add-project`}>
            <button className="flex items-center gap-2 text-lg font-medium hover:bg-neutral-100 p-1 hover:rounded-lg transition-all duration-300">
              <span>Add Project</span> <img src={Add} alt="add" />
            </button>
          </Link>
        </div>
        <hr className="bg-black mt-1" />

        {/* Content */}
        <div className="mt-8 space-y-6">
          <p className="text-lg font-medium">Projects you're on</p>

          <div className="project overflow-x-auto">

            <div className="flex gap-10 pb-4 min-w-max">
              {info.map((project) => (
                <ProjectStatus key={project.id} project={project} />
              ))}
            </div>

          </div>
        </div>
        <div className='mt-10'>
          <h1 className="uppercase font-medium text-xl">Projects Report</h1>
          <ProjectList projectCounts={{ total: 6, completed: 3, inProgress: 3 }} />
        </div>
      </div>
    </div >
  );
};

export default Projects