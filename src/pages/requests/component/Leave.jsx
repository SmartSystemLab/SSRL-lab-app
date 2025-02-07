import { useState } from 'react'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const Leave = ({ handleLeaveDates, purpose, setPurpose }) => {
    const [startDate, setStartDate] = useState(new Date())
    const [endDate, setEndDate] = useState(null)


    const handleStartDateChange = (date) => {
        setStartDate(date)
        if (handleLeaveDates) handleLeaveDates({ from: date, to: endDate })
    };

    const handleEndDateChange = (date) => {
        setEndDate(date)
        if (handleLeaveDates) handleLeaveDates({ from: startDate, to: date })
    }


    return (
        <div>
            <h2 className='font-semibold'>Duration</h2>
            <div className='flex flex-col sm:flex-row gap-5 items-center my-2'>
                <div>
                    <label className='block mb-2 font-medium'>From:</label>
                    <DatePicker
                        selected={startDate}
                        onChange={handleStartDateChange}
                        placeholderText="Select start date"
                        className="w-full px-3 py-2 border border-slate-900 rounded-lg focus:outline-none opacity-35  focus:opacity-100 text-slate-900 focus:text-black"
                    />
                </div>
                <div>
                    <label className='block mb-2 font-medium'>To:</label>
                    <DatePicker
                        selected={endDate}
                        onChange={handleEndDateChange}
                        minDate={startDate}
                        placeholderText="Select end date"
                        className="w-full px-3 py-2 border border-slate-900 rounded-lg focus:outline-none opacity-35  focus:opacity-100 text-slate-900 focus:text-black"
                    />
                </div>
            </div>
            <div className=' mt-2'>
                <h2 className='font-mediums mb-1'>Purpose</h2>
                <textarea
                    id="purpose"
                    value={purpose || ''}
                    onChange={(event) => setPurpose(event.target.value)}
                    className="appearance-none block w-full px-4 py-3 border border-slate-900 rounded-lg focus:outline-none resize-none h-32  text-slate-900 focus:text-black opacity-35 mt-l focus:opacity-100"
                    rows={5}
                    required
                />
            </div>
        </div>
    )
}

export default Leave