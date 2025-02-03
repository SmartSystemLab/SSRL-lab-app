
export default function Toggle({ handleOptionsChange, activeOption }) {
    const ToggleItems = ['activity', 'project']
    return (
        <div className={` flex gap-1 justify-center items-start border-b-2 border-black w-fit rounded-lg`}>
            {ToggleItems.map((item) => (
                <div
                    key={item}
                    className={`px-2 md:px-4 py-2 capitalize font-medium cursor-pointer ${activeOption === item ? 'bg-navBg2 w-full text-center font-semibold rounded-lg text-white border-2' : ''}`}
                    onClick={() => handleOptionsChange(item)}
                >
                    {item}
                </div>
            ))}
        </div>
    )
}


