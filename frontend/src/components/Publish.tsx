import axios from "axios"
import { useState } from "react"
import { BACKEND_URL } from "../config"
import Button from "./Button"
import LabelledInputs from "./LabelledInputs"

function Publish() {
    const [title,setTitle] = useState("")
    const [content,setContent] = useState("")
    console.log(title,content)
    function sendData(){
        axios.post(`${BACKEND_URL}/api/v1/blog`,{
            title,
            content
        },{
            headers:{
                Authorization:localStorage.getItem("token")
            }
        })
    }
  return <div>
    <form className="flex flex-col gap-3 h-screen justify-center items-center">
    
    <LabelledInputs label="Title" placeHolder="Enter Title" type="text" onChange={(e)=>setTitle(e.target.value)}  />
    <LabelledInputs label="Description" placeHolder="Enter Description" type="text" onChange={(e)=>setContent(e.target.value)}  />
    
    
    <div className="w-max ml-2">
    <Button onClick={sendData} />
    </div>
    </form>
  </div>
}

export default Publish