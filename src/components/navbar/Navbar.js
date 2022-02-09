import React, { useState } from 'react'
import './NavbarStyles.css'
import { SiDatabricks } from 'react-icons/si'
import { FaBars, FaTimes } from 'react-icons/fa'

const Navbar = () => {
  const [nav, setNav] = useState(false)

  const handleNav = () => setNav(!nav)

  return (
    <div className='navbar'>
      <div className='container'>
        <div className='logo'>
          <SiDatabricks className='icon' />
          <h1 className='logo-heading'>Hypothetical Medical</h1>

        </div>
        <ul className={nav ? 'nav-menu active' : 'nav-menu'}>
          <li><a href='/'>Home</a></li>
          <li><a href='/review'>Reviews</a></li>
          <li><a href='/database'>Database</a></li>
          <li><a href='/'>Contact</a></li>
          <button>Reviews</button>
        </ul>
        <div className='hamburger' onClick={handleNav}>
          {!nav ? (<FaBars className="icon" />) : (<FaTimes className="icon" />) }
        </div>
      </div>
    </div>
  )
}

export default Navbar
