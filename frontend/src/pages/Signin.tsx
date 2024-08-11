import Auth from "../components/Auth";
import { Quote } from "../components/Quote";

function Signin() {
  return (
    <div className="md:grid grid-cols-2">
      <Auth type="signin" />
      <Quote />
    </div>
  );
}

export default Signin;
