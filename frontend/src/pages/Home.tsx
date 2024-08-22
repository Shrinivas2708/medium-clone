// import Header from "../layouts/Header"

import { Link } from "react-router-dom"
import ImgSvg from "../assets/undraw_content_creator_re_pt5b.svg"
const data = [
  {
    pageName:"Home",
    linkName:"/",
  },
  {
    pageName:"About",
    linkName:"/about",
  },
  {
    pageName:"Socials",
    linkName:"/socials",
  },
  {
    pageName:"Signup",
    linkName:"/signup",
  },
  {
    pageName:"Signin",
    linkName:"/signin",
  }
]
function Home() {
  return <div className=" flex overflow-hidden h-[100vh] bg-backgroundcolor justify-center  items-center m-0 p-0 ">
   {/* <Header /> */}
   <div className="flex flex-col  md:w-[60%] md:pl-10  w-[90%] 	 ">
   <p className=" text-7xl md:text-[5.5rem] lg:text-[7rem]  font-medium font-serif ">Unfold Your   
   Thoughts
   </p>
   
     
   <p className="md:text-4xl lg:text-5xl text-4xl mt-8  font-medium font-serif lg:ml-5 ">Write, Share, Inspire
   </p>
  <div>
  <a href="https://github.com/Shrinivas2708/medium-clone" target="_blank"> 
  <button  className="bg-black mt-8 lg:ml-5 hover:opacity-85 text-white font-medium font-serif rounded-full px-5 py-3" >
    Contribute to Code ✨
   </button></a>
  </div>
   </div>
   <div className="hidden md:block w-[30%] ">
    <img src={ImgSvg} className= "h-[35rem] w-[35rem]"  />
   </div>
   <HomeFooter />
  </div>
}
export function HomeFooter(){
  return (
    <div className="bg-white h-[50px] flex justify-center items-center fixed bottom-0 w-full text-black text-center border-black border-t-[1.5px]  text-lg font-normal font-serif overflow-hidden left-0">
      <ul className="flex gap-5">
        {
          data.map((d,i)=>{
            return <li key={i}>
              <Link to={d.linkName}>
              {d.pageName}
              </Link>
           </li>
            
          })
        }
      </ul>
    </div>
  )
}
export default Home