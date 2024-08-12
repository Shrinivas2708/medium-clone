import Auth from "../components/Auth";
import BackButton from "../components/BackButton";
import { Quote } from "../components/Quote";

function Signin() {
  return (
    <div className="md:grid grid-cols-2">
      <div>
      <BackButton/>
      <Auth type="signin" />
      </div>
      <Quote />
    </div>
  );
}

export default Signin;
