import {  Routes , Route, HashRouter } from 'react-router-dom'
import './App.css'
import Signin from './pages/Signin'
import Signup from './pages/Signup'
import Blog from './pages/Blog'
import Blogs from './pages/Blogs'
import Home from './pages/Home'

function App() {


  return (
    <>
     <HashRouter> 
     <Routes>
      <Route index element={<Home/>} />
      <Route path='/signin'   element={<Signin />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/blogs" element={<Blogs />} />
      <Route path="/blog/:id" element={<Blog />} />
     </Routes>
     </HashRouter>
    </>
  )
}

export default App
