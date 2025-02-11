import CustomLabel from "../../../components/CustomLabel"
import { Dot } from "lucide-react"
import { Plus, MinusCircle } from "lucide-react"
import { useState } from "react"

export default function ListInput({ title, items, setItems }) {
    const [inputValue, setInputValue] = useState("")

    const [error, setError] = useState(false)
    const handleAddItem = () => {
        if (inputValue.trim() === "") {
            setError(true)
        } else {
            setItems([...items, inputValue])
            setError(false)
        }
        setInputValue("");
    };

    return (
        <div>
            <div className="flex items-end gap-4">
                <div className="flex-grow">
                    <CustomLabel
                        htmlFor={title.replace(/\s+/g, "").toLowerCase()}
                        inputType="text"
                        inputValue={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        labelCLassName="mt-1 font-medium text-lg mb-1"
                        placeholder={`Enter ${title.toLowerCase()}`}
                        isError={error}
                        errorMessage="enter a input first"
                        required={inputValue.trim() === "" && items.length === 0}
                    >{`${title} tasks`}</CustomLabel>
                </div>
                <span
                    onClick={handleAddItem}
                    className="bg-logo text-white rounded-full hover:opacity-70 mb-1"
                >
                    <Plus size={32} />
                </span>
            </div>
            <ul className="mt-2">
                {items.map((item, index) => (
                    <li key={index} className="flex justify-between gap-2 items-center px-2 rounded-md max-w-[75%]">
                        <Dot className="text-navBg2" size={32}/>
                        <span className="w-full truncate text-sm">{item}</span>
                        <button
                            onClick={() => setItems(items.filter((_, i) => i !== index))}
                            className="text-red-500 hover:text-red-700"
                        >
                            <MinusCircle size={16} />
                        </button>
                    </li>
                ))}
            </ul>
        </div>

    )
}