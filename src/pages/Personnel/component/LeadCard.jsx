import { Link } from "react-router-dom"
const LeadCard = ({ image, name, id }) => {
  return (
    <Link to={`/home/personnel/profile/${id}`} className="card" state={{ name, image, id }}>
      <div className="flex justify-start items-center hover:bg-slate-100">
        <img
          src={image}
          alt=''
          className="h-12 w-12 rounded-full m-2  object-cover"
        />
        <div className="ml-3">
          <h1 className="text font-bold text-gray-700">{name}</h1>
        </div>
      </div>
    </Link>
  );
};
export default LeadCard;
