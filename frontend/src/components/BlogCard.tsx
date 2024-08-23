import { Link } from "react-router-dom";
import Avatar from "./Avatar";

interface BlogCardTypes {
  authorName: string;
  title: string;
  content: string;
  publishedDate: string;
  id:number
}
function BlogCard({
  authorName,
  title,
  content,
  publishedDate,
  id
}: BlogCardTypes) {
    const isContentHigh = content.length > 100;
    const wordCount =  content.split(/\s+/).length;
  return (
    <Link to={`/blog/${id}`}>
    <div className=" cursor-pointer bg-white p-4 border-solid border-b-[1px] border-slate-200 font-sans w-screen max-w-screen-sm rounded-xl my-2 ">
      <div className="flex py-2">
        {<Avatar authorName={authorName} />}
        <div className="font-light flex text-sm items-center pl-2">
          {authorName}
          <div className="pl-1">
            <Circle />
          </div>
        </div>
        <div className="pl-2 text-gray-400 text-xs font-extralight flex items-center">
          {publishedDate}
        </div>
      </div>
      <div className="font-semibold text-xl">{title}</div>
      <div className="text-md text-slate-400 font-[350] py-1">
        {content.slice(0, 100) } <span className="font-semibold ">{isContentHigh ? "..." : null }</span>
      </div>
      <div className="text-xs font-light text-slate-600">
        {Math.ceil(wordCount/200)} min read
      </div>
    </div>
    </Link>
  );
}

function Circle() {
  return <div className="w-1 h-1 rounded-full bg-slate-400"></div>;
}
export default BlogCard;

