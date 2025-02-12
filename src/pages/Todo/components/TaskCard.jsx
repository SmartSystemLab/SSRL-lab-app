import React, { useState } from "react";
import TaskLabel from "./TaskLabel";
import { Edit, Trash2 } from "lucide-react";

const TaskCard = ({ tasks, tasky, setTasks }) => {
  const [task, setTask] = useState(tasky);
  const { id, name } = task;
  const [checked, setChecked] = useState(false);
  const [edit, setEdit] = useState(false);

  const handleEdit = () => {
    setEdit(!edit);
  };

  return (
    <>
      <div
        className={`item-center m-2 flex items-center justify-between rounded-md border border-transparent px-2 hover:border-zinc-200 hover:shadow-lg`}
        key={id}
      >
        <div
          className={`item-center flex w-full justify-start gap-4 px-2 py-1 transition-transform duration-500 ease-in-out ${!edit ? "fromRight" : "fromLeft"}`}
        >
          {!edit && (
            <input
              type="checkbox"
              name=""
              checked={checked}
              id={id}
              className="w-5"
              onChange={(e) => setChecked(e.target.checked)}
            />
          )}

          <TaskLabel
            htmlFor={id}
            value={name}
            onChange={(e) => setTask({ ...task, name: e.target.value })}
            placeholder="Enter task"
            required={true}
            checked={checked}
            edit={edit}
            handleEdit={handleEdit}
          />
        </div>
        <div className="item-center flex justify-center gap-2">
          {/* Edit */}
          {checked || edit || (
            <Edit onClick={handleEdit} className="hover:scale-110" />
          )}
          {/* delete */}
          <Trash2
            onClick={() => {
              setTasks(tasks.filter((task) => task.id != id));
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
