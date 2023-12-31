import { useState } from "react";
import Blogs from "./components/Blogs/Blogs";
import Bookmarks from "./components/Bookmarks/Bookmarks";
import Header from "./components/Header/Header";

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [totalTime, setTotalTime] = useState(0);

  const handleMarkAsRead = (readingTime) => {
    setTotalTime(totalTime + readingTime);
  };

  const handleBookmark = (bookmark_title) => {
    if (bookmarks.includes(bookmark_title)) {
      return;
    }
    setBookmarks([...bookmarks, bookmark_title]);
  };
  return (
    <div className="container mx-auto">
      <Header></Header>
      <main className="md:flex md:gap-6 mt-6">
        <Blogs
          handleBookmark={handleBookmark}
          handleMarkAsRead={handleMarkAsRead}
        ></Blogs>
        <Bookmarks bookmarks={bookmarks} totalTime={totalTime}></Bookmarks>
      </main>
    </div>
  );
}

export default App;
