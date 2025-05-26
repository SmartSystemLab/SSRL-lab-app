import { useState, useEffect } from "react";
import CustomLabel from "../../../components/UI/CustomLabel";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from "react-router-dom";
import { ChevronDown, Plus, ChevronUp } from "lucide-react";
import { getSessionStorage } from "../../../utils/getSessionStorage";
import { useGetMembers, useRequest } from "../../../hooks/useRequest";
import toast from "react-hot-toast";
import BigGreenButton from "../../../components/UI/BigGreenButton";
import { Loader2 } from "lucide-react";
import DatePickerComp from "../../../components/UI/DatePickerComp";
import MultipleSelect from "../../../components/UI/MemberSelect"
import Spinner from "@components/UI/Spinner";

const CreateProject = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [objectives, setObjectives] = useState([]);
  const [currentObjective, setCurrentObjective] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);
  const [allMembers, setAllMembers] = useState([]);
  const [selectedMembers, setSelectedMembers] = useState([]);
  const [selectedLeads, setSelectedLeads] = useState([]);

  const navigate = useNavigate();
  
  const {members, membersError, membersLoading} = useGetMembers('allmembers')
  const [
    createRequest,
    createLoading,
    setCreateLoading,
    createError,
    setCreateError,
  ] = useRequest();
  const userStack = getSessionStorage("userStack", "")

  const handleMemberChange = (newSelectedMembers) => {
    setSelectedMembers(newSelectedMembers)

    setSelectedLeads(prev =>
      prev.filter(lead =>
        newSelectedMembers.some(member => member.id === lead.id)
      )
    )
  }

  console.log(selectedMembers, selectedLeads)

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


  useEffect(() => {
    setAllMembers(members);
  }, [members]);


  return (
    <div className="mt-4 min-h-screen overflow-y-auto px-6 py-4 fromLeft">
      <button className="mb-2 flex items-center gap-2 text-xl font-medium tracking-wider">
        <span>Add Project</span>
        <div className="rounded-full bg-logo p-[2px]">
          <Plus color="white" />
        </div>
      </button>
      <hr className="mt-1 bg-black" />

      <form onSubmit={handleSubmit}
        className='mt-8 mx-auto my-12 flex flex-col gap-5 rounded-xl border px-10 py-8 shadow-lg'

      >
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
                className="w-full rounded-lg border border-gray-400 px-3 py-2 focus:outline-slate-600"
                placeholder="Add an objective"
              />
              <button
                onClick={addObjective}
                type="button"
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
            placeholder="Select a deadline"
            label="Deadline"
          />

          <div className="mt-8 flex flex-col gap-8 md:flex-row">

            {/* selected members */}
            <MultipleSelect
              allOptions={allMembers}
              selectedOptions={selectedMembers}
              onSelectionChange={handleMemberChange}
              buttonText="Add Team Members"
              className="w-full md:w-1/2"
              loading={membersLoading}
            />

            {/* Select Leads */}
            <MultipleSelect
              allOptions={selectedMembers}
              selectedOptions={selectedLeads}
              onSelectionChange={setSelectedLeads}
              buttonText="Add Team leads"
              className="w-full md:w-1/2"
              disabled={selectedMembers.length === 0}
              loading={membersLoading}
            />


          </div>

          <div className="flex items-center justify-end gap-4">
            <BigGreenButton type="submit">Submit</BigGreenButton>
            {createLoading && <Spinner />}
          </div>
        </div>

      </form >
    </div >
  );
};

export default CreateProject;
