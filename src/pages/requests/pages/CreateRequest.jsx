import { useState, useEffect } from 'react'
import { Plus, ChevronDown, ChevronUp } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom"
import CustomLabel from '../../../components/CustomLabel';
import Toggle from "../../../components/Toggle"
import Equipment from "../component/Equipment"
import Leave from "../component/Leave"
import Others from "../component/Others"
import MultipleSelect from "../../../components/MultipleSelect"
import BigGreenButton from '../../../components/BigGreenButton'

const CreateRequest = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const [title, setTitle] = useState('')
    const [activeOption, setActiveOption] = useState("equipment")
    const [leaveDates, setLeaveDates] = useState({ from: null, to: null })
    const [selectedRecipients, setSelectedRecipients] = useState([])

    const [eqpName, setEqpName] = useState('')
    const [quantity, setQuantity] = useState('')
    const [description, setDescription] = useState('')
    const [purpose, setPurpose] = useState('')

    const ToggleItems = ['equipment', 'leave', 'others']

    const recipients = [
        { name: 'ceejay', id: 1 },
        { name: 'nunsi', id: 2 },
        { name: 'mama', id: 3 },
        { name: 'jay', id: 4 },
        { name: 'jae', id: 5 },
        { name: 'jyeaa', id: 6 },
        { name: 'aye', id: 7 },
        { name: 'jye', id: 8 },
        { name: 'jy', id: 9 },
    ]


    const handleOptionsChange = (selectedOption) => {
        setActiveOption(selectedOption)
    }
    const handleLeaveDates = ({ from, to }) => {
        setLeaveDates({ from, to });
        // console.log('Selected Dates:', { from, to });
    };


    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('Title:', title)
        if (activeOption === 'equipment') {
            console.log('Equipment Name:', eqpName)
            console.log('purpose', purpose)
            console.log('Quantity:', quantity)
        } else if (activeOption === 'leave') {
            console.log('Leave Dates:', leaveDates)
            console.log('purpose', purpose)
        } else if (activeOption === 'others') {
            console.log('description:', description)
        }
        console.log('Recipients:', selectedRecipients)
    }

    const handlePreview = () => {
        const requestData = { title, activeOption, eqpName, quantity, description, purpose, leaveDates, selectedRecipients };
        navigate('/home/requests/preview-request', { state: requestData });
    }

    useEffect(() => {
        if (location.state) {

            const { title, activeOption, eqpName, quantity, description, purpose, leaveDates, selectedRecipients } = location.state;
            setTitle(title)
            setActiveOption(activeOption)
            setEqpName(eqpName)
            setQuantity(quantity)
            setDescription(description)
            setPurpose(purpose)
            setLeaveDates({ from: leaveDates.from, to: leaveDates.to })
            // setLeaveDates({ leaveDates.from, to })
            setSelectedRecipients(selectedRecipients)
        }
    }, [location.state])
    return (
        <div className="mt-4 md:px-6 px-2 min-h-screen overflow-y-auto fromLeft">

            <div className="flex items-center gap-2 text-xl font-semibold tracking-wider mb-2">
                <span>Create New Request</span>
                <div className="p-[2px] bg-logo rounded-full">
                    <Plus color="white" />
                </div>
            </div>
            <hr className="bg-black mt-1" />

            <form
                className='mt-8 mx-auto my-12 flex flex-col gap-5 rounded-xl border px-10 py-8 shadow-lg'
                onSubmit={handleSubmit}>

                <CustomLabel
                    htmlFor="title"
                    labelText="Title:"
                    inputType="text"
                    inputValue={title}
                    onChange={(event) => setTitle(event.target.value)}
                    required={true}
                    labelCLassName="text-black inline-block font-medium text-lg  mb-1 "
                    inputClassName="appearance-none relative block w-full  px-3 py-2 border border-black rounded-lg focus:outline-none"
                    placeholder="Add request title"
                >Title</CustomLabel>

                <Toggle handleOptionsChange={handleOptionsChange} activeOption={activeOption} ToggleItems={ToggleItems} className="sm:mx-auto" />

                {activeOption === 'equipment' && <Equipment
                    eqpName={eqpName}
                    setEqpName={setEqpName}
                    quantity={quantity}
                    setQuantity={setQuantity}
                    purpose={purpose}
                    setPurpose={setPurpose}
                />
                }
                {activeOption === 'leave' && <Leave handleLeaveDates={handleLeaveDates} purpose={purpose} setPurpose={setPurpose} />}
                {activeOption === 'others' && <Others description={description} setDescription={setDescription} />}


                <div className="mt-3">
                    <label className="text-black font-medium  mb-1 block">Recipients:</label>
                    <MultipleSelect
                        options={recipients}
                        selectedOptions={selectedRecipients}
                        onSelectionChange={setSelectedRecipients}
                        buttonText="  Select Recipients"
                        className="w-full md:w-1/2"

                    />

                </div>

                <div className='space-x-3 mt-3 flex justify-end'>
                    < button
                        className="cursor-pointer rounded-full bg-navBg2 px-4 py-1 font-medium capitalize text-white hover:scale-105 w-fit"
                        onClick={handlePreview}
                    >Preview</button>

                    <BigGreenButton
                        type="submit"
                    >
                        Submit
                    </BigGreenButton>
                </div>


            </form>

        </div>
    )
}

export default CreateRequest