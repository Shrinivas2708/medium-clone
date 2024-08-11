import ExpandedBlog from "../components/ExpandedBlog"
import { useBlog } from "../hooks"
import { useParams } from "react-router-dom"

function Blog() {
    const { id } = useParams()
    const {loading,blog} = useBlog({
        id: String(id) 
    })
    if(loading){
        return <div>Loading...</div>
    }
    console.log(blog)
  return <div>

    <ExpandedBlog blog={blog} />
  </div>
}

export default Blog