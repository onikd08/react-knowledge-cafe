import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const res = await fetch("blog.json");
      const data = await res.json();
      setBlogs(data);
    };
    loadData();
  }, []);
  return (
    <div className="w-2/3">
      <h2 className="text-3xl">Total Blogs: {blogs.length}</h2>
      {blogs.map((blog) => (
        <Blog blog={blog} key={blog.id}></Blog>
      ))}
    </div>
  );
};

export default Blogs;
