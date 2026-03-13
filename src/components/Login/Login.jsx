import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router'

function Login() {

    const naviget = useNavigate();

    const [value, setValue] = useState("");
    function handleClick1(){
        if(value === "admin"){
            naviget("/")
        }
    }
    // function handleClick() {
    //     naviget("/")
    // }
    return (
        <div>
            <input value={value}  onChange={(e) => setValue(e.target.value)} className='bg-gray-500 mb-7 mt-5'></input>
            <br></br>

            <button className='btn btn-secondary' onClick={handleClick1}>Login</button>
        </div>
    )
}

export default Login
