function Button({type,onClick,className}:{type?:string,className?:string,onClick:()=> void}) {
  return (
    <div className="w-[100%] flex justify-center">
      <button
      type="button"
      className={`${className}text-white w-[30%] bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 mt-5`}
      onClick={onClick}
    >
      {type === "signup" ? "Sign Up" : "Sign In"}
    </button>
    </div>
  );
}

export default Button;
