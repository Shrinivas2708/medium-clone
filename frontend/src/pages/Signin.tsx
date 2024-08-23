import Auth from "../components/Auth";
import { Footer } from "../layouts/Footer";
// import { HomeFooter } from "./Home";


function Signin() {
  return (
    <div className="bg-[#F7F4ED]">
      <div>
      <Auth type="signin" />
      </div>
     <Footer />
    </div>
  );
}

export default Signin;
