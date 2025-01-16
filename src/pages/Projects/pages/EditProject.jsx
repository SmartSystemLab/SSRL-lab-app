import { useLocation } from "react-router-dom"
import { useState, useEffect, useRef } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { IoIosArrowDown } from "react-icons/io"
import { X, Pencil } from 'lucide-react'


const EditProject = () => {

    const location = useLocation()
    const projectData = location.state
    console.log(projectData)
    const [projectTitle, setProjectTitle] = useState('')
    const [projectDescription, setProjectDescription] = useState('')
    const [objectives, setObjectives] = useState([])
    const [currentObjective, setCurrentObjective] = useState('')
    const [editingIndex, setEditingIndex] = useState(null)
    const [selectedDate, setSelectedDate] = useState(null)
    const [selectedMembers, setSelectedMembers] = useState([])
    const [selectedLeads, setSelectedLeads] = useState([])

    const [showMembersDropdown, setShowMembersDropdown] = useState(false)
    const [showLeadsDropdown, setShowLeadsDropdown] = useState(false)
    const toggleMembersDropdown = () => setShowMembersDropdown(!showMembersDropdown)
    const toggleLeadsDropdown = () => setShowLeadsDropdown(!showLeadsDropdown)

    useEffect(() => {

        if (projectData) {
            setProjectTitle(projectData.name || '')
            setProjectDescription(projectData.description || '')
            setObjectives(projectData.objectives || [])
            setSelectedDate(new Date(projectData.deadline))
            setSelectedMembers(projectData.teamMembers || [])
            setSelectedLeads(projectData.leads || [])
        }
    }, [projectData])

    const handleAddOrUpdateObjective = () => {
        if (currentObjective.trim() !== '') {
            if (editingIndex !== null) {
                // Update selected objective
                const updatedObjectives = [...objectives];
                updatedObjectives[editingIndex] = currentObjective;
                setObjectives(updatedObjectives);
                setEditingIndex(null);
            } else {

                setObjectives([...objectives, currentObjective]);
            }
            setCurrentObjective('');
        }
    }

    const handleEditObjective = (index) => {
        setCurrentObjective(objectives[index]);
        setEditingIndex(index);
    }
    const handleDeleteObjective = (index) => {
        const updatedObjectives = objectives.filter((_, i) => i !== index);
        setObjectives(updatedObjectives);
        if (editingIndex === index) {
            setEditingIndex(null);
        }
    }
    // const handleMemberSelect = (intern) => {
    //     if (!selectedMembers.find((member) => member.id === intern.id)) {
    //         setSelectedMembers([...selectedMembers, intern])
    //     } else {
    //         setSelectedMembers(selectedMembers.filter((member) => member.id !== intern.id))
    //     }
    // };

    // const handleLeadSelect = (member) => {
    //     if (!selectedLeads.find((lead) => lead.id === member.id)) {
    //         setSelectedLeads([...selectedLeads, member])
    //     } else {
    //         setSelectedLeads(selectedLeads.filter((lead) => lead.id !== member.id))
    //     }
    // };
    return (

        <div className="mt-4 px-6 py-4 min-h-screen overflow-y-auto">
            <button className="flex items-center gap-2 text-xl font-semibold tracking-wider mb-2">
                <span>Edit</span>  <span className="text-navBg2">{projectData.name}</span>
            </button>
            <hr className="bg-black mt-1" />

            <form>
                <div className="mt-4 space-y-4">
                    {/* Project Title */}
                    <label htmlFor="projectTitle" className="text-black inline-block font-medium text-lg mb-1">
                        Project Name
                    </label>
                    <input
                        type="text"
                        id="projectTitle"
                        value={projectTitle}
                        onChange={(e) => setProjectTitle(e.target.value)}
                        className="appearance-none relative block w-full px-3 py-2 border border-gray-400 rounded-lg focus:outline-none"
                    />

                    {/* Project Description */}
                    <label htmlFor="projectDescription" className="text-black inline-block font-medium text-lg mb-1">
                        Project Description
                    </label>
                    <textarea
                        id="projectDescription"
                        value={projectDescription}
                        onChange={(e) => setProjectDescription(e.target.value)}
                        className="appearance-none block w-full px-4 py-3 border border-gray-400 rounded-lg focus:outline-none resize-none h-32"
                    />

                    {/* Objectives */}
                    <label className="font-medium text-lg">Objectives</label>
                    <div className="flex gap-2">
                        <input
                            type="text"
                            value={currentObjective}
                            onChange={(e) => setCurrentObjective(e.target.value)}
                            placeholder={editingIndex !== null ? "Edit Objective" : "Add Objective"}
                            className="w-full px-3 py-2 border border-gray-400 rounded-lg focus:outline-none"
                        />
                        <button
                            type="button"
                            onClick={handleAddOrUpdateObjective}
                            className="px-4 py-2 bg-navBg2 text-white rounded-lg"
                        >
                            {editingIndex !== null ? "Update" : "Add"}
                        </button>
                    </div>
                    <ul className="list-decimal list-outside ml-4 mt-2">
                        {objectives.map((objective, index) => (
                            <li key={index} className="flex gap-2 items-center border-2 p-1 mb-1 w-3/4">
                                <span>{objective}</span>

                                <button
                                    type="button"
                                    onClick={() => handleEditObjective(index)}
                                    className=" m-2 text-yellow-600"
                                >
                                    < Pencil />
                                </button>
                                <button
                                    type="button"
                                    onClick={() => handleDeleteObjective(index)}
                                    className="text-red-600"
                                >
                                    <X />
                                </button>

                            </li>
                        ))}
                    </ul>

                    {/* Deadline ceejay do am yourself */}
                    <label className="font-medium text-lg">Deadline</label>
                    {/* <DatePicker
                        selected={selectedDate}
                        onChange={(date) => setSelectedDate(date)}
                        dateFormat="dd/MM/yyyy"
                        className="w-full px-3 py-2 border border-gray-400 rounded-lg focus:outline-none"
                    /> */}

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
                                    {selectedMembers.map((intern) => (
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


                        <div className="relative w-full md:w-1/2">
                            <button
                                type="button"
                                onClick={toggleLeadsDropdown}
                                className="px-4 py-2 bg-navBg2 text-white rounded-lg flex gap-2 items-center"
                            >
                                <span>Add Team Leads</span> <IoIosArrowDown className=' w-4 h-4' />
                            </button>
                            {showLeadsDropdown && selectedMembers.length > 0 && (
                                <div className="absolute z-10 w-3/4 bg-white border border-gray-300 rounded-lg mt-2 max-h-48 overflow-y-auto">
                                    {selectedLeads.map((member) => (
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
                    {/* Submit Button */}
                    <button type="submit" className="bg-logo text-white px-4 py-2 text-lg rounded-xl mt-4">
                        Save Changes
                    </button>
                </div>
            </form>
        </div>

    )
}

export default EditProject