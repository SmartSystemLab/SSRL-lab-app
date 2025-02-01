import { useState } from "react"
import { useLocation } from "react-router-dom"
import Feedback from "../components/Feedback"


const ViewReport = () => {
    const location = useLocation()
    const report = location.state
    const [showPopup, setShowPopup] = useState(false)
    const handleSendFeedback = (feedbackText) => {

        console.log('Feedback sent:', feedbackText);
    };
    return (
        <div className="px-6 py-4 min-h-screen overflow-y-auto relative">
            <h2 className="text-2xl font-semibold capitalize">{report.type} Report</h2>
            <hr className="bg-black mt-1" />
            <div className="mt-4 p-2">
                <div className=" flex flex-col md:flex-row md:justify-between items-start">
                    <div className="space-y-3">
                        <p className="flex gap-2">
                            <span className="font-medium">Intern Name:</span>
                            {report.intern}
                        </p>
                        <p className="flex gap-2">
                            <span className="font-medium">Stack:</span>
                            {report.stack}
                        </p>
                        {report.type === "activity" && (
                            <p className="flex gap-2">
                                <span className="font-medium">Duration:</span>
                                {report.period}
                            </p>
                        )}
                    </div>

                    <button
                        className=" bg-navBg2 text-white px-3 py-1 text-lg rounded-xl cursor-pointer font-semibold hover:opacity-70  hover:shadow-lg transition-all duration-200"
                        onClick={() => setShowPopup(true)}
                    >give feeback</button>
                </div>
                {showPopup && (
                    <Feedback
                        onSend={handleSendFeedback}
                        onClose={() => setShowPopup(false)}
                    />
                )}

                {report.type === "activity" && (
                    <div className="mt-4">


                        <div className="bg-[#347831] rounded-xl p-2 text-white text-lg">Completed Tasks</div>
                        <ul className="list-disc list-outside ml-2 space-y-2 px-4 mt-2 marker:text-navBg2">
                            {report.completed.map((task, index) => (
                                <li key={index} className="break-words">{task}</li>
                            ))}
                        </ul>

                        <div className="bg-[#347831] rounded-xl p-2 text-white mt-2 text-lg">Ongoing Tasks</div>
                        <ul className="list-disc list-outside ml-2 space-y-2 px-4 mt-2 marker:text-navBg2">
                            {report.ongoing.map((task, index) => (
                                <li key={index} className="break-words">{task}</li>
                            ))}
                        </ul>

                        <div className="bg-[#347831] rounded-xl p-2 text-white mt-2 text-lg">Tasks for Next Duration</div>
                        <ul className="list-disc list-outside ml-2 space-y-2 px-4 mt-2 marker:text-navBg2">
                            {report.nextTask.map((task, index) => (
                                <li key={index} className="break-words">{task}</li>
                            ))}
                        </ul>
                    </div>
                )}


                {report.type === "project" && (
                    <div className="mt-4">
                        <h2 className="text-2xl font-semibold capitalize">{report.title} Report</h2>
                        <p className="mt-2 text-gray-700 text-base p-4 border border-gray-300 rounded-md whitespace-normal w-full break-words">
                            {report.Summary}
                        </p>
                    </div>
                )}
{/* add submissions ceejay */}
            </div>
        </div>
    )
}

export default ViewReport