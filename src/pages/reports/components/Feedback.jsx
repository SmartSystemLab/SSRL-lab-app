import React, { useState } from 'react';

const Feedback = ({ onClose, onSend }) => {
    const [feedback, setFeedback] = useState('');

    const handleSend = () => {
        if (feedback.trim()) {
            onSend(feedback);
            onClose();
        }
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center  bg-opacity-50 backdrop-blur-sm">
            <div className="bg-white border p-6 rounded-lg md:w-3/5 w-10/12 shadow-3xl">

                <textarea
                    className="w-full h-40 p-3 border rounded-md mt-4 resize-none focus:outline-none "
                    placeholder="Write your feedback here..."
                    value={feedback}
                    rows={5}
                    onChange={(e) => setFeedback(e.target.value)}
                />


                <div className="flex justify-end space-x-3 mt-2">
                    <button
                        className="px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300 transition"
                        onClick={onClose}
                    >
                        Cancel
                    </button>
                    <button
                        className="px-4 py-2 bg-navBg2 text-white rounded-md hover:bg-green-800 transition"
                        onClick={handleSend}
                        disabled={!feedback.trim()}
                    >
                        Submit
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Feedback;
