import DropDownMenu from "../component/DropDownMenu.jsx";
import BgProfile from "../../../assets/bg_profile.jpeg";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { getInitials } from "../../../Modules/funcs.js";

const Profile = ({ user, userRole }) => {
  // const isOwnProfile = user.id === currentUserId;
  const currentLocation = useLocation();
  const profile = currentLocation.state;
  const {
    fullname,
    avatar,
    email,
    bday,
    datetime_created,
    niche,
    stack,
    uid,
    location,
    role,
    phone_num,
    bio,
    suspended,
  } = profile;
  const [profileRole, setProfileRole] = useState(role);
  const [suspend, setSuspend] = useState(suspended);
  const initials = getInitials(fullname);

  return (
    <div className="mx-auto max-w-6xl rounded-[30px] p-4 md:p-12 overflow-hidden">
      <div className="rounded-[30px] shadow-2xl">
        <div
          className="relative flex flex-col items-center justify-center gap-4 bg-cover bg-center bg-no-repeat p-6 md:p-12 rounded-t-3xl
          "
          style={{ backgroundImage: `url(${BgProfile})` }}
        >
          <DropDownMenu
            role={[setProfileRole, profileRole]}
            suspended={[suspend, setSuspend]}
            profile={profile}
          />
          <div className="flex justify-center items-center border-1 border-slate-300 rounded-full w-28 h-28 bg-logo overflow-hidden">
            {avatar !== "NIL" ? (
              <img src={avatar.secure_url} alt="avatar" className="m-5" />
            ) : (
              <span className={`text-5xl font-medium`}>{initials}</span>
            )}
          </div>
          <p className="text-center text-2xl font-semibold uppercase text-white/75">
            {fullname}
          </p>
        </div>
        <div className="mt-8 flex flex-col justify-center gap-4 p-6 md:flex-row">
          <div className="w-full space-y-4 md:w-3/5">
            <p className="text-left text-xl font-semibold">
              Intern Information
            </p>
            <div className="space-y-4 text-sm md:text-base">
              <p className="flex gap-4">
                <span className="font-semibold">Unique ID:</span> {uid}
              </p>
              <p className="flex gap-4">
                <span className="font-semibold">Stack:</span> {stack}
              </p>
              <p className="flex gap-4">
                <span className="font-semibold">Niche:</span> {niche}
              </p>
              <p className="flex gap-4">
                <span className="font-semibold">Role:</span> {profileRole}
              </p>
              <p className="flex gap-4">
                <span className="font-semibold">Date Joined:</span>{" "}
                {datetime_created}
              </p>
              <p className="flex gap-4">
                <span className="font-semibold">Date Of Birth:</span>
                {bday}
              </p>
              <p className="flex gap-4">
                <span className="font-semibold">Location: </span>
                {location}
              </p>
              <p className="flex gap-4">
                <span className="font-semibold">Contact:</span>
                {phone_num}
              </p>
              <p className="flex flex-wrap gap-2 truncate md:gap-4">
                <span className="font-semibold">Email:</span>
                {email}
              </p>
            </div>
          </div>
          <div className="w-full md:w-2/5">
            <p className="text-center text-xl font-semibold">Bio</p>
            <div className="prose min-h-[180px] space-y-4 rounded-xl border p-4 text-sm">
              {bio === "NIL"
                ? "I'm just a boring person who hasn't set a bio yet."
                : bio}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
