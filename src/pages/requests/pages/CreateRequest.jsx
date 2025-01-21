import { useState, useEffect } from 'react'
import { Plus } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom"
import CustomLabel from '../../../components/CustomLabel';
import Toggle from "../component/Toggle"
import Equipment from "../component/Equipment"
import Leave from "../component/Leave"
import Others from "../component/Others"

const CreateRequest = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const [title, setTitle] = useState('')
    const [activeOption, setActiveOption] = useState("equipment")
    const [leaveDates, setLeaveDates] = useState({ from: null, to: null })
    const [selectedRecipients, setSelectedRecipients] = useState([])
    const [showDropdown, setShowDropdown] = useState(false)

    const [eqpName, setEqpName] = useState('')
    const [quantity, setQuantity] = useState('')
    const [description, setDescription] = useState('')
    const [purpose, setPurpose] = useState('')
    const recipients = [
        { name: 'ceejay', id: 1 },
        { name: 'nunsi', id: 2 },
        { name: 'mama', id: 3 },
        { name: 'jaye', id: 4 },
    ]


    const handleOptionsChange = (selectedOption) => {
        setActiveOption(selectedOption)
    }
    const handleLeaveDates = ({ from, to }) => {
        setLeaveDates({ from, to });
        console.log('Selected Dates:', { from, to });
    };
    const handleRecipientsChange = (e) => {
        const selectedOptions = Array.from(e.target.selectedOptions, option => option.value)
        setSelectedRecipients(selectedOptions)
        console.log('Selected Recipients:', selectedOptions)
    }
    const toggleDown = () => {
        setShowDropdown((prevState) => !prevState);
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('Title:', title)
        console.log('Recipients:', selectedRecipients)
        console.log('Equipment Name:', eqpName)
        console.log('Quantity:', quantity)
        console.log('description:', description)
        console.log('purpose', purpose)
        // console.log('Leave Dates:', leaveDates)
    }
    const handlePreview = () => {
        const requestData = { title, activeOption, eqpName, quantity, description, purpose, leaveDates, selectedRecipients };
        navigate('/home/requests/preview-request', { state: requestData });
    };
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
        <div className="mt-8 px-6 py-4 min-h-screen overflow-y-auto">

            <div className="flex items-center gap-2 text-xl font-semibold tracking-wider mb-2">
                <span>Create New Request</span>
                <div className="p-[2px] bg-logo rounded-full">
                    <Plus color="white" />
                </div>
            </div>
            <hr className="bg-black mt-1" />
            <form className='mt-4 p-2 space-y-4 md:w-3/4' onSubmit={handleSubmit}>
                <CustomLabel
                    htmlFor="title"
                    labelText="Title:"
                    inputType="text"
                    inputValue={title}
                    onChange={(event) => setTitle(event.target.value)}

                    labelCLassName="text-black inline-block font-medium text-lg  mb-1 "
                    inputClassName="appearance-none relative block w-full  px-3 py-2 border border-black rounded-lg focus:outline-none"
                    placeholder="Add request title"
                />
                <Toggle handleOptionsChange={handleOptionsChange} activeOption={activeOption} />
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

                <div className='flex md:justify-between justify-start items-start md:items-end flex-col md:flex-row'>
                    <div className="mt-3">
                        <label className="text-black font-medium text-lg mb-1 block">Recipients:</label>
                        <button
                            type="button"
                            onClick={toggleDown}
                            className="px-4 py-2 bg-navBg2 text-white font-semibold rounded-lg shadow-md focus:outline-none"
                        >
                            Select Recipients
                        </button>
                        {showDropdown && (
                            <div className="mt-2">
                                <select
                                    multiple
                                    value={selectedRecipients}
                                    onChange={handleRecipientsChange}
                                    className="appearance-none block w-full px-3 py-2 border border-black rounded-lg focus:outline-none"
                                >
                                    {recipients.map((recipient) => (
                                        <option key={recipient.id} value={recipient.name}>
                                            {recipient.name}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        )}
                    </div>
                    <div className='space-x-3 mt-3'>
                        <button

                            onClick={handlePreview}
                            className="bg-logo text-white px-3 py-1 text-lg rounded-xl cursor-pointer mx-auto mt-2 font-semibold 
                   hover:bg-yellow-600 hover:shadow-lg hover:scale-105 transition-all duration-200 hover:transition-transform"
                        >
                            Preview
                        </button>
                        <button
                            type="submit"
                            className="bg-logo text-white px-3 py-1 text-lg rounded-xl cursor-pointer mx-auto mt-2 font-semibold 
                    hover:bg-yellow-600  hover:shadow-lg hover:scale-110 transition-all duration-200 hover:transition-all"
                        >
                            Submit
                        </button>
                    </div>
                </div>

            </form>

        </div>
    )
}

export default CreateRequest