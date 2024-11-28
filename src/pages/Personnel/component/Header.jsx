import { BsFillPersonPlusFill } from "react-icons/bs";

const Header = ({title}) => {
  return (
    <div className="flex justify-between items-center bg-[#347831] rounded-lg p-4 text-white">
      <div>{title}</div>
      <div>
        <button> {/*Will only show if user is an admin or a lead*/}
          <BsFillPersonPlusFill size={24}/>
        </button>
      </div>
    </div>
  );
};
export default Header;
