import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Blog from './pages/Blog'
import Login from './pages/Login'
import Contact from './pages/Contact'
import Register from './pages/Register'
import Details from './pages/Details'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/details' element={<Details />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
