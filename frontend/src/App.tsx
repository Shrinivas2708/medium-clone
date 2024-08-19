import {  Routes , Route, BrowserRouter } from 'react-router-dom'
import './App.css'
import 'react-toastify/dist/ReactToastify.css';
import Signin from './pages/Signin'
import Signup from './pages/Signup'
import Blog from './pages/Blog'
import Blogs from './pages/Blogs'
import Home from './pages/Home'
import Publish from './components/Publish'


function App() {


  return (
    <>
     <BrowserRouter> 

     <Routes>
      <Route index element={<Home/>} />
      <Route path='/signin'   element={<Signin />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/blogs" element={<Blogs />} />
      <Route path="/blog/:id" element={<Blog />} />
      <Route path='/publish' element={<Publish />}/>
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
