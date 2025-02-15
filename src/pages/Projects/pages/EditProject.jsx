import { useLocation } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { ChevronDown, Plus, ChevronUp, Edit, Trash2 } from "lucide-react";
import BigGreenButton from "../../../components/BigGreenButton";
import DatePickerComp from "../../../components/DatePickerComp";
import MultipleSelect from "../../../components/MultipleSelect";
import { useRequest } from "../../../Modules/useRequest";
import { getSessionStorage } from "../../../Modules/getSessionStorage";
import toast from "react-hot-toast";
import { Navigate } from "react-router-dom";
import { Loader } from "lucide-react";

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
  const [allMembers, setAllMembers] = useState([]);
  const userStack = getSessionStorage("userStack", "");

  const [
    membersRequest,
    membersLoading,
    setMembersLoading,
    membersError,
    setMembersError,
  ] = useRequest();

  const [editRequest, editLoading, setEditLoading, editError, setEditError] =
    useRequest();



  useEffect(() => {
    if (projectData) {
      setProjectTitle(projectData.name || "");
      setProjectDescription(projectData.description || "");
      setObjectives(projectData.objectives || []);
      setSelectedDate(new Date(projectData.deadline));
      setSelectedMembers(projectData.team_members || []);
      setSelectedLeads(projectData.leads || []);
    }
  }, [projectData]);

  const handleMemberChange = (newSelectedMembers) => {
    setSelectedMembers(newSelectedMembers);

    setSelectedLeads((prev) =>
      prev.filter((lead) =>
        newSelectedMembers.some((member) => member.id === lead.id),
      ),
    );
  };
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

  const getStackMembers = async () => {
    const res = await membersRequest(
      `get_all_members`,
    );
    const data = await res.json();
    if (res.ok) {
      setAllMembers(data.members);
    }
    else {
      console.log(data)
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setEditLoading(true);
    if (!selectedDate || !selectedMembers[0] || !selectedLeads[0]) {
      console.log(selectedLeads);
      //Add validation
      toast.error("Add all required info");
      setEditLoading(false);
      return;
    }

    const res = await editRequest(`project/edit/${projectData._id}`, "PATCH", {
      name: projectTitle,
      description: projectDescription,
      objectives,
      leads: selectedLeads,
      team_members: selectedMembers,
      deadline: selectedDate,
      stack: userStack,
    });

    const data = await res.json();
    if (res.ok) {
      toast.success("Project created successfully");
      setTimeout(() => Navigate(-1), 2000);
    } else {
      console.log(data);
      toast.error(data.message);
    }
    setEditLoading(false);
  };

  useEffect(() => {
    getStackMembers();
  }, []);

  return (
    <div className="mt-4 min-h-screen overflow-y-auto px-6 py-4 fromLeft">
      <button className="mb-2 flex items-center gap-2 text-xl font-semibold tracking-wider">
        <span>Edit</span>{" "}
        <span className="text-navBg2">{projectData.name}</span>
      </button>
      <hr className="mt-1 bg-black" />

      <form
        className="mx-auto my-12 mt-8 flex flex-col gap-5 rounded-xl border px-10 py-8 shadow-lg"
        onSubmit={handleSubmit}
      >
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
            <MultipleSelect
              options={allMembers}
              selectedOptions={selectedMembers}
              onSelectionChange={handleMemberChange}
              buttonText="Add Team Members"
              className="w-full md:w-1/2"
            />

            {/* Select Leads */}
            <MultipleSelect
              options={selectedMembers}
              selectedOptions={selectedLeads}
              onSelectionChange={setSelectedLeads}
              buttonText="Add Team leads"
              className="w-full md:w-1/2"
              disabled={selectedMembers.length === 0}
            />
          </div>
          {/* Submit Button */}
          <div className="flex w-fit justify-center gap-6">
            <BigGreenButton type="submit">Save Changes</BigGreenButton>
            {editLoading && <Loader className="animate-spin text-navBg2" size={32} />}
          </div>
        </div>
      </form>
    </div>
  );
};

export default EditProject;
