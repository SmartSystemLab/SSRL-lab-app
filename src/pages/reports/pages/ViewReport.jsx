import { useState } from "react"
import { useLocation } from "react-router-dom"
import Feedback from "../components/Feedback"
import BigGreenButton from '../../../components/BigGreenButton'
import ListDisplay from "../components/ListDisplay"


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
            <div className="mx-auto mt-10 flex flex-col gap-5 rounded-xl border px-10 py-8 shadow-lg">
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
                        className="cursor-pointer rounded-full bg-navBg2 px-4 py-1 font-medium capitalize text-white hover:scale-105 w-fit"
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
                    <div className="mt-4 space-y-5">

                        <ListDisplay Text="Completed Tasks" content={report.completed} />
                        <ListDisplay Text="Ongoing Tasks" content={report.ongoing} />
                        <ListDisplay Text={ `Tasks for next ${report.period.slice(0, -2)}`} content={report.nextTask} />

                    </div>
                )}


                {report.type === "project" && (
                    <div className="mt-4">
                        <h2 className="text-2xl font-semibold capitalize">{report.title} Report</h2>
                        <p className="mt-2 text-gray-700 text-base p-4  rounded-md whitespace-normal w-full break-words">
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