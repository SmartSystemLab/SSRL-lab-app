import { ChevronDown } from 'lucide-react'
import ListInput from "./ListInput"

export default function Activity({ period, setPeriod, completed, setCompleted, ongoing, setOngoing, nextTasks, setNextTasks }) {
  return (
    <div>

      <div className='relative w-fit cursor-pointer ml-auto mt-4'>
        <select
          value={period || ''}
          onChange={(e) => setPeriod(e.target.value)}
          className="appearance-none block w-44 md:w-48 px-3 py-2 border border-black rounded-lg focus:outline-none text-blue-600"
        >
          <option value="Daily">Daily</option>
          <option value="Weekly">Weekly</option>
          <option value="Monthly">Monthly</option>
        </select>
        <div className='absolute inset-y-0 right-2 flex items-center'>
          <ChevronDown />
        </div>
      </div>
      <div className=' space-y-4'>

        {/* completed */}
        <ListInput
          title="Completed"
          items={completed || ''}
          setItems={setCompleted}
        />

        {/* Ongoing Section */}
        <ListInput
          title="Ongoing"
          items={ongoing || ''}
          setItems={setOngoing}
        />

        {/* Next Tasks Section */}
        <ListInput
          title="Tasks for Next Duration"
          items={nextTasks || ''}
          setItems={setNextTasks}
        />
      </div>


    </div>
  )
}

