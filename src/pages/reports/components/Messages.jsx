import { ArrowUp } from "lucide-react";
import { ArrowDown } from "lucide-react";
import { Link } from "react-router-dom";
const Messages = ({ info, to }) => {
  return (
    <div className="space-y-3">
      {info.map((item) => (
        <Link to={`${to}/${item.id}`} key={item.id} className="">
          <section className="flex items-center justify-between py-2 hover:bg-gray-100">
            <div className="flex items-center justify-between px-1">
              <div className="h-2 w-2 rounded-full bg-green-600"></div>
              <span>
                {/* {userId == sender ? (
                        <ArrowDown className="text-logo" />
                      ) : (
                        <ArrowUp className="text-logo" />
                      )} */}
              </span>
              <img
                src={item.images}
                alt=""
                className="m-2 h-12 w-12 rounded-full object-cover"
              />
              <div className="ml-3">
                <h1 className="text font-bold text-gray-700">{item.name}</h1>
                <div className="text-sm text-gray-500">{item.summary}</div>
              </div>
            </div>
            <div>
              <div className="text-xs text-gray-500">{item.duration} ago</div>
            </div>
          </section>
          <hr className="bg-black" />
        </Link>
      ))}
    </div>
  );
};
export default Messages;
