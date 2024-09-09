import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FaBars, FaBlogger, FaEnvelope, FaFacebook, FaHouse, FaTableColumns, FaXmark } from "react-icons/fa6";

const Navbar = () => {
  const [isMenuOpen, setIsManuOpen] = useState(false)

  const toggleMenu = () => {
    setIsManuOpen(!isMenuOpen);
  }
    const navItems =[
        {path:"/",link:"Home"},
        {path:"/services",link:"Services"},
        {path:"/about",link:"About"},
        {path:"/blogs",link:"Blogs"},
        {path:"/contact",link:"Contact"},
    ]
  return (
    <header className='bg-black text-white top-0 left-0 right-0' >
        <nav className='px-4 py-4 max-w-7xl mx-auto flex justify-between items-center'>
            <a href="/" className='text-xl font-bold text-white'>Nitto <span className='text-orange-400'>blog</span></a>

            {/* nav items for lg divices */}

            <ul className='md:flex gap-12 text-lg hidden'>
              {
                navItems.map(({path,link})=> <li className='text-white' key={path}>
                  <NavLink className={({ isActive, isPending})=> isActive ? "active" : isPending ? "pending" : ""} to={path}>{link}</NavLink>
                </li>)
              }
            </ul>

            {/* manu icons */}

            <div className='text-white lg:flex gap-4 items-center hidden'>
              {/* <a href="/" className='hover:text-orange-400'><FaHouse/></a>
              <a href="/" className='hover:text-orange-400'><FaTableColumns/></a>
              <a href="/" className='hover:text-orange-400'><FaFacebook/></a>
              <a href="/" className='hover:text-orange-400'><FaBlogger/></a>
              <a href="/" className='hover:text-orange-400'><FaEnvelope/></a> */}

              <button className='bg-orange-400 px-6 py-2 font-medium rounded hover:bg-white hover:text-orange-600 transition-all duration-200 ease-in'>Login</button>
            </div>

            {/* menu mobile */}

            <div className='md:hidden'>
              <button onClick={toggleMenu} className='cursor-pointer'>
                {
                  isMenuOpen ? <FaXmark className='w-5 h-5'/> : <FaBars className='w-5 h-5'/>
                }
              </button>
            </div>
        </nav>

        {/* manu items for mobile */}
        <div>
        <ul className={`md:hidden gap-12 text-lg block space-y-4 px-4 py-6 mt-14 bg-white ${isMenuOpen? "fixed top-0 left-0 w-full transition-all ease-out duration-150" : "hidden"}`}>
              {
                navItems.map(({path,link})=> <li className='text-black' key={path}>
                  <NavLink onClick={toggleMenu} to={path}>{link}</NavLink>
                </li>)
              }
            </ul>
        </div>

    </header>

  )
}

export default Navbar
