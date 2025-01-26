import { Trash2 } from "lucide-react";
import { Link } from "react-router-dom";

const Todo = ({ todos }) => {
  return (
    <div className="w-full rounded-2xl border p-6 shadow-lg">
      <h2 className="mb-4 text-2xl font-bold">To-do list</h2>
      <div className="mb-4 flex space-x-2">
        <input
          type="text"
          className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-navBg2"
          placeholder="Enter a new task"
        />
        <button className="rounded-lg border bg-navBg2 px-4 py-2 font-medium text-white">
          Create
        </button>
      </div>
      <ul className="space-y-2">
        {todos.length > 0 ? (
          todos.map((todo) => (
            <li
              key={todo.id}
              className="flex items-center justify-between rounded-md bg-gray-100 px-4 py-2"
            >
              {" "}
              <div className="flex justify-center gap-2">
                <input
                  type="checkbox"
                  // checked
                  // onChange={}
                  className="mr-3"
                />
                <span>{todo.task}</span>
              </div>
              <button className="text-red-500 hover:text-red-700">
                <Trash2 color="red" />
              </button>
            </li>
          ))
        ) : (
          <p>Loading to-do items...</p>
        )}
      </ul>
      <Link
        to={`/home/to-do`}
        className="block rounded p-2 text-right text-base font-medium text-logo transition-all duration-300 ease-in hover:text-navBg1"
      >
        See All
      </Link>
    </div>
  );
};

export default Todo;
