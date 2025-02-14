import React from "react";
import { Link } from "react-router-dom";
import { LiaCheckDoubleSolid } from "react-icons/lia";
import { Plus } from "lucide-react";
// import Messages from "../components/Messages";
// import img1 from "../pages../../../../assets/img1.jpg";
import { useRequest } from "../../../Modules/useRequest";
import { useState } from "react";
import { useEffect } from "react";
import { formatTimeAgo, getInitials, getRandomSoftHexColor } from "../../../Modules/funcs";
import { formatDistanceToNow } from "date-fns";


const Reports = () => {
  const [reports, setReports] = useState(null);
  const [
    getReports,
    reportsLoading,
    setReportsLoading,
    reportsError,
    setReportsError,
  ] = useRequest();

  const getAllReports = async () => {
    setReportsLoading(true);
    const res = await getReports("reports/get_all");
    const data = await res.json();
    if (res.ok) {
      setReports(data.reports);
    } else {
      setReportsError({ status: true, msg: data.message });
    }
    setReportsLoading(false);
  };

  useEffect(() => {
    getAllReports();
  }, []);

  return (
    <div className="mt-4 px-1 md:px-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-medium uppercase">Reports</h1>

        <div className="">
          <Link
            className="flex cursor-pointer items-center gap-2 rounded-lg p-2 text-lg font-medium transition-all duration-300 hover:rounded-lg hover:bg-neutral-100"
            to={"/home/reports/create"}
          >
            <div className="rounded-full bg-logo p-[2px]">
              <Plus color="white" />
            </div>
            <span>Write Report</span>
          </Link>
        </div>
      </div>

      <hr className="bg-black" />

      {/* Content */}
      <div className="mt-4 px-0 py-2 md:px-4">
        {/* unread tag */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 font-semibold">
            <span className="underline">Unread</span>{" "}
            <span className="h-4 w-4 rounded-full bg-logo text-center text-xs text-white">
              6
            </span>
          </div>

          <div className="flex cursor-pointer items-center gap-1">
            <LiaCheckDoubleSolid className="text-green-700" />
            <p className="hover:underline">mark all as read</p>
          </div>
        </div>

        {/* Messages */}
        <section className="mt-4 fromTop">
          {reports &&
            reports.map((report) => {
              const { created_at, avatar, sender, title, _id } = report;
              return (
                <Link className="border-b flex gap-4 items-center hover:bg-zinc-100" key={created_at} to={`/home/reports/${_id}`} state={report}>
                  <div className="w-12 h-12 rounded-full m-2 mt-4">
                    {avatar !== "NIL" ? (
                      <img
                        src={avatar}
                        alt=""
                        className="h-full w-full rounded-full"
                      />
                    ) : (
                      <span
                        className={`flex h-full w-full items-center justify-center rounded-full text-xs font-medium text-black border-2`}
                        style={{
                          backgroundColor: `${getRandomSoftHexColor()}50`,
                        }}
                      >{getInitials(sender.name)}</span>
                    )}
                  </div>
                  <div className="flex-grow">
                    <p className="truncate font-medium">{title}</p>
                    <p className="text-sm">{sender.name}</p>
                  </div>
                  <p className="text-sm italic">{formatDistanceToNow(created_at, { addSuffix: true })}</p>
                </Link>
              );
            })}
        </section>
      </div>
    </div>
  );
};

export default Reports;
