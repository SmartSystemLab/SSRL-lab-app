import { Link } from "react-router-dom"
import avatarPlaceholder from "../../../assets/Avatar.svg"
import { UserRound } from "lucide-react";

const PersonnelCard = ({ personnel }) => {
  const { uid, fullname, avatar, niche } = personnel;
  return (
    <Link to={`/home/personnel/profile/${uid}`} className="" state={personnel}>
      <div className="flex justify-center items-center hover:bg-navBg1 border rounded-xl p-1">
        <div className="flex h-12 w-12 rounded-full m-2 flex-shrink-0 items-center justify-center object-cover border border-zinc-600">
          {avatar !== "NIL" ? (
            <img
              src={avatar}
              alt=""
              className="w-full h-full"
            />
          ) : (
            <UserRound className="m-1 w-full h-full" strokeWidth={1}/>
          )}
        </div>
        <div className="ml-3">
          <p className="font-bold text-gray-700">{fullname}</p>
          <p className="text-sm">{niche}</p>
        </div>
      </div>
    </Link>
  );
};
export default PersonnelCard;
