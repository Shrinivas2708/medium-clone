// import { Link } from "react-router-dom"
// import Avatar from "./Avatar"


// function AppBar() {
  
//   return <div className="py-2  border-b flex justify-between px-10">
//     <Link to={"/blogs"}>
    
//     <div className="cursor-pointer">
//         Medium Clone
//     </div>
//     </Link>
//     <div>
//         <Avatar authorName={localStorage.getItem("UserName")} />
//     </div>
//   </div>
// }

// export default AppBar

// AppBar.tsx
import { Link } from "react-router-dom";
import Avatar from "./Avatar";
import { useAuth } from "../context/authContext";
import { useState } from "react";

function AppBar() {
  const { userName, logout } = useAuth();
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div className="flex w-full  top-0 bg-white border-black border-b-[1.5px]   items-center justify-between px-5 sm:px-10 py-3 md:px-20 z-50 fixed" >
      <Link to={"/blogs"}>
        <div className="md:text-2xl lg:text-3xl text-xl font-semibold font-serif">WriteFlow</div>
      </Link>

      <div className="flex items-center gap-4">
        <Link 
          to="/publish" 
          className="hidden md:block px-4 py-2 text-black-600 hover:text-gray-800"
        >
          Write a Story
        </Link>

        <div className="relative">
          <div 
            onClick={() => setShowDropdown(!showDropdown)} 
            className="cursor-pointer"
          >
            <Avatar authorName={userName || ""} />
          </div>

          {showDropdown && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10 border">
              <div className="px-4 py-2 text-sm text-gray-700 border-b">
                Signed in as <br />
                <span className="font-medium">{userName}</span>
              </div>

              <Link 
                to="/profile" 
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                onClick={() => setShowDropdown(false)}
              >
                Your Profile
              </Link>

              <Link 
                to="/publish" 
                className="block md:hidden px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                onClick={() => setShowDropdown(false)}
              >
                Write a Story
              </Link>

              <Link 
                to="/your-stories" 
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                onClick={() => setShowDropdown(false)}
              >
                Your Stories
              </Link>

              <button
                onClick={() => {
                  logout();
                  setShowDropdown(false);
                }}
                className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
              >
                Sign Out
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default AppBar;