import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";

import PropTypes from "prop-types";

const Blogs = ({ handleBookmark, handleMarkAsRead }) => {
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
    <div className="md:w-2/3">
      {blogs.map((blog) => (
        <Blog
          handleMarkAsRead={handleMarkAsRead}
          handleBookmark={handleBookmark}
          blog={blog}
          key={blog.id}
        ></Blog>
      ))}
    </div>
  );
};

Blogs.propTypes = {
  handleBookmark: PropTypes.func.isRequired,
  handleMarkAsRead: PropTypes.func.isRequired,
};

export default Blogs;
