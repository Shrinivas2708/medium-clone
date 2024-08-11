import ExpandedBlog from "../components/ExpandedBlog";
import { useBlog } from "../hooks";
import { useParams } from "react-router-dom";

function Blog() {
    const { id } = useParams();
    const { loading, blog } = useBlog({
        id: String(id)
    });
    if (loading) {
        return <div>Loading...</div>;
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