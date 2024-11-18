import DropDownMenu from "../../components/DropDownMenu"
import Avatar from "../../assets/Avatar.svg"
import Backdrop from "../../assets/Backdrop.svg"
import BgProfile from "../../assets/bg_profile.jpeg"

const Profile = () => {
    return (
      <div className="p-6 mx-auto  max-w-6xl ">
        <div className=" rounded-lg shadow-2xl">
          <div
            className="relative flex flex-col justify-center rounded-t-lg items-center p-6 gap-4"
            style={{
              backgroundImage: `url(${BgProfile})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          >
            <DropDownMenu />
            <img src={Avatar} alt="avatar" className="m-5" />
            <p className="font-semibold text-2xl uppercase text-white/75">
              Agboola Oluwatofunmi Bolutife
            </p>
          </div>
          <div className="flex justify-center mt-8 gap-10 p-2">
            <div className="w-1/2 space-y-4">
              <p className=" text-xl font-semibold text-center">Information</p>
              <div className="px-6 space-y-4">
                <p className="flex gap-4">
                  <span className=" font-medium ">Unique ID:</span>{" "}
                  AgboolaSSRL001
                </p>
                <p className="flex gap-4">
                  <span className=" font-medium ">Stack:</span> Software
                </p>
                <p className="flex gap-4">
                  <span className=" font-medium">Niche:</span> Web Development
                </p>
                <p className="flex gap-4">
                  <span className=" font-medium">Role:</span> Intern
                </p>
                <p className="flex gap-4">
                  <span className=" font-medium">Date joined:</span> April 20th
                  20204
                </p>
              </div>
            </div>
            <div className="w-1/2 space-y-4">
              <p className=" text-xl font-semibold text-center">Bio</p>
              <div className="px-6 space-y-4 ">
                <p>
                  An upcoming web developer at Smart System Research Laboratory
                </p>
                <p className="flex gap-4">
                  <span className=" font-medium">DOB:</span> May 1st 2003
                </p>
                <p className="flex gap-4">
                  <span className=" font-medium">Location:</span> Southgate
                </p>
                <p className="flex gap-4">
                  <span className=" font-medium">Contact:</span> 09057299991
                </p>
                <p className="flex gap-4">
                  <span className=" font-medium">Email:</span>
                  oluwatofunmiagboola1@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Profile