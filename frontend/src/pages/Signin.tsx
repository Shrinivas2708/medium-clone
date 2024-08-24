import Auth from "../components/Auth";
import { HomeFooter } from "../layouts/HomeFooter";
// import { HomeFooter } from "./Home";

function Signin() {
  return (
    <div className="bg-[#F7F4ED]">
      <div>
        <Auth type="signin" />
      </div>
      <HomeFooter />
    </div>
  );
}

export default Signin;
