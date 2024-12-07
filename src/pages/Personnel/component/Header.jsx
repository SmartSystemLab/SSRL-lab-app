import { BsFillPersonPlusFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const Header = ({title}) => {
  return (
    <div className="flex justify-between items-center bg-[#347831] rounded-lg p-4 text-white">
      <div>{title}</div>
      <div>
        <Link to={`/home/personnel/`}>
          <button>
            <BsFillPersonPlusFill />
          </button>
        </Link>
      </div>
    </div>
  );
};
export default Header;
