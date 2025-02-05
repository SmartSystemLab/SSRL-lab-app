import React from 'react'
import { Link } from "react-router-dom"
import { LiaCheckDoubleSolid } from "react-icons/lia";
import { Plus } from "lucide-react";
import Messages from "../pages../../../../components/Messages";
import img1 from "../pages../../../../assets/img1.jpg";
import { useRequest } from '../../../Modules/useRequest';
import { useState } from 'react';
import { useEffect } from 'react';

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
  const [reports, setReports] = useState(null)
  const [getReports, reportsLoading, setReportsLoading, reportsError, setReportsError] = useRequest()

  const getAllReports = async () => {
    setReportsLoading(true)
    const res = await getReports("reports/get_all")
    const data = await res.json()
    if (res.ok) {
      setReports(data.reports)
    }
    else {
      setReportsError({status: true, msg: data.message})
    }
    setReportsLoading(false)
  }

  useEffect(() => {
    getAllReports()
  }, [])

  return (
    <div className="mt-8 p-2">

      <h1 className="uppercase font-bold text-2xl">Reports</h1>

      <hr className="bg-black" />

      <div className="flex gap-2 font-semibold bg-gray-100 w-fit mt-4 rounded-lg">
        <Link className="flex items-center gap-2 text-lg  rounded-lg font-medium p-2  transition-all duration-300 ease-in hover:opacity-80 cursor-pointer"
          to={'/home/reports/create'}>
          <div className="p-[2px] bg-logo rounded-full">
            <Plus color="white" />
          </div>
          <span>Write Report</span>
        </Link>
      </div>

      {/* Content */}
      {/* Messages */}
      <section className="mt-1 p-2">
        <Messages
          info={info}
          to='/home/reports'
        ></Messages>
      </section>



    </div>


  )
}

export default Reports