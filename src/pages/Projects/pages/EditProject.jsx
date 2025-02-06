import { useLocation } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { IoIosArrowDown } from "react-icons/io";
import { Edit } from "lucide-react";
import { Trash2 } from "lucide-react";
import DatePickerComp from "../../../components/DatePickerComp";

const EditProject = () => {
  const location = useLocation();
  const projectData = location.state;
  const [projectTitle, setProjectTitle] = useState("");
  const [projectDescription, setProjectDescription] = useState("");
  const [objectives, setObjectives] = useState([]);
  const [currentObjective, setCurrentObjective] = useState("");
  const [editingIndex, setEditingIndex] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedMembers, setSelectedMembers] = useState([]);
  const [selectedLeads, setSelectedLeads] = useState([]);

  const [showMembersDropdown, setShowMembersDropdown] = useState(false);
  const [showLeadsDropdown, setShowLeadsDropdown] = useState(false);
  const toggleMembersDropdown = () =>
    setShowMembersDropdown(!showMembersDropdown);
  const toggleLeadsDropdown = () => setShowLeadsDropdown(!showLeadsDropdown);

  useEffect(() => {
    if (projectData) {
      setProjectTitle(projectData.name || "");
      setProjectDescription(projectData.description || "");
      setObjectives(projectData.objectives || []);
      setSelectedDate(new Date(projectData.deadline));
      setSelectedMembers(projectData.teamMembers || []);
      setSelectedLeads(projectData.leads || []);
    }
  }, [projectData]);

  const handleAddOrUpdateObjective = () => {
    if (currentObjective.trim() !== "") {
      if (editingIndex !== null) {
        // Update selected objective
        const updatedObjectives = [...objectives];
        updatedObjectives[editingIndex] = currentObjective;
        setObjectives(updatedObjectives);
        setEditingIndex(null);
      } else {
        setObjectives([...objectives, currentObjective]);
      }
      setCurrentObjective("");
    }
  };

  const handleEditObjective = (index) => {
    setCurrentObjective(objectives[index]);
    setEditingIndex(index);
  };
  const handleDeleteObjective = (index) => {
    const updatedObjectives = objectives.filter((_, i) => i !== index);
    setObjectives(updatedObjectives);
    if (editingIndex === index) {
      setEditingIndex(null);
    }
  };
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
    <div className="mt-4 min-h-screen overflow-y-auto px-6 py-4">
      <button className="mb-2 flex items-center gap-2 text-xl font-semibold tracking-wider">
        <span>Edit</span>{" "}
        <span className="text-navBg2">{projectData.name}</span>
      </button>
      <hr className="mt-1 bg-black" />

      <form>
        <div className="mt-4 space-y-6">
          {/* Project Title */}
          <div>
            <label
              htmlFor="projectTitle"
              className="mb-1 inline-block font-medium text-black"
            >
              Project Name
            </label>
            <input
              type="text"
              id="projectTitle"
              value={projectTitle}
              onChange={(e) => setProjectTitle(e.target.value)}
              className="relative mb-2 block w-full appearance-none rounded-lg border border-gray-400 px-3 py-2 focus:outline-none"
            />
          </div>

          {/* Project Description */}
          <div>
            <label
              htmlFor="projectDescription"
              className="mb-1 inline-block font-medium text-black"
            >
              Project Description
            </label>
            <textarea
              id="projectDescription"
              value={projectDescription}
              onChange={(e) => setProjectDescription(e.target.value)}
              className="block h-32 w-full resize-none appearance-none rounded-lg border border-gray-400 px-4 py-3 focus:outline-none"
            />
          </div>

          {/* Objectives */}
          <div>
            <label className="font-medium">Objectives</label>
            <div className="mt-1 flex gap-2">
              <input
                type="text"
                value={currentObjective}
                onChange={(e) => setCurrentObjective(e.target.value)}
                placeholder={
                  editingIndex !== null ? "Edit Objective" : "Add Objective"
                }
                className="w-full rounded-lg border border-gray-400 px-3 py-2 focus:outline-black"
              />
              <button
                type="button"
                onClick={handleAddOrUpdateObjective}
                className="rounded-lg bg-navBg2 px-4 py-2 text-white"
              >
                {editingIndex !== null ? "Update" : "Add"}
              </button>
            </div>
            <ul className="mt-2 flex w-3/4 max-w-[560px] list-outside list-decimal flex-col gap-2 text-sm">
              {objectives.map((objective, index) => (
                <li
                  key={index}
                  className="mb-1 flex items-center justify-between gap-2 rounded-md border-2 p-2 hover:border-black"
                >
                  <span className="truncate">{objective}</span>
                  <div className="flex w-fit items-center gap-3">
                    <button
                      type="button"
                      onClick={() => handleEditObjective(index)}
                      className="hover:scale-105"
                    >
                      <Edit size={20} />
                    </button>
                    <button
                      type="button"
                      onClick={() => handleDeleteObjective(index)}
                      className="hover:scale-105"
                    >
                      <Trash2 size={20} color="red" />
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex w-fit items-center gap-4">
            <DatePickerComp
              selected={selectedDate}
              change={(date) => {
                console.log(date);
                setSelectedDate(date);
              }}
              label="Deadline"
              className="w-full rounded-lg border border-gray-400 px-3 py-2 focus:outline-none"
            />
          </div>
          <div className="mt-8 flex flex-col gap-8 md:flex-row">
            <div className="relative w-full md:w-1/2">
              <button
                type="button"
                onClick={toggleMembersDropdown}
                className="flex items-center gap-2 rounded-lg bg-navBg2 px-4 py-2 text-white"
              >
                <span>Add Team Members</span>{" "}
                <IoIosArrowDown className="h-4 w-4" />
              </button>
              {showMembersDropdown && (
                <div className="absolute z-10 mt-2 max-h-48 w-3/4 overflow-y-auto rounded-lg border border-gray-300 bg-white">
                  {selectedMembers.map((intern) => (
                    <div key={intern.id} className="flex items-center p-1">
                      <input
                        type="checkbox"
                        checked={selectedMembers.some(
                          (member) => member.id === intern.id,
                        )}
                        // onChange={() => handleMemberSelect(intern)}
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
                className="flex items-center gap-2 rounded-lg bg-navBg2 px-4 py-2 text-white"
              >
                <span>Add Team Leads</span>{" "}
                <IoIosArrowDown className="h-4 w-4" />
              </button>
              {showLeadsDropdown && selectedMembers.length > 0 && (
                <div className="absolute z-10 mt-2 max-h-48 w-3/4 overflow-y-auto rounded-lg border border-gray-300 bg-white">
                  {selectedLeads.map((member) => (
                    <div key={member.id} className="flex items-center p-1">
                      <input
                        type="checkbox"
                        checked={selectedLeads.some(
                          (lead) => lead.id === member.id,
                        )}
                        // onChange={() => handleLeadSelect(member)}
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
          <button
            type="submit"
            className="mt-4 rounded-xl bg-logo px-4 py-2 text-lg text-white"
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditProject;
