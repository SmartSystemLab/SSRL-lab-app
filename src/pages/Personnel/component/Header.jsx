import { BsFillPersonPlusFill } from "react-icons/bs";

const Header = ({title, showAddButton}) => {
  return (
    <div className="flex justify-between items-center bg-[#347831] rounded-lg p-4 text-white">
      <div>{title}</div>
        {showAddButton && <button> {/*Will only show if user is an admin or a lead*/}
          <BsFillPersonPlusFill size={24}/>
        </button>}
    </div>
  );
};
export default Header;
