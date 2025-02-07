import React, { useState } from "react";
import TaskLabel from "./TaskLabel";
import { Edit, Trash2 } from "lucide-react";

const TaskCard = ({ name, id, tasks, task, setTasks }) => {
  const [status, setStatus] = useState(false);
  const [edit, setEdit] = useState(false);
  const [check, setCheck] = useState(false);

  const handleStatus = (e) => {
    setStatus(e.target.checked);
  };

  const handleEdit = () => {
    setEdit(!edit);
    setCheck(!check);
  };

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
        <div className={`item-center flex justify-center gap-4 ${edit && "translate-x-9"} transition-transform duration-500 ease-in-out`}>
          {!edit && <input
            type="checkbox"
            name=""
            checked={status}
            id={id}
            className="w-5"
            onChange={handleStatus}
          />}
          <TaskLabel
            htmlFor={id}
            defaultVal={name}
            onChange={() => {
              handleChange(task);
            }}
            placeholder="Enter task"
            required={true}
            status={status}
            edit={edit}
            handleEdit={handleEdit}
          />
        </div>
        <div className="flex item-center justify-center gap-2 pt-2">
          {/* Edit */}
          {status || check || (
            <Edit onClick={handleEdit} className="hover:scale-110" />
          )}
          {/* delete */}
            <Trash2
              onClick={() => {
                deleteTask(task.id);
              }}
              color="red"
              className="hover:scale-110"
            />
        </div>
      </div>
    </>
  );
};

export default TaskCard;
