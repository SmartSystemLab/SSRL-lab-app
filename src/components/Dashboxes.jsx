import { Link } from "react-router-dom";

const Dashboxes = ({children, header, nav }) => {
  return (
    <div className="space-y-1 shadow-lg border-2 p-6 rounded-md text-left">
      <h2 className="font-semibold text-2xl text-center">{header}</h2>
      <>{children}</>
      <Link
        to={`/home/${nav}`}
        className=" text-logo block text-base text-right  rounded font-medium"
      >
        See more...
      </Link>
    </div>
  );
};

export default Dashboxes;
