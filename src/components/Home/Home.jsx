import React from 'react'
import { Link, Outlet, useNavigate } from 'react-router'

const Home = () => {
            const naviget = useNavigate()

            function handleClick() {
            naviget("/about")
            
          }

  return (
    <div>
      <h1>স্বাগতম আমার Website এ</h1>
      <Link to="/about" >About</Link>
      <Link to="/contact" >Contact</Link>
      <Link to="/team/dhaka" >Team Dhaka</Link>
     

      <button className='btn bg-primary' onClick={handleClick}>About</button>
      <Outlet />
    </div>
  )
}

export default Home
