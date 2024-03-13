import { useEffect, useState } from "react";
import SignleBlog from "./SignleBlog";

const Blogs = ({ handleAddbookmarks, hanldeReadingMarks }) => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('blogs.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])
    return (
        <div className="md:w-2/3">
            <h2 className="font-bold text-4xl text-center py-8">Our Blogs</h2>
            <div className="">
                {
                    blogs.map(blog => <SignleBlog key={blog.id} blog={blog} handleAddbookmarks={handleAddbookmarks} hanldeReadingMarks={hanldeReadingMarks}></SignleBlog>)
                }
            </div>
        </div>
    );
};

export default Blogs;