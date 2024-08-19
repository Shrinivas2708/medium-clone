// import { useState } from 'react';

// import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
// import { useAutoAnimate } from "@formkit/auto-animate/react";
// import { useState } from "react";
import { Link } from "react-router-dom";


function Header() {
  

  // const [animationParent] = useAutoAnimate();
  // const [showMenu, setMenu] = useState(true);

  // function toggleMenu() {
  //   setMenu((prev)=>!prev);
  // }

  return (
    <div className="flex w-full fixed top-0 bg-white border-black border-b-[1.5px]   items-center justify-between px-5 sm:px-10 py-4 md:px-20 z-50">
      <section className="flex items-center gap-8">
       <Link to={"/"}> <p className="md:text-2xl lg:text-3xl text-xl font-semibold font-serif">S.Blogs</p></Link>

        
      </section>

      <section className="  flex    gap-3 sm:gap-8 items-center ">
        <Link to={"/signin"} className="hover:opacity-75 font-serif text-base sm:text-2xl ">
          Login
        </Link>

        <Link
          className=" w-[80%] hover:opacity-75 font-serif text-base sm:text-2xl"
          to={"/signup"}
        >
          Get Started
        </Link>
      </section>
{/* Below Code is for the responsive navbar which has hamburger init  */}
{/* { (
        <div className=" fixed inset-x-0 top-24 mx-8 flex flex-col items-center rounded-xl bg-black text-white md:hidden">
          
         

          <section className="  flex flex-col  gap-6 items-center  w-full py-6">
            <Link to={"#"} className="hover:opacity-70">
              Login
            </Link>

            <Link
              className=" w-[80%]  rounded-full bg-Cyan px-6 py-2 text-center  text-white hover:opacity-50"
              to={"#"}
            >
              Sign Up
            </Link>
          </section>
        </div>
      )}

      <button
        ref={animationParent}
        onClick={toggleMenu}
        className="text-4xl md:hidden  text-gray-400 "
      >
        {showMenu ? <AiOutlineClose /> : <AiOutlineMenu />}
      </button> */}
    </div>
  );
  
}

export default Header;
