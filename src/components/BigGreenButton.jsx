const BigGreenButton = ({ children, action }) => {
  return (
    <button
      className="cursor-pointer rounded-full bg-navBg2 px-4 py-1 font-medium capitalize text-white hover:scale-105 w-fit"
      onClick={action}
    >
      {children}
    </button>
  );
};

export default BigGreenButton;
