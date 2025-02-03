import { useState } from "react"
import { Plus } from "lucide-react";
import Toggle from "../components/Toggle"
import Activity from "../components/Activity";
import Project from "../components/Project";


const CreateReport = () => {
    const [activeOption, setActiveOption] = useState('project')
    const handleOptionsChange = (selectedOption) => {
        setActiveOption(selectedOption)
    }
    const [projectTitle, setProjectTitle] = useState('')
    const [projectSummary, setProjectSummary] = useState('')

    const [period, setPeriod] = useState('Daily')

    return (
        <div className="mt-4 px-6 py-4 min-h-screen overflow-y-auto">
            <div className="flex items-center gap-2 text-xl font-semibold tracking-wider mb-2">
                <span>Create Report</span>
                <div className="p-[2px] bg-logo rounded-full">
                    <Plus color="white" />
                </div>
            </div>
            <hr className="bg-black mt-1" />
            <form className='mt-4 p-2 space-y-4' >
                <div>

                </div>
                <Toggle handleOptionsChange={handleOptionsChange} activeOption={activeOption} />

                {activeOption === 'activity' && <Activity
                    period={period}
                    setPeriod={setPeriod}
                />}
                {activeOption === 'project' && <Project
                    projectSummary={projectSummary}
                    setProjectSummary={setProjectSummary}
                    projectTitle={projectTitle}
                    setProjectTitle={setProjectTitle}
                />}


                <section className="flex flex-col justify-between items-start md:items-center md:flex-row gap-4 items-cente mt-2r">
                    <div className="flex gap-4">

                        <div className="flex items-center justify-start mb-2 gap-6 border p-2 rounded-lg w-fit hover:opacity-70">
                            <h3 className="font-medium ml-2">Docs</h3>
                            <div className="p-[2px] bg-logo rounded-full w-fit">
                                <Plus color="white" />
                            </div>
                        </div>
                        <div className="flex items-center justify-start mb-2 gap-6 border p-2 rounded-lg w-fit hover:opacity-70">
                            <h3 className="font-medium ml-2">Links</h3>
                            <div className="p-[2px] bg-logo rounded-full w-fit">
                                <Plus color="white" />
                            </div>
                        </div>
                    </div>
                    <div>

                        <div className="flex  gap-4 mb-2">
                            <button

                                // onClick={handlePreview}
                                className="bg-navBg2 text-white p-2 text-lg rounded-xl cursor-pointer mx-auto  font-semibold hover:bg-yellow-600 hover:shadow-lg hover:scale-105 transition-all duration-200 hover:transition-transform"
                            >
                                Preview
                            </button>
                            <button
                                type="submit"
                                className="bg-navBg2 text-white px-3 py-1 text-lg rounded-xl cursor-pointer mx-auto  font-semibold hover:bg-yellow-600  hover:shadow-lg hover:scale-110 transition-all duration-200 hover:transition-all"
                            >
                                Submit
                            </button>
                        </div>
                    </div>

                </section>
            </form>
        </div>
    )
}

export default CreateReport