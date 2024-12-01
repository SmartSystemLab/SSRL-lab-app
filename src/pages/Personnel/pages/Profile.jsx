import DropDownMenu from "../component/DropDownMenu.jsx";
import avatarPlaceholder from "../../../assets/Avatar.svg";
import BgProfile from "../../../assets/bg_profile.jpeg";
import { useLocation } from "react-router-dom";

const Profile = ({ user, userRole, currentUserId }) => {
  const isOwnProfile = user.id === currentUserId;
  const currentLocation = useLocation();
  const profile = currentLocation.state;
  const { fullname, avatar, email, bday, datetime_created, niche, stack, uid, location, role, phone_num, bio } = profile;

  return (
    <div className="p-4 md:p-12 mx-auto  max-w-6xl rounded-2xl">
      <div className=" rounded-2xl shadow-2xl">
        <div
          className="relative flex flex-col justify-center rounded-t-lg items-center p-6 md:p-12 gap-4 bg-no-repeat bg-center bg-cover"
          style={{ backgroundImage: `url(${BgProfile})` }}
        >
          <DropDownMenu uid={uid}/>
          <img
            src={avatar !== "NIL" ? avatar : avatarPlaceholder}
            alt="avatar"
            className="m-5"
          />
          <p className="font-semibold text-2xl uppercase text-white/75 text-center">
            {fullname}
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-center mt-8 gap-4 p-6">
          <div className="md:w-3/5 w-full space-y-4">
            <p className=" text-xl font-semibold text-left">
              Intern Information
            </p>
            <div className=" space-y-4 text-sm md:text-base">
              <p className="flex gap-4">
                <span className="font-semibold ">Unique ID:</span> {uid}
              </p>
              <p className="flex gap-4">
                <span className="font-semibold ">Stack:</span> {stack}
              </p>
              <p className="flex gap-4">
                <span className="font-semibold">Niche:</span> {niche}
              </p>
              <p className="flex gap-4">
                <span className="font-semibold">Role:</span> {role}
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
              <p className="flex flex-wrap gap-2 md:gap-4 truncate">
                <span className="font-semibold">Email:</span>
                {email}
              </p>
            </div>
          </div>
          <div className="md:w-2/5 w-full">
            <p className="text-xl font-semibold text-center">Bio</p>
            <div className="p-4 rounded-xl space-y-4 border min-h-[180px] text-sm prose">
                {bio === 'NIL' ? "I'm just a boring person who hasn't set a bio yet." : bio}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
