import { useEffect, useState } from "react";
import axios  from "axios";
import { BACKEND_URL } from "../config";

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
    "id":number,
    "title":string,
    "authorId":number,
    "author":{
        "name":string
    },
    "aunthorName":string
}

export const useBlogs = () => {
    const [loading,setLoading] = useState(true)
    const [blogs, setBlogs] = useState<Blogs[]>([])
    useEffect(()=>{
        axios.get(`${BACKEND_URL}/api/v1/blog/bulk`,{
            headers:{
                Authorization:localStorage.getItem("token")
            }
        })
        .then(response=>{
            // console.log(blogs)
            setBlogs(response.data)
            setLoading(false)
        })
    },[])
    return {
        loading,
        blogs
    }
}


export const useBlog = ({id}:{id:string})=>{
    const [loading,setLoading] = useState(true)
    const [blog, setBlog] = useState<Blog[]>([])
    // console.log(id)
    useEffect(()=>{
        try {
            axios.get(`${BACKEND_URL}/api/v1/blog/${id}`,{
                headers:{
                    Authorization:localStorage.getItem("token")
                }
            })
            .then(response=>{
                // console.log(blogs)
                // console.log(response)
                setBlog(response.data)
                setLoading(false)
            })
        } catch (error) {
            console.log(error)
        }
    },[id])
    return {
        loading,
        blog
    }
}