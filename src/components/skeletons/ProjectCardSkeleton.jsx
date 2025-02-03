import { getRandomSoftHexColor } from "../../Modules/funcs";

const ProjectCardSkeleton = () => {
  return (
    // <div className="flex items-center justify-center w-full">
    //     <div className="flex flex-col items-center">
    //         <div className="loader w-12 h-12 border-4 border-gray-300 border-t-navBg2 rounded-full animate-spin"></div>
    //         <p className="mt-4 text-navBg2 font-semibold">Loading....</p>
    //     </div>
    // </div>

    <div className="my-2 h-48 w-80 min-w-[240px] animate-pulse rounded-3xl border bg-no-repeat p-4 text-white shadow-lg hover:bg-navBg1">
      <div className="my-2 h-5 w-full rounded-md bg-slate-200"></div>
      <div className="my-2 h-3 w-3/4 rounded-md bg-slate-200"></div>

      <div className="mt-5 flex items-center">
        <div
          className="m-2 -ml-4 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border bg-navBg1 first-of-type:ml-0"
          
        ></div>
        <div
          className="m-2 -ml-4 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border bg-navBg1 first-of-type:ml-0"
          
        ></div>
        <div
          className="m-2 -ml-4 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border bg-navBg1 first-of-type:ml-0"
          
        ></div>
        <p className="text-black">+2</p>
      </div>

      <div className="my-2 h-3 w-3/4 rounded-md bg-slate-200"></div>

      <div></div>
    </div>
  );
};

export default ProjectCardSkeleton;
