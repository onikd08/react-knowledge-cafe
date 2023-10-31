import PropTypes from "prop-types";

const Bookmarks = ({ bookmarks }) => {
  return (
    <div className="md:w-1/3 bg-slate-100 p-7">
      <h3 className="text-2xl mb-4">Bookmarked Blogs: {bookmarks.length}</h3>
      {bookmarks.map((bookmark_title, idx) => (
        <div key={idx} className="p-5 bg-white mb-5 rounded-lg">
          <p className="font-semibold">{bookmark_title}</p>
        </div>
      ))}
    </div>
  );
};

Bookmarks.propTypes = {
  bookmarks: PropTypes.array.isRequired,
};
export default Bookmarks;
