import PropTypes from "prop-types";
import { useState } from "react";

const Blog = ({ blog, handleBookmark, handleMarkAsRead }) => {
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [markedRead, setMarkedRead] = useState(false);
  const {
    author,
    author_img,
    cover,
    posted_date,
    reading_time,
    title,
    hashtags,
  } = blog;
  return (
    <div className="border-b-2 pb-5 mb-10">
      <img className="w-full" src={cover} alt="" />
      <div className="flex justify-between items-center mt-7">
        <div className="flex gap-2 justify-center items-center">
          <img className="w-14 h-14" src={author_img} alt="" />
          <div>
            <h4 className="text-xl">{author}</h4>
            <small className="text-gray-400">{posted_date}</small>
          </div>
        </div>
        <div>
          <small className="text-gray-400">{reading_time} min read</small>
          <button
            onClick={() => {
              handleBookmark(title);
              setIsBookmarked(true);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill={isBookmarked ? "blue" : "none"}
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5 inline text-gray-400"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
              />
            </svg>
          </button>
        </div>
      </div>
      <h2 className="text-3xl mt-5">{title}</h2>
      <p className="mt-5">
        {hashtags.map((tag, idx) => (
          <span className="text-gray-400 mr-2" key={idx}>
            #{tag}
          </span>
        ))}
      </p>
      <button
        onClick={() => {
          handleMarkAsRead(reading_time);
          setMarkedRead(true);
        }}
        className={`underline mt-4 cursor-pointer ${
          markedRead && "text-blue-500"
        }`}
        disabled={markedRead}
      >
        Mark as read
      </button>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handleBookmark: PropTypes.func.isRequired,
  handleMarkAsRead: PropTypes.func.isRequired,
};

export default Blog;
