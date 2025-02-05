import { useState, useRef, useEffect } from "react";
import CustomLabel from "../../../components/CustomLabel";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from "react-router-dom";
import { ChevronDown, Plus } from "lucide-react";
import { getSessionStorage } from "../../../Modules/getSessionStorage";
import { useRequest } from "../../../Modules/useRequest";
import toast from "react-hot-toast";
import BigGreenButton from "../../../components/BigGreenButton";
import { Loader2 } from "lucide-react";
import DatePickerComp from "../../../components/DatePickerComp";

const CreateProject = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [objectives, setObjectives] = useState([]);
  const [currentObjective, setCurrentObjective] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);
  const [allMembers, setAllMembers] = useState([]);
  const [selectedMembers, setSelectedMembers] = useState([]);
  const [selectedLeads, setSelectedLeads] = useState([]);
  const [showMembersDropdown, setShowMembersDropdown] = useState(false); //Use select and options input instead of creating the dropdown manually
  const [showLeadsDropdown, setShowLeadsDropdown] = useState(false); //Use select and options input instead of creating the dropdown manually
  const navigate = useNavigate();
  const [
    membersRequest,
    membersLoading,
    setMembersLoading,
    membersError,
    setMembersError,
  ] = useRequest();
  const [
    createRequest,
    createLoading,
    setCreateLoading,
    createError,
    setCreateError,
  ] = useRequest();
  const userStack = getSessionStorage("userStack", "");

  const handleMemberSelect = (intern) => {
    if (!selectedMembers.find((member) => member.id === intern.id)) {
      setSelectedMembers([...selectedMembers, intern]);
    } else {
      setSelectedMembers(
        selectedMembers.filter((member) => member.id !== intern.id),
      );
    }
  };

  const handleLeadSelect = (member) => {
    if (!selectedLeads.find((lead) => lead.id === member.id)) {
      setSelectedLeads([...selectedLeads, member]);
      console.log(selectedLeads);
      setSelectedMembers(selectedMembers.filter((member) => member));
    } else {
      setSelectedLeads(selectedLeads.filter((lead) => lead.id !== member.id));
    }
  };

  const addObjective = (event) => {
    if (currentObjective.trim() !== "") {
      setObjectives([...objectives, currentObjective]);
      setCurrentObjective("");
    }
    // ObjInput.current.focus();
    event.target.focus(); // We can just use the event to focus here so I removed the ref
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setCreateLoading(true);
    if (!selectedDate || !selectedMembers[0] || !selectedLeads[0]) {
      console.log(selectedLeads);
      //Add validation
      toast.error("Add all required info");
      setCreateLoading(false);
      return;
    }

    const res = await createRequest("project/create", "POST", {
      name,
      description,
      objectives,
      leads: selectedLeads,
      team_members: selectedMembers,
      deadline: selectedDate,
      stack: userStack,
    });

    const data = await res.json();
    if (res.ok) {
      toast.success("Project created successfully");
      setTimeout(() => navigate(-1), 2000);
    } else {
      print(data);
      toast.error(data.message);
    }
    setCreateLoading(false);
  };

  const getStackMembers = async () => {
    const res = await membersRequest(
      `get_${userStack === "Software" ? "soft" : "hard"}_members`,
    );
    const data = await res.json();
    if (res.ok) {
      setAllMembers(data.members);
    }
  };

  useEffect(() => {
    getStackMembers();
  }, []);

  // console.log(members)
  // console.log(selectedLeads, selectedMembers)
  return (
    <div className="mt-4 min-h-screen overflow-y-auto px-6 py-4">
      <button className="mb-2 flex items-center gap-2 text-xl font-medium tracking-wider">
        <span>Add Project</span>
        <div className="rounded-full bg-logo p-[2px]">
          <Plus color="white" />
        </div>
      </button>
      <hr className="mt-1 bg-black" />

      <form onSubmit={handleSubmit}>
        <div className="mt-4 space-y-6">
          <CustomLabel
            htmlFor="projectTitle"
            labelText="Project Name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="Add project name"
            required
          >
            Title
          </CustomLabel>

          <div>
            <label
              htmlFor="projectDescription"
              className="mb-1 inline-block font-medium text-black"
            >
              Project Description
            </label>
            <textarea
              id="projectDescription"
              value={description}
              onChange={(event) => setDescription(event.target.value)}
              className="block h-32 w-full resize-none appearance-none rounded-lg border border-gray-400 px-4 py-3 focus:outline-black"
              placeholder="Add project description"
              rows={5}
              required
            />
          </div>

          {/* Objectives  */}
          <div className="w-full">
            <h2 className="mb-2 font-medium">Objectives</h2>
            <div className="mb-2 flex items-center gap-2">
              <input
                type="text"
                value={currentObjective}
                onChange={(e) => setCurrentObjective(e.target.value)}
                className="w-full rounded-lg border border-gray-400 px-3 py-2 focus:outline-black"
                placeholder="Add an objective"
              />
              <button
                onClick={addObjective}
                className="rounded-lg bg-navBg2 px-4 py-2 font-medium text-white"
              >
                Add
              </button>
              <p className="flex aspect-square h-8 w-8 flex-1 items-center justify-center rounded-full bg-logo p-2 font-medium text-black">
                {objectives.length}
              </p>
            </div>
            <ul className="ml-6 list-outside space-y-1 text-sm">
              {objectives.map((objective, index) => (
                <li key={index} className="break-words">
                  {objective}
                </li>
              ))}
            </ul>
          </div>

          <DatePickerComp
            selected={selectedDate}
            change={(date) => {
              console.log(date);
              setSelectedDate(date);
            }}
            placeholder="  Select a deadline"
            label="Deadline"
          />
          <div className="mt-8 flex flex-col gap-8 md:flex-row">
            <div className="relative w-full md:w-1/2">
              <button
                type="button"
                onClick={() => setShowMembersDropdown(!showMembersDropdown)}
                className="flex items-center gap-2 rounded-lg bg-navBg2 px-4 py-2 text-white"
              >
                <span>Add Team Members</span> <ChevronDown />
              </button>
              {showMembersDropdown && (
                <div className="absolute z-10 mt-2 max-h-48 w-3/4 overflow-y-auto rounded-lg border border-gray-300 bg-white">
                  {allMembers.map((intern) => (
                    <div key={intern.id} className="flex items-center p-1">
                      <input
                        type="checkbox"
                        checked={selectedMembers.some(
                          (member) => member.id === intern.id,
                        )}
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
                onClick={() => setShowLeadsDropdown(!showLeadsDropdown)}
                className="flex items-center gap-2 rounded-lg bg-navBg2 px-4 py-2 text-white"
              >
                <span>Add Team Leads</span> <ChevronDown />
              </button>
              {showLeadsDropdown && selectedMembers.length > 0 && (
                <div className="absolute z-10 mt-2 max-h-48 w-3/4 overflow-y-auto rounded-lg border border-gray-300 bg-white">
                  {selectedMembers.map((member) => (
                    <div key={member.id} className="flex items-center p-1">
                      <input
                        type="checkbox"
                        checked={selectedLeads.some(
                          (lead) => lead.id === member.id,
                        )}
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
          <div className="flex items-center gap-4">
            <BigGreenButton type="submit">Submit</BigGreenButton>
            {createLoading && <Loader2 className="animate-spin text-navBg2" />}
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateProject;
