import React, { useState } from "react";
import TaskCard from "./components/TaskCard";
import { data } from "./testData";
import { Plus } from "lucide-react";

const ToDo = () => {
  const [tasks, setTasks] = useState(data);
  
  return (
    <>
      <div className="flex flex-col">
        <div className="mt-4 px-4 py-2">
          {/* Header */}
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold uppercase">To-Do Lists</h1>
            <button className="flex items-center gap-2 p-2 text-lg font-medium transition-all duration-300 hover:rounded-lg hover:bg-neutral-100">
              <span>Add Task</span>
              <div className="rounded-full bg-logo p-[2px]">
                <Plus color="white" />
              </div>
            </button>
          </div>
          <hr className="mb-8 mt-1 bg-black" />
          <div>
            {tasks.map((task) => {
              return <TaskCard name={task.name} id={task.id} tasks ={tasks} task={task} setTasks={setTasks} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default ToDo;
