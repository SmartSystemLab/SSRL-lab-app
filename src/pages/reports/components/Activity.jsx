import { ChevronDown } from 'lucide-react'

export default function Activity({ period, setPeriod }) {
  return (
    <div>
      <div className='relative w-fit cursor-pointer' style={{ marginLeft: 'auto' }}>
        <select
          value={period || ''}
          onChange={(e) => setPeriod(e.target.value)}
          style={{ width: '120px' }}
          className="appearance-none block  px-3 py-2 border border-black rounded-lg focus:outline-none text-blue-600"
        >
          <option value="Daily">Daily</option>
          <option value="Weekly">Weekly</option>
          <option value="Monthly">Monthly</option>
        </select>
        <div className='absolute inset-y-0 right-2 flex items-center'>
          <ChevronDown />
        </div>
      </div>
    </div>
  )
}

