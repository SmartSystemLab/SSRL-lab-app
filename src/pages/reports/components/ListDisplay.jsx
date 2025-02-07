

const ListDisplay = ({ Text, content }) => {
    return (
        <div>

            <div className="bg-[#347831] rounded-xl p-2 text-white text-lg mb-1">{Text}</div>
            <ul className="list-disc list-outside ml-2 space-y-3 px-4 mt-3 marker:text-navBg2">
                {content.map((task, index) => (
                    <li key={index} className="break-words">{task}</li>
                ))}
            </ul>
        </div>
    )
}

export default ListDisplay