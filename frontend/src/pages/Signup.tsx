import Auth from "../components/Auth";
import { HomeFooter } from "./Home";
// import BackButton from "../components/BackButton";

// import { Quote } from "../components/Quote";

function Signup() {
  
  return (
    <div className=" bg-[#F7F4ED]">
       
      <Auth type="signup" />
      {/* <Quote /> */}
      <HomeFooter />
    </div>
  );
}

export default Signup;
