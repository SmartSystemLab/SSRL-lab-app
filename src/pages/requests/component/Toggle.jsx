
const Toggle = ({ handleOptionsChange, activeOption }) => {
    const toggleOptions = ['equipment', 'leave', 'others']
    return (

        <div className={` flex gap-1 justify-center items-center sm:mx-auto w-fit border shadow-lg rounded-lg mt-2`}>
            {toggleOptions.map((option) => (
                <div
                    key={option}
                    className={`px-2 md:px-4 py-2 capitalize font-medium cursor-pointer ${activeOption === option ? 'bg-navBg2 w-full text-center font-semibold rounded-lg text-white' : ''}`}
                    onClick={() => handleOptionsChange(option)}
                >
                    {option}
                </div>
            ))}
        </div>

    )
}

export default Toggle