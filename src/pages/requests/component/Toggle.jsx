
const Toggle = ({ handleOptionsChange, activeOption }) => {
    const toggleOptions = ['equipment', 'leave', 'others']
    return (

        <div className={` flex gap-1 justify-center items-center sm:mx-auto w-fit border-2  rounded-lg`}>
            {toggleOptions.map((option) => (
                <div
                    key={option}
                    className={`px-2 md:px-4 py-2 capitalize font-medium cursor-pointer ${activeOption === option ? 'bg-logo w-full text-center font-semibold rounded-lg text-white border-2 ' : ''}`}
                    onClick={() => handleOptionsChange(option)}
                >
                    {option}
                </div>
            ))}
        </div>

    )
}

export default Toggle