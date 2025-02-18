

// Header.tsx
import { Link } from "react-router-dom";
import { useAuth } from "../context/authContext";

function Header() {
  const { isAuthenticated } = useAuth();

  return (
    <div className="flex w-full fixed top-0 bg-white border-black border-b-[1.5px]   items-center justify-between px-5 sm:px-10 py-4 md:px-20 z-50">
      <section className="flex items-center gap-8">
        <Link to={"/"}>
          <p className="md:text-2xl lg:text-3xl text-xl font-semibold font-serif">
            WriteFlow
          </p>
        </Link>
      </section>

      <section className=" flex    gap-3 sm:gap-8 items-center">
        {isAuthenticated ? (
          <>
            <Link
              to="/blogs"
              className="hover:opacity-75 font-serif text-base sm:text-2xl"
            >
              Your Feed
            </Link>
            <Link
              to="/new-blog"
              className="hover:opacity-75 font-serif text-base sm:text-2xl"
            >
              Write
            </Link>
          </>
        ) : (
          <>
            <Link
              to="/signin"
              className="hover:opacity-75 font-serif text-base sm:text-2xl"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="w-[80%] hover:opacity-75 font-serif text-base sm:text-2xl"
            >
              Get Started
            </Link>
          </>
        )}
      </section>
    </div>
  );
}

export default Header;