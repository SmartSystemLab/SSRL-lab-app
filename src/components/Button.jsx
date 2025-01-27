const Button = ({ text, handler = () => {} }) => {
  return (
    <button
      type="submit"
      onClick={handler}
      className="mt-6 rounded-xl bg-[#053F05F0] px-5 py-2 text-xl font-bold capitalize text-white hover:scale-105"
    >
      {text}
    </button>
  );
};
export default Button;
