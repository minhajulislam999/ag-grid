import React, { useContext } from 'react'
import { Link } from 'react-router'
import {UserContext} from "../userContext/UseContext"
function Navbar() {
  const {name,age} = useContext(UserContext)
  return (
    <div>
      <h1>hello: {name}, {age}</h1>

        <Link to="/" >Home</Link>
         <Link to = "/about" >About</Link>
      <Link to="/contact" >Contact</Link>
      <Link to="/team/dhaka" >Team Dhaka</Link>
      <Link to="/form">Form</Link>
    </div>
  )
}

export default Navbar
