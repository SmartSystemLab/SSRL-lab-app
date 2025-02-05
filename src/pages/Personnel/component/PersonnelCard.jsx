import { Link } from "react-router-dom";
import { UserRound } from "lucide-react";
import { getInitials, getRandomSoftHexColor } from "../../../Modules/funcs";

const PersonnelCard = ({ personnel }) => {
  const { uid, fullname, avatar, niche } = personnel;
  const background = getRandomSoftHexColor()

  const initials = getInitials(fullname);
  return (
    <Link to={`/home/personnel/profile/${uid}`} className="" state={personnel}>
      <div className="flex items-center rounded-xl border p-1 hover:bg-navBg1">
        <div
          className="m-2 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border-zinc-300 object-cover border"
          style={{ backgroundColor: `${background}50` }}
        >
          {avatar !== "NIL" ? (
            <img src={avatar.secure_url} alt="" className="h-full w-full rounded-full" />
          ) : (
            <span className={`text-2xl font-medium`}>{initials}</span>
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
