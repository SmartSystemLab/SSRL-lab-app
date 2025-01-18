const Button = ({ text, handler = () => {} }) => {
  return <button
                  type="submit"
                   onClick={handler}
                  className="bg-[#053F05F0] text-white mt-6 px-5 py-2 font-bold text-xl capitalize rounded-xl hover:scale-105"
                >
                  {text}
                </button>
};
export default Button