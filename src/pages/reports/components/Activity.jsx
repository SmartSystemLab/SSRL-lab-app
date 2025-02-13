import { ChevronDown, ChevronUp } from 'lucide-react'
import { useState } from "react";
import ListInput from "./ListInput"

export default function Activity({ period, setPeriod, completed, setCompleted, ongoing, setOngoing, next, setNext }) {
  const [dropdown, setDropdown] = useState(false);
  const periodDurations = ['Daily', 'Weekly', 'Monthly']
  const handlePeriodChange = (selectedPeriod) => {
    setPeriod(selectedPeriod)
    setDropdown(!dropdown)
  }
  return (
    <div>

      <div className="relative ml-auto mt-4 w-fit cursor-pointer" >
        <button
          type="button"
          onClick={() => setDropdown(!dropdown)}
          className="flex items-center justify-between w-44 rounded-lg bg-navBg2 px-4 py-2 text-white"
        >
          <span>{period}</span> {dropdown ? <ChevronUp /> : <ChevronDown />}
        </button>
        {dropdown && (
          <div className="absolute z-50 mt-2 max-h-48 w-44 overflow-y-auto rounded-lg border border-gray-200 bg-white shadow-lg">
            {periodDurations.map((duration) => (
              <div
                key={duration}
                onClick={() => handlePeriodChange(duration)}
                className="flex w-full cursor-pointer items-center gap-2 border-b px-3 py-2 hover:bg-navBg1"
              >
                {duration}
              </div>
            ))}
          </div>
        )}

      </div>

      <div className="mt-4 flex flex-col gap-4">
        {/* completed */}
        <ListInput
          title="Completed"
          items={completed || []}
          setItems={setCompleted}
        />

        {/* Ongoing Section */}
        <ListInput
          title="Ongoing"
          items={ongoing || []}
          setItems={setOngoing}
        />

        {/* Next Tasks Section */}
        <ListInput
          title={`Next ${period}`}
          items={next || []}
          setItems={setNext}
        />
      </div>
    </div>
  );
}

{/* <div className="">
{dropdown ? <ChevronUp className="absolute inset-y-0 right-2 translate-y-1/2 flex items-center" /> : <ChevronDown className="absolute inset-y-0 right-2 translate-y-1/2 flex items-center" />}
 <ChevronDown className="absolute inset-y-0 right-2 translate-y-1/2 flex items-center" /> 
</div> */}
{/* <select
          value={period || ""}
          onChange={(e) => setPeriod(e.target.value)}
          className="block w-44 appearance-none rounded-lg border border-black px-3 py-2 focus:outline-none md:w-48"
        >
          <option value="Daily">Daily</option>
          <option value="Weekly">Weekly</option>
          <option value="Monthly">Monthly</option>
        </select>
       */}