import { useState } from 'react'
import './App.css'
import Header from './component/Header/Header'
import Blogs from './component/Blogs/Blogs'
import Bookmarks from './component/Bookmarks/Bookmarks'

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);

  const handleAddbookmarks = blog => {
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks)
  }

  const hanldeReadingMarks = (time, id) => {
    // console.log('marks as reading');
    const newReadingTime = readingTime + time;
    setReadingTime(newReadingTime);

    const reamingBookMarks = bookmarks.filter(bookmark => bookmark.id !== id);
    setBookmarks(reamingBookMarks)
  }

  return (
    <>
      <Header></Header>
      <div className='md:flex max-w-7xl mx-auto'>
        <Blogs handleAddbookmarks={handleAddbookmarks} hanldeReadingMarks={hanldeReadingMarks}></Blogs>
        <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
      </div>

    </>
  )
}

export default App
