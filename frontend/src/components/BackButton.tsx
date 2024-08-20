import { IoArrowBackSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
function BackButton({toWhere}:{toWhere:string}) {
  return <div >
    <Link to={toWhere}>
    <IoArrowBackSharp size={25} title="Go Back"/>
    </Link>
    
  </div>
}

export default BackButton