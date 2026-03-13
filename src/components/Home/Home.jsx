import React from 'react'
import { Link, Outlet, useNavigate } from 'react-router'
import Navbar from '../Navbar/Navbar'
import { useContext } from 'react'
import { UserContext } from '../userContext/UseContext'

const Home = () => {
            const naviget = useNavigate()
            const {name} = useContext(UserContext);

            function handleClick() {
            naviget("/about")
            
          }

  return (
    <div>
            <Navbar />

      <h1>স্বাগতম আমার Website এ</h1>
      <p>{name}</p>

      <button className='btn bg-primary' onClick={handleClick}>About</button>
      <Outlet />
    </div>
  )
}

export default Home
