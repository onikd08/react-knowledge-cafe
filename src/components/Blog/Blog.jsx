import PropTypes from "prop-types";

const Blog = ({ blog }) => {
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
      <p className="text-blue-500 underline mt-4 cursor-pointer">
        Mark as read
      </p>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
};

export default Blog;
