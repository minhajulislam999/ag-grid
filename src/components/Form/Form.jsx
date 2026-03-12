import React, { useState } from 'react'

function Form() {
    const [value, setValue] =useState("");

    function handleClick(){
      console.log(value)
    }

  return (
    <div>
      <input className='bg-gray-400' value={value}   onChange= {(e)=> setValue(e.target.value) } />

      <button className='btn btn-primary' onClick={handleClick}>submit</button>
    </div>
  )
}

export default Form
