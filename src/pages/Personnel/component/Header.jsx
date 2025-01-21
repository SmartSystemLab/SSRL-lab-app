import { BsFillPersonPlusFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const Header = ({title, showAddButton}) => {
  return (
    <div className="flex justify-between items-center bg-[#347831] rounded-lg p-4 text-white">
      <div>{title}</div>
        {showAddButton && <Link to={`/home/personnel/registration`}> <button> {/*Will only show if user is an admin or a lead*/}
          <BsFillPersonPlusFill size={24}/>
        </button> </Link>}
    </div>
  );
};
export default Header;
