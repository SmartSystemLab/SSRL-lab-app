import CustomLabel from "../../../components/CustomLabel"
import { Plus, Trash2 } from "lucide-react"
import { useState } from "react"

export default function ListInput({ title, items, setItems }) {
    const [inputValue, setInputValue] = useState("")

    const [error, setError] = useState(false)
    const handleAddItem = () => {
        if (inputValue.trim() === "") {
            setError(true)
        } else {
            setItems([...items, inputValue])
            setInputValue("")
            setError(false)
        }
    };

    return (

        <div>
            <div className="flex items-end gap-4">
                <div className="flex-grow">
                    <CustomLabel
                        htmlFor={title.replace(/\s+/g, "").toLowerCase()}
                        labelText={`${title}:`}
                        inputType="text"
                        inputValue={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        labelCLassName="mt-1 font-medium text-lg mb-1"
                        placeholder={`${title.toLowerCase()}`}
                        isError={error}
                        errorMessage="enter a input first"
                        required={inputValue.trim() === "" && items.length === 0}
                    >{title}</CustomLabel>
                </div>
                <span
                    onClick={handleAddItem}
                    className="p-2 bg-logo text-white rounded-full hover:opacity-70 mb-1"
                >
                    <Plus size={16} />
                </span>
            </div>
            <ul className="mt-2 space-y-1">
                {items.map((item, index) => (
                    <li key={index} className="flex justify-between items-center border p-2 rounded-md break-words">
                        <span className="break-words w-[85%] overflow-hidden text-ellipsis">{item}</span>
                        <button
                            onClick={() => setItems(items.filter((_, i) => i !== index))}
                            className="text-red-500 hover:text-red-700"
                        >
                            <Trash2 size={16} />
                        </button>
                    </li>
                ))}
            </ul>
        </div>

    )
}