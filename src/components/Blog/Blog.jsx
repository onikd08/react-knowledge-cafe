import PropTypes from "prop-types";

const Blog = ({ blog }) => {
  const {
    author,
    author_img,
    cover,
    hashtags,
    id,
    posted_date,
    reading_time,
    title,
  } = blog;
  return (
    <div>
      <img src={cover} alt="" />
      <img src={author_img} alt="" />
      <h4 className="text-xl">{author}</h4>
      <small>{posted_date}</small>
      <small>{reading_time}</small>
      <h2 className="text-3xl">{title}</h2>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
};

export default Blog;
