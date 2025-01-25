import { Link } from "react-router-dom"
const InternCard = ({ name, image, niche, id }) => {
  return (
    <Link to={`/home/personnel/profile/${id}`} className="card" state={{ name, image, niche, id }}>
      <div className="flex justify-start items-center hover:bg-slate-100">
        <img
          src={image}
          alt=''
          className="h-12 w-12 rounded-full m-2  object-cover"
        />
        <div className="ml-3">
          <h1 className="text font-bold text-gray-700">{name}</h1>
          <h1>{niche}</h1>
          {/* <p>{role}</p> */}
        </div>
      </div>
    </Link>
  );
};
export default InternCard;
