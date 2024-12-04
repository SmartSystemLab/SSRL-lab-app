import { Link } from "react-router-dom"
import avatarPlaceholder from "../../../assets/Avatar.svg"

const PersonnelCard = ({ personnel }) => {
  const { uid, fullname, avatar, niche } = personnel;
  return (
    <Link
      to={`/home/personnel/profile/${uid}`}
      className=""
      state={personnel}
    >
      <div className="flex justify-start items-center hover:bg-navBg1 border rounded-xl p-1">
        <img
          src={avatar !== 'NIL' ? avatar : avatarPlaceholder}
          alt=""
          className="h-12 w-12 rounded-full m-2  object-cover border border-zinc-600"
        />
        <div className="ml-3">
          <p className="font-bold text-gray-700">{fullname}</p>
          <p className="text-sm">{niche}</p>
        </div>
      </div>
    </Link>
  );
};
export default PersonnelCard;
