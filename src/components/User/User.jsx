import React, { useEffect, useState } from 'react'

function User() {
    const [user, setUser] = useState();

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users/1")
        .then(res => res.json())
        .then(data => setUser(data))
    },[])
  return (
    <div>
      <h1>{user?.name}</h1>
    </div>
  )
}

export default User
