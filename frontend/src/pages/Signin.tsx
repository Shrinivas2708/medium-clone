import Auth from "../components/Auth";
import BackButton from "../components/BackButton";
import { Quote } from "../components/Quote";

function Signin() {
  return (
    <div className="md:grid grid-cols-2">
      <div>
      <div className="absolute top-[5%] left-[4%]">
      <BackButton toWhere={"/"}/>
      </div>
      <Auth type="signin" />
      </div>
      <Quote />
    </div>
  );
}

export default Signin;
