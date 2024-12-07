// import { useState, useEffect } from "react";
// import { useSearchParams } from "react-router-dom";

// const Toggle = () => {
//   const [toggle, setToggle] = useSearchParams();
//   const showSoftwareInterns = toggle.get("filter") === "software";
//   const showHardwareInterns = toggle.get("filter") === "hardware";
//   return (
//     <div className=" w-max p-2 rounded-full">
//       <button
//         key=""
//         className="software button-active rounded-l-full"
//         onClick={() => setToggle({ filter: "software" })}
//       >
//         Software
//       </button>
//       <button
//         key=""
//         className="hardware button-passive rounded-r-full"
//         onClick={() => setToggle({ filter: "hardware" })}
//       >
//         Hardware
//       </button>
//     </div>
//   );
// };
// export default Toggle;

import React from 'react'

const Toggle = ({setToggle, toggle}) => {
  return (
    <div className=" w-max p-1 rounded-full border ">
      <button
        className={`software px-2 py-1 ${
          toggle === "software" && "rounded-l-full bg-navBg2 text-white"
        }`}
        onClick={() => setToggle("software")}
      >
        Software
      </button>
      <button
        className={`hardware px-2 py-1 ${
          toggle === "hardware" && "rounded-r-full text-white bg-navBg2"
        }`}
        onClick={() => setToggle("hardware")}
      >
        Hardware
      </button>
    </div>
  );
}

export default Toggle
