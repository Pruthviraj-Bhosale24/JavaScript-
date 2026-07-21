import React from 'react'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Services from './Service'
import '../App.css'

const Navbar = () => {
  return (
    <BrowserRouter>
  
  <nav className="bg-orange-100 shadow-md p-4 ">
    <div className="max-w-6xl mx-auto flex justify-between items-center">
      <h1 className="text-3xl font-bold text-amber-800"> Linkcode</h1>

      <ul className="flex gap-8 text-lg">
        <li className="hover:text-orange-600 "><a href="/">Home</a> </li>
        <li className="hover:text-orange-600 "><a href="/about">About</a></li>
        <li className="hover:text-orange-600 "><a href="/contact">Contact</a></li>
        <li className="hover:text-orange-600 "><a href="/service">Service</a></li>
      </ul>
    </div>
  </nav>
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/service' element={<Services/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default Navbar
