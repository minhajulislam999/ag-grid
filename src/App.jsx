import { Route } from 'react-router';
import './App.css'
import { RouterProvider } from "react-router/dom";
import abcd from './components/Router/Router';
import User from './components/User/User';





function App() {

  return (
    <>
            <RouterProvider router={abcd}/>


      <User/>

      
    </>
  )
}

export default App
