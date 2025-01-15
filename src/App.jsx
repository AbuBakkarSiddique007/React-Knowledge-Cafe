import './App.css'

import Header from './components/Header/Header'
import Blogs from './components/Blogs/Blogs'
import BookMarks from './components/BookMarks/BookMarks'

function App() {

  return (
    <>
      <Header></Header>

      <main className='md:flex border-2 border-green-600'>
        <Blogs></Blogs>
        <BookMarks></BookMarks>
      </main>
    </>
  )
}

export default App
