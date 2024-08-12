import { IoArrowBackSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
function BackButton() {
  return <div>
    <Link to={"/"}>
    <IoArrowBackSharp/>
    </Link>
    
  </div>
}

export default BackButton