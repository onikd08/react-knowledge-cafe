import PropTypes from "prop-types";

const Bookmarks = ({ bookmarks, totalTime }) => {
  return (
    <div className="md:w-1/3">
      <div>
        <div className="text-center border py-5 mb-5 border-[#6047EC] bg-[#6047ec1a] rounded-xl">
          <h3 className="text-xl font-semibold text-[#6047EC]">
            Spent time on reading: {totalTime} min
          </h3>
        </div>
      </div>
      <div className="bg-slate-100 p-7 rounded-xl">
        <h3 className="text-2xl mb-4">Bookmarked Blogs: {bookmarks.length}</h3>
        {bookmarks.map((bookmark_title, idx) => (
          <div key={idx} className="p-5 bg-white mb-5 rounded-lg">
            <p className="font-semibold">{bookmark_title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

Bookmarks.propTypes = {
  bookmarks: PropTypes.array.isRequired,
  totalTime: PropTypes.number.isRequired,
};
export default Bookmarks;
