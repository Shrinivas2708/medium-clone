import {  Routes , Route, BrowserRouter } from 'react-router-dom'
import './App.css'
import 'react-toastify/dist/ReactToastify.css';

import { Blog,Home,Blogs,Signin,Signup } from './pages/index'
import Publish from './components/Publish'
// import AppBar from './components/AppBar';
import Header from './layouts/Header';


function App() {


  return (
    <>
     <BrowserRouter> 
    <Header />
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
