import './App.css'

import Header from './components/Header/Header'
import Blogs from './components/Blogs/Blogs'
import BookMarks from './components/BookMarks/BookMarks'
import { useState } from 'react'


function App() {

  const [bookmarks, setBookmarks] = useState([])
  const [readingTime, setReadingTime] = useState(0)


  const handleAddToBookmark = blog => {
    // console.log(blog);
    const newBookmarks = [...bookmarks, blog]
    setBookmarks(newBookmarks)
  }

  const handleMarkAsRead = (id, time) => {
    const newReadingTime = readingTime + time;
    setReadingTime(newReadingTime);
  
    // Filter bookmarks to remove the one with the matching id
    const remainingBookmarks = bookmarks.filter(bookmark => bookmark.id !== id);
    setBookmarks(remainingBookmarks);
  };
  


  return (
    <>
      <Header className='max-w-7xl'></Header>

      <main className=' max-w-7xl mx-auto md:flex'>
        <Blogs handleAddToBookmark={handleAddToBookmark}
          handleMarkAsRead={handleMarkAsRead}
        ></Blogs>

        <BookMarks
          bookmarks={bookmarks}
          readingTime={readingTime}

        ></BookMarks>
      </main>
    </>
  )
}



export default App
