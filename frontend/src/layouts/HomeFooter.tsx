import { Link } from "react-router-dom"
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
export const HomeFooter = ()=>{
    return (
        <div className="bg-white h-[50px] flex justify-center items-center fixed bottom-0 w-full text-black text-center border-black border-t-[1.5px]  md:text-lg text-sm font-normal font-serif overflow-hidden left-0">
      <ul className="flex md:gap-5 gap-3">
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