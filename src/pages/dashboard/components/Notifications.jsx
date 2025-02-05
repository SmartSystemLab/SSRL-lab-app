import { Link } from "react-router-dom";
import { X } from "lucide-react";
import { Dot } from "lucide-react";

const Notifications = ({ notifications, setNotifications }) => {
  
  
  const dismissNotification = (id) => {
    setNotifications(
      notifications.filter((notification) => notification._id !== id),
    );
  };

  return (
    <div className="mb-6">
      <h2 className="mb-2 text-2xl font-medium">Notifications</h2>
      <div className="h-full rounded-2xl bg-navBg2 p-4 text-white shadow-md">
        <ul className="space-y-2 text-sm">
          {notifications.length > 0 ? (
            notifications.map((notification) => (
              <li
                key={notification._id}
                className="flex items-center justify-between gap-4 px-2 py-4 hover:bg-navBg1 rounded-xl"
              >
                {notification.status == "unread" ? <Dot color={"#FFA500"} size={36}  className="w-9 h-9 min-w-9" /> : <span className="w-9 h-9 min-w-9"></span>}
                <p>{notification.message}</p>
                <p></p>
                {/*Add date and time using the sent_at property in the notification object */}
                
                <button
                  onClick={() => dismissNotification(notification._id)}
                  className="text-red-500 hover:text-red-700"
                >
                </button>
              </li>
            ))
          ) : (
            <p>No notifications</p>
          )}
        </ul>
        <Link
          to={`/home/dashboard/notifications`}
          className="mt-6 block w-fit rounded-full bg-logo px-3 py-1 text-right text-sm font-medium text-white transition-all duration-100 ease-in hover:scale-105"
        >
          See All
        </Link>
      </div>
    </div>
  );
};

export default Notifications;
{
  /*Let's add a dot that shows whether the notification has been read or not, based on the status. The dot will only be there if the notification isn't read. */
}
