import Auth from "../components/Auth";
import BackButton from "../components/BackButton";

import { Quote } from "../components/Quote";

function Signup() {
  
  return (
    <div className="md:grid grid-cols-2 ">
       <div className="absolute top-[10%] left-[4%]">
      <BackButton toWhere={"/"}/>
      </div>
      <Auth type="signup" />
      <Quote />
    </div>
  );
}

export default Signup;
