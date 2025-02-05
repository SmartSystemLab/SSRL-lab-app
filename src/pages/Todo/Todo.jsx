import React from "react";
import { Plus } from "lucide-react";

const ToDo = () => {
  return (
    <>
      
    <div className="flex flex-col">
      <div className="mt-4 py-2 px-4">
        {/* Header */}
        <div className="flex justify-between items-center">
          <h1 className="uppercase font-bold text-2xl">To-Do Lists</h1>
          <button className="flex items-center gap-2 text-lg font-medium hover:bg-neutral-100 p-2 hover:rounded-lg transition-all duration-300" >
            <span>Add Task</span>
            <div className="p-[2px] bg-logo rounded-full">
              <Plus color="white" />
            </div>
          </button>
        </div>
        <hr className="bg-black mt-1" />

        <div>
            <div></div>
        </div>
          </div>
        </div>
      
    </>
  );
};

export default ToDo;
