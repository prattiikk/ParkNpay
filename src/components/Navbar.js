import React from 'react'
import {Link} from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
      <nav className="navbar">
        <div className="navbar__logo"><Link to="/" className='Link'>Pay<span>N</span>park</Link></div>
        <div className="navbar__menu">
          <ul>
            <li><Link to="/" className='Link'>home</Link></li>
            <li><Link to="/how" className='Link'>How it works?</Link></li>
            <li><Link to="/find" className='Link'>Find a spot!</Link></li>
            <li><Link to="/login" className='Link'><span>Login</span></Link></li>
            <li><Link to="/signup" className='Link'>sign up</Link></li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Navbar