import React, { useState } from "react";
import Edit from "../../assets/Edit.svg";
const data = [
  {
    active: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    ],
    completed: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    ],
    submitted: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    ],
  },
];

const Dashboard = () => {
  const [activetab, setActivetab] = useState(true);
  const [completetab, setCompletetab] = useState(false);
  const [submittab, setSubmittab] = useState(false);

  const createTab = (array, icon) => {
    return array.map((text) => {
      return (
        <div className="flex gap-4 items-center my-2">
          <img src={icon} />
          <p>{text}</p>
        </div>
      );
    });
  };

  return (
    <div>
      <div className="bg-gradient-to-r from-navBg2  to-darkGreen h-9 w-[485px] rounded-full flex items-center px-4 text-white mb-6">
        You've got X tasks today!
      </div>

      <nav className="border-b border-slate-300 flex gap-12">
        <div
          onClick={() => {
            setActivetab(true);
            setCompletetab(false);
            setSubmittab(false);
          }}
          className={`${
            activetab && "border-b-2 border-navBg2"
          } hover:cursor-pointer`}
        >
          Active tasks
        </div>
        <div
          onClick={() => {
            setActivetab(false);
            setCompletetab(true);
            setSubmittab(false);
          }}
          className={`${
            completetab && "border-b-2 border-navBg2"
          } hover:cursor-pointer`}
        >
          Completed
        </div>
        <div
          onClick={() => {
            setActivetab(false);
            setCompletetab(false);
            setSubmittab(true);
          }}
          className={`${
            submittab && "border-b-2 border-navBg2"
          } hover:cursor-pointer`}
        >
          Submitted
        </div>
      </nav>

      <div>
        {data.map((allData) => {
          const { active, completed, submitted } = allData;
          let array, icon;
          if (activetab) {
            array = active;
            icon = Edit;
          } else if (completetab) {
            array = completed;
            icon = Edit;
          } else if (submittab) {
            array = submitted;
            icon = Edit;
          }
          return createTab(array, icon);
        })}
      </div>
    </div>
  );
};

export default Dashboard;
