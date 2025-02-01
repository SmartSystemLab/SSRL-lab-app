import { useState, useRef, useEffect } from "react";
import CustomLabel from "../../../components/CustomLabel";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from "react-router-dom";
import { ChevronDown, Plus } from "lucide-react";
import { getSessionStorage } from "../../../Modules/getSessionStorage";
import { useRequest } from "../../../Modules/useRequest";

const CreateProject = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [objectives, setObjectives] = useState([]);
  const [currentObjective, setCurrentObjective] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);
  const [allMembers, setAllMembers] = useState([]);
  const [selectedMembers, setSelectedMembers] = useState([]);
  const [selectedLeads, setSelectedLeads] = useState([]);
  const [showMembersDropdown, setShowMembersDropdown] = useState(false); //Use selec and options input instead of creating the dropdown manually
  const [showLeadsDropdown, setShowLeadsDropdown] = useState(false); //Use selec and options input instead of creating the dropdown manually
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

  const handleMemberSelect = (intern) => {
    if (!selectedMembers.find((member) => member.id === intern.id)) {
      setSelectedMembers([...selectedMembers, intern]);
    } else {
      setSelectedMembers(
        selectedMembers.filter((member) => member.id !== intern.id)
      );
    }
  };

  const handleLeadSelect = (member) => {
    if (!selectedLeads.find((lead) => lead.id === member.id)) {
      setSelectedLeads([...selectedLeads, member]);
      setSelectedMembers(selectedMembers.filter((e)))
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
    const res = await createRequest('project/create', 'POST', {
      name,
      description,
      objectives,

    })
    const newProject = [
      name,
      description,
      objectives,
      selectedDate,
      selectedLeads,
      selectedMembers,
    ];
    console.log(newProject);
    // navigate(-1);
  };

  const getStackMembers = async () => {
    const userStack = getSessionStorage("userStack", "");
    const res = await membersRequest(
      `get_${userStack === "Software" ? "soft" : "hard"}_members`
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
    <div className="mt-4 px-6 py-4 min-h-screen overflow-y-auto">
      <button className="flex items-center gap-2 text-xl font-semibold tracking-wider mb-2">
        <span>Add Project</span>
        <div className="p-[2px] bg-logo rounded-full">
          <Plus color="white" />
        </div>
      </button>
      <hr className="bg-black mt-1" />

      <form onSubmit={handleSubmit}>
        <div className="mt-4 space-y-4 ">
          <CustomLabel
            htmlFor="projectTitle"
            labelText="Project Name"
            inputType="text"
            inputValue={name}
            required={true}
            onChange={(event) => setName(event.target.value)}
            //   onBlur={() => {}}
            labelCLassName="text-black inline-block font-medium text-lg  mb-1 "
            inputClassName="appearance-none relative block w-full  px-3 py-2 border border-gray-400 rounded-lg focus:outline-none"
            placeholder="Add project name"
          />
          <div>
            <label
              htmlFor="projectDescription"
              className="text-black inline-block font-medium text-lg mb-1"
            >
              Project Description
            </label>
            <textarea
              id="projectDescription"
              value={description}
              onChange={(event) => setDescription(event.target.value)}
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
                className="w-full px-3 py-2 border border-gray-400 rounded-lg focus:outline-none"
                placeholderText="Select a deadline"
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-8 mt-8">
            <div className="relative w-full md:w-1/2">
              <button
                type="button"
                onClick={() => setShowMembersDropdown(!showMembersDropdown)}
                className="px-4 py-2 bg-navBg2 text-white rounded-lg flex gap-2 items-center"
              >
                <span>Add Team Members</span> <ChevronDown />
              </button>
              {showMembersDropdown && (
                <div className="absolute z-10 w-3/4 bg-white border border-gray-300 rounded-lg mt-2 max-h-48 overflow-y-auto">
                  {allMembers.map((intern) => (
                    <div key={intern.id} className="flex items-center p-1">
                      <input
                        type="checkbox"
                        checked={selectedMembers.some(
                          (member) => member.id === intern.id
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
                className="px-4 py-2 bg-green-600 text-white rounded-lg flex gap-2 items-center"
              >
                <span>Add Team Leads</span> <ChevronDown />
              </button>
              {showLeadsDropdown && selectedMembers.length > 0 && (
                <div className="absolute z-10 w-3/4 bg-white border border-gray-300 rounded-lg mt-2 max-h-48 overflow-y-auto">
                  {selectedMembers.map((member) => (
                    <div key={member.id} className="flex items-center p-1">
                      <input
                        type="checkbox"
                        checked={selectedLeads.some(
                          (lead) => lead.id === member.id
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
          <button
            type="submit"
            className=" bg-navBg2 text-white px-4 py-2 text-lg rounded-xl cursor-pointer mx-auto mt-2 font-semibold"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateProject;
