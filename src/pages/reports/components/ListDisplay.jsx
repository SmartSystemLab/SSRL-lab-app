const ListDisplay = ({ Text, content }) => {
  return (
    <div>
      <div className="mb-1 rounded-xl bg-[#347831] p-2 text-lg text-white">
        {Text}
      </div>
      <ul className="ml-2 mt-3 list-outside list-disc space-y-3 px-4 marker:text-navBg2">
        {content.map((task, index) => (
          <li key={index} className="break-words">
            {task}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListDisplay;
