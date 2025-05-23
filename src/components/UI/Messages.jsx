import { Link } from "react-router-dom"
const Messages = ({ info, to }) => {
  return (
    <div className="space-y-3">
      {info.map((item) => (
        <Link to={`${to}/${item.id}`} key={item.id} state={item}>
          <section className="flex justify-between items-center hover:bg-gray-100 py-2">
            <div className="flex justify-between items-center px-1">
              <div className="bg-green-600 w-2 h-2 rounded-full"></div>
              <img
                src={item.images}
                alt=""
                className="h-12 w-12 rounded-full m-2  object-cover"
              />
              <div className="ml-3">
                <h1 className="text font-bold text-gray-700">{item.name}</h1>
                <div className=" text-sm text-gray-500">{item.summary}</div>
              </div>
            </div>
            <div>
              <div className=" text-xs text-gray-500">{item.duration} ago</div>
            </div>
          </section>
          <hr className="bg-black" />
        </Link>
      )
      )}
    </div>

  );
};
export default Messages;
