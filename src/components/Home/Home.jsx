import React from 'react'
import { Outlet } from 'react-router'

const Home = () => {
  return (
    <div>
      <h1>স্বাগতম আমার Website এ</h1>
      <Outlet />
    </div>
  )
}

export default Home
