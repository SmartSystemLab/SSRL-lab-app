import { useState } from 'react'
import { Plus } from "lucide-react";
import CustomLabel from '../../components/CustomLabel';
import Toggle from "./component/Toggle"

const CreateRequest = () => {
    const [title, setTitle] = useState('')
    return (
        <div className="mt-8 px-6 py-4 min-h-screen overflow-y-auto">

            <div className="flex items-center gap-2 text-xl font-semibold tracking-wider mb-2">
                <span>Create New Request</span>
                <div className="p-[2px] bg-logo rounded-full">
                    <Plus color="white" />
                </div>
            </div>
            <hr className="bg-black mt-1" />
            <form className='mt-4 p-2 space-y-4 mx-auto'>
                <CustomLabel
                    htmlFor="title"
                    labelText="Title:"
                    inputType="text"
                    inputValue={title}
                    onChange={(event) => setTitle(event.target.value)}
                    //   onBlur={() => {}}
                    labelCLassName="text-black inline-block font-medium text-lg  mb-1 "
                    inputClassName="appearance-none relative block w-full  px-3 py-2 border border-gray-400 rounded-lg focus:outline-none"
                    placeholder="Add request title"
                />
                <Toggle />
            </form>

        </div>
    )
}

export default CreateRequest