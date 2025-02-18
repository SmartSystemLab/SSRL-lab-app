import React from "react";
import { LiaCheckDoubleSolid } from "react-icons/lia";
import Messages from "../../components/Messages";

import img1 from "../../assets/img1.jpg";
import { useRequest } from "../../Modules/useRequest";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { formatDistanceToNow } from "date-fns";
import { CheckCheck } from "lucide-react";
import RequestsSkeleton from "../../components/skeletons/RequestsSkeleton";
import { Dot } from "lucide-react";

const info = [
  {
    name: "Ogunjirin M. Boluwatife",
    summary: "Sent you reports for week 2",
    images: img1,
    duration: "10 mins",
    id: 1,
  },
  {
    name: "Ogunjirin M. Boluwatife",
    summary: "Sent you reports for week 2",
    images: img1,
    duration: "1 day",
    id: 2,
  },
  {
    name: "Ogunjirin M. Boluwatife",
    summary: "Sent you reports for week 2",
    images: img1,
    duration: "1 day",
    id: 3,
  },
  {
    name: "Ogunjirin M. Boluwatife",
    summary: "Sent you reports for week 2",
    images: img1,
    duration: "1 day",
    id: 4,
  },
  {
    name: "Ogunjirin M. Boluwatife",
    summary: "Sent you reports for week 2",
    images: img1,
    duration: "1 day",
    id: 5,
  },
  {
    name: "Ogunjirin M. Boluwatife",
    summary: "Sent you reports for week 2",
    images: img1,
    duration: "1 day",
    id: 6,
  },
];

const Notifications = () => {
  const [notifications, setNotifications] = useState([]);
  const [total, setTotal] = useState();
  const [unread, setUnread] = useState(0);
  const [noteRequest, noteLoading, setNoteLoading, noteError, setNoteError] =
    useRequest();

  const getAllNotifications = async () => {
    setNoteLoading(true);
    const res = await noteRequest(`notification/get_all`);
    const data = await res.json();

    if (res.ok) {
      setNotifications(data.notifications);
      setTotal(data.total);
      setUnread(data.unread);
    } else {
      setNoteError({ status: true, msg: data.message });
      console.log(data.message);
    }

    console.log(data);
    setNoteLoading(false);
  };

  useEffect(() => {
    getAllNotifications();
  }, []);

  return (
    <div>
      <div className="container">
        {/* Header */}
        <div className="mt-8">
          <div className="text-2xl font-bold uppercase">notifications</div>
          <hr className="bg-black" />

          {/* Content */}
          <div className="mt-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 font-semibold">
                <div className="underline">Unread</div>
                <div className="flex p-1 aspect-square items-center justify-center rounded-full bg-[#FFa500] text-center text-sm text-white">
                  {unread}
                </div>
              </div>
              <div className="flex cursor-pointer items-center gap-2 hover:underline">
                <CheckCheck className="text-green-700" />
                <p>mark all as read</p>
              </div>
            </div>

            {/* Messages */}
            <section className="mt-4">
              {noteLoading ? <div>
                <RequestsSkeleton />
                <RequestsSkeleton />
                <RequestsSkeleton />
              </div> :
                (notifications.length > 0 ? (
                notifications.map((note) => {
                  const { _id, title, status, sentAt, message } = note;
                  return (
                    // <Link to={`/home/dashboard/notifications/${_id}`} key={_id} state={note}>
                    <Link key={_id} state={note}>
                      <div className="fromTop flex items-center gap-4 border-b p-2 hover:bg-zinc-100">
                        <div className="w-8 h-8 flex items-center justify-center">
                          {status == "unread" && <Dot className="text-navBg2" strokeWidth={ 6} />}
                        </div>
                        <div className="flex-grow">
                          <p className="truncate font-semibold">{title}</p>
                          <p className="max-w-[520px] truncate text-sm">
                            {message}
                          </p>
                        </div>
                        <p className="text-xs font-light italic">
                          {formatDistanceToNow(sentAt, { addSuffix: true })}
                        </p>
                      </div>
                    </Link>
                  );
                })
              ) : (
                <div className="text-center">No notifications</div>
              ))}
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notifications;
