import { useState } from 'react';
import Searchbar from '../assets/Searchbar.svg';

const SearchBar = () => {
    const [query, setQuery] = useState('')

    const handleInputChange = (e) => {
        setQuery(e.target.value)
    }
    // console.log(query)

    return (
        <div className="relative w-full sm:max-w-xs md:max-w-md lg:max-w-lg p-2">
            <input
                type="text"
                placeholder="Search for tasks, projects..."
                className='w-full px-4 pr-10 py-2 border border-[#111111] rounded-3xl text-[#000000] focus:outline-none focus:ring-1 ring-black'
                value={query}
                onChange={handleInputChange}
            />
            <span className='absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer'>
                <img src={Searchbar} alt="search button" className="w-5 h-5" />
            </span>
        </div>
    );
};

export default SearchBar;
