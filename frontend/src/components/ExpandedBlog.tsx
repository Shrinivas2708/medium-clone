import Skeleton from "react-loading-skeleton";
import { Blog } from "../hooks";
import AppBar from "./AppBar";
import Avatar from "./Avatar";

function ExpandedBlog({ blog }: { blog: Blog }) {
  return (
    <div>
      <AppBar />
      <div className="flex justify-center pt-10 ">
        <div className="grid grid-cols-12 px-20    w-full font-sans max-w-screen-xl ">
          <div className="col-span-8">
            <div className="text-4xl font-bold">{blog.title}</div>
            <div className="text-slate-400 pt-2">Posted On 2nd Aug 2024</div>
            <div className="pt-4 ">{blog.content}</div>
          </div>
          <div className="col-span-4  ">
            <div>Author</div>
            <div className="flex items-center gap-2 mt-2">
              {<Avatar authorName={blog.aunthorName} /> || (
                <Skeleton className="w-8 h-8 inline-block" circle={true} />
              )}
              <div className="font-medium text-lg">
                {blog.aunthorName || "Anonymus"}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExpandedBlog;
