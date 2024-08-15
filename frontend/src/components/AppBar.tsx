import { Link } from "react-router-dom"
import Avatar from "./Avatar"


function AppBar() {
  
  return <div className="py-2  border-b flex justify-between px-10">
    <Link to={"/blogs"}>
    
    <div className="cursor-pointer">
        Medium Clone
    </div>
    </Link>
    <div>
        <Avatar authorName={localStorage.getItem("UserName")} />
    </div>
  </div>
}

export default AppBar