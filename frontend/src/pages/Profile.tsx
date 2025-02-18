import axios from "axios"
import { BACKEND_URL } from "../config"
import { useEffect,useState } from "react"
// import AppBar from "../components/AppBar"
import Avatar from "../components/Avatar"
import { useAuth } from "../context/authContext"
interface ProfileProps {
  name: string;
  email: string;
}
function Profile() {
  const { logout } = useAuth()
  const [user,setUser] = useState<ProfileProps>({name:"",email:""})
  useEffect( () => {
    async function getProfile(){
      await axios.get(`${BACKEND_URL}/api/v1/user/me`,{
         headers:{
           Authorization:localStorage.getItem("token")
         }
       }).then((res)=>{
          setUser(res.data)
         console.log(res.data)
       })
     }
     getProfile()                                          
  }, [])
  return (
<>
{/* <AppBar/> */}
<div className="bg-backgroundcolor  w-screen h-screen  flex flex-col justify-center items-center">
  <div className="bg-white w-[80%] border border-black h-[80%] rounded-lg  ">
    <div className="flex justify-center items-center p-5">
      <p className="text-3xl font-normal font-sans">Profile</p>
    </div>
    <div>
      <Avatar authorName={user.name}  />
      <div>
        <p className="text-xl font-normal font-sans">{user.name}</p>
        <p className="text-sm font-normal font-sans">{user.email}</p>
      </div>
    </div>
    <p className="text-sm text-red-500 border border-red-500 inline-block rounded-sm p-1 cursor-pointer " onClick={()=> logout()}>Logout</p>
  </div>
  
</div>
</> 
  )
}

export default Profile