import axios from "axios"
import { useState } from "react"
import { BACKEND_URL } from "../config"
import { ClipLoader } from "react-spinners";
// import BackButton from "./BackButton";
import AppBar from "./AppBar";
import { toast } from "sonner";
import { IoArrowBackSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
// import Button from "./Button"
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
    const buttonText = type;
  
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
// import LabelledInputs from "./LabelledInputs"

function Publish() {
    const [title,setTitle] = useState("")
    const [content,setContent] = useState("")
    const navigate = useNavigate()
    // console.log(title,content)
     async function sendData(){
       await axios.post(`${BACKEND_URL}/api/v1/blog`,{
            title,
            content
        },{
            headers:{
                Authorization:localStorage.getItem("token")
            }
        }).then((res)=>{
            console.log(res)
            setTitle("")
            setContent("")
            console.log(title,content)
            navigate("/blogs")
            toast.success("Blog Created")
            return res
        })
        
        
    }
    function handleSubmit(){
        if(title.length<1 && content.length<1){
            toast.error("Please fill in the fields")
        }else {
            sendData() 

    }}
  return <div className="flex justify-center items-center h-screen bg-backgroundcolor ">
   <AppBar />
    <div className="mt-5 flex flex-col gap-3  justify-center items-center  bg-white w-[80%]  rounded-lg py-5 px-8 md:p-10 xl:w-[30%] lg:w-[45%] md:w-[60%] ">
    <div className="flex justify-between w-full">
    <div className=" relative top-0 inline-block cursor-pointer " >  
          <IoArrowBackSharp size={25} title="Go Back" onClick={() => window.history.back()}/>   
        </div>
    </div>
    
    <div className={`flex flex-col gap-2 my-2 w-[100%]`} >
      <label className="block text-sm md:text-base font-medium font-sans ">Title</label>
      <input
        className="appearance-none w-[100%] px-2 md:text-l text-sm text-gray-700 border border-gray-300 rounded-md h-[50px]"
        type="text"
        onChange={(e)=>setTitle(e.target.value)}
        placeholder="Enter Title"
      />
    </div>
    <div className="flex flex-col gap-2 my-2 w-full">
    <label className="block text-sm md:text-base font-medium font-sans">Description</label>
    <textarea
      className="appearance-none w-full py-2 px-2 text-sm md:text-base text-gray-700 border border-gray-300 rounded-md h-[300px] resize-none placeholder:text-xs md:placeholder:text-sm"
      onChange={(e) => setContent(e.target.value)}
      placeholder="Enter Description"
    />
</div>

    <div className="w-full flex justify-center  ml-2">
    <Button onClick={handleSubmit} type="Publish"/>
   
    </div>
    </div>
  </div>
}

export default Publish