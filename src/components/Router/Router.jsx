import React from 'react'
import { createBrowserRouter } from "react-router";
import Home from '../Home/Home';
import About from '../About/About';
import Contact from '../Contact/Contact';



      const Router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
    children: [
        {path: "about", Component: About},
        {path: "contact", Component: Contact},
    ]
  },
]);
  

export default Router
