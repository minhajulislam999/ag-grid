import React from 'react'
import { Link, Outlet, useNavigate } from 'react-router'
import Navbar from '../Navbar/Navbar'

const Home = () => {
            const naviget = useNavigate()

            function handleClick() {
            naviget("/about")
            
          }

  return (
    <div>
            <Navbar />

      <h1>স্বাগতম আমার Website এ</h1>

      <button className='btn bg-primary' onClick={handleClick}>About</button>
      <Outlet />
    </div>
  )
}

export default Home
