
export default function Toggle({ handleOptionsChange, activeOption }) {
    const ToggleItems = ['activity', 'project']
    return (
        <div className={` flex gap-1 justify-center items-start  w-fit rounded-lg shadow-lg`}>
            {ToggleItems.map((item) => (
                <div
                    key={item}
                    className={`px-2 md:px-4 py-2 capitalize font-medium cursor-pointer ${activeOption === item ? ' w-full text-center font-semibold text-white bg-navBg2 rounded-lg' : ''}`}
                    onClick={() => handleOptionsChange(item)}
                >
                    {item}
                </div>
            ))}
        </div>
    )
}


