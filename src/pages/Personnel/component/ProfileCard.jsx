import { useParams, useLocation } from "react-router-dom";
import Profile from "../pages/Profile";

const ProfileCard = () => {
  const currentUserId = "AgboolaSSRL001";
  const role = "admin";
  const { id } = useParams();
  const { state } = useLocation();
  const user = state;

  return (
    <div>
      <Profile user={user} role={role} currentUserId={currentUserId} />
    </div>
  );
};

export default ProfileCard;
