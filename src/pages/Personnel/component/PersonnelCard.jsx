import { Link } from "react-router-dom"
import avatar from "../../../assets/Avatar.svg"

const PersonnelCard = ({ image, name, id, niche }) => {
  return (
    <Link
      to={`/home/personnel/profile/${id}`}
      className="card"
      state={{ name, image, id }}
    >
      <div className="flex justify-start items-center hover:bg-navBg1 border rounded-xl p-1">
        <img
          src={image !== 'NIL' ? image : avatar}
          alt=""
          className="h-12 w-12 rounded-full m-2  object-cover border border-zinc-600"
        /> 
        <div className="ml-3">
          <p className="font-bold text-gray-700">{name}</p>
          <p className="text-sm">{niche}</p>
        </div>
      </div>
    </Link>
  ); 
};
export default PersonnelCard;
