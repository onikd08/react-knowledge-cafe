import { useEffect, useState } from "react";

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
  return <div>Total Blogs: {blogs.length}</div>;
};

export default Blogs;
