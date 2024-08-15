import { useEffect, useState } from "react";
import axios  from "axios";
import { BACKEND_URL } from "../config";
interface UseBlogReturn  {
    loading: boolean;
    blog: Blog | undefined;
  };

interface Blogs {
    "content":string,
    "id":number,
    "title":string,
    "author":{
        "name":string
    }
}
export interface Blog {
    "content":string,
    "id":string,
    "title":string,
    "authorId":number,
    "aunthorName":string
}

export const useBlogs = () => {
    const [loading,setLoading] = useState(true)
    const [blogs, setBlogs] = useState<Blogs[]>([])
    useEffect(()=>{
        // const storedBulkBlogs = sessionStorage.getItem("BulkBlogs")
        // if(storedBulkBlogs) {
        //     setBlogs(JSON.parse(storedBulkBlogs))
        //     setLoading(false)
        //     return
        // } //This is great but i want realtime thing like whenever someone creates a new blog and it gets updated in database i want a user on /blogs page to get the latest blog that is a network request should go and get data ... but in this case the data is stored in session so until i close this and start a new session it won't get updated........
        try {
            axios.get(`${BACKEND_URL}/api/v1/blog/bulk`,{
                headers:{
                    Authorization:localStorage.getItem("token")
                }
            })
            .then(response=>{
                // console.log(blogs)
                setBlogs(response.data)
                setLoading(false)
                // console.log(JSON.stringify(response.data))
                // sessionStorage.setItem("BulkBlogs",JSON.stringify(response.data))
            })
        } catch (error) {
            console.log(error)
            setLoading(false)
        }
    },[])
    return {
        loading,
        blogs
    }
} 
 export const useBlog = ({ id }: { id: string }): UseBlogReturn => {
    const [loading, setLoading] = useState(true);
    const [blog, setBlog] = useState<Blog | undefined>(undefined);
  
    useEffect(() => {
      const loadedBlog = sessionStorage.getItem(id);
      if (loadedBlog) {
        setBlog(JSON.parse(loadedBlog));
        setLoading(false);
        return;
      } else {
        try {
          axios
            .get(`${BACKEND_URL}/api/v1/blog/${id}`, {
              headers: {
                Authorization: localStorage.getItem('token') ,
              },
            })
            .then((response) => {
              setBlog(response.data);
              sessionStorage.setItem(response.data.id, JSON.stringify(response.data)); //i can use localstorage here but i don't want to fill the cache of the user and make things slow so better to use session storage....
              setLoading(false);
            });
        } catch (error) {
          console.log(error);
        }
      }
    }, [id]);
  
    return {
      loading,
      blog,
    };
  };