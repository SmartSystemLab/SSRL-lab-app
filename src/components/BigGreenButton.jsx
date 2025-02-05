const BigGreenButton = ({ children, action, type}) => {
  return (
    <button
      className="cursor-pointer rounded-full bg-navBg2 px-4 py-1 font-medium capitalize text-white hover:scale-105 w-fit"
      onClick={action}
      type={type || "button"}
    >
      {children}
    </button>
  );
};

export default BigGreenButton;
