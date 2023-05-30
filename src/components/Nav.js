import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <Link  to='/'> home </Link>
      <Link to ='/About'> About</Link>
      <Link to='/Contact'> Contact</Link>
    </div>
  )
}

export default Navbar
