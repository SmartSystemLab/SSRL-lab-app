import React from "react";

const Row = ({ column }) => {
console.log(column)
  const { Date, In, Out } = column;
  return (
    <div className=" flex border-y border-slate-400 text-center text-lg font-medium text-black tableRow">
      <div className="flex-1 border-x border-slate-400 p-2">{Date}</div>
      <div className="flex-1 border-x border-slate-400 p-2">{In}</div>
      <div className="flex-1 border-x border-slate-400 p-2">{Out}</div>
    </div>
  );
};

export default Row;
