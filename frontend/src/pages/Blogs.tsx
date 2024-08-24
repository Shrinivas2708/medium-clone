import AppBar from "../components/AppBar";
import BlogCard from "../components/BlogCard";
import SkeletonLoading from "../components/SkeletonLoading";
import { useBlogs } from "../hooks";

import "react-loading-skeleton/dist/skeleton.css";
// import { Footer } from "../layouts/HomeFooter";
function Blogs() {
  const { loading, blogs } = useBlogs();
  if (loading) {
    return (
      <div className="overflow-x-hidden ">
        <AppBar />
        <div className="flex flex-col mt-5 gap-6">
          <SkeletonLoading />
          <SkeletonLoading />
          <SkeletonLoading />
          <SkeletonLoading />
          <SkeletonLoading />
          <SkeletonLoading />
          <SkeletonLoading />
          <SkeletonLoading />
        </div>
      </div>
    );
  }
  function formatDate(dateString:string) {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.toLocaleString('default', { month: 'short' });
    
    // Add ordinal suffix to the day
    const ordinalSuffix = (n:number) => {
      const s = ["th", "st", "nd", "rd"];
      const v = n % 100;
      return n + (s[(v - 20) % 10] || s[v] || s[0]);
    };
  
    return `${ordinalSuffix(day)} ${month}`;
  }
  return (
    <div>
      <AppBar />
      <div className="flex justify-center bg-backgroundcolor">
        <div className="mt-2 ">
          {blogs.reverse().map((blog, index) => {
          //  const date = 
          //  console.log(date)
            return (
              
                <BlogCard
                  key={index}
                  authorName={blog.author.name}
                  title={blog.title}
                  content={blog.content}
                  id={blog.id}
                  publishedDate={formatDate(blog.publishedDate.split("T")[0]) }
                  css={index == 0 ? "mt-6" : ""}
                />
              
            );
          })}
        </div>
        {/* <Footer /> */}
      </div>
    </div>
  );
}

export default Blogs;
