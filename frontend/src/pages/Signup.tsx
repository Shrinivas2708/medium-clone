import Auth from "../components/Auth";

import { Quote } from "../components/Quote";

function Signup() {
  return (
    <div className="md:grid grid-cols-2">
      <Auth type="signup" />
      <Quote />
    </div>
  );
}

export default Signup;
