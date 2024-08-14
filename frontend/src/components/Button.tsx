function Button({type,onClick}:{type?:string,onClick:()=> void}) {
  return (
    <button
      type="button"
      className="text-white w-[100%] bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 mt-5"
      onClick={onClick}
    >
      {type === "signup" ? "Sign Up" : "Sign In"}
    </button>
  );
}

export default Button;
