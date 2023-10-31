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
  return (
    <div>
      <h2 className="text-3xl">Total Blogs: {blogs.length}</h2>
    </div>
  );
};

export default Blogs;
