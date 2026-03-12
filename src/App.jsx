import { Route } from 'react-router';
import './App.css'
import { RouterProvider } from "react-router/dom";
import abcd from './components/Router/Router';
import User from './components/User/User';
import Form from './components/Form/Form';





function App() {

  return (
    <>
            <RouterProvider router={abcd}/>


      <User/>

      <Form />

      
    </>
  )
}

export default App
