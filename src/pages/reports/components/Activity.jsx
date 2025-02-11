import { ChevronDown } from 'lucide-react'
import ListInput from "./ListInput"

export default function Activity({ period, setPeriod, completed, setCompleted, ongoing, setOngoing, next, setNext }) {
  return (
    <div>
      <div className="relative ml-auto mt-4 w-fit cursor-pointer">
        <select
          value={period || ""}
          onChange={(e) => setPeriod(e.target.value)}
          className="block w-44 appearance-none rounded-lg border border-black px-3 py-2 focus:outline-none md:w-48"
        >
          <option value="Daily">Daily</option>
          <option value="Weekly">Weekly</option>
          <option value="Monthly">Monthly</option>
        </select>
        <div className="">
          <ChevronDown className="absolute inset-y-0 right-2 translate-y-1/2 flex items-center" />
        </div>
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

