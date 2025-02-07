import React, { useState } from "react";
import TaskCard from "./components/TaskCard";
import { data } from "./testData";
import { Plus } from "lucide-react";

const ToDo = () => {
  const [tasks, setTasks] = useState(data);
  const [newTaskTab, setNewTaskTab] = useState(false);
  const [name, setName] = useState("");

  const handleCreate = (e) => {
    // if (!name) return;

    const createdAt = Date.now();

    const newTask = { id: createdAt, name };
    const updatedTasks = { ...tasks, newTask };
    setTasks(updatedTasks);
    setName("");
    console.log("name, newTask")
  };

  return (
    <>
      <div className="flex flex-col">
        <div className="mt-4 px-4 py-2">
          {/* Header */}
          <div>
            <div className="relative z-10 flex items-center justify-between">
              <h1 className="text-2xl font-bold uppercase">To-Do Lists</h1>
              <button
                className={`flex items-center gap-2 p-2 text-lg font-medium transition-all duration-300 hover:rounded-lg hover:bg-neutral-100`}
                onClick={() => setNewTaskTab(!newTaskTab)}
              >
                <span>Add Task</span>
                <div className="rounded-full bg-logo p-[2px]">
                  <Plus color="white" />
                </div>
              </button>
            </div>
            <hr className="mb-5 mt-1 bg-black" />
          </div>

          {/* Content */}
          <div
            className={`-translate-y-16 ${newTaskTab && "translate-y-0"} transition-transform duration-500 ease-out`}
          >
            {/* Create New Task */}
            <div
              className={`mb-6 flex space-x-2 opacity-0 ${newTaskTab && "opacity-100"} duration-400 transition-opacity ease-in`}
            >
              <input
                type="text"
                className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-navBg2"
                placeholder="Enter a new task"
              />
              <button className="rounded-lg border bg-navBg2 px-4 py-2 font-medium text-white" onClick= {handleCreate}>
                Create
              </button>
            </div>

            {/* Tasks */}
            <div>
              {tasks.map((task) => {
                return (
                  <TaskCard
                    name={task.name}
                    id={task.id}
                    tasks={tasks}
                    task={task}
                    setTasks={setTasks}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ToDo;
