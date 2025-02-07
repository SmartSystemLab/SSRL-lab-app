import { useState, useEffect } from "react"
import { useNavigate, useLocation } from "react-router-dom"
import { Plus } from "lucide-react";
import Toggle from "../components/Toggle"
import Activity from "../components/Activity";
import Project from "../components/Project";
import BigGreenButton from '../../../components/BigGreenButton'
import MultipleSelect from "../../../components/MultipleSelect"

const CreateReport = () => {
    const location = useLocation()
    const navigate = useNavigate()

    const [activeOption, setActiveOption] = useState('project')
    const handleOptionsChange = (selectedOption) => {
        setActiveOption(selectedOption)
    }
    // project report
    const [projectTitle, setProjectTitle] = useState('')
    const [projectSummary, setProjectSummary] = useState('')

    // activity report
    const [period, setPeriod] = useState('Daily')
    const [completed, setCompleted] = useState([])
    const [ongoing, setOngoing] = useState([])
    const [nextTask, setNextTask] = useState([])

    //preview
    const handlePreview = () => {
        if (activeOption === 'project') {
            if (!projectTitle || !projectSummary) {
                alert("Please fill all required fields before previewing.");
                return;
            }
        } else if (activeOption === 'activity') {
            if (!period || completed.length === 0 || ongoing.length === 0 || nextTask.length === 0) {
                alert("Please fill all required fields before previewing.");
                return
            }
        }

        const reportData = { projectTitle, projectSummary, activeOption, period, completed, ongoing, nextTask };
        navigate('/home/reports/preview-report', { state: reportData });
    }

    // submit
    const handleSubmit = (e) => {
        e.preventDefault()
        if (activeOption === 'project') {
            console.log('Project:', projectTitle)
            console.log('sumaary', projectSummary)
        } else if (activeOption === 'activity') {
            console.log('period', period)
            console.log('completed', completed)
            console.log('ongoing:', ongoing)
            console.log('nextTask', nextTask)
        }
    }

    // coming back from preview page
    useEffect(() => {
        if (location.state) {
            const { projectTitle, projectSummary, activeOption, period, completed, ongoing, nextTask } = location.state;
            setProjectTitle(projectTitle)
            setProjectSummary(projectSummary)
            setActiveOption(activeOption)
            setPeriod(period)
            setCompleted(completed)
            setOngoing(ongoing)
            setNextTask(nextTask)
        }
    }, [location.state])

    return (
        <div className="mt-4 md:px-6 px-2 min-h-screen overflow-y-auto">

            <div className="flex items-center gap-2 text-xl font-semibold tracking-wider mb-2">
                <span>Create Report</span>
                <div className="p-[2px] bg-logo rounded-full">
                    <Plus color="white" />
                </div>
            </div>
            <hr className="bg-black mt-1" />

            <form
                className='mt-8 mx-auto my-12 flex flex-col gap-4 rounded-xl border px-10 py-8 shadow-lg'
                onSubmit={handleSubmit} >

                <Toggle handleOptionsChange={handleOptionsChange} activeOption={activeOption} />

                {activeOption === 'activity' && <Activity
                    period={period}
                    setPeriod={setPeriod}
                    completed={completed}
                    setCompleted={setCompleted}
                    ongoing={ongoing}
                    setOngoing={setOngoing}
                    nextTasks={nextTask}
                    setNextTasks={setNextTask}
                />}
                {activeOption === 'project' && <Project
                    projectSummary={projectSummary}
                    setProjectSummary={setProjectSummary}
                    projectTitle={projectTitle}
                    setProjectTitle={setProjectTitle}
                />}


                <section className="flex flex-col justify-between items-start md:items-center md:flex-row gap-4 mt-2">
                    {/* submissions do am yourself baby */}
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
                    </div>

                </section>
            </form>
        </div>
    )
}

export default CreateReport