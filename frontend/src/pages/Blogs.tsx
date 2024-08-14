import AppBar from "../components/AppBar";
import BlogCard from "../components/BlogCard";
import SkeletonLoading from "../components/SkeletonLoading";
import { useBlogs } from "../hooks";

import "react-loading-skeleton/dist/skeleton.css";
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

  return (
    <div>
      <AppBar />
      <div className="flex justify-center">
        <div className=" ">
          {blogs.map((blog, index) => {
            return (
              <BlogCard
                key={index}
                authorName={blog.author.name}
                title={blog.title}
                content={blog.content}
                id={blog.id}
                publishedDate="2nd Aug 2023"
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Blogs;
