import { ClipLoader } from "react-spinners"; // Optional spinner

function Button({
  type,
  onClick,
  className,
  isLoading,  // CamelCase for consistency
}: {
  type?: string;
  className?: string;
  onClick?: () => void;  // onClick is optional
  isLoading?: boolean; 
}) {
  const buttonText = type === "signup" ? "Sign Up" : "Sign In";

  return (
    <div className="w-[100%] flex justify-center">
      <button
        type="button"
        className={`${className} text-white   md:w-[40%] bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2   mt-5 flex items-center justify-center`}
        onClick={onClick}
        disabled={isLoading}  // Disable button while loading
      >
        {isLoading ? <ClipLoader color="#ffffff" size={20} /> : buttonText} {/* Show spinner when loading */}
      </button>
    </div>
  );
}

export default Button;
