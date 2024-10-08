import { Link, useNavigate } from "react-router-dom";
import LabelledInputs from "./LabelledInputs";
import { useState } from "react";
import { signinInput, signupInput } from "@shrinivas_2708/medium-common";
import Button from "./Button";
import axios  from "axios"
import { BACKEND_URL } from "../config";
import {  toast } from "sonner";
import BackButton from "./BackButton";

function Auth({type}:{type: string}) {
  const navigate = useNavigate()
  const [SignUpInputs, setSignUpInputs] = useState<signupInput>({
    name: "",
    email: "",
    password: "",
  });
  const [SignInInputs,setSignInInputs] = useState<signinInput>({
    email:"",
    password:""
  })
  const [loading,setLoading] = useState(false)
  async function sendReqSignup() {
    setLoading(true)
    if(loading){
      toast.loading("Signing Up")
    }
    try {
      const response = await axios.post(`${BACKEND_URL}/api/v1/user/signup`,SignUpInputs);
    const jwt = response.data.jwt;
    // console.log(jwt)
    localStorage.setItem("token",jwt)
    // console.log(response)
    localStorage.setItem("UserName",response.data.userName)
    // setLoading(true)
    if(response.data.jwt){
      toast.success('Successfully Signed up');
        navigate("/blogs")
    }
   
    
    } catch (error) {
      
    //  console.log(error)

     const err = error as Error
     console.log(err.message)
     if(err.message == "Network Error"){
      toast.error("Network Problem")
      return
      }
        if(err.message == "Request failed with status code 409"){
          toast.error("Email Already Exist")
          return
        }
        if(err.message == "Request failed with status code 404"){
          toast.error("Server Problem")
          return
        }
      
        toast.error("Invalid Credentials")
        
    }finally{
      setLoading(false)
    }

  }
  async function sendReqSignin() {
    setLoading(true)
    
    try {
      const response = await axios.post(`${BACKEND_URL}/api/v1/user/signin`,SignInInputs);
    const jwt = response.data.jwt;
    localStorage.setItem("token",jwt)
    localStorage.setItem("UserName",response.data.userName)
    if(response.data.jwt){
      toast.success('Successfully Signed up');
        navigate("/blogs")
    }
    } catch (error) {
      const err = error as Error
      console.log(err.message)
      // console.log(error)
     
      if(err.message == "Request failed with status code 411"){
        toast.error("Invalid Credentials!")
        return
      }
      if(err.message == "Request failed with status code 404"){
        toast.error("Incorrect Password")
        return
      }
      if(err.message == "Request failed with status code 403"){
        toast.error("Email Doesn't Exist")
        return
      }
      
    }finally{
      setLoading(false)
    }

  }
  return (
    <div className="h-screen flex flex-col justify-center  w-[100%]  items-center  ">
      
      <div className=" w-[80%] bg-white rounded-lg py-5 px-8 md:p-10  xl:w-[30%] lg:w-[45%] md:w-[60%]">
      <div className={`top-[10%] left-[4%]  inline-block ${type =="signin"? "left-[0%]" : null}`}>
      <BackButton toWhere={"/"} />
      </div>
      <div className={`text-3xl md:text-4xl text-center font-semibold font-sans mb-3`}>
        {type === "signup" ? "Join Blogs" : "Welcome Back"}
      </div>
      <div className="md:text-sm text-[0.8rem] text-center font-sans text-gray-500 ">
       {type === "signup" ? "Already have an account ?" : "Don't have an account ?"  } 
        <Link to={type === "signup" ? "/signin" : "/signup"}>
          <span className="underline pl-2 underline-offset-3 cursor-pointer">
          {type === "signup" ? "Sign In" : "Sign Up"  } 
          </span>
        </Link>
      </div>
      <div className="mt-5">
        {
          type === "signup" ? <><LabelledInputs
          label={"Username"}
          placeHolder="Enter Username"
          type="text"
          onChange={(e) => {
            setSignUpInputs({ ...SignUpInputs, name: e.target.value });
          }}
        />
        <LabelledInputs
          label={"Email"}
          placeHolder="Enter Email"
          type="email"
          onChange={(e) => {
            setSignUpInputs({ ...SignUpInputs, email: e.target.value });
          }}
        />
        <LabelledInputs
          label={"Password"}
          placeHolder="Enter Password"
          type="password"
          onChange={(e) => {
            setSignUpInputs({ ...SignUpInputs, password: e.target.value });
          }}
        />
        
        <Button type={type}  onClick={sendReqSignup} className={loading ? "bg-gray-800 cursor-not-allowed text-white" : ""} isLoading={loading}   /></> : <>
        
        <LabelledInputs
          label={"Email"}
          placeHolder="Enter Email"
          type="email"
          onChange={(e) => {
            setSignInInputs({ ...SignInInputs, email: e.target.value });
          }}
        />
        <LabelledInputs
          label={"Password"}
          placeHolder="Enter Password"
          type="password"
          onChange={(e) => {
            setSignInInputs({ ...SignInInputs, password: e.target.value });
          }}
        />
        <Button type={type}  onClick={sendReqSignin} className={loading ? "bg-gray-800 cursor-not-allowed text-white" : ""} isLoading={loading}  />
        </>
        }
      </div>
      </div>
    </div>
  );
}

export default Auth;
