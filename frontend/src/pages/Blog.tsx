import Skeleton from "react-loading-skeleton";
import ExpandedBlog from "../components/ExpandedBlog";
import { useBlog } from "../hooks";
import { useParams } from "react-router-dom";
import AppBar from "../components/AppBar";

function Blog() {
    const { id } = useParams();
    const { loading, blog } = useBlog({
        id: String(id)
    });
    if(loading){
        return <div>
          
      <AppBar />
      <div className="flex justify-center pt-10 ">
      <div className="grid grid-cols-12 px-20    w-full font-poppins max-w-screen-xl ">
        <div className="col-span-8">
         
          <Skeleton className="w-[50%] h-[10%]"/>
          {/* </div> */}
          <div className="text-slate-400 pt-2">
          <Skeleton className="w-[40%]" />
          </div>
          <div className="pt-4">
          <Skeleton className="w-[80%] h-[40%]" count={10} />
          </div>
        </div>
        <div className="col-span-4  ">
        Author
          
        <div >
            <Skeleton className="w-8 h-8 inline-block" circle={true}  />
            <Skeleton className="w-[30%] inline-block" />
    
        </div>
        
          
          
          {/* </div> */}
        
        </div>
      </div>
      </div>
    </div>
       
      }

    if (!blog) {
        throw new Error("Blog not found"); // or return a 404 page
    }

    console.log(blog);
    return (
        <div>
            <ExpandedBlog blog={blog} /> {/* blog is now guaranteed to be defined */}
        </div>
    );
}

export default Blog;