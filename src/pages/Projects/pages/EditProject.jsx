import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect, useRef, useCallback } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { ChevronDown, Plus, ChevronUp, Edit, Trash2 } from "lucide-react";
import BigGreenButton from "../../../components/UI/BigGreenButton";
import DatePickerComp from "../../../components/UI/DatePickerComp";
import MemberSelect from "../../../components/UI/MemberSelect";
import { useGetMembers, useRequest } from "../../../hooks/useRequest";
import toast from "react-hot-toast";
import { Navigate } from "react-router-dom";
import { Loader } from "lucide-react";
import Spinner from "@components/UI/Spinner";

const EditProject = () => {
  const location = useLocation();
  const projectData = location.state;
  const {
    project_id,
    name,
    description,
    objectives,
    deadline,
    team_members,
    leads,
  } = projectData;

  const [projectTitle, setProjectTitle] = useState(name);
  const [projectDescription, setProjectDescription] = useState(description);
  const [newObjectives, setNewObjectives] = useState(objectives);
  const [selectedDate, setSelectedDate] = useState(new Date(deadline));
  const [selectedMembers, setSelectedMembers] = useState(team_members);
  const [selectedLeads, setSelectedLeads] = useState(leads);
  const [allMembers, setAllMembers] = useState([]);
  const [currentObjective, setCurrentObjective] = useState("");
  const [editingIndex, setEditingIndex] = useState(null);

  const navigate = useNavigate();
  const { members, membersLoading, membersError } = useGetMembers("allmembers");
  const [editRequest, editLoading, setEditLoading, editError, setEditError] =
    useRequest();

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
        const updatedObjectives = [...newObjectives];
        updatedObjectives[editingIndex] = currentObjective;
        setNewObjectives(updatedObjectives);
        setEditingIndex(null);
      } else {
        setNewObjectives([...newObjectives, currentObjective]);
      }
      setCurrentObjective("");
    }
  };

  const handleEditObjective = (index) => {
    setCurrentObjective(newObjectives[index]);
    setEditingIndex(index);
  };

  const handleDeleteObjective = (index) => {
    const updatedObjectives = newObjectives.filter((_, i) => i !== index);
    setNewObjectives(updatedObjectives);
    if (editingIndex === index) {
      setEditingIndex(null);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setEditLoading(true);
    if (!selectedDate || !selectedMembers[0] || !selectedLeads[0]) {
      toast.error("Add all required info");
      setEditLoading(false);
      return;
    }

    const payload = {};

    if (projectTitle !== name) payload.name = projectTitle;
    if (projectDescription !== description)
      payload.description = projectDescription;
    if (JSON.stringify(newObjectives) !== JSON.stringify(objectives))
      payload.objectives = newObjectives;
    if (JSON.stringify(selectedLeads) !== JSON.stringify(leads))
      payload.leads = selectedLeads;
    if (JSON.stringify(selectedMembers) !== JSON.stringify(team_members))
      payload.team_members = selectedMembers;
    if (
      new Date(selectedDate).toISOString() !== new Date(deadline).toISOString()
    )
      payload.deadline = selectedDate;

    if (Object.keys(payload).length === 0) {
      toast("No changes made");
      setEditLoading(false);
      return;
    }

    const res = await editRequest(`project/edit/${project_id}`, "PATCH", payload);
    const data = await res.json();

    if (res.ok) {
      toast.success("Project edited successfully");
      setTimeout(() => navigate(-1), 2000);
    } else {
      toast.error(data.message);
    }
    
    setEditLoading(false);
  };

  useEffect(() => {
    setAllMembers(members);
  }, [members]);

  return (
    <div className="fromLeft mt-4 min-h-screen overflow-y-auto px-6 py-4">
      <button className="mb-2 flex items-center gap-2 text-xl font-semibold tracking-wider">
        <span>Edit</span> <span className="text-navBg2">{name}</span>
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
              {newObjectives.map((objective, index) => (
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
            <MemberSelect
              allOptions={allMembers}
              selectedOptions={selectedMembers}
              onSelectionChange={handleMemberChange}
              buttonText="Add Team Members"
              className="w-full md:w-1/2"
              loading={membersLoading}
            />

            {/* Select Leads */}
            <MemberSelect
              allOptions={selectedMembers}
              selectedOptions={selectedLeads}
              onSelectionChange={setSelectedLeads}
              buttonText="Add Team leads"
              className="w-full md:w-1/2"
              disabled={selectedMembers.length === 0}
              loading={membersLoading}
            />
          </div>
          {/* Submit Button */}
          <div className="flex w-fit justify-center gap-6">
            <BigGreenButton type="submit">Save Changes</BigGreenButton>
            {editLoading && <Spinner />}
          </div>
        </div>
      </form>
    </div>
  );
};

export default EditProject;
