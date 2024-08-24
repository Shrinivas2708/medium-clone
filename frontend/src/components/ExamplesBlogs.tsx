interface Blogs {
    authorName:string,
  title:string,
  content:string,
  publishedDate:string,
}
const Blog:Blogs = {
    authorName:"User",
    title:"Blog Title",
    content:"Blog Content",
    publishedDate:"2020-01-01"
}
function ExamplesBlogs() {
  return (
    <div>
        {Blog.authorName}
        {Blog.title}
        {Blog.content}
        {Blog.publishedDate}
    </div>
  )
}

export default ExamplesBlogs