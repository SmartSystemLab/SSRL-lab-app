import { useState, useRef } from 'react'
import Add from '../../assets/Add.svg'
import CustomLabel from '../../components/CustomLabel'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { IoIosArrowDown } from "react-icons/io";
import { useNavigate } from 'react-router-dom'


const CreateProject = () => {

    const [projectTitle, setProjectTitle] = useState('')
    const [projectDescription, setProjectDescription] = useState('')
    const [objectives, setObjectives] = useState([])
    const [currentObjective, setCurrentObjective] = useState('')
    const ObjInput = useRef(null)
    const [selectedDate, setSelectedDate] = useState(null)
    const [selectedMembers, setSelectedMembers] = useState([])
    const [selectedLeads, setSelectedLeads] = useState([])
    const [showMembersDropdown, setShowMembersDropdown] = useState(false)
    const [showLeadsDropdown, setShowLeadsDropdown] = useState(false)
    const navigate = useNavigate()


    const toggleMembersDropdown = () => setShowMembersDropdown(!showMembersDropdown)
    const toggleLeadsDropdown = () => setShowLeadsDropdown(!showLeadsDropdown)

    const interns = [
        { id: '1', name: 'Oluwatofunmi Agboola' },
        { id: '2', name: 'Ceejay ' },
        { id: '3', name: 'Adebola' },
        { id: '4', name: 'dabira' },
    ]

    const handleMemberSelect = (intern) => {
        if (!selectedMembers.find((member) => member.id === intern.id)) {
            setSelectedMembers([...selectedMembers, intern])
        } else {
            setSelectedMembers(selectedMembers.filter((member) => member.id !== intern.id))
        }
    };

    const handleLeadSelect = (member) => {
        if (!selectedLeads.find((lead) => lead.id === member.id)) {
            setSelectedLeads([...selectedLeads, member])
        } else {
            setSelectedLeads(selectedLeads.filter((lead) => lead.id !== member.id))
        }
    };


    const addObjective = () => {
        if (currentObjective.trim() !== '') {
            setObjectives([...objectives, currentObjective])
            setCurrentObjective('')
        }
        ObjInput.current.focus()
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        const newProject = [projectTitle, projectDescription, objectives, selectedDate, selectedLeads, selectedMembers]
        console.log(newProject)
        navigate(-1)
    }


    // console.log(selectedLeads, selectedMembers)
    return (
        <div className='mt-4 px-6 py-4 min-h-screen overflow-y-auto'>
            <button className="flex items-center gap-2 text-xl font-semibold tracking-wider mb-2">
                <span>Add Project</span> <img src={Add} alt="add" />
            </button>
            <hr className="bg-black mt-1" />

            <form onSubmit={handleSubmit}>
                <div className="mt-4 space-y-4 ">
                    <CustomLabel
                        htmlFor="projectTitle"
                        labelText="Project Name"
                        inputType="text"
                        inputValue={projectTitle}
                        onChange={(event) => setProjectTitle(event.target.value)}
                        //   onBlur={() => {}}
                        labelCLassName="text-black inline-block font-medium text-lg  mb-1 "
                        inputClassName="appearance-none relative block w-full  px-3 py-2 border border-gray-400 rounded-lg focus:outline-none"
                        placeholder='Add project name'
                    />
                    <div>
                        <label htmlFor="projectDescription" className="text-black inline-block font-medium text-lg mb-1">
                            Project Description
                        </label>
                        <textarea
                            value={projectDescription}
                            onChange={(event) => setProjectDescription(event.target.value)}
                            className="appearance-none block w-full px-4 py-3 border border-gray-400 rounded-lg focus:outline-none resize-none h-32"
                            placeholder="Add project description"
                            rows={5}
                        />
                    </div>
                    <div className="flex flex-col md:flex-row gap-8 mt-8 items-start">
                        {/* Objectives  */}
                        <div className="w-full md:w-1/2">
                            <h2 className="font-medium text-lg mb-2">Objectives</h2>
                            <div className="flex gap-2 mb-2">
                                <input
                                    type="text"
                                    value={currentObjective}
                                    onChange={(e) => setCurrentObjective(e.target.value)}
                                    ref={ObjInput}
                                    className="w-full px-3 py-2 border border-gray-400 rounded-lg focus:outline-none"
                                    placeholder="Add an objective"
                                />
                                <button
                                    type="button"
                                    onClick={addObjective}
                                    className="px-4 py-2 bg-blue-600 text-white rounded-lg"
                                >
                                    Add
                                </button>
                            </div>
                            <ul className="list-decimal list-outside ml-2 space-y-1 italic">
                                {objectives.map((objective, index) => (
                                    <li key={index} className="break-words">
                                        {objective}
                                    </li>
                                ))}
                            </ul>
                            <p className="mt-2 text-gray-600">
                                Total Objectives: {objectives.length}
                            </p>
                        </div>

                        {/* Date Picker uses react date picker library */}
                        <div className="w-full md:w-1/2">
                            <h2 className="font-medium text-lg mb-2">Deadline</h2>
                            <DatePicker
                                selected={selectedDate}
                                onChange={(date) => setSelectedDate(date)}
                                dateFormat="dd/MM/yyyy"
                                className="w-full px-3 py-2 border border-gray-400 rounded-lg focus:outline-none"
                                placeholderText="Select a deadline"
                            />
                        </div>
                    </div>

                    <div className='flex flex-col md:flex-row gap-8 mt-8'>
                        <div className="relative w-full md:w-1/2">
                            <button
                                type="button"
                                onClick={toggleMembersDropdown}
                                className="px-4 py-2 bg-navBg2 text-white rounded-lg flex gap-2 items-center"
                            >
                                <span>Add Team Members</span> <IoIosArrowDown className=' w-4 h-4' />
                            </button>
                            {showMembersDropdown && (
                                <div className="absolute z-10 w-3/4 bg-white border border-gray-300 rounded-lg mt-2 max-h-48 overflow-y-auto">
                                    {interns.map((intern) => (
                                        <div key={intern.id} className="flex items-center p-1">
                                            <input
                                                type="checkbox"
                                                checked={selectedMembers.some((member) => member.id === intern.id)}
                                                onChange={() => handleMemberSelect(intern)}
                                                className="mr-2"
                                            />
                                            {intern.name}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Select Leads */}
                        <div className="relative w-full md:w-1/2">
                            <button
                                type="button"
                                onClick={toggleLeadsDropdown}
                                className="px-4 py-2 bg-green-600 text-white rounded-lg flex gap-2 items-center"
                            >
                                <span>Add Team Leads</span> <IoIosArrowDown className=' w-4 h-4' />
                            </button>
                            {showLeadsDropdown && selectedMembers.length > 0 && (
                                <div className="absolute z-10 w-3/4 bg-white border border-gray-300 rounded-lg mt-2 max-h-48 overflow-y-auto">
                                    {selectedMembers.map((member) => (
                                        <div key={member.id} className="flex items-center p-1">
                                            <input
                                                type="checkbox"
                                                checked={selectedLeads.some((lead) => lead.id === member.id)}
                                                onChange={() => handleLeadSelect(member)}
                                                className="mr-2"
                                            />
                                            {member.name}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                    <button
                        type='submit'
                        className=' bg-[#58249c] text-white px-4 py-2 text-lg rounded-xl cursor-pointer mx-auto mt-2 font-semibold'
                    >Submit</button>
                </div>
            </form>
        </div>
    )
}


export default CreateProject