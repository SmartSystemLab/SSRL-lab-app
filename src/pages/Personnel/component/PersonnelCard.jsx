import { Link } from "react-router-dom";
import { UserRound } from "lucide-react";
import { getInitials, getRandomSoftHexColor } from "../../../utils/funcs";

const PersonnelCard = ({ personnel }) => {
  console.log(personnel);
  const { uid, firstname, surname, avatar, niche } = personnel;
  const fullname = `${firstname} ${surname}`;
  const background = getRandomSoftHexColor()

  const initials = getInitials(fullname);
  return (
    <Link to={`/home/personnel/profile/${uid}`} className="" state={personnel}>
      <div className="flex items-center rounded-xl border p-1 hover:bg-navBg1">
        <div
          className="m-2 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border-zinc-300 border overflow-hidden"
          style={{ backgroundColor: `${background}50` }}
        >
          {avatar ? (
            <img src={avatar.secure_url} alt="" className="object-full h-full w-full " />
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
