const LeadCard = ({image, name}) => {
  return (
      <div className="flex justify-start items-center ">
        <img
          src={image}
          alt=""
          className="h-12 w-12 rounded-full m-2  object-cover"
        />
        <div className="ml-3">
          <h1 className="text font-bold text-gray-700">{name}</h1>
        </div>
      </div>
  );
};
export default LeadCard;
