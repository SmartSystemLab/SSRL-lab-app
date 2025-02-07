import React from "react";
import { Link } from "react-router-dom";
import { LiaCheckDoubleSolid } from "react-icons/lia";
import { Plus } from "lucide-react";
import Messages from "../components/Messages";
import img1 from "../pages../../../../assets/img1.jpg";
import { useRequest } from "../../../Modules/useRequest";
import { useState } from "react";
import { useEffect } from "react";

const info = [
  {
    name: "Ogunjirin M. Boluwatife",
    summary: "Sent you weekly report",
    images: img1,
    duration: "10 mins",
    id: 1,
  },
  {
    name: "Agboola Oluwatofunmi B.",
    summary: "Sent you Lab App report",
    images: img1,
    duration: "1 day",
    id: 2,
  },
  {
    name: "Adeosun Covenant J",
    summary: "Sent you Hardware interns report",
    images: img1,
    duration: "1 day",
    id: 3,
  },
];

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
    <div className="mt-8 p-2">
      <h1 className="text-2xl font-bold uppercase">Reports</h1>

      <hr className="bg-black" />

      <div className="mt-4 flex w-fit gap-2 rounded-lg bg-gray-100 font-semibold">
        <Link
          className="flex cursor-pointer items-center gap-2 rounded-lg p-2 text-lg font-medium transition-all duration-300 ease-in hover:opacity-80"
          to={"/home/reports/create"}
        >
          <div className="rounded-full bg-logo p-[2px]">
            <Plus color="white" />
          </div>
          <span>Write Report</span>
        </Link>
      </div>

      {reports ? (
        reports.map((report, index) => {
          return <Messages key={index} info={report} to={"/home/reports"} />;
        })
      ) : (
        <p>No reports</p>
      )}
    </div>
  );
};

export default Reports;
