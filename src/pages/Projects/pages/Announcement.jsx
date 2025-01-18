import { useState } from "react";
import { useLocation } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";

const Announcement = () => {
    const location = useLocation();
    const project = location.state;

    const [message, setMessage] = useState("");
    const [showDropdown, setShowDropdown] = useState(false);
    const [selectedRecipients, setSelectedRecipients] = useState([]);
    const teamMembers = project.teamMembers || [];

    const toggleDropdown = () => setShowDropdown(!showDropdown);

    const handleRecipientSelect = (member) => {
        if (selectedRecipients.includes(member)) {
            setSelectedRecipients(selectedRecipients.filter((recipient) => recipient !== member));
        } else {
            setSelectedRecipients([...selectedRecipients, member]);
        }
    };

    const handleSendMessage = (recipients) => {
        console.log("Sending message to:", recipients);
        console.log("Message:", message);
    };

    return (
        <div className="mt-4 py-6 px-6 mx-auto bg-white  overflow-y-auto min-h-screen">
            <h1 className="text-2xl font-semibold text-gray-800 mb-4">
                Send an Announcement About <span className="text-logo">{project.name} {project.id}</span>
            </h1>
            <hr className="bg-black mt-1 mb-6" />

            <div className="space-y-4">
                {/* Announcement Details */}
                <label
                    htmlFor="message"
                    className="block text-lg font-medium text-gray-700"
                >
                    Announcement Details
                </label>
                <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="block w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none   resize-none"
                    placeholder="Announcemnent details"
                    rows={5}
                />

                <div className="flex flex-col sm:flex-row gap-4 mt-6 transition-all duration-200 ease-in">
                    <button
                        onClick={() => handleSendMessage("all")}
                        className="px-6 py-2 bg-logo text-white font-semibold rounded-lg shadow hover:bg-yellow-800 focus:outline-none"
                    >
                        Send to All
                    </button>
                    <button
                        onClick={() => handleSendMessage("leads")}
                        className="px-6 py-2 bg-navBg2 text-white font-semibold rounded-lg shadow hover:bg-green-700 focus:outline-none"
                    >
                        Send to Leads Only
                    </button>
                    <div className="relative w-full sm:w-auto">
                        <button
                            onClick={toggleDropdown}
                            className="px-6 py-2 bg-navBg2 text-white font-semibold rounded-lg shadow flex items-center justify-between gap-2 hover:bg-green-700 focus:outline-none w-full"
                        >
                            Select Recipients <IoIosArrowDown className="w-5 h-5" />
                        </button>
                        {showDropdown && (
                            <div className="absolute z-10 mt-2 bg-white border border-gray-300 rounded-lg shadow-lg w-full max-h-48 overflow-y-auto">
                                {teamMembers.map((member) => (
                                    <div
                                        key={member.id}
                                        className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer"
                                    >
                                        <input
                                            type="checkbox"
                                            checked={selectedRecipients.includes(member)}
                                            onChange={() => handleRecipientSelect(member)}
                                            className="mr-2"
                                        />
                                        {member.name}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
                <button
                    onClick={() => handleSendMessage(selectedRecipients.map((recipient) => recipient.name))}
                    disabled={selectedRecipients.length === 0}
                    className={`mt-6 px-6 py-2 font-semibold rounded-lg shadow focus:outline-none ${selectedRecipients.length > 0
                        ? "bg-logo text-white hover:bg-logo"
                        : "bg-gray-400 text-gray-200 cursor-not-allowed"
                        }`}
                >
                    Send to Selected Recipients
                </button>

                {selectedRecipients.length > 0 && (
                    <div className="mt-4">
                        <h2 className="font-medium text-gray-800">Selected Recipients:</h2>
                        <ul className="list-disc list-inside text-gray-600">
                            {selectedRecipients.map((recipient, index) => (
                                <li key={index}>{recipient.name}</li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Announcement;
