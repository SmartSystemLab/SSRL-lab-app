import React from "react";
import TaskLabel from "./TaskLabel";
import { Edit, Trash2 } from "lucide-react";

const TaskCard = ({ name, id, tasks, task, setTasks }) => {
  const deleteTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  };

  const handleChange = (e) => {
    // setTasks((prevTask) => ({ ...prevTask, [e.name]: name }));
    console.log(e.name);
  };
  return (
    <>
      <div className="item-center m-2 flex justify-between" key={id}>
        <div className="item-center flex justify-center gap-4">
          <input
            type="checkbox"
            name=""
            id={id}
            className="w-5" // onChange={}
          />
          <TaskLabel
            htmlFor={id}
            defaultVal={name}
            onChange={() => {
              handleChange(task);
            }}
            placeholder="Enter task"
            required={true}
          />
        </div>
        <div className="item-center flex justify-center gap-2">
          {/* Edit */}
          <button>
            <Edit />
          </button>
          {/* delete */}
          <button
            onClick={() => {
              deleteTask(task.id);
            }}
          >
            <Trash2 color="red" />
          </button>
        </div>
      </div>
    </>
  );
};

export default TaskCard;
