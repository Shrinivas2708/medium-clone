import AppBar from "../components/AppBar"
import BlogCard from "../components/BlogCard"
import { useBlogs } from "../hooks"

function Blogs() {
  const {loading , blogs} = useBlogs()
  if(loading){
    return <div>Loading...</div>
  }
  
  return <div>
    <AppBar />
    <div className="flex justify-center">
    <div className=" ">
  {
    blogs.map((blog,index)=>{
      return <BlogCard key={index} authorName={blog.author.name} title={blog.title} content={blog.content} id={blog.id} publishedDate="2nd Aug 2023" />
    })
  }
  </div>
  </div>
  </div>
}

export default Blogs