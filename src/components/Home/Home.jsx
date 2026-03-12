import React from 'react'
import { Link, Outlet } from 'react-router'

const Home = () => {
  return (
    <div>
      <h1>স্বাগতম আমার Website এ</h1>
      <Link to="/about" >About</Link>
      <Link to="/contact" >Contact</Link>
      <Link to="/team/dhaka" >Team Dhaka</Link>
      <Outlet />
    </div>
  )
}

export default Home
