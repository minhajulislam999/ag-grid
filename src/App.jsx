import { Route } from 'react-router';
import './App.css'
import { RouterProvider } from "react-router/dom";
import abcd from './components/Router/Router';
import User from './components/User/User';
import Form from './components/Form/Form';
import { UserContext } from './components/userContext/UseContext';





function App() {

  return (
    <UserContext.Provider value={{name: "rahim", age: 22}}>
            <RouterProvider router={abcd}/>
      <User/>

      <Form />

      
    </UserContext.Provider>
  )
}

export default App
