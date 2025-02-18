
// Auth.tsx
import { Link } from "react-router-dom";
import LabelledInputs from "./LabelledInputs";
import { useState } from "react";
import { signinInput, signupInput } from "@shrinivas_2708/medium-common";
import Button from "./Button";
import BackButton from "./BackButton";
import { useAuth } from "../context/authContext";

interface AuthProps {
  type: "signin" | "signup";  // Making the type prop more specific
}

function Auth({ type }: AuthProps) {
  const { signin, signup } = useAuth();
  const [SignUpInputs, setSignUpInputs] = useState<signupInput>({
    name: "",
    email: "",
    password: "",
  });
  const [SignInInputs, setSignInInputs] = useState<signinInput>({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);

  async function handleSignup() {
    setLoading(true);
    try {
      await signup(SignUpInputs.name || "", SignUpInputs.email || "", SignUpInputs.password || "");
    } catch (error: unknown) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  async function handleSignin() {
    setLoading(true);
    try {
      await signin(SignInInputs.email, SignInInputs.password);
    } catch (error: unknown) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="h-screen flex flex-col justify-center w-[100%] items-center">
      <div className="w-[80%] bg-white rounded-lg py-5 px-8 md:p-10 xl:w-[30%] lg:w-[45%] md:w-[60%]">
        <div className={`top-[10%] left-[4%] inline-block ${type === "signin" ? "left-[0%]" : ""}`}>
          <BackButton toWhere="/" />
        </div>
        <div className={`text-3xl md:text-4xl text-center font-semibold font-sans mb-3`}>
          {type === "signup" ? "Join Blogs" : "Welcome Back"}
        </div>
        <div className="md:text-sm text-[0.8rem] text-center font-sans text-gray-500">
          {type === "signup" ? "Already have an account?" : "Don't have an account?"}
          <Link to={type === "signup" ? "/signin" : "/signup"}>
            <span className="underline pl-2 underline-offset-3 cursor-pointer">
              {type === "signup" ? "Sign In" : "Sign Up"}
            </span>
          </Link>
        </div>
        <div className="mt-5">
          {type === "signup" ? (
            <>
              <LabelledInputs
                label="Username"
                placeHolder="Enter Username"
                type="text"
                onChange={(e) => setSignUpInputs({ ...SignUpInputs, name: e.target.value })}
              />
              <LabelledInputs
                label="Email"
                placeHolder="Enter Email"
                type="email"
                onChange={(e) => setSignUpInputs({ ...SignUpInputs, email: e.target.value })}
              />
              <LabelledInputs
                label="Password"
                placeHolder="Enter Password"
                type="password"
                onChange={(e) => setSignUpInputs({ ...SignUpInputs, password: e.target.value })}
              />
              <Button
                type={type}
                onClick={handleSignup}
                className={loading ? "bg-gray-800 cursor-not-allowed text-white" : ""}
                isLoading={loading}
              />
            </>
          ) : (
            <>
              <LabelledInputs
                label="Email"
                placeHolder="Enter Email"
                type="email"
                onChange={(e) => setSignInInputs({ ...SignInInputs, email: e.target.value })}
              />
              <LabelledInputs
                label="Password"
                placeHolder="Enter Password"
                type="password"
                onChange={(e) => setSignInInputs({ ...SignInInputs, password: e.target.value })}
              />
              <Button
                type={type}
                onClick={handleSignin}
                className={loading ? "bg-gray-800 cursor-not-allowed text-white" : ""}
                isLoading={loading}
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Auth;