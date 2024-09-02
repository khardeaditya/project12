import React from 'react'
import "./Nav.css"
import { Link } from 'react-router-dom'
function Nav() {
  return (
    <div>
  

    <div className='Nav-link'>
      <p>AdityaKharde</p>
      <Link to='/' className='link'> Home </Link>
      <Link to='/about' className='link'> About </Link>
      <Link to='/contact' className='link'> Contact </Link>

    </div>
  
    </div>
  )
}

export default Nav
