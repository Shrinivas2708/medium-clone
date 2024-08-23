import AppBar from "../components/AppBar";
import BlogCard from "../components/BlogCard";
import SkeletonLoading from "../components/SkeletonLoading";
import { useBlogs } from "../hooks";

import "react-loading-skeleton/dist/skeleton.css";
import { Footer } from "../layouts/Footer";
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
      <div className="flex justify-center bg-backgroundcolor">
        <div className="mt-2 ">
          {blogs.reverse().map((blog, index) => {
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
        <Footer />
      </div>
    </div>
  );
}

export default Blogs;
