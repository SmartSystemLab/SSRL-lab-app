import { useParams } from 'react-router-dom'
import Dropdown from './components/Dropdown'
import Dot from './../../assets/Dot.svg'

const ProjectCard = () => {
    const { id } = useParams();

    // Dummy data for objectives, leads, and team members
    const objectives = [
        "Research and design user interface that allows for seamless interaction and user feedback. and Develop backend services with a focus on scalability and security, ensuring data integrity and availability.",
        "Develop backend services with a focus on scalability and security, ensuring data integrity and availability.",
        "Integrate third-party APIs for real-time data synchronization across platforms.",
        "Conduct user testing to gather feedback and improve overall user experience.",
    ];


    const leads = ["Ceejay", "Dabira"];
    const teamMembers = ["Bolu", "Banky", "Kunle", "Shade"];

    return (
        <div className="py-4 px-6 mt-4 border-2 shadow-sm w-11/12 mx-auto space-y-6 rounded-lg bg-white">
            {/* Project Header */}
            <div className="relative mt-4">
                <h1 className="text-xl font-bold">
                    Project Name: SSRL LAB APPLICATION {id}
                </h1>
                <Dropdown />
            </div>

            {/* Project Details */}
            <div className="w-full md:w-4/5 space-y-6">
                {/* Description */}
                <h2 className="text-lg font-medium">Description</h2>
                <p className="text-justify">
                    <span className="font-medium"> Focus: </span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam ea laboriosam corporis optio magni perferendis possimus debitis, praesentium cupiditate? Natus unde officiis ratione officia doloremque quo totam voluptate eos vitae? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, iste.
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium hic expedita, assumenda, inventore atque dolorem suscipit consequuntur, officia iusto esse cumque consequatur sit nihil eaque aut voluptatibus. Quae, officiis eligendi.
                </p>

                {/* Recipient and Deadline */}
                <div className="flex flex-col md:flex-row md:justify-between md:items-center space-y-2 md:space-y-0">
                    <span className="font-medium">
                        Recipient: <span className="font-normal">Prof. Mrs. Dahunsi</span>
                    </span>
                    <span className="font-medium">
                        Deadline: <span className="font-normal">January 13th 2025</span>
                    </span>
                </div>
            </div>

            {/* Objectives, Leads, and Team Members */}
            <div className="flex flex-col md:flex-row gap-6 md:gap-16">
                {/* Objectives */}
                <div className="md:w-1/2">
                    <h2 className="text-lg font-medium">Objectives</h2>
                    <ul className="list-decimal list-outside space-y-2 mt-2 ml-6 sw-full break-words">
                        {objectives.map((objective, index) => (
                            <li key={index} className='pl-2'>{objective}</li>
                        ))}
                    </ul>

                </div>

                {/* Leads and Team Members */}
                <div className="md:w-1/2 space-y-6">
                    {/* Leads */}
                    <div>
                        <h2 className="text-lg font-medium">Leads</h2>
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
                        <h2 className="text-lg font-medium">Team Members</h2>
                        <ul className=" space-y-2 mt-2">
                            {teamMembers.map((member, index) => (
                                <li key={index} className="ml-4 flex items-center gap-2">
                                    <img src={Dot} alt="dot" className="w-2 h-2" />
                                    {member}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            <button className=' bg-logo/75 text-lg text-white py-1 px-2 rounded-md font-medium ml-4 hover:underline transition-all duration-200'>Submissions </button>
        </div>
    );
};

export default ProjectCard
