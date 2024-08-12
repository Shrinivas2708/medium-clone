import { Link } from "react-router-dom"

function Home() {
  return <div>
    <Link to={"/signup"}>Get Started</Link>
    <br />
    <Link to={"/signin"}>Login</Link>
  </div>
}

export default Home