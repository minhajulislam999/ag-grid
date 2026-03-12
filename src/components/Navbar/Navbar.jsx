import React from 'react'
import { Link } from 'react-router'

function Navbar() {
  return (
    <div>
        <Link to="/" >Home</Link>
         <Link to = "/about" >About</Link>
      <Link to="/contact" >Contact</Link>
      <Link to="/team/dhaka" >Team Dhaka</Link>
    </div>
  )
}

export default Navbar
