import React from 'react'
import { useLoaderData } from 'react-router'

function Team() {
    let data = useLoaderData();
  return (
    <div>
      <h1>{data.name}</h1>
    </div>
  )
}

export default Team
