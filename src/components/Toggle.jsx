
export default function Toggle({ activeOptions, ToggleItems, className }) {
    const {activeOption, setActiveOption} = activeOptions;

    const handleOptionsChange = (selectedOption) => {
      setActiveOption(selectedOption);
    }
    
    return (
        <div className={`${className} flex gap-1 justify-center items-start w-fit rounded-full shadow-lg mb-4 border`}>
            {ToggleItems.map((item) => (
                <div
                    key={item}
                    className={`px-2 md:px-4 py-2 capitalize font-medium cursor-pointer ${activeOption === item ? ' w-full text-center font-semibold text-white bg-navBg2 rounded-full' : ''}`}
                    onClick={() => handleOptionsChange(item)}
                >
                    {item}
                </div>
            ))}
        </div>
    )
}


