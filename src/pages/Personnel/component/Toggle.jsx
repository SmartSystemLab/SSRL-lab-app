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
