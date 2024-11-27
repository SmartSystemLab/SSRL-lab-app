import DropDownMenu from "../../../components/DropDownMenu.jsx";
import Avatar from "../../../assets/Avatar.svg";
import BgProfile from "../../../assets/bg_profile.jpeg";

const Profile = ({ user, role, currentUserId }) => {
  const isOwnProfile = user.id === currentUserId;
  return (
    <div className="p-6 mx-auto  max-w-6xl ">
      <div className=" rounded-lg shadow-2xl object-contains">
        <div
          className="relative flex flex-col justify-center rounded-t-lg items-center p-6 gap-4"
          style={{
            backgroundImage: `url(${BgProfile})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <DropDownMenu role={role} isOwnProfile={isOwnProfile} />
          <img src={Avatar} alt="avatar" className="m-5" />
          <p className="font-semibold text-2xl uppercase text-white/75">
            {user.name}
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-center mt-8 gap-10 px-2 py-6">
          <div className="md:w-1/2 w-full space-y-4">
            <p className=" text-xl font-semibold text-center">Information</p>
            <div className="px-6 space-y-4">
              <p className="flex gap-4">
                <span className=" font-medium ">Unique ID:</span> {user.id}
              </p>
              <p className="flex gap-4">
                <span className=" font-medium ">Stack:</span> {user.stack}
              </p>
              <p className="flex gap-4">
                <span className=" font-medium">Niche:</span> {user.niche}
              </p>
              <p className="flex gap-4">
                <span className=" font-medium">Role:</span> {user.role}
              </p>
              <p className="flex gap-4">
                <span className=" font-medium">Date joined:</span>{" "}
                {user.dateJoined}
              </p>
            </div>
          </div>
          <div className="md:w-1/2 w-full space-y-4">
            <p className=" text-xl font-semibold text-center">Bio</p>
            <div className="px-6 space-y-4 ">
              <p>{user.bio}</p>
              <p className="flex gap-4">
                <span className=" font-medium">DOB</span>
                {user.DOB}
              </p>
              <p className="flex gap-4">
                <span className=" font-medium">Location </span>
                {user.location}
              </p>
              <p className="flex gap-4">
                <span className=" font-medium">Contact</span>
                {user.contact}
              </p>
              <p className="flex gap-4">
                <span className=" font-medium">Email</span>
                {user.email}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
