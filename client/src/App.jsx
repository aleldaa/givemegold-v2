import { useEffect, useState } from 'react'
// import './App.css'
import { Route } from 'react-router'
import { Routes } from 'react-router-dom'
import Home from './components/Home'
import NavBar from './components/NavBar'
import About from './components/About'
import BookUs from './components/BookUs'
import Donate from './components/Donate'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/book-us' element={<BookUs />} />
        <Route path='/donate' element={<Donate />} />
      </Routes>
    </div>
  )
}

export default App
