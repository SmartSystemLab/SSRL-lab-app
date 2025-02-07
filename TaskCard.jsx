import React from "react";
export function TaskCard({}) {
  return <div className="item-center m-2 flex justify-between">
              <div className="item-center flex justify-center gap-4">
                <input type="checkbox" name="" id="" className="w-5" // onChange={}
      />
                <TaskLabel htmlFor="" labelText="" value="Lolzz" //   onChange={handleChange}
      placeholder="Enter new task" required={true} />
              </div>
              <div className="item-center flex justify-center gap-2">
                {
        /* Edit */
      }
                <button>
                  <Edit />
                </button>
                {
        /* delete */
      }
                <button>
                  <Trash2 color="red" />
                </button>
              </div>
            </div>;
}
  