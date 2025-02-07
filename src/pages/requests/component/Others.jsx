import { useState } from 'react'

const Others = ({ description, setDescription }) => {
    return (
        <div>
            <h2 className='mt-1 font-medium '>Give detailed description</h2>
            <textarea
                id="description"
                value={description || ''}
                onChange={(event) => setDescription(event.target.value)}
                className="appearance-none block w-full px-4 py-3 border border-slate-900 rounded-lg focus:outline-none resize-none h-32  text-slate-900 focus:text-black opacity-35 mt-l focus:opacity-100"
                rows={5}
                required
            />
        </div>
    )
}

export default Others